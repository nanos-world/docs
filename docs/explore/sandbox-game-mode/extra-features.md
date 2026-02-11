---
title: Extra Features
description: Some extra features and concepts of the Sandbox Game Mode
tags: [tutorial-example, scripting, assets]
---

Some extra features and concepts of the Sandbox Game Mode

The Sandbox Game Mode also provides several other sub-systems that can be used and extended through scripting, such as:


## Sandbox WebUI

You can directly access the Sandbox WebUI through `Sandbox.HUD` variable.


## Tutorials

![](/img/blog/2026-january/sandbox-tutorials.webp)

The Tutorials UI now can display a title, a short description and also keys. It is used automatically by the Tool Gun system to display instructions on how to use the current equipped tool.

You can also use it on your own packages to provide instructions to the players. Check the exposed methods below:

```lua title="Client/Index.lua"
-- Shows the Tutorials UI
---@param title string             Tutorials title
---@param description string       Description
---@param keys_data table          Table of keys in the format
---@                               { { key = "KeyName", description = "What it does" }, ... }
function Sandbox.Tutorials.Show(title, description, keys_data)

-- Hides the Tutorials UI
function Sandbox.Tutorials.Hide()
```


## SpawnHistory

This is a Server side system that keeps track of all the spawned items by each player. It also works by appending information to spawned items, so you can check who (and when) spawned a specific item.

You can all those functions server-side to add an item to a Player's history, so he can undo it by pressing `X`.

```lua title="Server/Index.lua"
-- Helper to add an item to the history of a player
function Sandbox.SpawnHistory.AddItemToHistory(player, item)

-- Destroys the last item in the history of a player, if any, and returns true, otherwise returns false
function Sandbox.SpawnHistory.DeleteItemFromHistory(player, index)

-- Helper to update an item ownership data
--  I.e. in cases an item gets modified and we need to update the new owner
function Sandbox.SpawnHistory.UpdateItemOwnership(player, item)
```

:::tip

By calling `AddItemToHistory()`, a value `"SpawnedBy"` will be set on the entity, it will be synced with all clients, and contain the following data:

```lua
{
	player, -- Player entity (if it's still playing)
	player_name, -- Player name
	player_steam_id, -- Player Steam ID
	time, -- Time that it was spawned
}
```

:::

## Notifications

Although we already have a notifications system built-in in game (<MethodReference type="StaticClass" class_name="Client" method="ShowNotification" show_class_name is_static />), the Sandbox provides a more advanced one that allows you to display "tutorials-like" notifications that are only displayed once:


```lua title="Client/Index.lua"
-- Adds the Notification on the Screen
---@param type NotificationType		Type of the notification to display
---@param id string					Unique ID used to store if the notification was already displayed to the player
---@param message string			The message to display
---@param duration number			Duration in seconds of the notification
---@param delay number				Time in seconds to wait until display the notification
---@param force? boolean			To force it to be displayed regardless if it was already displayed before
function Sandbox.Notifications.Add(type, id, message, duration, delay, force)
```