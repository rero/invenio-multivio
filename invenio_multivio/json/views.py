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
"""Generic browser and visualizer for digital objects."""

# ---------------------------- Modules ---------------------------------------
from __future__ import absolute_import, print_function

from flask import Blueprint, abort, current_app, jsonify
from invenio_pidstore.resolver import Resolver
from invenio_records_files.api import Record

from .api import JsonProcessor

# --------------------------- Blueprint --------------------------------------
views = Blueprint(
    'json_views',
    __name__,
    url_prefix="/api-json"
)

# ---------------------------- API Routes -------------------------------------


@views.route('/<doctype>/<pid>/metadata')
def get_metadata_from_record(doctype, pid):
    """Get metadata infos."""
    # resolver = Resolver(self, pid_type='', object_type='rec', getter=)
    resolver = Resolver(doctype, 'rec', Record.get_record)
    pid, record = resolver.resolve(pid)
    doc = {
        'title': record['title'][0]['main'],
        'language': record['title'][0]['language'],
        'mime': 'application/json'
    }
    for contributor in record.get('contributor', []):
        doc.setdefault('creator', []).append(contributor.get('name'))
    for document in record['document']:
        doc.setdefault('mime_docs', []).append(document.get('mime'))
    return jsonify(doc)


@views.route('/<doctype>/<pid>/physical')
def get_physical_from_record(doctype, pid):
    """Get metadata infos."""
    # resolver = Resolver(self, pid_type='', object_type='rec', getter=)
    resolver = Resolver(doctype, 'rec', Record.get_record)
    pid, record = resolver.resolve(pid)
    return jsonify(record.get('document', []))


@views.route('/metadata/<path:path>', strict_slashes=False, methods=['GET'])
def get_metadata(path):
    """Get metadata infos."""
    file_to_path = current_app.config.get('MULTIVIO_FILENAME_TO_PATH')
    path = file_to_path(path)
    if not path:
        abort(404)
    _json = JsonProcessor(path)
    res = _json.get_metadata()
    return jsonify(res)


@views.route('/physical/<path:path>', strict_slashes=False, methods=['GET'])
def get_physical_structure(path):
    """Get the physical structure ."""
    file_to_path = current_app.config.get('MULTIVIO_FILENAME_TO_PATH')
    path = file_to_path(path)
    if not path:
        abort(404)
    _json = JsonProcessor(path)
    res = _json.get_physical_structure()
    return jsonify(res)
