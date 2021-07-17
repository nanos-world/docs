---
description: Base class for all Actors entities
---

# Base Actor

An **Actor** is an object which can be spawned and destroyed through Lua code. Actors support 3D transformations such as translation \(location\), rotation, and scaling.

In nanos world, **Actor** is base for several entities, and all those entities share the same **Methods** and **Events** described in this page.

{% hint style="info" %}
This is the base Class for all actors we have. You cannot spawn it directly.
{% endhint %}

## Static Functions

{% hint style="success" %}
**Note:** The following functions are accessed statically using the specific **Class** and with a **dot**. Example: `Character.GetAll()`.
{% endhint %}

| **Returns** | **Name** | **Description** |
| :--- | :--- | :--- |
| [table](../../glossary/basic-types.md#table) | [**`GetAll`**](actor.md#getall) | Gets a copy table with all entities _\(copy\)_ |
| [Actor](actor.md) | [**`GetByIndex`**](actor.md#getbyindex) | Gets a specific entity at index _\(direct\)_ |
| [number](../../glossary/basic-types.md#number) | [**`GetCount`**](actor.md#getcount) | Gets how many entities of this class exist _\(direct\)_ |
| [iterator](../../glossary/basic-types.md#iterator) | [**`GetPairs`**](actor.md#getall) | Gets an iterator with all entities of this class _\(direct\)_ |

## Functions

{% hint style="warning" %}
**Note:** Some of the following methods don't work in some specific entities.
{% endhint %}

|  | **Returns** | **Name** | **Description** |
| :---: | :--- | :--- | :--- |
| [![](../../../.gitbook/assets/authority-only.png)](../../../core-concepts/scripting/authority-concepts.md) |  | [**`AddImpulse`**](actor.md#addimpulse) | Applies a Force in world coordinate on this Actor |
| [![](../../../.gitbook/assets/authority-only.png)](../../../core-concepts/scripting/authority-concepts.md) |  | [**`AttachTo`**](actor.md#attachto) | Attaches this Actor to any other Actor |
| [![](../../../.gitbook/assets/authority-only.png)](../../../core-concepts/scripting/authority-concepts.md) |  | [**`Destroy`**](actor.md#destroy) | Destroys this Actor |
| [![](../../../.gitbook/assets/authority-only.png)](../../../core-concepts/scripting/authority-concepts.md) |  | [**`Detach`**](actor.md#detach) | Detaches this Actor if attached |
| [![](../../../.gitbook/assets/authority-only.png)](../../../core-concepts/scripting/authority-concepts.md) |  | [**`SetCollision`**](actor.md#setcollision) | Sets the actor’s collision type |
| [![](../../../.gitbook/assets/authority-only.png)](../../../core-concepts/scripting/authority-concepts.md) |  | [**`SetForce`**](actor.md#setforce) | Adds a permanent force to this actor |
| [![](../../../.gitbook/assets/authority-only.png)](../../../core-concepts/scripting/authority-concepts.md) |  | [**`SetGravityEnabled`**](actor.md#setgravityenabled) | Sets the actor’s gravity enabled |
| [![](../../../.gitbook/assets/authority-only.png)](../../../core-concepts/scripting/authority-concepts.md) |  | [**`SetHighlightEnabled`**](actor.md#sethighlightenabled) | Enables this Actor Highlighting at a specific Index color |
| [![](../../../.gitbook/assets/authority-only.png)](../../../core-concepts/scripting/authority-concepts.md) |  | [**`SetInitialLocation`**](actor.md#setinitiallocation) | Sets the initial location |
| [![](../../../.gitbook/assets/authority-only.png)](../../../core-concepts/scripting/authority-concepts.md) |  | [**`SetLocation`**](actor.md#setlocation) | Sets the actor’s location in the game world |
| [![](../../../.gitbook/assets/server-only.png)](../../../core-concepts/scripting/authority-concepts.md) |  | [**`SetNetworkAuthority`**](actor.md#setnetworkauthority) | Sets this actor’s new Player [Network Authority](../../../core-concepts/scripting/authority-concepts.md#network-authority) |
| [![](../../../.gitbook/assets/authority-only.png)](../../../core-concepts/scripting/authority-concepts.md) |  | [**`SetRotation`**](actor.md#setrotation) | Sets the actor’s rotation in the game world |
| [![](../../../.gitbook/assets/authority-only.png)](../../../core-concepts/scripting/authority-concepts.md) |  | [**`SetScale`**](actor.md#setsclae) | Sets the actor’s scale |
|  |  | [**`SetValue`**](actor.md#setvalue) | Sets a value in this entity, which can be accessed by any package |
|  |  | [**`TranslateTo`**](actor.md#translateto) | Smoothly moves this actor to a Location |
|  |  | [**`RotateTo`**](actor.md#rotateto) | Smoothly rotates this actor to a Rotation |
|  | [boolean](../../glossary/basic-types.md#boolean) | [**`IsGravityEnabled`**](actor.md#isgravityenable) | Gets the actor’s gravity enabled |
|  | [boolean](../../glossary/basic-types.md#boolean) | [**`IsInWater`**](actor.md#isinwater) | Gets if the actor is in Water |
|  | [boolean](../../glossary/basic-types.md#boolean) | [**`IsNetworkDistributed`**](actor.md#isnetworkdistributed) | Gets if the actor is [Network Distributed](../../../core-concepts/scripting/authority-concepts.md#network-authority) |
|  | [boolean](../../glossary/basic-types.md#boolean) | [**`IsValid`**](actor.md#isvalid) | Returns if this entity is valid \(i.e. not destroyed\) |
|  | [table](../../glossary/basic-types.md#table) | [**`GetAttachedEntities`**](actor.md#getattachedentities) | Gets all actors attached to this entity |
|  | [any](../../glossary/basic-types.md#any) | [**`GetAttachedTo`**](actor.md#getattachedto) | Gets the actor this actor is attached to |
| [![](../../../.gitbook/assets/client-only.png)](../../../core-concepts/scripting/authority-concepts.md) | [table](../../glossary/basic-types.md#table) | [**`GetBounds`**](actor.md#getbounds) | Gets the actor bounds size |
|  | [number](../../glossary/basic-types.md#number) | [**`GetCollision`**](actor.md#getcollision) | Gets the current actor’s collision |
|  | [number](../../glossary/basic-types.md#number) | [**`GetID`**](actor.md#getid) | Gets the universal network ID of this entity |
|  | [Vector](../../utility-classes/vector.md) | [**`GetLocation`**](actor.md#getlocation) | Get the actor’s position in the game world |
| [![](../../../.gitbook/assets/server-only.png)](../../../core-concepts/scripting/authority-concepts.md) | [Vector](../../utility-classes/vector.md) | [**`GetInitialLocation`**](actor.md#getinitiallocation) | Gets the initial location |
|  | [Rotator](../../utility-classes/rotator.md) | [**`GetRotation`**](actor.md#getrotation) | Gets the actor’s rotation in the game world |
|  | [Vector](../../utility-classes/vector.md) | [**`GetScale`**](actor.md#getscale) | Gets the actor’s scale |
|  | [string](../../glossary/basic-types.md#string) | [**`GetType`**](actor.md#gettype) | Returns the type of this Actor |
|  | [any](../../glossary/basic-types.md#any) | [**`GetValue`**](actor.md#getvalue) | Gets a value given a key |
| [![](../../../.gitbook/assets/client-only.png)](../../../core-concepts/scripting/authority-concepts.md) | [Vector](../../utility-classes/vector.md) | [**`GetVelocity`**](actor.md#GetVelocity) | Returns the current actor Velocity |
|  |  | [**`Subscribe`**](actor.md#subscribe) | Subscribes for an Event |
|  |  | [**`Unsubscribe`**](actor.md#unsubscribe) | Unsubscribes from Events |

## Events

|  | **Name** | **Description** |
| :--- | :--- | :--- |
|  | [**`Destroy`**](actor.md#destroy) | Triggered when an Entity is Destroyed |
|  | [**`Spawn`**](actor.md#spawn) | Triggered when an Entity is Spawned/Created |
|  | [**`ValueChange`**](actor.md#valuechange) | Triggered when an Entity has it’s value changed |

## Static Functions Detailed

### `GetAll`

> Returns a copy table with all entities of this class

```lua
local entities_copy = Player.GetAll()
entities_copy[1] -- Player 1
entities_copy[5] -- Player 5
```

### `GetByIndex`

> Returns an [Actor](actor.md) of the specific class at index

```lua
local first_character = Character.GetByIndex(1)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [number](../../glossary/basic-types.md#number) | **`index`** | The index of the entity |

### `GetCount`

> Returns how many entities of this class exist

```lua
local player_count = Player.GetCount()
```

### `GetPairs`

> Returns an iterator with all entities of this class to be used with `ipairs` or `pairs`. This is a more performatic way than `GetAll()` as it will return the iterator to access the entities directly, instead of creating and returning a copy of the entities table.
>
> **Note:** Destroying entities from inside GetPairs\(\) loop will cause the iteration to change it's size during the process. If you want to loop-and-destroy, please use `GetAll()`.

```lua
for k, player in ipairs(Player.GetPairs()) do
    Package.Log(player:GetName() .. " is connected!")
end
```

## Functions Detailed

### [![](../../../.gitbook/assets/authority-only.png)](../../../core-concepts/scripting/authority-concepts.md) `AddImpulse`

> Applies a Force in world coordinate on this Actor \(the force is applied on Client side, by the \(in most of cases\) the closest player of this object\)

```lua
entity:AddImpulse(force, velocity_change)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [Vector](../../utility-classes/vector.md) | **`force`** |  | Force to apply |
| [boolean](../../glossary/basic-types.md#boolean) | **`velocity_change`** | `false` | Whether to ignore mass |

### [![](../../../.gitbook/assets/authority-only.png)](../../../core-concepts/scripting/authority-concepts.md) `AttachTo`

> Attaches this Actor to any other Actor, optionally at a specific bone

```lua
entity:AttachTo(other_actor, attachment_rule, bone_name, autodestroy_when_detached)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [Actor](actor.md) | **`other`** |  | Other actor to attach |
| [AttachmentRule](../../glossary/enums.md#attachmentrule) | **`attachment_rule`** | `SnapToTarget` | How to attach |
| [string](../../glossary/basic-types.md#string) | **`bone_name`** | `""` | Which bone to attach |
| [boolean](../../glossary/basic-types.md#boolean) | **`autodestroy_when_detached`** | `""` | Whether to auto destroy when detached |

### [![](../../../.gitbook/assets/authority-only.png)](../../../core-concepts/scripting/authority-concepts.md) `Destroy`

> Destroys this Actor

```lua
entity:Destroy()
```

### [![](../../../.gitbook/assets/authority-only.png)](../../../core-concepts/scripting/authority-concepts.md) `Detach`

> Detaches this Actor from AttachedTo Actor

```lua
entity:Detach()
```

### [![](../../../.gitbook/assets/authority-only.png)](../../../core-concepts/scripting/authority-concepts.md) `SetCollision`

> Sets the actor's collision

```lua
entity:SetCollision(collision_type)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [CollisionType](../../glossary/enums.md#collisiontype) | **`collision_type`** |  | Collision Type |

### [![](../../../.gitbook/assets/authority-only.png)](../../../core-concepts/scripting/authority-concepts.md) `SetForce`

> Adds a permanent force to this actor Set to Vector\(0, 0, 0\) to cancel

```lua
entity:SetForce(force, is_local)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [Vector](../../utility-classes/vector.md) | **`force`** |  | Force to apply |
| [boolean](../../glossary/basic-types.md#boolean) | **`is_local`** | `true` | Whether to apply the force at local space |

### [![](../../../.gitbook/assets/authority-only.png)](../../../core-concepts/scripting/authority-concepts.md) `SetGravityEnabled`

> Sets the actor's gravity enabled

```lua
entity:SetGravityEnabled(is_enabled)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [boolean](../../glossary/basic-types.md#boolean) | **`is_enabled`** |  |  |

### [![](../../../.gitbook/assets/authority-only.png)](../../../core-concepts/scripting/authority-concepts.md) `SetHighlightEnabled`

> Sets if this Actors is Highlighting at a specific Index color

```lua
entity:SetHighlightEnabled(is_enabled)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [boolean](../../glossary/basic-types.md#boolean) | **`is_enabled`** |  | Enabled |
| [number](../../glossary/basic-types.md#number) | **`index`** |  | Index to apply \(Supports 0, 1 and 2\) |

### `SetInitialLocation`

> Sets the initial location

```lua
entity:SetInitialLocation(vector)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [Vector](../../utility-classes/vector.md) | **`location`** |  | New Location |

### `SetLocation`

> Sets the actor's location in the game world

```lua
entity:SetLocation(vector)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [Vector](../../utility-classes/vector.md) | **`location`** |  | New Location |

### [![](../../../.gitbook/assets/server-only.png)](../../../core-concepts/scripting/authority-concepts.md) `SetNetworkAuthority`

> Sets this actor's new Player network authority. This player will be manually assigned to handle this actor physics and share it's location with other clients. The authority assignment will still be overridden by the game automatically, to avoid that set a big time value so the player can keep longer with the authority and override the natural authority selection
>
> Please refer to [Network Authority](../../../core-concepts/scripting/authority-concepts.md#network-authority) for more information

```lua
entity:SetNetworkAuthority(player, time_ms)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| Player | **`player`** | `nil` | New player which will assume the Network Authority of this entity |
| [number](../../glossary/basic-types.md#number) | **`time_ms`** | `0` | New player which will assume the Network Authority of this entity |

### [![](../../../.gitbook/assets/authority-only.png)](../../../core-concepts/scripting/authority-concepts.md) `SetRotation`

> Sets the actor's rotation in the game world

```lua
entity:SetRotation(rotator)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [Rotator](../../utility-classes/rotator.md) | **`rotation`** |  | New Rotation |

### [![](../../../.gitbook/assets/authority-only.png)](../../../core-concepts/scripting/authority-concepts.md) `SetScale`

> Sets the actor's scale

```lua
entity:SetScale(vector)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [Vector](../../utility-classes/vector.md) | **`scale`** |  | New Scale |

### `SetValue`

> Sets a value in this entity, which can be accessed by any package \(optionally sync on clients if called from server\)
>
> Please refer to [Entity Values](../../../core-concepts/scripting/entity-values.md) for more information

```lua
entity:SetValue(key, value, sync_on_clients)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [string](../../glossary/basic-types.md#string) | **`key`** |  | Key |
| [any](../../glossary/basic-types.md#any) | **`value`** |  | Value |
| [boolean](../../glossary/basic-types.md#boolean) | **`sync_on_clients`** |  | Whether or not to sync on Clients \(if called by Server Side\) |

### `TranslateTo`

> Smoothly moves this actor to a Location with a certain Speed - optionally enables sweep to stop when colliding - use teleport flag will not affect velocity

```lua
entity:TranslateTo(location, speed, sweep, teleport)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [Vector](../../utility-classes/vector.md) | **`location`** |  | Location to Translate to |
| [number](../../glossary/basic-types.md#number) | **`speed`** |  |  |
| [number](../../glossary/basic-types.md#number) | **`sweep`** |  | Whether |
| [boolean](../../glossary/basic-types.md#boolean) | **`teleport`** |  |  |

### `RotateTo`

> Smoothly rotates this actor to a Rotation with a certain Speed

```lua
entity:RotateTo(otation, speed, teleport)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [Rotator](../../utility-classes/rotator.md) | **`rotation`** |  | Rotation to Translate to |
| [number](../../glossary/basic-types.md#number) | **`speed`** |  |  |
| [boolean](../../glossary/basic-types.md#boolean) | **`teleport`** |  | Whether to affect the current Velocity |

### `IsGravityEnabled`

> Gets the actor's gravity enabled
>
> Returns [boolean](../../glossary/basic-types.md#boolean)

```lua
entity:IsGravityEnabled()
```

### `IsInWater`

> Gets if the actor is in Water
>
> Returns [boolean](../../glossary/basic-types.md#boolean)

```lua
entity:IsInWater()
```

### `IsNetworkDistributed`

> Gets if the actor is network distributed. Only actors being network distributed can be set network authority.
>
> Returns [boolean](../../glossary/basic-types.md#boolean)

```lua
entity:IsNetworkDistributed()
```

### `IsValid`

> Gets if this entity is valid \(i.e. wasn't destroyed and points to a valid entity\)
>
> Returns [boolean](../../glossary/basic-types.md#boolean)

```lua
entity:IsValid()
```

### `GetAttachedEntities`

> Gets all actors attached to this entity
>
> Returns [table](../../glossary/basic-types.md#table)

```lua
entity:GetAttachedEntities()
```

### `GetAttachedTo`

> Gets the actor I'm attached to
>
> Returns [any](../../glossary/basic-types.md#any)

```lua
entity:GetAttachedTo()
```

### [![](../../../.gitbook/assets/client-only.png)](../../../core-concepts/scripting/authority-concepts.md) `GetBounds`

> Gets the actor bounds size
>
> Returns [table](../../glossary/basic-types.md#table) in format `{"Origin", "BoxExtent", "SphereRadius"}`

```lua
entity:GetBounds()
```

### `GetCollision`

> Gets the current actor's collision
>
> Returns [number](../../glossary/basic-types.md#number)

```lua
entity:GetCollision()
```

### `GetID`

> Gets the network ID of this entity \(same in both client and server\)
>
> Returns [number](../../glossary/basic-types.md#number)

```lua
entity:GetID()
```

### `GetLocation`

> Get the actor's position in the game world
>
> Returns [Vector](../../utility-classes/vector.md)

```lua
entity:GetLocation()
```

### [![](../../../.gitbook/assets/server-only.png)](../../../core-concepts/scripting/authority-concepts.md) `GetInitialLocation`

> Gets the initial location
>
> Returns [Vector](../../utility-classes/vector.md)

```lua
entity:GetInitialLocation()
```

### `GetRotation`

> Gets the actor's rotation in the game world
>
> Returns [Rotator](../../utility-classes/rotator.md)

```lua
entity:GetRotation()
```

### `GetScale`

> Gets the actor's scale
>
> Returns [Vector](../../utility-classes/vector.md)

```lua
entity:GetScale()
```

### `GetType`

> Gets the type of this Actor
>
> Returns [string](../../glossary/basic-types.md#string)

```lua
entity:GetType()
```

### `GetValue`

> Gets a value given a key. Please refer to [Entity Values](../../../core-concepts/scripting/entity-values.md) for more information
>
> Returns [any](../../glossary/basic-types.md#any)

```lua
entity:GetValue(key)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [string](../../glossary/basic-types.md#string) | **`key`** |  | Key |

### [![](../../../.gitbook/assets/client-only.png)](../../../core-concepts/scripting/authority-concepts.md) `GetVelocity`

> Gets the current actor Velocity
>
> Returns [Vector](../../utility-classes/vector.md)

```lua
entity:GetVelocity()
```

### `Subscribe`

> Subscribes for an Event

```lua
entity:Subscribe(event_name, callback)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [string](../../glossary/basic-types.md#string) | **`event_name`** |  |  |
| [function](../../glossary/basic-types.md#function) | **`function`** |  |  |

### `Unsubscribe`

> Unsubscribes from all subscribed Events in this Entity and in this Package, optionally passing the function to unsubscribe only that callback

```lua
entity:Unsubscribe(event_name, callback)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [string](../../glossary/basic-types.md#string) | **`event_name`** |  |  |
| [function](../../glossary/basic-types.md#function) | **`function`** | `nil` |  |

## Events Detailed

### `Destroy`

> Triggered when an Entity is Destroyed

```lua
Vehicle.Subscribe("Destroy", function(self)
    -- called when any vehicle is destroyed
end)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [Actor](actor.md) | `self` | The entity which has been destroyed |

### `Spawn`

> Triggered when an Entity is Spawned/Created

```lua
Vehicle.Subscribe("Spawn", function(self)
    -- called when a vehicle is spawned
end)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [Actor](actor.md) | `self` | The entity which has been spawned |

### `ValueChange`

> Triggered when an Entity has it’s value changed with `:SetValue()`

```lua
Vehicle.Subscribe("ValueChange", function(self, key, value)
    -- called when any Vehicle had it's value changed with :SetValue()
end)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [Actor](actor.md) | `self` | The entity which has the value changed |
| [string](../../glossary/basic-types.md#string) | `key` | The key changed |
| [any](../../glossary/basic-types.md#any) | `value` | The value changed |

