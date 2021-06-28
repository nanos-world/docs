.. _NanosWorld:

.. include:: ../common/common.rst

**********
NanosWorld
**********

.. tip:: This is a Static Class named ``NanosWorld``. You can access it's methods directly with ``:``. It is not possible to initialize or create new instances.


Functions
---------

.. list-table:: 
  :widths: 5 15 35 45

  * - 
    - **Returns**
    - **Name**
    - **Description**

  * -
    - :ref:`string`
    - Dump(:term:`table`)
    - Dumps a table into a readable text

  * -
    - :ref:`Character`\[]
    - GetCharacters()
    - Returns an array of all characters on the server.

  * -
    - :ref:`Cable`\[]
    - GetCables()
    - Returns an array of all cables on the server.

  * -
    - :ref:`Grenade`\[]
    - GetGrenades()
    - Returns an array of all grenades on the server.

  * -
    - :ref:`Item`\[]
    - GetItems()
    - Returns an array of all items on the server.

  * -
    - :ref:`Light`\[]
    - GetLights()
    - Returns an array of all lights on the server.

  * - |client-only-label|
    - :ref:`Player`
    - GetLocalPlayer()
    - Returns the Local Player (Client Side)

  * -
    - :ref:`Particle`\[]
    - GetParticles()
    - Returns an array of all particles on the server.

  * -
    - :ref:`Player`\[]
    - GetPlayers()
    - Returns an array of all players on the server.

  * -
    - :ref:`Prop`\[]
    - GetProps()
    - Returns an array of all props on the server.

  * - |client-only-label|
    - :ref:`Sound`\[]
    - GetSounds()
    - Returns an array of all sounds on the server.

  * -
    - :ref:`StaticMesh`\[]
    - GetStaticMeshes()
    - Returns an array of all static meshes on the server.

  * - |client-only-label|
    - :ref:`TextRender`\[]
    - GetTextRenders()
    - Returns an array of all text renders on the server.

  * -
    - :ref:`Trigger`\[]
    - GetTriggers()
    - Returns an array of all triggers on the server.

  * -
    - :ref:`Vehicle`\[]
    - GetVehicles()
    - Returns an array of all vehicles on the server.

  * -
    - :ref:`Weapon`\[]
    - GetWeapons()
    - Returns an array of all weapons on the server.

  * -
    - :term:`boolean`
    - IsA(:term:`any` object, Class class_type)
    - Returns if an object is a class

  * - 
    - 
    - Subscribe(:term:`string` event_name, :term:`function`)
    - Subscribes for an Event 


Events
------

.. list-table:: 
  :widths: 5 15 30 50
   
  * - 
    - **Name**
    - **Arguments**
    - **Description**

  * - |client-only-label|
    - SpawnLocalPlayer
    - :ref:`Player` local_player
    - Called once LocalPlayer is created.


Examples
--------

.. tabs::
 .. code-tab:: lua Lua

    -- change all vehicles on the server to black body colors
    for key, vehicle in pairs(NanosWorld:GetVehicles()) do
        vehicle:SetMaterialColorParameter("Tint", Color(0, 0, 0))
    end

    NanosWorld:Subscribe("SpawnLocalPlayer", function(local_player)
        Package:Log("LocalPlayer is ready!")
    end)

    -- checks if p is a Prop
    local p = Prop()

    NanosWorld:IsA(p, Prop) -- returns true
    NanosWorld:IsA(p, StaticMesh) -- returns false
    NanosWorld:IsA(p, Color) -- returns false