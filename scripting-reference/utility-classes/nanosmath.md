---
description: A table containing useful and aux Math functions
---

# NanosMath

{% hint style="info" %}
**Tip:** This structure is Open Sourced at [https://github.com/nanos-world/nanos-world-lua-lib](https://github.com/nanos-world/nanos-world-lua-lib). Feel free to push merge requests and suggest changes!
{% endhint %}

## Usage

{% tabs %}
{% tab title="Lua" %}
```lua
local axis = NanosMath.ClampAxis(720)
```
{% endtab %}
{% endtabs %}

## Functions

| Returns | Name | Description |
| :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | [**`Round`**](nanosmath.md#round) | Rounds a number |
| [number](../glossary/basic-types.md#number) | [**`Clamp`**](nanosmath.md#clamp) |  |
| [number](../glossary/basic-types.md#number) | [**`ClampAxis`**](nanosmath.md#clampaxis) | Clamps an angle to the range of \[0, 360\] |
| [number](../glossary/basic-types.md#number) | [**`NormalizeAxis`**](nanosmath.md#normalizeaxis) | Clamps an angle to the range of \[-180, 180\] |
| [number](../glossary/basic-types.md#number) | [**`FInterpTo`**](nanosmath.md#finterpto) | Interpolate number from Current to Target |
| [Rotator](rotator.md) | [**`RInterpTo`**](nanosmath.md#rinterpto) | Interpolate Rotator from Current to Target |
| [Rotator](rotator.md) | [**`RInterpConstantTo`**](nanosmath.md#rinterpconstantto) | Interpolate Rotator from Current to Target with a constant step |
| [Vector](vector.md) | [**`VInterpTo`**](nanosmath.md#vinterpto) | Interpolate Vector from Current to Target |
| [Vector](vector.md) | [**`VInterpConstantTo`**](nanosmath.md#vinterpconstantto) | Interpolate Vector from Current to Target with a constant step |

### `Round`

> Rounds a number

```lua
NanosMath.Round(value)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`value`** |  |

### `Clamp`

> Clamps a number

```lua
NanosMath.Round(value, min, max)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`value`** |  |
| [number](../glossary/basic-types.md#number) | **`min`** |  |
| [number](../glossary/basic-types.md#number) | **`max`** |  |

### `ClampAxis`

> Clamps an angle to the range of \[0, 360\].

```lua
NanosMath.ClampAxis(value)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`value`** |  |

### `NormalizeAxis`

> Clamps an angle to the range of \[-180, 180\].

```lua
NanosMath.NormalizeAxis(value)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`value`** |  |

### `FInterpTo`

> Interpolate scalar from Current to Target

```lua
NanosMath.FInterpTo(current, target, delta_time, interp_speed)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`current`** |  |
| [number](../glossary/basic-types.md#number) | **`target`** |  |
| [number](../glossary/basic-types.md#number) | **`delta_time`** |  |
| [number](../glossary/basic-types.md#number) | **`interp_speed`** |  |

### `RInterpTo`

> Interpolate Rotator from Current to Target

```lua
NanosMath.RInterpTo(current, target, delta_time, interp_speed)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [Rotator](rotator.md) | **`current`** |  |
| [Rotator](rotator.md) | **`target`** |  |
| [number](../glossary/basic-types.md#number) | **`delta_time`** |  |
| [number](../glossary/basic-types.md#number) | **`interp_speed`** |  |

### `RInterpConstantTo`

> Interpolate Rotator from Current to Target with a constant step

```lua
NanosMath.RInterpConstantTo(current, target, delta_time, interp_speed)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [Rotator](rotator.md) | **`current`** |  |
| [Rotator](rotator.md) | **`target`** |  |
| [number](../glossary/basic-types.md#number) | **`delta_time`** |  |
| [number](../glossary/basic-types.md#number) | **`interp_speed`** |  |

### `VInterpTo`

> Interpolate Vector from Current to Target

```lua
NanosMath.VInterpTo(current, target, delta_time, interp_speed)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [Vector](vector.md) | **`current`** |  |
| [Vector](vector.md) | **`target`** |  |
| [number](../glossary/basic-types.md#number) | **`delta_time`** |  |
| [number](../glossary/basic-types.md#number) | **`interp_speed`** |  |

### `VInterpConstantTo`

> Interpolate Vector from Current to Target with a constant step

```lua
NanosMath.VInterpConstantTo(current, target, delta_time, interp_speed)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [Vector](vector.md) | **`current`** |  |
| [Vector](vector.md) | **`target`** |  |
| [number](../glossary/basic-types.md#number) | **`delta_time`** |  |
| [number](../glossary/basic-types.md#number) | **`interp_speed`** |  |

