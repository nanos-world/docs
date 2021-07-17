---
description: >-
  A Prop represents a Dynamic Mesh which can be spawned in the world, can be
  grabbed around by characters and have physics.
---

# Prop

![](../../.gitbook/assets/image%20%284%29.png)

{% hint style="info" %}
⏬ **Inheritance:** This class inherits from [Actor](base-classes/actor.md) and [Paintable](base-classes/paintable.md). Please check their pages for inherited **Methods** and **Events**.
{% endhint %}

## Usage

{% tabs %}
{% tab title="Lua" %}
```lua
local my_prop = Prop(
  Vector(-900, 185, 215),
  Rotator(0, 90, 90),
  "nanos-world::SM_Crate_07"
)
```
{% endtab %}
{% endtabs %}

{% hint style="info" %}
🧙 **Note:** Props smaller than radius 20 units will have **CCD** \(Continuous Collision Detection\) enabled to avoid them falling through the floor or other objects. This will slightly increase the performance cost of them!
{% endhint %}

{% hint style="info" %}
🧙 **Note:** Props bigger than radius 200 units will have **`Grabbable`** off by default.
{% endhint %}

## Constructor Parameters

| **Type** | **Name** | **Default Value** |
| :--- | :--- | :--- |
| [Vector](../utility-classes/vector.md) | **`location`** | `Vector(0, 0, 0)` |
| [Rotator](../utility-classes/rotator.md) | **`rotation`** | `Rotator(0, 0, 0)` |
| [string](../glossary/basic-types.md#string) | **`model_name`** |  |
| [CollisionType](../glossary/enums.md#collisiontype) | **`collision_type`** | `CollisionType.Normal` |
| [boolean](../glossary/basic-types.md#boolean) | **`gravity_enabled`** | `true` |
| [boolean](../glossary/basic-types.md#boolean) | **`is_grabbable`** | `true` |

## Functions

{% page-ref page="base-classes/actor.md" %}

{% page-ref page="base-classes/paintable.md" %}

|  | **Returns** | **Name** | Description |
| :---: | :--- | :--- | :--- |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`SetGrabbable`**](prop.md#setgrabbable) | Sets ability to Characters to Grab this Prop |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`SetPhysicsDamping`**](prop.md#setphysicsdamping) | Sets the Physics damping of this Prop |
|  | [string](../glossary/basic-types.md#string) | [**`GetAssetName`**](prop.md#getassetname) | Gets the Asset name |
|  | [Character](character.md) | [**`GetHandler`**](prop.md#gethandler) | Gets the Character \(if existing\) which is holding this |
|  | [boolean](../glossary/basic-types.md#boolean) | [**`IsGrabbable`**](prop.md#isgrabbable) | Gets ability to Grab this Prop |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md) **`SetGrabbable`**

> Sets ability to Characters to Grab this Prop

```lua
my_prop:SetGrabbable(is_grabbable)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [boolean](../glossary/basic-types.md#boolean) | **`is_grabbable`** | If the Prop will be able to be grabbable or not |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md) **`SetPhysicsDamping`**

> Sets the Physics damping of this Prop

```lua
my_prop:SetPhysicsDamping(linear_damping, angular_damping)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`linear_damping`** |  |
| [number](../glossary/basic-types.md#number) | **`angular_damping`** |  |

### **`GetAssetName`**

> Gets the Asset name
>
> Returns [string](../glossary/basic-types.md#string)

```lua
local asset_name = my_prop:GetAssetName()
-- e.g. returns "nanos-world::SM_Cube"
```

### **`GetHandler`**

> Gets the Character \(if existing\) which is holding this
>
> Returns [Character](character.md)

```lua
local handler = my_prop:GetHandler()
```

### **`IsGrabbable`**

> Gets ability to Grab this Prop
>
> Returns [boolean](../glossary/basic-types.md#boolean)

```lua
my_prop:IsGrabbable()
```

## Events

|  | **Name** | **Description** |
| :--- | :--- | :--- |
|  | [**`Grab`**](prop.md#grab) | Triggered when Character grabs a Prop |
|  | [**`Hit`**](prop.md#hit) | Triggered when this Prop hits something |
|  | [**`UnGrab`**](prop.md#ungrab) | Triggered when Character ungrabs a Prop |

### `Grab`

> Triggered when Character grabs a Prop

```lua
Prop.Subscribe("Grab", function(self, character)

end)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [Prop](prop.md) | `self` | The prop which was Grabbed |
| [Character](character.md) | `character` | The new Grabber |

### `Hit`

> Triggered when this Prop hits something

```lua
Prop.Subscribe("Hit", function(self)

end)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [Prop](prop.md) | `self` | The prop which has been hit |

### `UnGrab`

> Triggered when this Prop hits something

```lua
Prop.Subscribe("UnGrab", function(self, character)

end)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [Prop](prop.md) | `self` | The prop which has been ungrabbed |
| [Character](character.md) | `character` | The old Grabber |

