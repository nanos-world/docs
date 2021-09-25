---
description: How to use the new Material customization methods available to use
tags: [tutorial-example, scripting, assets]
---

# Painting Meshes

How to use the new Material customization methods available to use.

![](/img/docs/tutorials/painting-meshes-01.jpg)

In Unreal Engine, a [Material](https://docs.unrealengine.com/en-US/RenderingAndGraphics/Materials/index.html) is an asset that can be applied to a mesh to control the visual look of the scene. At a high level, it is probably easiest to think of a Material as the “paint” that is applied to an object. You can define its color, how shiny it is, whether you can see through the object, and much more.

In Unreal Engine, when you create a Material, you can define custom [Parameters](https://docs.unrealengine.com/en-US/RenderingAndGraphics/Materials/HowTo/Making_Parameters/index.html) for it. So if you defined some parameters for a Material in a mesh, you can tweak it with simple comands in nanos world!

:::caution

**nanos world** provides a bunch of methods to allow you to interact with the parameters you created for your materials using our scripting!

Please read [Base Paintable](./scripting-reference/classes/base-classes/paintable.mdx) Class to check all available methods before proceeding!

:::

## Replacing a Mesh Material with Default Material

To illustrate, let’s spawn a Cube and change it’s Material using Lua:


```lua title="Server/Index.lua"
-- spawns a static mesh cube
local my_cube = StaticMesh(Vector(300, 0, 100), Rotator(0, 45, 0), "nanos-world::SM_Cube")

-- replaces it's materials with the nanos default Masked one
my_cube:SetMaterial("nanos-world::M_NanosMasked")
```

Blank Cube with Default Masked Material
![](/img/docs/tutorials/painting-meshes-02.jpg)


## Painting a Mesh with Red Tint

Now let’s set it’s material to red! To be able to do that, we must set the Color parameter named **Tint** as we’ve seen above is the name of parameters which is connected to Base Color of the Material.


```lua title="Server/Index.lua"
-- spawns a static mesh cube
local my_cube = StaticMesh(Vector(300, 0, 100), Rotator(0, 45, 0), "nanos-world::SM_Cube")
-- replaces it's materials with the nanos default Masked one
my_cube:SetMaterial("nanos-world::M_NanosMasked")

-- paints it red
my_cube:SetMaterialColorParameter("Tint", Color(1, 0, 0))
```

Cube with Default Masked Material with Red parameter

![](/img/docs/tutorials/painting-meshes-03.jpg)

## Making a Mesh Metallic

Now let’s give it a metallic style! You can learn more about [Physically Based Materials](https://docs.unrealengine.com/en-US/RenderingAndGraphics/Materials/PhysicallyBased/index.html) to know about how each input affects the final representation of a surface!


```lua title="Server/Index.lua"
-- spawns a static mesh cube
local my_cube = StaticMesh(Vector(300, 0, 100), Rotator(0, 45, 0), "nanos-world::SM_Cube")
-- replaces it's materials with the nanos default one
my_cube:SetMaterial("nanos-world::M_NanosMasked")

-- paints it red
my_cube:SetMaterialColorParameter("Tint", Color(1, 0, 0))

-- makes it metallic
my_cube:SetMaterialScalarParameter("Metallic", 0.85)

-- makes it glossy
my_cube:SetMaterialScalarParameter("Roughness", 0)
```

Cube with Default Masked Material with Red and Metallic parameters

![](/img/docs/tutorials/painting-meshes-04.jpg)

## Making a Mirror

A fun thing to do is to make a material fully reflective, like a mirror:


```lua title="Server/Index.lua"
-- spawns a static mesh cube
local my_cube = StaticMesh(Vector(300, 0, 100), Rotator(0, 45, 0), "nanos-world::SM_Cube")

-- replaces it's materials with the nanos default one
my_cube:SetMaterial("nanos-world::M_NanosMasked")

-- makes it fully metallic and glossy
my_cube:SetMaterialScalarParameter("Metallic", 1)
my_cube:SetMaterialScalarParameter("Roughness", 0)
```

Cube with Default Masked Material with Metallic and Roughness parameters

![](/img/docs/tutorials/painting-meshes-05.jpg)

## Loading a Texture into a Mesh

It is even possible to load images \(.jpg, .png, etc\) from disk and apply to the mesh! For that you will need to have an image inside an Asset Pack or a Package \(in the `Client/` folder\). We gonna use [this \(imgur\)](https://i.imgur.com/67CGqHb.jpg) with the name `syed.jpg` and we will place it inside our Package `Client/` folder.

![](/img/docs/tutorials/painting-meshes-06.jpg)

And now you can set it like that:


```lua
-- spawns a static mesh cube
local my_cube = StaticMesh(Vector(300, 0, 100), Rotator(0, 45, 0), "nanos-world::SM_Cube")

-- replaces it's materials with the nanos default one
my_cube:SetMaterial("nanos-world::M_NanosMasked")

-- applies a custom texture to a parameter called "Texture"
my_cube:SetMaterialTextureParameter("Texture", "package///MyAwesomePhotos/Client/syed.jpg")
```

![](/img/docs/tutorials/painting-meshes-07.jpg)

:::tip

And voila! Easy Peasy! Feel free to create your own materials and textures and tweak them in-game!

:::

:::caution

Be careful! Loading raw images directly from disk is a slow operation and may cause unwanted stutters! Also raw images aren't cached neither automatically pre-loaded when joining a server.

:::

