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

"""Test example app."""
from __future__ import absolute_import, print_function

import json

from flask import Flask, url_for


def test_pdf_get_text(app, text_page):
    with app.test_request_context():
        with app.test_client() as client:
            res = client.get(
                '/api-pdf/text/data/files/document.pdf/?page_nr=1')
            assert res.status_code == 200
            assert (res.data).decode() == text_page


def test_pdf_get_text_no_page(app, text_page):
    with app.test_request_context():
        with app.test_client() as client:
            res = client.get('/api-pdf/text/data/files/document.pdf/')
            assert res.status_code == 200
            if text_page in (res.data).decode():
                assert True


def test_pdf_get_text_find_page(app):
    with app.test_request_context():
        with app.test_client() as client:
            res = client.get(
                '/api-pdf/find/data/files/document.pdf/' +
                '?page_nr=1&string=Multivio is')
            assert res.status_code == 200
            data = json.loads(res.get_data(as_text=True))
            assert data == [{'BBox': {
                'x1': 124.80199999999999,
                'x2': 171.2336935600001,
                'y1': 287.6239556,
                'y2': 296.4707444},
                'page': 1,
                'text': 'Multivio is an Internet-based ' +
                'application for browsing and accessing digital doc-'}]


def test_pdf_get_text_find(app):
    with app.test_request_context():
        with app.test_client() as client:
            res = client.get(
                '/api-pdf/find/data/files/document.pdf/' +
                '?string=Multivio is')
            assert res.status_code == 200
            data = json.loads(res.get_data(as_text=True))
            assert data == [
                {
                    'BBox': {
                        'x1': 124.80199999999999,
                        'x2': 171.2336935600001,
                        'y1': 287.6239556,
                        'y2': 296.4707444},
                    'page': 1,
                    'text': 'Multivio is an Internet-based ' +
                    'application for browsing and accessing digital doc-'},
                {
                    'BBox': {
                        'x1': 124.80199999999999,
                        'x2': 172.08051456000007,
                        'y1': 150.6679556,
                        'y2': 159.51474439999998
                    },
                    'page': 3,
                    'text': "Multivio is an open-source project. " +
                    "It relies on an open and modular architec-"
                }
            ]


def test_pdf_get_toc(app, json_toc_res):
    with app.test_request_context():
        with app.test_client() as client:
            res = client.get(
                '/api-pdf/toc/data/files/document.pdf/')
            assert res.status_code == 200
            assert res.data


def test_pdf_get_metadata(app):
    with app.test_request_context():
        with app.test_client() as client:
            res = client.get(
                '/api-pdf/metadata/data/files/document.pdf/')
            assert res.status_code == 200
            data = json.loads(res.get_data(as_text=True))
            assert data == {'creator': 'Miguel Moreira',
                            'nativeSize': [[595.2760000000001, 841.89], {}],
                            'fileSize': 70909, 'mime': 'application/pdf',
                            'nPages': 3,
                            'title': 'Multivio: Project description'}


def test_pdf_get_sizes(app):
    with app.test_request_context():
        with app.test_client() as client:
            res = client.get(
                '/api-pdf/sizes/data/files/document.pdf/')
            assert res.status_code == 200
            data = json.loads(res.get_data(as_text=True))
            assert data == {'height': 841, 'width': 595}


def test_pdf_get_sizes_page(app):
    with app.test_request_context():
        with app.test_client() as client:
            res = client.get(
                '/api-pdf/sizes/data/files/document.pdf/?page_nr=1')
            assert res.status_code == 200
            data = json.loads(res.get_data(as_text=True))
            assert data == {'height': 841, 'width': 595}


def test_pdf_get_download(app):
    with app.test_request_context():
        with app.test_client() as client:
            res = client.get(
                '/api-pdf/download/data/files/document.pdf/')
            assert res.status_code == 200
            assert len(res.data) > 100


def test_pdf_get_render(app):
    with app.test_request_context():
        with app.test_client() as client:
            res = client.get(
                '/api-pdf/render/data/files/document.pdf/?page_nr=1&angle=0')
            assert res.status_code == 200
            assert len(res.data) > 100


def test_pdf_get_render_sizes(app):
    with app.test_request_context():
        with app.test_client() as client:
            res = client.get(
                '/api-pdf/render/data/files/document.pdf/' +
                '?max_width=200&max_height=200')
            assert res.status_code == 200
            assert len(res.data) > 100


def test_pdf_get_indexing(app):
    with app.test_request_context():
        with app.test_client() as client:
            res = client.get(
                '/api-pdf/indexing/data/files/document.pdf/')
            assert res.status_code == 200
            assert (res.data).decode() == "NotImplemented"


def test_pdf_get_indexing_page(app):
    with app.test_request_context():
        with app.test_client() as client:
            res = client.get(
                '/api-pdf/indexing/data/files/document.pdf/?page_nr=1')
            assert res.status_code == 200
            assert (res.data).decode() == "NotImplemented"


def test_pdf_get_toc_error(app):
    with app.test_request_context():
        with app.test_client() as client:
            res = client.get(
                '/api-pdf/toc/data/files/document_no.pdf/')
            assert res.status_code == 404


def test_pdf_get_metadata_error(app):
    with app.test_request_context():
        with app.test_client() as client:
            res = client.get(
                '/api-pdf/metadata/data/files/document_no.pdf/')
            assert res.status_code == 404


def test_pdf_get_text_find_error(app):
    with app.test_request_context():
        with app.test_client() as client:
            assert True
            res = client.get('/api-pdf/find/data/files/document_no.pdf/')
            assert res.status_code == 404


def test_pdf_get_sizes_error(app):
    with app.test_request_context():
        with app.test_client() as client:
            res = client.get(
                '/api-pdf/sizes/data/files/document_no.pdf/')
            assert res.status_code == 404


def test_pdf_get_indexing_error(app):
    with app.test_request_context():
        with app.test_client() as client:
            res = client.get(
                '/api-pdf/indexing/data/files/document_no.pdf/')
            assert res.status_code == 404


def test_pdf_get_download_error(app):
    with app.test_request_context():
        with app.test_client() as client:
            res = client.get(
                '/api-pdf/download/data/files/document_no.pdf/')
            assert res.status_code == 404


def test_pdf_get_render_error(app):
    with app.test_request_context():
        with app.test_client() as client:
            res = client.get(
                '/api-pdf/render/data/files/document_no.pdf/')
            assert res.status_code == 404
