.. _ServerManual:

*************
Server Manual
*************

Creating servers in nanos.world is very simple and straightforward, just a few steps and you have your server up and ready!


System Requirements
-------------------

*  OS: Windows or Linux
*  Processor: 1.0 GHz
*  Memory: 50 MB (grows if having too many Players and Actors)
*  Storage: 10 MB (+ Assets size)
*  Network: Recommended at least 1 MB/s (grows if having too many Players and Actors)
*  Network Forwarded Ports: 7777 TCP and UDP (you can change that on the config)


Starting Out
------------

The server is as simple as one executable file ``NanosWorldServer.exe``. After downloaded it, run it once to create the proper and initial folders ``Assets``, ``Packages`` and ``Config.toml`` file, you can close the server after that.

.. image:: https://i.imgur.com/qFjyYlf.png


Configuration File
------------------

.. tip:: nanos.world Server Config file uses **TOML** (Tom's Obvious, Minimal Language), please refer to https://github.com/toml-lang/toml for more information and syntax.

The server Configuration file ``Config.toml`` is generated automatically when the server is launched for the first time. This file will always be overriden with the proper pattern after the server is loaded.

.. code-block:: toml

	# Server Configurations
	[server]
		# Server Name
		name =				"nanos.world Server"
		# Server Description
		description =			""
		# Server Logo URL (Recommended Size: 150x75)
		logo =			
		# Max Players
		max_players =			64
		# Leave it blank for no password
		password =			""
		# Server IP. Leave it 0.0.0.0 for default
		ip =				"0.0.0.0"
		# Server Port (UDP forwarding needed)
		port =				7777
		# HTTP Port (TCP forwarding needed)
		http_port =			7777
		# Announce Server in the Server List
		announce =			true
		# Server Tick Rate in milliseconds (Dangerous! Server will tick at each [tick_rate] ms,
		# affecting both Server and Client performance. 33 ms means 30 ticks per Second and is
		# the default and recommended value)
		tick_rate =			33
		# Log Level. (1) Normal - (2) Debug - (3) Verbose
		log_level =			1

	# nanos.world Configurations
	[world]
		# Assets List (not used yet)
		assets = [

		]
		# nanos.world Server Authentication Token (not used yet)
		token =				""
		# Default startup map
		map =				"NanosWorld/Maps/Development/Network/NanosNetworkDebug"


Map and Level
-------------

The Map (or Level) is defined in the Server's config file, this level will be loaded when the player joins the server and the Path is supposed for be or a built-in asset or an asset which is located at ``Assets/`` folder.

.. image:: https://i.imgur.com/T1RERRa.jpg


Server Console
--------------

It is possible to input commands to the Server Console.

.. image:: https://i.imgur.com/dvv6W62.png


Built-in Commands
~~~~~~~~~~~~~~~~~

To run a code in a package:

``package run [package_name] [lua_code]``

To reload a package:

``package reload [package_name]``

To reload all packages:

``package reload all``


All (not pre-defined) commands will be sent into an event to the scripting/server-side:

.. tabs::
 .. code-tab:: lua Lua

	Server:on("Console", function(my_input)
		Package:Log("Console command received: " .. my_input)
	end)


Packages & Scripting
--------------------

nanos.world provides a way of customizating and creating custom gamemodes for your server with scripting language (Lua). You can create and add several Lua scripts files and run them on the server and/or on the client side. You can also separate your gamemodes and functionalities in different Packages (or you can call it Modules).

.. note:: Each Package will have its own memory space and are not interconnected with other Packages.

.. note:: Under linux the CamelCase is necessary for folder and ``Index.lua`` names.

.. tip:: Refer to :ref:`Scripting` for more information.


Packages Structure
~~~~~~~~~~~~~~~~~~

All Packages must go under ``Packages`` folder, each Package is a folder under that. Each Package must contain the following folder: ``Server``, ``Client`` and ``Shared``. Client and Shared will be sent to the Clients when they connect. Server and Shared will run only on Server and won't be sent to Clients.

Each Package must have an ``Index.lua`` file witch will be triggered only, this file must include other files and do other operations as you wish.

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
   |   My_Package_02/
   |   |   ...
   Assets/


Assets
------

Assets can be included in a folder called ``Assets/`` in the root server folder. All files in there will be sent to the clients and will be able to be referenced in your scripting code (client side).

.. attention:: Assets folders named ``NanosWorld/`` are forbidden as this name is used for Paths for built-in assets already included in the game.

.. tip:: Please refer to :ref:`Assets` for more information and which kind of asset is allowed.

.. code-block:: javascript

   NanosWorldServer.exe
   Packages/
   Assets/
   |   My_Asset_Pack_01/
   |   |   My_Asset_01.uasset
   |   |   My_Asset_02.uasset
   |   |   My_Big_Map.umap
   |   |   ...
   |   Awesome_Weapons/
   |   |   Big_Fucking_Gun.uasset
   |   |   ...