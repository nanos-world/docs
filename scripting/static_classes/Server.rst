.. _Server:

.. include:: ../common/common.rst

******
Server
******

.. tip:: This is a Static Class named ``Server``. You can access it's methods directly with ``:``. It is not possible to initialize or create new instances.

.. note:: This is a Server only Class.


Functions
---------

.. list-table:: 
  :widths: 50 50

  * - **Name**
    - **Description**

  * - BroadcastChatMessage(:term:`string` message)
    - Sends a chat message to everyone

  * - ChangeMap(:term:`string` map_path)
    - Restarts the server in a new Map, restarts all packages and reconnects all players

  * - HTTPRequest( |br-p| :term:`string` uri, |br-p| :term:`string` endpoint = "", |br-p| :term:`string` method = "GET", |br-p| :term:`string` data = "", |br-p| :term:`table`\[:term:`string`\] headers = {}, |br-p| :term:`function` callback = nil |br| )
    - Makes a HTTP Request, the result will be returned in the provided Callback function in the format (Status, Response)

  * - ReloadPackage(:term:`string` package_folder_name)
    - Reloads a Package

  * - SendChatMessage(:ref:`Player` player, :term:`string` message)
    - Sends a chat message to Player only

  * - SetDescription(:term:`string` description, :term:`boolean` persist_to_config_file = false)
    - Sets the description of the server, optionally overrides Config.toml

  * - SetLogo(:term:`string` logo_url, :term:`boolean` persist_to_config_file = false)
    - Sets the logo of the server, optionally overrides Config.toml

  * - SetMaxPlayers( |br-p| :term:`number` max_players, |br-p| :term:`boolean` persist_to_config_file = false |br| )
    - Sets the maximum player slots of the server, optionally overrides Config.toml

  * - SetName(:term:`string` name, :term:`boolean` persist_to_config_file = false)
    - Sets the name of the server, optionally overrides Config.toml

  * - SetPassword(:term:`string` password, :term:`boolean` persist_to_config_file = false)
    - Sets the password of the server, optionally overrides Config.toml

  * - SetValue(:term:`string` key, :term:`any` value)
    - Sets a global value in the Server, which can be accessed from anywhere (server side)

  * - Stop()
    - Stops the server

  * - Subscribe(:term:`string` event_name, :term:`function`)
    - Subscribes for an Event 

  * - UnloadPackage(:term:`string` package_folder_name)
    - Unloads a Package

  * - Unsubscribe(:term:`string` event_name, :term:`function` = nil)
    - Unsubscribes from all subscribed Events in this Class and in this Package, optionally passing the function to unsubscribe only that callback

  * - :term:`string` GetMap()
    - Returns the current Map

  * - :term:`table` GetMapConfig()
    - Returns a list of the Custom Config of the current map (stored in the MAP_NAME.toml)

  * - :term:`table` GetPackages(:term:`boolean` only_loaded = true)
    - Returns a list of Packages folder names available in the server, optionally returns only loaded and running packages

  * - :term:`any` GetValue(:term:`string` key)
    - Gets a value given a key


Events
------

.. list-table:: 
  :widths: 10 20 70
   
  * - **Name**
    - **Arguments**
    - **Description**

  * - Chat
    - :term:`string` text, |br| :ref:`Player` sender
    - Called when a player types something in the chat - return false to do not send the message

  * - ChatEntry
    - :term:`string` text, |br| :ref:`Player` sender
    - Called when a Chat Entry is received, this is also triggered when ``SendChatMessage`` is called

  * - Console
    - :term:`string` text
    - Called when a console command is submitted

  * - LogEntry
    - :term:`string` text, :term:`LogType` type
    - Called when a Server log is received

  * - Start
    - 
    - Server has been started.

  * - PlayerConnect
    - :term:`string` IP, :term:`string` player_account_ID, :term:`string` player_name
    - Called when a player is attempting to connect to the server - return false to do not allow it

  * - Stop
    - 
    - Server has been stopped.

  * - Tick
    - :term:`number` delta_time
    - Is called every 30 ms by default. Only small operations should be performed here, otherwise this can lead the server to delays.


Examples
--------

.. raw:: html

	<script>
		DrawCard(
			"../../tutorials/ChatColors.html",
			"https://i.imgur.com/J97aZZy.png",
			"Chat Colors",
			"See how to display colored texts in the chat!"
		);
	</script>


.. tabs::
 .. code-tab:: lua Lua

    -- prints "Server started" when the server is starting
    Server:Subscribe("Start", function()
        Package:Log("Server started")
    end)

    -- prints "Server stopped" when the server stops / shutdown
    Server:Subscribe("Stop", function()
        Package:Log("Server stopped")
    end)

    -- prints the delta time about every 30 ms
    Server:Subscribe("Tick", function(delta_time)
        Package:Log("Tick: " .. delta_time)
    end)

    -- sends a chat message to everyone
    Server:BroadcastChatMessage("Welcome to the server!")

    -- makes a HTTP Request
    Server:HTTPRequest("localhost:7777", "/fetch", "GET", "", {}, function(status, data)
        Package:Log(status) -- 200
        Package:Log(data)
        local json_ret = JSON.parse(data)
		-- ...
    end)