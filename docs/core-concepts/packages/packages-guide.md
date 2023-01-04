---
title: Packages Guide
description: All you need to know about Packages
sidebar_position: 0
tags: [scripting, packages]
keywords: [packages, scripting, lua]
---


**Packages** are pieces/components of your server which will execute Lua scripts to interact to the game.

![](/img/docs/packages-01.jpg)


## Folder Structure

All Packages must go under `Server/Packages/` folder. Each Package is a folder under that.

They can contain the following folders: `Server`, `Client` and `Shared`. Only **Client** and **Shared** folders will be sent and loaded by the clients when they connect.

Each **Package** must have a file called `Index.lua` inside **Server**, **Client** or **Shared** folders, this is the only file which will be triggered when the Package is loaded, this way this file is responsible for including other files and starting up your functionalities.

```text title="Server Folder"
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

We have 3 types of packages: [script](#script), [game-mode](#game-mode) and [loading-screen](#loading-screen), each one with with a specific functionality and an unique purpose:


### `script`

Script is a normal Package, you can load as many as you want.

```toml title="Package.toml" reference
https://github.com/nanos-world/nanos-world-server/blob/main/_script_.toml
```


### `game-mode`

GameModes are Like `script` but you can only load one `game-mode` package at once.

They are used when you are creating full games which cannot be loaded with other full games packages.

```toml title="Package.toml" reference
https://github.com/nanos-world/nanos-world-server/blob/main/_game_mode_.toml
```


### `loading-screen`

Loading Screen is a special Package which will be loaded during player's loading screen.

It must have an `index.html` in the root. Please refer to [Loading Screen](/core-concepts/packages/loading-screen.md) for more information.

```toml title="Package.toml" reference
https://github.com/nanos-world/nanos-world-server/blob/main/_loading_screen_.toml
```


## Settings Detailed

| Setting | Package Types | Description |
| :--- | :--- | :--- |
| **`force_no_map_package`** | `script`<br/>`game-mode` | Enabling this will force the map package (if any) to do NOT load |
| **`auto_cleanup`** | `script`<br/>`game-mode` | Enabling this will destroy all entities spawned by this Package when it unloads |
| **`compatibility_version`** | `script`<br/>`game-mode` | The game version (`major.minor`) at the time this package was created, for granting backwards compatibility between breaking changes. See more [here](#compatibility-version) |
| **`packages_requirements`** | `script`<br/>`game-mode` | List of Packages dependencies used by this Package which need to be loaded first |
| **`assets_requirements`** | `script`<br/>`game-mode` | List of Asset Packs to be loaded when this package loads |
| **`compatible_maps`** | `game-mode` | List of Maps compatible/recommended to work with this Game Mode |
| **`custom_settings`** | `game-mode` | List of Custom Settings which can be set when starting a new game or passed through command line to the server. See more [here](#custom-settings) |


### Compatibility Version

This setting deserves a special attention. It is meant to assure your packages will not break in future breaking changes updates.

It works by forcing that package to run code in a compatibility mode, meaning that breaking changes will keep working as the way it was before. Example:

Let's say you have this code running right now:

```lua
-- Make an asynchronous HTTP request
HTTP.Request("https://api.nanos.world/", "store/v1/packages/halloween", "GET", "", "application/json", false, {}, function(status, data)
    -- Do something with my data
end)
```

And then, in the hypothetical update 9.99 the API changes and make `HTTP.RequestSync` to become `HTTP.Request` and `HTTP.Request` to become `HTTP.RequestAsync`. I.e. you need to update your code to use `HTTP.RequestAsync` now, this is a breaking change as the new functions uses the same name as before.

With compatibility version, your code can keep working as it was before this update, for that, in your Package.toml you just need to make sure it's `compatibility_version` is set to a version lower than `9.99` (i.e. `9.98`).

:::tip

The Compatibility Mode is a feature that aims to keep old and unmaintained packages/game-modes to keep working for a longer time. But from time to time all the deprecated compatibility modes will be removed from the codebase. So always keep your packages up-to-date!

:::


### Custom Settings

GameModes can define Custom Settings in the `[custom_settings]` section to be set when creating a new game through main menu, or set when starting the server with the command `--custom_settings "var1 = value1, var2 = value2, ..."`

The values defined can be accessed through the method [Server.GetCustomSettings()](https://docs.nanos.world/docs/next/scripting-reference/static-classes/server#getcustomsettings).

#### List of Types

| Type | Description |
| :--- | :--- |
| `boolean` | A toggleable checkbox |
| `integer` | Integer numeric values |
| `floating` | Floating numeric values |
| `text` | Text Box |


## Ignoring Client Folders

Sometimes you want to ignore some folders from being sent to the clients (e.g. auto generated folders from Node.js HTML ones).

So, to make the server ignore it you just need to add an `.ignore` file in the root of that folder. Simple as that 😉.


## Logo Image

It is possible to have a custom image to be displayed in the Vault. For that, add a file called `Package.jpg` besides the Package.toml with the image you wish. The recommended size is `300x150`.