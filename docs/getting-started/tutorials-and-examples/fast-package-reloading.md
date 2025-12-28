---
title: Fast Package Reloading
description: >-
  Learn how to reload your packages instantly while developing without restarting the server!
tags: [tutorial-example, scripting, development]
---


Speed up your development workflow by reloading packages on-the-fly! This guide shows you how to edit your code and see changes instantly with just one key press.

## Overview

When developing packages, constantly restarting the server to see changes can be time-consuming. With this setup, you can:

1. ✏️ Edit your package files
2. 🎮 Go back to the game
3. ⌨️ Press **P** to reload all packages instantly
4. ✅ See your changes immediately!

## How It Works

This system uses a simple client-server communication:

1. The **client** listens for a key press (P key)
2. When pressed, it sends a remote event to the **server**
3. The **server** receives the event and reloads all running packages
4. All players see a chat notification about which packages are reloading

## Implementation

### Client-Side Code

Add this code to your `Client/Index.lua` file:

```lua title="Client/Index.lua" showLineNumbers
-- Listen for the P key to trigger package reload
Input.Subscribe("KeyDown", function(key_name)
	if key_name == "P" then
		Console.Log("Reloading Packages")
		Events.CallRemote("ReloadPackages")
	end
end)
```

### Server-Side Code

Add this code to your `Server/Index.lua` file:

```lua title="Server/Index.lua" showLineNumbers
-- Handle the reload request from clients
Events.SubscribeRemote("ReloadPackages", function()
	Console.Log("Reloading Packages")
	
	-- Loop through all loaded packages
	for k, v in pairs(Server.GetPackages(true)) do
		Console.Log("Reloading Package: " .. v.name)
		Chat.BroadcastMessage("Reloading Package: " .. v.name)
		
		-- Reload each package
		Server.ReloadPackage(v.name)
	end
end)
```

## Usage

Once you've added both code snippets:

1. **Start your server** and connect to it
2. **Edit your package files** (e.g., modify logic in `Server/Index.lua` or `Client/Index.lua`)
3. **Save the changes**
4. **Switch back to the game**
5. **Press the P key**
6. **See your changes take effect immediately!**

You'll see console messages and chat notifications showing which packages are being reloaded.

:::tip Development Workflow

This is especially useful during development phases when you're iterating quickly on features. You can:

- Test small code changes instantly
- Debug issues faster
- Avoid the overhead of restarting the server
- Keep your game state intact while testing

:::

## Customization

### Change the Reload Key

Want to use a different key? Simply change the key name in the client code:

```lua
if key_name == "F5" then  -- Changed from "P" to "F5"
	-- ...
end
```

Common alternatives:
- `"F5"` - Traditional reload key
- `"R"` - Easy to reach
- `"Insert"` - Less likely to press accidentally
- `"Home"` - Out of the way

### Add Security (Recommended)

By default, any connected player can trigger a reload. For production servers, you should add permission checks:

```lua title="Server/Index.lua" showLineNumbers
-- Only allow admins to reload packages
Events.SubscribeRemote("ReloadPackages", function(player)
	-- Check if player is an admin (implement your own logic)
	if not IsPlayerAdmin(player) then
		Chat.SendMessage("You don't have permission to reload packages!", player)
		return
	end
	
	Console.Log("Reloading Packages (triggered by: " .. player:GetName() .. ")")
	
	for k, v in pairs(Server.GetPackages(true)) do
		Console.Log("Reloading Package: " .. v.name)
		Chat.BroadcastMessage("Reloading Package: " .. v.name)
		Server.ReloadPackage(v.name)
	end
end)
```

### Reload Specific Packages

If you only want to reload certain packages instead of all of them:

```lua title="Server/Index.lua" showLineNumbers
Events.SubscribeRemote("ReloadPackages", function()
	-- Only reload specific packages
	local packages_to_reload = {"my-package", "another-package"}
	
	for _, package_name in ipairs(packages_to_reload) do
		Console.Log("Reloading Package: " .. package_name)
		Chat.BroadcastMessage("Reloading Package: " .. package_name)
		Server.ReloadPackage(package_name)
	end
end)
```

### Add Visual Feedback

Enhance the reload experience with better visual feedback:

```lua title="Client/Index.lua" showLineNumbers
Input.Subscribe("KeyDown", function(key_name)
	if key_name == "P" then
		Console.Log("🔄 Reloading Packages...")
		Events.CallRemote("ReloadPackages")
		
		-- Optional: Show a UI notification
		Chat.SendMessage("🔄 Reloading all packages...")
	end
end)
```

## Important Notes

:::warning State Preservation

When a package reloads:
- **Global variables** are reset
- **Event subscriptions** are re-registered
- **Spawned entities** may need to be respawned depending on your code
- **Player connections** remain active

Make sure your package initialization code handles reloads gracefully!

:::

:::info Performance

Reloading packages is generally fast, but:
- Complex packages with heavy initialization may take a moment
- All clients will reload the package simultaneously
- Large amounts of spawned entities might cause a brief lag spike

:::

:::caution Production Use

This reload system is primarily intended for **development environments**. For production servers:

1. **Add proper authentication** to prevent unauthorized reloads
2. **Consider disabling** this feature entirely
3. **Use proper release processes** instead of live reloading
4. **Test thoroughly** after any reload before considering changes "live"

:::

## Troubleshooting

### Packages Not Reloading

If pressing P doesn't reload packages:

1. Check the **console** for error messages
2. Verify both client and server code are present
3. Make sure the package name matches exactly
4. Check that `Server.GetPackages(true)` returns your packages

### Changes Not Appearing

If you reload but don't see changes:

1. **Save your files** before reloading
2. Check if your changes have **syntax errors**
3. Look for **errors in the console** after reload
4. Some changes might require **respawning entities**

### Key Press Not Working

If the P key doesn't trigger anything:

1. Check that you're **in-game** (not in console or menu)
2. Verify the **client code** is in the correct file
3. Try a **different key** in case P is bound elsewhere
4. Check console for input subscription errors
