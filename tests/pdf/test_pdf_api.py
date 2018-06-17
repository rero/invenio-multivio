# -*- coding: utf-8 -*-
#
# This file is part of Invenio.
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

"""Test PDF API."""

import json
import os

from invenio_multivio.pdf.api import PDF


def test_document(simple_document_path):
    """Test search capabilities."""
    assert simple_document_path


def test_document_toc(simple_document_path, json_toc_res):
    """Test search capabilities."""
    pdf = PDF(simple_document_path)
    pdf.load()
    resp = pdf.get_toc()
    assert resp == json_toc_res


def test_document_metadata(simple_document_path):
    """Test search capabilities."""
    pdf = PDF(simple_document_path)
    pdf.load()
    resp = pdf.get_metadata()
    assert resp == {'creator': 'Miguel Moreira',
                    'defaultNativeSize': (595.2760000000001, 841.89),
                    'fileSize': 70909, 'mime': 'application/pdf',
                    'nPages': 3,
                    'nativeSize': {},
                    'title': 'Multivio: Project description'}


def test_document_sizes(simple_document_path):
    """Test search capabilities."""
    pdf = PDF(simple_document_path, 1)
    pdf.load()
    resp = pdf.get_sizes()
    assert resp == {'height': 841, 'width': 595}


def test_document_render(simple_document_path):
    """Test search capabilities."""
    pdf = PDF(simple_document_path, 2)
    pdf.load()
    pdf.render_page(pdf.get_width(), pdf.get_height())
    assert pdf
    assert round(pdf.get_scale(), 2) == 1
    assert pdf.get_width() == 595
    assert pdf.get_height() == 841
    n_bytes = len(pdf.jpeg.read())
    assert n_bytes == 65282
    pdf.rotate(90)
    assert pdf.pil_image.size[0] == 841
    assert pdf.pil_image.size[1] == 595


def test_document_text(simple_document_path, text_page):
    """Test search capabilities."""
    pdf = PDF(simple_document_path, 1)
    pdf.load()
    resp = pdf.get_text_page()
    assert resp == text_page


def test_document_find(simple_document_path):
    """Test search capabilities."""
    pdf = PDF(simple_document_path, 1)
    pdf.load()
    resp = pdf.find_text_page(str('Multivio is'))
    assert resp == [[[124.80199999999999, 287.6239556,
                      171.2336935600001, 296.4707444]], [1]]


def test_document_find_simple(simple_document_path):
    """Test search capabilities."""
    pdf = PDF(simple_document_path, 1)
    pdf.load()
    resp = pdf.find_text_page(str('Multivio'))
    assert resp == [[[196.189, 165.65651239999994,
                      254.84358934, 180.96100299999992],
                     [124.80199999999999, 287.6239556,
                      161.88678224000006, 296.4707444]], [1, 1]]
