.. _Console:

*******
Console
*******


About
-----

You can input commands to Server Console. All (not pre-defined) commands will be sent into an event:

.. tabs::
 .. code-tab:: lua Lua

    Server:on("Console", function(my_input)
        Package:Log("Console command received: " .. my_input)
    end)


Built-in Commands
-----------------

To run a code in a package (can call functions or add global variables):

``package run [package_name] [lua_code]``

To reload a package:

``package reload [package_name]``

To reload all packages:

``package reload all``