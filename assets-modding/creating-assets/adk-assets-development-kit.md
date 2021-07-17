---
description: nanos world Assets Development Kit - ADK
---

# Assets Development Kit

nanos world provides a fully configurable and ready **Unreal Project** called Assets Development Kit \(ADK\) to help you integrating and exporting Assets and Maps much faster. This project contains **Placeholders**, **Tools** and **Correct References** that must be used in order to create **Characters** and make proper **Physical Materials**, for example.

{% hint style="warning" %}
**Note:** To be able to use the **ADK**, you will need to have [Unreal Engine](./#installing-unreal-engine-4) installed.
{% endhint %}

## Downloading nanos world Assets Development Kit - ADK

Our ADK is uploaded in [GitHub](https://github.com/nanos-world/assets-development-kit/releases/latest), please download it latest version and extract it in your computer.

## Opening the Assets Development Kit Project

You will find a file `NanosWorldADK.uproject` in there, just open it with Unreal Engine and you are set!

You will notice we two folders in the root directory: `NanosWorld/` and `MyAssetPack/`.

{% hint style="info" %}
**Tip:** You can rename `MyAssetPack` to anything you want to be your Asset Pack. Or you can delete it, but note that deleting this folder through Unreal may not work. If you want to delete it, please do it through Windows Explorer.
{% endhint %}

{% hint style="danger" %}
Please do not **MODIFY**, **DELETE**, **CREATE** or **COPY** any file inside `NanosWorld/` folder, otherwise the ADK will not work properly. Also make sure you DO NOT modify them unintentionally! If asked to save any modified file in there, cancel it! All references must use `NanosWorld/` where they are.

`NanosWorld/` folder has some Assets which you can use to reference **your** assets and make the export keep the correct references when using them in-game.
{% endhint %}

## Tools available in the ADK project

* [Placeholder Blueprints `NanosWorld/Blueprints/Placeholders/`](adk-assets-development-kit.md#placeholder-blueprints-nanosworld-blueprints-placeholders)\`\`
* [Lua Code Generator `NanosWorld/Blueprints/Utility/WBP_LuaCodeGenerator`](adk-assets-development-kit.md#lua-code-generator-nanosworld-blueprints-utility-wbp_luacodegenerator)\`\`
* [Assets.toml Generator `NanosWorld/Blueprints/Utility/WBP_AssetsTomlGenerator`](adk-assets-development-kit.md#assets-toml-generator-nanosworld-blueprints-utility-wbp_assetstomlgenerator)\`\`
* [Sun & Sky Actor `NanosWorld/Blueprints/World/BP_SunSky`](adk-assets-development-kit.md#sun-and-sky-actor-nanosworld-blueprints-world-bp_sunsky)\`\`
* [Physical Materials `NanosWorld/MaterialLibrary/PhysicalMaterials/`](adk-assets-development-kit.md#physical-materials-nanosworld-materiallibrary-physicalmaterials)\`\`
* [Mannequin Skeleton `NanosWorld/Characters/Common/SKEL_Mannequin`](adk-assets-development-kit.md#mannequin-skeleton-nanosworld-characters-common-skel_mannequin)\`\`
* [Thumbnail Generator `NanosWorld/Blueprints/Utility/ThumbnailGenerator`](adk-assets-development-kit.md#thumbnail-generator-nanosworld-blueprints-utility-thumbnailgenerator)\`\`

### Placeholder Blueprints `NanosWorld/Blueprints/Placeholders/`

![Placeholder Blueprints overview](../../.gitbook/assets/image%20%2819%29.png)

You can use the **Placeholder Blueprints** to set Spawn Positions of **Vehicles**, **Weapons**, **Characters** and **Props**. This works only to help you generating a Lua code with spawn positions after all. These Blueprints aren’t cooked with the map. Use the [Lua Code Generator](adk-assets-development-kit.md#lua-code-generator-nanosworld-blueprints-utility-wbp_luacodegenerator) to generate the Lua script with all spawn locations.

### Lua Code Generator `NanosWorld/Blueprints/Utility/WBP_LuaCodeGenerator`

![Lua Code Generator Widget](../../.gitbook/assets/image%20%2837%29.png)

**Lua Code Generator** is an **Editor Utility Widget** which scans the map which is currently loaded in your Unreal and generate a list of spawn code with exact Location and Rotation for every [Placeholder Blueprint ](adk-assets-development-kit.md#placeholder-blueprints-nanosworld-blueprints-placeholders)you had spawned.

To open it, right click on it and press **Run Editor Utility Widget**:

![](../../.gitbook/assets/image%20%2829%29.png)

### Assets.toml Generator `NanosWorld/Blueprints/Utility/WBP_AssetsTomlGenerator`

![](../../.gitbook/assets/image%20%2820%29.png)

This is an **Editor Utility Widget** which scans a folder \(determined by the TextBox\) and generates the configuration for an Assets.toml with all Assets in the folder \(which can be used in nanos world\).

### Sun & Sky Actor `NanosWorld/Blueprints/World/BP_SunSky`

This is a pre-configured **Sun & Sky Blueprint** which can be used and easily replaced by nanos world Official Sun with `World,SpawnDefaultSun()`. This is useful to get an approximate result of how the light will look like in-game if you decide to Spawn the Default Sun.

{% hint style="info" %}
**Note:** Overriding the Sun through Scripting with `World.SpawnDefaultSun()`, will respawn the Sun actor, which means no configuration did on the Sun & Sky actor will persist

Example: Light Intensity, Color, Post Process and other configuration will be lost.
{% endhint %}

### Physical Materials `NanosWorld/MaterialLibrary/PhysicalMaterials/`

![](../../.gitbook/assets/image%20%2843%29.png)

If you are creating a **Material**, you can \(and should\) use these **Physical Materials** do integrate better with nanos world. Using these Physical Materials will allow nanos world recognize which type of surface your Prop/Object is, giving it the proper auto-generated Hit or Footstep sound.

{% hint style="danger" %}
DO NOT **modify** or **rename** any Physical Materials, only use by referencing them in your Materials.
{% endhint %}

### Mannequin Skeleton `NanosWorld/Characters/Common/SKEL_Mannequin`

To be able to create Skeletal \(Character\) Meshes which work with our [Character ](../../scripting-reference/classes/character.md)class, you must set your Skeletal Mesh to use our **Mannequin Skeleton**. This Skeleton is the same as Unreal Engine 4 default Mannequin, so any Skeletal Mesh which uses UE4’s Mannequin Skeleton will work for us!

To change a Skeletal Mesh’s Skeleton: right click on it &gt;&gt; Skeleton &gt;&gt; Assign Skeleton and change it to our `SKEL_Mannequin`.

![](../../.gitbook/assets/image%20%2830%29.png)

### Thumbnail Generator `NanosWorld/Blueprints/Utility/ThumbnailGenerator`

We’ve shipped a **Thumbnail Generator** tool to help you generating `.jpg` images of your assets. To use that, just open **ThumbnailGenerator** level and hit Play. Then you will be able to define a folder for search the assets \(currently only Static and Skeletal Meshes are supported\) and a folder to save the images \(.jpg\). You can optionally keep the directory hierarchy in the output folder or save all images in the same folder. Once you hit **Generate**, it will start loading all assets and taking a photo from them.

{% hint style="info" %}
**Note:** this may be a slow process depending if your assets were already compiled previously.

It is also recommended to generate the Thumbnails twice, so you grant they will be saved in the max quality possible.
{% endhint %}

![](../../.gitbook/assets/image%20%2836%29%20%281%29%20%281%29.png)

