---
description: >-
  A container for rotation information. All rotation values are stored in
  degrees.
---

# Rotator

{% hint style="info" %}
**Tip:** This structure is Open Sourced at [https://github.com/nanos-world/nanos-world-lua-lib](https://github.com/nanos-world/nanos-world-lua-lib). Feel free to push merge requests and suggest changes!
{% endhint %}

## 👌Usage

{% tabs %}
{% tab title="Lua" %}
```lua
local new_vector = Vector(1452.5, 512, 943.1)
```
{% endtab %}
{% endtabs %}

## 🎚Properties

| **Type** | **Name** | **Description** |
| :--- | :--- | :--- |
| [number](https://docs.nanos.world/scripting/Glossary.html#term-number) | **`Pitch`** | Rotation around the right axis \(around Y axis\), Looking up and down \(0=Straight Ahead, +Up, -Down\) |
| [number](https://docs.nanos.world/scripting/Glossary.html#term-number) | **`Yaw`** | Rotation around the forward axis \(around X axis\), Tilting your head, 0=Straight, +Clockwise, -CCW. |
| [number](https://docs.nanos.world/scripting/Glossary.html#term-number) | **`Roll`** | Rotation around the up axis \(around Z axis\), Running in circles 0=East, +North, -South. |

## ⏩Functions

{% hint style="success" %}
**Note:** This structure supports `+`, `-`, `*` and `tostring` operations.
{% endhint %}

| **Returns** | **Name** | **Description** |
| :--- | :--- | :--- |
| [Vector](vector.md) | `GetForwardVector()` | Get the forward \(X\) unit direction vector from this component, in world space. |
| [Vector](vector.md) | `RotateVector(vector)` | Rotate a vector rotated by this rotator. |
|  | `Normalize()` | In-place normalize, removes all winding and creates the “shortest route” rotation. |
| [Vector](vector.md) | `UnrotateVector(vector)` | Returns the vector rotated by the inverse of this rotator. |
| [Quat](quaternion.md) | `Quaternion()` | Get Rotation as a quaternion. |
| [Rotator](rotator.md) | `GetNormalized()` | Returns a new Rotator normalized. |
| [boolean](../glossary/basic-types.md#boolean) | `IsNearlyZero(tolerance)` |  |
| [boolean](../glossary/basic-types.md#boolean) | `IsZero()` |  |

