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
# ---------------------------- Modules ----------------------------------------

from __future__ import absolute_import, print_function

import json
import subprocess
from io import BytesIO

from flask import Blueprint, jsonify, render_template, send_file, current_app, abort
from flask_babelex import gettext as _
import urllib3

from .api import PDF

# ---------------------------- Blueprint --------------------------------------
views = Blueprint(
    'pdf_views',
    __name__,
    url_prefix="/pdf",
)

# ---------------------------- API Routes -------------------------------------


@views.route('/<path:path_pdf>/page/text/', methods=['GET'])
@views.route('/<path:path_pdf>/page/<number_page>/text/', methods=['GET'])
def get_text_pdf(path_pdf, number_page=1):
    """Get text from the pdf."""
    http = urllib3.PoolManager()
    r = http.request('GET', path_pdf)
    pdf = PDF(r.data, int(number_page)-1)
    pdf.loadPDF()
    resp = pdf.get_text_page()
    return resp


@views.route('/<path:path_pdf>/toc/', methods=['GET'])
def get_toc_pdf(path_pdf, number_page=1):
    """Get toc from the pdf."""
    http = urllib3.PoolManager()
    r = http.request('GET', path_pdf)
    pdf = PDF(r.data)
    pdf.loadPDF()
    resp = pdf.get_toc()
    json_data = json.dumps(resp)
    return json_data


@views.route('/info/', methods=['GET'])
def get_info_pdf(number_page=1):
    """Get info from the pdf."""
    # http = urllib3.PoolManager()
    #r = http.request('GET', path_pdf)
    pdf = PDF("r.data")
    pdf.loadPDF()
    resp = pdf.get_info()
    json_data = json.dumps(resp)
    return json_data


@views.route('/<path:path_pdf>/page/find/<string>/', methods=['GET'])
@views.route('/<path:path_pdf>/page/<number_page>/find/<string>/', methods=['GET'])
def find_text(path_pdf, string, number_page=-1):
    """Find text position from the pdf."""
    http = urllib3.PoolManager()
    r = http.request('GET', path_pdf)
    if int(number_page) == -1:
        pdf = PDF(r.data, -1)
    else:
        pdf = PDF(r.data, int(number_page)-1)
    pdf.loadPDF()
    resp = pdf.find_text_page(str(string))
    return resp


@views.route('/<path:path_pdf>/page/image/', methods=['GET'])
@views.route('/<path:path_pdf>/page/<number_page>/image/', methods=['GET'])
def get_image_pdf(path_pdf, number_page=1):
    """Get image from the pdf."""
    http = urllib3.PoolManager()
    r = http.request('GET', path_pdf)

    return r.data


@views.route('/render/<int:page_number>/<path:path>', methods=['GET'])
def render_page(path, page_number=1):
    """Get image from the pdf."""
    file_to_path = current_app.config.get('MULTIVIO_FILENAME_TO_PATH')

    path = file_to_path(path)
    if not path:
        abort(404)
    doc = PDF(path)
    doc.load()
    img = doc.render_page(page_number)
    data = BytesIO()
    img.save(data, 'jpeg')
    data.seek(0)
    return send_file(data, mimetype='image/jpeg')
