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

```lua
-- Adds new items to the Context Menu
---@param id string             Unique ID used to identify this category
---@param title string          Category title
---@param items table           Table of items
function ContextMenu.AddItem(id, title, items)
```

The `items` parameter is a list of tables with the format for each `type`:

### `checkbox`

```lua
{
	id = "id-of-item",
	type = "checkbox",
	label = "my check box",
	callback_event = "ContextMenu_MyCheckboxSelected"
},
```


### `range`

```lua
{
	id = "id-of-item",
	type = "range",
	label = "slide me!",
	callback_event = "ContextMenu_MyRangeChanged"
	min = 0,
	max = 1440,
	value = 720,
	auto_update_label = false,
},
```


### `button`

```lua
{
	id = "id-of-item",
	type = "button",
	label = "press me",
	callback_event = "ContextMenu_MyButtonPressed"
},
```


### `select_image`

```lua
{
	id = "id-of-item",
	type = "select_image",
	label = "select the image",
	callback_event = "SelectBalloonAsset",
	selected = "id-opt-1",
	options = {
		{ id = "id-opt-01", name = "Opt 01", image = "package://your-package/01.jpg" },
		{ id = "id-opt-02", name = "Opt 02", image = "package://your-package/02.jpg" },
	}
}
```


### `select`

```lua
{
	id = "id-of-item",
	type = "select",
	label = "select the option",
	callback_event = "SelectDropDownOption",
	selected = "id-opt-1",
	options = {
		{ id = "id-opt-01", name = "Opt 01" },
		{ id = "id-opt-02", name = "Opt 02" },
	}
}
```


### `color`

```lua
{
	id = "id-of-item",
	type = "color",
	label = "selec the color",
	callback_event = "ContextMenu_MyButtonPressed",
	value = Color.RED:ToHex(false)
},
```


## Removing Entries

```lua
-- Removes the items from the Context Menu
---@param id string             Unique ID used to identify this category
function ContextMenu.RemoveItems(id)
```


## Examples

You can find examples and how it works deeply at the [ContexMenu.lua](https://github.com/nanos-world/nanos-world-sandbox/blob/master/Client/ContextMenu.lua) file.

Also, you can see a working example of dynamically adding an entry to the Context Menu in the [BallonGun](https://github.com/nanos-world/nanos-world-sandbox/tree/master/Client/Tools/BalloonGun.lua).