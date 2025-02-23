---
slug: weapons-improvements
title: "Bonus Blog: Weapons Improvements!"
authors: gtnardy
tags: [updates]
---


One of our main focus for nanos world is having fun, and we believe that the small details are the big support for the experience to be complete. In the past weeks, we've been working on improving and adding small features to common actions such as firing, picking up objects and even how you perceive them happening. Here's the highlights!

<!--truncate-->



## New Weapon Animations

Since the beginning, our weapons were stiff when shooting giving an impression of rigidity and lack of fluidity. With the simple improvement of adding firing animations to that, look how it looks better:

<VideoExternal path="/blog/weapons-improvements/m1911.webm" />

<VideoExternal path="/blog/weapons-improvements/makarov.webm" />


## New effects for Bullet Shells

Besides new animations, we added a subtle detail: **Bullet Shells Drop SFX**. And not that simple! The sound is precisely played in the location and moment the shells hit the ground or any surface, listen:

<VideoExternal path="/blog/weapons-improvements/bullet-shell-drop.webm" />

Check out a complete before and after comparison of some of the weapons, you can notice all the improvements in detail!

<iframe width="620" height="347" src="https://www.youtube-nocookie.com/embed/ln4AUntcyLM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br />
<br />

Note that nanos world weapons animations and aiming are completely generated procedurally, that means when you are in First Person, the weapon sight location is calculated dynamically to be positioned right in the middle of your eyes, in a true first person mode.


## SFX when Picking Up objects

A subtle sound detail added when you grab and drop a Weapon, and also now the object is slightly thrown to forward:

<VideoExternal path="/blog/weapons-improvements/picking-up.webm" />


## Scopes

Is is really easy to add attachable objects in any Weapon, for example attaching a AWP Scope, we use the `SM_Scope_25x56` mesh for that:

```lua
-- Spawns a AWP Weapon
local weapon = Weapon(location or Vector(), rotation or Rotator(), "nanos-world::SK_AWP")

-- Attaches a Scope mesh, with configured offset to be perfectly aligned
weapon:AddStaticMeshAttached("sight", "nanos-world::SM_Scope_25x56", "", Vector(20, 0, 11))

-- Adjusts Sight Location to put the Sniper at exact location where the scope center will be when ADS
weapon:SetSightTransform(Vector(-15, 0, -4.6), Rotator(0, 0, 0))
```

<VideoExternal path="/blog/weapons-improvements/sniper-scope.webm" />

This is completely procedural, it also uses the 3D Mesh scope materials!


:::tip

You can also check the [Official Weapons Package](https://github.com/nanos-world/nanos-world-weapons), and see how a RedDot has been added to a P90!

:::

That's it! Thank you all!