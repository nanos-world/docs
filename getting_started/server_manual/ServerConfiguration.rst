.. _ServerConfiguration:

********************
Server Configuration
********************

.. note:: Before taking a look at this page, please read our :ref:`ServerInstallation`


Starting Out
------------

The server is as simple as one executable file ``NanosWorldServer.exe``. After downloaded it, run it once to create the proper and initial folders ``Assets``, ``Packages`` and ``Config.toml`` file, you can close the server after that.

.. image:: https://i.imgur.com/qFjyYlf.png


Server Configuration File
-------------------------

.. tip:: nanos world Config files use **TOML** (Tom's Obvious, Minimal Language), please refer to https://github.com/toml-lang/toml for more information and syntax.

The server Configuration file ``Config.toml`` is generated automatically when the server is launched for the first time. This file will always be overriden with the proper pattern after the server is loaded.

.. code-block:: toml

    # Server Configurations
    [server]
        # Server Name
        name =                "nanos world Server"
        # Server Description
        description =         ""
        # Server Logo URL (Recommended Size: 150x75)
        logo =                ""
        # Max Players
        max_players =         64
        # Leave it blank for no password
        password =            ""
        # Server IP. Leave it 0.0.0.0 for default
        ip =                  "0.0.0.0"
        # Server Port (UDP forwarding needed)
        port =                7777
        # HTTP Port (TCP forwarding needed)
        http_port =           7777
        # Announce Server in the Server List
        announce =            true
        # Server Tick Rate in milliseconds (Dangerous! Server will tick at each [tick_rate] ms,
        # affecting both Server and Client performance. 33 ms means 30 ticks per Second and is
        # the default and recommended value)
        tick_rate =           33
        # Log Level. (1) Normal - (2) Debug - (3) Verbose
        log_level =           1

    # nanos world Configurations
    [world]
        # Package List (leave it blank to load all packages, this is usually useful when you have
        # tons of packages downloaded and only want to load one or some)
        packages = [

        ]
        # Default startup map
        map =                 "NanosWorld::BlankMap"
        # Banned IPs
        banned_ips = [
            
        ]


Command Line Parameters
~~~~~~~~~~~~~~~~~~~~~~~

It is possible to override the Server Configuration with Command Line Parameters. Note: this will not write to the Config file.

Available parameters: ``--name``, ``--description``, ``--password``, ``--ip``, ``--map``, ``--port``, ``--http_port``, ``--announce``, ``--packages``, ``--save`` and ``--max_players``.

Usage:

.. code-block:: console

  $ ./NanosWorldServer --port 7777 --map "NanosWorld::BlankMap" --announce 0 --max_players 1024 --packages "MyAwesomePackage, AnotherGoodPackage"


Map and Level
-------------

The Map (or Level) is defined in the Server's config file, this level will be loaded when the player joins the server and the Path is supposed for be or a built-in asset or an asset which is located at ``Assets/`` folder.

NanosWorld counts on (for now) 2 built-in maps: ``NanosWorld::BlankMap`` and ``NanosWorld::TestingMap`` which can be used in your server without needing to download any Asset Pack.

.. image:: https://i.imgur.com/T1RERRa.jpg


Server Console
--------------

It is possible to input commands to the Server Console.

.. image:: https://i.imgur.com/dvv6W62.png


Built-in Commands
~~~~~~~~~~~~~~~~~

To send a chat message

``chat [message]``

To stop the server

``stop``

To run a code in a package:

``package run [package_name] [lua_code]``

To reload a package:

``package reload [package_name]``

To reload all packages:

``package reload all``

To unload a package:

``package unload [package_name]``

To load a package:

``package load [package_name]``


All (not pre-defined) commands will be sent into an event to the scripting/server-side:

.. tabs::
 .. code-tab:: lua Lua

    Server:Subscribe("Console", function(my_input)
        Package:Log("Console command received: " .. my_input)
    end)


Loading Screen
--------------

In nanos world it is possible to add a customized and dynamic Loading Screen to your Server using WebUI. For that, just add your HTML/CSS/JS files into ``./LoadingScreen`` folder. Your primary HTML file should be called ``index.html``.

To be able to display dynamic information in the screen, you can listen to the Event ``UpdateScreen`` (which will trigger every few ms):

.. tabs::
 .. code-tab:: javascript JavaScript

    /*
    TIP: You can use 'progress' and 'progress_total' for filling up the main loading bar, and
      'progress_small' for a small / sub loading bar.  Also 'message' will display the current state
      (loading, validating, downloading) while 'message_secondary' will display the current asset / stuff
      being loaded or downloaded. You can also get the current stage from 'current_stage' parameter.
    */

    function UpdateScreen(message, message_secondary, progress_small, progress_small_total, progress, progress_total, current_stage) {
        // Update your HTML here
    }

    Events.Subscribe("UpdateScreen", UpdateScreen);


Also, it is possible to fetch Player's information by accessing a global variable called `LoadingScreen`:

.. tabs::
 .. code-tab:: javascript JavaScript
 
    var LoadingScreen = {
      server_ip,
      server_port,
      server_http_port,
      player_nanos_id,
      player_nanos_username
    };


Packages & Scripting
--------------------

nanos world provides a way of customizating and creating custom game-modes for your server with scripting language (Lua). You can create and add several Lua scripts files and run them on the server and/or on the client side. You can also separate your game-modes and functionalities in different **Packages** (or you can call it **game-modes**).

.. note:: Each Package will have its own memory space and are not interconnected with other Packages.

.. note:: Under linux the CamelCase is necessary for folder and ``Index.lua`` names.

.. tip:: Refer to :ref:`ScriptingQuickStart` for more information.


Packages Structure
~~~~~~~~~~~~~~~~~~

All Packages must go under ``Packages`` folder, each Package is a folder under that. Each Package must contain the following folder: ``Server``, ``Client`` and ``Shared``. Client and Shared will be sent to the Clients when they connect. Server and Shared will run only on Server and won't be sent to Clients.

Each Package must have an ``Index.lua`` file which will be triggered only, this file must include other files and do other operations as you wish.

Each Package must have an ``Package.toml`` file which is the Configuration File for this Package.

.. note:: Shared packages are always loaded before.

.. code-block:: javascript

   NanosWorldServer.exe
   Packages/
   |   My_Package_01/
   |   |   Server/
   |   |   |   Index.lua
   |   |   |   *.lua
   |   |   Client/
   |   |   |   *.lua
   |   |   Shared/
   |   |   |   *.lua
   |   |   Package.toml
   |   My_Package_02/
   |   |   ...
   |   |   PersistentData.toml
   |   |   Package.toml
   Assets/

.. tip:: It is possible to store data in disk with the method ``Package:SetPersistentData(key, value)``, it is possible to store any kind of value (except functions and userdatas) and retrieve with ``Package:GetPersistentData``.


Package Configuration File
~~~~~~~~~~~~~~~~~~~~~~~~~~

.. tip:: nanos world Config files use **TOML** (Tom's Obvious, Minimal Language), please refer to https://github.com/toml-lang/toml for more information and syntax.

The Package Configuration file ``Package.toml`` is generated automatically when a package is initialized for the first time. This file will always be overriden with the proper pattern after it's loaded.

.. code-block:: toml

    # Package Configurations
    [package]
        # Package Name
        name =                  "My Awesome Package"
        # Contributors
        author =                "SyedMuhammad"
        # Version
        version =               "1.0.0"
        # Image URL
        image =                 "https://i.imgur.com/AjtVZBQ.jpg"
        # Package Type: 'executable' (normal package) | 'library' (doesn't run - useful for code library)
        type =                  "executable"
        # Whether to force the Custom Map Script to do NOT load
        force_no_map_script =   false
        # Auto Destroy all entities spawned by this package when it unloads
        auto_cleanup =          true
        # Asset Packs Requirements
        assets_requirements = [
            "MyPack_01",
            "GodWeaponPack"
        ]

.. tip:: Package Type marked as ``library`` won't be loaded as a Package, this is useful if you are creating modular scripting which can be Required/Included in other Packages but isn't supposed to have an own Package loaded for it.

.. tip:: If any loaded Package has ``force_no_map_script`` enabled, it will force the server to do not run any (if existing) **Map Custom Script**. Usually these scripts have map specific spawn props/weapons points and pertinent stuff. This options is useful when your Package is going to handle all spawning stuff and doesn't want any external thing spawning or happening on the map/game.


Assets
------

Assets can be included in a folder called ``Assets/`` in the root server folder. All files in there will be sent to the clients and will be able to be referenced in your scripting code (client side).

.. tip:: Please refer to :ref:`AssetsQuickStart` for more information and which kind of asset is allowed.

.. code-block:: javascript

   NanosWorldServer.exe
   Packages/
   Assets/
   |   My_Asset_Pack_01/
   |   |   My_Asset_01.uasset
   |   |   My_Asset_02.uasset
   |   |   My_Big_Map.umap
   |   |   ...
   |   Assets.toml
   |   Awesome_Weapons/
   |   |   Big_Fucking_Gun.uasset
   |   |   ...
   |   Assets.toml


CLI - Command Line Interface
----------------------------

nanos world provides a CLI (Command Line Interface) to help updating the server, packages and assets and also downloading them!

To run the cli, start the server with ``--cli`` argument:

.. tabs::
 .. code-tab:: console Windows

    $ ./NanosWorldServer.exe --cli


 .. code-tab:: console Linux

    $ ./NanosWorldServer --cli


After started, if you type ``help`` you can see all the available commands:

.. image:: https://i.imgur.com/sX2xlvK.png


To install or update a Package:

.. code-block:: console

    $ install/update package [PACKAGE_PATH]


To install or update an Asset Pack:

.. code-block:: console

    $ install/update assets [ASSET_PATH]


To update the Server:

.. code-block:: console

    $ update server


It is also possible to run the CLI in a non-interactive mode, just run the command together:

.. tabs::
 .. code-tab:: console Windows

    $ ./NanosWorldServer.exe --cli update server


 .. code-tab:: console Linux

    $ ./NanosWorldServer --cli update server


Common Console Messages/Warnings/Erros and it's meanings
--------------------------------------------------------

Server Tick too/extreme high! Verify the server performance! Server got stuck for Xms.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Means the server got **stuck** (laggy) for X milliseconds. The warning (*yellow*) is not something to worry about, but too many Errors (*red*) could mean your server infraestructure is not that good or your scripting code is not that optimized. The server *tries¹* runs at 33 Ticks per seconds (or the amount configured at Config.toml). The server runs in an infinite loop which in a frequency of **1/33** milliseconds. Inside this loop, all server operations are executed: receiving/sending network packages, executing functions (received from network), triggering scripting events, executing all Scripting's Ticks events, calculating Trigger overlaps, and so on. So if any of these operations take more more than **1/33** milliseconds to run, this warning will appear up.

I said *tries¹* because on windows that is not that precise than on linux due internal c++ implementations.