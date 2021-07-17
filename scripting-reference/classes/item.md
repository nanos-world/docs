---
description: >-
  An Item represents an Entity which can be Pickable by a Character, doesn’t
  have any special action unless holding it with hands with pre-defined handling
  modes.
---

# Item

{% hint style="info" %}
⏬ **Inheritance:** This class inherits from [Actor](base-classes/actor.md) and [Pickable](base-classes/pickable.md). Please check it's pages for inherited **Methods** and **Events**.
{% endhint %}

## Usage

{% tabs %}
{% tab title="Lua" %}
```lua
local NewItem = Item(
  Vector(-900, 185, 215),
  Rotator(0, 90, 90),
  "nanos-world::SM_Torch",
  CollisionType.Normal,
  true,
  HandlingMode.SingleHandedMelee,
  CrosshairType.None
)
```
{% endtab %}
{% endtabs %}

## Constructor Parameters

| **Type** | **Name** | **Default** |
| :--- | :--- | :--- |
| [Vector](../utility-classes/vector.md) | **`location`** | Vector\(0, 0, 0\) |
| [Rotator](../utility-classes/rotator.md) | **`rotation`** | Rotator\(0, 0, 0\) |
| [string](../glossary/basic-types.md#string) | **`model_name`** \(StaticMesh\) |  |
| [CollisionType](../glossary/enums.md#collisiontype) | **`collision_type`** | CollisionType.Normal |
| [boolean](../glossary/basic-types.md#boolean) | gravity\_enabled | true |
| [HandlingMode](../glossary/enums.md#handlingmode) | **`handling_mode`** | HandlingMode.Torch |
| [CrosshairType](../glossary/enums.md#crosshairtype) | **`crosshair_type`** | CrosshairType.None |

## WIP: HandlingModes

TODO: Add Handling Modes images

