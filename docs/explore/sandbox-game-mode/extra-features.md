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

![](/img/docs/tutorials/sandbox/undo.webp)

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

By calling `SpawnHistory.AddItemToHistory()`, a value `"SpawnedBy"` will be set on the entity, it will be synced with all clients, and contain the following data:

```lua
{
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


## PersistentConfig

We created a system to help persisting Tool Gun (or any other custom) configs when using them. Our tool guns use them to persist changed configs from Context Menu between sessions:

```lua title="Client/Index.lua"
-- Saves a config
function PersistentConfigSystem.SaveConfig(class_name, config, value)

-- Gets a config
function PersistentConfigSystem.GetConfig(class_name, config_name)
```


## EntityInput

![](/img/docs/tutorials/sandbox/entity-input-binding.webp)

This is a system used by our Entities to bind custom Inputs to actions on entities:

```lua title="Client/Index.lua"
-- Adds an input binding to an entity
function EntityInputSystem.AddEntityBinding(entity, name, binding, callback_pressed, callback_released)

-- Removes an input binding from an entity
function EntityInputSystem.RemoveEntityBinding(entity, name)
```

Internally it works automatically by just defining `input_bindings` to any entity class you want, this will expose to Context Menu when selecting the entity, the input bindings to be set:

```lua title="Client/MyEntity.lua"
-- Input Bindings for this Entity
Thruster.input_bindings = {
	{
		label = "activate / deactivate",
		callback_pressed = function(entity)
			entity:CallRemoteEvent("SetActive", true)
		end,
		callback_released = function(entity)
			entity:CallRemoteEvent("SetActive", false)
		end,
	},
	{
		label = "toggle",
		callback_pressed = function(entity)
			entity:CallRemoteEvent("SetActive", not entity:GetValue("Active"))
		end,
	},
}