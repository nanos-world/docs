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

  * - SendChatMessage(:ref:`Player` Player, :term:`string` Message)
    - Sends a chat message to Player only

  * - BroadcastChatMessage(:term:`string` Message)
    - Sends a chat message to everyone


Events
------

.. list-table:: 
  :widths: 10 20 70
   
  * - **Name**
    - **Parameters**
    - **Description**

  * - Console
    - :term:`string` Text
    - Called when a console command is submitted

  * - Start
    - 
    - Server has been started.

  * - Stop
    - 
    - Server has been stopped.

  * - Tick
    - :term:`number` DeltaTime
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
    Server:on("Start", function()
        print("Server started")
    end)

    -- prints "Server stopped" when the server stops / shutdown
    Server:on("Stop", function()
        print("Server stopped")
    end)

    -- prints the tick-delta time about every 30 ms
    Server:on("Tick", function(ticktime)
        print("Tick: " .. ticktime)
    end)

    -- sends a chat message to everyone
    Server:BroadcastChatMessage("Welcome to the server!")