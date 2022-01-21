---
description: How to create and export maps from Unreal to nanos world
tags: [assets]
---

# Map Script and Configuration

In nanos world, maps can have their own Package and a Data file associated to it. Those are automatically loaded when the server starts with a map.


## Folder Structure

To be able to add a Map Package, Custom Data and even a Image to your map, you must create the proper structure for it.

For that, create a folder with the same name as your map file (`.umap`) besides it:

![](/img/docs/map-package-01.jpg)

```text title="Map Folder"
Assets/
├── my-asset-pack-01/
│	├── MyMap/
│	│   ├── MyMap.umap
│	│   ├── MyMap/
│	│   │   ├── Client/
│	│   │   ├── Server/
│	│   │   ├── Shared/
│	│   │   ├── Map.toml
│	│   │   └── Map.jpg
└── my-asset-pack-02/
	└── ...
```


## Adding a Configuration File

Now maps can have it's own Configuration file `Map.toml`, this file contains a header with common configuration and a space for custom data.

```toml title="Map.toml"
# map configurations
[map]
    # compatible game-modes
    compatible_game_modes = [
        "sandbox",
        "deathmatch"
    ]

    # list of spawn points
    spawn_points = [
        { location = "Vector(100, 200, 100)", rotation = "Rotator(0, 90, 0)" },
        { location = "Vector(200, 300, 100)", rotation = "Rotator(0, 90, 0)" },
    ]

[custom_data]
    whatever = "anything"

```

This data can be get with `Server.GetMapCustomData()` and `Server.GetMapSpawnPoints()`.

:::tip

All nanos structs (Vectors, Rotators, Vector2D, etc) are automatically parsed from it's string representation into the proper Lua struct from `.toml` files.

:::


## Adding a Package

Inside this folder you can create all folders related to the Package: `Server/`, `Client/` and `Shared/` and create your scripts as usual. This will be loaded as a normal Package when your Map loads. Usually these scripts should have map specific spawn props/weapons and pertinent stuff.

:::note

If at least one of the loaded packages enable the setting `force_no_map_script` then this Package will not load.

:::

![](/img/docs/map-package-02.jpg)

:::tip

The Map Package will be loaded with the name `map-package`.

:::


## Adding a Map Image

You can add a `.jpg` image called `Map.jpg` inside the Map Folder. This image will be automatically loaded when browsing through New Game menu.


## Extra Tips

:::tip

As nanos world server is not aware of Unreal or it's Assets, we need to somehow say to the server where are the scriptable part of the map, such as Spawn Points, Props locations, Weapon locations and so on.

It is a recommended approach to implement all Props, Weapons and Vehicles spawn locations in your Map Package `[Map]/Server/Index.lua` and define all Player's Spawn points in the Configuration file `[Map]/Map.toml`.

:::