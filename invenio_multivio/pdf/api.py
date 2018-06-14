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
import string
import subprocess
from io import BytesIO

from flask import Blueprint, jsonify, render_template
from flask_babelex import gettext as _
from PIL import Image
from poppler import _mypoppler

from ..config import SITE_ROOT
from ..image.api import ImageProcessor

# ---------------------------- Class ---------------------------------------


class PDF(object):
    """Class PDF."""

    def __init__(self, data_pdf, page_pdf=1):
        """Initialize the object."""
        self.data = data_pdf
        self.p = page_pdf
        self.text = None
        self.matches = [[], []]
        self.toc = None
        self.doc = None
        self.device = None
        self.interpreter = None
        self.stringToFind = None

    def loadPDF(self):
        """Loading the pdf."""
        self.doc = _mypoppler.Document(self.data)

    def get_image_pdf(self):
        """Process page to get image of page."""
        return "Not implemented"

    def get_text_page_all(self):
        """Process page to get text contained in the document."""
        return "response"

    def get_text_page_number(self):
        """Process page to get text contained in the document."""
        return "response"

    def find_text_page_all(self, string, number_page):
        """Process page to find string contained in the document."""
        return "json_response"

    def find_text_page_number(self, string, number_page):
        """Process page to find string contained in the document."""
        return "json_response"

    def get_toc(self):
        """Process page to get TOC of the document."""
        return self.doc._getToc()

    def get_size(self):
        """Process page to get Size of the document."""
        return "size"

    def get_indexing(self):
        """Process page to get Size of the document."""
        return "size"

    def get_info(self):
        """Process page to get INFO of the document."""
        return self.doc._getInfo2()

    def parse_layout(self, pageNumber):
        """Process page to parse the layout."""
        for p in self.doc:
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
                                if (l.text[i] in string.punctuation) or (l.text[i] in ' '):
                                    if temp != "":
                                        tmpListe.append(temp)
                                        bboxList.append(bboxTemp)
                                    temp = ""
                                    bboxTemp = []
                                    isFirsCaracter = True
                                else:
                                    temp += l.text[i].lower()
                                    if isFirsCaracter is True:
                                        bboxTemp = list(l.char_bboxes[i].as_tuple())
                                        isFirsCaracter = False
                                    else:
                                        bboxTemp[2] = l.char_bboxes[i].x2
                            if temp != "":
                                tmpListe.append(temp)
                                bboxList.append(bboxTemp)
                            if ' ' in stringToFind:
                                words = stringToFind.split(' ')
                                indices = find_sublist(words, tmpListe)
                                for j in indices:
                                    bboxRes = list([bboxList[j][0], bboxList[j][1],
                                                    bboxList[j+len(words)-1][2], bboxList[j][3]])
                                    res_Search[0].append(bboxRes)   # BBox
                                    res_Search[1].append(p.page_no)
                            else:
                                indices = [i for i, s in enumerate(
                                    tmpListe) if stringToFind in s]
                                for i in indices:
                                    res_Search[0].append(bboxList[i])   # BBox
                                    res_Search[1].append(p.page_no)     # Page

    def find_sublist(sub, list):
        """Process page to parse the layout."""
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
