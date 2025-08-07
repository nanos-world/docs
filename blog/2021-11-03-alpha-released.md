---
slug: alpha-released
title: "Oct: Alpha released!"
authors: gtnardy
tags: [updates]
---


![](/img/blog/alpha/alpha-release.jpg)

We proudly present...

...The big long list of Alpha updates!

<!--truncate-->



## Initial Thoughts

Thank you everyone for all the support this last month! Our community has grown a lot and it's lovely to see how nice and friendly it is becoming 🥰!

The Playtest session in the Sunday was amazing! We were able to test the stability of the game very well. I can say that most of the crashes we had were related to external integration issues (WebUI or Unreal itself), which shows a great maturity of our Core system. I think about doing it more often, it was a lot of fun playing Halloween mode and testing the community game-modes!

From now on, all updates will start to be versioned (finally!), small updates/non break-changes will get a PATCH version and break-changing will get a MINOR version.


:::note

The following changelog contains all features since last officially announced release 0.73.0. Many of the next items were already in the bleeding-edge branch.

:::

<iframe className="steam-widget" src="https://store.steampowered.com/widget/1841660/" frameBorder="0" width="620" height="190" loading="lazy"></iframe>


## Materials

![](/img/blog/alpha/material.jpg)

Now nanos world supports Materials Assets! 🎨

This means you can configure your own materials in your Assets.toml and reference them using [Paintable](/docs/scripting-reference/classes/base-classes/paintable) methods!

The function `:SetDefaultMaterial()` has been replaced with `:SetMaterial()`. You can see a list of all built-in Materials read to use [here](/docs/next/assets-modding/default-asset-pack/default-materials).

Also it is now possible to get the WebUI material and set it to any surface (read more below)!

Some existing methods are suffering a rework due that, e.g. [Pickables](/docs/scripting-reference/classes/base-classes/pickable) got a new method `:SetCrosshairMaterial()`, so you can set the Crosshair from a Material (and not from a predefined list anymore), also all old Crosshair have been converted into materials which you can find [here](/docs/scripting-reference/classes/base-classes/pickable#list-of-crosshairs-materials-included-in-default-asset-pack).


## Improved WebUI

![](/img/blog/alpha/webui.jpg)

The [WebUI](/docs/scripting-reference/classes/web-ui) received several improvements, including the ability to run HTML5 Audio and Videos! 📽

:::caution

We are using a Beta version of Ultralight, which supports Audio and Video, crashes **WILL** happen, also the Audio is currently 2D only. Ultralight is working on a solution so I can implement 3D audio.

:::

The **WebUI** constructor received some new parameters: **is_transparent**, **auto_resize**, **width** and **height**. Width and Height will only be used if Auto Resize is **OFF**, this is useful if you want to spawn a WebUI to use as Material to any surface (and don't want it to be the size of the screen).

Also it received new methods: [:SetFreeze()](/docs/scripting-reference/classes/web-ui#setfreeze), [:Resize()](/docs/scripting-reference/classes/web-ui#resize) and [:SetAutoResize()](/docs/scripting-reference/classes/web-ui#setautoresize).

A new Searcher has been added onto it, improving how it can load your .html files, they are now looked in the following order:
1. Relative to `current-file-path/`
2. Relative to `current-package/Client/`
3. Relative to `current-package/`
4. Relative to `Packages/`

It is now possible to spawn a Material from a WebUI, which renders dynamic and automatically into **any** surface: `:SetMaterialFromWebUI()` (method from Actors).


## Actors

New additions for [Actors](/docs/scripting-reference/classes/base-classes/actor):

* Added new method for all actors: [:SetLifeSpan(time)](/docs/scripting-reference/classes/base-classes/actor#setlifespan) which will automatically destroy this actor after `time` seconds.
* Added new method for all actors: [:IsBeingDestroyed()](/docs/scripting-reference/classes/base-classes/actor#isbeingdestroyed) which will return if this actor is being destroyed (useful to check from inside other Events such as `Drop` or `Ungrab`).
* Added new parameter for all actors [:AttachTo()](/docs/scripting-reference/classes/base-classes/actor#attachto) method: `lifespan_when_detached`, which will destroy the actor after `time` seconds after it's detached.
* Now event [TakeDamage](/docs/scripting-reference/classes/base-classes/actor#takedamage) has a new argument: `causer` (the object/actor which caused the damage). Also added new damage types: `RunOverVehicle` and `RunOverProp`.
* Now event [Hit](/docs/scripting-reference/classes/base-classes/actor#hit) has new arguments: `impact_force`, `normal_impulse`, `impact_location` and `velocity`.
* Now [:SetLocation()](/docs/scripting-reference/classes/base-classes/actor#setlocation) will try to find the better spot to teleport the Actor (to avoid collisions).


## Character

![](/img/blog/alpha/character.jpg)

New additions for [Characters](/docs/scripting-reference/classes/character):

**Character Methods additions/improvements:**
* Added several new Getters from it's properties.
* Added [:SetDamageMultiplier()](/docs/scripting-reference/classes/character#setdamagemultiplier) change the damage multiplier depending on the bone damaged.
* Added [:SetHiddenBone()](/docs/scripting-reference/classes/character#sethiddenbone) to make invisible any part of the body.
* Added [:SetJumpZVelocity()](/docs/scripting-reference/classes/character#setjumpzvelocity) to make the character jump higher.
* Improved [:PlayAnimation()](/docs/scripting-reference/classes/character#playanimation) got new parameters (blend times, loop and play rate), and now it supports loading any type of animation (Montage or Sequence).
* Removed `:SetInitialLocation()`, it has been replaced with [:Respawn()](/docs/scripting-reference/classes/character#respawn).

**Character Events additions/improvements:**
* Added [AttemptEnterVehicle](/docs/scripting-reference/classes/character#attemptentervehicle) called when Character tries to enter a vehicle, returns false to prevent it.
* Added [AttemptLeaveVehicle](/docs/scripting-reference/classes/character#attemptleavevehicle) called when Character tries to leave a vehicle, returns false to prevent it.
* Added [AttemptReload](/docs/scripting-reference/classes/character#attemptreload) called when Character tries to reload it's weapon, returns false to prevent it.
* Added [Interact](/docs/scripting-reference/classes/character#interact) called when Characters tries to Pick Up a Pickable or Grab a Prop.
* Added [Highlight](/docs/scripting-reference/classes/character#highlight) called when Characters looks at a Prop or Pickable being able to pick up it.

Some Characters animations have been renamed from `AM_` to `A_` in the Default Asset Pack (as they are not Montages anymore). Also lots of new Animations have been added.


## Weapons

![](/img/blog/alpha/weapon.jpg)

New additions for [Weapons](/docs/scripting-reference/classes/weapon):

**Weapon Methods additions/improvements:**
* Added several new Getters from it's properties.
* Added [:SetRecoil()](/docs/scripting-reference/classes/weapon#setrecoil) how much the weapon recoils physically.
* Added [:SetWallbangSettings()](/docs/scripting-reference/classes/weapon#setwallbangsettings) configure if bullets wallbangs walls.
* Added [:SetAnimationFire()](/docs/scripting-reference/classes/weapon#setanimationfire) animation on Weapon Skeletal when firing.
* Added [:SetSoundFireLastBullets()](/docs/scripting-reference/classes/weapon#setsoundfirelastbullets) sound when `N` last bullets are remaining in the clip.
* Improved [:SetAnimationReload()](/docs/scripting-reference/classes/weapon#setanimationreload) now has `play_rate` parameter.

**Additional stuff:**
* Now weapons are hidden when Characters are driving.
* Added sounds of Shell Dropping & hitting the ground for the built-in Shell particles (this is a procedural and 100% precise sound 😉).
* Added sounds when picking up or dropping weapons, also it will slightly throw the weapon to the front when dropping it.


## Grenades

![](/img/blog/alpha/grenade.jpg)

All Properties from [Grenades](/docs/scripting-reference/classes/grenade) have been deprecated, now access must be done through Methods.

We've added a special Particle for Grenades `nanos-world::P_Grenade_Special` which will explode different particles depending on the ground the grenade is. I.e. will explode a "grass explosion" particle if grenade is over a grass surface, and a "water explosion" particle if it's under water. **Note:** This particle only works for Grenades.


## Sounds

![](/img/blog/alpha/sound.jpg)

New additions for [Sounds](/docs/scripting-reference/classes/sound):

Now it is possible to load `.ogg` sounds at runtime! You can store them in any Package or Asset Pack and load it using our new pattern for `SpecialPath` (`assets://asset-pack-name/path.ogg` or `package://package-name/path.ogg`).

Added `loop_mode` parameter to constructor (can loop any sound forever now).

Also, it is possible to pass `.ogg` using the SpecialPath in any Sound parameter.

**Sound Methods additions/improvements:**
* Added [:GetDuration()](/docs/scripting-reference/classes/sound#getduration).
* Improved [:FadeIn()](/docs/scripting-reference/classes/sound#fadein) and [:FadeOut()](/docs/scripting-reference/classes/sound#fadeout) parameters.


## Input

![](/img/blog/alpha/input.jpg)

Added a new class: [Input](/docs/scripting-reference/static-classes/input)!

Now you can control, create and customize KeyBindings in a proper way! Example:

```lua
-- Registers the binding_name 'SpawnMenu' with default key 'Q'
-- This will add 'SpawnMenu' to user KeyBinding Settings automatically
Input.Register("SpawnMenu", "Q")

-- Subscribes for Pressing the key
Input.Bind("SpawnMenu", InputEvent.Pressed, function()
    -- Opens the Spawn Menu
end)

-- Subscribes for Releasing the key
Input.Bind("SpawnMenu", InputEvent.Released, function()
    -- Closes the Spawn Menu
end)
```


## HTTP

![](/img/blog/alpha/http.jpg)

Added a new class: [HTTP](/docs/scripting-reference/static-classes/http)!

Now we have a proper standalone class for making HTTP requests. Is also features Async HTTP requests (and thread safe!)


## Performance Optimization

![](/img/blog/alpha/performance.jpg)

We have worked hard on performance techniques for Alpha update. Here's the highlights:

* Now Basic Structs [Vector](/docs/scripting-reference/structs/vector) and [Rotator](/docs/scripting-reference/structs/rotator) are automatically compressed when sending through the Network. Reducing it's size up to 90% in the best case! This was a great gain for network use.
* A new setting was added `Profiling` which you can enable with `--profiling` on server and in Settings on Client. This will log all the time elapsed to run operations/scripting events and some other stuff in the Console.
* Now HTTP requests (a.k.a. downloading files when joining a server) are automatically compressed, which may reduce the network usage when downloading big files!
* Now Actors which are very far or not on screen will be synchronized/updated half the time to improve performance. We still want to tweak it and make it more aggressive on some cases.
* The Assets Loading system have been reworked and is much faster now.
* Small [Props](/docs/scripting-reference/classes/prop) (radius < 200) will not collide with players or dynamic objects anymore. Also Bigger props will have CCD disabled by default (which drastically improved performance), this can be enabled in the Prop constructor.
* Now VOIP uses Steam system, which provides a great compression and also custom settings through Shift+Tab menu.
* Several improvements were made on our low-level Lua code to boost scripting performance.


## Server

New additions to [Server](/docs/scripting-reference/static-classes/server) static class:

* Added new console command: `map [MAP_NAME]` to change the game map, this will also reload all packages and reconnect all players (like restarting the server).
* Added new methods [Server.GetVersion()](/docs/scripting-reference/static-classes/server#getversion), [Server.GetIP()](/docs/scripting-reference/static-classes/server#getip), [Server.GetPort()](/docs/scripting-reference/static-classes/server#getport), [Server.GetQueryPort()](/docs/scripting-reference/static-classes/server#getqueryport) and several missing getters.


## Client

New additions to [Client](/docs/scripting-reference/static-classes/client) static class:

* New parameters have been added to [Client.SetCameraLocation()](/docs/scripting-reference/static-classes/client#setcameralocation) and [Client.SetCameraRotation()](/docs/scripting-reference/static-classes/client#setcamerarotation) to enable smooth movements with camera in a certain time.
* New methods for drawing debug shapes in 3D world: [Client.DrawDebug...()](/docs/scripting-reference/static-classes/client#drawdebug).
* Changed [Client.SetHighlight()](/docs/scripting-reference/static-classes/client#sethighlight) parameters, now it takes a Enum to define how the highlight will be.
* Added new method [Client.SetSteamRichPresence()](/docs/scripting-reference/static-classes/client#setsteamrichpresence) to customize the message in Steam Friends list.

Now when joining a server, a Progress Bar will be displayed in the Taskbar, and also it will Flash once the loading is done:

![](/img/blog/alpha/progress-taskbar.jpg)


## In-game Console

Now it is possible to access Server Console from within the game!

If you open it, 2 tabs will appear: **client** and **server**. You can read all server logs, and also input commands.

:::note

Not all logs will appear in there, only the ones outputted while you are connected to the server.

:::

![](/img/blog/alpha/console.jpg)


## Timer

New additions to [Timer](/docs/scripting-reference/static-classes/timer):

* Added new method: [Timer.Bind(timer_id, actor)](/docs/scripting-reference/static-classes/timer#bind) - this will associate a timer to an actor, when the actor is destroyed, this timer is destroyed too and will never be called.
* Added new method: [Timer.IsValid(timer_id)](/docs/scripting-reference/static-classes/timer#isvalid).


## CLI

* Now it is possible to download multiple Assets/Packages at once with [CLI](/docs/core-concepts/server-manual/command-line-interface), just separate them by spaces, e.g.: `cli assets install quaternius city-park`.


## Steam Achievements

![](/img/blog/alpha/achievements.jpg)

With Steam integration, we are making use of every feature possible it allows 😅!

And this includes the **Achievements**! We are counting on the support of a talented friend [Esther](https://www.instagram.com/estherhoffmann/) who is drawing the amazing arts for them!

Little by little we will be creating more achievements and releasing them! We also count on your ideas for more!


## Scripting Improvements

* Added new Searchers to [Package.Require()](/docs/scripting-reference/static-classes/package#require), we now currently support 5 searchers, which are looked in the following order:
    1. Relative to `current-file-path/`
    2. Relative to `current-package/Client/` or `current-package/Server/` *(depending on your side)*
    3. Relative to `current-package/Shared/`
    4. Relative to `current-package/`
    5. Relative to `Packages/`

* [Package.Require()](/docs/scripting-reference/static-classes/package#require) now can be called in runtime and at any moment.
* [Package.RequirePackage()](/docs/scripting-reference/static-classes/package#requirepackage) now will load a package as a library inside the current package, it means the package loaded will now be automatically sent to clients, and all paths it loads is relative to the package itself (and not to the one which is requiring it anymore).
* Verbose logs will now display the current thread ID.


## Renamed Default Packages

The default Packages `NanosWorldWeapons` and `NanosWorldVehicles` were renamed to `nanos-world-weapons` and `nanos-world-vehicles`, following the new correct pattern for Packages and Assets names. Including them now should be made like `Package.RequirePackage("nanos-world-weapons")`, the usage keeps the same (`NanosWorldWeapons.AK47()`).


## General Changes

* [Cable](/docs/scripting-reference/classes/cable) got new methods: `:GetAttachedStartTo()` and `:GetAttachedEndTo()` to get if it's attached at any end.
* [Player](/docs/scripting-reference/classes/player) got new methods: `:SetVOIPVolume()`, `:GetSteamID()`,
* [Pickables](/docs/scripting-reference/classes/base-classes/pickable) got new events: `ReleaseUse`, `PullUse` when Character pulls or releases its usage (i.e. trigger for weapons)
* Improved the way the interact trigger enables for [Pickables](/docs/scripting-reference/classes/base-classes/pickable) and [Props](/docs/scripting-reference/classes/prop).
* [Trigger](/docs/scripting-reference/classes/trigger) got new method: `:ForceOverlapChecking()` which will checks for overlaps in the game thread and immediately dispatch events.
* Added new methods for [Quaternions](/docs/scripting-reference/structs/quat) (+, -, Normalize).
* Added new method for generating a random [Rotator](/docs/scripting-reference/structs/rotator): `Rotator.Random()`.
* Added lots of new Sounds, Animations, Props, Meshes in the Default Asset Pack.
* Added Steam Login.
* All .config files had it's `tabs` replaced with `spaces`.
* `.GetPairs()` now only supports `pairs`.
* Added Resolutions graphic settings.
* Make Day button from In-game menu has been removed.
* Added new Splash Effects when Props or objects enter the Water.
* `:GetValue()` now has an additional parameter: `fallback` which will be returned if the value doesn't exist.
* Probably many other things that were being added and were forgotten 😜.


## Bug Fixes

* Fixed `World.SetFogDensity()` not working.
* Fixed `Client.SetCameraLocation` not working.
* Fixed `Actors.RotateTo()` not doing properly math.
* Fixed `StaticMesh.GetBounds()` not working.
* Fixed Cables methods being able to be called on client side.
* Fixed several **Character** properties not syncing.
* Fixed a crash when changing Map at runtime.
* Fixed Characters not reseting the life to `max_health` when Respawning.
* Fixed dead ragdolls still moving around (from `MoveTo()`).
* Fixed infinite recursion with `LogEntry` event.
* Fixed **Characters** Morph Targets not syncing.
* Fixed Discord custom integration not working sometimes.
* Fixed a crash when a player had no Steam Profile image.
* Fixed Server Announce checkbox being disabled when unchecked on New Game screen.
* Fixed a crash when destroying entities from inside `Interact` event.
* Fixed hell lot of other Crashes 💥. Thanks for the Crash Reports!
