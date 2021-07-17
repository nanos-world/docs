---
description: How to create and export maps from Unreal to nanos world
---

# Maps & Levels

Maps and Levels are quite the most straightforward asset that you can create and import. In Unreal, Maps are called `Levels`, usually these levels are filled with a Landscape component to make the terrain, some Lights and some Static Meshes \(Trees, Houses, etc\).

{% hint style="info" %}
Please refer to [Unreal’s Official tutorial - Working with Levels](https://docs.unrealengine.com/en-US/Engine/Levels/HowTo/WorkWithLevelAssets/index.html).
{% endhint %}

## Rules for creating a Map/Level for nanos world

1. Do not spawn/place **Dynamic Meshes** \(with Physics\), as they will not be synced in-game. You need to spawn them as a [Prop](../../../scripting-reference/classes/prop.md) on the scripting.
2. Add a “**Sun**” actor-tag to all Lighting/Sky/Sun related actors \(**DirectionalLight**, **SkyLight**, **DomeMesh**, **SkyAtmosphere** or **SunSky**\), this will allow, if wanted, to your light to be overridden by scripters to use, instead, the Official nanos world Sun through `World.SpawnDefaultSun()`, which allows in-game light/sun customization.
3. If you are creating a Map, please remember to nullify \(set to None\) all references it has for Unreal **GameModes** Override in the World Settings.

![GameMode Overrides nullified](../../../.gitbook/assets/image%20%2834%29.png)

{% hint style="info" %}
Most of [World](../../../scripting-reference/static-classes/world.md) functions rely on our own assets and code, so it is not \(yet\) possible to change the lighting or weather in your custom Map with World scripting functions.
{% endhint %}

After exporting your project \(refer to [Creating Assets](../#exporting-and-cooking-your-assets)\), you can just reference your map in your server config like `MyPack::MyLevel`.

## Storing data in your Map

As nanos world server is not aware of Unreal or it's Assets, we need to somehow say to the server where are the scriptable part of the map, wuch as Spawn Points, Props locations, Weapon locations and so on.

For that we created 2 solutions: [Custom Map Script](./#custom-map-script) and [Custom Map Data](./#custom-map-data).

### Custom Map Script

Custom Map Script

Maps can also have a **Custom Script** \(server-only\) attached to it. These are files named `[MAP_NAME].lua` in the same folder as the map in the `Assets/` folder. If no one of your Packages disallow it, this script file will be loaded as well as a package. Usually these scripts should have map specific spawn props/weapons points and pertinent stuff.

### Custom Map Data

## Creating a Map in Unreal Engine 4 from Scratch

{% hint style="warning" %}
Attention! This page is old and this tutorial may be outdated! Please refer to [ADK](../adk-assets-development-kit.md) for a modern approach.
{% endhint %}

### Video Tutorial by EinfachMax

{% embed url="https://www.youtube.com/watch?v=2FGkWdn9JP4" %}

The first step is to create a folder inside the `Content/` folder, _this step is very important_. Rename this folder with the Asset Pack name you desire

1. Expand the tab
2. Right click on Content
3. Create a New Folder

![](https://i.imgur.com/YBCNjn6.png)

![](https://i.imgur.com/7OLhlNS.png)

Now let’s create the Map itself, in Unreal maps are called [Levels](https://docs.unrealengine.com/en-US/Engine/Levels/index.html), to do so:

1. Right click on the Content space
2. Create a new Level

![https://i.imgur.com/FPa7Ykf.png](https://i.imgur.com/FPa7Ykf.png)

Rename it with the map name you desire, save it and open it up. You will notice the Viewport got black, this is because the Map you just opened doesn’t have anything, let’s add some stuff into it: 

![](https://i.imgur.com/QULpACu.png)

First let’s add a floor, for that just drag-and-drop a Plane from Place Actors -&gt; Basic window into the Viewport:

![](https://i.imgur.com/W1MTn0j.png)

![](https://i.imgur.com/h3m9hgJ.png)

With the plane selected, you will notice it is a simple Static Mesh, this Static Mesh is a model already included in the Engine, so it is important that you copy this Mesh to your `Content/YourAssetPack/` folder to avoid any further export problem: 

![](https://i.imgur.com/GNE2VPq.png)

To find where your Mesh is located, press the magnifying glass at the right of the Static Mesh item at the right of the screen: 

![](https://i.imgur.com/RtuOKWE.png)

This will open the Engine’s folder which contains some Basic meshes which come with the Engine: 

![](https://i.imgur.com/ha58XIS.png)

Let’s copy some Basic Meshes into our AssetsPack folder to be used later, including the Plane: 

![](https://i.imgur.com/1FsnsRa.png)

Use CTRL+C + CTRL+V to copy the assets into your folder: 

![](https://i.imgur.com/50E2Mbe.png)

Now let’s replace the plane mesh we were using to our copied mesh, for that, just 

1. Select the copied Plane mesh
2. Press the arrow on your Plane Actor to replace it’s Static Mesh \(alternatively you can just Delete the spawned Plane and drag and drop the new Plane from your assets pack’s folder\): 

![](https://i.imgur.com/8qcIqfA.png)

After that, with your Plane \(floor\) selected, let’s just scale it to `X = 10, Y = 10, Z = 10` and centralize it on `X = 0, X = 0, X = 0`: 

![](https://i.imgur.com/j3wyK8u.png)

We can also add some lights, for that, just drag and drop a **Directional Light** \(Sun Light/Shadows\) and a **Sky Light** \(Shadow’s Color\) into your level \(you can fly around with Right Click + WASD in the viewport, or press F to centralize the Plane - if selected\): 

![](https://i.imgur.com/VGnxyhy.png)

Great job, now we can see the stuff! Now let’s add some color to it, applying color and textures in Unreal are made through [Materials](https://docs.unrealengine.com/en-US/Engine/Rendering/Materials/index.html), for that, let’s just create a Material

1. Right Click
2. Create new Material

![](https://i.imgur.com/hxgwbTt.png)

Rename it to `M_Plane` and open it up: 

![](https://i.imgur.com/QaWKYR1.png)

We won’t cover all aspects of Materials in this tutorial, for now let’s just pin a Vector3 node with a color into Base Color input, for that Right Click on the screen and search for `Constant3Vector`: 

![](https://i.imgur.com/StcYiTH.png)

After that, pin it into Base Color input: 

![](https://i.imgur.com/KndyfuF.png)

Select the Vector3 node and select a color for it: 

![](https://i.imgur.com/xlOLBIM.png)

Now save and close this Material window, and you are able to drag and drop your material into the Mesh you want, let’s do it for the Plane: 

![](https://i.imgur.com/FjjtNZj.png)

And voila, it gets greenish \(or the color you selected in the Plane’s Material screen\)! 

![](https://i.imgur.com/en4fbEt.png)

Now let’s drag’n drop other Meshes into our Level, like so: 

![](https://i.imgur.com/dydOKb3.png)

Also, the ADK project provides a built-in Sun & SkyBox Actor \(to fill up the sky with color and clouds\), to add it, just look into `NanosWorld/Blueprints/World/` for `BP_SunSky` and drag it to the viewport.

You can create a new Material and use it to paint these meshes as well: 

![](https://i.imgur.com/9McdsLZ.png)

If you \(1.\) select the Directional Light, you can change it’s \(2.\) Rotation, also, remember to set it to \(3.\) Movable, so it’s shadows work in Real Time, feel free to tweak the light as you want, including it’s Color and intensity: 

![](https://i.imgur.com/RMh8XKg.png)

When you are fine with it, move your camera to see the whole map and take a screenshot of it, we will use that for a Thumbnail afterwards \(save it anywhere with the same name as your Map as .jpg, in our case: `MyAwesomeMap.jpg`\): 

![](https://i.imgur.com/2hsBQ7g.png)

And we are done! Save everything and let’s export it: 

![](https://i.imgur.com/hAravoG.png)

Select any folder in your computer and wait it to finish:  

![](https://i.imgur.com/Bnws2Te.png)

![](https://i.imgur.com/OydyFSF.png)

## Importing your Map into your Server

Open your Packaged folder and you will have something like this: 

![](https://i.imgur.com/vSxtaQn.png)

Copy the Thumbnail to the same folder as your Level \(should be in `MyAwesomeAssetPack/Content/MyAwesomeAssetPack`\): 

![](https://i.imgur.com/HupcN27.png)

Now jump to the \(1.\) `Content/` folder and \(2/3.\) copy your whole `MyAwesomeAssetPack/` folder: 

![](https://i.imgur.com/Uz9aqZF.png)

And paste it inside your server’s `Assets/` folder: 

![](https://i.imgur.com/PBBWnnQ.png)

Open the folder you copied and create a `Assets.toml` file in it, \(you can paste the content located at [Assets Configuration File](../../../core-concepts/assets.md#assets-pack-configuration) into this file. 

![](https://i.imgur.com/27XVOzN.png)

You will end up with something like that, remember to add an Entry to `assets.maps` list with the **MapKeyName** = **MapPath** pattern, the Map Key Name can be whatever you want, as our map is in the root of our Asset Pack, the Path is just `MyAwesomeMap` and we gave the key the name `MyAwesomeMap` as well: 

![](https://i.imgur.com/Cn5nBVA.png)

Now you can add your map to your Server’s `Config.toml` settings: 

![](https://i.imgur.com/xvi5mjV.png)

Or just open the game and \(if you are using the built-in nanos world Server\), you will find your new map in the `New Game` screen like that with your thumbnail: 

![](https://i.imgur.com/ncWwscw.png)

{% hint style="success" %}
You can now just start the New Game with the `Sandbox` package selected and VOILA! Your playable new map made from scratch! 
{% endhint %}

![](https://i.imgur.com/Tyr7OIj.png)

