---
title: Migrating from 1.0 to 1.3
description: How to migrate your Packages and Asset Packs from Alpha 1.0 to 1.3 version
tags: [scripting, migration]
---


All changes from Alpha 1.0 until 1.2 did not have breaking changes, all changes were documented as deprecated and got warnings on the console if you are using it.

## Breaking Changes

:::tip

Breaking Changes requires you to immediately fix your code, otherwise it won't work properly anymore.

:::

## `TranslateTo()` and `RotateTo()`

Now `TranslateTo()` and `RotateTo()` has new parameters, **speed** has been replaced by **time** and **sweep** has been removed.

```lua
-- Old
Actor:TranslateTo(location, speed, sweep)
Actor:RotateTo(rotation, speed)

-- New
Actor:TranslateTo(location, time, exp)
Actor:RotateTo(rotation, time, exp)
```

**time** is how long it takes to make the movement, and **exp** is the exponential used to smooth the movement (ease-in ease-out).


## Deprecation Notes

:::tip

Deprecation Notes will still work in the current way, but the old methods/interfaces will be removed as soon as possible, without previous warning. Please always stay tuned to the console to warning messages, they are very important! 😉

:::

## `SetCameraLocation()` and `SetCameraRotation()`

Now `SetCameraLocation()` and `SetCameraRotation()` don't have **time** and **exp** parameters anymore.

We've added new methods `TranslateCameraTo()` and `RotateCameraTo()` with **time** and **exp**. Set\[Something\] will be just setters.
