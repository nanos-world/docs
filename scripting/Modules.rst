*******
Modules
*******

Modules allows you to extend the functionality of the nanos world scripting API on the server side. Currently only C modules are supported. 

.. warning:: Be aware that this part of the scripting API is currently work in progress and may change at any time.

.. note:: A guide to create your own module will follow (soon™).


LuaSQL-MySQL
============

LuaSQL-MySQL is a simple interface to communicate with a MySQL or MariaDB server. We provide an already precompiled version of this module which is already ready to use.

Documentation of LuaSQL: http://keplerproject.github.io/luasql/


Download and Installation
=========================

Download your platform library:

* `mysql_windows.zip <https://github.com/nanos-world-modules/luasql-mysql/releases/latest/download/mysql_windows.zip>`_
* `mysql_linux.zip <https://github.com/nanos-world-modules/luasql-mysql/releases/latest/download/mysql_linux.zip>`_

Extract it into your ``ServerRoot/Modules/`` folder:

.. image:: https://i.imgur.com/lhJ5Za8.png


Example
=======

.. tip:: Always escape all query parameters with ``:escape`` function!

.. tabs::
 .. code-tab:: lua Lua

    local luasql = require("luasql.mysql")
    local mysql = luasql.mysql()
    local connection = mysql:connect("database", "username", "password", "localhost", 3306)

    if not connection or not connection:ping() then
        Package:Log("Connection failed")
    else
        connection:execute([[
            CREATE TABLE hello_world(
                message varchar(50)
            );
        ]])

        connection:execute(string.format([[
            INSERT INTO hello_world VALUES ('%s');
        ]], connection:escape("Hello nanos.world"))) 
        -- (You should always use escape for user input to prevent sql injection!)

        local cursor = connection:execute("SELECT * FROM hello_world")
        local row = cursor:fetch({}, "a")

        Package:Log("Message: " .. tostring(row.message))
        -- Outputs: "[Script]   Message: Hello nanos.world" to the console
    end