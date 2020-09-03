********
Modules
********

.. warning:: Be aware that this part of the scripting api is currently work in progress and may change at any time.

With modules you can extend the functionality of the nanos world scripting api on the server side. Currently there are only c modules supported. 

.. note:: A guide to create your own module will follow.

LuaSQL-MySQL
============

LuaSQL-MySQL is a simple interface to communicate with a MySQL or MariaDB server. We provide a already precompiled version of this module which is already ready to use.

Documentation of LuaSQL: http://keplerproject.github.io/luasql/

* MySQL-Windows_ - SHA256 of `mysql.dll`: :code:`49C2B0964FB54C6822C9133873E6D08A3675F4E677F5DE3E6CD37899E8102074`
* MySQL-Linux_ - SHA256 of `mysql.so`: :code:`92771288D430F56FDC4FA1247408F6CF287220643A3B638C6401E7840D404F5A`

.. warning:: Always escape every paramater of your queries with the :escape function!

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

        connection:execute([[
            INSERT INTO hello_world VALUES ('%s');
        ]], connection:escape("Hello nanos.world")) -- You should always use escape for user input to prevent sql injection!

        local cursor = connection:execute("SELECT * FROM hello_world")
        local row = cursor:fetch({}, "a")
        Package:Log("Message: " .. tostring(row.message)) -- This will output "[Script]   Message: Hello nanos.world" to the console
    end 


.. _MySQL-Windows: /_static/modules/mysql_windows.zip
.. _MySQL-Linux: /_static/modules/mysql_linux.zip