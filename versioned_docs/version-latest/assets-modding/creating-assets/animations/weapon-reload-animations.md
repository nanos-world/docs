---
title: Weapon Reload Animations
description: How to create custom Weapon Reload Animations
tags: [assets, weapon, animations]
keywords: [animation, weapon, unreal]
---


How to create custom Weapon Reload Animations.

Now it is possible to create custom reload animations for nanos world! To make it work you just need to setup some Notifies at the position you want the reload event occurs.

![](/img/docs/weapon-animations-01.webp)


## Step 1: Create an Animation Montage with your Animation

![](/img/docs/weapon-animations-02.webp)

For that, you can just right click any Animation Sequence and Create a new Animation Montage like this:

![](/img/docs/weapon-animations-04.webp)


## Step 2: Add Montage Notifies to the Montage

At the bottom (where the timeline is) it is possible to add new **Montage Notifies**, these are events that trigger special codes to handle the reload:

:::warning note

Make sure you add a `Montage Notify` (`UAnimNotify_PlayMontageNotify`) from the notifies list, other notifies types will not work.

:::


![](/img/docs/weapon-animations-03.webp)

After adding a montage notify, you can move it to where you want, note you can set the Name of it in the top right corner:

![](/img/docs/weapon-animations-05.webp)


## Step 3: Define the correct Name

There are some special names which can be used in there that will trigger special actions for reloading the weapon


| Notify Name | Description |
| :--- | :--- |
| **`Reload_Load`** | This is the main notify, which will trigger the actual reload function internally and update the weapon's ammo. This will destroy the Magazine StaticMesh spawned in the left hand. |
| **`Reload_Unload`** | This will hide the Weapon's `b_gun_mag` bone and spawn a Magazine StaticMesh attached to the left hand.<br />The magazine mesh can be set with [Weapon:SetMagazineMesh()](/scripting-reference/classes/weapon.mdx#setmagazinemesh). |
| **`Reload_UnloadAndDetach`** | This will hide the Weapon's `b_gun_mag`, spawn the Magazine StaticMesh at the bone location and immediately detach it. |
| **`Reload_SpawnMagazine`** | This will just spawn the Magazine StaticMesh attached to the left hand. |
| **`Reload_DropMagazine`** | This will drop the Magazine StaticMesh from the left hand. |


## Examples

On Shotguns or Revolvers, you usually will have only `Reload_Load` being called, as you don't have Magazine StaticMeshes and is only adding new bullets into it.

On Pistols, you may want to call `Reload_UnloadAndDetach`, `Reload_SpawnMagazine` and `Reload_Load` respectively to just release the Magazine from the weapon, then spawn a new one in the hand and finally do the load.

On Rifles, you may want to call `Reload_Unload`, `Reload_DropMagazine`, `Reload_SpawnMagazine` and `Reload_Load` respectively to hide and spawn a Magazine in the left hand, then after few ms drop it (throwing it back), then spawning a new Magazine in the hand and attaching it to the weapon finishing the load.