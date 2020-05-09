.. _Server:

.. include:: ../common/common.rst

******
Server
******

.. tip:: This is a global variable named ``Server``. It is not possible to initialize or create a new instance. It's just a global variable.

.. note:: This is a Server only Namespace.

.. attention:: This page is under construction.


Events
------

.. list-table:: 
  :widths: 5 15 30 50
   
  * - 
    - **Name**
    - **Parameters**
    - **Description**

  * -
    - Console
    - :term:`string` Text
    - Called when a console command is submitted

  * -
    - Start
    - 
    - Server has been started.

  * -
    - Stop
    - 
    - Server has been stopped.

  * -
    - Tick
    - :term:`number` DeltaTime
    - Is called every 30 ms by default. Only small operations should be performed here, otherwise this can lead the server to delays.


Examples
--------

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
