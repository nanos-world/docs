How to
===============

How to download the game
************************

To be able to download the game you have to be in the testing groups or have bought the game

#. Download `itch.io <https://itch.io/app>`_ launcher

#. Once you have it installed, create an Itch account

#. Go to the link we gave you and add the password on it

#. Congrats you have access to the itch.io private page of NanosWorld

#. Select the client you want(Be careful ! There are multiple client available during the testing phase)


.. image:: ../images/HowToDownload.png
   :width: 600
   :alt: Overview of the launcher




How to launch the game
**********************

#. After you have downloaded the game go into the created folder

#. Click on NanosWorld.exe

.. image:: ../images/HowToLaunchTheGame.png
   :width: 600
   :alt: Overview of the game folder



How to join a server
********************

#. Click on the play button and select the desired server

the server list is ranked this way:

Server-name, server-Gamemode, server-Maps, server-slot, server-ping


How to make a server
********************

#. After downloading the server file

#. Go into the server folder, it will look like this:

.. image:: ../images/HowToLaunchTheServer.png
   :width: 400
   :alt: Overview of the Server folder

#. Press NanosworldServer.exe to launch the server.


How to modify a config server file
**********************************

.. image:: ../images/HowToModifyServerConfig.png
   :width: 600
   :alt: Overview of the Config file




How to add package to my server
*******************************

Download or make gamemode and put it into the package folder on your server

How to make my own package
**************************

First, you will have to learn LUA to make server-side and client-side or use the visual scripting tool
You will also need to learn html, css to make the interface you want
here the freeroam package you can use as a template:

How to report a bug
*******************

If you find a bug:

#. go on `gitlab <https://gitlab2.nanos.io/>`_

#. Create a new account if you don't have one

#. Find the repo call NanosWorld/Issues or use this link: `Issue Tracker <https://gitlab2.nanos.io/nanos.world/issues>`_

.. image:: ../images/issue.png
   :width: 200
   :alt: Repo for Issues

#. Click on it and then check the left UI and click on Issues

.. image:: ../images/issue2.png
   :width: 200
   :alt: Tab for issue

#. Click on a New issue on the right side and use the template to make your report(don't forget to add pictures and video with good explanation)

How to contribute to the wiki
*****************************

#. Clone this repo here:  `Documentation repository <https://github.com/nanos-world/docs>`_

#. Download Python here:  `Python <https://www.python.org/downloads/>`_

#. Install Sphynx by doing:  ``pip install -U Sphinx``

#. Install Sphynx extension sphinx-tabs by doing: ``pip install sphinx-tabs``

#. Edit the .rst file

#. To visualize what you just edit do in cmd: ``make html``

#. A folder call _build will appear go inside and then go in the html folder

#. If you think all is good, do a merge request
