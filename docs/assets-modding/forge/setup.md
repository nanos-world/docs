---
title: Setup Guide
description: Learn how to set up and use Forge, the experimental toolset for creating assets in nanos world
sidebar_position: 0
tags: [forge, assets]
keywords: [forge, setup, plugin, unreal, modding]
---

How to set up the nanos world Forge plugin

**nanos world Forge** is an experimental plugin for Unreal Engine designed to simplify asset creation in nanos world. It comes with built-in tools and cooking automation to speed up development.

The plugin can be installed to any Unreal Engine project, but it is recommended to use it with the [nanos world ADK](/docs/assets-modding/creating-assets/adk-assets-development-kit), as it already includes the nanos world packaging configuration.

### Downloading nanos world Forge

The nanos world Forge plugin is available as a binary release on the [nanos world ADK repository](https://github.com/nanos-world/assets-development-kit/releases).

### Installing the Plugin

Extract the downloaded archive and copy the `NanosWorldForge` folder into your Unreal project's `Plugins/` directory:

```
YourProject/
├── Content/
├── Plugins/
│   └── NanosWorldForge/    <- Copy the Forge folder here
└── YourProject.uproject
```

### Opening the hub

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

- [Object2Lua](/docs/assets-modding/forge/tools/object2lua.md)
- [Foliage2Lua](/docs/assets-modding/forge/tools/foliage2lua.md)
- [Material Picker](/docs/assets-modding/forge/tools/material-picker.md)
- [Placeholders](/docs/assets-modding/forge/tools/placeholders.md)
- [Quick Instancer](/docs/assets-modding/forge/tools/quick-instancer.md)
- [StaticMeshToFoliage](/docs/assets-modding/forge/tools/static-mesh-to-foliage.md)
- [Thumbnail Generator](/docs/assets-modding/forge/tools/thumbnail-generator.md)

## Support the developer
This plugin was created by **NegativeName** for the nanos world community. If you enjoy using it, find it useful, and want to show your support, feel free to buy me a coffee! ☕️

<KofiButton username="negativename" />