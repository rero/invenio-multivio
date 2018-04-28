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
import subprocess

from flask import Blueprint, jsonify, render_template
from flask_babelex import gettext as _
from pdfminer.converter import PDFPageAggregator
from pdfminer.layout import LAParams, LTFigure, LTText, LTTextBox, LTTextLine
from pdfminer.pdfinterp import PDFPageInterpreter, PDFResourceManager
from pdfminer.pdfparser import PDFDocument, PDFNoOutlines, PDFParser
from PIL import Image

from ..config import SITE_ROOT


# ---------------------------- Class ---------------------------------------
class PDF(object):
    """Class PDF."""

    def __init__(self, path_pdf, page_pdf=1):
        """Initialize the object."""
        self.path = path_pdf
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
        fp = open(SITE_ROOT+'/../samples-tests/'+self.path, 'rb')
        parser = PDFParser(fp)
        self.doc = PDFDocument()
        parser.set_document(self.doc)
        self.doc.set_parser(parser)
        self.doc.initialize('')
        rsrcmgr = PDFResourceManager()
        laparams = LAParams()
        self.device = PDFPageAggregator(rsrcmgr, laparams=laparams)
        self.interpreter = PDFPageInterpreter(rsrcmgr, self.device)

    def get_text_page(self):
        """Process page to get text contained in the document."""
        response = ""
        for pageNumber, page in enumerate(self.doc.get_pages()):
            if pageNumber == self.p:
                self.interpreter.process_page(page)
                layout = self.device.get_result()
                for lt_obj in layout:
                    if isinstance(lt_obj, LTTextBox) or \
                            isinstance(lt_obj, LTTextLine):
                        response += lt_obj.get_text()
        return response

    def find_text_page(self, string):
        """Process page to find string contained in the document."""
        self.stringToFind = string.lower()
        self.stringToFind = self.stringToFind.replace("  ", " ")
        for pageNumber, page in enumerate(self.doc.get_pages()):
            if self.p == -1:
                self.interpreter.process_page(page)
                layout = self.device.get_result()
                self.parse_layout(layout, pageNumber)
            elif pageNumber == self.p:
                self.interpreter.process_page(page)
                layout = self.device.get_result()
                self.parse_layout(layout, self.p)
        json_response = json.dumps(self.matches)
        return json_response

    def get_toc(self):
        """Process page to get TOC of the document."""
        try:
            response = {}
            count = 1
            outlines = self.doc.get_outlines()
            for (level, title, dest, a, se) in outlines:
                response[count] = {"level": str(level), "title": title}
                count += 1
                json_response = json.dumps(response)
            return json_response
        except PDFNoOutlines:
            response["Error"] = "No TOC in PDF"
            json_response = json.dumps(response)
            return json_response

    def parse_layout(self, layout, pageNumber):  # TODO search only 1 word
        """Function to recursively parse the layout tree."""
        for lt_obj in layout:
            if isinstance(lt_obj, LTTextBox):
                self.parse_layout(lt_obj, pageNumber)
            elif isinstance(lt_obj, LTTextLine) or isinstance(lt_obj, LTText):
                if self.stringToFind in lt_obj.get_text().lower():
                    temp = ""
                    bboxTemp = []
                    tmpListe = []
                    bboxList = []
                    isFirsCaracter = True
                    for char in lt_obj:
                        if char.get_text() in " .,:!?;“()}{[]\n":  # TODO compl
                            if temp != "":
                                tmpListe.append(temp)
                                bboxList.append(bboxTemp)
                            temp = ""
                            bboxTemp = []
                            isFirsCaracter = True
                        else:
                            temp += char.get_text().lower()
                            if isFirsCaracter is True:
                                bboxTemp = list(char.bbox)
                                isFirsCaracter = False
                            else:
                                bboxTemp[2] = char.bbox[2]
                    # TODO only search the first on the line
                    index = tmpListe.index(self.stringToFind.replace(" ", ""))
                    self.matches[0].append(bboxList[index])
                    self.matches[1].append(pageNumber+1)
            elif isinstance(lt_obj, LTFigure):
                self.parse_layout(lt_obj, pageNumber)  # Recursive
