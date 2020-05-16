.. _Events:

.. include:: ../common/common.rst

******
Events
******

.. tip:: This is a global variable named ``Events``. It is not possible to initialize or create a new instance. It's just a global variable.

.. tip:: It is possible to pass any kind of Official Classes and Structures (:ref:`Vector`, :ref:`Rotator`, :ref:`Color`, :ref:`Character`, :ref:`Player`, :ref:`Prop`, etc...) through events, including through network =D!

.. attention:: This page is under construction.


Functions
---------

.. list-table:: 
  :widths: 45 55

  * - **Name**
    - **Description**

  * - Call(:term:`string` EventName, :term:`table` {Args...})
    - Calls an Event which will be triggered in all Local Packages

  * - CallRemote(:term:`string` EventName, :term:`table` {Args...})
    - Calls an Event which will be triggered in all Remote Packages


Registering an Event
--------------------

.. tabs::
 .. code-tab:: lua Lua
    
    Events:on("MyEvent", function(...)
        -- Your code goes here
    end)


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

    -- calls a remote Event in all Remote Packages
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

    -- calls a remote Event in all Remote Packages
    Events:CallRemote("MyEvent", {"hello nanos world!", Vector(123, 123, 123), my_temp_character, 456})