---
title: Sandbox Game Mode
description: Learn how the Sandbox Game Mode works and how to extend and integrate with it through scripting
tags: [tutorial-example, scripting, assets]
---

Learn how the Sandbox Game Mode works and how to extend and integrate with it through scripting.

The Sandbox Game Mode is the default game mode of nanos world, providing a base for players to explore and experiment with the engine features. It is a free roam game mode where players can spawn items, vehicles, weapons, and more to interact with the world.

It is completely made through scripting, meaning it is possible to customize it with Lua and HTML/JS/CSS. It also provides several exposed methods to easily integrate your packages with it and extend its features.


## Basic Concepts

The Sandbox Game Mode exports a global variable `Sandbox` that is accessible through any loaded package, which contains all the methods and properties related to it. You can use this variable to interact with the game mode and extend its features from your packages.

It's features are divided in several sub-systems, the main ones being:

#### Spawn Menu

A menu that allows players to spawn items in the world, such as Props, Entities, Vehicles, Weapons, etc. It is accessed by the default key `Q` and stays visible while pressed.

<ReferenceLink href="explore/sandbox-game-mode/spawn-menu">Spawn Menu</ReferenceLink>


#### Context Menu

A menu that provides run-time settings like tweaking the Sun Light, Respawning or customizing the current tool. It is accessed by the default key `C` and is toggled ON/OFF by pressing.

<ReferenceLink href="explore/sandbox-game-mode/context-menu">Context Menu</ReferenceLink>


#### Tools Guns

A set of weapons that provide special functionalities to interact with the world, such as moving objects, adding constraints,spawning entities, etc. They can be spawned through the Spawn Menu.

<ReferenceLink href="explore/sandbox-game-mode/tool-guns">Tool Guns</ReferenceLink>


#### Other Sub Systems

We also have several other sub-systems like Tutorials and Notifications, that you can see more in the [Extra Features](extra-features.md) page:

<ReferenceLink href="explore/sandbox-game-mode/extra-features">Extra Features</ReferenceLink>