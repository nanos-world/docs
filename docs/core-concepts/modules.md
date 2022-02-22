---
description: Extending the functionalities of nanos world Scripting API
---

# Modules

Extending the functionalities of nanos world Scripting API

Modules allows you to extend the functionality of the nanos world scripting API on the server side. Currently only C modules are supported.

:::caution

Be aware that this part of the scripting API is currently work in progress and may change at any time.

:::

:::info

A guide to create your own module will follow \(soon™\).

:::

## List of Supported Modules

### LuaSQL-MySQL

LuaSQL-MySQL is a simple interface to communicate with a MySQL or MariaDB server. We provide an already precompiled version of this module which is already ready to use.

Documentation of LuaSQL: [http://keplerproject.github.io/luasql/](http://keplerproject.github.io/luasql/)

#### Downloading & Installation

Download your platform library:

* [mysql_windows.zip](https://github.com/nanos-world-modules/luasql-mysql/releases/latest/download/mysql_windows.zip)
* [mysql_linux.zip](https://github.com/nanos-world-modules/luasql-mysql/releases/latest/download/mysql_linux.zip)

Extract it into your `ServerRoot/Modules/` folder:

![](/img/docs/modules.jpg)

#### Usage Example

```lua title="Server/Index.lua"
local luasql = require("luasql.mysql")
local mysql = luasql.mysql()
local connection = mysql:connect("database", "username", "password", "localhost", 3306)

if not connection or not connection:ping() then
    Package.Log("Connection failed")
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

    Package.Log("Message: " .. tostring(row.message))
    -- Outputs: "[Script]   Message: Hello nanos.world" to the console
end
```

:::info

**Tip:** Always escape all query parameters with `:escape` function!

:::


## Creating your own C module

It is also possible to you create your own C/C++ module and call it's functions from nanos world.

:::caution

This is an advanced procedure so instabilities and even crashes may occur.

:::


To create your own module, fist make sure you have **Visual Studio** installed with **Desktop development with C++** (and **CMake**) or any other C compiler on Linux.

#### First Steps

1. Then, clone our [example module](https://github.com/nanos-world-modules/module-example) in your computer to get start with it.
2. After cloning, you will need to download it's submodules with `git submodule update --init --recursive` - this will download the [module-sdk](https://github.com/nanos-world/module-sdk/) as a git submodule into deps/ folder automatically.


### Understanding the example

The important file is under `src/example.cpp`:

```cpp reference
https://github.com/nanos-world-modules/module-example/blob/main/src/example.cpp
```


### Compiling your C module

To compile the example, follow the steps:

1. Create a folder called `build/`: `mkdir build`.
2. Enter the build folder: `cd build`.
3. Run `cmake ..`.
4. Build it with `cmake --build . --config Release`

And now you will have the dlls/libs in `build/Release` folder.


### Using your C module

Now copy the `.dll` file into your nanos world `Server/Modules` folder.

And in your Package, you can load and use it like:

```lua
-- Loads the module 'example'
local example = require('example')

-- Calls the module function 'test'
-- Will print 'Hello World' on console
Package.Log(example.test())
```
