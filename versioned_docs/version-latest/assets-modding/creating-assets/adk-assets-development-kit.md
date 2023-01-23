---
title: Assets Development Kit
description: nanos world Assets Development Kit - ADK
sidebar_position: 1
tags: [assets]
keywords: [SDK, ADK, assets, kit, unreal]
---

How to use the nanos world Assets Development Kit - ADK


nanos world provides a fully configurable and ready **Unreal Project** called Assets Development Kit (ADK) to help you integrating and exporting Assets and Maps much faster.

This project contains **Placeholders**, **Tools** and **Correct References** that must be used in order to create **Characters** or set proper **Physical Materials** for example.


## Downloading Assets Development Kit

Our ADK is uploaded on [GitHub](https://github.com/nanos-world/assets-development-kit/), please download it's latest version and extract it in your computer.


## Opening the Project

You will find a file `NanosWorldADK.uproject` in there, just open it with Unreal Engine (make sure you have [Set Up Unreal Engine](setting-up-ue.md) before proceeding).

The first time opening it may take some time as the initial shaders must be compiled.


After it finishes compiling all shaders, you can proceed to the [next step to import an asset](importing-assets.md) or take a look below in all available tools.


## Special Attention

Please do not **MODIFY**, **DELETE**, **CREATE** or **COPY** any file inside `NanosWorld/` folder, otherwise the ADK will not work properly. Also make sure you DO NOT modify them unintentionally! If asked to save any modified file in there, cancel it! All references must use `NanosWorld/` the way they are.

`NanosWorld/` folder has some Assets which you can use to reference **your** assets and make the export keep the correct references when using them in-game.


## Updating to a newer ADK version

To update your Unreal project to a newer Assets Development Kit version, you just need to download the newest version from GitHub and extract/paste it over the existing project, overriding **all** files.

:::caution

It is recommended to backup your settings at `Config/` folder because they will be overridden in cases you modified it. Usually it's better to manually reapply your modified settings into the new Project settings after the updates.

:::


## Tools available in the ADK project

Here's a list of all tools and blueprints which you can use to speed up and help creating assets:

* [Placeholder Blueprints `NanosWorld/Blueprints/Placeholders/`](adk-assets-development-kit#placeholder-blueprints)
* [Lua Code Generator `NanosWorld/Blueprints/Utility/WBP_LuaCodeGenerator`](adk-assets-development-kit#lua-code-generator)
* [Assets.toml Generator `NanosWorld/Blueprints/Utility/WBP_AssetsTomlGenerator`](adk-assets-development-kit#assets-toml-generator)
* [Sun & Sky Actor `NanosWorld/Blueprints/World/BP_SunSky`](adk-assets-development-kit#sunand-sky-actor)
* [Physical Materials `NanosWorld/MaterialLibrary/PhysicalMaterials/`](adk-assets-development-kit#physical-materials)
* [Mannequin Skeleton `NanosWorld/Characters/Common/SKEL_Mannequin`](adk-assets-development-kit#mannequin-skeleton)
* [Thumbnail Generator `NanosWorld/Blueprints/Utility/ThumbnailGenerator`](adk-assets-development-kit#thumbnail-generator)

### Placeholder Blueprints
#### `NanosWorld/Blueprints/Placeholders/`

![Placeholder Blueprints overview](/img/docs/adk-01.webp)

You can use the **Placeholder Blueprints** to set Spawn Positions of **Vehicles**, **Weapons**, **Characters** and **Props**. This works only to help you generating a Lua code with spawn positions after all. These Blueprints aren’t cooked with the map. Use the [Lua Code Generator](adk-assets-development-kit#lua-code-generator) to generate the Lua script with all spawn locations.

### Lua Code Generator
#### `NanosWorld/Blueprints/Utility/WBP_LuaCodeGenerator`

![Lua Code Generator Widget](/img/docs/adk-02.webp)

**Lua Code Generator** is an **Editor Utility Widget** which scans the map which is currently loaded in your Unreal and generate a list of spawn code with exact Location and Rotation for every [Placeholder Blueprint ](adk-assets-development-kit#placeholder-blueprints)you had spawned.

To open it, right click on it and press **Run Editor Utility Widget**:

![](/img/docs/adk-03.webp)

### Assets.toml Generator
#### `NanosWorld/Blueprints/Utility/WBP_AssetsTomlGenerator`

![](/img/docs/adk-04.webp)

This is an **Editor Utility Widget** which scans a folder (determined by the TextBox) and generates the configuration for an Assets.toml with all Assets in the folder \(which can be used in nanos world\).

### Sun & Sky Actor
#### `NanosWorld/Blueprints/World/BP_SunSky`

This is a pre-configured **Sun & Sky Blueprint** which can be used and easily replaced by nanos world Official Sun with `World.SpawnDefaultSun()`. This is useful to get an approximate result of how the light will look like in-game if you decide to Spawn the Default Sun.

:::info

**Note:** Overriding the Sun through Scripting with `World.SpawnDefaultSun()`, will respawn the Sun actor, which means no configuration did on the Sun & Sky actor will persist

Example: Light Intensity, Color, Post Process and other configuration will be lost.

:::

### Physical Materials
#### `NanosWorld/MaterialLibrary/PhysicalMaterials/`

![](/img/docs/adk-05.webp)

If you are creating a **Material**, you can \(and should\) use these **Physical Materials** do integrate better with nanos world. Using these Physical Materials will allow nanos world recognize which type of surface your Prop/Object is, giving it the proper auto-generated Hit or Footstep sound.

:::caution

DO NOT **modify** or **rename** any Physical Materials, only use by referencing them in your Materials.

:::

### Mannequin Skeleton
#### `NanosWorld/Characters/Common/SKEL_Mannequin`

To be able to create Skeletal \(Character\) Meshes which work with our [Character](/scripting-reference/classes/character.mdx) class, you must set your Skeletal Mesh to use our **Mannequin Skeleton**. This Skeleton is the same as Unreal Engine 5 default Mannequin, so any Skeletal Mesh which uses UE4’s Mannequin Skeleton will work for us!

To change a Skeletal Mesh’s Skeleton: right click on it &gt;&gt; Skeleton &gt;&gt; Assign Skeleton and change it to our `SKEL_Mannequin`.

![](/img/docs/adk-06.webp)

### Thumbnail Generator
#### `NanosWorld/Blueprints/Utility/ThumbnailGenerator`

We’ve shipped a **Thumbnail Generator** tool to help you generating `.jpg` images of your assets. To use that, just open **ThumbnailGenerator** level and hit Play. Then you will be able to define a folder for search the assets \(currently only Static and Skeletal Meshes are supported\) and a folder to save the images \(.jpg\). You can optionally keep the directory hierarchy in the output folder or save all images in the same folder. Once you hit **Generate**, it will start loading all assets and taking a photo from them.

:::info

**Note:** this may be a slow process depending if your assets were already compiled previously.

It is also recommended to generate the Thumbnails twice, so you grant they will be saved in the max quality possible.

:::

![](/img/docs/adk-07.webp)

