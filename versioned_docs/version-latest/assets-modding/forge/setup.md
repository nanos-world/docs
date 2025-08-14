---
title: Setup Guide
description: Learn how to set up and use Forge, the experimental toolset for creating assets in nanos world
sidebar_position: 0
tags: [forge, assets]
keywords: [forge, setup, plugin, unreal, modding]
---

How to set up the nanos world Forge plugin

:::info

**Forge** is a free plugin created by a dedicated community member, **NegativeName**, and endorsed by nanos world. As it is actively developed and constantly improving, occasional bugs may occur.

If you find it useful and enjoy using it, consider showing your support by [buying him a coffee](https://ko-fi.com/negativename)! ☕️

:::

---

**nanos world Forge** is an experimental plugin for Unreal Engine designed to simplify asset creation in nanos world. It comes with built-in tools and cooking automation to speed up development.

The plugin can be installed to any Unreal Engine project, but it is recommended to use it with the [nanos world ADK](/assets-modding/creating-assets/adk-assets-development-kit.md), as it already includes the nanos world packaging configuration.


### Downloading nanos world Forge

The nanos world Forge plugin is already included as a built-in Plugin in the latest ADK release, you can download it in the [nanos world ADK repository](https://github.com/nanos-world/assets-development-kit/releases).


### Opening the Forge Window

The plugin adds a new tab to the Unreal Editor that brings all the tools and features together in one place. You can open it from **Window > Nanos World Forge**.

![](/img/docs/forge-01.webp)

![](/img/docs/forge-02.webp)


## Cook Handler

The **Cook Handler** is a feature that automatically manages your cooked assets. It copies them to the specified `ServerPath/Assets/` directory, so you don't have to move them manually. It also generates an `Assets.toml` file in each asset pack folder, listing all its assets.

You can enable or disable the Cook Handler in the [plugin settings](#plugin-settings) and set the server path where the assets will be copied.
If no server path is set, the Cook Handler will fall back to the `YourProject/ForgeCooked/` directory.


## Plugin Settings

![](/img/docs/forge-03.webp)

| Setting | Description |
| :--- | :--- |
| **`Nanos World Server Path`** | Target folder for cooked assets |
| **`Enable Cook Handler`** | Automatically copies the Unreal Engine cooked content to the server path |
| **`Write Assets Toml`** | Generates an `Assets.toml` in each asset pack folder listing all its assets |


## Tools in nanos world Forge

Here are the tools currently available in nanos world Forge:

- [Object2Lua](/docs/assets-modding/forge/tools/object2lua.md): Converts Unreal Engine blueprint assets into Lua tables.
- [Foliage2Lua](/docs/assets-modding/forge/tools/foliage2lua.md): Transforms foliage actors into Lua table representations.
- [Material Picker](/docs/assets-modding/forge/tools/material-picker.md): Quickly identify materials by clicking on them in the viewport.
- [Placeholders](/docs/assets-modding/forge/tools/placeholders.md): Place actors in your map and export them to Lua code.
- [Quick Instancer](/docs/assets-modding/forge/tools/quick-instancer.md): Converts Static Mesh actors into Instanced Static Mesh actors for better performance.
- [StaticMeshToFoliage](/docs/assets-modding/forge/tools/static-mesh-to-foliage.md): Converts static mesh actors into foliage types for landscape painting.
- [Thumbnail Generator](/docs/assets-modding/forge/tools/thumbnail-generator.md): Creates high-quality PNG thumbnails for assets, with bulk processing support.
