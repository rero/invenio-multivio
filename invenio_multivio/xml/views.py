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

import json

from flask import Blueprint, abort, current_app, jsonify, render_template
from flask_babelex import gettext as _
from PIL import Image as PIL_Image

from .api import XMLProcessor

# --------------------------- Blueprint --------------------------------------
views = Blueprint(
    'xml_views',
    __name__,
    url_prefix="/api-xml"
)

# ---------------------------- API Routes -------------------------------------


@views.route('/metadata/<path:path>/', methods=['GET'])
def get_metadata(path):
    """Get metadata infos."""
    file_to_path = current_app.config.get('MULTIVIO_FILENAME_TO_PATH')
    path = file_to_path(path)
    if not path:
        abort(404)
    xml = XMLProcessor(path)
    res = xml.get_metadata()
    res["mime"] = "text/xml"
    return jsonify(res)


@views.route('/physical/<path:path>/', methods=['GET'])
def get_physical_structure(path):
    """Get the physical structure ."""
    file_to_path = current_app.config.get('MULTIVIO_FILENAME_TO_PATH')
    path = file_to_path(path)
    if not path:
        abort(404)
    xml = XMLProcessor(path)
    res = xml.get_physical_structure()
    return jsonify(res)
