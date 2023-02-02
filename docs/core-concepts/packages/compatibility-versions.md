---
title: Compatibility Versions
description: How to update your packages to the new Compatibility Versions
tags: [scripting, migration]
---

How to update your packages to the new Compatibility Versions


The Compatibility Version is meant to assure your packages will not break in future breaking changes updates.

It works by forcing that package to run code in a compatibility mode, meaning that breaking changes will keep working as the way it was before. Example:

Let's say you have this code running right now:

```lua
-- Make an asynchronous HTTP request
HTTP.Request("https://api.nanos.world/", "store/v1/packages/halloween", "GET", "", "application/json", false, {}, function(status, data)
    -- Do something with my data
end)
```

And then, in the hypothetical update 9.99 the API changes and make `HTTP.RequestSync` to become `HTTP.Request` and `HTTP.Request` to become `HTTP.RequestAsync`. I.e. you need to update your code to use `HTTP.RequestAsync` now, this is a breaking change as the new functions uses the same name as before.

With compatibility version, your code can keep working as it was before this update, for that, in your Package.toml you just need to make sure it's `compatibility_version` is set to a version lower than `9.99` (i.e. `9.98`).

:::tip

The Compatibility Mode is a feature that aims to keep old and unmaintained packages/game-modes to keep working for a longer time. But from time to time all the deprecated compatibility modes will be removed from the codebase. So always keep your packages up-to-date!

:::


## All Updates

To use the following features, you must update your Package's `compatibility_version` setting in the Package.toml to at least that version (exact that version or bigger).


### Version `1.22`

In version 1.22 we introduced the concept of [Compatibility Version](/docs/next/core-concepts/packages/packages-guide#compatibility-version). Besides that, we've got just one breaking change:


#### Events.Subscribe

`Events.Subscribe` now only subscribes to local events (ones called as **Events.Call**). If you want to subscribe to remote events (ones called as **Events.CallRemote** or **Events.BroadcastRemote**), please use `Events.SubscribeRemote`.

In compatibility mode (i.e. setting it to `1.21` or below) `Events.Subscribe` still subscribes for both Local and Remote events.


### Version `1.29`


#### HTTP

Before `HTTP.Select` was an async method, and since 1.29 it works as a Sync method, not having the callback parameter anymore.


#### Database

Before `Database:Execute` was an async method, and since 1.29 it works as a Sync method, not having the callback parameter anymore.


### Version `1.33`


#### Input.GetScriptingKeyBindings and Input.GetGameKeyBindings

Before those methods returned a table in the format (example):

```lua
-- KeyBinding = Key
{
	"Jump" = "Spacebar",
	"Crouch" = "Control",
	"Fire" = "LeftMouse",
}
```

Now it returns in the format (example):

```lua
-- KeyBinding = { Key, Key, ... }
{
	"Jump" = { "Spacebar", "O" },
	"Crouch" = { "Control" },
	"Fire" = { "LeftMouse", "Return" },
}
```