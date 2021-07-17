---
description: Chad Grenade
---

# Grenade

![](../../.gitbook/assets/image%20%2851%29.png)

## Usage

{% tabs %}
{% tab title="Lua" %}
```lua
local new_grenade = Grenade(
  Vector(-900, 185, 215),
  Rotator(0, 90, 90),
  "nanos-world::SM_Grenade_G67",
  "nanos-world::P_Explosion_Dirt",
  "nanos-world::A_Explosion_Large"
)
```
{% endtab %}
{% endtabs %}

## Constructor Parameters

| **Type** | **Name** | **Default** |
| :--- | :--- | :--- |
| [Vector](../utility-classes/vector.md) | **`location`** | `Vector(0, 0, 0)` |
| [Rotator](../utility-classes/rotator.md) | **`rotation`** | `Rotator(0, 0, 0)` |
| [string](../glossary/basic-types.md#string) | **`static_mesh_asset`** | `“nanos-world::SM_Grenade_G67”` |
| [string](../glossary/basic-types.md#string) | **`explosion_particles`** | `“nanos-world::P_Explosion_Dirt”` |
| [string](../glossary/basic-types.md#string) | **`explosion_sound`** | `“nanos-world::A_Explosion_Large` |
| [CollisionType](../glossary/enums.md#collisiontype) | **`collision_type`** | `CollisionType.Normal` |
| [boolean](../glossary/basic-types.md#boolean) | **`gravity_enabled`** | `true` |

## Properties

{% hint style="warning" %}
**Note:** In future updates, properties access will be completely deprecated!
{% endhint %}

| **Type** | **Name** | **Description** |
| :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`BaseDamage`** | Damage at Inner Radius |
| [number](../glossary/basic-types.md#number) | **`DamageFalloff`** | Radius which BaseDamage will apply proportionally |
| [number](../glossary/basic-types.md#number) | **`DamageInnerRadius`** | Radius which MinimumDamage will apply |
| [number](../glossary/basic-types.md#number) | **`DamageOuterRadius`** | Radius which BaseDamage will apply |
| [number](../glossary/basic-types.md#number) | **`MinimumDamage`** | Damage at Outer Radius |
| [number](../glossary/basic-types.md#number) | **`TimeToExplode`** | Time until Explosion |
| [number](../glossary/basic-types.md#number) | **`ThrowForce`** | Impulse applied when throwing |

## Functions

|  | **Returns** | **Name** | **Description** |
| :--- | :--- | :--- | :--- |
| [ \[![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | **`Explode`** | Forces this grenade to Explode |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) **`Explode`**

> Forces this grenade to Explode

```lua
my_grenade:Explode()
```

## Events

| **Name** | **Description** |
| :--- | :--- |
| **`Explode`** | `Grenade` has exploded |
| **`Throw`** | `Grenade` has been thrown |

### `Explode`

> Triggered when the has exploded

```lua
Grenade.Subscribe("Explode", function(self)
    -- called when a grenade explodes
end)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [Grenade](grenade.md) | `self` | The grenade which exploded |

### **`Throw`**

> Triggered when the has been thrown

```lua
Grenade.Subscribe("Throw", function(self)
    -- called when a grenade is thrown
end)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [Grenade](grenade.md) | `self` | The grenade which has been thrown |

