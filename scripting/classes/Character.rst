.. _Character:

.. include:: ../common/common.rst

*********
Character
*********

Characters represents a Skeletal Mesh in the game, which means an Actor which can be possessed, can move and interact with world.

.. attention:: This page is under construction.


Usage
-----

.. tabs::
 .. code-tab:: lua Lua

    local char = Character(Vector(123, 456, 789), Rotator(0, 0, 90))


Constructor Parameters
----------------------

.. list-table:: 
  :widths: 20 45 35

  * - **Type**
    - **Name**
    - **Default**

  * - :ref:`Vector`
    - Location
    - Vector(0, 0, 0)

  * - :ref:`Rotator`
    - Rotation
    - Rotation(0, 0, 0)

  * - :term:`number`
    - CollisionType
    - 0 (Normal)

  * - :term:`boolean`
    - GravityEnabled
    - true

  * - :term:`number`
    - Health/MaxHealth
    - 100


Properties
----------

.. list-table:: 
  :widths: 5 10 35 50

  * - 
    - **Type**
    - **Name**
    - **Description**

  * - |client-ready-only-label|
    - :term:`number`
    - Health 
    - Character's Health. Sets under 0 will kill. Sets above 0 will Respawn.


Functions
---------

.. include:: ../common/functions/Actor.rst

.. list-table:: 
  :widths: 5 10 35 50

  * - 
    - **Returns**
    - **Name**
    - **Description**

  * - |server-only-label|
    - 
    - PickUp(:ref:`Item`/:ref:`Grenade`/:ref:`Weapon`)
    - Gives a Item/Grenade/Weapon (Pickable) to the Character

  * - |server-only-label|
    - 
    - Drop()
    - Drops any Pickable the Character is holding

  * - |server-only-label|
    - 
    - GrabProp(:ref:`Prop`)
    - Gives a Prop to the Character

  * - |server-only-label|
    - 
    - UnGrabProp()
    - UnGrabs/Drops the Prop the Character is holding

  * - 
    - :ref:`Prop`
    - GetGrabbedProp()
    - Gets the Grabbing Prop

  * - 
    - Actor
    - GetPicked()
    - Gets the holding Picked Item/Grenade/Weapon

  * - 
    - :ref:`Vehicle`
    - GetVehicle()
    - Gets the Vehicle the Character is on

  * - 
    - :ref:`Player`
    - GetPlayer()
    - Gets the Player controlling this Character

  * - |server-only-label|
    - 
    - SetRagdollMode(:term:`boolean`)
    - Sets Character Ragdoll Mode

  * - 
    - :term:`boolean`
    - IsInRagdollMode()
    - Gets Character Ragdoll Mode

  * - |server-only-label|
    - 
    - SetViewMode(:term:`number`)
    - Sets Character View Mode (0 - FPS, 1 TPS1, 2 - TPS2, 3 - TPS3)

  * - 
    - :term:`number`
    - GetViewMode()
    - Gets Character View Mode

  * - |server-only-label|
    - 
    - RandomizeCustomization()
    - Randomize all character customizations

  * - |server-only-label|
    - 
    - LeaveVehicle()
    - Leaves the current Vehicle

  * - |server-only-label|
    - 
    - EnterVehicle(:ref:`Vehicle`, :term:`number` Seat)
    - Enters the Vehicle at Seat (0 - Driver)

  * - |server-only-label|
    - 
    - SetMovementEnabled(:term:`boolean`)
    - Enables/Disables Character's Movement

  * - 
    - :term:`boolean`
    - IsMovementEnabled()
    - Gets Character Movement Enabled
  
  * - |server-only-label|
    - 
    - SetMorphTarget(:term:`number` ID, :term:`number` Value)
    - 

  * - |server-only-label|
    - 
    - SetScalarParameter(:term:`number` ID, :term:`number` Value)
    - 

  * - |server-only-label|
    - 
    - SetVectorParameter(:term:`number` ID, :ref:`Vector` Value)
    - 

  * - 
    - :term:`number`
    - GetMorphTarget(:term:`number` ID)
    - 

  * - 
    - :term:`number`
    - GetScalarParameter(:term:`number` ID)
    - 

  * - 
    - :ref:`Vector`
    - GetVectorParameter(:term:`number` ID)
    - 
  

Events
------

.. include:: ../common/events/Actor.rst

.. list-table::
  :widths: 5 15 30 50
   
  * -
    - **Name**
    - **Arguments**
    - **Description**

  * -
    - PickUp
    - :ref:`Character` self, :ref:`Item`/:ref:`Grenade`/:ref:`Weapon` object
    - When Character picks up anything

  * -
    - Drop
    - :ref:`Character` self, :ref:`Item`/:ref:`Grenade`/:ref:`Weapon` object
    - When Character drops anything

  * -
    - GrabProp
    - :ref:`Character` self, :ref:`Prop` prop
    - When Character grabs up a Prop

  * -
    - UnGrabProp
    - :ref:`Character` self, :ref:`Prop` prop
    - When Character drops a Prop

  * -
    - EnterVehicle
    - :ref:`Character` self, :ref:`Vehicle` vehicle
    - When Character enters a vehicle

  * -
    - LeaveVehicle
    - :ref:`Character` self, :ref:`Vehicle` vehicle
    - When Character leaves a vehicle

  * -
    - Respawn
    - :ref:`Character` self
    - When Character Respawns

  * -
    - Death
    - :ref:`Character` self
    - When Character Dies

  * -
    - TakeDamage
    - :ref:`Character` self, :term:`number` damage, :term:`string` bone
    - When Character takes Damage

  * -
    - Fire
    - :ref:`Character` self, :ref:`Weapon` weapon
    - When Character fires a Weapon

  * -
    - Possessed
    - :ref:`Character` self, :ref:`Player` possesser
    - When Character is possessed

  * -
    - Unpossessed
    - :ref:`Character` self, :ref:`Player` old_possesser
    - When Character is unpossessed

  * -
    - Punch
    - :ref:`Character` self
    - When Character punches

  * -
    - WeaponAimModeChanged
    - :ref:`Character` self, :term:`number` OldState, :term:`number` NewState
    - 0 - None, 1 - ADS (FPS), 2 - ZoomedZoom (TPS), 3 - Zoomed, 4 - ZoomedFar

  * -
    - ViewModeChanged
    - :ref:`Character` self, :term:`number` OldState, :term:`number` NewState
    - 0 - FPS, 1 - TPS1, 2 - TPS2, 3 - TPS3

  * -
    - SwimmingModeChanged
    - :ref:`Character` self, :term:`number` OldState, :term:`number` NewState
    - 0 - None, 1 - Superficie, 2 - Underwater

  * -
    - StanceModeChanged
    - :ref:`Character` self, :term:`number` OldState, :term:`number` NewState
    - 0 - None, 1 - Standing, 2 - Crouching, 3 - Proning

  * -
    - RagdollModeChanged
    - :ref:`Character` self, :term:`number` OldState, :term:`number` NewState
    - 

  * -
    - FallingModeChanged
    - :ref:`Character` self, :term:`number` OldState, :term:`number` NewState
    - 0 - None, 1 - Jumping, 2 - Climbing, 3 - Vaulting, 4 - Falling, 5 - HighFalling, 6 - Parachuting, 7 - SkyDiving

  * -
    - GaitModeChanged
    - :ref:`Character` self, :term:`number` OldState, :term:`number` NewState
    - 0 - None, 1 - Walking, 2 - Sprinting

	
Customization
-------------

+----------------------+----------------------+----------------------+
| Morph Targets        | Scalar Parameters    | Vector Parameters    |
+====+=================+====+=================+====+=================+
| ID | NAME            | ID | NAME            | ID | NAME            |
+----+-----------------+----+-----------------+----+-----------------+
| 00 | nose1           | 00 | BaseColorPower  | 00 | LipstickTint    |
+----+-----------------+----+-----------------+----+-----------------+
| 01 | nose2           | 01 | Muscular        | 01 | BrowsTint       |
+----+-----------------+----+-----------------+----+-----------------+
| 02 | brows           |    |                 | 02 | BlushTint       |
+----+-----------------+----+-----------------+----+-----------------+
| 03 | mouth           |    |                 | 03 | EyeShadowTint   |
+----+-----------------+----+-----------------+----+-----------------+
| 04 | fat             |    |                 | 04 | UnderwearTint   |
+----+-----------------+----+-----------------+----+-----------------+
| 05 | nose3           |    |                 | 05 | HairTint        |
+----+-----------------+----+-----------------+----+-----------------+
| 06 | chin            |    |                 |    |                 | 
+----+-----------------+----+-----------------+----+-----------------+
| 07 | face            |    |                 |    |                 |
+----+-----------------+----+-----------------+----+-----------------+
| 08 | nose4           |    |                 |    |                 |
+----+-----------------+----+-----------------+----+-----------------+
| 09 | skinny          |    |                 |    |                 |
+----+-----------------+----+-----------------+----+-----------------+
| 10 | jaw             |    |                 |    |                 |
+----+-----------------+----+-----------------+----+-----------------+
| 11 | brows2          |    |                 |    |                 |
+----+-----------------+----+-----------------+----+-----------------+
| 12 | angry           |    |                 |    |                 |
+----+-----------------+----+-----------------+----+-----------------+
| 13 | smirk           |    |                 |    |                 |
+----+-----------------+----+-----------------+----+-----------------+
| 14 | smirk2          |    |                 |    |                 |
+----+-----------------+----+-----------------+----+-----------------+
| 15 | smirk3          |    |                 |    |                 |
+----+-----------------+----+-----------------+----+-----------------+
| 16 | smile           |    |                 |    |                 |
+----+-----------------+----+-----------------+----+-----------------+
| 17 | nose6           |    |                 |    |                 |
+----+-----------------+----+-----------------+----+-----------------+
| 18 | jaw_forward     |    |                 |    |                 |
+----+-----------------+----+-----------------+----+-----------------+
| 19 | lips            |    |                 |    |                 |
+----+-----------------+----+-----------------+----+-----------------+
| 20 | lips2           |    |                 |    |                 |
+----+-----------------+----+-----------------+----+-----------------+
| 21 | mouth_wide      |    |                 |    |                 |
+----+-----------------+----+-----------------+----+-----------------+
| 22 | eyes1           |    |                 |    |                 |
+----+-----------------+----+-----------------+----+-----------------+
| 23 | eyes2           |    |                 |    |                 |
+----+-----------------+----+-----------------+----+-----------------+
| 24 | eyes3           |    |                 |    |                 |
+----+-----------------+----+-----------------+----+-----------------+
| 25 | eyes4           |    |                 |    |                 |
+----+-----------------+----+-----------------+----+-----------------+
| 26 | eyes_retraction |    |                 |    |                 |
+----+-----------------+----+-----------------+----+-----------------+
| 27 | lips3           |    |                 |    |                 |
+----+-----------------+----+-----------------+----+-----------------+
| 28 | eyes5           |    |                 |    |                 |
+----+-----------------+----+-----------------+----+-----------------+
| 29 | nose7           |    |                 |    |                 |
+----+-----------------+----+-----------------+----+-----------------+
| 30 | forehead        |    |                 |    |                 |
+----+-----------------+----+-----------------+----+-----------------+
| 31 | bodyfat         |    |                 |    |                 |
+----+-----------------+----+-----------------+----+-----------------+