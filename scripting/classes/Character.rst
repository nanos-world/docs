.. _Character:

.. include:: ../common/common.rst

*********
Character
*********

.. image:: https://i.imgur.com/yPtYbR6.jpg

Characters represents Actors which can be possessed, can move and interact with world. They are the default Skeletal Mesh Character built for nanos world.

.. attention:: This page is under construction.

.. note:: Characters are Skeletal Meshes using Unreal's Mannequin Skeletal, with animations and interactivity already natively integrated into nanos world. It is possible to import any Skeletal Mesh (which uses Unreal's Mannequin Skeletal) to this Character.


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
    - location
    - Vector(0, 0, 0)

  * - :ref:`Rotator`
    - rotation
    - Rotator(0, 0, 0)

  * - :term:`string`
    - skeletal_mesh
    - NanosWorld::SK_Male

  * - :term:`number`
    - collision_type
    - 0 (Normal)

  * - :term:`boolean`
    - gravity_enabled
    - true

  * - :term:`number`
    - health/max_health
    - 100


Usage
-----

.. tabs::
 .. code-tab:: lua Lua
    
    -- The following examples are using all Skeletal Meshes which we currently have for examples, including the officials Woman, Man and Mannequin:
    local woman = Character(Vector(100, 0, 100), Rotator(0, 0, 0), "NanosWorld::SK_Female")
    local man = Character(Vector(200, 0, 100), Rotator(0, 0, 0), "NanosWorld::SK_Male")
    local mannequin = Character(Vector(300, 0, 100), Rotator(0, 0, 0), "NanosWorld::SK_Mannequin")

    local post_apocalyptic = Character(Vector(400, 0, 100), Rotator(0, 0, 0), "NanosWorld::SK_PostApocalyptic")
    local classic_male = Character(Vector(500, 0, 100), Rotator(0, 0, 0), "NanosWorld::SK_ClassicMale")

    -- Adds Clothes to Man. Note: some Meshes only supports a specific Mesh (Men/Woman)
    man:AddSkeletalMeshAttached("shirt", "NanosWorld::SK_Shirt") -- Men only
    man:AddSkeletalMeshAttached("shirt", "NanosWorld::SK_Underwear") -- Men only
    man:AddSkeletalMeshAttached("pants", "NanosWorld::SK_Pants") -- Men only
    man:AddSkeletalMeshAttached("shoes", "NanosWorld::SK_Shoes_01")
    man:AddSkeletalMeshAttached("shoes", "NanosWorld::SK_Tie")

    -- Adds Clothes to Woman
    woman:AddSkeletalMeshAttached("full", "NanosWorld::SK_CasualSet") -- Woman only
    woman:AddSkeletalMeshAttached("shoes", "NanosWorld::SK_Sneakers")

    -- Adds Beard to Man
    man:AddStaticMeshAttached("beard", "NanosWorld::SM_Beard_Extra", "beard")
    man:AddStaticMeshAttached("beard", "NanosWorld::SM_Beard_Middle", "beard")
    man:AddStaticMeshAttached("beard", "NanosWorld::SM_Beard_Mustache_01", "beard")
    man:AddStaticMeshAttached("beard", "NanosWorld::SM_Beard_Mustache_02", "beard")
    man:AddStaticMeshAttached("beard", "NanosWorld::SM_Beard_Side", "beard")

    -- Adds Hair to Man
    man:AddStaticMeshAttached("hair", "NanosWorld::SM_Hair_Long", "hair_male")
    man:AddStaticMeshAttached("hair", "NanosWorld::SM_Hair_Short", "hair_male")

    -- Adds Hair to Woman
    woman:AddStaticMeshAttached("hair", "NanosWorld::SM_Hair_Kwang", "hair_female")


Functions
---------

.. list-table:: 
  :widths: 5 10 35 50

  * - 
    - **Returns**
    - **Name**
    - **Description**

  * - |server-only-label|
    - :term:`number` damage_taken
    - ApplyDamage(:term:`number` damage, :term:`string` bone_name = "", :term:`number` damage_type = 0, , :ref:`Vector` from_direction = (), :ref:`Player` instigator = nil)
    - Do damage in a character, will trigger all related events and apply modified damage based on bone. Also will apply impulse if it's a heavy explosion.

  * - 
    - 
    - AddSkeletalMeshAttached(:term:`string` id, :term:`string` static_mesh_path)
    - Spawns and Attaches a SkeletalMesh into this Character, the SkeletalMesh must have the same Skeletal used by the Character Mesh, and will follow all animations from it. Uses a custom ID to be used for removing it further

  * - 
    - 
    - AddStaticMeshAttached(:term:`string` id, :term:`string` static_mesh_path, :term:`string` docket = "", :ref:`Vector` relative_location = Vector(), :ref:`Rotator` relative_rotation = Rotator())
    - Spawns and Attaches a StaticMesh into this Character in a Socket with relative Location and Rotation. Uses a custom ID to be used for removing it further

  * - |server-only-label|
    - 
    - Drop()
    - Drops any Pickable the Character is holding

  * - |server-only-label|
    - 
    - EnterVehicle(:ref:`Vehicle` vehicle, :term:`number` seat)
    - Enters the Vehicle at Seat (0 - Driver)

  * - |server-only-label|
    - 
    - GrabProp(:ref:`Prop` prop)
    - Gives a Prop to the Character

  * - |server-only-label|
    - 
    - LeaveVehicle()
    - Leaves the current Vehicle

  * - |server-only-label|
    - 
    - LookAt(:ref:`Vector` location)
    - AI: Tries to make this Character to look at Location

  * - |server-only-label|
    - 
    - MoveTo(:ref:`Vector` location, :term:`number` acceptance_radius = 50)
    - AI: Makes this Character to walk to the Location

  * - |server-only-label|
    - 
    - PickUp(:ref:`Item`/:ref:`Grenade`/:ref:`Weapon`)
    - Gives a Item/Grenade/Weapon (Pickable) to the Character

  * - |server-only-label|
    - 
    - PlayAnimation(:term:`string` animation_path, :term:`number` slot_type = 0, :term:`number` loop_indefinitely = false)
    - Plays an Animation Montage on this character

  * - 
    - 
    - RemoveSkeletalMeshAttached(:term:`string` id)
    - Removes, if existing, a SkeletalMesh from this Character given it's custom ID

  * - 
    - 
    - RemoveStaticMeshAttached(:term:`string` id)
    - Removes, if existing, a StaticMesh from this Character given it's custom ID

  * - |server-only-label|
    - 
    - Respawn()
    - Respawns the Character, fullying it's Health and moving it to it's Initial Location

  * - |server-only-label|
    - 
    - SetCameraMode(:term:`number` camera_mode)
    - Sets the Camera Mode (0 - FPS and TPS, 1 = FPS only, 2 = TPS only)

  * - |server-only-label|
    - 
    - SetCanCrouch(:term:`boolean`)
    - Sets if this Character is allowed to Crouch and to Prone

  * - |server-only-label|
    - 
    - SetCanSprint(:term:`boolean`)
    - Sets if this Character is allowed to Sprint

  * - |server-only-label|
    - 
    - SetCanGrabProps(:term:`boolean`)
    - Sets if this Character is allowed to Grab any Prop

  * - |server-only-label|
    - 
    - SetCanPickupPickables(:term:`boolean`)
    - Sets if this Character is allowed to Pick up any Pickable (Weapon, Grenade, Item...)

  * - |server-only-label|
    - 
    - SetCapsuleSize(:term:`number` radius, :term:`number` half_height)
    - Sets this Character's Capsule size (will affect Camera location and Character's collision) - default is (42, 96)

  * - 
    - 
    - SetDefaultMaterial()
    - Replaces all materials of this actor with a nanos basic material with comon parameters available

  * - |server-only-label|
    - 
    - SetHealth(:term:`number` new_health)
    - Sets the Health of this Character. If the character is dead, respawns it with full health

  * - |server-only-label|
    - 
    - SetInvulnerable(:term:`boolean`)
    - Sets if the Character can receive any damage

  * - |server-only-label|
    - 
    - SetMaxHealth(:term:`number` new_max_health)
    - Sets the MaxHealth of this Character

  * - 
    - 
    - SetMaterialColorParameter(:term:`string` parameter_name, :ref:`Color` color)
    - Sets a Color parameter in this actor's material

  * - 
    - 
    - SetMaterialScalarParameter(:term:`string` parameter_name, :term:`number` scalar)
    - Sets a scalar parameter in this actor's material

  * - 
    - 
    - SetMaterialTextureParameter(:term:`string` parameter_name, :term:`string` texture_path)
    - Loads a image from computer (relative to `Assets/` folder) and sets as parameter in this actor's material

  * - 
    - 
    - SetMaterialVectorParameter(:term:`string` parameter_name, :ref:`Vector` vector)
    - Sets a Vector parameter in this actor's material

  * - |server-only-label|
    - 
    - SetMesh(:term:`string` skeletal_mesh_asset)
    - Changes the Character Mesh on the fly

  * - 
    - 
    - SetMorphTarget(:term:`string` key, :term:`number` value)
    - 

  * - |server-only-label|
    - 
    - SetMovementEnabled(:term:`boolean`)
    - Enables/Disables Character's Movement

  * - |server-only-label|
    - 
    - SetRagdollMode(:term:`boolean`)
    - Sets Character Ragdoll Mode

  * - |server-only-label|
    - 
    - SetSpeedMultiplier(:term:`number` multiplier)
    - 1 = normal

  * - |server-only-label|
    - 
    - SetTeam(:term:`number` team)
    - Sets a Team which will disable damaging same Team Members. 0 for Neutral

  * - |server-only-label|
    - 
    - SetViewMode(:term:`number`)
    - Sets Character View Mode (0 - FPS, 1 TPS1, 2 - TPS2, 3 - TPS3)

  * - |server-only-label|
    - 
    - SetWeaponAimMode(:term:`number` state)
    - 0 - None, 1 - ADS (FPS), 2 - ZoomedZoom (TPS), 3 - Zoomed, 4 - ZoomedFar

  * - |server-only-label|
    - 
    - StopAnimation(:term:`string` animation_path = "")
    - Stops an Animation Montage on this character

  * - |server-only-label|
    - 
    - UnGrabProp()
    - UnGrabs/Drops the Prop the Character is holding

  * - 
    - :term:`boolean`
    - IsInRagdollMode()
    - Gets Character Ragdoll Mode

  * - 
    - :term:`boolean`
    - IsInvulnerable()
    - Gets if the Character can receive damage

  * - 
    - :term:`boolean`
    - IsMovementEnabled()
    - Gets Character Movement Enabled

  * - 
    - :term:`string`
    - GetMesh()
    - Gets the Mesh Asset name

  * - 
    - :ref:`Rotator`
    - GetControlRotation()
    - Gets the rotation this character is looking at

  * - 
    - :ref:`Prop`
    - GetGrabbedProp()
    - Gets the Grabbing Prop

  * - 
    - :term:`number`
    - GetHealth()
    - Gets the Character's Health.

  * - 
    - :term:`number`
    - GetMaxHealth()
    - Gets the Character's MaxHealth.

  * - 
    - Actor
    - GetPicked()
    - Gets the holding Picked Item/Grenade/Weapon

  * - 
    - :ref:`Player`
    - GetPlayer()
    - Gets the Player controlling this Character

  * - 
    - :term:`number`
    - GetSpeedMultiplier()
    - 

  * - 
    - :term:`number`
    - GetTeam()
    - 

  * - 
    - :ref:`Vehicle`
    - GetVehicle()
    - Gets the Vehicle the Character is on

  * - 
    - :term:`number`
    - GetViewMode()
    - Gets Character View Mode

.. include:: ../common/functions/Actor.rst


Events
------

.. list-table::
  :widths: 5 15 30 50
   
  * -
    - **Name**
    - **Arguments**
    - **Description**

  * -
    - Death
    - :ref:`Character` self, :term:`number` last_damage_taken, :term:`string` last_bone_damaged, :term:`number` damage_type_reason, :ref:`Vector` hit_from_direction, :ref:`Player` instigator
    - When Character Dies

  * -
    - Drop
    - :ref:`Character` self, :ref:`Item`/:ref:`Grenade`/:ref:`Weapon` object, :term:`boolean` was_triggered_by_player
    - When Character drops anything

  * -
    - EnterVehicle
    - :ref:`Character` self, :ref:`Vehicle` vehicle
    - When Character enters a vehicle

  * -
    - FallingModeChanged
    - :ref:`Character` self, :term:`number` old_state, :term:`number` new_state
    - 0 - None, 1 - Jumping, 2 - Climbing, 3 - Vaulting, 4 - Falling, 5 - HighFalling, 6 - Parachuting, 7 - SkyDiving

  * -
    - Fire
    - :ref:`Character` self, :ref:`Weapon` weapon
    - When Character fires a Weapon

  * -
    - GaitModeChanged
    - :ref:`Character` self, :term:`number` old_state, :term:`number` new_state
    - 0 - None, 1 - Walking, 2 - Sprinting

  * -
    - GrabProp
    - :ref:`Character` self, :ref:`Prop` prop
    - When Character grabs up a Prop

  * - |server-only-label|
    - Interact
    - :ref:`Character` self, :ref:`Item`/:ref:`Grenade`/:ref:`Weapon` object
    - When a Character interacts with an object (i.e. try to pick it up) - return false to prevent it

  * -
    - LeaveVehicle
    - :ref:`Character` self, :ref:`Vehicle` vehicle
    - When Character leaves a vehicle

  * -
    - MoveCompleted
    - :ref:`Character` self, :term:`boolean` succeeded
    - Called when AI reaches it's destination, or when it fails

  * -
    - PickUp
    - :ref:`Character` self, :ref:`Item`/:ref:`Grenade`/:ref:`Weapon` object
    - When Character picks up anything

  * -
    - Possessed
    - :ref:`Character` self, :ref:`Player` possesser
    - When Character is possessed

  * -
    - Punch
    - :ref:`Character` self
    - When Character punches

  * -
    - RagdollModeChanged
    - :ref:`Character` self, :term:`number` old_state, :term:`number` new_state
    - 

  * -
    - Reload
    - :ref:`Character` self, :ref:`Weapon` weapon, :term:`number` ammo_to_reload
    - When Character reloads a weapon

  * -
    - Respawn
    - :ref:`Character` self
    - When Character Respawns

  * -
    - StanceModeChanged
    - :ref:`Character` self, :term:`number` old_state, :term:`number` new_state
    - 0 - None, 1 - Standing, 2 - Crouching, 3 - Proning

  * -
    - SwimmingModeChanged
    - :ref:`Character` self, :term:`number` old_state, :term:`number` new_state
    - 0 - None, 1 - Superficie, 2 - Underwater

  * -
    - TakeDamage
    - :ref:`Character` self, :term:`number` damage, :term:`string` bone, :term:`number` type (0 - Shot, 1 - Explosion), :ref:`Vector` from_direction, :ref:`Player` instigator
    - When Character takes Damage

  * -
    - UnGrabProp
    - :ref:`Character` self, :ref:`Prop` prop
    - When Character drops a Prop

  * -
    - UnPossessed
    - :ref:`Character` self, :ref:`Player` old_possesser
    - When Character is unpossessed

  * -
    - ViewModeChanged
    - :ref:`Character` self, :term:`number` old_state, :term:`number` new_state
    - 0 - FPS, 1 - TPS1, 2 - TPS2, 3 - TPS3

  * -
    - WeaponAimModeChanged
    - :ref:`Character` self, :term:`number` old_state, :term:`number` new_state
    - 0 - None, 1 - ADS (FPS), 2 - ZoomedZoom (TPS), 3 - Zoomed, 4 - ZoomedFar

.. include:: ../common/events/Actor.rst


Male & Female Customization
---------------------------

The following items can be used to customize Male & Female default meshes from nanos world

+----------------------+----------------------+----------------------+
| Morph Targets        | Mat. Scalar Params   | Mat. Color Params    |
+======================+======================+======================+
| nose1                | BaseColorPower       | LipstickTint         |
+----------------------+----------------------+----------------------+
| nose2                | Muscular             | BrowsTint            |
+----------------------+----------------------+----------------------+
| brows                |                      | BlushTint            |
+----------------------+----------------------+----------------------+
| mouth                |                      | EyeShadowTint        |
+----------------------+----------------------+----------------------+
| fat                  |                      | UnderwearTint        |
+----------------------+----------------------+----------------------+
| nose3                |                      | HairTint             |
+----------------------+----------------------+----------------------+
| chin                 |                      |                      | 
+----------------------+----------------------+----------------------+
| face                 |                      |                      |
+----------------------+----------------------+----------------------+
| nose4                |                      |                      |
+----------------------+----------------------+----------------------+
| skinny               |                      |                      |
+----------------------+----------------------+----------------------+
| jaw                  |                      |                      |
+----------------------+----------------------+----------------------+
| brows2               |                      |                      |
+----------------------+----------------------+----------------------+
| angry                |                      |                      |
+----------------------+----------------------+----------------------+
| smirk                |                      |                      |
+----------------------+----------------------+----------------------+
| smirk2               |                      |                      |
+----------------------+----------------------+----------------------+
| smirk3               |                      |                      |
+----------------------+----------------------+----------------------+
| smile                |                      |                      |
+----------------------+----------------------+----------------------+
| nose6                |                      |                      |
+----------------------+----------------------+----------------------+
| jaw_forward          |                      |                      |
+----------------------+----------------------+----------------------+
| lips                 |                      |                      |
+----------------------+----------------------+----------------------+
| lips2                |                      |                      |
+----------------------+----------------------+----------------------+
| mouth_wide           |                      |                      |
+----------------------+----------------------+----------------------+
| eyes1                |                      |                      |
+----------------------+----------------------+----------------------+
| eyes2                |                      |                      |
+----------------------+----------------------+----------------------+
| eyes3                |                      |                      |
+----------------------+----------------------+----------------------+
| eyes4                |                      |                      |
+----------------------+----------------------+----------------------+
| eyes_retracti     on |                      |                      |
+----------------------+----------------------+----------------------+
| lips3                |                      |                      |
+----------------------+----------------------+----------------------+
| eyes5                |                      |                      |
+----------------------+----------------------+----------------------+
| nose7                |                      |                      |
+----------------------+----------------------+----------------------+
| forehead             |                      |                      |
+----------------------+----------------------+----------------------+
| bodyfat              |                      |                      |
+----------------------+----------------------+----------------------+


Character's Skeleton Bone Names
-------------------------------

Ugly list I know

- Root

  - Pelvis

    - spine_01

      - spine_02

          - spine_03

            - clavicle_l

              - UpperArm_L

                - lowerarm_l 

                  - Hand_L

                    - index_01_l

                      - index_02_l

                        - index_03_l

                    - middle_01_l

                      - middle_02_l

                        - middle_03_l

                    - pinky_01_l

                      - pinky_02_l

                        - pinky_03_l

                    - ring_01_l

                      - ring_02_l

                        - ring_03_l

                    - thumb_01_l

                      - thumb_02_l

                        - thumb_03_l

                    - weapon_l

            - clavicle_r

              - UpperArm_R
                
                - lowerarm_r
                  
                  - Hand_R
                    
                    - index_01_r
                      
                      - index_02_r
                        
                        - index_03_r
                    
                    - middle_01_r
                      
                      - middle_02_r
                        
                        - middle_03_r
                    
                    - pinky_01_r
                      
                      - pinky_02_r
                        
                        - pinky_03_r
                    
                    - ring_01_r
                      
                      - ring_02_r
                        
                        - ring_03_r
                    
                    - thumb_01_r
                      
                      - thumb_02_r
                        
                        - thumb_03_r
                    
                    - weapon_r
            
            - neck_01
              
              - Head
                
                - LeftEye
                - RightEye
                - LeftLidUp
                - LeftLidLow
                - RightLidUp
                - RightLitLow

    - Thigh_L
    
      - calf_l
    
        - Foot_L
    
          - ball_l
    
    - Thigh_R
      
      - calf_r
        
        - Foot_R
          
          - ball_r