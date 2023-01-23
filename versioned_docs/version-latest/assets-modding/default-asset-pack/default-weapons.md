---
title: Default Weapons
description: Default nanos world Weapons and it's Parameters
tags: [assets]
keywords: [assets, weapons, built-in, default]
---


Default nanos world Weapons and it's Parameters.

![](/img/docs/weapons-pack.jpg)

nanos world provides a bunch of built-in Weapons Meshes ready to use! They are all configured in our [default-weapons](https://store.nanos.world/packages/default-weapons/) Package!

![](/img/docs/default-weapons-01.jpg)

Here we will describe it's Material Parameters and how you can customize them!

#### Parameters Supported by nanos Default Weapons Materials

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [Color](/scripting-reference/classes/base-classes/paintable.mdx#setmaterialcolorparameter) | **`Tint`** | `Color.WHITE` | Affects `Base Color` input | **Tint** multiplies with **Texture** parameter to generate the final color |
| [Texture](/scripting-reference/classes/base-classes/paintable.mdx#setmaterialtextureparameter) | **`Texture`** | White Texture | Image which multiplies with **Tint** to generate the final color |
| [Texture](/scripting-reference/classes/base-classes/paintable.mdx#setmaterialtextureparameter) | **`Normal`** | UP Normal Map `Vector(0.5, 0.5, 1)` | Image which affects how Light reflects on the object |
| [Scalar](/scripting-reference/classes/base-classes/paintable.mdx#setmaterialscalarparameter) | **`Specular`** | `0.5` | Affects `Specular` input - goes from 0 to 1 |
| [Scalar​](/scripting-reference/classes/base-classes/paintable.mdx#setmaterialscalarparameter) | **`Metallic`** | `0` | `Metallic` multiplier |
| [Scalar](/scripting-reference/classes/base-classes/paintable.mdx#setmaterialscalarparameter) | **`Roughness`** | `1` | `Roughness` multiplier |
| [Texture](/scripting-reference/classes/base-classes/paintable.mdx#setmaterialtextureparameter) | **`MaterialMask`** | White Texture | Mask Image<br />**R** Channel - Roughness <br />**G** Channel - Metallic <br />**B** Channel - Ambient Occlusion <br />**A** channel - Pattern Mask |
| [Color](/scripting-reference/classes/base-classes/paintable.mdx#setmaterialcolorparameter) | **`PatternTint`** | `Color.WHITE` | Affects `Base Color` input of Pattern Texture | **Tint** multiplies with **PatternTexture** parameter to generate the final color |
| [Texture](/scripting-reference/classes/base-classes/paintable.mdx#setmaterialtextureparameter) | **`PatternTexture`** | White Texture | Image which multiplies with **PatternTint** to generate the final color |
| [Scalar](/scripting-reference/classes/base-classes/paintable.mdx#setmaterialscalarparameter) | **`PatternRoughness`** | `0.45` | Affects `Roughness` input - goes from 0 to 1 - Only applies on PatternTexture |
| [Scalar](/scripting-reference/classes/base-classes/paintable.mdx#setmaterialscalarparameter) | **`PatternTilling`** | `1` | The size of Pattern Texture |
| [Scalar](/scripting-reference/classes/base-classes/paintable.mdx#setmaterialscalarparameter) | **`PatternBlend`** | `0` | The Lerp used to blend the Pattern Texture and the base Texture |
| [Scalar](/scripting-reference/classes/base-classes/paintable.mdx#setmaterialscalarparameter) | **`PatternBlendSharpness`** | `0.01` | How Sharp is the Pattern Blend |