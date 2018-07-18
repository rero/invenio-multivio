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

"""Tests from api JsonProcessor."""

from invenio_multivio.json.api import JsonProcessor


def test_json(simple_json):
    """Test poppler document creation."""
    assert simple_json


def test_json_metadata(simple_json):
    """Test poppler document creation."""
    json = JsonProcessor(simple_json)
    res = json.get_metadata()
    assert res == {'creator': ['Comte, David', 'Kandaswamy, Djano'],
                   'language': 'fre',
                   'title': "Implémentation embarquée d'un signal Doppler",
                   'mime': 'application/json',
                   'mime_docs': ['application/pdf']}


def test_json_physical(simple_json):
    """Test poppler document creation."""
    json = JsonProcessor(simple_json)
    res = json.get_physical_structure()
    assert res == [
        {'label': 'Texte intégral',
         'url':
         'http://doc.rero.ch/record/309302/files/comte_d_rapport_final.pdf'}]
