---
description: How to export and use Static Meshes from Unreal Engine
---

# Static Meshes

A Static Mesh is the most straightforward asset to be imported and used in nanos world, as they don’t have skeleton, their usage is very seamless. In nanos world Static Meshes are mainly used for [Props](../../scripting-reference/classes/prop.md), [StaticMesh Classes](../../scripting-reference/classes/static-mesh.md) or for attachments on [Characters](../../scripting-reference/classes/character.md) and/or Weapons.

{% hint style="warning" %}
Please do not confuse [Unreal's Static Mesh](../../core-concepts/assets.md#types-of-assets) with nanos world [StaticMesh Class](../../scripting-reference/classes/static-mesh.md)!
{% endhint %}

{% hint style="info" %}
Please refer to [Unreal's Static Mesh](../../core-concepts/assets.md#types-of-assets) official definition and usage, also for information on how to import a .FBX into Unreal, how to optimize it and so on. There are also thousands of tutorials regarding importing a .FBX from Blender \(or other Modeling tool\) into Unreal Engine.
{% endhint %}

## Creating and Exporting a Static Mesh

{% hint style="warning" %}
Attention! This page is old and this tutorial may be outdated! Please refer to [ADK](adk-assets-development-kit.md) for a modern approach.
{% endhint %}

{% hint style="warning" %}
Please before continuing, make sure you have and are using the [ADK - Assets Development Kit](adk-assets-development-kit.md).
{% endhint %}

It is very simple to create and export Static Meshes, let's create simple Cube imported from a .fbx \(Static Mesh\) and a Material \(applied to the cube\) for our Assets. We’ve also created and placed them in a folder called MyPack which will help us afterwards.

![Cube Static Mesh and Material applied to the Cube](../../.gitbook/assets/image%20%2838%29.png)

![Double click on the Cube to open the Static Mesh overview](../../.gitbook/assets/image%20%2817%29.png)

For exporting them in a recognizable way by nanos world, you need to “Package the Project” \(i.e. cooking and packaging it\), for that just select the following option and select any folder in your computer and wait it finishes, it may take some minutes:

![](../../.gitbook/assets/image%20%2824%29%20%281%29%20%281%29.png)

![](../../.gitbook/assets/image%20%2839%29%20%281%29%20%281%29.png)

After finishing, you will get a folder like that:

![](../../.gitbook/assets/image%20%2827%29.png)

## Importing and Using Assets in your Server

After packaging your project, we will manually copy the exported folder from it, the one we are looking for probably will be located at `assets-development-kit/Content/`. As we created a folder called `MyPack`, our exported assets will be at `assets-development-kit/Content/MyPack/`:

![](../../.gitbook/assets/image%20%2816%29.png)

And thats it! You must now just copy `MyPack/` folder inside your Server’s `Assets/` folder and create a configuration file called `Assets.toml` in `MyPack/` folder with the pattern described in [Assets Pack Configuration File](../../core-concepts/assets.md#assets-pack-configuration). For each Asset you have in your Pack, you must add an entry in the configuration file.

For our Cube mesh, we just need to add an entry with the Path of the cube relative to our Assets folder in the pattern `[ASSET_NAME] = "[ASSET_PATH]"`:

{% code title="Assets.toml" %}
```text
# Static Meshes
[assets.static_meshes]
SM_Cube = "SM_Cube"
```
{% endcode %}

Then it is possible to spawn our Cube like:

{% tabs %}
{% tab title="Lua" %}
{% code title="Server/Index.lua" %}
```lua
Prop(Vector(0, 0, 0), Rotator(0, 0, 0), "MyPack::SM_Cube")
```
{% endcode %}
{% endtab %}
{% endtabs %}

![](../../.gitbook/assets/image%20%2835%29.png)

