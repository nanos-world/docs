---
description: 'A vector composed of components (X, Y, Z) with floating point precision.'
---

# Vector

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
| [number](../glossary/basic-types.md#number) | **`X`** | X Coordinate |
| [number](../glossary/basic-types.md#number) | **`Y`** | Y Coordinate |
| [number](../glossary/basic-types.md#number) | **`Z`** | Z Coordinate |

## ⏩Functions

{% hint style="success" %}
**Note:** This structure supports `+`, `-`, `*`, `/`, `^`, `==`, and `tostring` operations.
{% endhint %}

| **Returns** | **Name** | **Description** |
| :--- | :--- | :--- |
| [boolean](../glossary/basic-types.md#boolean) | **`Equals(other, tolerance)`** | Check against another vector for equality, within specified error limits |
| [number](../glossary/basic-types.md#number) | **`DistanceSquared(vector)`** | Squared distance between two points. |
| [number](../glossary/basic-types.md#number) | **`Distance(vector)`** |  |
| [Vector](vector.md) | **`GetSafeNormal()`** | Gets a normalized copy of the vector, checking it is safe to do so based on the length |
| [boolean](../glossary/basic-types.md#boolean) | **`IsNearlyZero(tolerance)`** | Checks whether vector is near to zero within a specified tolerance |
| [boolean](../glossary/basic-types.md#boolean) | **`IsZero()`** | Checks whether all components of the vector are exactly zero |
|  | **`Normalize()`** | Normalize this vector in-place if it is larger than a given tolerance. Leaves it unchanged if not |
| [number](../glossary/basic-types.md#number) | **`SizeSquared()`** | Get the squared length of this vector |
| [Rotator](rotator.md) | **`Rotation()`** | Returns the orientation corresponding to the direction in which the vector points |
| [number](../glossary/basic-types.md#number) | **`Size()`** | Get the length \(magnitude\) of this vector |

