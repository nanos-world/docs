---
title: Creating & Importing Assets
description: Learn how to Create and Import custom Assets into nanos world
sidebar_position: 2
tags: [assets]
keywords: [assets, ADK, import, unreal]
---

Learn how to Create and Import custom Assets into nanos world

:::tip Prerequisites

Before proceeding, please make you followed the first steps and installed [Unreal Engine](setting-up-ue.md) and downloaded the [Assets Development Kit](adk-assets-development-kit.md) project.

It is also recommended to have read the [Assets Guide](/core-concepts/assets.mdx) to understand some concepts which will be mentioned here.

:::


## Getting Started

The first step to start creating your own Assets is opening the ADK project. Once you do that, you will notice we have two folders in the root Content/ directory: `NanosWorld/` and `MyAssetPack/`:

![ADK Folders](/img/docs/adk-folders.webp)

As stated before, do not modify any file inside `NanosWorld/` as any change will not be exported neither imported into nanos world.

:::tip

There are two ways to create asset packs: by [Plugin Content](#using-plugin-content) or by [Game Content](#using-game-content). The newer and recommended way is using **Plugin Content**.

:::


## Option A: Using Plugin Content

By using Content plugin, you ensure your Asset Pack will not have a name collision with other Asset Packs, and it's the **recommended** way to organize the Asset packs you create.

The first step is to create a plugin, so open the plugin tab at **Edit ⬇️ Plugins**:

![](/img/docs/importing-assets/plugin-tab.webp)

And in the upper left corner, tighten `+ Add`:

![](/img/docs/importing-assets/new-plugin.webp)

Fill in the name of the folder to create the plugin, no other field is required:

![](/img/docs/importing-assets/create-plugin.webp)

After created, enable the option to `Show Plugin Content` in the Content Drawer settings:

![](/img/docs/importing-assets/show-plugin.webp)

Then in the left side, you will find the plugin folder you just created, this folder will be your Asset Pack folder:

![](/img/docs/importing-assets/plugin-content.webp)

Now you can skip to [Importing external Assets](#importing-external-assets) to proceed.


## Option B: Using Game Content

If you can't create a plugin, you can still use the Game Content way of creating Assets.

For Game Content, you just need to create a folder inside `Content/` to be your Asset Pack. You can delete or rename `Content/MyAssetPack`/ to anything you want.

:::caution

Using Game Content to create Asset Packs is **not** recommended anymore as it can cause naming collision problems if other Asset Packs use the same Game Content folder name as you.

:::


## Importing external Assets

All assets you create or import must be contained inside the folder you just created (the Plugin Content folder `Plugins/MyAwesomeAssetPack Content/` or the Game Content folder `Content/MyAssetPack/`. Feel free to create sub-folders and organize the way you want. But all files must be inside that folder!

You can drag'n drop any file from your computer inside that folder, e.g. FBX meshes or WAV sounds for example.

The next pages of the docs will have examples on how to import specific assets (Skeletal Meshes, Maps, etc). You can check them and then back here to finish the exportation.


## Exporting & Cooking your Assets

After you imported and created your Assets, exporting them from Unreal Engine is very easy.

For that, select **Platforms ⬇️ Windows/Linux ➡ Cook Content**:

![](/img/docs/importing-assets-03.webp)

This will start the Cooking & Packing process, which may take a while depending if the Assets were already loaded. It usually is only longer at the first time.

![](/img/docs/importing-assets-04.webp)

After finishing, go for the Cooked folder of your ADK project:

`assets-development-kit/Saved/Cooked/Windows/NanosWorldADK/`

:::caution

Please don't confuse the Cooked assets folder with the ADK project files. Make sure you are in the `Saved/Cooked/` one!

:::

- Using **Game Content**: you can find the folder `Content/<MyAssetPack>/` inside.
- Using **Plugin Content**: you can find the folder `Plugins/<MyAwesomeAssetPack>/Content/` inside.

Inside this folder, you can find all your cooked assets. Example of a Game Content result:

![](/img/docs/importing-assets-05.webp)

After finding the Cooked folder with your assets, we will manually copy it as it will become our [Asset Pack](/core-concepts/assets.mdx).

Then just copy the folder into your server's `Assets/` directory and create a file named `Assets.toml` inside of it. Please refer to [Assets Pack Configuration](/core-concepts/assets.mdx#assets-pack-configuration) which you can copy and paste a new version of the file.

After copied, rename your Asset Pack folder to a `kebab-case` as it's a mandatory standard for nanos world Assets & Packages names.

You will end up with a folder like this:

```
Assets/
├── my-asset-pack/
│   ├── SM_Cube.uasset
│   ├── SM_Cube.uexp
│   ├── SM_Cube.ubulk
│   ├── SM_Asset_02.uasset
│   ├── ...
│   └── Assets.toml
Config.toml
NanosWorldServer.exe
```


## Configuring your Assets.toml

After you created your Assets.toml in the root folder of your Asset Pack. There are some important configuration to be set.

Open the Asset.toml in a text editor and make sure you configured `unreal_folder`, `unreal_version` and `is_plugin_content` to the correct values.

```toml
# unreal engine configurations
[unreal]
    # unreal engine folder - the name of the root folder (the one inside UnrealProject/Content/) which the assets will have references to each other
    unreal_folder =     "MyAssetPack"
    # unreal engine version - unreal version this asset pack was compiled on
    unreal_version =    "5.0.3"
    # whether this asset pack was created as a plugin content
    is_plugin_content = false
```

Another important section to configure is the `[assets]` one, in which you define the list of exported assets to be referenced through scripting.

For example if you export a StaticMesh `SM_Cube` in a sub-folder, define them like that in your Assets.toml:

```toml
# assets files
[assets]
    # ...

    # static meshes
    [assets.static_meshes]
        # Key = Path
        SM_Cube = "MySubFolder/SM_Cube"
        # ...
```

This way scripters can spawn your Cube Mesh like that:

```lua title="Server/Index.lua" showLineNumbers
Prop(Vector(0, 0, 0), Rotator(0, 0, 0), "my-asset-pack::SM_Cube")
```

:::tip

You can use the [ADK Assets.toml Generator Tool](adk-assets-development-kit.md##assetstoml-generator) to generate your Assets.toml automatically!

:::


## Final Considerations

:::caution

After cooking and copying your folder, **do not** rename or delete any file/folder inside your Cooked Asset Pack folder! It will break all internal references used by your assets and may cause they appear without materials/textures.

:::


## Additional Tips

### Name your assets properly

We hardly recommend and encourage you to follow [Allar's Asset Naming Conventions](https://github.com/Allar/ue5-style-guide#1-asset-naming-conventions-) as a pattern for naming your assets and organizing your project folder.

We've summarized the most common names here:

| **Asset Type** | **Prefix** | **Suffix** |
| :--- | :--- | :--- |
| Skeletal Mesh | `SK_` |  |
| Static Mesh | `SM_` |  |
| Physical Asset | `PHYS_` |  |
| Material | `M_` |  |
| Material Instance | `MI_` |  |
| Animation | `A_` |  |
| Animation Montage | `A_` |  |
| Particle | `P_` |  |
| Sound Wave | `A_` |  |
| Sound Cue | `A_` | `_Cue` |
| Texture | `T_` | `_?` (see [Textures](https://github.com/Allar/ue4-style-guide#anc-textures)) |


### Reduce the size of your Assets

Use small assets size and configure textures compression properly (big files are bad for network bandwidth). We recommend max 2048x2048 size for textures, as they will be 5MB each.


### Creating Assets Thumbnails

It is a good practice to include thumbnails of your assets into a folder called `Thumbnails/` in the root of your Asset Pack. This is a convention as the **Sandbox** game-mode reads from it to display on Spawn Menu. Add `.jpg` with the name of the assets all in the Thumbnails folder.

You can use the [ADK Thumbnail Generator Tool](adk-assets-development-kit.md#thumbnail-generator) to generate them!


### Using Engine Content

Avoid using **Engine Content** (i.e. Engine's Materials or Meshes). If you want to use them, we recommend copying them to your `Content/YourAssetPack/` folder, otherwise they may not be exported correctly.

:::tip

There are some **Engine Content** which are allowed to use, but only from the following folders _(these are already included by the base game and are safe to use)_:

* `/Engine/Functions`
* `/Engine/BasicShapes`
* `/Engine/ArtTools`
* `/Engine/EngineMaterials`

:::


## Troubleshooting

### Common Fixes

Most of the problems can be easily fixed by trying the following steps:

#### 1. Make sure you are not copying Project Assets instead of Cooked Assets

> Unreal Project files are not meant to work in runtime, they must be compiled/cooked to load in-game. The cooked assets usually have the extensions: `.uasset`, `.uexport` and `.ubulk`. [See more here](#exporting--cooking-your-assets).

#### 2. Make sure your [ADK is updated](adk-assets-development-kit.md#updating-to-a-newer-adk-version)

> Cooking your assets with old ADK can cause incompatibilities between the Game and your Assets.

#### 3. Delete `Saved/`, `Intermediate/` and `DerivedDataCache/` from your Project folder

> Sometimes it's good to try a full recook, as the Cooked assets can get corrupted by old Unreal versions.

#### 4. Create one Asset Pack for each cooked assets folder

> If you are trying to load a map and specified that in the Project Settings to *cook only that map*, probably it generated one or more folders inside your `Saved/Cooked/` folder. This means that **ALL** these folders and files are needed to make the map to load. So you **MUST** create one Asset Pack for each folder in there. (of course you shouldn't create an Asset Pack for the NanosWorld/ folder).

#### 5. If you use Git, make sure LFS was enabled

> If you use Git (with LFS) to upload your cooked assets and clone them in a VPS (*not a great solution*), make sure you also enabled [LFS](https://git-lfs.com/) in the VPS machine, so it clones the LFS assets locally correctly.


### Common Problems

Common problems when importing assets and possible solutions:

#### Assets without Materials/Textures

> If you loaded the assets in-game and they don't have material (they are gray). It can be two problems: you didn't set `unreal_folder` in your Assets.toml correctly, or you modified/moved/copied the files wrongly from the Cooked folder.

#### Corrupt data found, please verify your installation

> If you see this error as a Popup, please make sure to retry all steps listed [here](#troubleshooting).

#### Game Crash during/after loading a custom map or custom assets

> This usually happen because of corrupted or bad created assets, please make sure to retry all steps listed [here](#troubleshooting).

#### Disconnected. Failed to Load Map! Canceled or Failed!

> This error usually happens when it couldn't find your map to load. This can be because of badly configured [Assets.toml](/core-concepts/assets.mdx#assets-pack-configuration) `unreal_folder` setting or because you copied Unreal Project files instead of Cooked files into your Asset Pack.