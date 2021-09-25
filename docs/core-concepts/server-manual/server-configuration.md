---
description: All you need to know to Configure your server!
sidebar_position: 2
tags: [hosting]
---

# Server Configuration

All you need to know to Configure your server!

## Server Configuration File

:::tip

nanos world Config files use **TOML** \(Tom’s Obvious, Minimal Language\), please refer to [https://github.com/toml-lang/toml](https://github.com/toml-lang/toml) for more information and syntax.

:::

The server Configuration file `Config.toml` is generated automatically when the server is launched for the first time. This file will always be overridden with the proper pattern after the server is loaded.

```toml title="Server.toml"
# server configurations
[server]
    # server name
    name =                  "nanos world Server"
    # server description (max 250 characters)
    description =           ""
    # server logo URL (recommended size: 150x75)
    logo =                  "https://i.imgur.com/U1rZp5v.png"
    # max players
    max_players =           60
    # leave it blank for no password
    password =              ""
    # server IP. we recommend leaving it 0.0.0.0 for default
    ip =                    "0.0.0.0"
	# server port (TCP and UDP forwarding needed)
    port =                  7777
	# query port (UDP forwarding needed)
	query_port =		7778
    # announce server in the master server list
    announce =              true
    # server tick rate in milliseconds (dangerous! server will tick at each [tick_rate] ms, affecting both server and client performance. 33 ms means 30 ticks per second and is the default and recommended value)
    tick_rate =             33
    # log Level. (1) normal - (2) debug - (3) verbose
    log_level =             2

# nanos world configurations
[world]
    # game-mode package to load (set the main game-mode package to load - you can load only one 'game-mode' package type at once)
    game_mode =             ""
    # loading-screen package to load (the loading screen will be displayed when players join your server)
    loading_screen =        ""
    # packages script list (leave it blank to load all packages, this is usually useful when you have tons of packages downloaded and only wants to load one or some)
    packages = [

    ]
    # asset packs list (this will additionally load the asset packs you define here)
    assets = [

    ]
    # default startup map
    map =                   "nanos-world::BlankMap"
    # banned IPs
    banned_ips = [

    ]
```


### Settings Detailed

| Setting | Description |
| :--- | :--- |
| **`name`** | Name of the Server |
| **`description`** | Description of the Server |
| **`logo`** | Image URL to be displayed in the Server List |
| **`max_players`** | Max ammount of players allowed to join |
| **`password`** | Password to be able to connect |
| **`ip`** | Server IP. We recommend leaving it blank |
| **`port`** | Server main Port and HTTP Port (UDP/TCP) |
| **`query_port`** | Server query Port (UDP) |
| **`announce`** | Whether to announce or not in the Server List |
| **`tick_rate`** | Server Tick in ms. We recommend leaving it 33 |
| **`log_level`** | Which Log level to output |
| **`game_mode`** | [game-mode](./core-concepts/packages/packages.md#package-types) package to load -  you can only load one game-mode at once. |
| **`loading_screen`** | [loading-screen](./core-concepts/packages/loading-screen.md) package to load - you can only load one loading-screen at once. |
| **`packages`** | [script](./core-concepts/packages/packages.md#package-types) packages to load |
| **`assets`** | Additional assets to force to load |
| **`map`** | Which map to load |
| **`banned_ips`** | List of banned IPs |

## Map & Level

![](/img/docs/server-map.jpg)

The Map \(or Level\) is defined in the Server’s config file, this level will be loaded when the player joins the server and the Path is supposed for be or a built-in asset or an asset which is located at `Assets/` folder.

nanos world counts on \(for now\) 2 built-in maps: `nanos-world::BlankMap` and `nanos-world::TestingMap` which can be used in your server without needing to download any Asset Pack.

## Server Console

![](/img/docs/server.jpg)

### Built-in Commands

| Command | Description |
| :--- | :--- |
| `chat [message]` | Sends a chat message |
| `stop` | Stops the server |
| `package run [package_name] [lua_code]` | Runs a code in a package |
| `package reload [package_name]` | Reloads a package |
| `package reload all` | Reloads all packages |
| `package unload [package_name]` | Unloads a package |
| `package load [package_name]` | Loads a package |

### Custom Commands

All \(non built-in\) commands will be sent into an event to the scripting/server-side:

```lua title="Server/Index.lua"
Server.Subscribe("Console", function(my_input)
    Package.Log("Console command received: " .. my_input)
end)
```

## Command Line Parameters

It is possible to override the Server Configuration with Command Line Parameters. Note: this will not write to the Config file.

| Parameter | Value Type | Description |
| :--- | :--- | :--- |
| `--name` | string | Server name |
| `--description` | string | Server description |
| `--password` | string | Server password |
| `--ip` | string | Server IP |
| `--map` | string | Map to load |
| `--port` | number | Server port |
| `--query_port` | number | Server Query port |
| `--announce` | 0 or 1 | If announce in master list |
| `--packages` | string list | Server packages |
| `--save` | 0 or 1 | If to save the parameters in Config.toml |
| `--max_players` | number | Max allowed players |
| `--profiling` | 0 or 1 | Enables Performance Profiling Logs for debugging |

## Common Console Messages/Warnings/Erros and it’s meanings

#### `Server Tick too/extreme high! Verify the server performance! Server got stuck for Xms.`

It means the server got **stuck** \(laggy\) for X milliseconds. The warning \(_yellow_\) is not something to worry about, but too many Errors \(_red_\) could mean your server infrastructure is not that good or your scripting code is not that optimized. The server _tries¹_ runs at 33 Ticks per seconds \(or the amount configured at Config.toml\). The server runs in an infinite loop which in a frequency of **1/33** milliseconds. Inside this loop, all server operations are executed: receiving/sending network packages, executing functions \(received from network\), triggering scripting events, executing all Scripting’s Ticks events, calculating Trigger overlaps, and so on. So if any of these operations take more more than **1/33** milliseconds to run, this warning will appear up.

I said _tries¹_ because on windows that is not that precise than on linux due internal c++ implementations.

