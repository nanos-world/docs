---
title: C Module
description: Custom Lua C Binaries Libraries
sidebar_position: 1
tags: [scripting, packages]
keywords: [c, module, library, binary, package]
---

C Module is a Package type that allows extending the functionalities of nanos world Scripting API

C Modules allows you to extend the functionality of the nanos world scripting API on the server side. Currently only C modules are supported.

:::caution

Be aware that this part of the scripting API is currently work in progress and may change at any time.

:::

:::caution

This is an advanced procedure so instabilities and even crashes may occur.

:::


## Creating your C Module binaries

To create your own module, fist make sure you have **Visual Studio** installed with **Desktop development with C++** (and **CMake**) or any other C compiler on Linux.

#### First Steps

1. Then, clone our [example module](https://github.com/nanos-world-modules/module-example) in your computer to get start with it.
2. After cloning, you will need to download it's submodules with `git submodule update --init --recursive` - this will download the [module-sdk](https://github.com/nanos-world/module-sdk/) as a git submodule into deps/ folder automatically.


### Understanding the example

The important file is under `src/example.cpp`:

```cpp reference
https://github.com/nanos-world-modules/module-example/blob/main/src/example.cpp
```


### Compiling your C Module

To compile the example, follow the steps:

1. Create a folder called `build/`: `mkdir build`.
2. Enter the build folder: `cd build`.
3. Run `cmake ..`.
4. Build it with `cmake --build . --config Release`

And now you will have the dlls/libs in `build/Release` folder.


## Creating a C Module Package

First of all, create a new Package of type [c-module](packages-guide#c-module), and add your .dll and .so files into the Package's root folder. It will look like that:

```folder-structure
Packages/
└── my-module/
    ├── Package.toml
    ├── example.dll
    └── ...
```

Then make sure to add `example` (or the name of your dll file) to the Package.toml configuration section:

```toml
# c module configurations
[c_module]
    # list of binaries paths to load (without extension)
    binaries = [
                            "example",
    ]
```


## Loading and Using your C Module

Now you can load the package you created as usual, by adding it to the Config.toml's list of Packages requirement or by adding it to another Package's Package.toml as dependency as well.

And in your Package, you can load and use it like:

```lua showLineNumbers
-- Calls the module function 'test'
-- Will print 'Hello World' on console
Console.Log(example.test())
```