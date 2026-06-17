---
title: Lua Profile
description: nanos world Forge
tags: [assets, forge]
keywords: [SDK, ADK, assets, kit, unreal]
---

How to create Lua Profiles in nanos world Forge

:::info
Lua Profiles are still experimental and may change in future updates. They also might not work as expected with Placeholders for now.
:::

**Lua Profiles** allow you to define how to format Lua code converted by nanos world Forge. You can customize how structs and objects are exported, whether as tables or constructors, and map properties to specific functions.

## Creating Lua Profiles

To create a Lua Profile, you need to create a **Data Asset** from the available profile types:

![](/img/docs/forge-09.webp)
![](/img/docs/forge-27.webp)

## Profile Types

### Lua Struct Format Profile

![](/img/docs/forge-28.webp)
![](/img/docs/forge-29.webp)

| Setting | Description |
| :--- | :--- |
| **`Target Struct`** | The UE struct type to format (e.g., FVector, FRotator) |
| **`Format Mode`** | How to format the struct in Lua (Constructor or Table) |
| **`Constructor Name`** | The Lua function to call for creating the struct |
| **`Constructor Arguments`** | Which properties to use as constructor parameters |
| **`Table Fields`** | Which properties to include in the Lua table format |

#### Example Struct Profile (Vector as Constructor)

![](/img/docs/forge-30.webp)

This exports vectors as:

```lua
Vector(100.0, 200.0, 50.0)
```

#### Example Struct Profile (Transform as Table)

![](/img/docs/forge-31.webp)

This exports transforms as:

```lua
{
    Location = Vector(100.0, 200.0, 50.0),
    Rotation = Rotator(0.0, 90.0, 0.0),
    Scale = Vector(1.0, 1.0, 1.0)
}
```

### Lua Object Format Profile

![](/img/docs/forge-32.webp)

| Setting | Description |
| :--- | :--- |
| **`Target Class`** | The Unreal Engine object class type to format |
| **`Constructor Name`** | The Lua function to call for creating the object |
| **`Constructor Arguments`** | Which properties to use as constructor parameters |
| **`Property to Function Map`** | Maps properties to specific Lua functions for formatting |

#### Example Object Profile (Prop Placeholder)

![](/img/docs/forge-33.webp)

This would export a prop placeholder as:

```lua
Prop(Vector(340, 720, 0), Rotator(0, 0, 0), "my-asset-pack::Cube")
```

## Built-in Struct Profiles

nanos world Forge comes with several built-in struct profiles that format common Unreal structs as nanos world Lua types or easy-to-use Lua tables:

| Profile | Description |
| :--- | :--- |
| **`LinearColorProfile`** | Formats FLinearColor as `Color(r, g, b, a)` |
| **`RotatorProfile`** | Formats FRotator as `Rotator(pitch, yaw, roll)` |
| **`Vector2Profile`** | Formats FVector2D as `Vector2D(x, y)` |
| **`VectorProfile`** | Formats FVector as `Vector(x, y, z)` |
| **`TransformProfile`** | Formats FTransform as table with `Location`, `Rotation`, `Scale` |

## Lua Global Profile

After creating your struct and object profiles, create a **Lua Global Profile Data Asset** to combine them.

By default, it will include all built-in profiles. You can add your custom profiles to the **Struct Profiles** and **Object Profiles** arrays.

![](/img/docs/forge-34.webp)

## Using Profiles in Tools

You can use your custom profiles in tools like the **Object2Lua** tool and the **Placeholder Exporter**.

You just need to select your Lua Global Profile in the format settings:

![](/img/docs/forge-35.webp)