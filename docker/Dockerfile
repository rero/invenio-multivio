FROM python:3-slim-stretch

LABEL maintainer="software@rero.ch"
LABEL description="Generic browser and visualizer for digital objects."

RUN apt-get update && apt-get install -y curl gnupg \
    && curl -sL https://deb.nodesource.com/setup_6.x | bash - \
    && apt-get install -y zlib1g zlib1g-dev libpng-dev libjpeg-dev\
    && apt-get install -y nodejs gcc git \
    && pip install -U setuptools pip && \
    pip install -U virtualenv && \
    npm install -g node-sass clean-css clean-css-cli requirejs uglify-js


RUN pip install pdfminer3k
RUN pip install pillow-simd

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
