---
description: Default nanos world Materials and it's Parameters
tags: [assets]
---

# Default Materials

Default nanos world Materials and it's Parameters.

## Template Materials

nanos world provides 3 Material types ready to use with predefined parameters which can be easily accessed with this page methods.

:::info

You can create and access your own Materials Parameters if you have a Mesh which uses a Custom Material!

:::

![](/img/docs/default-materials-01.jpg)

:::tip

For more information regarding **Material Types** and **Blend Modes**, please refer to [Unreal Docs](https://docs.unrealengine.com/4.26/en-US/RenderingAndGraphics/Materials/MaterialProperties/BlendModes/).

:::

#### Parameters Supported by nanos Default Materials

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [Color](./scripting-reference/classes/base-classes/paintable.mdx#setmaterialcolorparameter) | **`Tint`** | `Color.WHITE` | Affects `Base Color` input | **Tint** multiplies with **Texture** parameter to generate the final color |
| [Texture](./scripting-reference/classes/base-classes/paintable.mdx#setmaterialtextureparameter) | **`Texture`** | White Texture | Image which multiplies with **Tint** to generate the final color |
| [Texture](./scripting-reference/classes/base-classes/paintable.mdx#setmaterialtextureparameter) | **`Normal`** | UP Normal Map `Vector(0.5, 0.5, 1)` | Image which affects how Light reflects on the object |
| [​​​Color​](./scripting-reference/classes/base-classes/paintable.mdx#setmaterialcolorparameter) | **`Emissive`** | `Color.BLACK` | Affects `Emissive` input, high values will cause bloom effect |
| [Scalar​](./scripting-reference/classes/base-classes/paintable.mdx#setmaterialscalarparameter) | **`Metallic`** | `0` | Affects `Metallic `input - goes from 0 to 1 |
| [Scalar](./scripting-reference/classes/base-classes/paintable.mdx#setmaterialscalarparameter) | **`Specular`** | `0.5` | Affects `Specular` input - goes from 0 to 1 |
| [Scalar](./scripting-reference/classes/base-classes/paintable.mdx#setmaterialscalarparameter) | **`Roughness`** | `0.65` | Affects `Roughness` input - goes from 0 to 1 |
| [Scalar](./scripting-reference/classes/base-classes/paintable.mdx#setmaterialscalarparameter) | **`Opacity`** | `0` | Affects `Opacity` and `Opacity Mask` inputs - goes from 0 to 1 <br />**Opacity** multiplies with **Texture** Alpha Channel to generate the final opacity |

:::tip

For more information regarding how each Parameter affects the final visual, please take a look at Unreal [Physically Based Materials](https://docs.unrealengine.com/4.26/en-US/RenderingAndGraphics/Materials/PhysicallyBased/) and [Material Inputs](https://docs.unrealengine.com/4.26/en-US/RenderingAndGraphics/Materials/MaterialInputs/) docs page.

:::

### **`M_NanosMasked`**

Masked is the default Material Type in nanos world. Masked Materials are the most efficient one and supports **Opacity Mask** only. It means the **Opacity** input accepts only `0` or `1`.

### **`M_NanosTranslucent`**

Translucent Materials are the heavier ones to render, and cause a lot of overdraw \(and performance issues\) if used incorrectly. It supports **Opacity** but does not support **Normal**, **Metallic,** **Specular** and **Roughness** inputs for optimization reasons.

### **`M_NanosTranslucent_Depth`**

Is the same as Translucent but will be always visible in the screen, even behind walls or other objects.

### **`M_NanosDecal`**

Translucent Material which renders objects as Deferred Decals to be used in Decals.

### **`M_NanosWireframe`**

Material which renders objects as Wireframe. Supported parameter: **Tint** and **Emissive**.

:::tip

**Note**: All those Materials in this page are already included in the base game in the [Default nanos world Asset Pack](./assets-modding/default-asset-pack/default-asset-pack.md), you can reference them like that: **`nanos-world::M_NanosDefault`.**

:::

#### Supported Parameters in each Material

|  | Tint | Texture | Normal | Emissive | Metallic | Specular | Roughness | Opacity |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Masked** | `true` | `true` | `true` | `true` | `true` | `true` | `true` | `true*` |
| **Translucent** | `true` | `true` | `false` | `true` | `false` | `false` | `false` | `true` |
| **Translucent Depth** | `true` | `true` | `false` | `true` | `false` | `false` | `false` | `true` |
| **Decal** | `true` | `true` | `true` | `true` | `true` | `true` | `true` | `true` |
| **Wireframe** | `true` | `false` | `false` | `true` | `false` | `false` | `false` | `false` |

> *Masked Material's Opacity supports only Opacity Mask: `0` or `1`
