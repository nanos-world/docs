---
title: Packages Guide
description: All you need to know about Packages
sidebar_position: 0
tags: [scripting, packages]
keywords: [packages, scripting, lua]
---


**Packages** are pieces/components of your server which will execute Lua scripts to interact to the game. 

![](/img/docs/packages-01.jpg)

Each Package is isolated and have it's own Lua Virtual Machine, this means that each has its own global scope and cannot access others data directly.


## Folder Structure

All Packages must go under `Server/Packages/` folder, each Package is a folder under that.

They can contain the following folders: `Server`, `Client` and `Shared`. Only **Client** and **Shared** folders will be sent and loaded by the clients when they connect.

Each **Package** must have a file called `Index.lua` inside **Server**, **Client** or **Shared** folders, this is the only file which will be triggered when the Package is loaded, this way this file is responsible for including other files and starting up your functionalities.

```text title="Server Folder"
NanosWorldServer.exe
Packages/
├── My_Package_01/
│	├── Server/
│	│   ├── Index.lua
│	│   └── *.lua
│	├── Client/
│	│   └── *.lua
│	├── Shared/
│	│   └── *.lua
│	└── Package.toml
├── My_Package_02/
│	├── Package.toml
│	└── ...
Assets/
Config.toml
```


## Package Configuration

Packages have a configuration file in the root of the package folder, called `Package.toml`, in this file we can setup all pertinent settings related to the Package:

```toml reference
https://github.com/nanos-world/nanos-world-server/blob/main/Package.toml
```


### Settings Detailed

| Setting | Description |
| :--- | :--- |
| **`name`** | Friendly name of the Package |
| **`author`** | Author(s) of the Package |
| **`version`** | Version of the Package - please refer to [SemVer](https://semver.org/) |
| **`image`** | Image URL to be displayed in the Vault |
| **`type`** | Type of the Package - please refer to [Package Types](#package-types) |
| **`force_no_map_script`** | Enabling this will force the map-script (if any) to do NOT load |
| **`auto_cleanup`** | Enabling this will destroy all entities spawned by this Package when it unloads |
| **`packages_requirements`** | List of Packages which need to be loaded first |
| **`assets_requirements`** | List of Asset Packs to be loaded when this package loads |
| **`compatible_maps`** | List of Maps compatible/recommended to work with this Package |


### Package Types

In nanos world we have 4 kind of packages: **script**, **game-mode**, **library** and **loading-screen**, each one with with a specific functionality and an unique purpose.

| Type | Description |
| :--- | :--- |
| **`script`** | Normal Package, will execute it's scripts and start a new **Lua VM** when started. |
| **`game-mode`** | Like `script` but you can only load one `game-mode` package at once.<br />Useful when you are creating full games which cannot be loaded with other full games packages. |
| **`library`** | It will not load a **Lua VM**. Should be loaded through `Package.RequirePackage` from other Packages.<br />Useful when you are creating a library or framework and want it being loaded on clients as well, or when you need to set this as dependency of other packages. |
| **`loading-screen`** | Special Package which will be loaded during player's loading screen.<br />Those packages must have an `Index.html` in the root.<br />Please refer to [Loading Screen](/core-concepts/packages/loading-screen.md) for more information. |

:::tip

If you are creating a **Tool** or some **Addon** package, make it **`script`**!

If you are creating a **Library**, a **Framework** or some **Utility** package, make it **`library`**!

If you are creating an unique and complete **Game** with several functionalities which you don't want to be messed if someone load two full games, make it **`game-mode`**!

:::


## Ignoring Client Folders

Sometimes you want to ignore some folders from being sent to the clients (e.g. auto generated folders from Node.js HTML ones).

So, to make the server ignore it you just need to add an `.ignore` file in the root of that folder. Simple as that 😉.