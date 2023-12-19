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
| **`game_mode`** | [game-mode](/docs/core-concepts/packages/packages-guide.md#game-mode) package to load -  you can only load one game-mode at once. |
| **`loading_screen`** | [loading-screen](/docs/core-concepts/packages/loading-screen.md) package to load - you can only load one loading-screen at once. |
| **`packages`** | [script](/docs/core-concepts/packages/packages-guide.md#script) packages to load |
| **`map`** | [map](/docs/core-concepts/packages/packages-guide.md#map) package to load |
| **`assets`** | Additional assets to force to load |
| **`token`** | Server Token used for authorize downloads through CLI |
| **`banned_ids`** | List of banned nanos account IDs |


## Logo Image

It is possible to have a custom image to be displayed in the server list. For that, add a file called `Server.jpg` besides the server executable with the logo you wish. The recommended size is `300x150`.

:::tip

You can pass a JPG image URL to `--logo` parameter to download and use a image from the web instead of placing it physically in the folder.

:::


## Map & Level

![](/img/docs/server-map.webp)

The Map (or Level) is defined in the Server's config file, this map will be loaded when the player joins the server in the client side.

To configure a map, please refer to [Packages Guide](/docs/core-concepts/packages/packages-guide.md#map) to create a Map Package pointing to the correct Asset.

nanos world counts on (for now) 4 built-in maps: `default-blank-map`, `default-empty-map`, `default-ocean-map` and `default-testing-map` which can be used in your server without needing to download any Package/Asset Pack.


## Server Console

![](/img/docs/server.webp)


### Built-in Commands

| Command | Description |
| :--- | :--- |
| `chat <message>` | Sends a chat message |
| `kick <player_id> <reason>` | Kicks a player by it's ID |
| `map <map_path>` | Reloads all Packages and reconnect the Players in new Map |
| `restart` | Restarts the server, reloading all Packages and reconnecting the Players |
| `stop` | Stops the server |
| `players` | Lists all Players connected |
| `package run <package_name> <lua_code>` | Runs a code in a Package |
| `package reload all` | Reloads all Packages and restarts the Lua Virtual Machine |
| `package reload <package_names...>` | Reloads Packages |
| `package unload <package_names...>` | Unloads Packages |
| `package load <package_names...>` | Loads Packages |
| `package hotreload <package_names...>` | Reloads all files but keeps the memory as is |


### Custom Commands

It is possible to define custom commands as well, for that please refer to [Console.RegisterCommand()](/docs/scripting-reference/static-classes/console.mdx#static-function-registercommand).


## Command Line Parameters

It is possible to override the Server Configuration with Command Line Parameters.

| Parameter | Value Type | Description |
| :--- | :--- | :--- |
| `--name` | string | Server name |
| `--description` | string | Server description |
| `--logo` | string | Server Logo (downloads the image in-memory) |
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
| `--dedicated_server` | 0 or 1 | If to start as a Dedicated Server or P2P |
| `--async_log` | 0 or 1 | If to use async or sync logs (async provides better performance) - default is 1 |
| `--log_level` | 1, 2 or 3 | If to use Normal, Debug or Verbose logs |
| `--custom_settings` | toml string | A list of [Custom Settings](/core-concepts/packages/packages-guide.md#custom-settings) to be passed to scripting in toml format |
| `--compression` | 0-9 | Sets the compression level to use in some networking operations - 0 disables it, 1 is the fastest and 9 is the slower but highest compression ratio |
| `--save` | *flag* | If to save the passed parameters in Config.toml |
| `--profiling` | *flag* | Enables Performance Profiling Logs for debugging |
| `--auto_download` | *flag* | Automatically downloads Packages and Assets from Vault if needed |
| `--use_vault_assets_lean` | *flag* | Only downloads the Asset Pack's .toml configuration files from Vault |
| `--log_show_thread` | *flag* | Shows the current running thread of each outputted log |
| `--enable_unsafe_libs` | *flag* | Enables executing the methods `os.execute`, `os.rename`, `os.remove`, `os.exit`, `os.getenv`, `os.tmpname`, `os.setlocale`, `dofile`, `loadfile` and all `io.*` on server side (**Caution**: those methods may allow malicious operations to run on your server, make sure you know what you are doing) |

:::tip

**Flag** Value Types don't require any argument, just pass the parameter like `--parameter`.

:::


### One-liner Server Configuration

With Command Line Parameters and [Command Line Interface (CLI)](/core-concepts/server-manual/command-line-interface.mdx), it is also possible to automate the full server installation, here's an example:

```shell title="Shell/Linux"
# Installs/Updates the server through SteamCMD
steamcmd +force_install_dir /home/nanos-world-server +login anonymous +app_update "1936830 -beta bleeding-edge" validate +quit

# Installs all needed Packages (this will install needed Assets as well)
./NanosWorldServer.sh --cli install package sandbox battlefield-kill-ui ts-fireworks-tools

# Starts the server with all configs set
./NanosWorldServer.sh --name "nanos world Amazing Sandbox" --description "Awesome Sandbox Server" --map "nanos-world::TestingMap" --game_mode "sandbox" --packages "battlefield-kill-ui,ts-fireworks-tools" --port 7777 --query_port 7778 --max_players 32 --logo "https://i.imgur.com/vnB8CB5.jpg"
```

Another shorter example:

```shell title="Shell/Linux"
# Starts the server with all configs set and auto downloads the packages and assets if needed
./NanosWorldServer.sh --name "nanos world Amazing Sandbox" --description "Awesome Sandbox Server" --map "nanos-world::TestingMap" --game_mode "sandbox" --packages "battlefield-kill-ui,ts-fireworks-tools" --port 7777 --query_port 7778 --max_players 32 --auto_download 1 --logo "https://i.imgur.com/vnB8CB5.jpg"
```

## Common Console Messages and Errors

#### `Server Tick too/extreme high! Verify the server performance! Server got stuck for Xms...`

It means the server got **stuck** for X milliseconds. The warning (_yellow_) is not something to worry about, but too many messages in _red_ could mean your server infrastructure is not that good or your scripting code is not that optimized.

Usually the server runs at 33 ticks per second (or the value configured at Config.toml), the server runs in an infinite loop in that frequency, and inside that loop all server operations are executed, such as receiving and sending network packets, triggering lua events, executing functions or callbacks, and so on.

If a single tick takes more than 33 milliseconds, this warning will appear up.

:::tip

In some shared VPS, this warning may appear up more frequently due how the VPS handles the scaling of it's machines, sometimes the provider may think your VPS is "idle" (due nanos world server using extremely low CPU) and may decrease your processing power, causing this warning show up as well.

:::


#### `Lua Stack Error: Should be X, is Y...`

This is an internal error and **should not supposed to happen**. Those are guards set around our Lua Scripting implementation to prevent bad things from happening. If this error appears it means a implementation bug happened. Please communicate immediately with the devs, and if possible how to reproduce that!


#### `...Was it supposed to happen?`

Those FATAL errors usually shouldn't happen, if you experience any, please let us know.