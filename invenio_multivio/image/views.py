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

from flask import Blueprint, abort, current_app, jsonify, request, send_file
from PIL import Image as PIL_Image

from .api import ImageProcessor

# ---------------------------- Blueprint --------------------------------------
views = Blueprint(
    'image_views',
    __name__,
    url_prefix="/api-image",
)

# ---------------------------- API Routes API ---------------------------------


@views.route('/render/<path:path>', strict_slashes=False, methods=['GET'])
def get_image(path):
    """Render image."""
    file_to_path = current_app.config.get('MULTIVIO_FILENAME_TO_PATH')
    angle = request.args.get('angle')
    max_width = request.args.get('max_width')
    max_height = request.args.get('max_height')
    path = file_to_path(path)
    if not path:
        abort(404)
    img = ImageProcessor(PIL_Image.open(path), path)
    if max_width and max_height:
        img.thumbnail((int(max_width), int(max_height)))
    if angle:
        img.rotate(int(angle))
    return send_file(img.jpeg, mimetype='image/jpeg')


@views.route('/sizes/<path:path>', strict_slashes=False, methods=['GET'])
def get_sizes(path):
    """Retrive sizes image."""
    file_to_path = current_app.config.get('MULTIVIO_FILENAME_TO_PATH')
    path = file_to_path(path)
    if not path:
        abort(404)
    img = ImageProcessor(PIL_Image.open(path), path)
    sizes = img.get_sizes()
    return jsonify(sizes)


@views.route('/metadata/<path:path>', strict_slashes=False, methods=['GET'])
def get_metadata(path):
    """Retrive metedata of the image."""
    file_to_path = current_app.config.get('MULTIVIO_FILENAME_TO_PATH')
    path = file_to_path(path)
    if not path:
        abort(404)
    img = ImageProcessor(PIL_Image.open(path), path)
    metadata = img.get_metadata()
    return jsonify(metadata)


@views.route('/download/<path:path>', strict_slashes=False, methods=['GET'])
def download(path):
    """Download the image."""
    file_to_path = current_app.config.get('MULTIVIO_FILENAME_TO_PATH')
    path = file_to_path(path)
    if not path:
        abort(404)
    return send_file(path, mimetype='image/jpeg', as_attachment=True)
