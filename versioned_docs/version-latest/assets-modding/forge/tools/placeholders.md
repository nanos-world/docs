---
title: Placeholders
description: nanos world Forge
tags: [assets, forge]
keywords: [SDK, ADK, assets, kit, unreal]
---

How to use Placeholders in nanos world Forge

**Placeholders** let you place actors in your map that can be exported to Lua code, making it easy to define spawn points, doors, or any other entities you want to include in your scripts.

Unlike the placeholders in the [ADK](/docs/assets-modding/creating-assets/adk-assets-development-kit.md), Forge placeholders are not limited to hardcoded classes. You can create your own placeholder actors with custom properties and export them to Lua code.

## Creating Placeholders

### Placeholder Component
To create a placeholder, you need to add a **Placeholder Component** to an actor. This component lets you define the properties that will be exported when you use the placeholder exporter tool.

### Field Bindings
Forge placeholders use **Field Bindings** to specify how to get data from the actor. You can bind fields to properties or functions of the actor, or even to other components.

![](/img/docs/forge-11.webp)

### Placeholder Component Properties

![](/img/docs/forge-12.webp)

| Property | Description |
| :--- | :--- |
| **Group Name** | The category name used in exported code (e.g., "Props", "Doors", "PlayerStarts") |
| **Fields** | List of field definitions that specify what data to export and how to get it |

## Using the Placeholder Exporter

The placeholder exporter tool is simple to use. Once you have placed your placeholders in the map, you can use the tool to generate Lua code that represents the placeholders:

![](/img/docs/forge-13.webp)

## Example Prop Placeholder

For this example, we will create a custom placeholder that represents a [nanos world Prop](/docs/scripting-reference/classes/prop.mdx) entity.

First, create a new actor that inherits from `AStaticMeshActor`, which is a base class for actors that have a static mesh component. This will let us see the prop in the editor.

![](/img/docs/forge-14.webp)
![](/img/docs/forge-15.webp)

Name it `BP_PropPlaceholder` and add a **Placeholder Component** to it:

![](/img/docs/forge-16.webp)

In the Placeholder Component, set up the following:

![](/img/docs/forge-17.webp)

You can place multiple instances of your `BP_PropPlaceholder` actor in the map and change their static meshes.

Now use the **Placeholder Exporter** tool to export the placeholders to Lua code:

```lua
local Placeholders = {
    Props = {
        {
            location = Vector(340, 720, 0),
            rotation = Rotator(0, 0, 0),
            static_mesh = "my-asset-pack::Cube"
        },
        {
            location = Vector(950, 720, 0),
            rotation = Rotator(0, 0, 0),
            static_mesh = "my-asset-pack::Cube"
        },
        {
            location = Vector(-150, 720, 0),
            rotation = Rotator(0, 0, 0),
            static_mesh = "my-asset-pack::Cube"
        }
    }
}
```

And that's it! You now have a custom placeholder that can be used to place props in your map and export them to Lua code for use in your scripts.

## Built-in Placeholders

![](/img/docs/forge-18.webp)

### PlaceholderPlayerStart
The `PlaceholderPlayerStart` is a built-in placeholder that represents a player spawn point. It exports the location and rotation of the player start.