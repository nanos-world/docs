---
description: Default nanos world Particles and it's Parameters
---

# Default Particles

{% hint style="success" %}
**Note**: All Particles in this page are already included in the base game in the [Default nanos world Asset Pack](./), you can reference them like that: **`nanos-world::P_Beam`.**
{% endhint %}

## Template Particles

Bare minimum particles.

### `P_Beam`

![](../../.gitbook/assets/screenshot_40.png)

This is a Niagara particle which joins two points with a Beam. Cool for creating Physics Guns or Laser effects.

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| **`BeamColor`** | [Color](../../scripting-reference/utility-classes/color.md) | `Color(0, 0, 10, 1)` | Color of the Beam - multiply it to make it glow |
| **`BeamEnd`** | [Vector](../../scripting-reference/utility-classes/vector.md) | `Vector(0, 0, 0)` | World position of the second joint |
| **`BeamWidth`** | number | `5` | Beam thickness |
| **`JitterAmount`** | number | `0.1` | Amount of jitterness |

### `P_Ribbon`

![](../../.gitbook/assets/image%20%2868%29.png)

This is a Niagara particle which makes a "trail" effect when moves.

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| **`Color`** | [Color](../../scripting-reference/utility-classes/color.md) | `Color.WHITE` | Color - multiply it to make it glow |
| **`SpawnRate`** | number | `100` | Rate of spawn the "ribbons" |
| **`Mass`** | number | `10` | Mass of the "ribbons" |
| **`LifeTime`** | number | `5` | How much time each "ribbon" will last |
| **`RibbonWidth`** | number | `10` | The thickness of the Ribbon |

### `P_DirectionalBurst`

![](../../.gitbook/assets/image%20%2867%29.png)

This is a Niagara particle which spawns a bunch of particles in a direction.

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| **`Color`** | [Color](../../scripting-reference/utility-classes/color.md) | `Color.WHITE` | Color - multiply it to make it glow |
| **`SpawnCount`** | number | `25` | Amount of Particles to spawn |
| **`VelocityStrengthMax`** | number | `350` | Max velocity of the Particles |
| **`VelocityStrengthMin`** | number | `125` | Min velocity of the Particles |

### `P_Fountain`

![](../../.gitbook/assets/image%20%2869%29.png)

This is a Niagara particle which simulates a fountain.

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| **`BeamColor`** | [Color](../../scripting-reference/utility-classes/color.md) | `Color.WHITE` | Color - multiply it to make it glow |
| **`SpawnRate`** | number | `90` | Rate to spawn particles |
| **`VelocityStrengthMax`** | number | `850` | Max velocity |
| **`VelocityStrengthMin`** | number | `500` | Min velocity |

### `P_HangingParticulates`

![](../../.gitbook/assets/image%20%2863%29.png)

This is a Niagara particle which makes a 3-dimentional "hanging particles" effect.

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| **`Color`** | [Color](../../scripting-reference/utility-classes/color.md) | `Color.WHITE` | Color of the Particles |
| **`BoxSize`** | [Vector](../../scripting-reference/utility-classes/vector.md) | `Vector(400, 400, 100)` | 3D Size to spawn the Particles |
| **`SpawnRate`** | number | `50` | Rate of spawn |

### `P_OmnidirectionalBurst`

![](../../.gitbook/assets/image%20%2866%29.png)

This is a Niagara particle which makes a "explosion" effect in all directions.

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| **`Color`** | [Color](../../scripting-reference/utility-classes/color.md) | `Color.WHITE` | Color - multiply it to make it glow |
| **`SpawnCount`** | number | `50` | Amount of Particles to spawn |
| **`SphereRadius`** | number | `10` | Radius to spawn the particles |
| **`VelocityStrengthMax`** | number | `300` | Max velocity of the Particles |
| **`VelocityStrengthMin`** | number | `75` | Min velocity of the Particles |

