---
title: Context Menu
description: How to extend and use Sandbox Context Menu
tags: [tutorial-example, scripting, assets]
sidebar_position: 3
---

How to extend and use Sandbox Context Menu.


![](/img/docs/tutorials/context-menu.webp)

The Context Menu is a menu inside the Sandbox game-mode that provides run-time settings like tweaking the Sun Light or Respawning. It is accessed by the default key `C` and is toggled ON/OFF by pressing.

It is possible to add/remove settings from the Context Menu directly through Lua!

:::tip

You can see the source code of the Context Menu in the Sandbox [GitHub](https://github.com/nanos-world/nanos-world-sandbox/blob/master/Client/ContextMenu.lua).

:::


## Adding new Entries

```lua title="Client/Index.lua"
-- Adds new items to the Context Menu
--  It can be called multiple times with the same ID to append more items to the same category
---@param id string             Unique ID used to identify this category
---@param title string          Category title
---@param items table           Table of items
function Sandbox.ContextMenu.AddItems(id, title, items)
```

The `items` parameter is a list of tables with the format for each `type`:

### `checkbox`

```lua
{
	id = "id-of-item",
	type = "checkbox",
	label = "my check box",
	callback = function(value)
		Console.Log("Checkbox value changed to: " .. value)
	end
},
```


### `range`

```lua
{
	id = "id-of-item",
	type = "range",
	label = "slide me!",
	min = 0,
	max = 1440,
	auto_update_label = false,
	value = 720,
	callback = function(value)
		Console.Log("Range value changed to: " .. value)
	end
},
```


### `button`

```lua
{
	id = "id-of-item",
	type = "button",
	label = "press me",
	callback = function()
		Console.Log("Button pressed!")
	end
},
```


### `select_image`

```lua
{
	id = "id-of-item",
	type = "select_image",
	label = "select the image",
	options = {
		{ id = "id-opt-01", name = "Opt 01", image = "package://your-package/01.jpg" },
		{ id = "id-opt-02", name = "Opt 02", image = "package://your-package/02.jpg" },
	},
	value = function()
		return "id-opt-1"
	end,
	callback = function(value)
		Console.Log("Select Image changed to: " .. value)
	end
}
```


### `select`

```lua
{
	id = "id-of-item",
	type = "select",
	label = "select the option",
	options = {
		{ id = "id-opt-01", name = "Opt 01" },
		{ id = "id-opt-02", name = "Opt 02" },
	},
	value = "id-opt-1",
	callback = function(value)
		Console.Log("Select changed to: " .. value)
	end
}
```


### `color`

```lua
{
	id = "id-of-item",
	type = "color",
	label = "select the color",
	value = function()
		return my_current_color:ToHex(false)
	end,
	callback = function(value)
		Console.Log("Color changed to: " .. value)
	end
},
```

:::tip

The `value` element can be either a direct value, or a function to be dynamically fetched when the entry is added to the Context Menu!

:::


## Removing Entries

```lua title="Client/Index.lua"
-- Removes the items from the Context Menu
---@param id string             Unique ID used to identify this category
function Sandbox.ContextMenu.RemoveItems(id)
```


## Adding Entries to an Entity/Tool Gun

Custom Entities and <Classes.Pickable /> (e.g. <Classes.Weapon />) have the ability to have custom Context Menu entries shown automatically when they are selected or picked up.

### When selecting an Entity

To add entries when an entity is selected, you need to define the `selected_context_menu_items` property on the Class of the Entity, with the same format as the `items` parameter of the `AddItems` function.

You can use the current selected entity set in `Sandbox.ContextMenu.selected_entity` to dynamically get/set values related to the selected entity in the Context Menu entries, for example:

```lua title="Client/CustomEntity.lua"
MyEntityClass.selected_context_menu_items = {
	{
		id = "my_entity_input",
		type = "text",
		label = "text",
		placeholder = "enter the text",
		callback = function(value)
			Sandbox.ContextMenu.selected_entity:CallRemoteEvent("SetMyValue", value)
		end,
		value = function()
			return Sandbox.ContextMenu.selected_entity:GetValue("MyValue")
		end,
	}
}
```

### When picking up an Entity

You can also define custom entries for <Classes.Pickable /> classes, that will automatically show when picking up them. To do that, you need to define the `picked_context_menu_items` property on the Class of the Pickable:

```lua title="Client/CustomPickable.lua"
MyGun.picked_context_menu_items = {
	{
		id = "my_gun_value",
		type = "range",
		label = "my value",
		min = 0,
		max = 100,
		auto_update_label = true,
		callback = function(value)
			MyGun.my_value = value
		end,
		value = function()
			return MyGun.my_value
		end
	}
}
```


## Opening/Closing

```lua title="Client/Index.lua"
-- Opens the Context Menu
function Sandbox.ContextMenu.Open()

-- Closes the Context Menu
function Sandbox.ContextMenu.Close()
```


## Examples

You can find examples and how it works deeply at the [ContextMenu.lua](https://github.com/nanos-world/nanos-world-sandbox/blob/master/Client/ContextMenu.lua) file.

Also, you can see a working example of dynamically adding an entry to the Context Menu in the [BallonGun](https://github.com/nanos-world/nanos-world-sandbox/tree/master/Client/Tools/BalloonGun.lua).