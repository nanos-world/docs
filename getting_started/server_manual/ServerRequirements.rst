.. _ServerRequirements:

*******************
Server Requirements
*******************

Creating servers in nanos world is very simple and straightforward, just a few steps and you have your server up and ready!

System Requirements
-------------------

*  OS: Windows or Linux
*  Processor: 1.0 GHz (Faster core is better than multiple cores)
*  Memory: 50 MB (grows if having too many Players or spawned Entities)
*  Storage: 10 MB (+ Assets size)
*  Network: Recommended at least 1 MB/s (grows if having too many Players or spawned Entities)
*  Network Forwarded Ports: 7777 TCP and UDP (you can change that on the config)

-------
Windows
-------

It should work fine without the need to install external programs.
Make sure that your system is updated.

-----
Linux
-----

.. warning:: Nanos world server executable may not work properly if one or more folders from the PATH of the server executable have spaces.

Depending of your system, some extra steps are needed.
The system need to be updated with the latest version of your distribution.

.. note:: Please check below if you have a error like this when launching the server : ``version "GLIBCXX_3.4.26" not found``

Debian 10
---------

For this distribution, some extra steps are required.
Since nanos world use gcc 9, we will need to upgrade one of our package to the testing repository.

First, update your sources repo (located in : ``/etc/apt/sources.list``), you will need to add the testing repo source, you can add theses lines below to your sources

.. tabs::
 .. code-tab:: text Text

    deb http://ftp.fr.debian.org/debian/ testing main contrib non-free
    deb-src http://ftp.fr.debian.org/debian/ testing main contrib non-free

After, we will need to create a ``preferences`` file that will tell our system to not prefer installing testing package over stable unless specified.
In ``/etc/apt/preferences`` (create if it doesn't exists), add theses lines :

.. tabs::
 .. code-tab:: text Text

    Package: *
    Pin: release a=stable
    Pin-Priority: 700

    Package: *
    Pin: release a=testing
    Pin-Priority: 650

Now, you can do the command ``apt update`` to make sure that your system can find testing repositories.
We will install ``libstdc++6`` testing package to the server, it will allow the server to start correctly.
You can type the command below to install it :
``sudo apt-get --target-release testing install libstdc++6``

Finished!, you can now proceed to the next steps to configure your nanos world server.

.. note:: If it still doesn't work, try installing gcc-9 testing package and then, tell your system to use this new version of gcc instead of the old one.

--------------------
Server configuration
--------------------

You made it! you can now go to the :ref:`ServerConfiguration` page