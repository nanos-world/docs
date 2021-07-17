---
description: Subscribe for user-defined Events
---

# Events

{% hint style="success" %}
This is a Static Class named `Events`. You can access it’s methods directly with `.`. It is not possible to initialize or create new instances.
{% endhint %}

{% page-ref page="../../core-concepts/scripting/events-guide.md" %}

## Static Functions

| Returns | Name | Description |
| :--- | :--- | :--- |
|  | [**`Call`**](events.md#call) | Calls an Event which will be triggered in all Local Packages |
| [![](../../.gitbook/assets/client-only.png)](../../core-concepts/scripting/authority-concepts.md) | [**`CallRemote`**](events.md#callremote) | Calls an Event on Client which will be triggered in all Server Packages |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md) | [**`CallRemote`**](events.md#callremote) | Calls an Event on Server which will be triggered in all Client's Packages of `Player` |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md) | [**`BroadcastRemote`**](events.md#broadcastremote) | Calls an Event on Server which will be triggered in all Client's Packages |
|  | [**`Subscribe`**](events.md#subscribe) | Subscribes for an user-created event which will be triggered for both local or _remote\*_ called events |
|  | [**`Unsubscribe`**](events.md#unsubscribe) | Unsubscribes from all subscribed events in this Package with that event name, optionally passing the function to unsubscribe only that callback |

{% hint style="info" %}
_Remote\*_ means the other side, e.g.: if I’m the **Client**, the remote is the Server. If I’m the **Server**, the remote is the Client.
{% endhint %}

#### `Call`

> Calls an Event which will be triggered in all Local Packages

```lua
Events.Call(event_name, args...)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`event_name`** | The Event Name to trigger the event |
| [any](../glossary/basic-types.md#any) | **`args...`** | Arguments to pass to the event |

#### [![](../../.gitbook/assets/client-only.png)](../../core-concepts/scripting/authority-concepts.md) `CallRemote`

> Calls an Event on Client which will be triggered in all Server Packages

```lua
Events.CallRemote(event_name, args...)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`event_name`** | The Event Name to trigger the event |
| [any](../glossary/basic-types.md#any) | **`args...`** | Arguments to pass to the event |

#### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md) `CallRemote`

> Calls an Event on Server which will be triggered in all Client's Packages of `Player`

```lua
Events.CallRemote(event_name, player, args...)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`event_name`** | The Event Name to trigger the event |
| Player | **`player`** | The remote player to send this event |
| [any](../glossary/basic-types.md#any) | **`args...`** | Arguments to pass to the event |

#### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md) `BroadcastRemote`

> Calls an Event on Server which will be triggered in all Client's Packages

```lua
Events.BroadcastRemote(event_name, args...)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`event_name`** | The Event Name to trigger the event |
| Player | **`player`** | The remote player to send this event |
| [any](../glossary/basic-types.md#any) | **`args...`** | Arguments to pass to the event |

#### `Subscribe`

> Subscribes for an user-created event which will be triggered for both local or remote called events

```lua
Events.Subscribe(event_name, function()

end)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`event_name`** | The Event Name to Subscribe for an event |
| [function](../glossary/basic-types.md#function) | **`callback`** | The callback function to execute |

#### `Unsubscribe`

> Unsubscribes from all subscribed events in this Package with that event name, optionally passing the function to unsubscribe only that callback

```lua
Events.Unsubscribe(event_name, callback)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`event_name`** |  | The Event Name to Unsubscribe |
| [function](../glossary/basic-types.md#function) | **`callback`** | `nil` | The callback function to unsubscribe |

## Examples

{% tabs %}
{% tab title="Lua" %}
{% code title="Client/Index.lua" %}
```lua
-- register for a local Event (local = client only)
Events.Subscribe("MyLocalEvent", function(my_text)
    Package.Log("Event received locally! " .. my_text)
    -- outputs "Event received locally! hello nanos world!"
end)

-- calls a local Event in all Local Packages
Events.Call("MyLocalEvent", "hello nanos world!")

-- register for a server Event (remote = server)
Events.Subscribe("MyClientEvent", function(my_text)
    Package.Log("Event received from server! " .. my_text)
    -- outputs "Event received from server! hello nanos world!"
end)

-- calls a remote Event in all Server Packages
Events.CallRemote("MyServerEvent", "hello nanos world!")
```
{% endcode %}
{% endtab %}
{% endtabs %}

{% hint style="info" %}
On **Server**, registering for remote events has an addition parameter: [Player](../classes/player.md), which is the client who sent the event.
{% endhint %}

{% tabs %}
{% tab title="Lua" %}
{% code title="Server/Index.lua" %}
```lua
-- register for a local Event (local = server only)
Events.Subscribe("MyLocalEvent", function(my_text)
    Package.Log("Event received locally! " .. my_text)
    -- outputs "Event received locally! hello nanos world!"
end)

-- calls a local Event in all Local Packages
Events.Call("MyLocalEvent", "hello nanos world!")

-- register for a client Event (remote = client)
Events.Subscribe("MyServerEvent", function(player, my_text)
    Package.Log(player:GetName() .. " sent an event from client! " .. my_text)
    -- outputs "Syed sent an event from client! hello nanos world!"

            -- sends an "answer" to the player which sent this event
    Events.CallRemote("MyClientEvent", player, "hello nanos world! message only for you!")
end)

-- sends a remote Event to all Players in all Client Packages
Events.BroadcastRemote("MyClientEvent", "hello nanos world!")
```
{% endcode %}
{% endtab %}
{% endtabs %}

### Passing entities through Events

{% tabs %}
{% tab title="Lua" %}
```lua
-- register for an Event (remote or local)
Events.Subscribe("MyAnotherEvent", function(my_text, my_vector, my_character, my_number)
    Package.Log("Event received! " .. my_text .. " " .. my_vector.X .. " " .. my_character:GetViewMode() .. " " .. my_number)
    -- outputs "Event received! hello nanos world! 123 1 456"
end)

-- passing Characters through events
local my_temp_character = Character()

-- calls a local Event in all Local Packages
Events.Call("MyEvent", "hello nanos world!", Vector(123, 123, 123), my_temp_character, 456)

-- calls a remote Event in all Server Packages
Events.CallRemote("MyEvent", "hello nanos world!", Vector(123, 123, 123), my_temp_character, 456)
```
{% endtab %}
{% endtabs %}

