.. _NanosWorld:

.. include:: ../common/common.rst

**********
NanosWorld
**********

.. tip:: This is a Static Class named ``NanosWorld``. You can access it's methods directly with ``:``. It is not possible to initialize or create new instances.


Functions
---------

.. list-table:: 
  :widths: 5 10 35 50

  * - 
    - **Returns**
    - **Name**
    - **Description**

  * -
    - :ref:`Character`\[]
    - GetCharacters()
    - Returns an array of all characters on the server.

  * -
    - :ref:`Grenade`\[]
    - GetGrenades()
    - Returns an array of all grenades on the server.

  * -
    - :ref:`Item`\[]
    - GetItems()
    - Returns an array of all items on the server.

  * - |client-only-label|
    - :ref:`Player`
    - GetLocalPlayer()
    - Returns the Local Player (Client Side)

  * -
    - :ref:`Player`\[]
    - GetPlayers()
    - Returns an array of all players on the server.

  * -
    - :ref:`Prop`\[]
    - GetProps()
    - Returns an array of all props on the server.

  * -
    - :ref:`Vehicle`\[]
    - GetVehicles()
    - Returns an array of all vehicles on the server.

  * -
    - :ref:`Weapon`\[]
    - GetWeapons()
    - Returns an array of all weapons on the server.


Events
------

.. list-table:: 
  :widths: 5 15 30 50
   
  * - 
    - **Name**
    - **Parameters**
    - **Description**

  * - |client-only-label|
    - SpawnLocalPlayer
    - :ref:`Player` LocalPlayer
    - Called once LocalPlayer is created.


Examples
--------

.. tabs::
 .. code-tab:: lua Lua

    -- change all vehicles on the server to black body colors
    for key, veh in pair(NanosWorld:GetVehicles()) do
      veh:GetBodyColor(Color(0, 0, 0, 0))
    end

    NanosWorld:on("SpawnLocalPlayer", function(local_player)
        Package:Log("LocalPlayer is ready!")
    end)