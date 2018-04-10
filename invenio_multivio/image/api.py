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

from io import BytesIO

from flask import Blueprint, jsonify, render_template, send_file
from flask_babelex import gettext as _
from PIL import Image


# ---------------------------- Class ---------------------------------------
class ImageProcessor():
    """Class ImageProcessor."""

    def __init__(self, pil_img):
        """Initializing the object."""
        self.pil_img = pil_img
        self.byte_io = BytesIO()

    def set_image(self, pil_img):
        """Set the image."""
        self.pil_img = pil_img

    def rotate(self, angle):
        """Rotate the image."""
        self.pil_img = self.pil_img.rotate(angle, expand=True)

    def transform(self):
        """Transform the image to format BytesIO."""
        self.pil_img.save(self.byte_io, 'JPEG')
        self.byte_io.seek(0)

    def thumbnail(self, size):
        """Create the thumbnail."""
        self.pil_img.thumbnail(size, Image.ANTIALIAS)

    def resize(self, size):
        """Resize the image."""
        self.pil_img = self.pil_img.resize((size), Image.CUBIC)

    def crop(self, left, upper, right, lower):
        """Crop the image."""
        self.pil_img = self.pil_img.crop((left, upper, right, lower))

    def json(self):
        """Rotate json form object."""
        return self.__dict__
