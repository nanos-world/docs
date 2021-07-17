---
description: How to use the new Material customization methods available to use
---

# Painting Meshes

![](https://i.imgur.com/cL4T3rk.png)

In Unreal Engine, a [Material](https://docs.unrealengine.com/en-US/RenderingAndGraphics/Materials/index.html) is an asset that can be applied to a mesh to control the visual look of the scene. At a high level, it is probably easiest to think of a Material as the “paint” that is applied to an object. You can define its color, how shiny it is, whether you can see through the object, and much more.

In Unreal Engine, when you create a Material, you can define custom [Parameters](https://docs.unrealengine.com/en-US/RenderingAndGraphics/Materials/HowTo/Making_Parameters/index.html) for it. So if you defined some parameters for a Material in a mesh, you can tweak it with simple comands in nanos world!

{% hint style="warning" %}
**nanos world** provides a bunch of methods to allow you to interact with the parameters you created for your materials using our scripting!

Please read [Base Paintable](../../scripting-reference/classes/base-classes/paintable.md) Class to check all available methods before proceeding!
{% endhint %}

## Replacing a Mesh Material with Default Material

To illustrate, let’s spawn a Cube and change it’s Material using Lua:

{% tabs %}
{% tab title="Lua" %}
{% code title="Server/Index.lua" %}
```lua
-- spawns a static mesh cube
local my_cube = StaticMesh(Vector(300, 0, 100), Rotator(0, 45, 0), "nanos-world::SM_Cube")

-- replaces it's materials with the nanos default Masked one
my_cube:SetDefaultMaterial(MaterialType.Masked)
```
{% endcode %}
{% endtab %}
{% endtabs %}

![Blank Cube with Default Masked Material](https://i.imgur.com/69gsJpU.png)

## Painting a Mesh with Red Tint

Now let’s set it’s material to red! To be able to do that, we must set the Color parameter named **Tint** as we’ve seen above is the name of parameters which is connected to Base Color of the Material.

{% tabs %}
{% tab title="Lua" %}
{% code title="Server/Index.lua" %}
```lua
-- spawns a static mesh cube
local my_cube = StaticMesh(Vector(300, 0, 100), Rotator(0, 45, 0), "nanos-world::SM_Cube")
-- replaces it's materials with the nanos default Masked one
my_cube:SetDefaultMaterial(MaterialType.Masked)

-- paints it red
my_cube:SetMaterialColorParameter("Tint", Color(1, 0, 0))
```
{% endcode %}
{% endtab %}
{% endtabs %}

![Cube with Default Masked Material with Red parameter](https://i.imgur.com/w9Sm5KS.png)

## Making a Mesh Metallic

Now let’s give it a metallic style! You can learn more about [Physically Based Materials](https://docs.unrealengine.com/en-US/RenderingAndGraphics/Materials/PhysicallyBased/index.html) to know about how each input affects the final representation of a surface!

{% tabs %}
{% tab title="Lua" %}
{% code title="Server/Index.lua" %}
```lua
-- spawns a static mesh cube
local my_cube = StaticMesh(Vector(300, 0, 100), Rotator(0, 45, 0), "nanos-world::SM_Cube")
-- replaces it's materials with the nanos default one
my_cube:SetDefaultMaterial(MaterialType.Masked)

-- paints it red
my_cube:SetMaterialColorParameter("Tint", Color(1, 0, 0))

-- makes it metallic
my_cube:SetMaterialScalarParameter("Metallic", 0.85)

-- makes it glossy
my_cube:SetMaterialScalarParameter("Roughness", 0)
```
{% endcode %}
{% endtab %}
{% endtabs %}

![Cube with Default Masked Material with Red and Metallic parameters ](https://i.imgur.com/uem3QpU.png)

## Making a Mirror

A fun thing to do is to make a material fully reflective, like a mirror:

{% tabs %}
{% tab title="Lua" %}
{% code title="Server/Index.lua" %}
```lua
-- spawns a static mesh cube
local my_cube = StaticMesh(Vector(300, 0, 100), Rotator(0, 45, 0), "nanos-world::SM_Cube")

-- replaces it's materials with the nanos default one
my_cube:SetDefaultMaterial(MaterialType.Masked)

-- makes it fully metallic and glossy
my_cube:SetMaterialScalarParameter("Metallic", 1)
my_cube:SetMaterialScalarParameter("Roughness", 0)
```
{% endcode %}
{% endtab %}
{% endtabs %}

![Cube with Default Masked Material with Metallic and Roughness parameters ](https://i.imgur.com/x22FhT8.png)

## Loading a Texture into a Mesh

It is even possible to load images \(.jpg, .png, etc\) from disk and apply to the mesh! For that you will need to have an image inside an Asset Pack or a Package \(in the `Client/` folder\). We gonna use [this \(imgur\)](https://i.imgur.com/67CGqHb.jpg) with the name `syed.jpg` and we will place it inside our Package `Client/` folder.

![](../../.gitbook/assets/image%20%2839%29.png)

And now you can set it like that:

{% tabs %}
{% tab title="Lua" %}
```lua
-- spawns a static mesh cube
local my_cube = StaticMesh(Vector(300, 0, 100), Rotator(0, 45, 0), "nanos-world::SM_Cube")

-- replaces it's materials with the nanos default one
my_cube:SetDefaultMaterial(MaterialType.Masked)

-- applies a custom texture to a parameter called "Texture"
my_cube:SetMaterialTextureParameter("Texture", "package///MyAwesomePhotos/Client/syed.jpg")
```
{% endtab %}
{% endtabs %}

![](https://i.imgur.com/Lh5HKLb.png)

{% hint style="success" %}
And voila! Easy Peasy! Feel free to create your own materials and textures and tweak them in-game!
{% endhint %}

{% hint style="warning" %}
Be careful! Loading raw images directly from disk is a slow operation and may cause unwanted stutters! Also raw images aren't cached neither automatically pre-loaded when joining a server.
{% endhint %}

