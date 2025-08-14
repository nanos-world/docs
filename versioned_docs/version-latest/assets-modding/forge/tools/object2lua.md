---
title: Object2Lua
description: nanos world Forge
tags: [assets, forge]
keywords: [SDK, ADK, assets, kit, unreal]
---

How to use the Object2Lua tool in nanos world Forge

**Object2Lua** is a tool in **nanos world Forge** that converts Unreal Engine blueprint assets into Lua tables.

## How to Use

1. Open **Object2Lua** from the Forge hub.
2. In the content browser, select a blueprint asset (e.g., data asset, blueprint class)
3. Click **Generate** to output the Lua code.

<VideoExternal path="/docs/assets-modding/forge-02.webm" />

## Settings

The tool includes several settings to customize the output:

![](/img/docs/forge-04.webp)

### Conversion Settings

| Setting | Description |
| :--- | :--- |
| **`Full Gameplay Tags`** | Includes the full gameplay tag hierarchy for `GameplayTags` |
| **`Only Exposed Properties`** | Only converts properties marked as `ExposedOnSpawn` |
| **`Only Changed Properties`** | Only converts properties that differ from their default values |

### Format Settings

| Setting | Description |
| :--- | :--- |
| **`Global Profile`** | The formatting profile to use. See [Lua Profile](/docs/assets-modding/forge/advanced/lua-profile.md) |
| **`Spaces Per Indent`** | Number of spaces used for code indentation |
| **`Pretty Print`** | Formats the output code with proper spacing and line breaks |
| **`Return Object`** | Includes a return statement for the generated Lua code |
| **`Use Shared Table`** | Merges separate tables into a single one |
| **`Shared Table Name`** | Custom name for the shared table |
| **`Smart Inline`** | Automatically inlines small arrays and tables |
| **`Max Items for Inline`** | Maximum number of items before collections are split across lines |
| **`Max Length for Inline`** | Maximum character length before forcing line breaks |

## Example Output

![](/img/docs/forge-06.webp)

```lua
local MyObject = {
    MyBoolean = true,
    MyByte = 255,
    MyInteger = 1234,
    MyFloat = 15.78,
    MyName = "None",
    MyString = "This is a string",
    MyVector = Vector(1, 2, 3),
    MyRotator = Rotator(2, 3, 1),
    MyTransform = {
        Location = Vector(1, 2, 3),
        Rotation = Rotator(2, 3, 1),
        Scale = Vector(1, 2, 3)
    }
}
```

## Data Assets

Object2Lua supports converting nested data assets. They should ideally be used if you want to create complex data structures.

### Creating a Primary Data Asset

A primary data asset represents the structure for a data asset. It contains all the properties you want to define for your data.

To create one, you first need to right click in the content browser, and select **Blueprint Class**:

![](/img/docs/forge-07.webp)

Then, select **Primary Data Asset** as the parent class:

![](/img/docs/forge-08.webp)

This class can be prefixed with `PDA_` to indicate it's a primary data asset, e.g., `PDA_MyItem` or `PDA_MyJob`.
You can then add variables to this class that represent the properties of your data asset, such as `name`, `description`, `icon`, etc.

### Creating a Data Asset

Once you have your primary data asset class, you can create actual data assets by right-clicking in the content browser and selecting **Data Asset** in **Miscellanous**:

![](/img/docs/forge-09.webp)

Choose your primary data asset class as the base:

![](/img/docs/forge-10.webp)

Now, you can finally fill in the properties of your data asset and convert it with Object2Lua!

### Example Data Asset Output

For this example, let's say we have a primary data asset called `PDA_Job` with properties like `name`, `description`, `salary` and `team`. Team would be a reference to another data asset.

When converted with Object2Lua, it looks like this:

```lua
local TeamPolice = {
    name = "Police Department",
    color = Color(0, 0, 1, 1),
    spawn_points = { Vector(100, 200, 0), Vector(120, 210, 0) }
}

local JobPolice = {
    name = "Police Officer",
    description = "Maintains law and order in the city",
    team = TeamPolice
}
```