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

import sys
from io import BytesIO

from flask import Blueprint, jsonify, render_template, send_file
from flask_babelex import gettext as _
from PIL import Image

from ..config import SITE_ROOT
from .api import ImageProcessor

# ---------------------------- Blueprint --------------------------------------
views = Blueprint(
    'image_views',
    __name__,
    url_prefix="/image"
)

# ---------------------------- API Routes API ---------------------------------


@views.route('/', methods=['GET'])
def get_image():
    """Retrive image example."""
    img = ImageProcessor(
        Image.open(SITE_ROOT+'/../samples-tests/2048x1280.jpg'))
    img.transform()
    return send_file(img.byte_io, mimetype='image/jpeg')


@views.route('/rotate/<angle>', methods=['GET'])
def rotate_to_left(angle):
    """Rotate image to left."""
    img = ImageProcessor(
        Image.open(SITE_ROOT+'/../samples-tests/2048x1280.jpg'))
    img.rotate(int(angle))
    img.transform()
    return send_file(img.byte_io, mimetype='image/jpeg')


@views.route('/thumbnail/', methods=['GET'])
def thumbnail():
    """Retrive thimbnail of image."""
    size = 128, 128
    img = ImageProcessor(
        Image.open(SITE_ROOT+'/../samples-tests/2048x1280.jpg'))
    img.thumbnail(size)
    img.transform()
    return send_file(img.byte_io, mimetype='image/jpeg')


@views.route('/resize/<resize_dimension>/', methods=['GET'])
def resize(resize_dimension):
    """Retrive the image resized."""
    resize_arr = resize_dimension.split('and')
    size = int(resize_arr[0]), int(resize_arr[1])
    img = ImageProcessor(
        Image.open(SITE_ROOT+'/../samples-tests/2048x1280.jpg'))
    img.resize(size)
    img.transform()
    return send_file(img.byte_io, mimetype='image/jpeg')


@views.route('/crop/', methods=['GET'])
def crop():
    """Retrive the image crepped."""
    img = ImageProcessor(
        Image.open(SITE_ROOT+'/../samples-tests/2048x1280.jpg'))
    img.crop(0, 0, 100, 100)
    img.transform()
    return send_file(img.byte_io, mimetype='image/jpeg')
