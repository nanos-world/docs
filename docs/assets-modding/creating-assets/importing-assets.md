---
title: Importing Custom Assets
description: Learn how to Create and Import custom Assets into nanos world
sidebar_position: 1
tags: [assets]
keywords: [assets, ADK, import, unreal]
---


Currently all our workflow for exporting content is through Unreal Engine as the Assets need to be Cooked and Packaged in the correct way before being accessible by the game. This page will give an overview and will have fundamental information which can be accessed at any time during the Assets creation.

:::caution

Please before continuing, make sure you read [Assets](/core-concepts/assets.md) article!

:::


## Installing Unreal Engine 5

The first step for creating your own Assets, is downloading and installing Unreal Engine.

:::tip

Little by little we are able to allow loading some assets without the need of cooking them in Unreal, such as **Textures** and soon™ **Sounds**.

:::


#### 1. Download and Install [Epic Games Launcher](https://store.epicgames.com/download) 

Follow the steps for agreeing to Unreal Engine terms


#### 2. Install Unreal Engine from inside Epic Games Launcher

Unreal Engine version which nanos world is: **`5.0`**

1. Access **Unreal Engine** Tab
2. Open **Library**
3. Press **`+`** and select the correct **Unreal Engine** version
4. Before Installing it, select **Options** in the dropdown menu and deselect all items \(or at least all from **Target Platforms**\) which are unecessary

![Selecting Options in the Dropdown](/img/docs/importing-assets-01.jpg)

![Deselecting all options](/img/docs/importing-assets-02.jpg)

:::info

Please refer to [Unreal Official Documentation](https://docs.unrealengine.com/en-US/GettingStarted) for more information and tutorials. For the sake of this articles we are not covering too much details on Unreal's peculiarities.

:::


## Guidelines for exporting Assets from Unreal

1. Always create a **Root Folder** (e.g. `/Content/MyWeaponPack/`) and put all content you use inside that (you can create sub-folders as well)
2. Avoid using **Engine Content** (i.e. Engine's Materials or Meshes). If you want to use them, we recommend copying them to your Content/YourPack folder, otherwise they may not be exported correctly

:::tip

There are some **Engine Content** which is allowed to use, but only from the following folders _(these are already included by the base game and are safe to use)_:

* `/Engine/Functions`
* `/Engine/BasicShapes`
* `/Engine/ArtTools`
* `/Engine/EngineMaterials`

:::


## Additional Tips

1. Use a proper name pattern for your Assets
2. Use small assets size and configure textures compression properly (big files are bad for network bandwidth). We recommend max 2048x2048 size for textures, as they will be 5MB each


### Recommended Asset Naming Conventions

We hardly recommend and encourage you to follow [Allar's Asset Naming Conventions](https://github.com/Allar/ue4-style-guide#1-asset-naming-conventions-). We've summarized the most common ones here:

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


### Assets Thumbnails

It is a good practice to include thumbnails of your assets into a folder called `Thumbnails/` in the root of your Asset Pack. This is a convention as the **Sandbox** game-mode reads from it to display on Spawn Menu. Add `.jpg` with the name of the assets all in the Thumbnails folder.


## Exporting & Cooking your Assets

After you created your Assets, exporting them from Unreal Engine is very easy.

For that, select **Platforms ⬇️ Windows ➡ Cook Content**:

![](/img/docs/importing-assets-03.jpg)

This will start the Cooking & Packing process, which may take a while depending if the Assets were already loaded. It usually is only longer at the first time.

![](/img/docs/importing-assets-04.jpg)

After finishing, go for the Cooked folder of your ADK project:

`assets-development-kit/Saved/Cooked/Windows/NanosWorldADK/Content/MyAssetPack/`

You may end up with a folder like that:

![](/img/docs/importing-assets-05.jpg)

After cooking your assets, we will manually copy the cooked folder from it, the one we are looking for is the one you added your assets (MyAssetPack in our case). This is the folder we will copy which will become our [Asset Pack](/docs/core-concepts/assets).

Now just copy it to your `Server/Assets/`, create and configure your `Assets.toml` and you are done!


### Considerations after Exporting

:::caution

It is very important to [Configure your Assets.toml](/docs/core-concepts/assets#assets-pack-configuration) properly as it has fundamental settings which are mandatory to the Asset Pack to work and also to be able to reference your assets through scripting.

After that, you are allowed to rename the Asset Pack folder! A standard to rename the Asset Pack folder is in `kebab-case` format. You will get a warning if not.

:::


:::danger

Never rename or delete any file/folder inside your Asset Pack final folder! It will break all internal references used by your assets.

:::

