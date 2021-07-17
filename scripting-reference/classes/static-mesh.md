---
description: >-
  A StaticMesh entity represents a Mesh which can be spawned in the world, can’t
  move and is more optimized for using in decorating the world
---

# StaticMesh

![](../../.gitbook/assets/image%20%2849%29.png)

{% hint style="success" %}
You can spawn this entity is both **Client** or **Server** \(if you spawn it on client, it won’t be synchronized with other players\).
{% endhint %}

{% hint style="info" %}
⏬ **Inheritance:** This class inherits from [Actor](base-classes/actor.md) and [Paintable](base-classes/paintable.md). Please check their pages for inherited **Methods** and **Events**.
{% endhint %}

## Usage

{% tabs %}
{% tab title="Lua" %}
```lua
local static_mesh = StaticMesh(
  Vector(-900, 185, 215),
  Rotator(0, 90, 90),
  "nanos-world::SM_Crate_07"
)
```
{% endtab %}
{% endtabs %}

## Constructor Parameters

| **Type** | **Name** | **Default** |
| :--- | :--- | :--- |
| [Vector](../utility-classes/vector.md) | **`location`** | `Vector(0, 0, 0)` |
| [Rotator](../utility-classes/rotator.md) | **`rotation`** | `Rotator(0, 0, 0)` |
| [string](../glossary/basic-types.md#string) | **`model_name`** \(StaticMesh\) |  |
| [CollisionType](../glossary/enums.md#collisiontype) | **`collision_type`** | `CollisionType.Normal` |

## Functions

{% page-ref page="base-classes/actor.md" %}

{% page-ref page="base-classes/paintable.md" %}

| **Returns** | **Name** | **Description** |
| :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`GetMesh`** | Gets the Asset name |

