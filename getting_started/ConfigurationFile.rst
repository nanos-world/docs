.. _ConfigurationFile:

******************
Configuration File
******************


.. tip:: nanos.world Server Config file uses **TOML** (Tom's Obvious, Minimal Language), please refer to https://github.com/toml-lang/toml for more information and syntax.


About
-----

The server Configuration file (`Config.toml`) is generated automatically when the server is launched for the first time. This file will always be overriden with the proper pattern after the server is loaded.


Structure
---------

.. code-block:: toml

	# Server Configurations
	[server]
		# Server Name
		name =				"nanos.world Server"
		# Server Description
		description =			""
		# Max Players
		max_players =			64
		# Leave it blank for no password
		password =			""
		# Server IP. Leave it 127.0.0.1 for default
		ip =				"127.0.0.1"
		# Server Port
		port =				7777
		# Log Level. (1) Normal - (2) Debug - (3) Verbose
		log_level =			1

	# nanos.world Configurations
	[world]
		# Assets List
		assets = [

		]
		# nanos.world Server Authentication Token
		token =				""
		# Default startup map
		map =				"NanosWorld/Maps/Testing/NanosTestingMap"