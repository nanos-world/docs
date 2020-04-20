.. _Tutorial-Spawn-Player:

************
Spawn player
************


.. tip:: Spawn player at random location see: :ref:`Tutorial-Spawn-Player-Random-Locations`


About
-----

When a player enters the server, the player must be assigned to a character. 
As soon as the player leaves the server again, the character must be removed as well.


Code
-----

.. tabs::
 .. code-tab:: lua Lua

	-- Called when Players connect to the server
	Player:on("Spawn", function(player)
		-- Spawns a Character at position 0, 0, 250
		local newChar = Character(Vector(0, 0, 250))
		
		-- Possess the new Character
		player:Possess(newChar)
	end)

	-- Called when Player unpossess a Character
	Player:on("UnPossess", function(player, character, isPlayerDisconnecting)
		-- If Player is disconnecting from the server, destroys it's Character
		if (isPlayerDisconnecting) then
			character:Destroy()
		end
	end)

