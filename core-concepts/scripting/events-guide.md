---
description: All you need to know about Events
---

# Events Guide

## Classes Events

In nanos world, all actions performed by Players or Entities can be obtained through **events**.

The most basic event to bring an example is the **`Spawn`**. Every time an entity is spawned, the event `Spawn` will be triggered.

### Subscribing for Class Events

Registering for events is very easy and straightforward using the method `Subscribe`, let's say we want to know where a Player has joined the server:

{% tabs %}
{% tab title="Lua" %}
```lua
Player.Subscribe("Spawn", function(player)
    Package.Log(player:GetName() .. " has joined!")
end)
```
{% endtab %}
{% endtabs %}

{% hint style="info" %}
Most events are triggered on both Client and Server sides, only a few rare exceptions which will be elicited by the [Availability](../../scripting-reference/glossary/#methods-availability).
{% endhint %}

### Unsubscribing of Class Events

Currently there is two ways of unsubscribing from events:

{% hint style="info" %}
**Note:** Unsubscribing events will **always** only unregister from events which were registered in the Package you are.
{% endhint %}

#### Unsubscribing from all Events

```lua
-- This will unregister from all "Spawn" events of Player registered in this Package
Player.Unsubscribe("Spawn")
```

#### Unsubscribing from a specific Event Callback

```lua
-- Declares the Callback beforehand
function OnSpawnPlayer(player)
    Package.Log(player:GetName() .. " has joined!")
end

-- Subscribes the event, passing the Callback
Player.Subscribe("Spawn", OnSpawnPlayer)

-- Subscribes for the same event, twice
Player.Subscribe("Spawn", function(player)
    Package.Log(player:GetName() .. " has joined again!")
end)

-- Unsubscribes only from the first Callback
Player.Unsubscribe("Spawn", OnSpawnPlayer)

-- This will keep triggering "player has joined again" but will not trigger
-- "player has joined" anymore
```

## Entity Events

In nanos world it is possible to register for events on specific Entities as well, this way the callback will only be triggered if that specific entity is the event reason.

### Subscribing for Entity Events

{% tabs %}
{% tab title="Lua" %}
```lua
-- Spawns a Character
local my_character = Character()

my_character:Subscribe("EnterVehicle", function(self, vehicle)
    -- my_character entered vehicle
end)
```
{% endtab %}
{% endtabs %}

{% hint style="success" %}
Note that once the entity is destroyed, all events registered for it will be unregistered automatically!
{% endhint %}

### Unsubscribing of Entity Events

Currently there is two ways of unsubscribing from events:

{% hint style="info" %}
**Note:** Unsubscribing events will **always** only unregister from events which were registered in the Package you are.
{% endhint %}

#### Unsubscribing from all Entity Events

```lua
-- This will unregister from all "EnterVehicle" events of this specific Character
-- registered in this Package
my_character:Unsubscribe("EnterVehicle")
```

#### Unsubscribing from a specific Entity Event Callback

```lua
-- Declares the Callback beforehand
function OnCharacterEnteredVehicle(character, vehicle)
    -- Entered vehicle!
end

-- Subscribes the event, passing the Callback
my_character:Subscribe("EnterVehicle", OnCharacterEnteredVehicle)

-- Subscribes for the same event, twice
my_character:Subscribe("EnterVehicle", function(character, vehicle)
    -- Entered vehicle again!
end)

-- Unsubscribes only from the first Callback
my_character:Unsubscribe("EnterVehicle", OnCharacterEnteredVehicle)
```

## Custom Events

In nanos world, it is possible to define and call Custom Events. For that, please refer to Events Static Class.

{% hint style="info" %}
Custom Events will be always called and triggered in all Packages.
{% endhint %}

