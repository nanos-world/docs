---
description: >-
  A Cable represents a Physics Constraint which joins two Actors with a
  rope-like visual representation between them
---

# Cable

![](https://i.imgur.com/GG6W09Y.png)

nanos world **Cables** are composed primarily of two Unreal Engine components: a [Cable](https://docs.unrealengine.com/en-US/API/Plugins/CableComponent/UCableComponent/index.html) and a [PhysicsConstraint](https://docs.unrealengine.com/en-US/InteractiveExperiences/Physics/Constraints/ConstraintsBlueprints/index.html). The first is used for visual purposes only and the second one gives the effective physical effects that are applied to each end of the Cable.

{% hint style="info" %}
Cable **visuals** can be tweaked with `:SetForces()`, `:SetCableSettings()` and `:SetRenderingSettings()` methods. Those methods don’t have effect on the physics being applied and only have effects on the visual representation.

Cable **physics** can be tweaked with `:SetAngularLimits()` and `:SetLinearLimits()`.
{% endhint %}

After attaching the two sides of your cable, the physics can be tweaked to affect how the constraint will affect the objects.

{% hint style="success" %}
Cables are automatically **destroyed** when one of the sides are detached
{% endhint %}

{% hint style="success" %}
You can find more useful information regarding physical properties of the joint in the end of this page.
{% endhint %}

## Usage

{% tabs %}
{% tab title="Lua" %}
{% code title="Server/Index.lua" %}
```lua
local my_cable: = Cable()
local cube_01 = Prop(Vector(100, 100, 100), Rotator(), "nanos-world::SM_Cube")
local cube_02 = Prop(Vector(200, 0, 100), Rotator(), "nanos-world::SM_Cube")

my_cable::AttachStartTo(cube_01)
my_cable::AttachEndTo(cube_02)
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Constructor Parameters

| **Type** | **Name** | **Default** |
| :--- | :--- | :--- |
| [Vector](../utility-classes/vector.md) | **`location`** | `Vector(0, 0, 0)` |

## Functions

{% page-ref page="base-classes/actor.md" %}

|  | **Returns** | **Name** | **Description** |
| :--- | :--- | :--- | :--- |
| [![](../../.gitbook/assets/authority-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`AttachStartTo`**](cable.md#attachstartto) | Attached the beginning of this cable to another Actor at a specific bone or relative location |
| [![](../../.gitbook/assets/authority-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`AttachEndTo`**](cable.md#attachendto) | Attached the end of this cable to another Actor at a specific bone or relative location |
| [![](../../.gitbook/assets/authority-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`DetachEnd`**](cable.md#detachend) | Detaches the End of this Cable |
| [![](../../.gitbook/assets/authority-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`DetachStart`**](cable.md#detachstart) | Detaches the Start of this Cable |
| [![](../../.gitbook/assets/authority-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`SetAngularLimits`**](cable.md#setangularlimits) | Sets the Physics Angular Limits of this cable |
| [![](../../.gitbook/assets/authority-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`SetCableSettings`**](cable.md#setcablesettings) | Set the overall settings for this cable \(visuals only\) |
| [![](../../.gitbook/assets/authority-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`SetForces`**](cable.md#setforces) | Set the forces the cable has applied \(visuals only\) |
| [![](../../.gitbook/assets/authority-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`SetLinearLimits`**](cable.md#setlinearlimits) | Sets the Physics Linear Limits of this cable. If use\_soft\_constraint is enabled, then stiffness and damping will be used, otherwise restitution will be used. |
| [![](../../.gitbook/assets/authority-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`SetRenderingSettings`**](cable.md#setrenderingsettings) | Set the rendering settings of this cable \(visuals only\) |

### [![](../../.gitbook/assets/authority-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `AttachStartTo`

> Attached the beginning of this cable to another Actor at a specific bone or relative location

```lua
my_cable:AttachStartTo(other, relative_location, bone_name)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [Actor](base-classes/actor.md) | **`other`** |  |  |
| [Vector](../utility-classes/vector.md) | **`relative_location`** | `Vector()` |  |
| [string](../glossary/basic-types.md#string) | **`bone_name`** | \`\` |  |

### [![](../../.gitbook/assets/authority-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `AttachEndTo`

> Attached the end of this cable to another Actor at a specific bone or relative location

```lua
my_cable:AttachEndTo(other, relative_location, bone_name)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [Actor](base-classes/actor.md) | **`other`** |  |  |
| [Vector](../utility-classes/vector.md) | **`relative_location`** | `Vector()` |  |
| [string](../glossary/basic-types.md#string) | **`bone_name`** | \`\` |  |

### [![](../../.gitbook/assets/authority-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `DetachEnd`

> Detaches the End of this Cable

```lua
my_cable:DetachEnd()
```

### [![](../../.gitbook/assets/authority-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `DetachStart`

> Detaches the Start of this Cable

```lua
my_cable:DetachStart()
```

### [![](../../.gitbook/assets/authority-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `SetAngularLimits`

> Sets the Physics Angular Limits of this cable

```lua
my_cable:SetAngularLimits(swing_1_motion, swing_2_motion, twist_motion, swing_1_limit, swing_2_limit, twist_limit)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [ConstraintMotion](../glossary/enums.md#constraintmotion) | **`swing_1_motion`** |  |  |
| [ConstraintMotion](../glossary/enums.md#constraintmotion) | **`swing_2_motion`** |  |  |
| [number](../glossary/basic-types.md#number) | **`swing_1_limit`** |  |  |
| [number](../glossary/basic-types.md#number) | **`swing_2_limit`** |  |  |
| [number](../glossary/basic-types.md#number) | **`twist_limit`** |  |  |

### [![](../../.gitbook/assets/authority-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `SetCableSettings`

> Set the overall settings for this cable \(visuals only\)

```lua
my_cable:SetCableSettings(length, num_segments, solver_iterations)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`length`** |  |  |
| [number](../glossary/basic-types.md#number) | **`num_segments`** |  |  |
| [number](../glossary/basic-types.md#number) | **`solver_iterations`** |  |  |

### [![](../../.gitbook/assets/authority-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `SetForces`

> Set the forces the cable has applied \(visuals only\)

```lua
my_cable:SetForces(force, gravity_scale)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [Vector](../utility-classes/vector.md) | **`force`** |  |  |
| [number](../glossary/basic-types.md#number) | **`gravity_scale`** | `1` |  |

### [![](../../.gitbook/assets/authority-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `SetLinearLimits`

> Sets the Physics Linear Limits of this cable. If use\_soft\_constraint is enabled, then stiffness and damping will be used, otherwise restitution will be used.

```lua
my_cable:SetLinearLimits(x_motion, y_motion, z_motion, limit, restitution, use_soft_constraint, stiffness, damping)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`x_motion`** |  |  |
| [number](../glossary/basic-types.md#number) | **`y_motion`** |  |  |
| [number](../glossary/basic-types.md#number) | **`z_motion`** |  |  |
| [number](../glossary/basic-types.md#number) | **`limit`** |  |  |
| [number](../glossary/basic-types.md#number) | **`restitution`** | `0` |  |
| [boolean](../glossary/basic-types.md#boolean) | **`use_soft_constraint`** | `false` |  |
| [number](../glossary/basic-types.md#number) | **`stiffness`** | `0` |  |
| [number](../glossary/basic-types.md#number) | **`damping`** | `0` |  |

### [![](../../.gitbook/assets/authority-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `SetRenderingSettings`

> Set the rendering settings of this cable \(visuals only\)

```lua
my_cable:SetRenderingSettings(width, num_sides, tile_material)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`width`** |  |  |
| [number](../glossary/basic-types.md#number) | **`num_sides`** |  |  |
| [number](../glossary/basic-types.md#number) | **`tile_material`** |  |  |

