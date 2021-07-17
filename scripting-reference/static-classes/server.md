---
description: Server represents all Server controls in the Server side
---

# Server

{% hint style="success" %}
This is a Static Class named `Server`. You can access it’s methods directly with `.`. It is not possible to initialize or create new instances.

This is a **Server** only Class.
{% endhint %}

## Usage

{% tabs %}
{% tab title="Lua" %}
{% code title="Server/Index.lua" %}
```lua
-- prints "Server started" when the server is starting
Server.Subscribe("Start", function()
    Package.Log("Server started")
end)

-- prints "Server stopped" when the server stops / shutdown
Server.Subscribe("Stop", function()
    Package.Log("Server stopped")
end)

-- prints the delta time about every 30 ms
Server.Subscribe("Tick", function(delta_time)
    Package.Log("Tick: " .. delta_time)
end)

-- sends a chat message to everyone
Server.BroadcastChatMessage("Welcome to the server!")

-- makes a HTTP Request
Server.HTTPRequest("localhost:7777", "/fetch", "GET", "", {}, function(status, data)
    Package.Log(status) -- 200
    Package.Log(data)
    local json_ret = JSON.parse(data)
    -- ...
end)
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Functions

| Returns | **Name** | **Description** |
| :--- | :--- | :--- |
|  | [**`BroadcastChatMessage`**](server.md#broadcastchatmessage) | Sends a chat message to everyone |
|  | [**`ChangeMap`**](server.md#changemap) | Restarts the server in a new Map, restarts all packages and reconnects all players |
|  | [**`HTTPRequest`**](server.md#httprequest) | Makes a HTTP Request, the result will be returned in the provided Callback function in the format \(Status, Response\) |
|  | [**`ReloadPackage`**](server.md#reloadpackage) | Reloads a Package |
|  | [**`SendChatMessage`**](server.md#sendchatmessage) | Sends a chat message to Player only |
|  | [**`SetDescription`**](server.md#setdescription) | Sets the description of the server, optionally overrides Config.toml |
|  | [**`SetLogo`**](server.md#setlogo) | Sets the logo of the server, optionally overrides Config.toml |
|  | [**`SetMaxPlayers`**](server.md#setmaxplayers) | Sets the maximum player slots of the server, optionally overrides Config.toml |
|  | [**`SetName`**](server.md#setname) | Sets the name of the server, optionally overrides Config.toml |
|  | [**`SetPassword`**](server.md#setpassword) | Sets the password of the server, optionally overrides Config.toml |
|  | [**`SetValue`**](server.md#setvalue) | Sets a global value in the Server, which can be accessed from anywhere \(server side\) |
|  | [**`Stop`**](server.md#stop) | Stops the server |
|  | [**`Subscribe`**](server.md#subscribe) | Subscribes for an Event |
|  | [**`UnloadPackage`**](server.md#unloadpackage) | Unloads a Package |
|  | [**`Unsubscribe`**](server.md#unsubscribe) | Unsubscribes from all subscribed Events in this Class and in this Package, optionally passing the function to unsubscribe only that callback |
| [string](../glossary/basic-types.md#string) | [**`GetMap`**](server.md#getmap) | Returns the current Map |
| [table](../glossary/basic-types.md#table) | [**`GetMapConfig`**](server.md#getmapconfig) | Returns a list of the Custom Config of the current map \(stored in the MAP\_NAME.toml\) |
| [table](../glossary/basic-types.md#table) | [**`GetPackage`**](server.md#getpackage) | Returns a list of Packages folder names available in the server, optionally returns only loaded and running packages |
|  | [**`GetValue`**](server.md#getvalue) | Gets a value given a key |

## Events

| **Name** | **Description** |
| :--- | :--- |
| [**`Chat`**](server.md#chat) | Called when a player types something in the chat - return false to do not send the message |
| [**`ChatEntry`**](server.md#chatentry) | Called when a Chat Entry is received, this is also triggered when `SendChatMessage` is called |
| [**`Console`**](server.md#console) | Called when a console command is submitted |
| [**`LogEntry`**](server.md#logentry) | Called when a Server log is received |
| [**`Start`**](server.md#start) | Server has been started. |
| [**`PlayerConnect`**](server.md#playerconnect) | Called when a player is attempting to connect to the server - return false to do not allow it |
| [**`Stop`**](server.md#stop) | Server has been stopped. |
| [**`Tick`**](server.md#tick) | Is called every 30 ms by default. Only small operations should be performed here, otherwise this can lead the server to delays. |

## Functions Detailed

### `BroadcastChatMessage`

> Sends a chat message to everyone

```lua
Server.BroadcastChatMessage(message)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`message`** |  |  |

### `ChangeMap`

> Restarts the server in a new Map, restarts all packages and reconnects all players

```lua
Server.ChangeMap(map_path)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`map_path`** |  |  |

### `HTTPRequest`

> Makes a HTTP Request, the result will be returned in the provided Callback function in the format \(Status, Response\)

```lua
Server.HTTPRequest(uri, endpoint, method, data, headers, callback)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`uri`** |  |  |
| [string](../glossary/basic-types.md#string) | **`endpoint`** | \`\` |  |
| [string](../glossary/basic-types.md#string) | **`method`** | `GET` |  |
| [string](../glossary/basic-types.md#string) | **`data`** | \`\` |  |
| [table](../glossary/basic-types.md#table) | **`headers`** | `{}` |  |
| [function](../glossary/basic-types.md#function) | **`callback`** | `nil` |  |

### `ReloadPackage`

> Reloads a Package

```lua
Server.ReloadPackage(package_folder_name)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`package_folder_name`** |  |  |

### `SendChatMessage`

> Sends a chat message to Player only

```lua
Server.SendChatMessage(player, message)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [Player](../classes/player.md) | **`player`** |  |  |
| [string](../glossary/basic-types.md#string) | **`message`** |  |  |

### `SetDescription`

> Sets the description of the server, optionally overrides Config.toml

```lua
Server.SetDescription(description, persist_to_config_file)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`description`** |  |  |
| [boolean](../glossary/basic-types.md#boolean) | **`persist_to_config_file`** | `false` |  |

### `SetLogo`

> Sets the logo of the server, optionally overrides Config.toml

```lua
Server.SetLogo(logo_url, persist_to_config_file)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`logo_url`** |  |  |
| [boolean](../glossary/basic-types.md#boolean) | **`persist_to_config_file`** | `false` |  |

### `SetMaxPlayers`

> Sets the maximum player slots of the server, optionally overrides Config.toml

```lua
Server.SetMaxPlayers(max_players, persist_to_config_file)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`max_players`** |  |  |
| [boolean](../glossary/basic-types.md#boolean) | **`persist_to_config_file`** | `false` |  |

### `SetName`

> Sets the name of the server, optionally overrides Config.toml

```lua
Server.SetName(name, persist_to_config_file)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`name`** |  |  |
| [boolean](../glossary/basic-types.md#boolean) | **`persist_to_config_file`** | `false` |  |

### `SetPassword`

> Sets the password of the server, optionally overrides Config.toml

```lua
Server.SetPassword(password, persist_to_config_file)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`password`** |  |  |
| [boolean](../glossary/basic-types.md#boolean) | **`persist_to_config_file`** | `false` |  |

### `SetValue`

> Sets a global value in the Server, which can be accessed from anywhere \(server side\)
>
> Please refer to [Entity Values](../../core-concepts/scripting/entity-values.md) for more information

```lua
Server.SetValue(key, value)
```

| Type | Parameter | Description |  |
| :--- | :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`key`** |  | Key |
| [any](../glossary/basic-types.md#any) | **`value`** |  | Value |

### `Stop`

> Stops the server

```lua
Server.Stop()
```

### `Subscribe`

> Subscribes for an Event

```lua
Server.Subscribe(event_name, callback)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`event_name`** |  |
| [function](../glossary/basic-types.md#function) | **`function`** |  |

### `UnloadPackage`

> Unloads a Package

```lua
Server.UnloadPackage(package_folder_name)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`package_folder_name`** |  |  |

### `Unsubscribe`

> Unsubscribes from all subscribed Events in this Class and in this Package, optionally passing the function to unsubscribe only that callback

```lua
Server.Unsubscribe(event_name, callback)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`event_name`** |  |  |
| [function](../glossary/basic-types.md#function) | **`function`** | `nil` |  |

### `GetMap`

> Returns the current Map
>
> Returns [string](../glossary/basic-types.md#string)

```lua
Server.GetMap()
```

### `GetMapConfig`

> Returns a list of the Custom Config of the current map \(stored in the MAP\_NAME.toml\)
>
> Returns [table](../glossary/basic-types.md#table)

```lua
Server.GetMapConfig()
```

### `GetPackages`

> Returns a list of Packages folder names available in the server, optionally returns only loaded and running packages
>
> Returns [table](../glossary/basic-types.md#table)

```lua
Server.GetPackages(only_loaded)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [boolean](../glossary/basic-types.md#boolean) | **`only_loaded`** | `true` |  |

### `GetValue`

> Gets a value given a key. Please refer to [Entity Values](../../core-concepts/scripting/entity-values.md) for more information
>
> Returns [any](../glossary/basic-types.md#any)

```lua
Server.GetValue(key)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`key`** |  |

## Events Detailed

### `Chat`

> Called when a player types something in the chat - return false to do not send the message

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`text`** |  |
| [Player](../classes/player.md) | **`sender`** |  |

```lua
Server.Subscribe("Chat", function(text, sender)

end)
```

### `ChatEntry`

> Called when a Chat Entry is received, this is also triggered when `SendChatMessage` is called

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`text`** |  |
| [Player](../classes/player.md) | **`sender`** |  |

```lua
Server.Subscribe("ChatEntry", function(text, sender)

end)
```

### `Console`

> Called when a console command is submitted

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`text`** |  |

```lua
Server.Subscribe("Console", function(text)

end)
```

### `LogEntry`

> Called when a Server log is received

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`text`** |  |
| [LogType](../glossary/enums.md#logtype) | **`type`** |  |

```lua
Server.Subscribe("LogEntry", function(text, type)

end)
```

### `Start`

> Server has been started.

```lua
Server.Subscribe("Start", function()

end)
```

### `PlayerConnect`

> Called when a player is attempting to connect to the server Return false to do not allow it

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`IP`** |  |
| [string](../glossary/basic-types.md#string) | **`player_account_ID`** |  |
| [string](../glossary/basic-types.md#string) | **`player_name`** |  |

```lua
Server.Subscribe("PlayerConnect", function(IP, player_account_ID, player_name)

end)
```

### `Stop`

> Server has been stopped.

```lua
Server.Subscribe("Stop", function()

end)
```

### `Tick`

> Is called every 30 ms by default. Only small operations should be performed here, otherwise this can lead the server to delays.

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`delta_time`** |  |

```lua
Server.Subscribe("Tick", function(delta_time)

end)
```

