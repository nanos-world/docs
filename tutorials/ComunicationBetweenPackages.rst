.. _ComunicationBetweenPackages:

*****************************
Comunication Between Packages
*****************************


All comunication between Packages is made using Events, please refer to :ref:`Events` page for more specific documentation.


Usage
-----

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