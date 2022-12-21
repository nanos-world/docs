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

![ADK Folders](/img/docs/adk-folders.jpg)

As stated before, do not modify any file inside `NanosWorld/` as any change will not be exported neither imported into nanos world.


## Organizing your Asset Pack

Then, you can delete or rename `MyAssetPack`/ to anything you want to be your Asset Pack. All assets you create or import must be contained inside this folder. Feel free to create sub-folders and organize the way you want. But all files must be inside the root `Content/MyAssetPack/` folder!


## Importing external Assets

You can drag'n drop any file from your computer inside that folder, e.g. FBX meshes or WAV sounds.

The next pages of the docs will have examples on how to import specific assets (Skeletal Meshes, Maps, etc). You can check them and then back here to finish the exportation.


## Exporting & Cooking your Assets

After you created your Assets, exporting them from Unreal Engine is very easy.

For that, select **Platforms ⬇️ Windows/Linux ➡ Cook Content**:

![](/img/docs/importing-assets-03.jpg)

This will start the Cooking & Packing process, which may take a while depending if the Assets were already loaded. It usually is only longer at the first time.

![](/img/docs/importing-assets-04.jpg)

After finishing, go for the Cooked folder of your ADK project:

`assets-development-kit/Saved/Cooked/Windows/NanosWorldADK/Content/MyAssetPack/`

You may end up with a folder like that, with all your assets in the cooked version:

![](/img/docs/importing-assets-05.jpg)

:::caution

Please don't confuse the Cooked assets folder with the ADK project files. Make sure you are in the `Saved/Cooked/` one!

:::

After cooking your assets, we will manually copy the cooked folder from it, the one we are looking for is the one you added your assets (`MyAssetPack/` in our case). This folder will become our [Asset Pack](/core-concepts/assets.mdx).

Now just copy it into your `Server/Assets/` and create a `Assets.toml` in the root. Please refer to [Assets Pack Configuration](/core-concepts/assets.mdx#assets-pack-configuration) which you can copy and paste a new version of the file.

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

Open the Asset.toml in a text editor and make sure you configured `unreal_folder` and `unreal_version` to the correct values.

```toml
# unreal engine configurations
[unreal]
    # unreal engine folder - the name of the root folder (the one inside UnrealProject/Content/) which the assets will have references to each other
    unreal_folder =     "MyAssetPack"
    # unreal engine version - unreal version this asset pack was compiled on
    unreal_version =    "5.1.0"
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

```lua title="Server/Index.lua"
Prop(Vector(0, 0, 0), Rotator(0, 0, 0), "my-asset-pack::SM_Cube")
```

:::tip

You can use the [ADK Assets.toml Generator Tool](adk-assets-development-kit.md##assetstoml-generator) to generate your Assets.toml automatically!

:::


## Final Considerations

:::caution

After cooking and copying your folder, **do not** rename or delete any file/folder inside your Asset Pack folder! It will break all internal references used by your assets.

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