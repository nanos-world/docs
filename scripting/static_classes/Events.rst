.. _Events:

.. include:: ../common/common.rst

******
Events
******

Events (or Callbacks) are the way to transmit and send data between Packages or between Client and Server side.


.. tip:: This is a Static Class named ``Events``. You can access it's methods directly with ``:``. It is not possible to initialize or create new instances.

.. tip:: It is possible to pass any kind of Official Classes and Structures (:ref:`Vector`, :ref:`Rotator`, :ref:`Color`, :ref:`Character`, :ref:`Player`, :ref:`Prop`, etc...) through events, including through network =D!

.. attention:: It is NOT (yet) possible to send tables through network Events.


Functions
---------

.. list-table:: 
  :widths: 5 55 40

  * - 
    - **Name**
    - **Description**

  * - 
    - Call(:term:`string` EventName, :term:`table` {Args...})
    - Calls an Event which will be triggered in all Local Packages

  * - |client-only-label|
    - CallRemote(:term:`string` EventName, :term:`table` {Args...})
    - Calls an Event on Client which will be triggered in all Server Packages

  * - |server-only-label|
    - CallRemote(:term:`string` EventName, :ref:`Player` Remote, :term:`table` {Args...})
    - Calls an Event on Server which will be triggered in all Client's Packages of ``Player``

  * - |server-only-label|
    - BroadcastRemote(:term:`string` EventName, :term:`table` {Args...})
    - Calls an Event on Server which will be triggered in all Client's Packages


Examples
--------

.. tabs::
 .. code-tab:: lua Lua

    -- register for an Event (remote or local)
    Events:on("MyEvent", function(my_text)
        Package:Log("Event received! " .. my_text)
        -- outputs "Event received! hello nanos world!"
    end)

    -- calls a local Event in all Local Packages
    Events:Call("MyEvent", {"hello nanos world!"})

    -- calls a remote Event in all Server Packages
    Events:CallRemote("MyEvent", {"hello nanos world!"})


.. tabs::
 .. code-tab:: lua Lua

    -- register for an Event (remote or local)
    Events:on("MyAnotherEvent", function(my_text, my_vector, my_character, my_number)
        Package:Log("Event received! " .. my_text .. " " .. my_vector.X .. " " .. my_character:GetViewMode() .. " " .. my_number)
        -- outputs "Event received! hello nanos world! 123 1 456"
    end)

    -- passing Characters through events
    local my_temp_character = Character()

    -- calls a local Event in all Local Packages
    Events:Call("MyEvent", {"hello nanos world!", Vector(123, 123, 123), my_temp_character, 456})

    -- calls a remote Event in all Server Packages
    Events:CallRemote("MyEvent", {"hello nanos world!", Vector(123, 123, 123), my_temp_character, 456})