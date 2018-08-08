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
import re
import xml.dom.minidom
from io import BytesIO
from xml.dom.minidom import parseString

from flask import Blueprint, jsonify, render_template, send_file

# ---------------------------- Class ---------------------------------------


class XMLProcessor():
    """Class XMLProcessoor."""

    def __init__(self, path):
        """Initializing the object."""
        self.path = path
        self.file_stream = open(path)
        self.namespace_URI = 'http://www.loc.gov/MARC21/slim'

    def _get_record(self):
        """Get the record object in the xml file."""
        self.file_stream.seek(0)
        content_str = self.file_stream.read()
        doc = parseString(content_str)

        records = doc.getElementsByTagNameNS(self.namespace_URI, 'record')

        # get the id number of the first record
        if len(records) == 0:
            raise ValueError(
                "XML/Marc Core document should contains at lease one record!")
        if len(records) > 1:
            raise ValueError(
                "XML/Marc Core document should not contains more than "
                "one record!")
        return records[0]

    def get_metadata(self):
        """Get metada infos."""
        record = self._get_record()
        metadata = {}
        metadata['title'] = self._get_fields(record, tag='245',
                                             code='a')[0].decode('utf-8')
        metadata['creator'] = [v.decode('utf-8') for v in
                               self._get_fields(record, tag='100', code='a')]
        metadata['creator'].extend([v.decode('utf-8') for v in
                                    self._get_fields(record, tag='700',
                                                     code='a')])
        metadata['mime_docs'] = [v.decode('utf-8') for v in
                                 self._get_fields(record, tag='856', code='q')]
        metadata['mime'] = "text/xml"
        lang = self._get_fields(record, tag='041', code='a')
        if len(lang) == 1:
            metadata['language'] = lang[0].decode('utf-8')
        return metadata

    def get_physical_structure(self):
        """Get the physical structure of the object."""
        phys_struct = []
        record = self._get_record()
        urls = self._get_fields(record, tag='856', code='u')
        labels = self._get_fields(record, tag='856', code='z')
        if len(labels) == 0:
            for u in urls:
                labels.append(u.split('/'.encode())[-1])
        for i in range(len(urls)):
            phys_struct.append({
                'url': urls[i].decode('utf-8'),
                'label': labels[i].decode('utf-8')
            })

        return phys_struct

    def _get_fields(self, record, tag, code):
        """Get fields content given the tag name."""
        values = []
        for data_field in record.getElementsByTagNameNS(self.namespace_URI,
                                                        'datafield'):
            if data_field.hasAttributes() and \
                    data_field.getAttribute('tag') == tag:
                for sub_field in data_field.getElementsByTagNameNS(
                        self.namespace_URI, 'subfield'):
                    if sub_field.hasAttributes() and \
                            sub_field.getAttribute('code') == code:
                        values.append(
                            sub_field.firstChild.nodeValue.encode('utf-8'))
        return values
