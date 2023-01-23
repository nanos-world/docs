---
title: Packages Communication
description: All you need to know to communicate between different Packages
sidebar_position: 3
tags: [scripting]
---


All you need to know to communicate between different Packages

In nanos world there are 2 main ways which you can interact with other **Packages**. In this page we will explain in details how to do so.


## Custom Events

### Communicating with Packages in the same Side

Custom Events are the easier way to send or receive generic data or information to other packages:

```lua title="package-one/Server/Index.lua"
local my_parameter1 = 123
local my_parameter2 = "hello there"
local my_parameter3 = { important_stuff = "omg!" }

Events.Call("MyAwesomeEvent", my_parameter1, my_parameter2, my_parameter3)
```

```lua title="package-two/Server/Index.lua"
Events.Subscribe("MyAwesomeEvent", function(parameter1, parameter2, parameter3)
    Console.Log("Received " .. parameter1) -- Received 123
    Console.Log("Received " .. parameter2) -- Received hello there
    Console.Log("Received " .. parameter3) -- Received table
end)
```


### Sending data through the network

Sending information through the network is not different from sending in the same side:

```lua title="Server/Index.lua"
local my_parameter1 = "cool data from network"

-- Call this event to all Players
Events.BroadcastRemote("GetThisFromServer", my_parameter1)

local player_02 = GetPlayerSomehow()

-- Or call this event to a specific player
Events.CallRemote("GetThisFromServer", player_02, my_parameter1)
```

```lua title="Client/Index.lua"
Events.Subscribe("GetThisFromServer", function(parameter1, parameter2, parameter3)
    Console.Log("Received " .. parameter1) -- Received cool data from network
end)
```

:::tip

For more information and examples about using Custom Events, please refer to [Events](/scripting-reference/static-classes/events.mdx).

:::


## Exporting Variables Globally

Another way of communicating is using `Package.Export()` method, it allows exposing variables (tables, functions, etc) globally so all other Packages can access it directly.

:::info

Unlike events, exported functions can return values to the caller. But exported functions are only available to the same side (Server or Client).

:::

### Exporting a Function

With that, you can export functions for example, like that:

```lua title="package-one/Server/Index.lua"
-- Defines a function which you want to export
function SpawnCoolWeapon(location, rotation)
    local cool_weapon = Weapon(location or Vector(), rotation or Rotator(), ...)
    return cool_weapon
end

-- Exports the function to be called by other Packages
Package.Export("SpawnCoolWeapon", SpawnCoolWeapon)
```

You can even export a whole table containing functions for example, to work as a library:

```lua title="package-one/Server/Index.lua"
-- Defines a table with functions which you want to export
MyAwesomeLibrary = {
	CoolMethod = function(a, b)
		return a + b
	end,
	AnotherAwesomeImportantMethod = function(c, d)
		return c * d
	end
}

-- Exports the table to be accessed by other Packages
Package.Export("MyAwesomeLibrary", MyAwesomeLibrary)
```


### Calling an Exported Function from another Package

Now you can access that directly from other packages:

```lua title="package-two/Server/Index.lua"
-- Calls the exported function
local cool_weapon = SpawnCoolWeapon(Vector(), Rotator())
```

```lua title="package-two/Server/Index.lua"
-- Calls the exported table
local awesome_result = MyAwesomeLibrary.CoolMethod(123, 456)
```