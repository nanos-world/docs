---
description: All you need to know about Assets
tags: [assets]
---

# Assets

All you need to know about Assets

**Assets** in nanos world are all objects or content which come from Unreal Engine, i.e. _Maps_, _StaticMeshes_, _SkeletalMeshes_, _Sounds_, _Particles_, etc are all **Assets**.

In order to use custom Assets in your servers, you must have or create an **Asset Pack**. Asset Packs are a set of Assets that were exported together from Unreal.

## Folder Structure

All Asset Packs go under `Server/Assets/` folder. Each Asset Pack is a folder under that.

:::info

**Note:** Asset Packs downloaded when connecting to servers will be stored in `Server/Assets/` folder as well!

:::

```text title="Server Folder"
NanosWorldServer.exe
Packages/
├── my-asset-pack-01/
│   ├── MyAsset_01.uasset
│   ├── MyAsset_02.uasset
│   ├── MyBigMap.umap
│   │    ...
│   └── Assets.toml
├── awesome-weapons/
│   ├── BigFuckingGun.uasset
│   │   ...
│   └── Assets.toml
Assets/
Config.toml
```

## Assets Pack Configuration

Asset Packs have a configuration file in the root of the Asset Pack folder, called `Assets.toml`, in this file we can setup all pertinent settings related to the Asset Pack:

```toml reference
https://github.com/nanos-world/nanos-world-server/blob/main/Assets.toml
```


### Settings Detailed

| Setting | Description |
| :--- | :--- |
| **`name`** | Friendly name of the Asset Pack |
| **`author`** | Author\(s\) of the Asset Pack |
| **`version`** | Version of the Asset Pack - please refer to [SemVer](https://semver.org/) |
| **`image`** | Image URL to be displayed in the Vault |
| **`unreal_folder`** | Name of the root folder in the Unreal Project which exported this Assets. This is important so the Assets can keep the relative references correct. |
| **`assets.maps`** | List of Maps in this Asset Pack |
| **`assets.static_meshes`** | List of Static Meshes in this Asset Pack |
| **`assets.skeletal_meshes`** | List of Skeletal Meshes in this Asset Pack |
| **`assets.sounds`** | List of Sounds in this Asset Pack |
| **`assets.animations`** | List of Animations in this Asset Pack |
| **`assets.particles`** | List of Particles in this Asset Pack |
| **`assets.materials`** | List of Materials in this Asset Pack |
| **`assets.others`** | List of other Assets in this Asset Pack |


## Referencing Assets in Scripting

To be able to use Assets through scripting, you will first have to ensure that the Asset Pack is loaded, an Asset Pack is loaded if:

1. Set the Map to be loaded (this will make it's Asset Pack to be loaded automatically)
2. Manually set in `Server.toml` the `assets` to load
3. Manually set in any loaded package, in `Package.toml` the `asset_requirements`

With that, you can refer to it's assets using the following pattern: 

`"ASSET_PACK_PATH::ASSET_KEY"`

Example:

`"my-asset-pack-01::SM_Cube"`

:::tip

`ASSET_PACK_PATH` is the Asset Pack folder name and `ASSET_KEY` is the key defined in the `Assets.toml`.

:::


## Types of Assets

| Type | Description |
| :--- | :--- |
| **Map** | An Unreal Engine Map/Level |
| **Static Mesh** | Unreal Static Meshes can be used to load meshes for Props and StaticMeshes |
| **Skeletal Mesh** | Unreal Skeletal Meshes can be used to load meshes for Characters and Vehicles |
| **Sound** | Unreal Sounds to load Sounds |
| **Particle** | Unreal Particles can be used for settings in several entities, including Particle Class itself |
| **Animation** | Unreal Animations can be used for settings in Character and Weapons |
| **Material** | Unreal Materials can be used for customizing meshes surfaces and used as Post Process |

:::info Note

Some methods require some specific Type of Assets to load, attempting to load an invalid or wrong type will cause an Error. E.g.: `Character:SetMesh()` requires an Asset of type `Skeletal Mesh`.

:::


## nanos world Default Asset Pack

nanos world provides a default  Asset Pack which is already included in the base game. Please refer to [nanos world Default Asset Pack](./assets-modding/default-asset-pack/default-asset-pack.md) for more information.

