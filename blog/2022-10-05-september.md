---
slug: september-2022
title: "2022 Sep: Dimensions!"
authors: gtnardy
tags: [updates]
image: /img/blog/2022-september/september-news.webp
---

**Dimensions!**

![](/img/blog/2022-september/september-news.webp)

<!--truncate-->

## Dimensions 🌌

![](/img/blog/2022-september/dimensions.webp)

Proudly I announce the implementation of one of the most requested features to be integrated into nanos world: **Dimensions**! 🥳

![](/img/blog/2022-september/dimensions-canny.webp)

:::note

In this initial version, bugs, desyncs and weird things can happen, please let me know immediately!

:::

Dimensions are separated worlds in the client-side, where players and actors are separated. By default all players and entities are in the dimension `1`. By moving a Player to another dimension, all entities that are not from that dimension will be destroyed to that player, and all entities in the new dimension will spawn for him.

The API is very simple:

```lua
actor:SetDimension(number)
```

By sending an entity, their "children" will move too, examples:

- When sending an **Actor**, all the other attached **Actors** will move as well.
- When sending a **Player**, the **Character** will move along.
- When sending a **Character**, the **Player** is not moved together. The **Weapons** or **Props** (and **attached**) will move.
- When sending a **Vehicle**, all passengers will also be sent.

I also added a new method to facilitate the use of events:

```lua
Events.BroadcastRemoteDimension(dimension, event_name, params...)
```

This event will be sent to all players in that dimension.

If you send an entity through remote events that is not in the same dimension as the Player, the argument will be replaced by `nil` and a warning will show up.


## New Aim Block Animations

I've reworked the way weapons get blocked when facing obstacles. Before it was switching the AimMode to unaimed causing a really bad effect and even moving the crosshair a little.

Now the weapon will bend procedurally and the AimMode won't change, improving a lot the game-play!

<video controls="true" allowfullscreen="true">
		<source src="/videos/blog/2022-september/aim-bend-01.webm" />
</video>

<video controls="true" allowfullscreen="true">
		<source src="/videos/blog/2022-september/aim-bend-02.webm" />
</video>


## Server Sync Values

Now it is possible to have global synced Values between Server and Client using `Server.SetValue()` method, with a new bool parameter `sync_on_clients`. Those values will exist on all clients through `Client.GetValue()` as usual.


## Blueprint Improvements

Our Blueprint functionalities got boosted!

### Event Dispatchers

![](/img/blog/2022-september/dispatcher.webp)

It is now possible to bind to Blueprint Event Dispatchers from Lua! Making the communication from Blueprint to Lua now possible!

```lua Client/index.lua
-- Spawns the Blueprint
local blueprint = Blueprint(Vector(), Rotator(), "my-asset-pack::BP_AwesomeBlueprint",)

-- Subscribes to a Blueprint Event Dispatcher
blueprint:BindBlueprintEventDispatcher("GorgeousDispatcher", function(self, arg1, arg2)
	-- arg1 is a string and arg2 is an integer
	Console.Log("Called from Blueprint!", arg1, arg2)
end)
```

You can find more examples at our new documentation page: [Blueprint Communication](/docs/next/getting-started/tutorials-and-examples/blueprint-communication)!


### Function Return Values

It is also now possible to retrieve return values in Lua from Blueprint Functions!


### Passing Actors through

And we can pass actors through parameters into and from Blueprints calls, they will be properly parsed into the correct entity when receiving or sending from Lua! E.g. You can create a Blueprint event which receives a `Character` or `Actor` as parameter, and pass it through Lua, it will be automatically parsed and marshalled to the correct Blueprint variable type!


## Scripting Events Variables

Now our internal variables use 8 bytes for passing floats and integers, allowing higher values from being passed through events (network ones too)!


## Tick Performance Boost

![](/img/blog/2022-september/tick-performance.webp)

I managed to improve a lot the performance when having thousands of entities spawned (most were caused by Level StaticMeshes. I implemented smart algorithms to improve when they will perform Tick calculations for certain entities based on distance and real need to tick an entity.

This improved the CPU usage in almost 10x in some cases!


## Client Side Network Authority

An experimental feature which has been added is the ability to allow methods of being called in the client-side if the player is the network authority of that entity.

For example now it is possible to call `TranslateTo`, `RotateTo`, `SetForce`, `AddImpulse`, `SetWeaponAimMode` and `SetViewMode` from client side! Which can improve a lot of Sandbox Physics Gun behavior for example!

![](/img/blog/2022-september/physics-gun.webp)


## WebUI Native Tables

Now you don't need to `JSON.stringify()` tables to pass to WebUI events anymore! You can pass them directly as the arguments and it will be natively parsed, which means much more performance when passing big tables around, and also you don't need to worry about stringifying or parsing them anymore as they already come as native table as the parameter!


## File JSON Parser

Our File entity got a new method to natively load a JSON file and get it's table into Lua:

```lua
File.ReadJSONAsync()
File.ReadJSON()
```

And we've got a big performance improvement compared to reading it as raw string and using the Lua JSON library:

```
Benchmark comparison loadinga big JSON file (9.5 MB)
Parsing it with Lua JSON library: took 9964ms.
Parsing it with Native JSON parser: took 1057ms.
```


## CEF Improvements

### Loading Screen

I finished integrating CEF into the Loading Screen and now Ultralight has been completely removed from nanos world.

Also we got a new feature for Loading Screen: the ability to stop the Main Menu music! For that you need to call an event from JS:

```js
Events.Call("StopMenuMusic");
```

### Better Error Handling

The error handling has been improved as well, before we didn't get feedback of errors when loading invalid files and now we have.


## Character Blend Spaces

Now it is possible to import custom Locomotion Blend Spaces to your Characters. You can override Standing, Crouching and Proning animations. And also set the transition animation between them!

<video controls="true" allowfullscreen="true">
		<source src="/videos/docs/assets-modding/character-locomotion-01.webm" />
</video>

We've got new API methods for that:

```lua
Character.SetAnimationIdleWalkRunStanding(anim_path, enable_tip)
Character.SetAnimationIdleWalkRunCrouching(anim_path, enable_tip)
Character.SetAnimationIdleWalkRunProning(anim_path)

Character.SetAnimationsTransitionStandingCrouching(anim_standing_to_crouching, anim_crouching_to_standing)
Character.SetAnimationsTransitionCrouchingProning(anim_crouching_to_proning, anim_proning_to_crouching)
```

You can find more examples at our new documentation page: [Character Locomotion Animations](/docs/next/assets-modding/creating-assets/animations/characters/character-locomotion-animations)!


## Precaching Assets

Now it is possible to precache assets to make them load in Loading Screen (avoiding FPS spikes during game), for that you can just call:

```lua
Assets.Precache(asset_path)
```

:::note

All Assets are already precached automatically once referenced, so this new method is useful when you need to precache Assets which will be used in the future or loaded dynamically.

:::


## Better Wallbang

Our firing wallbangs were not working properly and I decided to rework it. Now wallbanging water reaches 10x further and causes more damage (before it was not possible to penetrate Water with bullets).

We've also got a new Debug settings to draw Weapon's bullet traces in the world, very useful for debugging:

![](/img/blog/2022-september/wallbang.webp)


## Menu Improvements

### Framerate

Our Main Menu got some improvements, we FPS limit has been hardcoded increased to 120 (was 60) and during loading to 60 (was 30), it is still not great as I want to limit it to monitor refresh rate automatically.


### Labels

Our tabs got new labels to improve the User Experience, mainly when creating a New Game. Now it is possible to know how many dependencies you have selected without needing to enter that menus:


### New Game

Also in the New Game menu, now all configuration (including dependencies) are loaded from disk's Config.toml file. So we don't need to keep reconfiguring it every time when starting a server!

![](/img/blog/2022-september/new-game.webp)


## Debug Settings

We got 3 new debug settings:

- `Visualize Bullet Traces`
- `Visualize Vehicle Doors`
- `Visualize Character Capsule`

![](/img/blog/2022-september/character-capsule.webp)


## Miscellaneous Improvements

Some other improvements and small new features we've got during this month:

- Vehicle now receives `TakeDamage` event!
- It is now possible to toggle a bunch of SceneCapture rendering features with `SetShowFlags()` new method.
- Our console got several improvements on client side.
- It is now possible to draw Materials, WebUI and SceneCapture into `Canvas` (experimental)!
- I implemented in the scripting API a way to have multiple return values, so some methods will start getting that!
- Now Databases will return an error parameter if anything failed.
- All Character interaction (grab Prop, pickup Weapons, enter vehicles) were reworked, and now the traces are 100% precise when interacting with big objects. Also I striped the extra components needed for that, which will improve performance with too many interactable objects spawned.


## Conclusion

We had many significant advances this month! Blueprint improvements were a great achievement for me because I had to do a monstrous reverse engineering on Unreal and several memory magic to intercept events.

The addition of dimensions was a very much requested feature and greatly expands the limits for game creation!

Performance improvements are always very welcome and I love to make them, we still have a lot of room for further improvements!

Furthermore, I devoted some time to work on some big refactoring internally, some parts of the code were starting to get dumped and messy, and they are not using the most modern C++20 techniques. Sometimes these refactoring are great to take the control back over our own code. 😄

In the next updates, I plan to reorganize the API (as discussed in our last #poll), we added methods which started accumulating in Static Classes without much cohesion between them. I intend to separate them and create new static classes for each, making the understanding and search for methods in the API much easier.

Another improvement I started to implement is the possibility of multiple constructors for entities. Which will allow we to have smaller ways to spawn the entities. This will be very useful if we want to spawn a Sound 2D or 3D for example (2D sound does not need the location parameter).

This is all this month, I see you next month with many more improvements and news! Thank you so much! 💖