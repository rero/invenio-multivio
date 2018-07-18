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

"""Tests from api ImageProcessor."""

from invenio_multivio.image.api import ImageProcessor


def test_image(simple_pil_image):
    """Test poppler document creation."""
    assert simple_pil_image


def test_image_pocessor(simple_pil_image, simple_path_tests):
    """Test poppler document creation."""
    img = ImageProcessor(simple_pil_image, simple_path_tests)
    assert img
    sizes = img.get_sizes()
    assert sizes == {'height': 200, 'width': 320}
    metadata = img.get_metadata()
    assert metadata == {'nativeSize': (320, 200),
                        'fileSize': 26909,
                        'mime': 'image/jpeg',
                        'title': '320x200.jpg'}
    file_size = img.get_file_size()
    assert file_size == 26909
    img.rotate(90)
    sizes_rotate = img.pil_img.size
    assert sizes_rotate == (200, 320)
    assert len(img.jpeg.read()) == 17921
