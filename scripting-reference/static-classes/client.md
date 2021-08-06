---
description: Static Class present on Client side
---

# Client

![](../../.gitbook/assets/image%20%2875%29.png)

{% hint style="success" %}
This is a Static Class named `Client`. You can access it’s methods directly with `.`. It is not possible to initialize or create new instances.

This is a **Client** only Class.
{% endhint %}

## Functions

| **Returns** | **Name** | **Description** |
| :--- | :--- | :--- |
|  | [**`CallLevelBlueprintEvent`**](client.md#calllevelblueprintevent) | Calls a Level Blueprint custom event \(which can be added when creating levels through Unreal Engine\) |
|  | [**`DrawDebugLine`**](client.md#drawdebugline) | Draws a Debug Line in the World |
|  | [**`DrawDebugPoint`**](client.md#drawdebugpoint) | Draws a Debug Point in the World |
|  | [**`DrawDebugSphere`**](client.md#drawdebugsphere) | Draws a Debug Line in the World |
|  | [**`InitializeDiscord`**](client.md#initializediscord) | Initializes the Discord Integration with your custom client\_id |
|  | [**`SendChatMessage`**](client.md#sendchatmessage) | Sends a chat message which will display local only |
|  | [**`SetChatConfiguration`**](client.md#setchatconfiguration) | Configure the Chat |
|  | [**`SetChatVisibility`**](client.md#setchatvisibility) | Set if the Chat is visible or not |
|  | [**`SetCrosshairEnabled`**](client.md#setcrosshairenabled) | Enables/Disables the default Crosshair |
|  | [**`SetHardwareCursor`**](client.md#sethardwarecursor) | Loads or sets a hardware cursor from the content directory in the game. |
|  | [**`SetDiscordActivity`**](client.md#setdiscordactivity) | Communicates with Discord and sets a custom user status |
|  | [**`SetInputEnabled`**](client.md#setinputenabled) | Toggles Local Player input |
|  | [**`SetMouseEnabled`**](client.md#setmouseenabled) | Displays/Hides Mouse Cursor |
|  | [**`SetOutlineColor`**](client.md#setoutlinecolor) | Changes the Outline Color for interactable stuff |
|  | [**`SetHighlightColor`**](client.md#sethighlightcolor) | Changes the Highlight Color for highlighted actors at a specific Index. Multiply it by 5 \(or more\) for having a glowing effect. |
|  | [**`SetValue`**](client.md#setvalue) | Sets a global value in the Client, which can be accessed from anywhere \(client side\) |
|  | [**`Spectate`**](client.md#spectate) | Spectates a Player. The local camera will follow the Player’s camera. |
|  | [**`Subscribe`**](client.md#subscribe) | Subscribes for an Event |
|  | [**`Unsubscribe`**](client.md#unsubscribe) | Unsubscribes from all subscribed Events in this Class and in this Package, optionally passing the function to unsubscribe only that callback |
|  | [**`Unspectate`**](client.md#unspectate) | Leaves the Spectator’s State. |
| [table](../glossary/basic-types.md#table) | [**`Trace`**](client.md#trace) | Trace a ray against the world and returns a table with the first blocking hit information |
| [Player](../classes/player.md) | [**`GetLocalPlayer`**](client.md#getlocalplayer) | Gets the local Player |
| [Vector](../utility-classes/vector.md) | [**`GetRandomReachablePointInRadius`**](client.md#getrandomreachablepointinradius) | Finds random, reachable point in navigable space restricted to radius around origin |
| [Vector2D](../utility-classes/vector2d.md) | [**`GetMousePosition`**](client.md#getmouseposition) | Gets the current mouse screen location |
| [table](../glossary/basic-types.md#table) | [**`GetPackages`**](client.md#getpackages) | Returns a list of Packages folder names loaded and running in the client |
| [any](../glossary/basic-types.md#any) | [**`GetValue`**](client.md#getvalue) | Gets a value given a key |
| [boolean](../glossary/basic-types.md#boolean) | [**`IsKeyDown`**](client.md#iskeydown) | Returns if a key is being pressed |
| [boolean](../glossary/basic-types.md#boolean) | [**`IsMouseEnabled`**](client.md#ismouseenabled) |  |

## Events

| **Name** | **Description** |
| :--- | :--- |
| [**`Chat`**](client.md#chat) | Called when a chat text is submitted \(by LocalPlayer\) |
| [**`ChatEntry`**](client.md#chatentry) | Called when a Chat Entry is received |
| [**`Console`**](client.md#console) | Called when a console command is submitted |
| [**`KeyDown`**](client.md#keydown) | A keyboard key is being pressed |
| [**`KeyPress`**](client.md#keypress) | A keyboard key has been pressed |
| [**`KeyUp`**](client.md#keyup) | A keyboard key has been released |
| [**`LogEntry`**](client.md#logentry) | Called when a Client log is received |
| [**`MouseDown`**](client.md#mousedown) | A mouse button has been pressed / is being pressed |
| [**`MouseUp`**](client.md#mouseup) | A mouse button has been released |
| [**`Tick`**](client.md#tick) | Called Every Frame. Do not abuse |

## Functions Detailed

### `CallLevelBlueprintEvent`

> Calls a Level Blueprint custom event \(which can be added when creating levels through Unreal Engine\). Parameters can be concatenated to event\_name like `"MyEventName 123, 'MyParameter2', 456"`

```lua
Client.CallLevelBlueprintEvent(event_name)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`event_name`** |  |

### `DrawDebugLine`

> Draws a Debug Line in the World

```lua
Client.DrawDebugLine(start_position, end_position, color, duration, thickness)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [Vector](../utility-classes/vector.md) | **`start_position`** |  |  |
| [Vector](../utility-classes/vector.md) | **`end_position`** |  |  |
| [Color](../utility-classes/color.md) | **`color`** | `Color.RED` |  |
| [number](../glossary/basic-types.md#number) | **`duration`** | `5` |  |
| [number](../glossary/basic-types.md#number) | **`thickness`** | `0` |  |

### `DrawDebugPoint`

> Draws a Debug Point in the World

```lua
Client.DrawDebugPoint(start_position, color, duration, thickness)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [Vector](../utility-classes/vector.md) | **`start_position`** |  |  |
| [Color](../utility-classes/color.md) | **`color`** | `Color.RED` |  |
| [number](../glossary/basic-types.md#number) | **`duration`** | `5` |  |
| [number](../glossary/basic-types.md#number) | **`thickness`** | `0` |  |

### `DrawDebugSphere(`

> Draws a Debug Line in the World

```lua
Client.DrawDebugSphere(start_position, radius, segments, color, duration, thickness)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [Vector](../utility-classes/vector.md) | **`start_position`** |  |  |
| [number](../glossary/basic-types.md#number) | **`radius`** |  |  |
| [number](../glossary/basic-types.md#number) | **`segments`** |  |  |
| [Color](../utility-classes/color.md) | **`color`** | `Color.RED` |  |
| [number](../glossary/basic-types.md#number) | **`duration`** | `5` |  |
| [number](../glossary/basic-types.md#number) | **`thickness`** | `0` |  |

### `InitializeDiscord`

> Initializes the Discord Integration with your custom client\_id

```lua
Client.InitializeDiscord(client_id)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`client_id`** |  |

### `SendChatMessage`

> Sends a chat message which will display local only

```lua
Client.SendChatMessage(message)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`message`** |  |

### `SetChatConfiguration`

> Configure the Chat. Anchors = \(1, 1\) means the location will be relative to bottom right and \(0, 0\) to top left.

```lua
Client.SetChatConfiguration(screen_location, size, anchors_min, anchors_max, alignment, justify, show_scrollbar)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [Vector2D](../utility-classes/vector2d.md) | **`screen_location`** | `Vector(-25, 0)` |  |
| [Vector2D](../utility-classes/vector2d.md) | **`size`** | `Vector(600, 250)` |  |
| [Vector2D](../utility-classes/vector2d.md) | **`anchors_min`** | `Vector(1, 0.5)` |  |
| [Vector2D](../utility-classes/vector2d.md) | **`anchors_max`** | `Vector(1, 0.5)` |  |
| [Vector2D](../utility-classes/vector2d.md) | **`alignment`** | `Vector(1, 0.5)` |  |
| [boolean](../glossary/basic-types.md#boolean) | **`justify`** | `false` | \(false = Left, true = Right\) |
| [boolean](../glossary/basic-types.md#boolean) | **`show_scrollbar`** | `true` |  |

### `SetChatVisibility`

> Set if the Chat is visible or not

```lua
Client.SetChatVisibility(is_visible)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [boolean](../glossary/basic-types.md#boolean) | **`is_visible`** |  |

### `SetCrosshairEnabled`

> Enables/Disables the default Crosshair

```lua
Client.SetCrosshairEnabled(is_enabled)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [boolean](../glossary/basic-types.md#boolean) | **`is_enabled`** |  |

### `SetHardwareCursor`

> Loads or sets a hardware cursor from the content directory in the game.

```lua
Client.SetHardwareCursor(cursor_shape, cursor_path, hotspot)
```

| Type | Parameter | Default Value | Description |  |
| :--- | :--- | :--- | :--- | :--- |
| [CursorType](../glossary/enums.md#cursortype) | **`cursor_shape`** |  |  |  |
| [string](../glossary/basic-types.md#string) | **`cursor_path`** |  |  |  |
| [Vector2D](../utility-classes/vector2d.md) | **`hotspot`** | `Vector(0, 0)` |  | = |

### `SetDiscordActivity`

> Communicates with Discord and sets a custom user status

```lua
Client.SetDiscordActivity(state, details, large_image, large_text)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`state`** |  |
| [string](../glossary/basic-types.md#string) | **`details`** |  |
| [string](../glossary/basic-types.md#string) | **`large_image`** |  |
| [string](../glossary/basic-types.md#string) | **`large_text`** |  |

### `SetInputEnabled`

> Toggles Local Player input

```lua
Client.SetInputEnabled(enable_input)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [boolean](../glossary/basic-types.md#boolean) | **`enable_input`** |  |

### `SetMouseEnabled`

> Displays/Hides Mouse Cursor

```lua
Client.SetMouseEnabled(is_enabled)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [boolean](../glossary/basic-types.md#boolean) | **`is_enabled`** |  |

### `SetOutlineColor`

> Changes the Outline Color for interactable stuff. Multiply it by 5 \(or more\) for having a glowing effect.

```lua
Client.SetOutlineColor(outline_color)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [Color](../utility-classes/color.md) | **`outline_color`** |  |

### `SetHighlightColor`

> Changes the Highlight Color for highlighted actors at a specific Index. Multiply it by 5 \(or more\) for having a glowing effect.

```lua
Client.SetHighlightColor(highlight_color, index)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [Color](../utility-classes/color.md) | **`highlight_color`** |  |
| [number](../glossary/basic-types.md#number) | **`index`** |  |

### `SetValue`

> Sets a global value in the Client, which can be accessed from anywhere \(client side\)
>
> Please refer to [Entity Values](../../core-concepts/scripting/entity-values.md) for more information

```lua
Client.SetValue(key, value)
```

| Type | Parameter | Description |  |
| :--- | :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`key`** |  | Key |
| [any](../glossary/basic-types.md#any) | **`value`** |  | Value |

### `Spectate`

> Spectates a Player. The local camera will follow the Player's camera.

```lua
Client.Spectate(player)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [Player](../classes/player.md) | **`player`** |  |

### `Subscribe`

> Subscribes for an Event

```lua
Client.Subscribe(event_name, callback)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`event_name`** |  |
| [function](../glossary/basic-types.md#function) | **`function`** |  |

### `Unsubscribe`

> Unsubscribes from all subscribed Events in this Class and in this Package, optionally passing the function to unsubscribe only that callback

```lua
Client.Unsubscribe(event_name, callback)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`event_name`** |  |  |
| [function](../glossary/basic-types.md#function) | **`function`** | `nil` |  |

### `Unspectate`

> Leaves the Spectator's State.

```lua
Client.Unspectate()
```

### `Trace`

> Trace a ray against the world and returns a table with the first blocking hit information. Currently only supports trace for [Character](../classes/character.md), [Vehicle](../classes/vehicle.md), [StaticMesh](../classes/static-mesh.md), [Weapon](../classes/weapon.md), [Item](../classes/item.md), [Grenade ](../classes/grenade.md)and [Prop](../classes/prop.md), more can be requested.
>
> Returned Table: `{"Success", "Location", "Normal", "Entity", "BoneName", "ActorName", "ComponentName", "SurfaceType"}`

```lua
Client.Trace(start_location, end_location, collision_channel, trace_complex, return_entity, return_physical_material, draw_debug)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [Vector](../utility-classes/vector.md) | **`start_location`** |  |  |
| [Vector](../utility-classes/vector.md) | **`start_location`** |  |  |
| [CollisionChannel](../glossary/enums.md#collisionchannel) | **`collision_channel`** | `CollisionChannel.WorldStatic` |  |
| [boolean](../glossary/basic-types.md#boolean) | **`trace_complex`** | `false` |  |
| [boolean](../glossary/basic-types.md#boolean) | **`return_entity`** | `false` |  |
| [boolean](../glossary/basic-types.md#boolean) | **`return_physical_material`** | `false` |  |
| [boolean](../glossary/basic-types.md#boolean) | **`draw_debug`** | `false` |  |

### `GetRandomReachablePointInRadius`

> Finds random, reachable point in navigable space restricted to radius around origin \(only if map has a NavMesh\)
>
> Returns Vector2D

```lua
Client.GetRandomReachablePointInRadius(origin, radius)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [Vector](../utility-classes/vector.md) | **`origin`** |  |
| [number](../glossary/basic-types.md#number) | **`radius`** |  |

### `GetMousePosition`

> Gets the current mouse screen location
>
> Returns Vector2D

```lua
Client.GetMousePosition()
```

### `GetPackages`

> Gets a list of Packages folder names loaded and running in the client
>
> Returns a Table with Packages folder names

```lua
Client.GetPackages()
```

### `GetValue`

> Gets a value given a key. Please refer to [Entity Values](../../core-concepts/scripting/entity-values.md) for more information
>
> Returns [any](../glossary/basic-types.md#any)

```lua
Client.GetValue(key)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`key`** |  |

### `IsKeyDown`

> Gets if a key is being pressed
>
> Returns [boolean](../glossary/basic-types.md#boolean)

```lua
Client.IsKeyDown(key_name)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`key_name`** |  |

### `IsMouseEnabled`

> Gets if the mouse is visible
>
> Returns [boolean](../glossary/basic-types.md#boolean)

```lua
Client.IsMouseEnabled()
```

## Events Detailed

### `Chat`

> Called when a chat text is submitted \(by LocalPlayer\)
>
> Return false to prevent the message to be sent

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`text`** |  |

```lua
Client.Subscribe("Chat", function(text)

end)
```

### `ChatEntry`

> Called when a Chat Entry is received
>
> This is also triggered when `SendChatMessage` is called \(useful for creating your own Chat interface while still use the built-in system\)

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`text`** |  |
| [Player](../classes/player.md) | **`sender`** |  |

```lua
Client.Subscribe("ChatEntry", function(text, sender)

end)
```

### `Console`

> Called when a console command is submitted

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`text`** |  |

```lua
Client.Subscribe("Console", function(text)

end)
```

### `KeyDown`

> A keyboard key is being pressed
>
> Return **false** to block it

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`key_name`** |  |

```lua
Client.Subscribe("KeyDown", function(key_name)

end)
```

### `KeyPress`

> A keyboard key has been pressed
>
> Return **false** to block it

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`key_name`** |  |

```lua
Client.Subscribe("KeyPress", function(key_name)

end)
```

### `KeyUp`

> A keyboard key has been released
>
> Return **false** to block it

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`key_name`** |  |

```lua
Client.Subscribe("KeyUp", function(key_name)

end)
```

### `LogEntry`

> Called when a Client log is received

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`text`** |  |
| [LogType](../glossary/enums.md#logtype) | **`type`** |  |

```lua
Client.Subscribe("LogEntry", function(text, type)

end)
```

### `MouseDown`

> A mouse button has been pressed / is being pressed
>
> Return **false** to block it

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`key_name`** |  |
| [number](../glossary/basic-types.md#number) | **`mouse_x`** |  |
| [number](../glossary/basic-types.md#number) | **`mouse_y`** |  |

```lua
Client.Subscribe("MouseDown", function(key_name, mouse_x, mouse_y)

end)
```

### `MouseUp`

> A mouse button has been released
>
> Return **false** to block it

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`key_name`** |  |
| [number](../glossary/basic-types.md#number) | **`mouse_x`** |  |
| [number](../glossary/basic-types.md#number) | **`mouse_y`** |  |

```lua
Client.Subscribe("MouseUp", function(key_name, mouse_x, mouse_y)

end)
```

### `Tick`

> Called Every Frame. Do not abuse.

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`delta_time`** |  |

```lua
Client.Subscribe("Tick", function(delta_time)

end)
```

## Key Names

List of all keys names returned in Key/Mouse events.

### Function Keys

| **Key Name** | **Description** |
| :--- | :--- |
| **`F1`** | Function one |
| **`F2`** | Function two |
| **`F3`** | Function three |
| **`F4`** | Function four |
| **`F5`** | Function five |
| **`F6`** | Function six |
| **`F7`** | Function seven |
| **`F8`** | Function eight |
| **`F9`** | Function nine |
| **`F10`** | Function ten |
| **`F11`** | Function eleven |
| **`F12`** | Function twelve |

### Alphanumerical keys

| **Key Name** | **Description** |
| :--- | :--- |
| **`A`** | Letter A |
| **`B`** | Letter B |
| **`C`** | Letter C |
| **`D`** | Letter D |
| **`E`** | Letter E |
| **`F`** | Letter F |
| **`G`** | Letter G |
| **`H`** | Letter H |
| **`I`** | Letter I |
| **`J`** | Letter J |
| **`K`** | Letter K |
| **`L`** | Letter L |
| **`M`** | Letter M |
| **`N`** | Letter N |
| **`O`** | Letter O |
| **`P`** | Letter P |
| **`Q`** | Letter Q |
| **`R`** | Letter R |
| **`S`** | Letter S |
| **`T`** | Letter T |
| **`U`** | Letter U |
| **`V`** | Letter V |
| **`W`** | Letter W |
| **`X`** | Letter X |
| **`Y`** | Letter Y |
| **`Z`** | Letter Z |

### Special keys

| **Key Name** | **Description** |
| :--- | :--- |
| **`Escape`** | Escape |
| **`Tab`** | Tab |
| **`Tilde`** | ~ |
| **`ScrollLock`** | Scroll lock |
| **`Pause`** | Pause |
| **`One`** | One |
| **`Two`** | Two |
| **`Three`** | Three |
| **`Four`** | Four |
| **`Five`** | Five |
| **`Six`** | Six |
| **`Seven`** | Seven |
| **`Eight`** | Eight |
| **`Nine`** | Nine |
| **`Zero`** | Zero |
| **`Underscore`** | \_ |
| **`Equals`** | = |
| **`Backslash`** |  |
| **`LeftBracket`** | \[ |
| **`RightBracket`** | \] |
| **`Enter`** | Enter or Numpad enter |
| **`CapsLock`** | Caps lock |
| **`Semicolon`** | ; |
| **`Quote`** | ‘ |
| **`LeftShift`** | Left shift |
| **`Comma`** | , |
| **`Period`** | . |
| **`Slash`** | / |
| **`RightShift`** | Right Shif |
| **`LeftControl`** | Left control |
| **`LeftAlt`** | Left alt |
| **`SpaceBar`** | Space bar |
| **`RightAlt`** | Right alt |
| **`RightControl`** | Right control |
| **`Left`** | Left |
| **`Up`** | Up |
| **`Down`** | Down |
| **`Right`** | Right |
| **`Home`** | Home |
| **`End`** | End |
| **`Insert`** | Insert |
| **`PageUp`** | Page up |
| **`Delete`** | Delete |
| **`PageDown`** | Page down |
| **`NumLock`** | Num lock |
| **`Divide`** | Numpad / |
| **`Multiply`** | Numpad \* |
| **`Subtract`** | Numpad - |
| **`Add`** | Numpad + |
| **`PageDown`** | Page down |
| **`NumPadOne`** | Numpad one |
| **`NumPadTwo`** | Numpad two |
| **`NumPadThree`** | Numpad three |
| **`NumPadFour`** | Numpad four |
| **`NumPadFive`** | Numpad five |
| **`NumPadSix`** | Numpad six |
| **`NumPadSeven`** | Numpad seven |
| **`NumPadEight`** | Numpad eight |
| **`NumPadNine`** | Numpad nine |
| **`NumPadZero`** | Numpad zero |
| **`Decimal`** | Numpad decimal |

### Mouse

| **Key Name** | **Description** |
| :--- | :--- |
| **`LeftMouseButton`** | Left mouse button |
| **`RightMouseButton`** | Right mouse button |
| **`ThumbMouseButton`** | Primary mouse thumb button |
| **`ThumbMouseButton2`** | Secondary mouse thumb button |
| **`MouseScrollUp`** | Mouse wheel scrolling up |
| **`MouseScrollDown`** | Mouse wheel scrolling down |
| **`MouseX`** | Mouse movement on the X axis |
| **`MouseY`** | Mouse movement on the Y axis |

