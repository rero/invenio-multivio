# -*- coding: utf-8 -*-
# Image.open(path)
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

"""Generic browser and visualizer for digital objects."""

import json
import os

import poppler._mypoppler as poppler
import pytest


@pytest.yield_fixture()
def simple_document_path():
    """Get path for tests."""
    path = os.path.join(os.path.dirname(__file__), '../data/document.pdf')
    yield path


@pytest.yield_fixture()
def document_no_toc_path():
    """Get path for tests."""
    path = os.path.join(os.path.dirname(__file__), '../data/test.pdf')
    yield path


@pytest.yield_fixture()
def json_toc_res():
    """Get json toc for tests."""
    path = os.path.join(os.path.dirname(__file__), '../data/toc.json')
    with open(path) as f:
        data = json.load(f)
    yield data


@pytest.yield_fixture()
def text_page():
    """Get text for tests."""
    path = os.path.join(os.path.dirname(__file__), '../data/text.txt')
    with open(path, 'r') as f:
        data = f.read().replace('\n', ' ')
    yield data
