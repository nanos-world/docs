---
description: All you need to know to communicate between different Packages
sidebar_position: 3
tags: [scripting]
---

# Packages Communication

All you need to know to communicate between different Packages

In nanos world there are 3 main ways which you can interact with other **Packages**. In this page we will explain in details how to do so.

## Custom Events

:::tip

For more information and examples about using Custom Events, please refer to Events.

:::

### Communicating with Packages in the same Side

Custom Events are the easier way to send data or information to other packages:

```lua title="PackageOne/Server/Index.lua"
local my_parameter1 = 123
local my_parameter2 = "hello there"
local my_parameter3 = { important_stuff = "omg!" }

Events.Call("MyAwesomeEvent", my_parameter1, my_parameter2, my_parameter3)
```

```lua title="PackageTwo/Server/Index.lua"
Events.Subscribe("MyAwesomeEvent", function(parameter1, parameter2, parameter3)
    Package.Log("Received " .. parameter1) -- Received 123
    Package.Log("Received " .. parameter2) -- Received hello there
    Package.Log("Received " .. parameter3) -- Received table
end)
```

:::info

**Note:** Calling events will trigger the event in all Packages.

:::

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
    Package.Log("Received " .. parameter1) -- Received cool data from network
end)
```

:::info

**Note:** Calling network events will trigger the event in all Packages from the other side.

:::

## Packages Exported Functions

Another way of communicating is using Exported Functions. With Exported Functions you can define functions in your Package which can be called by any other Package and have a value returned.

:::info

Unlike events, exported functions can return values to the caller. But you can only call Exported Functions from the same side \(Server or Client\).

:::

### Exporting a Function

For exporting functions, use `Package.Export()` method:

```lua title="PackageOne/Server/Index.lua"
-- Defines a function which you want to export
function SpawnCoolWeapon(location, rotation)
    local cool_weapon = Weapon(location or Vector(), rotation or Rotator(), ...)
    return cool_weapon
end

-- Exports the function to be called by other Packages 
Package.Export("SpawnCoolWeapon", SpawnCoolWeapon)
```

### Calling an Exported Function from another Package

For calling a function exported by another Package, use `Package.Call()` method:

```lua title="PackageTwo/Server/Index.lua"
-- Calls the exported function
local cool_weapon = Package.Call("PackageOne","SpawnCoolWeapon", Vector(), Rotator())
```

## Using Package's RequirePackage

The last way of communicating between Packages is by loading other Packages inside the current Package:

```lua title="PackageOne/Server/Index.lua"
Package.Log("Hello from Package One!")
```

```lua title="PackageTwo/Server/Index.lua"
Package.RequirePackage("PackageOne")

Package.Log("Hello from Package Two!")
```

#### Output

```text
Hello from Package One!
Hello from Package Two!
```

This will copy all content from `PackageOne` into `PackageTwo`. I.e. the Index.lua from `PackageTwo` will be loaded where you called `Package.RequirePackage()`.

