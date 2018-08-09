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

"""Tests of Blueprint image views."""
import json

from flask import url_for


def test_image_get_sizes(app):
    with app.test_request_context():
        with app.test_client() as client:
            res = client.get('/api-image/sizes/data/files/320x200.jpg/')
            assert res.status_code == 200
            data = json.loads(res.get_data(as_text=True))
            assert data == {'height': 200, 'width': 320}


def test_image_get_image_render(app):
    with app.test_request_context():
        with app.test_client() as client:
            res = client.get('/api-image/render/data/files/320x200.jpg/')
            assert res.status_code == 200
            assert len(res.data) > 100


def test_image_get_image_render_angle(app):
    with app.test_request_context():
        with app.test_client() as client:
            res = client.get(
                '/api-image/render/data/files/320x200.jpg/?angle=90')
            assert res.status_code == 200
            assert len(res.data) > 100


def test_image_get_image_render_sizes(app):
    with app.test_request_context():
        with app.test_client() as client:
            res = client.get(
                '/api-image/render/data/files/320x200.jpg/' +
                '?max_width=200&max_height=200')
            assert res.status_code == 200
            assert len(res.data) > 100


def test_image_get_metadata(app):
    with app.test_request_context():
        with app.test_client() as client:
            res = client.get(
                '/api-image/metadata/data/files/320x200.jpg/')
            assert res.status_code == 200
            data = json.loads(res.get_data(as_text=True))
            assert data['fileSize'] == 26909
            assert data['mime'] == "image/jpeg"
            assert data['nativeSize'] == [320, 200]
            assert data['title'] == "320x200.jpg"


def test_image_get_download(app):
    with app.test_request_context():
        with app.test_client() as client:
            res = client.get(
                '/api-image/download/data/files/320x200.jpg/')
            assert res.status_code == 200
            assert len(res.data) > 100


def test_image_get_bad_image_render(app):
    with app.test_request_context():
        with app.test_client() as client:
            res = client.get('/api-image/render/data/files/320x2000.jpg/')
            assert res.status_code == 404


def test_image_get_bad_image_sizes(app):
    with app.test_request_context():
        with app.test_client() as client:
            res = client.get('/api-image/sizes/data/files/320x2000.jpg/')
            assert res.status_code == 404


def test_image_get_bad_metadata(app):
    with app.test_request_context():
        with app.test_client() as client:
            res = client.get(
                '/api-image/metadata/data/files/320x2000.jpg/')
            assert res.status_code == 404


def test_image_get_bad_download(app):
    with app.test_request_context():
        with app.test_client() as client:
            res = client.get(
                '/api-image/download/data/files/320x2000.jpg/')
            assert res.status_code == 404
