---
title: Default Materials
description: Default Materials and it's Parameters
tags: [assets]
keywords: [assets, materials, built-in, default]
---


Default Materials and it's Parameters.

import { Classes } from '@site/docs/components/_nanos.mdx';


## Template Materials

nanos world provides several built-in template materials which can be easily used and customized with <Classes.Paintable /> methods.

:::info

You can create and access your own Materials Parameters if you have a Mesh which uses a Custom Material!

:::

![](/img/docs/default-materials-01.webp)

:::tip

For more information regarding **Material Types** and **Blend Modes**, please refer to [Unreal Docs](https://docs.unrealengine.com/4.26/en-US/RenderingAndGraphics/Materials/MaterialProperties/BlendModes/).

:::


#### Parameters Supported by Default Materials

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [Color](/scripting-reference/classes/base-classes/paintable.mdx#setmaterialcolorparameter) | **`Tint`** | `Color.WHITE` | Affects `Base Color` input | **Tint** multiplies with **Texture** parameter to generate the final color |
| [Texture](/scripting-reference/classes/base-classes/paintable.mdx#setmaterialtextureparameter) | **`Texture`** | White Texture | Image which multiplies with **Tint** to generate the final color |
| [Texture](/scripting-reference/classes/base-classes/paintable.mdx#setmaterialtextureparameter) | **`Normal`** | UP Normal Map `Vector(0.5, 0.5, 1)` | Image which affects how Light reflects on the object |
| [​​​Color​](/scripting-reference/classes/base-classes/paintable.mdx#setmaterialcolorparameter) | **`Emissive`** | `Color.BLACK` | Affects `Emissive` input, high values will cause bloom effect |
| [Scalar​](/scripting-reference/classes/base-classes/paintable.mdx#setmaterialscalarparameter) | **`Metallic`** | `0` | Affects `Metallic` input - goes from 0 to 1 |
| [Scalar](/scripting-reference/classes/base-classes/paintable.mdx#setmaterialscalarparameter) | **`Specular`** | `0.5` | Affects `Specular` input - goes from 0 to 1 |
| [Scalar](/scripting-reference/classes/base-classes/paintable.mdx#setmaterialscalarparameter) | **`Roughness`** | `0.65` | Affects `Roughness` input - goes from 0 to 1 |
| [Scalar](/scripting-reference/classes/base-classes/paintable.mdx#setmaterialscalarparameter) | **`Opacity`** | `0` | Affects `Opacity` and `Opacity Mask` inputs - goes from 0 to 1 <br />**Opacity** multiplies with **Texture** Alpha Channel to generate the final opacity |

:::tip

For more information regarding how each Parameter affects the final visual, please take a look at Unreal [Physically Based Materials](https://docs.unrealengine.com/4.26/en-US/RenderingAndGraphics/Materials/PhysicallyBased/) and [Material Inputs](https://docs.unrealengine.com/4.26/en-US/RenderingAndGraphics/Materials/MaterialInputs/) docs page.

:::


### **`M_Default_Masked_Lit`**

**Masked** and **Lit** Material.


### **`M_Default_Masked_Unlit`**

**Masked** and **Unlit** Material.


### **`M_Default_Translucent_Lit`**

**Translucent** and **Lit** Material.


### **`M_Default_Translucent_Lit_Depth`**

**Translucent**, **Lit** with `Disable Depth Test` enabled. Is the same as Translucent but will be always visible in the screen, even behind walls or other objects.


### **`M_Default_Translucent_Lit_Decal`**

**Translucent**, **Lit** with `Deferred Decal` Material Domain, to be used in [Decals](/docs/next/scripting-reference/classes/decal).


## Special Utils Materials

### **`M_Noise`**

**Opaque**, **Lit** with a `Noise` node to produce a noise effect. Also provides `Speed` (Vector) and `Scale` (Scalar) parameters.


### **`M_Wireframe`**

**Translucent**, **Lit** with `Wireframe` enabled, meaning it renders objects as Wireframe.


:::tip

**Note**: All those Materials in this page are already included in the base game in the [Default nanos world Asset Pack](/assets-modding/default-asset-pack/default-assets-list.md), you can reference them like that: **`nanos-world::M_Default_Masked_Lit`.**

:::


#### Materials Summary

|  | Domain | Blend Mode | Shading Model |
| :--- | :--- | :--- | :--- |
| **M_Default_Masked_Lit** | Surface | Masked | Default Lit |
| **M_Default_Masked_Unlit** | Surface | Masked | Unlit |
| **M_Default_Translucent_Lit** | Surface | Translucent | Default Lit |
| **M_Default_Translucent_Lit_Depth** | Surface | Translucent | Default Lit |
| **M_Default_Translucent_Lit_Decal** | Deferred Decal | Translucent | Default Lit |
| **M_Noise** | Surface | Opaque | Default Lit |
| **M_Wireframe** | Surface | Translucent | Default Lit |

:::tip

**Opaque** are the most efficient ones but doesn't support **Opacity** or **Opacity Mask**.

**Masked** are the most common ones and supports **Opacity Mask** only. It means the **Opacity** parameter accepts only `0` or `1`.

**Translucent** are the heavier ones to render, and cause a lot of overdraw (and performance issues) if used incorrectly. It supports **Opacity** but does not support **Normal**, **Metallic,** **Specular** and **Roughness** inputs by default for optimization reasons.

:::


#### Supported Common Parameters in each Material

|  | Tint | Texture | Normal | Emissive | Metallic | Specular | Roughness | Opacity |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **M_Default_Masked_Lit** | `true` | `true` | `true` | `true` | `true` | `true` | `true` | `true*` |
| **M_Default_Masked_Unlit** | `false` | `true` | `false` | `true` | `false` | `false` | `false` | `true*` |
| **M_Default_Translucent_Lit** | `true` | `true` | `false` | `true` | `false` | `false` | `false` | `true` |
| **M_Default_Translucent_Lit_Depth** | `true` | `true` | `false` | `true` | `false` | `false` | `false` | `true` |
| **M_Default_Translucent_Lit_Decal** | `true` | `true` | `true` | `true` | `true` | `true` | `true` | `true` |
| **M_Noise** | `false` | `false` | `false` | `true` | `true` | `true` | `true` | `false` |
| **M_Wireframe** | `true` | `false` | `false` | `true` | `false` | `false` | `false` | `false` |

> **Masked Material's Opacity supports only Opacity Mask: `0` or `1`*


## Physical Materials

[Physical Materials](https://docs.unrealengine.com/4.27/en-US/InteractiveExperiences/Physics/PhysicalMaterials/) are materials which define Physical properties of an object. With [Paintable.SetPhysicalMaterial()](/scripting-reference/classes/base-classes/paintable.mdx#setphysicalmaterial) you can change the default physical material of an Entity.

Besides the Physical Properties of an object (friction, restitution, density, etc), Physical Materials are used in nanos world for applying special effects and sounds when events happen. For example on Footsteps Effects, Bullets Impacts or Objects Hits.

nanos world provides a list of the built-in Physical Materials which you can use to override in-game the Physical properties of an Entity.

:::tip

You also can create your own Physical Materials and use them in-game! Just remember to configure in them the proper **SurfaceType** for a better integration!

:::


|  | Friction | Restitution | Density | [Surface Type](/scripting-reference/glossary/enums.mdx#surfacetype) |
| :--- | :--- | :--- | :--- | :--- |
| **PM_Concrete** | `0.9` | `0.3` | `2.0` | `SurfaceType.Concrete` |
| **PM_Flesh** | `0.7` | `0.3` | `1.0` | `SurfaceType.Flesh` |
| **PM_Glass** | `0.2` | `0.2` | `2.0` | `SurfaceType.Glass` |
| **PM_Grass** | `0.7` | `0.3` | `1.0` | `SurfaceType.Grass` |
| **PM_Gravel** | `0.7` | `0.3` | `1.0` | `SurfaceType.Gravel` |
| **PM_Ground** | `0.7` | `0.3` | `1.0` | `SurfaceType.Ground` |
| **PM_Metal** | `0.6` | `0.1` | `1.0` | `SurfaceType.MetalHeavy` |
| **PM_MetalLight** | `0.6` | `0.2` | `1.0` | `SurfaceType.MetalLight` |
| **PM_Mud** | `0.7` | `0.3` | `1.0` | `SurfaceType.Mud` |
| **PM_Plastic** | `0.7` | `0.7` | `1.0` | `SurfaceType.Plastic` |
| **PM_Rock** | `0.9` | `0.3` | `1.0` | `SurfaceType.Rock` |
| **PM_Rubber** | `0.7` | `1.0` | `1.0` | `SurfaceType.Rubber` |
| **PM_RubberBouncy** | `0.05` | `0.9` | `1.0` | `SurfaceType.Rubber` |
| **PM_Sand** | `0.6` | `0.3` | `1.0` | `SurfaceType.Sand` |
| **PM_Water** | `0.7` | `0.3` | `1.0` | `SurfaceType.Water` |
| **PM_Wood** | `0.7` | `0.3` | `0.5` | `SurfaceType.WoodLight` |
| **PM_WoodHeavy** | `0.7` | `0.3` | `0.5` | `SurfaceType.WoodHeavy` |