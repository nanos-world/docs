---
description: A Light represents a Lighting source
---

# Light

A Light represents a Lighting source. nanos world provides 3 types of lights: **Spot**, **Point** and **Rect**. All lights are Dynamic and because of that, very expensive! Keep that in mind before spawning 1000 lights ;\).

{% hint style="success" %}
You can spawn this entity is both **Client** or **Server** \(if you spawn it on client, it won’t be synchronized with other players\).
{% endhint %}

{% hint style="info" %}
⏬ **Inheritance:** This class inherits from [Actor](base-classes/actor.md). Please check it's page for inherited **Methods** and **Events**.
{% endhint %}

## Usage

```lua
local my_light = Light(
    Vector(-152, 245, 115),
    Rotator(0, 90, 90), -- Relevant only for Rect and Spot light types
    Color(1, 0, 0), -- Red Tint
    LightType.Point, -- Point Light type
    100, -- Intensity
    250, -- Attenuation Radius
    44, -- Cone Angle (Relevant only for Spot light type)
    0, -- Inner Cone Angle Percent (Relevant only for Spot light type)
    5000, -- Max Draw Distance (Good for performance - 0 for infinite)
    true, -- Whether to use physically based inverse squared distance falloff, where Attenuation Radius is only clamping the light's contribution. (Spot and Point types only)
    true, -- Cast Shadows?
    true -- Enabled?
)
```

## Constructor Parameters

| **Type** | **Name** | **Default** | Description |
| :--- | :--- | :--- | :--- |
| [Vector](../utility-classes/vector.md) | **`location`** | `Vector(0, 0, 0)` |  |
| [Rotator](../utility-classes/rotator.md) | **`rotation`** | `Rotator(0, 0, 0)` | Relevant only for Rect and Spot LightTypes |
| [Color](../utility-classes/color.md) | **`color`** | `Color(1, 1, 1)` |  |
| [LightType](../glossary/enums.md#lighttype) | **`light_type`** | `LightType.Point` |  |
| [number](../glossary/basic-types.md#number) | **`intensity`** | `30` |  |
| [number](../glossary/basic-types.md#number) | **`attenuation_radius`** | `250` |  |
| [number](../glossary/basic-types.md#number) | **`cone_angle`** | `44` | Relevant only for Spot LightType |
| [number](../glossary/basic-types.md#number) | **`inner_cone_angle_percent`** | `0` | Inner Cone Angle Percent \(Relevant only for Spot LightType\) \(0-1\) |
| [number](../glossary/basic-types.md#number) | **`max_daw_distance`** | `5000` | Max Draw Distance \(Good for performance - 0 for infinite\) |
| [boolean](https://docs.nanos.world/scripting/Glossary.html#term-boolean) | **`use_inverse_squared_falloff`** | `true` | Whether to use physically based inverse squared distance falloff, where Attenuation Radius is only clamping the light's contribution. \(Spot and Point types only\) |
| [boolean](https://docs.nanos.world/scripting/Glossary.html#term-boolean) | **`cast_shadows`** | `true` |  |
| [boolean](https://docs.nanos.world/scripting/Glossary.html#term-boolean) | **`enabled`** | `true` |  |

## Functions

{% page-ref page="base-classes/actor.md" %}

| **Returns** | **Name** | **Description** |
| :--- | :--- | :--- |
|  | `SetColor` | Sets the light color |

### `SetColor`

> Sets the light color

```lua
my_light:SetColor(color)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [Color](../utility-classes/color.md) | **`color`** |  | The light color |

