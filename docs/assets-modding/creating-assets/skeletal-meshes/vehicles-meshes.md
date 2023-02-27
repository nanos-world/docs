---
title: Vehicles Meshes
description: How to create your own Vehicles
tags: [assets, vehicles, skeletal-meshes]
keywords: [vehicle, unreal]
---


Vehicles in nanos world implement Unreal's [Wheeled Vehicle](https://docs.unrealengine.com/4.27/en-US/InteractiveExperiences/Vehicles/). The base Mesh of a vehicle is a **Skeletal Mesh**.


## Preparing a Skeletal Mesh

There is no secret to import a Vehicle Skeletal Mesh. Any Skeletal Mesh with any Skeleton will work. The only "rule" is to it have 4 wheels bones, so the Vehicle systems can properly rotate them.

Take a look on one of the default Vehicles Skeleton:

![](/img/docs/tutorials/import-vehicles-01.webp)

This vehicle used in the example only has 4 bones below the root, for each Wheel: `Wheel_Front_Left`, `Wheel_Front_Right`, `Wheel_Rear_Left` and `Wheel_Rear_Right`. Yours don't need to follow this naming, as the Wheel Bone names are set through Lua.


## Preparing the Physical Asset

Another important step is setting up the Physics Asset for the Skeletal Mesh. If your Skeletal Mesh doesn't have it yet, you can create and assign a new one by right-clicking on the Skeletal Mesh and creating it:

![](/img/docs/tutorials/import-vehicles-05.webp)

Usually you only need one or a few simple boxes in the format of the Vehicle, you can add new ones by right clicking the root bone like that:

![](/img/docs/tutorials/import-vehicles-06.webp)

You will end up like that:

![](/img/docs/tutorials/import-vehicles-04.webp)

:::info

**Do not** add physics shapes to the Wheels! Usually you don't need it and it will only cause physics problems. In normal circumstances you only need to add collision shapes to the root bone!

:::


## Adding Dynamic Head & Tail Lights

It is possible to configure your Vehicle Materials to use the built-in Headlights and Taillights system:

![](/img/docs/tutorials/import-vehicles-03.webp)

For that, you will need to setup 4 parameters in your Vehicle's Material:

| Type | Parameter Name | Description |
| :--- | :--- | :--- |
| `Scalar` | **`LightsEnabled`** | A scalar which will be toggled `0` and `1` to turn ALL lights ON and OFF (e.g. when Vehicle Engine is ON/OFF) |
| `Vector` | **`HeadLightsColor`** | The Head Lights color |
| `Vector` | **`BrakeLightsColor`** | The Brake Lights color |
| `Vector` | **`ReverseLightsColor`** | The Reverse Lights color |

You should multiply/lerp all Colors with your texture mask and sum them into the Emissive pin. Use the LightsEnabled to do a final multiply on the result, like this:

![](/img/docs/tutorials/import-vehicles-02.webp)


:::tip

In this example I multiplied the final result to 30 to give a bigger glow effect.

:::


## Exporting the Vehicle

The Exporting process follows the usual process of exporting assets to nanos world. Please follow the [Importing Custom Assets](/assets-modding/creating-assets/importing-assets.md) Guide.
