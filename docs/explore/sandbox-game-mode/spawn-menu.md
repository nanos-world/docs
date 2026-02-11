---
title: Spawn Menu
description: How to extend and use Sandbox Spawn Menu
tags: [tutorial-example, scripting, assets]
sidebar_position: 1
---

How to extend and use Sandbox Spawn Menu.


![](/img/docs/tutorials/spawn-menu.webp)

The Spawn Menu is a menu inside the Sandbox game-mode that provides ability to spawn **Props**, **Entities**, **Weapons**, **Tools** & etc in an easy and quick way. It is accessed by the default key `Q` and stays visible while pressed.

This menu (as well as the entire game-mode) is completely made through scripting, meaning it is possible to completely customize it with Lua and HTML/JS/CSS.

It has several pre-defined [Tabs](#tabs) (Props, Entities, Weapons, etc), but you can add more through Lua. Each tab has one or more [Categories](#categories) to organize the items. Like tabs, categories can also be easily extended through Lua.

:::tip

Most of the methods mentioned in this page are open sourced on the Sandbox GitHub repository, in the file **SpawnMenu.lua** (see on GitHub: [Server](https://github.com/nanos-world/nanos-world-sandbox/blob/master/Server/SpawnMenu.lua) & [Client](https://github.com/nanos-world/nanos-world-sandbox/blob/master/Client/SpawnMenu.lua)).

:::


## Items

Items are entries in the spawn menu that can be clicked to spawn some item or object. They must be defined on both Client and Server side to display on Spawn Menu and to be able to spawn correctly.


### Adding Items Automatically

Most of the tabs provide ways to automatically adds items to Spawn Menu. For that you need to create new Classes inheriting from Base Classes and add some specific attributes to your custom class.

The Spawn Menu iterates all inherited Classes registered and adds them to it automatically (check [Tabs](#tabs) section to see which Classes are added automatically to the Spawn Menu).

You just need to add the following properties to your Class when Inheriting it to make it display properly on Spawn Menu: `name`, `image` and `category`:

```lua showLineNumbers title="Client/Index.lua"
-- Inherits from Weapon defining custom values which will be read from Spawn Menu
Weapon.Inherit("AwesomeGun", {
	name = "Awesome Gun",
	image = "assets://nanos-world/Thumbnails/SK_FlareGun.jpg",
	category = "special"
})
```

This way your AwesomeGun will show up in the `weapons` Tab, under `special` Category with the image provided! On Server side you don't need to define any custom property to make it work 😉.

:::tip

You can check [default-weapons](https://github.com/nanos-world/nanos-world-weapons/blob/master/Shared/Index.lua), [default-vehicles](https://github.com/nanos-world/nanos-world-vehicles/blob/master/Shared/Index.lua) or [ts-fireworks-tools](https://github.com/gtnardy/nanos-world-ts-fireworks) as examples!

:::


### Adding Items Manually

Some classes like Weapons, Character and Tools are automatically displayed in the SpawnMenu just by being inherited from that. But you can manually add items using the following exposed methods:

:::info

You must call SpawnMenu.AddItem from both client and server side. Each side has it's own parameters.

:::

#### Client Side

On the Client side, we define how the Item will be displayed in the Spawn Menu, including it's label, tab, category and image.

```lua
-- Adds a new item to the Spawn Menu
---@param tab_id string         The tab to display this item
---@param id string             Unique ID used to identify this item
---@param name string           Display name
---@param image string          Image path
---@param category_id? string   The category of this item
function Sandbox.SpawnMenu.AddItem(tab_id, id, name, image, category_id?)
```

Example:

```lua title="your-package/Client/Index.lua" showLineNumbers
-- Example adding an Incredible Tool to spawn Menu (client side)
Sandbox.SpawnMenu.AddItem(
    "tools",			-- tab id
    "IncredibleTool",	-- unique id of the item
    "Incredible Tool",	-- name/label
    "assets://nanos-world/Thumbnails/SK_Blaster.jpg", -- image path
    nil					-- no category, will display at 'uncategorized'
)
```


#### Server Side

On the Server side, we can define how the item will be spawned, here we can create the "spawn function" for this item.

```lua
-- Adds a new item to the Spawn Menu
---@param tab string                Tab of this item
---@param id string                 Unique ID used to identify this item
---@param spawn_function function	Spawn function
function Sandbox.SpawnMenu.AddItem(tab, id, spawn_function)
```

Example:

```lua title="your-package/Server/Index.lua" showLineNumbers
-- Function which spawns an entity
-- The parameters location, rotation, tab and id will be automatically
-- passed by the Spawn Menu
function SpawnMyIncredibleEntity(location, rotation, tab, id)
    local my_stuff = MyEntity(location, rotation)

    -- configure stuff...
	-- my_stuff:SetSomething(...)

	-- We must return the spawned item from this function
    return my_stuff
end

Package.Subscribe("Load", function()
    -- Adds this to spawn Menu (server side)
   	Sandbox.SpawnMenu.AddItem(
		"tools",				-- tab id
		"IncredibleEntity",		-- item id
		SpawnMyIncredibleEntity	-- function which spawns and returns the item
	)
end)
```


## Tabs

![](/img/docs/tutorials/spawn-menu-tabs.webp)

The Spawn Menu has the following tabs by default: [`props`](#props), [`entities`](#entities), [`weapons`](#weapons), [`vehicles`](#vehicles), [`tools`](#tools) and [`npcs`](#npcs).


### `props`

By default, all StaticMeshes defined in the loaded Asset Packs will automatically appear on this tab and it's thumbnails will be loaded from the `Thumbnails/` folder at the root of the Asset Pack, if it exists.


### `entities`

All Classes inherited from <Classes.Prop /> will appear in the entities tab by default.

:::note

We mostly use Prop as default as it's a common base class to entities, but you can create any entity inherited from any class and add to the Spawn Menu manually as explained in [Adding Items Manually](#adding-items-manually) section.

:::


### `weapons`

All Classes inherited from <Classes.Weapon />, <Classes.Grenade /> and <Classes.Melee /> will appear in the weapons tab by default.


### `vehicles`

All Classes inherited from <Classes.VehicleWheeled /> and <Classes.VehicleWater /> will appear in the vehicles tab by default.


### `tools`

All Classes inherited from `ToolGun` will appear in the tools tab by default. See [Custom Tools](tool-guns) to know how to create your own Tool Guns and make them appear in this Tab.


### `npcs`

All Classes inherited from <Classes.Character /> and <Classes.CharacterSimple /> will appear in the character tab by default.


### Adding new Tabs

It is possible to add custom tabs to the Spawn Menu, for that just call this **client-side** method from your Package:

```lua
---@param id string				Unique ID used to identify this tab
---@param label string			Display text
---@param image string			Image path of the tab
function Sandbox.SpawnMenu.AddTab(id, label, image)
```

Example:

```lua showLineNumbers title="your-package/Client/Index.lua"
Package.Subscribe("Load", function()
    -- Adds a new tab
    Sandbox.SpawnMenu.AddTab(
        "consumables",
        "consumables",
        "package://your-package/food.png"
    )
end)
```


## Categories

![](/img/docs/tutorials/spawn-menu-categories.webp)

Each [Tab](#tab) has it's own **Categories**. By default they have the following ones:

- Tab **props**: `basic`, `appliances`, `construction`, `furniture`, `funny`, `tools`, `food`, `street`, `nature`.
- Tab **entities**: `devices`, `display`, `objects`, `logic`.
- Tab **weapons**: `rifles`, `smgs`, `pistols`, `shotguns`, `sniper-rifles`, `special`, `vintage`, `grenades`, `melee`.
- Tab **vehicles**: `wheeled`, `water`.
- Tab **tools**: `tool-guns`, `spawners`.
- Tab **npcs**: `npcs`.

If an item is added without a category (or with `nil` category), it will be displayed under `uncategorized`.


### Adding new Categories

It is possible to add custom categories to the Spawn Menu tabs, for that just call this **client-side** method from your Package:

```lua
---@param tab_id string			Tab id
---@param id string				Unique ID used to identify this category
---@param label string			Display text
---@param image string			Image path of the category
function Sandbox.SpawnMenu.AddCategory(tab_id, id, label, image)
```

Example:

```lua showLineNumbers title="your-package/Client/Index.lua"
Package.Subscribe("Load", function()
    -- Adds a new category to Props tab
    Sandbox.SpawnMenu.AddCategory(
        "props",
        "low-poly",
        "low poly",
        "package://your-package/low-poly.png"
    )

    -- Adds a new category to Weapons tab
    Sandbox.SpawnMenu.AddCategory(
        "weapons",
        "world-war",
        "world war",
        "package://your-package/ww.png"
    )
end)
```


## Opening/Closing

```lua
-- Opens the Spawn Menu
function Sandbox.SpawnMenu.Open()

-- Closes the Spawn Menu
function Sandbox.SpawnMenu.Close()
```