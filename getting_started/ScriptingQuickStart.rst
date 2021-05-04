.. _ScriptingQuickStart:

*********************
Scripting Quick Start
*********************


Introduction
------------

Adding functionalities and game-mode features into nanos world is simpler than it looks! In this Quick Start Guide, you will learn how to setup a Package in nanos world and program your first Lua scripting functionality.


Packages
--------

Packages are pieces/components of your game-mode which are isolated from other packages you created. All Packages must go under ``Packages/`` folder, each Package is a folder under that. Each Package can contain the following folders: ``Server``, ``Client`` and ``Shared``. Client and Shared folders will be sent to the clients when they connect. The scripts from Server folder will run only on the server side and won't be sent to clients.

Each Package must have a file called ``Index.lua``, this is the only file which will be triggered when the Package is loaded, this way this file is responsible for including other files and starting up your functionalities.

.. note:: Scripts in Shared folder are always loaded before Client and Server folders.

.. tip:: Maps can also have a **Custom Script** (server-only) attached to it. These are files named ``[MAP_NAME].lua`` in the same folder as the map in the ``Assets/`` folder. If no one of your Packages disallow it, this script file will be loaded as well. Usually these scripts should have map specific spawn props/weapons points and pertinent stuff. Please refer to :ref:`MapsAndLevels` for more information.

.. code-block:: javascript

   NanosWorldServer.exe
   Packages/
   |   My_Package_01/
   |   |   Server/
   |   |   |   Index.lua
   |   |   |   *.lua
   |   |   Client/
   |   |   |   *.lua
   |   |   Shared/
   |   |   |   *.lua
   |   |   Package.toml
   |   My_Package_02/
   |   |   Package.toml
   |   |   ...
   Assets/


Creating your first Script
--------------------------

.. note:: Please check out :ref:`ServerConfiguration` before proceeding to setup your server.

In this example we will show you how to spawn a few :ref:`Prop`\s, spawn a :ref:`Character` for :ref:`Player`\s and interact with some :ref:`Events`.

First of all, let's create a new folder inside ``Packages/`` called ``MyAwesomePackage`` (or whatever name you want), and inside that create a ``Server`` folder with a ``Index.lua`` file (all scripting files inside of Server folder will remain and run only on server side). After that, you will be like that:

.. code-block:: javascript

   NanosWorldServer.exe
   Packages/
   |   MyAwesomePackage/
   |   |   Server/
   |   |   |   Index.lua
   |   |   Package.toml
   Assets/

Open your ``Index.lua`` file in any editor you want (if you don't have one, we'd recommend you try `Visual Studio Code <https://code.visualstudio.com/>`_) and let's start spawning some Props in your server! You can use the following code for that:

.. tabs::
 .. code-tab:: lua Lua

   -- We can print to Console a friendly message
   Package:Log("Loading some Props =D")

   -- Spawning Props...
   prop_table = Prop(Vector(200, 0, 0), Rotator(0, 0, 0), "NanosWorld::SM_WoodenTable")
   prop_chair = Prop(Vector(400, 200, 0), Rotator(0, 0, 0), "NanosWorld::SM_WoodenChair")
   prop_tire = Prop(Vector(600, 0, 0), Rotator(0, 0, 0), "NanosWorld::SM_TireLarge")

This will spawn 3 Props (a Table, a Chair and a Tire) close to each other. After that, you can start the server and you will see the output on server console:

.. image:: https://i.imgur.com/JGp6QhZ.png

You can also join your server to see the results =D

.. image:: https://i.imgur.com/Att5lDV.png

Very nice! But you may have noticed you are just a wandering soul flying around, let's give you some flesh! For that, we will need to interact with some :ref:`Events`.

In nanos world we have a Class called :ref:`Player`. Player's are just a representation of a physical person behind the mouse and keyboard. Inside the game Player's don't have physical presence, because of that we must assign a :ref:`Character` to them, so with that they can incarnate and personify something =D.

When a :ref:`Player` connects to your server, a new Player class is automatically spawned and you can get them with the following event:

.. tabs::
 .. code-tab:: lua Lua

    -- Called when Players join the server (i.e. spawn)
    Player:Subscribe("Spawn", function(new_player)

    end)

For spawning and assigning this new player to a new Character, we can just make that:

.. tabs::
 .. code-tab:: lua Lua

    -- Called when Players join the server (i.e. spawn)
    Player:Subscribe("Spawn", function(new_player)
        -- Spawns a Character at position X = 0, Y = 0, Z = 0 with default's constructor parameters
        local new_character = Character(Vector(0, 0, 0))
        -- Possess the new Character
        new_player:Possess(new_character)
    end)

.. image:: https://i.imgur.com/mz4sy2Q.png

And that's it! Ah, just remember to destroy the Characters when players disconnect, otherwise there will be a lot of souless Characters remaining on the map:

.. tabs::
 .. code-tab:: lua Lua

    -- Called when Players join the server (i.e. spawn)
    Player:Subscribe("Spawn", function(new_player)
        -- Spawns a Character at position X = 0, Y = 0, Z = 0 with default's constructor parameters
        local new_character = Character(Vector(0, 0, 0))
        -- Possess the new Character
        new_player:Possess(new_character)
    end)

    -- When Player leaves the server, destroy it's Character
    Player:Subscribe("Destroy", function(player)
        local character = player:GetControlledCharacter()
        if (character) then
            character:Destroy()
        end
    end)


.. tip:: You can register for events for all entities or for specific entities only! Example:

.. tabs::
 .. code-tab:: lua Lua

    -- Registering for "EnterVehicle" event for all characters
    Character:Subscribe("EnterVehicle", function(character, vehicle)
        Package:Log("My Callback for all characters!")
    end)

    -- Registering for "EnterVehicle" event for a specific character
    -- it will trigger only when that character enters a vehicle!
    local my_character = Character()

    my_character:Subscribe("EnterVehicle", function(character, vehicle)
        Package:Log("My Callback for my_character only!")
    end)


.. tip:: You can also unregister for events you registered! This way they won't get triggered anymore. Example:

.. tabs::
 .. code-tab:: lua Lua

    -- Registering for "EnterVehicle" event for all characters
    Character:Subscribe("EnterVehicle", function(character, vehicle)
        Package:Log("My Callback for all characters!")
    end)

    -- Unregistering "EnterVehicle" event for all character (in this Package)
    Character:Unsubscribe("EnterVehicle")

    -- Registering for "EnterVehicle" event for a specific character
    -- it will trigger only when that character enters a vehicle!
    local my_character = Character()

    my_character:Subscribe("EnterVehicle", function(character, vehicle)
        Package:Log("My Callback for my_character only!")
    end)

    -- Unregistering "EnterVehicle" event registered for this character
    my_character:Unsubscribe("EnterVehicle")

    -- It is also possible to unregister a specific function,
    -- for that you will need to declare that function separately
    function EnterVehicleCallback(character, vehicle)
        Package:Log("My Callback for all characters (declared separately)")
    end

    -- Registering for "EnterVehicle" event for all characters with a separated function
    Character:Subscribe("EnterVehicle", EnterVehicleCallback)

    -- Registering for "EnterVehicle" event for all characters
    Character:Subscribe("EnterVehicle", function(character, vehicle)
        Package:Log("My Callback for all characters!")
    end)

    -- Unregistering "EnterVehicle" event for a specific callback
    -- i.e. "My Callback for all characters!" will keep triggering
    Character:Unsubscribe("EnterVehicle", EnterVehicleCallback)


Congratulations! You have finished your fist basic Script and Learned:

*  How to setup a simple Package and Script
*  Basic interact with built-in :ref:`Events`
*  Spawning :ref:`Prop`\s
*  Spawning :ref:`Character`\s


Moving Further
--------------

.. raw:: html

	<script>
		DrawCard(
			"../scripting/classes/index.html",
			"https://vectorsart.com/vectors-images/vectorsart_18001.jpg",
			"Classes",
			"Information of all spawnable objects/entities of nanos world."
		);

		DrawCard(
			"../scripting/static_classes/index.html",
			"https://vectorsart.com/vectors-images/vectorsart_18001.jpg",
			"Static Classes",
			"Information of all Global/Static Classes of nanos world."
		);

		DrawCard(
			"../scripting/utility/index.html",
			"https://cdn.pixabay.com/photo/2016/09/10/17/18/book-1659717__340.jpg",
			"Utility Classes",
			"Utility classes (Vector, Rotator, Color, etc) information."
		);

		DrawCard(
			"../scripting/Glossary.html",
			"https://cdn.pixabay.com/photo/2016/09/10/17/18/book-1659717__340.jpg",
			"Glossary",
			"Common used terms and programming types."
		);
	</script>