---
title: Retargeting Animations
description: How to assign custom animations to nanos world base Skeleton
tags: [assets, character, animations]
keywords: [animation, character, unreal]
sidebar_position: 1
---

How to assign custom animations to nanos world base Skeleton.


:::tip Prerequisites

Before proceeding, please make sure you read [Creating & Importing Assets](/assets-modding/creating-assets/importing-assets.md) Guide. You will need to use the ADK for this guide.

:::

To be able to import custom Character animations, first you need to assign them to nanos world default Skeleton.


:::caution

You can only retarget animations which were created for **Unreal Engine 4 Mannequin Skeleton**.

:::

Since Unreal Engine 5, they removed a convenient way of doing so, with Retargeting. Now we need to use a different approach.


## Assigning nanos world Skeleton

For that, right click your animation (or all of them at once), and open the **Bulk Editor via Property Matrix**:

![](/img/docs/retargeting-animations-01.webp)

You will have opened a screen like this:

![](/img/docs/retargeting-animations-02.webp)

Now select all of them, and in the **Display** window, search for "**Skeleton**":

![](/img/docs/retargeting-animations-03.webp)

Now click the right "matrix" button and search for `SKEL_Mannequin` inside `NanosWorld/Characters/Common` folder:

![](/img/docs/retargeting-animations-04.webp)

And that's it! Assign the SKEL_Mannequin and save all Animations edited through the Property Matrix. Now all of them are using the correct nanos world Skeleton and can be exported and used seamlessly in nanos world!