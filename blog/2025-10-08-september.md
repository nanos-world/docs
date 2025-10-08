---
slug: september-2025
title: "Sep: Halloween, Playtest & Encryption!"
authors: gtnardy
tags: [updates]
image: /img/blog/2025-september/september-news-halloween.webp
---



**Halloween Preparation, Playtest, Client Files Encryption, Tons of Performance Improvements & More!**

![](/img/blog/2025-september/september-news-halloween.webp)

Welcome to our roundup of the latest updates from the last month!

<!--truncate-->


## Halloween Event

![](/img/blog/2025-august/halloween-2025-jam.webp)

<MediaLegend>Halloween Event Teaser Banner</MediaLegend>

We are officially in the season for creating **Halloween game-modes**!

If you are a Tester and haven't started yet, there are still about 2 weeks left to create something! This event is a great opportunity to show your creativity and help us stress test systems under real load.

The Halloween Playtest will be public and open for everyone during **Steam's Scream Fest** from **October 27** to **November 3**! See full details in the [Discord Post](https://discord.com/channels/124107916432113666/385425494864035849/1413886712622485504).

In addition to community-created game-modes, we'll also be playing our traditional and *enhanced* **Halloween Special Game-Mode**, featuring tons of new mechanics, power-ups, Horseless Headless Horseman classes, and new ways to play, here are a few images to spoil you:

<MediaGallery>

![](/img/blog/2025-september/halloween-04.webp)

![](/img/blog/2025-september/halloween-02.webp)

![](/img/blog/2025-september/halloween-01.webp)

![](/img/blog/2025-september/halloween-03.webp)

![](/img/blog/2025-september/halloween-05.webp)

![](/img/blog/2025-september/halloween-06.webp)

</MediaGallery>

<MediaLegend>Halloween Special Game-Mode Screenshots</MediaLegend>

:::tip

You can find more details about this game-mode in the [Discord Thread](https://discord.com/channels/124107916432113666/1424784839479001088). Also, feel free to share your progress in the [🚀｜project-showcase](https://discord.com/channels/124107916432113666/1380484233428209806) channel!

:::


### Joining the Playtest

If you are not a Tester and want to join as a player, go to the [nanos world™ Steam Page](https://store.steampowered.com/app/1841660/nanos_world/) and **Request Access** for the playtest. During Halloween week, everyone will be able to download and play the game.

[![](/img/blog/2025-september/playtest.webp)](https://store.steampowered.com/app/1841660/nanos_world/)


## Scripting Files Encryption

![](/img/blog/2025-september/encryption.webp)

<MediaLegend>Client Lua Files encrypted</MediaLegend>

We've always heard a request from the community to obfuscate the files sent to clients, and now we took this first step by doing so with all client Lua files!

All client Lua files are now **encrypted** when shipped to players. We use a runtime-generated password to encrypt and decrypt each Lua file when downloading and storing to client's disk.

All Lua files are decrypted at runtime when a package requires them, adding a layer of security for creators that don't want the Lua files easily read by players.


## Trigger Improvements

We've made significant improvements to the Trigger implementation, making it much more efficient!

- The math intersection algorithm was heavily optimized for both Sphere and Box checks.
- Triggers now only iterate through actors from whitelisted classes, drastically reducing loop costs.
- Only nearby actors are evaluated, distant actors are completely discarded from Trigger checks!

These improvements bring huge CPU savings on dense maps.


## Core Improvements

Some internal framework improvements we've got:

### Server Thread Contention

We addressed several **thread contention** hotspots that were causing frequent stutters on the server side (causing frame tick too high or profiling warnings), especially when internal mutexes on the main thread were waiting for async threads to finish.

This often occurred when players were downloading files or when too many Actors with network authority and Triggers were spawned. We've refactored all our async threads and mutex usage, greatly reducing the async threads dependency and these locks.


### Parallel Lua Files Load

We've implemented a multi-threaded solution to load, cache, and encrypt all Client files from Packages when loading it. Now it behaves like loading Asset Packs, boosting the server performance on multi-core processors.


### Network Authority Improvements

Network authority and distribution logic was improved. We reworked our internal system which decides which entity can distribute Network Authority, fixing some rare bugs of entities that shouldn't have the network authority changed and also improving performance.

We also changed how Translate/RotateTo works. Previously, these calls were only processed by the Network Authority of an entity, causing sync issues and poor smoothness. Now, they are processed on all clients individually, removing the need for some entities to have Network Authority Distribution (such as StaticMesh), which is a big gain for network usage.


### Network Usage

We've improved network usage by reducing the sync of attached entities (e.g., Character driving, Weapon picked up, or Actor attached).

We also improved our internal network fetch to process network data in batches, reducing the internal networking API calls needed.


## New Default Assets

### Adventure Characters

We bundled the new free Fab Asset Pack [Adventure Characters](https://www.fab.com/listings/db81464d-fcb5-43a8-b309-5555c392be3a) natively.

![](/img/blog/2025-september/adventure-pack.webp)

<MediaLegend>Adventures Pack Characters</MediaLegend>

The official Sandbox game-mode now includes these meshes and their clothes properly configured.


### Bossy Enemy Anims

We've also bundled the Fab Asset Pack [Bossy Animation Pack](https://www.fab.com/listings/ca966d08-dc8b-45a7-bfc2-12d98f1b594f).

![](/img/blog/2025-september/bossy-anim-pack.webp)

<MediaLegend>Bossy Animation Pack</MediaLegend>

:::tip

All these assets are properly configured and optimized for runtime use and are available natively. You can find all native assets in the [Default Assets List](/docs/next/assets-modding/default-asset-pack/default-assets-list) page.

:::


## New Scripting API Methods

We've implemented a bunch of new methods this month, to name a few:

### Widget Slots

Widgets got new methods to control their layout in slots:

- <MethodReference type="Class" class_name="Widget" method="SetSlotAlignment" show_class_name />
- <MethodReference type="Class" class_name="Widget" method="SetSlotPadding" show_class_name />
- <MethodReference type="Class" class_name="Widget" method="SetSlotSize" show_class_name />

We also renamed the old <MethodReference type="Class" class_name="Widget" method="SetSlotCanvasLayout" show_class_name /> to keep naming consistency.


### PostProcess

We've exposed new methods to allow customizing the global Post Process colors:

- <MethodReference type="StaticClass" class_name="PostProcess" method="SetGlobalGain" show_class_name is_static />
- <MethodReference type="StaticClass" class_name="PostProcess" method="SetGlobalGamma" show_class_name is_static />
- <MethodReference type="StaticClass" class_name="PostProcess" method="SetGlobalContrast" show_class_name is_static />
- <MethodReference type="StaticClass" class_name="PostProcess" method="SetGlobalOffset" show_class_name is_static />

### Other new Methods

- <MethodReference type="StaticClass" class_name="Server" method="GetEntityByID" show_class_name is_static /> / <MethodReference type="StaticClass" class_name="Client" method="GetEntityByID" show_class_name is_static />
- <MethodReference type="Class" class_name="Pawn" method="SetControlRotation" show_class_name />
- <MethodReference type="Class" class_name="Character" method="SetCanUsePickables" show_class_name />
- <MethodReference type="Class" class_name="Pickable" method="SetCanUse" show_class_name />
- <MethodReference type="Class" class_name="Character" method="SetPhysicsAsset" show_class_name /> / <MethodReference type="Class" class_name="CharacterSimple" method="SetPhysicsAsset" show_class_name />


## VOIP Improvements

We've improved how internal VOIP capture is handled. The <EventReference type="Class" class_name="Player" event="VOIP" /> scripting event now fires only when voice capture actually begins or ends, making it more precise and preventing abrupt cutoffs.


## Testing Map Weather

The Testing Map now has improved materials that respond better to dynamic weather. Trees and grass are affected by Wet and Snow effects from Ultra Dynamic Sky.

![](/img/blog/2025-september/testing-map-weather.webp)

<MediaLegend>Testing Map using UDS Weather Materials</MediaLegend>


## External Dependencies

- We've added the [Kawaii Physics](https://github.com/pafuhana1213/KawaiiPhysics) plugin.
- Ultra Dynamic Sky was updated to version `v9.1`.


## Notable Bug Fixes

Some important bugs we've fixed this month:

- Fixed CharacterSimple accel. sync, capsule size on late join and `MoveComplete` events.
- Fixed Profiling UI causing stutters every time it was refreshed.
- Fixed `JSON` circular reference causing stack overflow (now safely nullified).
- Fixed and improved loading Runtime `.ogg` sounds.
- Fixed PostProcess not applying the effects before it was possessed.
- Fixed Spectating not attaching the camera to the other player properly.
- Fixed Trigger multiple `Begin/EndOverlap` events call.
- Fixed `package reload all` reloading the same package multiple times on client.

:::tip

Check the full changelog in our Discord for the exhaustive list.

:::


## Store Development

![](/img/blog/2025-september/store.webp)

<MediaLegend>Store Packages Grid Visualization (WIP)</MediaLegend>

We are still working hard on the initial store version. We already have a working prototype for **Packages** and are working on the **Assets** part now.

Hopefully, before the end of the month, we will have it ready for testing and use during the playtest.


## Conclusion

Besides all the improvements and new features, this month was mostly focused on developing the new Halloween Special game-mode. This new Halloween version is getting really fun, and I'm really looking forward to having everyone play it! 🎃

There are still a few bugs that I need to fix and minor adjustments to consider it done. But it's always great to create a game-mode/package myself as I can find all the needed features or bugs and fix them right away.

Also, remaking that City Park map from scratch was a huge pain. This is a terribly optimized map and required a LOT of work to make it playable.

This has been a really rushed month, there's still a lot to be done for Halloween, and I'm working almost 10 hours a day to put everything on track. It's being a time optimization challenge for me. 😅

As always, thank you for all the support you give me! It's been really helpful! If you have any suggestion or bug report, please always do so!

See you in the Playtest! 👋


<KofiButton />