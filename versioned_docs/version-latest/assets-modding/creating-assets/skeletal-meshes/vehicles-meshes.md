---
title: Vehicles Meshes
description: How to create your own Vehicles
tags: [assets, vehicles, skeletal-meshes]
keywords: [vehicle, unreal]
---


Vehicles in nanos world implement Unreal's [Wheeled Vehicle](https://docs.unrealengine.com/4.27/en-US/InteractiveExperiences/Vehicles/). The base Mesh of a vehicle is a **Skeletal Mesh**.


## Preparing a Skeletal Mesh

There is no secret to import a Vehicle Skeletal Mesh to nanos world. Any Skeletal Mesh with any Skeleton will work. The only "rule" is to it have 4 wheels bones, so nanos world Vehicle systems can properly rotate them.

Take a look on one of the default nanos world Vehicles Skeleton:

![](/img/docs/tutorials/import-vehicles-01.jpg)

It has only 4 bones behind the root, for each Wheel: `Wheel_Front_Left`, `Wheel_Front_Right`, `Wheel_Rear_Left` and `Wheel_Rear_Right`. Yours don't need to follow this naming, as the Wheel Bone names are set through Lua.


## Exporting the Vehicle

The Exporting process follows the usual process of exporting assets to nanos world. Please follow the [Importing Custom Assets](./assets-modding/creating-assets/importing-assets.md) Guide.
