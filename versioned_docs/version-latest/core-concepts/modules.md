---
title: Modules
description: Extending the functionalities of nanos world Scripting API
---


Extending the functionalities of nanos world Scripting API

Modules allows you to extend the functionality of the nanos world scripting API on the server side. Currently only C modules are supported.

:::caution

Be aware that this part of the scripting API is currently work in progress and may change at any time.

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
Console.Log(example.test())
```
