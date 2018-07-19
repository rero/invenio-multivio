# -*- coding: utf-8 -*-
#
# This file is part of Invenio.Blueprint
# Copyright (C) 2018 RERO.
#
# Invenio is free software; you can redistribute it
# and/or modify it under the terms of the GNU General Public License as
# published by the Free Software Foundation; either version 2 of the
# License, or (at your option) any later version.
#
# Invenio is distributed in the hope that it will be
# useful, but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
# General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with Invenio; if not, write to the
# Free Software Foundation, Inc., 59 Temple Place, Suite 330, Boston,
# MA 02111-1307, USA.
#
# In applying this license, RERO does not
# waive the privileges and immunities granted to it by virtue of its status
# as an Intergovernmental Organization or submit itself to any jurisdiction.
"""Generic browser and visualizer for digital objects."""
# ---------------------------- Modules ---------------------------------------
from __future__ import absolute_import, print_function

import json
import os
import re
import string
import subprocess
from io import BytesIO

from flask import Blueprint, jsonify, render_template
from flask_babelex import gettext as _
from PIL import Image as PIL_Image
from poppler import _mypoppler as poppler

from ..image.api import ImageProcessor

# ---------------------------- Class ---------------------------------------


class PDF():
    """Class PDF."""

    def __init__(self, path, page_nr=None):
        """Initialize the object."""
        self.path = path
        self.page_nr = int(page_nr) if page_nr is not None else None
        self.res_Search = []
        self.doc = None
        self.byte_io = BytesIO()
        self.pil_image = None
        self.rendered_page = None
        self.results_found = 0

    def load(self):
        """Loading the pdf."""
        self.doc = poppler.Document(self.path)

    def get_scale(self):
        """Loading the pdf."""
        return self.rendered_page.getScale()

    def get_width(self):
        """Process page to get width of the document."""
        return int(self.doc.getPageMediaWidth(self.page_nr))

    def get_height(self):
        """Process page to get height of the document."""
        return int(self.doc.getPageMediaHeight(self.page_nr))

    def get_sizes(self):
        """Process page to get sizes of the document."""
        size = {
            'height': self.get_height(),
            'width': self.get_width()
        }
        return size

    @property
    def jpeg(self):
        """Get the image as JPEG."""
        self.pil_image.save(self.byte_io, 'jpeg')
        self.byte_io.seek(0)
        return self.byte_io

    def rotate(self, angle):
        """Rotate the image."""
        self.pil_image = self.pil_image.rotate(angle, expand=True)

    def render_page(self, max_width, max_height):
        """Render the document."""
        self.rendered_page = self.doc.get_image(self.page_nr, max_width,
                                                max_height)
        width = self.rendered_page.getWidth()
        height = self.rendered_page.getHeight()
        bitmap = self.rendered_page.getBitmap()
        self.pil_image = PIL_Image.frombytes('RGB', (width, height), bitmap)
        return self.pil_image

    def get_text_page(self):
        """Process page to get text contained in the document."""
        resp = ''
        for p in self.doc:
            if(p.page_no == self.page_nr or self.page_nr is None):
                for f in p:
                    for b in f:
                        for l in b:
                            resp += l.text + ' '
        return resp

    def find_text_page(self, stringToFind):
        """Process page to find text contained in the document."""
        return self._parse_layout(stringToFind.lower())

    def get_toc(self):
        """Process page to get TOC of the document."""
        toc = self.doc.getToc()
        if len(toc) < 1:
            return None
        self._add_file_index(toc)
        return toc

    def get_indexing(self):
        """Process page to get Size of the document."""
        return "NotImplemented"

    def get_metadata(self):
        """Get pdf infos."""
        metadata = {}
        infos = self.doc.getInfo()
        metadata['title'] = ""
        metadata['creator'] = [""]
        try:
            metadata['title'] = infos['Title']
        except KeyError:
            metadata['title'] = 'PDF Document'
            pdf_file_parts = self.path.split('/')
            if len(pdf_file_parts) > 0:
                if re.match('.*?\.pdf', pdf_file_parts[-1]):
                    metadata['title'] = pdf_file_parts[-1]
        try:
            metadata['creator'] = infos['Author']
        except KeyError:
            pass
        metadata['mime'] = 'application/pdf'
        metadata['nPages'] = self.doc.getNumPages()
        metadata['fileSize'] = os.stat(self.path).st_size
        metadata['nativeSize'] = self._get_native_size()
        return metadata

    def _parse_layout(self, stringToFind):
        """Parse the layout of the page."""
        for p in self.doc:
            if(p.page_no == self.page_nr or self.page_nr is None):
                for f in p:
                    for b in f:
                        for l in b:
                            if stringToFind in l.text.lower():
                                temp = ""
                                bboxTemp = []
                                tmpListe = []
                                bboxList = []
                                isFirsCaracter = True
                                for i in range(len(l.text)):
                                    if ((l.text[i] in string.punctuation) or
                                            (l.text[i] in ' ')):
                                        if temp != "":
                                            tmpListe.append(temp)
                                            bboxList.append(bboxTemp)
                                        temp = ""
                                        bboxTemp = []
                                        isFirsCaracter = True
                                    else:
                                        temp += l.text[i].lower()
                                        if isFirsCaracter is True:
                                            bboxTemp = list(
                                                l.char_bboxes[i].as_tuple()
                                            )
                                            isFirsCaracter = False
                                        else:
                                            bboxTemp[2] = l.char_bboxes[i].x2
                                if temp != "":
                                    tmpListe.append(temp)
                                    bboxList.append(bboxTemp)
                                if ' ' in stringToFind:
                                    words = stringToFind.split(' ')
                                    indices = self._find_sublist(words,
                                                                 tmpListe)
                                    for j in indices:
                                        bboxRes = {
                                            "x1": bboxList[j][0],
                                            "y1": bboxList[j][1],
                                            "x2": bboxList[j+len(words)-1][2],
                                            "y2": bboxList[j][3]
                                        }
                                        self.res_Search.append(
                                            {"BBox": bboxRes,
                                             "page": p.page_no,
                                             "text": l.text})
                                        self.results_found += 1
                                else:
                                    indices = [i for i, s in enumerate(
                                        tmpListe) if stringToFind in s]
                                    for i in indices:
                                        bboxRes = {
                                            "x1": bboxList[i][0],
                                            "y1": bboxList[i][1],
                                            "x2": bboxList[i][2],
                                            "y2": bboxList[i][3]
                                        }
                                        self.res_Search.append(
                                            {"BBox": bboxRes,
                                             "page": p.page_no,
                                             "text": l.text})
                                        self.results_found += 1
                                if self.results_found == 100:
                                    return self.res_Search
        return self.res_Search

    def _find_sublist(self, sub, list):
        """Parse the line to find the occurences."""
        indices = []
        if not list:
            return -1
        if not sub:
            return 0
        first, rest = sub[0], sub[1:]
        pos = 0
        try:
            while True:
                pos = list.index(first, pos) + 1
                if not rest or list[pos:pos+len(rest)] == rest:
                    indices.append(pos - 1)
        except ValueError:
            return indices

    def _add_file_index(self, entries):
        """Recursive function."""
        for entry in entries:
            page_nr = entry['page_number']
            entry['file_position'] = {
                'index': page_nr,
                'path': self.path
            }
            del entry['page_number']
            if 'childs ' in entry:
                self._add_file_index(entry['childs'])

    def _get_native_size(self, index=None):
        """Return the size of the document content."""
        pages = {}
        np = self.doc.getNumPages()
        for page_nr in range(np):
            page_nr += 1
            width = self.doc.getPageMediaWidth(page_nr)
            height = self.doc.getPageMediaHeight(page_nr)
            native_size = (width, height)
            if native_size in pages:
                pages[native_size].append(page_nr)
            else:
                pages[native_size] = [page_nr]
        default_size = max(pages, key=lambda x: len(pages[x]))
        pages.pop(default_size)
        exceptions = {}
        for k, v in pages.items():
            for page_nr in v:
                exceptions[page_nr] = k
        return default_size, exceptions
