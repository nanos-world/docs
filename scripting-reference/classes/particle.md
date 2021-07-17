---
description: Particle Entity
---

# Particle

![](../../.gitbook/assets/image%20%2850%29.png)

{% hint style="success" %}
Both **Cascade** and **Niagara** Particle Systems are supported!
{% endhint %}

{% hint style="success" %}
You can spawn this entity is both **Client** or **Server** \(if you spawn it on client, it won’t be synchronized with other players\).
{% endhint %}

## Usage

{% tabs %}
{% tab title="Lua" %}
```lua
local my_particle = Particle(
    Vector(-200, 100, 100),
    Rotator(0, 0, 0),
    "nanos-world::P_Explosion",
    true, -- Auto Destroy?
    true -- Auto Activate?
)
```
{% endtab %}
{% endtabs %}

## Constructor Parameters

| **Type** | **Name** | **Default** |
| :--- | :--- | :--- |
| [Vector](../utility-classes/vector.md) | **`location`** | `Vector(0, 0, 0)` |
| [Rotator](../utility-classes/rotator.md) | **`rotation`** | `Rotator(0, 0, 0)` |
| [string](../glossary/basic-types.md#string) | **`model_name`** | **\`\`** |
| [boolean](../glossary/basic-types.md#boolean) | **`auto_destroy`** | `true` |
| [boolean](../glossary/basic-types.md#boolean) | **`auto_activate`** | `true` |

{% hint style="info" %}
**Note:** **`auto_destroy`**means the Entity will be immediately destroyed after spawned, losing references to the _Particle System_ spawned in-game. So if the _Particle System_ itself loops indefinitely, it will keep playing until the Player reconnects.
{% endhint %}

## Functions

| **Returns** | **Name** | **Description** |
| :--- | :--- | :--- |
|  | [`Reset`](particle.md#reset) | Activates the Emitter again |
|  | [`SetParameterFloat`](particle.md#setparameterfloat) | Sets a **Float** parameter in this Particle System |
|  | [`SetParameterInt`](particle.md#setparameterint) | Sets an **Integer** parameter in this Particle System |
|  | [`SetParameterBool`](particle.md#setparameterbool) | Sets a **Boolean** parameter in this Particle System |
|  | [`SetParameterVector`](particle.md#setparametervector) | Sets a **Vector** parameter in this Particle System |
|  | [`SetParameterColor`](particle.md#setparametercolor) | Sets a **Color** parameter in this Particle System |

### `Reset`

> Activates the Emitter again

```lua
my_particle:Reset()
```

### `SetParameterFloat`

> Sets a float parameter in this Particle System

```lua
my_particle:SetParameterFloat(parameter)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`parameter`** | The float parameter |

### `SetParameterInt`

> Sets an integer parameter in this Particle System

```lua
my_particle:SetParameterInt(parameter)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`parameter`** | The int parameter |

### `SetParameterBool`

> Sets a boolean parameter in this Particle System

```lua
my_particle:SetParameterBool(parameter)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [boolean](../glossary/basic-types.md#boolean) | **`parameter`** | The boolean parameter |

### `SetParameterVector`

> Sets a float parameter in this Particle System

```lua
my_particle:SetParameterVector(parameter)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [Vector](../utility-classes/vector.md) | **`parameter`** | The Vector parameter |

### `SetParameterColor`

> Sets a Color parameter in this Particle System

```lua
my_particle:SetParameterColor(parameter)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [Color](../utility-classes/color.md) | **`parameter`** | The Color parameter |

