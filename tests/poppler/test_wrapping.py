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

"""Tests for poppler cython wrapping."""

import io

from PIL import Image


def test_doc(simple_pdf_doc):
    """Test poppler document creation."""
    assert simple_pdf_doc


def test_n_pages(simple_pdf_doc):
    """Test number of pages."""
    assert simple_pdf_doc.no_of_pages == 3


def test_toc(simple_pdf_doc):
    """Test table of content extraction."""
    toc = simple_pdf_doc.getToc()
    assert toc
    assert toc == [
        {'label': 'Introduction', 'page_number': 1},
        {'label': 'Context', 'page_number': 1},
        {'label': 'Goals', 'page_number': 2, 'childs': [
            {'label': 'Generic', 'page_number': 2}
        ]
        },
        {'label': 'Functional and complete', 'page_number': 2},
        {'label': 'Flexible', 'page_number': 2},
        {'label': 'Extensible and autonomous', 'page_number': 3},
        {'label': 'Sponsorship', 'page_number': 3}
    ]


def test_docinfo(simple_pdf_doc):
    """Test pdf metadata extraction."""
    info = simple_pdf_doc.getInfo()
    assert info
    assert info == {
        'Author': 'Miguel Moreira',
        'Title': 'Multivio: Project description',
        'Subject': 'Multivio a new project.',
        'Creator': 'LaTeX with hyperref package',
        'Producer': 'pdfTeX-1.40.10',
        'Keywords': 'PDF, Multivio',
        'CreationDate': "D:20100615101539+02'00'",
        'ModDate': "D:20100615101539+02'00'",
        'PTEX.Fullbanner': 'This is pdfTeX, Version 3.1415926-1.40.10-2.2'
                           ' (TeX Live 2009) kpathsea version 5.0.0'
    }


def test_render(simple_pdf_doc):
    """Test the first page rendering."""
    rendered_page = simple_pdf_doc.get_image(
        1, simple_pdf_doc.getPageMediaWidth(1),
        simple_pdf_doc.getPageMediaHeight(1),)
    assert rendered_page
    width = rendered_page.getWidth()
    assert width == 595
    height = rendered_page.getHeight()
    assert height == 841
    bitmap = rendered_page.getBitmap()
    image = Image.frombytes('RGB', (width, height), bitmap)
    assert image
    assert image.width == width
    assert image.height == height
    memory_file = io.BytesIO()
    image.save(memory_file, 'ppm')
    memory_file.seek(0)
    n_bytes = len(memory_file.read())
    assert n_bytes > width * height * 3
