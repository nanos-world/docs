---
title: Blueprint Communication
description: Learn how to communicate between Lua and Blueprints
tags: [tutorial-example]
---

Learn how to communicate between Lua and Blueprints.

In nanos world, you can send and subscribe to Blueprint Events! In this guide you will see how to create and bind events on Blueprints and Lua!

:::info

All communication is only possible on Client Side! As the server is not aware of Unreal.

:::


## Blueprint Events

Events (or Functions) can be created inside your Blueprint to be called from Lua.

### Creating a Custom Event

Open or create your Blueprint, enter **Event Graph** tab and **Right Click** the graph to open the Context Action Menu, there type `Add Custom Event...` to find the option:

![](/img/docs/tutorials/blueprints-01.webp)

:::tip

You can also create Functions instead of Events to be called from Lua!

:::

Then, select your newly created Custom Event and in the **Details** panel (usually in the right side), you can add `+` new Inputs to it, you can add any amount of inputs:

![](/img/docs/tutorials/blueprints-02.webp)

And that's it for creating it! You can add any logic you want from now on!


### Calling a Custom Event from Lua

On Lua, you can spawn your blueprint as usual, and call `CallBlueprintEvent` on it to trigger the blueprint event.

```lua title=Client/Index.lua
-- Spawns the Blueprint
local blueprint = Blueprint(Vector(), Rotator(), "my-asset-pack::BP_AwesomeBlueprint")

local param1 = true -- bool parameter
local param2 = 123 -- integer parameter
local param3 = "hello there!" -- string parameter

-- Calls the event, passing the parameters
blueprint:CallBlueprintEvent("MyBlueprintCustomEvent", param1, param2, param3)
```


## Blueprint Event Dispatcher

Events Dispatchers are Events created inside blueprint which other Blueprints (or in our case Lua) can subscribe to it to get triggered when it's called from the Blueprint.

### Creating an Event Dispatchers

To create it, find the **Event Dispatchers** section on the left side and press `+` to create a new one, name it as you desire:

![](/img/docs/tutorials/blueprints-03.webp)

Then, select it and on the **Details** Panel you can add as many inputs/parameters as you want:

![](/img/docs/tutorials/blueprints-04.webp)

![](/img/docs/tutorials/blueprints-05.webp)


### Calling a Dispatcher from Blueprint

Now, to trigger it from the Blueprint, drag it from the list into the Graph and select **Call** option:

![](/img/docs/tutorials/blueprints-07.webp)

And then you can plug any logic on it to trigger it, any other Blueprint or Lua which is bound to that will get it triggered!

![](/img/docs/tutorials/blueprints-06.webp)


### Binding Dispatchers from Lua

You can **Bind** Blueprint Event Dispatchers directly from Lua! For that, spawn your Blueprint, and call `BindBlueprintEventDispatcher()` on it to bind the Dispatcher:

```lua title=Client/Index.lua
-- Spawns the Blueprint
local blueprint = Blueprint(Vector(), Rotator(), "my-asset-pack::BP_AwesomeBlueprint",)

-- Subscribes to a Blueprint Event Dispatcher
blueprint:BindBlueprintEventDispatcher("GorgeousDispatcher", function(self, arg1, arg2)
    -- arg1 is a string and arg2 is an integer
    Console.Log("Called from Blueprint!", arg1, arg2)
end)
```
