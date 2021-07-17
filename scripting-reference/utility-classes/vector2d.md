---
description: >-
  A Vector2D composed of components (X, Y) with floating point precision. Used
  mainly for HUD and Drawing on screen
---

# Vector2D

{% hint style="info" %}
**Tip:** This structure is Open Sourced at [https://github.com/nanos-world/nanos-world-lua-lib](https://github.com/nanos-world/nanos-world-lua-lib). Feel free to push merge requests and suggest changes!
{% endhint %}

{% hint style="success" %}
**Note:** This structure supports `+`, `-`, `*`, `/`, `==` and `tostring` operations.
{% endhint %}

## Usage

{% tabs %}
{% tab title="Lua" %}
```lua
local new_vector2D = Vector2D(1452.5, 512)
```
{% endtab %}
{% endtabs %}

## Properties

| **Type** | **Name** | **Description** |
| :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`X`** | X Coordinate |
| [number](../glossary/basic-types.md#number) | **`Y`** | Y Coordinate |

