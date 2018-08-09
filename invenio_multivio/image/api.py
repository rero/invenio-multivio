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

import os
from io import BytesIO

from PIL import Image as PILImage


# ---------------------------- Class ---------------------------------------
class ImageProcessor():
    """Class ImageProcessor."""

    def __init__(self, pil_img, path):
        """Initializing the object."""
        self.path = path
        self.pil_img = pil_img
        self.byte_io = BytesIO()
        self.width = self.pil_img.size[0]
        self.height = self.pil_img.size[1]

    def rotate(self, angle):
        """Rotate the image."""
        self.pil_img = self.pil_img.rotate(angle, expand=True)

    def get_metadata(self):
        """Get image infos."""
        metadata = {}
        metadata['title'] = self.path.split('/')[-1]
        metadata['mime'] = "image/jpeg"
        metadata['fileSize'] = self.get_file_size()
        metadata['nativeSize'] = (self.width, self.height)
        return metadata

    def get_sizes(self):
        """Get the sizes of the image."""
        size = {
            'height': self.height,
            'width': self.width
        }
        return size

    def get_file_size(self):
        """Get image size."""
        return os.stat(self.path).st_size

    @property
    def jpeg(self):
        """Get the image as JPEG."""
        self.pil_img.save(self.byte_io, 'jpeg')
        self.byte_io.seek(0)
        return self.byte_io

    def thumbnail(self, size):
        """Create the thumbnail."""
        self.pil_img.thumbnail(size, PILImage.ANTIALIAS)
