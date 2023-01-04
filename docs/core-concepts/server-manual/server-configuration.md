---
title: Server Configuration
description: All you need to know to Configure your server!
sidebar_position: 2
tags: [hosting]
---


All you need to know to Configure your server!


## Server Configuration File

The server Configuration file `Config.toml` is generated automatically when the server is launched for the first time. This file will always be overridden with the proper pattern after the server is loaded.

:::tip

nanos world Config files use **TOML** (Tom’s Obvious, Minimal Language), please refer to [https://github.com/toml-lang/toml](https://github.com/toml-lang/toml) for more information and syntax.

:::

```toml reference
https://github.com/nanos-world/nanos-world-server/blob/main/Config.toml
```


### Settings Detailed

| Setting | Description |
| :--- | :--- |
| **`name`** | Name of the Server |
| **`description`** | Description of the Server |
| **`max_players`** | Max amount of players allowed to join |
| **`password`** | Password to be able to connect |
| **`ip`** | Server IP. We recommend leaving it blank |
| **`port`** | Server main Port and HTTP Port (UDP/TCP) |
| **`query_port`** | Server query Port (UDP) |
| **`announce`** | Whether to announce or not in the Server List |
| **`tick_rate`** | Server Tick in ms. We recommend leaving it 33 |
| **`log_level`** | Which Log level to output |
| **`game_mode`** | [game-mode](/core-concepts/packages/packages-guide.md#package-types) package to load -  you can only load one game-mode at once. |
| **`loading_screen`** | [loading-screen](/core-concepts/packages/loading-screen.md) package to load - you can only load one loading-screen at once. |
| **`packages`** | [script](/core-concepts/packages/packages-guide.md#package-types) packages to load |
| **`assets`** | Additional assets to force to load |
| **`map`** | Which map to load |
| **`token`** | Server Token used for authorize downloads through CLI |
| **`banned_ids`** | List of banned nanos account IDs |


## Logo Image

It is possible to have a custom image to be displayed in the server list. For that, add a file called `Server.jpg` besides the server executable with the logo you wish. The recommended size is `300x150`.


## Map & Level

![](/img/docs/server-map.webp)

The Map (or Level) is defined in the Server’s config file, this level will be loaded when the player joins the server and the Path is supposed for be or a built-in asset or an asset which is located at `Assets/` folder.

nanos world counts on (for now) 4 built-in maps: `nanos-world::BlankMap`, `nanos-world::EmptyMap`, `nanos-world::OceanMap` and `nanos-world::TestingMap` which can be used in your server without needing to download any Asset Pack.


## Server Console

![](/img/docs/server.webp)


### Built-in Commands

| Command | Description |
| :--- | :--- |
| `chat [message]` | Sends a chat message |
| `map [map_path]` | Changes the Map, reloads all Packages and reconnect all Players |
| `stop` | Stops the server |
| `package run [package_name] [lua_code]` | Runs a code in a package |
| `package reload [package_name]` | Reloads a package |
| `package reload all` | Reloads all packages |
| `package unload [package_name]` | Unloads a package |
| `package load [package_name]` | Loads a package |


### Custom Commands

All (non built-in) commands will be sent into an event to the scripting/server-side:

```lua title="Server/Index.lua"
Server.Subscribe("Console", function(my_input)
    Console.Log("Console command received: " .. my_input)
end)
```


## Command Line Parameters

It is possible to override the Server Configuration with Command Line Parameters. Note: this will not write to the Config file.

| Parameter | Value Type | Description |
| :--- | :--- | :--- |
| `--name` | string | Server name |
| `--description` | string | Server description |
| `--logo` | string | Server Logo |
| `--password` | string | Server password |
| `--ip` | string | Server IP |
| `--map` | string | Map to load |
| `--port` | number | Server port |
| `--query_port` | number | Server Query port |
| `--announce` | 0 or 1 | If announce in master list |
| `--game_mode` | string | Server game-mode |
| `--loading_screen` | string | Server loading-screen |
| `--packages` | string list | Server packages |
| `--assets` | string list | Server assets |
| `--token` | string | Server authorization token |
| `--max_players` | number | Max allowed players |
| `--save` | 0 or 1 | If to save the parameters in Config.toml |
| `--profiling` | 0 or 1 | Enables Performance Profiling Logs for debugging |
| `--auto_download` | 0 or 1 | Automatically downloads Packages and Assets from Vault if needed |
| `--dedicated_server` | 0 or 1 | If to start as a Dedicated Server or P2P |
| `--async_log` | 0 or 1 | If to use async or sync logs (async provides better performance) - default is 1 |
| `--log_level` | 1, 2 or 3 | If to use Normal, Debug or Verbose logs |
| `--custom_settings` | string | A list of [Custom Settings](/core-concepts/packages/packages-guide#custom-settings) to be passed to scripting |


### One-liner Server Configuration

With Command Line Parameters and [Command Line Interface (CLI)](/core-concepts/server-manual/nanos-world-cli.mdx), it is also possible to automate the full server installation, here's an example:

```shell title="Shell/Linux"
# Installs/Updates the server through SteamCMD
steamcmd +force_install_dir /home/nanos-world-server +login anonymous +app_update "1936830 -beta bleeding-edge" validate +quit

# Installs all needed Packages (this will install needed Assets as well)
./NanosWorldServer.sh --cli install package sandbox battlefield-kill-ui ts-fireworks-tools

# Starts the server with all configs set
./NanosWorldServer.sh --name "nanos world Amazing Sandbox" --description "Awesome Sandbox Server" --map "nanos-world::TestingMap" --gamemode "sandbox" --packages "battlefield-kill-ui,ts-fireworks-tools" --port 7777 --query_port 7778 --max_players 32 --logo "https://i.imgur.com/U1rZp5v.png"
```

Another shorter example:

```shell title="Shell/Linux"
# Starts the server with all configs set and auto downloads the packages and assets if needed
./NanosWorldServer.sh --name "nanos world Amazing Sandbox" --description "Awesome Sandbox Server" --map "nanos-world::TestingMap" --gamemode "sandbox" --packages "battlefield-kill-ui,ts-fireworks-tools" --port 7777 --query_port 7778 --max_players 32 --auto_download 1 --logo "https://i.imgur.com/U1rZp5v.png"
```

## Common Console Messages and Errors

#### `Server Tick too/extreme high! Verify the server performance! Server got stuck for Xms...`

It means the server got **stuck** for X milliseconds. The warning (_yellow_) is not something to worry about, but too many messages in _red_) could mean your server infrastructure is not that good or your scripting code is not that optimized.

Usually the server runs at 33 ticks per second (or the value configured at Config.toml), the server runs in an infinite loop in that frequency, and inside that loop all server operations are executed, such as receiving and sending network packets, triggering lua events, executing functions or callbacks, and so on.

If a single tick takes more than 33 milliseconds, this warning will appear up.

:::tip

In some shared VPS, this warning may appear up more frequently due how the VPS handles the scaling of it's machines, sometimes the provider may think your VPS is "idle" (due nanos world server using extremely low CPU) and may decrease your processing power, causing this warning show up as well.

:::


#### `Assertion Failed: [...] problem (5002) We don't have cert, and self-signed certs not allowed...`

This is an internal problem from Steam Library when you attempt to connect to a server too fast (when it has just started). The server automatically fixes it by retrying the connection, there is **nothing to worry about**.


#### `Lua Stack Error: Should be X, is Y...`

This is an internal error and **should not supposed to happen**. Those are guards set around our Lua Scripting implementation to prevent bad things from happening. If this error appears it means a implementation bug happened. Please communicate immediately with the devs, and if possible how to reproduce that!