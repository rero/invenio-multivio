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
import os
import signal
import subprocess
import time
from os.path import abspath, dirname, join

import pytest
from flask import Flask, url_for


def test_xml_get_metadata(app):
    with app.test_request_context():
        with app.test_client() as client:
            res = client.get('/api-xml/metadata/data/xml/doppler.xml/')
            assert res.status_code == 200
            data = json.loads(res.data)
            assert data['creator'] == ['Comte, David', 'Kandaswamy, Djano']
            assert data['language'] == "fre"
            assert data['mime'] == "text/xml"
            assert data['mime_docs'] == ["application/pdf"]
            assert data['title'] == "Implémentation embarquée d'un "\
                "signal Doppler"


def test_xml_get_physical(app):
    with app.test_request_context():
        with app.test_client() as client:
            res = client.get('/api-xml/physical/data/xml/doppler.xml/')
            assert res.status_code == 200
            data = json.loads(res.data)
            assert data == [{'label': 'Texte intégral',
                             'url': 'data/files/doppler.pdf/'}]


def test_xml_get_metadata_not_found(app):
    with app.test_request_context():
        with app.test_client() as client:
            res = client.get('/api-xml/metadata/data/xml/error.xml/')
            assert res.status_code == 404


def test_xml_get_physical_not_found(app):
    with app.test_request_context():
        with app.test_client() as client:
            res = client.get('/api-xml/physical/data/xml/error.xml/')
            assert res.status_code == 404
