---
description: Learn how to Create and Import custom Assets into nanos world
sidebar_position: 1
tags: [assets]
---

# Importing Custom Assets

Currently all our workflow for exporting content is through Unreal Engine as the Assets need to be Cooked and Packaged in the correct way before being accessible by the game. This page will give an overview and will have fundamental information which can be accessed at any time during the Assets creation.

:::caution

Please before continuing, make sure you read [Assets](/docs/core-concepts/assets) article!

:::

## Installing Unreal Engine 4

The first step for creating your own Assets, is downloading and installing Unreal Engine.

:::tip

Little by little we are able to allow loading some assets without the need of cooking them in Unreal, such as **Textures** and soon™ **Sounds**.

:::

#### 1. Download and Install [Epic Games Launcher](https://www.unrealengine.com/en-US/download/ue_non_games) 

Follow the steps for agreeing to Unreal Engine terms

#### 2. Install Unreal Engine from inside Epic Games Launcher

Unreal Engine version which nanos world is: **`4.26.2`**

1. Access **Unreal Engine** Tab
2. Open **Library**
3. Press **`+`** and select the correct **Unreal Engine** version
4. Before Installing it, select **Options** in the dropdown menu and deselect all items \(or at least all from **Target Platforms**\) which are unecessary

![Selecting Options in the Dropdown](/img/docs/importing-assets-01.jpg)

![Deselecting all options](/img/docs/importing-assets-02.jpg)

:::info

Please refer to [Unreal Official Documentation](https://docs.unrealengine.com/en-US/GettingStarted) for more information and tutorials. For the sake of this articles we are not covering too much details on Unreal’s peculiarities.

:::

## Guidelines for exporting Assets from Unreal

1. Always create a **Root Folder** with the name of your pack \(e.g. `/Content/My_Weapon_Pack/`\) and put all content you use inside that \(you can create sub-folders as well\)
2. Do not use **Engine Content** \(i.e. Engine’s Materials or Meshes\). If you want to use them, we recommend copying them to your Content/Your\_Pack folder, otherwise they may not be exported correctly

:::tip

There are some **Engine Content** which is allowed to use, but only from the following folders _\(these are already included by the base game and are safe to use\)_:

* `/Engine/Functions`
* `/Engine/BasicShapes`
* `/Engine/ArtTools`
* `/Engine/EngineMaterials`

:::

## Additional Tips

1. Use a proper name pattern for your Assets
2. Use small assets size and configure textures compression properly \(big files are bad for network bandwidth\). We recommend max 2048x2048 size for textures, as they will be 5MB each

### Recommended Asset Naming Conventions

We hardly recommend and encourage you to follow [Allar’s Asset Naming Conventions](https://github.com/Allar/ue4-style-guide#1-asset-naming-conventions-). We’ve summarized the most common ones here:

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
| Texture | `T_` | `_?` \(see [Textures](https://github.com/Allar/ue4-style-guide#anc-textures)\) |

## Exporting & Cooking your Assets

After you created your Assets, exporting them from Unreal Engine is pretty much like packaging a game.

For that, select **File ➡ Package Content ➡ Windows \(64-bit\)** and select a folder to save.

![](/img/docs/importing-assets-03.jpg)

This will start the Cooking & Packing process, which may take a while depending if the Assets were already loaded. It usually is only longer at the first time.

![](/img/docs/importing-assets-04.jpg)

After finishing, you may end up with a folder like that:

![](/img/docs/importing-assets-05.jpg)

:::info

Notice that you get an `*.exe` which is actually the "Game" you just created! But we won't use this, instead we want only the Assets it generated.

:::

After packaging your project, we will manually copy the exported folder from it, the one we are looking for probably will be located at a `Content/` inside the main folder beside the `Engine/` \(this folder name may vary if you are using the [ADK](docs/assets-modding/creating-assets/adk-assets-development-kit) or not\).

Inside the `Content/` you will be able to locate the folder you created \(`MyAssetPack/`\). This is the folder we will copy which will become our [Asset Pack](docs/core-concepts/assets).

:::tip

Now just copy it to your `Server/Assets/` , create and configure your `Assets.toml` and you are done!

:::

### Considerations after Exporting

:::caution

Remember to configure in your `Assets.toml` the Unreal folder name \(the folder name which you just copied\) in  `unreal_folder` setting! After that, you are allowed to rename the Asset Pack folder!

:::

:::danger

Never rename or delete any file/folder inside your Asset Pack final folder! It will break all internal references used by your assets.

:::

