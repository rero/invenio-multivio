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
import os
from io import BytesIO

from flask import Blueprint, jsonify, render_template, send_file

# ---------------------------- Class ---------------------------------------


class JsonProcessor():
    """Class JsonProcessor."""

    def __init__(self, path):
        """Initializing the object."""
        self.path = path
        self.data = None

    def _get_record(self):
        """Get the record object in the json file."""
        with open(self.path) as f:
            self.data = json.load(f)
        if 'record' not in self.data['collection']:
            raise ValueError(
                "XML/Marc Core document should contains at lease one record!")
        return self.data

    def get_metadata(self):
        """Get metada infos."""
        record = self._get_record()
        metadata = {}
        metadata['title'] = self._get_fields(tag='245', code='a')[0]
        metadata['creator'] = [v for v in
                               self._get_fields(tag='100', code='a')]
        metadata['creator'].extend([v for v in
                                    self._get_fields(tag='700', code='a')])
        metadata['language'] = self._get_fields(tag='041', code='a')[0]
        return metadata

    def get_physical_structure(self):
        """Get the physical structure of the object."""
        phys_struct = []
        record = self._get_record()
        urls = self._get_fields(tag='856', code='u')
        labels = self._get_fields(tag='856', code='z')
        if len(labels) == 0:
            for u in urls:
                labels.append(re.sub(r'\.\w+$', '', u.split('/')[-1]))
        for i in range(len(urls)):
            phys_struct.append({
                'url': urls[i],
                'label': labels[i]
            })

        return phys_struct

    def _get_fields(self, tag, code):
        res = []
        for datafield in self.data['collection']['record']['datafield']:
            for attribute, value in datafield.items():
                if attribute == 'tag' and value == tag:
                    for data in datafield['subfield']:
                        if code in data:
                            res.append(data[code])
        return res
