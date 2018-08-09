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

from flask import Blueprint, abort, current_app, jsonify, request, send_file

from .api import PDF

# ---------------------------- Blueprint --------------------------------------
views = Blueprint(
    'pdf_views',
    __name__,
    url_prefix="/api-pdf",
)

# ---------------------------- API Routes -------------------------------------


@views.route('/text/<path:path_pdf>/', methods=['GET'])
def get_text_pdf(path_pdf):
    """Get text from the pdf."""
    file_to_path = current_app.config.get('MULTIVIO_FILENAME_TO_PATH')
    page_nr = request.args.get('page_nr')
    path = file_to_path(path_pdf)
    if page_nr:
        page_number = int(page_nr)
        pdf = PDF(path, page_number)
    else:
        pdf = PDF(path)
    pdf.load()
    resp = pdf.get_text_page()
    return resp


@views.route('/find/<path:path_pdf>/', methods=['GET'])
def find_text(path_pdf):
    """Find text position from the pdf."""
    file_to_path = current_app.config.get('MULTIVIO_FILENAME_TO_PATH')
    page_nr = request.args.get('page_nr')
    string = request.args.get('string')
    path = file_to_path(path_pdf)
    if not path:
        abort(404)
    if page_nr:
        page_number = int(page_nr)
        pdf = PDF(path, page_number)
    else:
        pdf = PDF(path)
    pdf.load()
    resp = pdf.find_text_page(str(string))
    return jsonify(resp)


@views.route('/toc/<path:path_pdf>/', methods=['GET'])
def get_toc_pdf(path_pdf):
    """Get toc from the pdf."""
    file_to_path = current_app.config.get('MULTIVIO_FILENAME_TO_PATH')
    path = file_to_path(path_pdf)
    if not path:
        abort(404)
    pdf = PDF(path)
    pdf.load()
    resp = pdf.get_toc()
    json_data = json.dumps(resp)
    return json_data


@views.route('/metadata/<path:path_pdf>/', methods=['GET'])
def get_metadata_pdf(path_pdf):
    """Get info from the pdf."""
    file_to_path = current_app.config.get('MULTIVIO_FILENAME_TO_PATH')
    path = file_to_path(path_pdf)
    if not path:
        abort(404)
    pdf = PDF(path)
    pdf.load()
    resp = pdf.get_metadata()
    json_data = json.dumps(resp)
    return json_data


@views.route('/sizes/<path:path_pdf>/', methods=['GET'])
def get_size_pdf(path_pdf):
    """Get info from the pdf."""
    file_to_path = current_app.config.get('MULTIVIO_FILENAME_TO_PATH')
    page_nr = request.args.get('page_nr')
    path = file_to_path(path_pdf)
    if not path:
        abort(404)
    if page_nr:
        page_number = int(page_nr)
    else:
        page_number = 1
    pdf = PDF(path, page_number)
    pdf.load()
    return jsonify(pdf.get_sizes())


@views.route('/indexing/<path:path_pdf>/', methods=['GET'])
def get_indexing_pdf(path_pdf):
    """Get info from the pdf."""
    file_to_path = current_app.config.get('MULTIVIO_FILENAME_TO_PATH')
    page_nr = request.args.get('page_nr')
    path = file_to_path(path_pdf)
    if not path:
        abort(404)
    if page_nr:
        page_number = int(page_nr)
    else:
        page_number = 1
    pdf = PDF(path, page_number)
    pdf.load()
    return "NotImplemented"  # TODO


@views.route('/download/<path:path_pdf>/', methods=['GET'])
def download(path_pdf):
    """Dwnload the pdf."""
    file_to_path = current_app.config.get('MULTIVIO_FILENAME_TO_PATH')
    path = file_to_path(path_pdf)
    if not path:
        abort(404)
    return send_file(path, mimetype='application/pdf', as_attachment=True)


@views.route('/render/<path:path_pdf>/', methods=['GET'])
def render_page(path_pdf):
    """Get image from the pdf."""
    file_to_path = current_app.config.get('MULTIVIO_FILENAME_TO_PATH')
    page_nr = request.args.get('page_nr')
    angle = request.args.get('angle')
    max_width = request.args.get('max_width')
    max_height = request.args.get('max_height')
    path = file_to_path(path_pdf)
    if not path:
        abort(404)
    if page_nr:
        page_number = page_nr
    else:
        page_number = 1
    pdf = PDF(path, page_number)
    pdf.load()
    if max_width and max_height:
        pdf.render_page(int(max_width), int(max_height))
    else:
        pdf.render_page(pdf.get_width(), pdf.get_height())
    if angle:
        pdf.rotate(int(angle))
    return send_file(pdf.jpeg, mimetype='image/jpeg')
