---
slug: november-2021
title: "November: Unreal Engine 5?"
authors: gtnardy
tags: [updates]
---

New Classes, Unreal Engine 5 Experiments and Scripting Improvements!


## New Class: [Decal](/docs/scripting-reference/classes/decal)

![](/img/blog/november/decal.jpg)

We've added a new class to spawning **Decals**! Decals are Materials that are projected onto meshes in your level, including Static Meshes and Skeletal Meshes. You can load any `.jpg` from disk during runtime and use it as parameter in your Decal Material!

As Decals are inherited from Actors, you can change it's location, rotation, attach it or call any method from [Base Actor](/docs/scripting-reference/classes/base-classes/actor) on it!


## New Class: [Billboard](/docs/scripting-reference/classes/billboard)

![](/img/blog/november/billboard.jpg)

We've added another new class to spawning **Billboards**! A Billboard is a 2D Material that will be rendered always facing the camera. It's possible to use all custom methods from Paintable as well and spawning custom textures on it. You can tweak it's material properties with [Base Paintable](/docs/scripting-reference/classes/base-classes/paintable) or even use a material of your own.

As Billboards are inherited from Actors, you can change it's location, rotation, attach it or call any method from [Base Actor](/docs/scripting-reference/classes/base-classes/actor) on it!


## New Class: [Melee](/docs/scripting-reference/classes/melee)

![](/img/blog/november/melee.jpg)

We are getting a brand new very-requested class: **Melee**! The Melee is coming to replace the former **Item** class.

**Melee** is a new Class (which works exactly as the old **Item**) but now with ability to attack with it. It is possible to add custom animations, a cooldown and tweak the damage of it. The attack physics is procedurally based on the animation, this means you can stab, slash or even smash things only by changing the animation and then the hit will be based on that!

The results are quite fun, the hit/damage also affects the environment dynamically 😊

<video controls="true" allowfullscreen="true">
    <source src="/videos/blog/november/melee.mp4" type="video/mp4" />
</video>


## Scripting Improvements

We've listen to your demand and we're finally bringing long-awaited new amazing scripting features!

### Real Hot Reload

![](/img/blog/november/hotreload.jpg)

After several requests, we've started implementing a real Hot Reload feature!

The real **Hot Reloading** is an amazing feature which allows you loading new scripting code without needing to lose all the current memory state of your Packages. It works by loading the scripting files over the current running Lua VM.

Currently it works by manually triggering it in the console:

```bash
package hotreload [PACKAGE_NAME|all]
```

This will update the clients with the newer files version and load the `Index.lua` files from the packages. It will keep the current memory state of the packages as it is. It will also unsubscribe from all registered Events in that package.

In the future, it would be possible to add a real-time checker to automatically update the modified files after saving them.


### Extending Classes

![](/img/blog/november/extending.jpg)

A new cool feature that is being added is Extending and Inheriting nanos world Classes. *This is still experimental and we want to collect your feedback and find remaining bugs.*

It is now possible to **Add new Methods** to nanos world Classes, **Override existing Methods** and even **Override __index and __newindex**.

Adding a new method to a class is easy like this:

```lua
-- Adding a new method 'AddScore' to Player class
function Player:AddScore(score)
    self:SetValue("score", self:GetValue("score", 0) + score)
end

-- Using it
my_player:AddScore(10)
```

Read the full documentation [here](/docs/core-concepts/scripting/extending-classes).


## New View Mode: TopDown

We created a new native View Mode: **TopDown**!

This ViewMode allows you to fully control Characters from a TopDown perspective.

With just a single line:

```lua
my_character:SetViewMode(ViewMode.TopDown)
```

nanos world becomes a completely different game, the mouse is now a crosshair which the Character aims to. Mechanics of picking up Weapons, grabbing Props and interacting with stuff was slightly modified to work with the ViewMode. Also driving is fully supported as well! 🤩

It also is possible to dynamically change the view mode and switch between them during game-play and also tweak settings such as camera distance and so on.

<video controls="true" allowfullscreen="true">
    <source src="/videos/blog/november/top-down.mp4" type="video/mp4" />
</video>


## New Camera Methods

Player got a bunch of new Camera methods: `Player:SetCameraSocketOffset()`, `Player:SetCameraArmLength()`.

And also ability to detach and attach it to other actors (👀 including Props): `Player:AttachCameraTo()` and `Player:ResetCamera()`. It will attach including a Camera SpringArm component!

Note: **Spectate** methods from **Client** has been moved to **Player**: `Player:Spectate()`.


## [TextRender](/docs/scripting-reference/classes/text-render) on Server Side

Now the Class `TextRender` now can be spawned on Server Side as well!


## Other Changes

Besides the major topics covered here, we've got several other new features which were been added during the month:

- Added a new method for Character: `Character:Follow()` which will make the AI follow other actor.
- Added a new Utils method: `NanosUtils.Benchmark()` which will take a function as parameter and test the performance of it.
- Now `Subscribe` will return the callback function (which can be used to Unsubscribe afterwards).
- Fixed tons of bugs, detailed information can be found in the Discord Changelog channel.


## Unreal Engine 5

![](/img/blog/november/ue5.jpg)

Lastly, it is already known we have a big objective of porting nanos world to Unreal Engine 5. Personally this is something I wanted to do as soon as possible because Unreal Engine 5 features are amazing, not to mention the publicity and marketing bonuses we would get for nanos world.

In this month, we decided to give a try: we tested porting nanos world to Unreal 5, at first we had some problems because of some Unreal modules have been completely renamed or even removed. And also we got some Unreal methods deprecated by the newer version, so we needed to update them and even reimplement some small stuff.

Currently Unreal Engine 4 uses PhysX physics and in Unreal 5 all the Physics Engine have been replaced by [Unreal's Chaos](https://docs.unrealengine.com/5.0/en-US/PhysicsFeatures/ChaosVSPhysxOverview/), which is a new Engine replacing the NVIDIA's PhysX.

This made us need to disable Vehicles for this test, as Unreal vehicles are very dependent on the PhysX engine and I would need to reimplement them using the new Chaos API for vehicles (I believe that our Vehicles API will need to change a bit as well once we fully update it).

But after half of dozen adaptions and disabled Vehicles, the results were surprisingly good! nanos world worked on Unreal Engine 5! Personally I got very happy and proud that the biggest problems I had was updating deprecate methods and updating some Unreal modules, thanks to the architecture developed so far in nanos world!


### Graphical Results

nanos world on Unreal Engine 5 is beautiful, joying with Lumen and Global Illumination is really fun!

There were some graphical artifacts (such as changing the time of day too fast causing a delay/ghosting effect), but I believe they will improve them for the final Unreal Engine 5 version.

Check it out some screenshots taken during the tests trying the Global Illumination and Lumen:

![](/img/blog/november/ue5-outside.jpg)

![](/img/blog/november/ue5-inside-gas-01.jpg)

![](/img/blog/november/ue5-inside-gas-02.jpg)

![](/img/blog/november/ue5-inside-flash-01.jpg)

![](/img/blog/november/ue5-inside-flash-02.jpg)

![](/img/blog/november/ue5-inside-flash-03.jpg)


### Stability

Unfortunately the stability was extremely bad. It didn't surprise me too much as Unreal Engine 5 is on Early Access, so bugs and crashes would happen. Several random crashes occurred during gameplay, I could notice mostly of them were caused by the new Chaos Engine (related to Physics).


### What now?

I was really happy in being able to port nanos world to Unreal Engine 5, this attempt made us be sure that this would be possible. But I decided that currently is not time yet. During the tests we had several crashes (random ones, related to the low-level of Unreal, mainly coming from Chaos Engine and from Water) that made us conclude that is better to wait a better stable version because it makes nanos world really unplayable. Those random crashes are extremely bad as sometimes it's hard to know if it's my or Unreal's fault.

Fortunately, with this we could prove ourselves that nanos world will, when the time comes, be compatible and updated to Unreal Engine 5!

