---
description: >-
  Players are Entities that represents the individual behind the mouse and
  keyboard. Players are spawned automatically when connected to the server.
---

# Player

{% hint style="info" %}
You cannot Spawn or Destroy Players.
{% endhint %}

## Usage

```lua
-- Spawns and possess a Character when a Player joins the server
Player.Subscribe("Spawn", function(player)
    local new_char = Character()
    player:Possess(new_char)
end)

-- Destroys the Character when the Player leaves the server
Player.Subscribe("Destroy", function(player)
		local character = player:GetControlledCharacter()
		if (character) then
				character:Destroy()
		end
end)
```

## Functions

|  | **Returns** | **Name** | **Description** |
| :--- | :--- | :--- | :--- |
| [![](../../.gitbook/assets/authority-only.png)](../../core-concepts/scripting/authority-concepts.md) |  | \*\*\*\*[**`Ban`**](player.md#ban)\*\*\*\* | Bans the player from the server |
| [![](../../.gitbook/assets/authority-only.png)](../../core-concepts/scripting/authority-concepts.md) |  | \*\*\*\*[**`Connect`**](player.md#connect)\*\*\*\* | Redirects the player to another server |
| [![](../../.gitbook/assets/authority-only.png)](../../core-concepts/scripting/authority-concepts.md) |  | \*\*\*\*[**`Kick`**](player.md#kick)\*\*\*\* | Kicks the player from the server |
| [![](../../.gitbook/assets/authority-only.png)](../../core-concepts/scripting/authority-concepts.md) |  | \*\*\*\*[**`Possess`**](player.md#possess)\*\*\*\* | Bind the `Player` to a Character |
|  |  | \*\*\*\*[**`SetCameraLocation`**](player.md#setcameralocation)\*\*\*\* | Sets the Player’s Camera Location |
|  |  | \*\*\*\*[**`SetCameraRotation`**](player.md#setcamerarotation)\*\*\*\* | Sets the Player’s Camera Rotation |
| [![](../../.gitbook/assets/authority-only.png)](../../core-concepts/scripting/authority-concepts.md) |  | \*\*\*\*[**`SetName`**](player.md#setname)\*\*\*\* | Sets the player’s name |
|  |  | \*\*\*\*[**`SetValue`**](player.md#setvalue)\*\*\*\* | Sets a value in this entity, which can be accessed by any package |
| [![](../../.gitbook/assets/authority-only.png)](../../core-concepts/scripting/authority-concepts.md) |  | \*\*\*\*[**`SetVOIPChannel`**](player.md#setvoipchannel)\*\*\*\* | Sets the VOIP Channel of this Player |
|  |  | \*\*\*\*[**`SetVOIPSetting`**](player.md#setvoipsetting)\*\*\*\* | Sets the VOIP Settings of this Player |
| [![](../../.gitbook/assets/authority-only.png)](../../core-concepts/scripting/authority-concepts.md) |  | \*\*\*\*[**`UnPossess`**](player.md#unpossess)\*\*\*\* | Release the `Player` from the Character |
|  | [string](../glossary/basic-types.md#string) | \*\*\*\*[**`GetAccountID`**](player.md#getaccountid)\*\*\*\* | Gets the nanos account ID |
|  | [string](../glossary/basic-types.md#string) | \*\*\*\*[**`GetAccountName`**](player.md#getaccountname)\*\*\*\* | Gets the nanos account name |
| [![](../../.gitbook/assets/client-only.png)](../../core-concepts/scripting/authority-concepts.md) | [Vector](../utility-classes/vector.md) | \*\*\*\*[**`GetCameraLocation`**](player.md#getcameralocation)\*\*\*\* | Gets the Player’s Camera Location |
| [![](../../.gitbook/assets/client-only.png)](../../core-concepts/scripting/authority-concepts.md) | [Rotator](../utility-classes/rotator.md) | \*\*\*\*[**`GetCameraRotation`**](player.md#getcamerarotation)\*\*\*\* | Gets the Player’s Camera Rotation |
|  | [Character](character.md) | \*\*\*\*[**`GetControlledCharacter`**](player.md#getcontrolledcharacter)\*\*\*\* | Returns the character of the player |
|  | [number](../glossary/basic-types.md#number) | \*\*\*\*[**`GetID`**](player.md#getid)\*\*\*\* | Gets the network ID of this entity |
| [![](../../.gitbook/assets/authority-only.png)](../../core-concepts/scripting/authority-concepts.md) | [string](../glossary/basic-types.md#string) | \*\*\*\*[**`GetIP`**](player.md#getip)\*\*\*\* | Gets the IP of this Player |
|  | [string](../glossary/basic-types.md#string) | \*\*\*\*[**`GetName`**](player.md#getname)\*\*\*\* | Returns the player’s name |
|  | [number](../glossary/basic-types.md#number) | \*\*\*\*[**`GetPing`**](player.md#getping)\*\*\*\* | Returns the ping of a player |
|  | [string](../glossary/basic-types.md#string) | \*\*\*\*[**`GetType`**](player.md#gettype)\*\*\*\* | Returns the type of this Actor |
|  | [number](../glossary/basic-types.md#number) | \*\*\*\*[**`GetVOIPChannel`**](player.md#getvoipchannel)\*\*\*\* | Returns the VOIP Channel of this Player |
|  | [any](../glossary/basic-types.md#any) | \*\*\*\*[**`GetValue`**](player.md#getvalue)\*\*\*\* | Gets a value given a key |
| [![](../../.gitbook/assets/client-only.png)](../../core-concepts/scripting/authority-concepts.md) | [boolean](../glossary/basic-types.md#boolean) | \*\*\*\*[**`IsLocalPlayer`**](player.md#islocalplayer)\*\*\*\* | Returns if this is the LocalPlayer |
|  | [boolean](../glossary/basic-types.md#boolean) | \*\*\*\*[**`IsValid`**](player.md#isvalid)\*\*\*\* | Returns if this entity is valid \(i.e. wasn’t destroyed and points to a valid entity\) |
|  | [VOIPSetting](../glossary/basic-types.md#voipsetting) | \*\*\*\*[**`GetVOIPSetting`**](player.md#getvoipsetting)\*\*\*\* | Returns this Player VOIP Setting |
|  |  | \*\*\*\*[**`Subscribe`**](player.md#subscribe)\*\*\*\* | Subscribes for an Event |
|  |  | \*\*\*\*[**`Unsubscribe`**](player.md#unsubscribe)\*\*\*\* | Unsubscribes from all subscribed Events in this Entity and in this Package |

## Events

|  | **Name** | **Description** |
| :--- | :--- | :--- |
|  | [**`Destroy`**](player.md#destroy) | Triggered when Player disconnects from the server |
|  | [**`Possess`**](player.md#possess-1) | A `Player` was bound to a Character |
|  | [**`Spawn`**](player.md#spawn) | Triggered when Player connects to the server |
| [ ![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) | [**`Ready`**](player.md#ready) | Triggered when Player is ready \(the client fully joined, loaded the map and all entities and is ready to play\) |
|  | [**`UnPossess`**](player.md#unpossess-1) | A Character was released from the `Player` |
|  | [**`VOIP`**](player.md#voip) | When a Player starts/ends using VOIP |

## Functions Detailed

### [![](../../.gitbook/assets/authority-only.png)](../../core-concepts/scripting/authority-concepts.md) `Ban`

> Bans the player from the server

```lua
my_player:Ban(reason)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`reason`** |  |

### [![](../../.gitbook/assets/authority-only.png)](../../core-concepts/scripting/authority-concepts.md) `Connect`

> Redirects the player to another server

```lua
my_player:Connect(IP, password = "")
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`IP`** |  | Server IP |
| [string](../glossary/basic-types.md#string) | **`password`** | `""` | Server password |

### [![](../../.gitbook/assets/authority-only.png)](../../core-concepts/scripting/authority-concepts.md) `Kick`

> Kicks the player from the server

```lua
my_player:Kick(reason)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`reason`** |  |

### [![](../../.gitbook/assets/authority-only.png)](../../core-concepts/scripting/authority-concepts.md) `Possess`

> Makes a `Player` to possess and control a `Character`

```lua
my_player:Possess(new_character)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [Character](character.md) | **`new_character`** |  |

### `SetCameraLocation`

> Sets the Player's Camera Location \(only works if not possessing any Character\)

```lua
my_player:SetCameraLocation(location)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [Vector](../utility-classes/vector.md) | **`location`** |  |

### `SetCameraRotation`

> Sets the Player's Camera Rotation

```lua
my_player:SetCameraRotation(rotation)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [Rotator](../utility-classes/rotator.md) | **`rotation`** |  |

### [![](../../.gitbook/assets/authority-only.png)](../../core-concepts/scripting/authority-concepts.md) `SetName`

> Sets the player's name

```lua
my_player:SetName(new_name)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`new_name`** |  |

### `SetValue`

> Sets a value in this entity, which can be accessed by any package \(optionally sync on clients if called from server\)
>
> Please refer to [Entity Values](../../core-concepts/scripting/entity-values.md) for more information

```lua
my_player:SetValue(key, value, sync_on_clients)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`key`** |  | Key |
| [any](../glossary/basic-types.md#any) | **`value`** |  | Value |
| [boolean](../glossary/basic-types.md#boolean) | **`sync_on_clients`** |  | Whether or not to sync on Clients \(if called by Server Side\) |

### [![](../../.gitbook/assets/authority-only.png)](../../core-concepts/scripting/authority-concepts.md) `SetVOIPChannel`

> Sets the VOIP Channel of this Player \(will only communicate with other players in the same channel\)

```lua
my_player:SetVOIPChannel(channel)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`channel`** |  |

### `SetVOIPSetting`

> Sets the VOIP Settings of this Player

```lua
my_player:SetVOIPSetting(setting)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [VOIPSetting](../glossary/enums.md#voipsetting) | **`setting`** |  |

### [![](../../.gitbook/assets/authority-only.png)](../../core-concepts/scripting/authority-concepts.md) `UnPossess`

> Release the `Player` from the :ref:`Character`

```lua
my_player:UnPossess()
```

### `GetAccountID`

> Gets the nanos account ID
>
> Returns [string](../glossary/basic-types.md#string)

```lua
my_player:GetAccountID()
```

### `GetAccountName`

> Gets the nanos account name
>
> Returns [string](../glossary/basic-types.md#string)

```lua
my_player:GetAccountName()
```

### [![](../../.gitbook/assets/client-only.png)](../../core-concepts/scripting/authority-concepts.md) `GetCameraLocation`

> Gets the Player's Camera Location
>
> Returns Vector

```lua
my_player:GetCameraLocation()
```

### [![](../../.gitbook/assets/client-only.png)](../../core-concepts/scripting/authority-concepts.md) `GetCameraRotation`

> Gets the Player's Camera Rotation
>
> Returns Rotator

```lua
my_player:GetCameraRotation()
```

### `GetControlledCharacter`

> Returns the character of the player. If the player has not yet been assigned a character, nil is returned
>
> Returns Character or [nil](../glossary/basic-types.md#nil)

```lua
my_player:GetControlledCharacter()
```

### `GetID`

> Gets the network ID of this entity \(same in both client and server\)
>
> Returns [number](../glossary/basic-types.md#number)

```lua
my_player:GetID()
```

### [![](../../.gitbook/assets/authority-only.png)](../../core-concepts/scripting/authority-concepts.md) `GetIP`

> Gets the IP of this Player
>
> Returns [string](../glossary/basic-types.md#string)

```lua
my_player:GetIP()
```

### `GetName`

> Returns the player's name
>
> Returns [string](../glossary/basic-types.md#string)

```lua
my_player:GetName()
```

### `GetPing`

> Returns the ping of a player
>
> Returns [number](../glossary/basic-types.md#number)

```lua
my_player:GetPing()
```

### `GetType`

> Returns the type of this Actor
>
> Returns [string](../glossary/basic-types.md#string)

```lua
my_player:GetType()
```

### `GetVOIPChannel`

> Returns the VOIP Channel of this Player
>
> Returns [VOIPChannel](../glossary/enums.md#voipsetting)

```lua
my_player:GetVOIPChannel()
```

### `GetValue`

> Gets a value given a key. Please refer to [Entity Values](../../core-concepts/scripting/entity-values.md) for more information
>
> Returns [any](../glossary/basic-types.md#any)

```lua
my_player:GetValue(key)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`key`** |  | Key |

### [![](../../.gitbook/assets/client-only.png)](../../core-concepts/scripting/authority-concepts.md) `IsLocalPlayer`

> Returns if this is the LocalPlayer
>
> Returns [boolean](../glossary/basic-types.md#boolean)

```lua
my_player:IsLocalPlayer()
```

### `IsValid`

> Returns if this entity is valid \(i.e. wasn't destroyed and points to a valid entity\)
>
> Returns [boolean](../glossary/basic-types.md#boolean)

```lua
my_player:IsValid()
```

### `GetVOIPSetting`

> Returns this Player VOIP Setting
>
> Returns [VOIPSetting](../glossary/enums.md#voipsetting)

```lua
my_player:GetVOIPSetting()
```

### `Subscribe`

> Subscribes for an Event

```lua
my_player:Subscribe(event_name, callback)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`event_name`** |  |  |
| [function](../glossary/basic-types.md#function) | **`function`** |  |  |

### `Unsubscribe`

> Unsubscribes from all subscribed Events in this Entity and in this Package, optionally passing the function to unsubscribe only that callback

```lua
my_player:Unsubscribe(event_name, callback)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`event_name`** |  |  |
| [function](../glossary/basic-types.md#function) | **`function`** | `nil` |  |

## Events Detailed

### `Destroy`

> Triggered when Player disconnects from the server

```lua
Player.Subscribe("Destroy", function(self)

end)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [Player](player.md) | `self` |  |

### `Possess`

> A Player is now controlling a Character

```lua
Player.Subscribe("Possess", function(self, character)

end)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [Player](player.md) | `self` |  |
| [Character](character.md) | `character` |  |

### `Spawn`

> Triggered when Player connects to the server

```lua
Player.Subscribe("Spawn", function(self)

end)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [Player](player.md) | `self` |  |

###  [![](https://firebasestorage.googleapis.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-McxSn_occzhXBX6BNoH%2Fsync%2F47d896a044d50e645c888356b18fe44c6a94d8d9.png?generation=1624738441629723&alt=media)](https://app.gitbook.com/@gtnardy/s/nanos-world/~/drafts/-MdqDC_0V7F9JcbpHY3y/core-concepts/scripting/authority-concepts#methods-and-events-availability) `Ready`

> Triggered when Player is ready \(the client fully joined, loaded the map and all entities and is ready to play\)

```lua
Player.Subscribe("Ready", function(self)

end)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [Player](player.md) | `self` |  |

### `UnPossess`

> A Character was released from the `Player`

```lua
Player.Subscribe("UnPossess", function(self, character)

end)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [Player](player.md) | `self` |  |
| [Character](character.md) | `character` |  |

### `VOIP`

> When a Player starts/ends using VOIP

```lua
Player.Subscribe("VOIP", function(self, is_talking)

end)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [Player](player.md) | `self` |  |
| [boolean](../glossary/basic-types.md#boolean) | `is_talking` |  |

