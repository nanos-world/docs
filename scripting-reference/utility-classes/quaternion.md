---
description: >-
  Floating point Quaternion that can represent a rotation about an axis in 3-D
  space
---

# Quat

{% hint style="info" %}
**Tip:** This structure is Open Sourced at [https://github.com/nanos-world/nanos-world-lua-lib](https://github.com/nanos-world/nanos-world-lua-lib). Feel free to push merge requests and suggest changes!
{% endhint %}

{% hint style="success" %}
**Note:** This structure supports `*` and `tostring` operations.
{% endhint %}

## Usage

{% tabs %}
{% tab title="Lua" %}
```lua
local new_quaternion = Quat(0.5, 0.5, 1, -1)
local rotation = new_quaterion:Rotator()
```
{% endtab %}
{% endtabs %}

## Properties

| **Type** | **Name** | **Description** |
| :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`X`** | The quaternion's X-component |
| [number](../glossary/basic-types.md#number) | **`Y`** | The quaternion's Y-component |
| [number](../glossary/basic-types.md#number) | **`Z`** | The quaternion's Z-component |
| [number](../glossary/basic-types.md#number) | **`W`** | The quaternion's W-component |

## Functions

| **Returns** | **Name** | **Description** |
| :--- | :--- | :--- |
| [Rotator](rotator.md) | **`Rotator()`** | Get the Rotator representation of this Quaternion. |

