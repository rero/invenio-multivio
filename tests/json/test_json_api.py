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

import os
import signal
import subprocess
import time
from os.path import abspath, dirname, join

import pytest
from flask import Flask, url_for


def test_json_get_json(app):
    with app.test_request_context():
        with app.test_client() as client:
            res = client.get(url_for('json_views.get_json'))
            assert res.status_code == 200
            assert res.data == b'{"key": "value"}'


def test_json_get_marc(app):
    with app.test_request_context():
        with app.test_client() as client:
            res = client.get(url_for('json_views.get_marc'))
            assert res.status_code == 200


def test_json_get_obkect(app):
    with app.test_request_context():
        with app.test_client() as client:
            res = client.get(url_for('json_views.get_json_from_object'))
            assert res.status_code == 200
            assert res.data == b'{"pil_img": "test_pil", "byte_io": "test_io"}'
