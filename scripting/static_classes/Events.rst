.. _Events:

.. include:: ../common/common.rst

******
Events
******

In nanos world the way to transmit data between Packages or between Client and Server side is through **Events**.


.. tip:: This is a Static Class named ``Events``. You can access it's methods directly with ``:``. It is not possible to initialize or create new instances.

.. tip:: It is possible to pass any kind of Official Classes and Structures (:ref:`Vector`, :ref:`Rotator`, :ref:`Color`, :ref:`Character`, :ref:`Player`, :ref:`Prop`, etc...) through events, including entities and tables through network =D!


Functions
---------

.. list-table:: 
  :widths: 5 55 40

  * - 
    - **Name**
    - **Description**

  * - 
    - Call(:term:`string` event_name, :term:`table` {args...})
    - Calls an Event which will be triggered in all Local Packages

  * - |client-only-label|
    - CallRemote(:term:`string` event_name, :term:`table` {args...})
    - Calls an Event on Client which will be triggered in all Server Packages

  * - |server-only-label|
    - CallRemote(:term:`string` event_name, :ref:`Player` remote, :term:`table` {args...})
    - Calls an Event on Server which will be triggered in all Client's Packages of ``Player``

  * - |server-only-label|
    - BroadcastRemote(:term:`string` event_name, :term:`table` {args...})
    - Calls an Event on Server which will be triggered in all Client's Packages

  * - 
    - Subscribe(:term:`string` event_name, :term:`function`)
    - Subscribes for an user-created event which will be triggered for both local or remote called events

  * - 
    - Unsubscribe(:term:`string` event_name, :term:`function` = nil)
    - Unsubscribes from all subcribed events in this Package with that event name, optionally passing the function to unsubscribe only that callback


Examples
--------

.. tip:: `Remote` means the other side, e.g.: if I'm the client, the remote is the server. If I'm the server, the remote is the client.


.. tabs::
 .. code-tab:: lua Lua

    -- [[CLIENT]]

    -- register for a local Event (local = client only)
    Events:Subscribe("MyLocalEvent", function(my_text)
        Package:Log("Event received locally! " .. my_text)
        -- outputs "Event received locally! hello nanos world!"
    end)

    -- calls a local Event in all Local Packages
    Events:Call("MyLocalEvent", {"hello nanos world!"})

    -- register for a server Event (remote = server)
    Events:Subscribe("MyClientEvent", function(my_text)
        Package:Log("Event received from server! " .. my_text)
        -- outputs "Event received from server! hello nanos world!"
    end)

    -- calls a remote Event in all Server Packages
    Events:CallRemote("MyServerEvent", {"hello nanos world!"})


.. note:: On Server, registering for remote events has an addition parameter: :ref:`Player`, which is the client who sent the event.

.. tabs::
 .. code-tab:: lua Lua
    
    -- [[SERVER]]

    -- register for a local Event (local = server only)
    Events:Subscribe("MyLocalEvent", function(my_text)
        Package:Log("Event received locally! " .. my_text)
        -- outputs "Event received locally! hello nanos world!"
    end)

    -- calls a local Event in all Local Packages
    Events:Call("MyLocalEvent", {"hello nanos world!"})

    -- register for a client Event (remote = client)
    Events:Subscribe("MyServerEvent", function(player, my_text)
        Package:Log(player:GetName() .. " sent an event from client! " .. my_text)
        -- outputs "Syed sent an event from client! hello nanos world!"
        
		-- sends an "answer" to the player which sent this event
    	Events:CallRemote("MyClientEvent", player, {"hello nanos world! message only for you!"})
    end)

    -- sends a remote Event to all Players in all Client Packages
    Events:BroadcastRemote("MyClientEvent", {"hello nanos world!"})


Passing entities through events:

.. tabs::
 .. code-tab:: lua Lua

    -- register for an Event (remote or local)
    Events:Subscribe("MyAnotherEvent", function(my_text, my_vector, my_character, my_number)
        Package:Log("Event received! " .. my_text .. " " .. my_vector.X .. " " .. my_character:GetViewMode() .. " " .. my_number)
        -- outputs "Event received! hello nanos world! 123 1 456"
    end)

    -- passing Characters through events
    local my_temp_character = Character()

    -- calls a local Event in all Local Packages
    Events:Call("MyEvent", {"hello nanos world!", Vector(123, 123, 123), my_temp_character, 456})

    -- calls a remote Event in all Server Packages
    Events:CallRemote("MyEvent", {"hello nanos world!", Vector(123, 123, 123), my_temp_character, 456})