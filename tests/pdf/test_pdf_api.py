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


def test_document_no_toc(document_no_toc_path, json_toc_res):
    """Test search capabilities."""
    pdf = PDF(document_no_toc_path)
    pdf.load()
    resp = pdf.get_toc()
    if resp is None:
        assert True
    else:
        assert False


def test_document_metadata(simple_document_path):
    """Test search capabilities."""
    pdf = PDF(simple_document_path)
    pdf.load()
    resp = pdf.get_metadata()
    assert resp == {'creator': 'Miguel Moreira',
                    'nativeSize': ((595.2760000000001, 841.89), {}),
                    'fileSize': 70909, 'mime': 'application/pdf',
                    'nPages': 3,
                    'title': 'Multivio: Project description'}


def test_document_sizes(simple_document_path):
    """Test search capabilities."""
    pdf = PDF(simple_document_path, 1)
    pdf.load()
    resp = pdf.get_sizes()
    assert resp == {'height': 841, 'width': 595}


def test_document_indexing(simple_document_path):
    """Test search capabilities."""
    pdf = PDF(simple_document_path, 1)
    pdf.load()
    resp = pdf.get_indexing()
    assert resp == "NotImplemented"


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
    # cannot check extact value as it depends on the poppler version
    assert n_bytes > 100
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
    assert resp == [{'BBox': {
        'x1': 124.80199999999999,
        'x2': 171.2336935600001,
        'y1': 287.6239556,
        'y2': 296.4707444},
        'page': 1,
        'text': 'Multivio is an Internet-based ' +
        'application for browsing and accessing digital doc-'}]


def test_document_find_max_result(simple_document_path):
    """Test search capabilities."""
    pdf = PDF(simple_document_path, 1)
    pdf.load()
    resp = pdf.find_text_page('a')
    assert len(resp) == 127


def test_document_find_simple(simple_document_path):
    """Test search capabilities."""
    pdf = PDF(simple_document_path, 1)
    pdf.load()
    resp = pdf.find_text_page('Multivio')
    assert resp == [
        {'BBox': {
            'x1': 196.189,
            'x2': 254.84358934,
            'y1': 165.65651239999994,
            'y2': 180.96100299999992},
            'page': 1,
            'text': "Multivio: Project description"},
        {'BBox': {
            'x1': 124.80199999999999,
            'y1': 287.6239556,
            'x2': 161.88678224000006,
            'y2': 296.4707444},
            'page': 1, 'text': 'Multivio is an Internet-based application ' +
            'for browsing and accessing digital doc-'}]
