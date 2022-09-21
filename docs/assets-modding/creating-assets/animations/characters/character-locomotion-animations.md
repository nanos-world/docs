---
title: Locomotion Animations
description: How to create custom Character Locomotion Animations
tags: [assets, character, animations]
keywords: [animation, character, unreal]
sidebar_position: 2
---


How to create custom Character Locomotion Animations.


:::tip Prerequisites

Before proceeding, please make sure you read [Creating & Importing Assets](/assets-modding/creating-assets/importing-assets.md) Guide.

:::

It is now possible to integrate your own Locomotion raw animations into nanos world! With the new Character methods you can add your own Standing, Proning and Crouching Blend Spaces to work in the native Character!


## Locomotion BlendSpaces

In Unreal, [BlendSpaces](https://docs.unrealengine.com/5.0/en-US/blend-spaces-in-unreal-engine/) are graphs where you can plot any number of animations to be blended between based on the values of multiple inputs.

In our case our inputs are `SpeedY` (Horizontal Axis) and `SpeedX` (Vertical Axis), meaning forward and right speed, respectively.

<video controls="true" allowfullscreen="true">
    <source src="/videos/docs/assets-modding/character-locomotion-01.webm" />
</video>

:::tip

Read [Retargeting Animations](/assets-modding/creating-assets/animations/characters/retargeting-animations.md) for retargeting animations into nanos world Skeleton.

:::


All you need to do is create a new **Blend Space 2D** and drag'n drop your animations on it.


### BlendSpace Configuration

First, make sure the **Horizontal** and **Vertical Axis** are named `SpeedY` and `SpeedX` respectively. Also they need to be clamped to `-1.0` and `1.0` Axis Values:

![](/img/docs/character-locomotion-01.webp)


:::tip

You can tweak the Smoothing Time the way you want 😉.

:::


### Setting up Through Scripting

Through scripting you can set the Locomotion BlendSpace Animation using 3 methods:

- `Character.SetAnimationIdleWalkRunStanding(anim_path, enable_tip)`
- `Character.SetAnimationIdleWalkRunCrouching(anim_path, enable_tip)`
- `Character.SetAnimationIdleWalkRunProning(anim_path)`

The `enable_tip` can be toggled to enable/disable **Turn In Place** built-in feature.


## Transition Animations

It is also possible to define the transition animation between the states (Standing, Proning, Crouching), those are simple Sequence Animations just to improve the "lerp" between them.

### Setting up Through Scripting

Through scripting you can set the Transition Animations using 2 methods:

- `Character.SetAnimationsTransitionStandingCrouching(anim_standing_to_crouching, anim_crouching_to_standing)`
- `Character.SetAnimationsTransitionCrouchingProning(anim_crouching_to_proning, anim_proning_to_crouching)`

In each method you can set the transition between 2 states (Standing <-> Crouching or Proning <-> Crouching).


## Custom Animation Notifies

You can integrate your animations with the built-in nanos world Animation Notifies, to trigger footstep sounds or disable movement, for example!

Here's the list of possible Anim Notifies names to use and it's effects:


| Notify Name | Description |
| :--- | :--- |
| **`Footstep_Sound`** | This will play a Footstep sound based on the surface the character is over. |
| **`Movement_Disable`** | This will disable the Character movement (useful for "Getting Up" transition animations for example). |
| **`Movement_Enable`** | This will enable the Character movement. |


### Adding a Notify

Adding Notify is very straight, just **Right Click** on any Notify Track of your animation and click **Add Notify** -> **New Notify**:

![](/img/docs/anim-notify-01.webp)

Then just input one of the Animation Notify Names listed above:

![](/img/docs/anim-notify-02.webp)

And you are done! You can position it to exactly when the feet touches the ground for perfect sounding!

![](/img/docs/anim-notify-03.webp)