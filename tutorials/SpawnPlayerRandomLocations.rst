.. _TutorialSpawnPlayerRandomLocations:

********************************
Spawn player at random locations
********************************


.. tip:: Spawn player at specific location see: :ref:`TutorialSpawnPlayer`


About
-----

When a player enters the server, the player must be assigned to a character. 
The player can be spawned at random predefined locations.
Each time the player dies or spawns again, a random location should be determined.
As soon as the player leaves the server, the character must be removed as well.


Code
-----

.. tabs::
 .. code-tab:: lua Lua

	-- List of Start Locations to spawn (like player_start)
	startLocations = {
		Vector(-2006.000000, 8287.000000, -200.000000),
		Vector(-4701.000000, 7058.000000, 236.000000),
		Vector(7065.000000, 5516.000000, 192.000000),
		Vector(4084.000000, 8175.000000, 238.000046),
		Vector(-4661.070801, -688.318481, 295.228271),
		Vector(9349.953125, -776.581421, 215.060547),
		Vector(6221.000000, -7602.000000, 197.000000),
		Vector(344.223877, -4713.804199, 517.179199),
		Vector(-2352.433594, -6579.508789, 313.297119),
		Vector(-7831.000000, -7635.000000, 197.000000),
		Vector(-9481.000000, -2884.350830, 185.215271),
		Vector(-8014.036621, -754.221375, 394.598022),
		Vector(-9400.706055, 3869.706299, 186.855911),
		Vector(-5850.000000, 8164.000000, 222.000046),
		Vector(-2050.000000, 6654.000000, 228.000000),
		Vector(-1207.603516, 5056.930176, 235.285980),
		Vector(3760.009277, 10620.053711, 119.038712),
		Vector(3143.985352, 8324.702148, 248.355957),
		Vector(6910.936035, -1799.466309, 267.055115),
		Vector(1569.594360, -10662.000000, 216.248596),
		Vector(-4014.836670, -4764.884766, 713.900269)
	}

	-- Returns a random Start Location
	function getRandomStartLocation()
		return startLocations[math.random(#startLocations)]
	end

	-- Called when Players connect to the server
	Player:on("Spawn", function(player)
		-- Gets a Initial Location for the Character (it will always respawn at this position passed through the 
		-- constructor, you can change this with SetInitialLocation)
		local initialLocation = getRandomStartLocation()
		
		-- Spawns a Character
		local newChar = Character(initialLocation)
		
		-- Possess the new Character
		player:Possess(newChar)
	end)

	-- Called when Character respawns
	Character:on("Respawn", function(character)
		-- Pick a random location
		local location = getRandomStartLocation()
		
		-- Sets the Initial Character's Location (location where the Character will spawn). After the Respawn event, a 
		-- call for SetLocation(InitialLocation) will be triggered. If you always want something to respawn at the same 
		-- position you do not need to keep setting SetInitialLocation, this is just for respawning at random spots
		character:SetInitialLocation(location)
	end)

	-- Called when Player unpossess a Character
	Player:on("UnPossess", function(player, character, bIsPlayerDisconnecting)
		-- If Player is disconnecting from the server, destroys it's Character
		if (bIsPlayerDisconnecting) then
			character:Destroy()
		end
	end)

