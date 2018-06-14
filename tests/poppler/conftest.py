import pytest
import os
import poppler._mypoppler as poppler


@pytest.yield_fixture()
def simple_pdf_doc():
    file_name = os.path.join(os.path.dirname(__file__), '../data/document.pdf')
    yield poppler.Document(file_name)
