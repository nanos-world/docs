---
title: Dimensions
description: All you need to know about Dimensions
tags: [scripting]
---


All you need to know about Dimensions

![](/img/docs/dimensions.webp)

## What is a Dimension

Dimensions are separated worlds in the client-side, where players and actors are separated. In nanos world, they are represented by numbers. It is possible to have up to 65.535 different dimensions.

By default all players and entities are in the dimension `1`. By moving a Player to another dimension, all entities that are not from that dimension will be destroyed to that player, and all entities in the new dimension will spawn for him.


## How to use

To send an actor to another dimension, the API is very simple:

```lua
actor:SetDimension(number)
```

Also we've got a new method to facilitate the use of events, this will be sent to all players in that dimension:

```lua
Events.BroadcastRemoteDimension(dimension, event_name, params...)
```

:::note

If you send an entity through remote events that is not in the same dimension as the Player, the argument will be replaced by `nil` and a warning will show up.

:::


## Actor Hierarchy

By sending an entity, their "children" will be moved to that dimension too, for example:

- When sending an **Actor**, all the other attached **Actors** will move as well.
- When sending a **Player**, the **Character** will move too.
- When sending a **Character**, the **Player** is not moved together, but the grabbing **Weapons** or **Props** (and attached **Actors**) will.
- When sending a **Vehicle**, all **Characters** will leave the vehicle (this will be improved soon™).