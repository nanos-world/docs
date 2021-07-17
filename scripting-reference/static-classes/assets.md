---
description: Retrieve Assets from Asset Packs
---

# Assets

{% hint style="success" %}
This is a Static Class named `Assets`. You can access it’s methods directly with `.`. It is not possible to initialize or create new instances.
{% endhint %}

## Static Functions

| Returns | Name | Description |
| :--- | :--- | :--- |
| [table](../glossary/basic-types.md#table) | [**`GetAssetPacks`**](assets.md#getassetpacks) | Returns an array of tables containing information about all loaded Asset Packs |
| [table](../glossary/basic-types.md#table) | [**`GetAnimations`**](assets.md#getanimations) | Returns an array of strings containing all Animation Assets Keys from an AssetPack |
| [table](../glossary/basic-types.md#table) | [**`GetMaps`**](assets.md#getmaps) | Returns an array of strings containing all Map Asset Keys from an AssetPack |
| [table](../glossary/basic-types.md#table) | [**`GetParticles`**](assets.md#getparticles) | Returns an array of strings containing all Particle Assets Keys from an AssetPack |
| [table](../glossary/basic-types.md#table) | [**`GetSounds`**](assets.md#GetSounds) | Returns an array of strings containing all Sound Assets Keys from an AssetPack |
| [table](../glossary/basic-types.md#table) | [**`GetSkeletalMeshes`**](assets.md#GetSkeletalMeshes) | Returns an array of strings containing all Skeletal Mesh Asset Keys from an AssetPack |
| [table](../glossary/basic-types.md#table) | [**`GetStaticMeshes`**](assets.md#GetStaticMeshes) | Returns an array of strings containing all Static Mesh Assets Keys from an AssetPack |
| [table](../glossary/basic-types.md#table) | [**`GetOthers`**](assets.md#GetOthers) | Returns an array of strings containing all Other Assets Keys from an AssetPack |

### `GetAssetPacks`

> Returns an array of tables containing information about all loaded Asset Packs
>
> Returned table format `[{Name, Path, Author, Version}, ...]`

```lua
Assets.GetAssetPacks()
```

### `GetAnimations`

> Returns an array of strings containing all Animation Assets Keys from an AssetPack

```lua
Assets.GetAnimations(asset_pack_path)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`asset_pack_path`** | The Asset Pack path to get the assets |

### `GetMaps`

> Returns an array of strings containing all Map Asset Keys from an AssetPack

```lua
Assets.GetMaps(asset_pack_path)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`asset_pack_path`** | The Asset Pack path to get the assets |

### `GetParticles`

> Returns an array of strings containing all Particle Assets Keys from an AssetPack

```lua
Assets.GetParticles(asset_pack_path)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`asset_pack_path`** | The Asset Pack path to get the assets |

### `GetSounds`

> Returns an array of strings containing all Sound Assets Keys from an AssetPack

```lua
Assets.GetSounds(asset_pack_path)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`asset_pack_path`** | The Asset Pack path to get the assets |

### `GetSkeletalMeshes`

> Returns an array of strings containing all Skeletal Mesh Asset Keys from an AssetPack

```lua
Assets.GetSkeletalMeshes(asset_pack_path)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`asset_pack_path`** | The Asset Pack path to get the assets |

### `GetStaticMeshes`

> Returns an array of strings containing all Static Mesh Assets Keys from an AssetPack

```lua
Assets.GetStaticMeshes(asset_pack_path)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`asset_pack_path`** | The Asset Pack path to get the assets |

### `GetOthers`

> Returns an array of strings containing all Other Assets Keys from an AssetPack

```lua
Assets.GetOthers(asset_pack_path)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`asset_pack_path`** | The Asset Pack path to get the assets |

