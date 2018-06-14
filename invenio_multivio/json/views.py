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

from flask import Blueprint, jsonify, render_template
from flask_babelex import gettext as _
from PIL import Image

from ..config import SITE_ROOT

# --------------------------- Blueprint --------------------------------------
views = Blueprint(
    'json_views',
    __name__,
    url_prefix="/json"
)

# ---------------------------- API Routes -------------------------------------


@views.route('/marc/', methods=['GET'])
def get_marc():
    """Retrive marc in json."""
    with open(SITE_ROOT+'/../samples-tests/data.json', 'rb') as file_json:
        d = json.load(file_json)
        return jsonify(d)


@views.route('/test/', methods=['GET'])
def get_json():
    """Retrive json example."""
    data = {}
    data['key'] = 'value'
    json_data = json.dumps(data)
    return json_data


@views.route('/object/', methods=['GET'])
def get_json_from_object():
    """Retrive json example from object."""
    img = ImageProcessor(None)
    img.byte_io = "test_io"
    img.pil_img = "test_pil"
    json_data = json.dumps(img.json())
    return json_data
