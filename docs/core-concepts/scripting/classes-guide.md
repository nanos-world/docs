---
title: Classes Guide
description: All you need to know about Classes
sidebar_position: 0
tags: [scripting]
---


import { Classes, StaticClasses } from '@site/src/components/_nanos';

All you need to know about Classes

All entities in nanos world are represented by a Class. In Lua, classes are represented by [tables](/scripting-reference/glossary/basic-types.md#table). That means that every interaction with entities (Players, Characters, Props, etc) are made with Classes/tables methods following an [OOP \(Object-oriented programming](https://en.wikipedia.org/wiki/Object-oriented_programming) pattern\). In this page we will explain more about that.

:::tip

In nanos world we have 3 types of Classes (or structures): `Classes`, `Static Classes` and `Utility Classes`.

:::


## Classes

If you read our [Quick Start](/getting-started/quick-start.mdx) guide, you noticed we were spawning entities in the following format:

```lua showLineNumbers
-- Spawning an entity with a Constructor
local my_entity = Entity()

-- Interacting with the entity with it's methods
my_entity:MyFunction()
```

:::tip

Access to **Entities / Spawned Objects** **Methods** are made with **`:`**.

:::

This is how **OOP** works! You create objects and call functions/catch events on that object. Unlike other scripting games which have tons of global functions and events to interact with entities, nanos world scripting is a **modern approach** to **modern programming**.


### Base Classes

Under the hood, nanos world Classes follow an [Inheritance Pattern](https://en.wikipedia.org/wiki/Inheritance_%28object-oriented_programming%29), which means we have base parent classes, and it's children which "inherits" all functions, events and properties from them. You will notice that all Classes that can be spawned in the world are <Classes.Actor />, for example in <Classes.Character /> and <Classes.Prop /> it is possible to call the function: <MethodReference type="Class" class_name="Actor" method="SetLocation" is_base />.

:::info

The <Classes.Actor /> is a very important class in nanos world. It contains the most of methods which are shared through all Classes we have, and also **Static Methods** to get and retrieve entities directly.

:::


### Spawning Entities

Spawning entities in nanos world is extremely easy and straightforward, let's say we want to spawn a Character:

```lua title="Server/Index.lua"
local my_character = Character()
```

:::tip

Each Class will contain it's own **Constructor**, **Properties**, **Methods** and **Events**.

Check all Classes that nanos world provides in the sidebar **SCRIPTING REFERENCE -> Classes** item.

:::

:::info

Keep in mind that some Classes can only be spawned in the **Server**, others can only be spawned in the **Client**.

:::


### Destroying Entities

All classes (but Player) allow you to destroy them with the method <MethodReference type="Class" class_name="Entity" method="Destroy" is_base />:

```lua title="Server/Index.lua"
my_character:Destroy()
```

:::info

Destroying an Entity will trigger the event <EventReference type="Class" class_name="Entity" event="Destroy" is_base /> and also will automatically detach all attached entities it had attached with <MethodReference type="Class" class_name="Actor" method="AttachTo" is_base />¹.

¹*If you attached entities with `lifespan_when_detached` parameter other than `-1`, all attached entities will be destroyed as well 😉*.

:::


## Static Classes

Static Classes in nanos world are Classes which you cannot Spawn. Instead you can use it's methods directly with `.`.

For example, if you want to interact with Sun/Sky/Weather, you will need the <StaticClasses.Sky /> Static Class:

```lua title="Client/Index.lua"
-- Makes it 9:25 AM
Sky.SetTimeOfDay(9, 25)
```

:::tip

Access to **Static Classes / Static Methods** are made with **`.`**.

:::


## Utility Classes

Besides Classes and Static Classes, we have the **Utility Classes**! Those are mostly structs used in nanos world API such as Vector, Rotator, Color, JSON and some others.

:::tip

All Utility Classes are Open Sourced at [https://github.com/nanos-world/nanos-world-lua-lib](https://github.com/nanos-world/nanos-world-lua-lib). Feel free to push merge requests and suggest changes!

:::
