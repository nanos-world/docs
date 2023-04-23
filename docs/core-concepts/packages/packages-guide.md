---
title: Packages Guide
description: All you need to know about Packages
sidebar_position: 0
tags: [scripting, packages]
keywords: [packages, scripting, lua]
---


**Packages** are pieces/components of your server with ability to contain Lua scripts to interact with the game, define loading screens or maps.

![](/img/docs/packages-01.jpg)


## Folder Structure

All Packages must go under `Server/Packages/` folder. Each Package is a folder under that.

They can contain the following folders: `Server`, `Client` and `Shared`. Only **Client** and **Shared** folders will be sent and loaded by the clients when they connect.

Each **Package** which contains Lua scripts must have a file called `Index.lua` inside **Server**, **Client** or **Shared** folders, this is the only file which will be triggered when the Package is loaded, this file is responsible for including other files and starting up your functionalities.

```folder-structure title="Server Folder"
NanosWorldServer.exe
Packages/
├── my-package-01/
│	├── Server/
│	│   ├── Index.lua
│	│   └── *.lua
│	├── Client/
│	│   └── *.lua
│	├── Shared/
│	│   └── *.lua
│	└── Package.toml
├── my-package-02/
│	├── Package.toml
│	└── ...
├── my-package-loading-screen-01/
│	├── Index.html
│	├── Package.toml
│	└── ...
Assets/
Config.toml
```


## Package Configuration

Packages have a configuration file in the root of the package folder, called `Package.toml`, in this file we can setup all pertinent settings related to the Package. Each [Package Type](#package-types) has it's own configuration file format.

They all share the same header `[meta]`, which contains the following settings:

```toml reference
https://github.com/nanos-world/nanos-world-server/blob/main/_meta.toml
```

| Setting | Description |
| :--- | :--- |
| **`title`** | Friendly name |
| **`author`** | Contributor(s) |
| **`version`** | Version - in the [SemVer](https://semver.org/) format `X.Y.Z` |


## Package Types

We have 4 types of packages: [script](#script), [game-mode](#game-mode), [map](#map) and [loading-screen](#loading-screen), each one with with a specific functionality and an unique purpose:


### `script`

Script is a normal Package type, which can load Lua script files, you can load as many `script` Packages as you want. They are defined in the `packages` entry of the Server Config.toml.



```toml title="Package.toml" reference
https://github.com/nanos-world/nanos-world-server/blob/main/_script.toml
```


### `game-mode`

GameModes are like `script` packages but you can only load one `game-mode` package at once. They are defined in the `game_mode` entry of Config.toml.

They are used when you are creating full games which cannot be loaded with other full games packages.

```toml title="Package.toml" reference
https://github.com/nanos-world/nanos-world-server/blob/main/_game_mode.toml
```


### `loading-screen`

Loading Screen is a special Package type which is loaded during player's loading to display a custom Loading Screen as HTML. They are defined in the `loading_screen` entry of Config.toml.

It must have an `index.html` in the root. Please refer to [Loading Screen](/core-concepts/packages/loading-screen.md) for more information.

```toml title="Package.toml" reference
https://github.com/nanos-world/nanos-world-server/blob/main/_loading_screen.toml
```


### `map`

Map is a special Package type which defines the configuration of a Map entry. They are defined in the `map` entry of Config.toml.

It contains all functionalities from a `script`, being able to execute scripts as well. With the addition it is used to load a map, having the options to have custom data and spawn points defined on its Package.toml natively.

```toml title="Package.toml" reference
https://github.com/nanos-world/nanos-world-server/blob/main/_map.toml
```

:::tip

As nanos world server is not aware of Unreal or it's Assets, we need to somehow say to the server where are the scriptable part of the map, such as Spawn Points, Props locations, Weapon locations and so on.

It is a recommended approach to implement all Props, Weapons and Vehicles spawn locations in your Map Package `Server/Index.lua` and define all Player's Spawn points in the `Package.toml` file.

:::


## Settings Detailed

| Setting | Package Types | Description |
| :--- | :--- | :--- |
| **`force_no_map_package`** | `script`<br/>`game-mode` | Enabling this will force the map package (if any) to do NOT load |
| **`auto_cleanup`** | `script`<br/>`game-mode`<br/>`map` | Enabling this will destroy all entities spawned by this Package when it unloads |
| **`compatibility_version`** | `script`<br/>`game-mode`<br/>`map` | The game version (`major.minor`) at the time this package was created, for granting backwards compatibility between breaking changes. See more [here](/docs/core-concepts/packages/compatibility-versions.md) |
| **`packages_requirements`** | `script`<br/>`game-mode`<br/>`map` | List of Packages dependencies used by this Package which need to be loaded first |
| **`assets_requirements`** | `script`<br/>`game-mode`<br/>`map` | List of Asset Packs to be loaded when this package loads |
| **`compatible_game_modes`** | `script`<br/>`map` | List of Game Modes compatible/recommended to work with this Package |
| **`compatible_maps`** | `game-mode` | List of Maps compatible/recommended to work with this Game Mode |
| **`custom_settings`** | `game-mode` | List of Custom Settings which can be set when starting a new game or passed through command line to the server. See more [here](#custom-settings) |
| **`map_asset`** | `map` | Asset Path to the Map Asset in the format `[ASSET_PACK]::[ASSET_KEY]` |
| **`spawn_points`** | `map` | List of Spawn Points in the format `{ location = "Vector()", rotation = "Rotator()" }, ...` which can be accessed through [Server.GetMapSpawnPoints()](/docs/scripting-reference/static-classes/server.mdx#static-function-getmapspawnpoints) |
| **`custom_data`** | `map` | List of Custom Data which can be accessed when this Map is loaded. See more [here](#custom-data) |


### Custom Settings

GameModes can define Custom Settings in the `[custom_settings]` section to be set when creating a new game through main menu, or set when starting the server with the command `--custom_settings "var1 = value1, var2 = value2, ..."`

The values defined can be accessed through the method [Server.GetCustomSettings()](/docs/scripting-reference/static-classes/server.mdx#static-function-getcustomsettings).

#### List of Types

| Type | Description |
| :--- | :--- |
| `boolean` | A toggleable checkbox |
| `integer` | Integer numeric values |
| `floating` | Floating numeric values |
| `select` | List of string values displayed as a Dropdown |
| `text` | Text Box |


### Custom Data

Maps can define Custom Data in the `[custom_data]` section.

The values defined are loaded when this Map Package is loaded and can be accessed through the method [Server.GetMapConfig()](https://docs.nanos.world/docs/next/scripting-reference/static-classes/server#static-function-getmapconfig).

#### Usage Example

```toml
[custom_data]
	my_key = 123
	my_another_key = "hello world!"
	my_array = [ "whoa", "yeah", 123 ]
```


## Ignoring Client Folders

Sometimes you want to ignore some folders from being sent to the clients (e.g. auto generated folders from Node.js HTML ones).

To make the server ignore it you just need to add an `.ignore` file in the root of that folder. Simple as that 😉.


## Logo Image

It is possible to have a custom image to be displayed in the Vault. For that, add a file called `Package.jpg` besides the Package.toml with the image you wish. The recommended size is `300x150`.

:::tip

Package Images are only used if your package is not on the Vault. Also it is not recommended to upload Packages with the Package.jpg file as this is not used and only bloats the Package size.

:::