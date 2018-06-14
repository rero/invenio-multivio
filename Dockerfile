FROM python:3-slim-stretch

LABEL maintainer="software@rero.ch"
LABEL description="Generic browser and visualizer for digital objects."

RUN apt-get update && apt-get install -y curl gnupg \
    && curl -sL https://deb.nodesource.com/setup_6.x | bash - \
    && apt-get install -y nodejs gcc git \
    && pip install -U setuptools pip && \
    pip install -U virtualenv && \
    npm install -g node-sass clean-css clean-css-cli requirejs uglify-js

# Install dependencies
RUN apt-get -qy install --fix-missing --no-install-recommends \
    g++ cmake make git\
    fontconfig libfontconfig1-dev zlib1g zlib1g-dev libpng-dev lib32z1-dev\
    libjpeg-dev libtiff-dev libopenjp2-7-dev

WORKDIR /code

# Poppler
RUN git clone git://git.freedesktop.org/git/poppler/poppler

WORKDIR /code/poppler

RUN mkdir -p /code/poppler/build && cd /code/poppler/build \
	&& cmake -Wno-dev -D ENABLE_XPDF_HEADERS=True ../ \
    	&& make -j 2 install

# make libpoppler globally available
RUN ldconfig /usr/local/lib
WORKDIR /home/invenio/multivio/src/invenio-multivio/
RUN pip install --global-option=build_ext .

# # Run container as user `invenio` with UID `1000`, which should match
# # current host user in most situations:
RUN adduser --uid 1000 --disabled-password --gecos '' invenio

USER invenio

# make invenio command available by default
RUN echo "if [ -f /home/invenio/multivio/bin/activate ]; then \n\
    source /home/invenio/multivio/bin/activate \n\
fi" >> ~/.bashrc

RUN echo "if [ -f /home/invenio/multivio/src/bashrc ]; then \n\
    source /home/invenio/multivio/src/bashrc \n\
fi" >> ~/.bashrc

WORKDIR /home/invenio/multivio/src
WORKDIR /home/invenio

# Debug mode by default
ENV PATH=$PATH:/home/invenio/multivio/bin

ADD install.sh /home/invenio

# assign all files in home dir to the user
USER root
RUN chown -R invenio:invenio /home/invenio

USER invenio

CMD ["invenio", "run", "-h", "0.0.0.0"]
