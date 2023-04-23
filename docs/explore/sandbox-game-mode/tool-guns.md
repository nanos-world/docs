---
title: Tool Guns
description: How to create new Tool Guns for nanos world
tags: [tutorial-example, scripting, assets]
sidebar_position: 2
---

How to create new Tool Guns for nanos world


![](/img/docs/tutorials/tool-gun.webp)

:::info

This **Tool Gun** approach is a convention of the Sandbox game-mode and is not a game-wide concept.

:::

The sandbox game-mode defines a `ToolGun` class (see on GitHub: [Server](https://github.com/nanos-world/nanos-world-sandbox/blob/master/Server/Tools/BaseToolGun.lua) & [Client](https://github.com/nanos-world/nanos-world-sandbox/blob/master/Client/Tools/BaseToolGun.lua)) which helps on creating new tools based on a base Tool Gun.


## Creating a custom Tool Gun

To create your own Tool based on Sandbox's `ToolGun`, you need to create a new Class inheriting from it passing some custom parameters to the Class, like that:

```lua
MyToolGun = ToolGun.Inherit("MyToolGun", {
	-- Spawn Menu
	name = "My Tool Gun",
	image = "package://my-package/MyToolGun.webp",
	category = "special",

	-- Tool Gun Tutorials which will display on Top Left
	tutorials = {
		{ key = "LeftClick", text = "spawn balloon" },
		{ key = "Undo", text = "undo spawn" },
		{ key = "ContextMenu", text = "balloon settings" },
	}

	-- Tool Gun Crosshair Trace Debug Settings which will display on World when aiming
	crosshair_trace = {
		-- Which Collision Channel to trace
		collision_channel = CollisionChannel.WorldStatic | CollisionChannel.WorldDynamic,
		-- Which Color to display when it traces an entity
		color_entity = Color.GREEN,
		-- Which Color to display when it traces anything else
		color_no_entity = Color.RED,
	}
})
```

:::tip

The values `name`, `image` and `category` are used by **Spawn Menu** to display it properly on it.

The other values `tutorials` and `crosshair_trace` are used by the **ToolGun** to add custom tutorials or behaviors when using it. Those parameters are optional.

Those values are only used on **Client Side**!

:::


## Overriding ToolGun Client Methods

The ToolGun have some methods on **Client Side** which you can override to implement custom behaviors to your tool when the Local Player interacts with it.

You can just override them in your custom Tool Gun class to implement them:

```lua title=Client/Index.lua
-- Called when you Fire with it
function MyToolGun:OnLocalPlayerFire(character)
	-- Do something

	-- Something useful to do here is tracing for where the Player fire
	-- and send that coordinate to server to spawn something at that location
end

-- Called when you Pick Up it
function MyToolGun:OnLocalPlayerPickUp(character)
	-- Do something

	-- Something useful to do here is adding a new entry to Context Menu
	-- when picking it up (see Sandbox's BalloonGun example)
end

-- Called when you Drop it
function MyToolGun:OnLocalPlayerDrop(character)
	-- Do something

	-- You will much likely want to disable any effect or similar thing when
	-- you drop your Tool
end
```


## Examples

You can find more examples of Tools in the Sandbox's `Tools/` folder on both [Client](https://github.com/nanos-world/nanos-world-sandbox/tree/master/Client/Tools) and [Server](https://github.com/nanos-world/nanos-world-sandbox/tree/master/Server/Tools) side.

Now it's up to you to to create your own Packages with your own Tools!
