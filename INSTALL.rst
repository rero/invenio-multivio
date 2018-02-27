Installation
============

Invenio-Multivio is no yet on PyPI thus you need:

.. code-block:: console

   $ pip install -e git+git://github.com/rero/invenio-multivio.git#egg=invenio-multivio

Requirements
------------

- ``git``
- ``docker``
- ``docker-compose``
- a local directory in which the container will mount the ``virtualenv``; this local directory is named ``<local_dir.>`` in this documentation, and you have to change it accordingly to your file system organisation; **this** ``<local_dir.>`` **has to be created before the install process is started**

Install the dev environment
---------------------------

- clone the source somewhere in you local machine (``git clone https://github.com/rero/invenio-multivio.git``)
- go to the ``docker`` directory
- edit the ``docker-compose.yml`` file and replace the ``changeit`` value by a path to your local machine to edit the sources locally
- build the ``docker image``: ``docker-compose run web ./install.sh``
- run the application: ``docker-compose up``
- open http://localhost:5000 with your favorite browser
- you can change the source from your local machine
- the cloned sources can be removed

**Note**: for windows users, setting the ``COMPOSE_CONVERT_WINDOWS_PATHS`` environment variable can solve volume issues.

Invenio commands
----------------

Once the container is started you should be able to run invenio commands like this:

.. code:: console

   docker-compose exec web invenio --help

You can write an alias:

.. code:: console

  alias invenio=`docker-compose exec web invenio`

Then you can run:

.. code:: console

   invenio --help

**Keep in mind that these commands and aliases are available only in the** ``docker-compose.yml`` **directory!**


Debug Mode
----------

Sources changes won't be in effect unless you restart the application, or unless if ``FLASK_DEBUG`` is set to ``1``.

To activate the debug mode, you have two possibilities. You can edit the ``docker-compose.yml`` file and change the ``FLASK_DEBUG`` web environment variable to ``FLASK_DEBUG=1``.

Or, you can add this variable in a ``.env`` file aside your ``docker-compose.yml`` file:

.. code:: console

   echo "FLASK_DEBUG=1" > .env
   docker-compose up


Development workflow
--------------------

This supposes you have a development environment up and running.

The first time
..............

1. Fork the RERO project on your own GitHub account
#. ``cd`` to the sources, ie ``<local_dir.>/src/<module>/<module>``
#. add the remote URL of your fork (``git remote add <choose-a-name> <your-fork-url>``)
#. ``git checkout -b <your-dev-branch> <the-name-of-your-repository>/<your-dev-branch>`` to create a new branch
#. develop on the new branch you just created
#. once you're done, run the test scripts

.. code:: console

    docker-compose run web bash
    cd /home/invenio/multivio/src/<module>
    ./run-tests.sh


#. if it complains about the manifest, it is because new files had been added, but they aren't registered into the MANIFEST.in file, so let's do so (from inside the container): ``check-manifest -u``
#. commit your changes with a well formated message (see the Commit Messages section below)
#. ``git push <your-repository>`` to push your modifications into your branch
#. Make a Pull Request on GitHub

When you resume developing
..........................

1. ``cd`` to the sources, ie ``<local_dir.>/src/<module>/<module>``
#. check you're in the master branch
#. check that your master branch is up to date: ``git fetch origin``, or ``git reset --hard origin/master`` **Changes will be lost**
#. ``git checkout <your-dev-branch>`` to get into your dev branch
#. ``git rebase master`` to update you dev branch
#. continue from the point 5 from the above list

Commit Messages
................

As defined by the `invenio documentation`_ but instead of `component` we can use `type`.

Type must be one of the following
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-   **feat**: A new feature
-   **fix**: A bug fix
-   **docs**: Only documentation changes
-   **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing
    semi-colons, etc)
-   **refactor**: A code change that neither fixes a bug nor adds a feature
-   **perf**: A code change that improves performance
-   **test**: Adding missing tests
-   **core**: Changes to the build process or auxiliary tools and libraries such as documentation
    generation


.. References:
.. _GitHub: https://github.com/rero/invenio-multivio
.. _Travis: https://travis-ci.org/rero/invenio-multivio
.. _npm: https://www.npmjs.com/org/rero
.. _invenio documentation: http://invenio.readthedocs.io/en/latest/community/contribution-guide.html?highlight=commit%20message

