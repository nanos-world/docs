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
    - NanosWorld::SK_Mannequin

  * - :term:`CollisionType`
    - collision_type
    - CollisionType.Normal

  * - :term:`boolean`
    - gravity_enabled
    - true

  * - :term:`number`
    - health/max_health
    - 100

  * - :term:`string`
    - death_sounds
    - NanosWorld::A_Male_01_Death

  * - :term:`string`
    - pain_sounds
    - NanosWorld::A_Male_01_Pain


Examples
--------

.. raw:: html

	<script>
		DrawCard(
			"../tutorials/PlayAsProp.html",
			"https://i.imgur.com/mO9tCdo.jpg",
			"Play as Prop",
			"How to simulate a Prop possessing."
		);

		DrawCard(
			"../tutorials/NameTags.html",
			"https://i.imgur.com/AyHKrG1.png",
			"NameTags",
			"How to add Player's name above Character's head."
		);

		DrawCard(
			"https://github.com/nanos-world/nanos-world-sandbox",
			"https://i.imgur.com/kXKtrJT.jpg",
			"Sandbox ↗",
			"Official Sandbox package, with basic functionalities and how to spawn Players at random locations!",
			true
		);
	</script>


.. tabs::
 .. code-tab:: lua Lua
    
    -- The following examples are using all Skeletal Meshes which we currently have for examples, including the officials Woman, Man and Mannequin:
    local woman = Character(Vector(100, 0, 100), Rotator(0, 0, 0), "NanosWorld::SK_Female")
    local man = Character(Vector(200, 0, 100), Rotator(0, 0, 0), "NanosWorld::SK_Male")
    local mannequin = Character(Vector(300, 0, 100), Rotator(0, 0, 0), "NanosWorld::SK_Mannequin")
    local mannequin_female = Character(Vector(400, 0, 100), Rotator(0, 0, 0), "NanosWorld::SK_Mannequin_Female")

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
    - ApplyDamage( |br-p| :term:`number` damage, |br-p| :term:`string` bone_name = "", |br-p| :term:`DamageType` damage_type = Shot, |br-p| :ref:`Vector` from_direction = (), |br-p| :ref:`Player` instigator = nil |br| )
    - Do damage in a character, will trigger all related events and apply modified damage based on bone. Also will apply impulse if it's a heavy explosion.

  * - 
    - 
    - AddSkeletalMeshAttached( |br-p| :term:`string` id, |br-p| :term:`string` static_mesh_path |br| )
    - Spawns and Attaches a SkeletalMesh into this Character, the SkeletalMesh must have the same Skeletal used by the Character Mesh, and will follow all animations from it. Uses a custom ID to be used for removing it further

  * - 
    - 
    - AddStaticMeshAttached( |br-p| :term:`string` id, |br-p| :term:`string` static_mesh_path, |br-p| :term:`string` socket = "", |br-p| :ref:`Vector` relative_location = Vector(), |br-p| :ref:`Rotator` relative_rotation = Rotator() |br| )
    - Spawns and Attaches a StaticMesh into this Character in a Socket with relative Location and Rotation. Uses a custom ID to be used for removing it further

  * - |server-only-label|
    - 
    - Drop()
    - Drops any Pickable the Character is holding

  * - |server-only-label|
    - 
    - EnterVehicle( |br-p| :ref:`Vehicle` vehicle, |br-p| :term:`number` seat = 0 |br| )
    - Enters the Vehicle at Seat (0 - Driver)

  * - |server-only-label|
    - 
    - GrabProp(:ref:`Prop` prop)
    - Gives a Prop to the Character

  * - |server-only-label|
    - 
    - Jump()
    - Triggers this Character to jump

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
    - MoveTo( |br-p| :ref:`Vector` location, |br-p| :term:`number` acceptance_radius = 50 |br| )
    - AI: Makes this Character to walk to the Location

  * - |server-only-label|
    - 
    - PickUp(:ref:`Item`/:ref:`Grenade`/:ref:`Weapon`)
    - Gives a Item/Grenade/Weapon (Pickable) to the Character

  * - |server-only-label|
    - 
    - PlayAnimation( |br-p| :term:`string` animation_path, |br-p| :term:`AnimationSlotType` slot_type = FullBody, |br-p| :term:`number` loop_indefinitely = false |br| )
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
    - SetAccelerationSettings( |br-p| :term:`number` walking = 768, |br-p| :term:`number` parachuting = 512, |br-p| :term:`number` skydiving = 768, |br-p| :term:`number` falling = 128, |br-p| :term:`number` swimming = 256, |br-p| :term:`number` swimming_surface = 256, |br-p| :term:`number` flying = 1024 |br| );
    - Sets the Movement Max Acceleration of this Character.

  * - |server-only-label|
    - 
    - SetBrakingSettings( |br-p| :term:`number` ground_friction = 2, |br-p| :term:`number` braking_friction_factor = 2, |br-p| :term:`number` braking_walking = 96, |br-p| :term:`number` braking_flying = 3000, |br-p| :term:`number` braking_swimming = 10, |br-p| :term:`number` braking_falling = 0 |br| );
    - Sets the Movement Braking Settings of this Character.

  * - |server-only-label|
    - 
    - SetCameraMode(:term:`number` camera_mode)
    - Sets the Camera Mode (0 - FPS and TPS, 1 = FPS only, 2 = TPS only)

  * - |client-only-label|
    - 
    - SetCameraOffset(:ref:`Vector` camera_offset)
    - Sets the Camera Offset (only affects TPS)

  * - |server-only-label|
    - 
    - SetCanCrouch(:term:`boolean`)
    - Sets if this Character is allowed to Crouch and to Prone

  * - |server-only-label|
    - 
    - SetCanAim(:term:`boolean`)
    - Sets if this Character is allowed to Aim

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
    - SetCanPunch(:term:`boolean`)
    - Sets if this Character is allowed to Punch (Melee)

  * - |server-only-label|
    - 
    - SetCapsuleSize( |br-p| :term:`number` radius, |br-p|:term:`number` half_height |br| )
    - Sets this Character's Capsule size (will affect Camera location and Character's collision) - default is (42, 96)

  * - |server-only-label|
    - 
    - SetDeathSound(:term:`string` sound_asset)
    - Changes the Death sound when Character dies

  * - 
    - 
    - SetDefaultMaterial( |br-p| :term:`MaterialType` material_type = MaterialType.Masked |br| )
    - Replaces all materials of this actor with a nanos basic material with comon parameters available (*Masked, Translucent, TranslucentDepth*)

  * - |server-only-label|
    - 
    - SetFallDamageTaken(:term:`number` damage)
    - Set the Fall Damage multiplier taken when falling from High places (default: 10). Setting to 0 will make the Character to do not take damage or enter ragdoll mode

  * - |server-only-label|
    - 
    - SetFlyingMode(:term:`boolean` enabled)
    - Sets the Flying Mode

  * - |server-only-label|
    - 
    - SetGaitMode(:term:`GaitMode` mode)
    - **Gait Modes**: *None, Walking, Sprinting*

  * - |server-only-label|
    - 
    - SetGravityScale(:term:`number` Scale)
    - Changes the Gravity Scale of this Character (can be negative)

  * - |server-only-label|
    - 
    - SetHealth(:term:`number` new_health)
    - Sets the Health of this Character. If the character is dead, respawns it with full health

  * - |server-only-label|
    - 
    - SetImpactDamageTaken(:term:`number` damage)
    - Set the Impact Damage taken when being roamed by things (default: 10). Setting to 0 will make the Character to do not take damage or enter ragdoll mode

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
    - SetMaterialColorParameter( |br-p| :term:`string` parameter_name, |br-p| :ref:`Color` color |br| )
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
    - SetPainSound(:term:`string` sound_asset)
    - Changes the Pain sound when Character takes damage

  * - |server-only-label|
    - 
    - SetPunchDamage(:term:`number` damage)
    - Set the Punch Damage this Character will apply on others (default is 15)

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
    - SetStanceMode(:term:`StanceMode` mode)
    - **Stance Modes**: *None, Standing, Crouching, Proning*

  * - |server-only-label|
    - 
    - SetTeam(:term:`number` team)
    - Sets a Team which will disable damaging same Team Members. 0 for Neutral

  * - |server-only-label|
    - 
    - SetViewMode(:term:`ViewMode`)
    - **View Modes**: *FPS, TPS1, TPS2, TPS3*

  * - |server-only-label|
    - 
    - SetWeaponAimMode(:term:`AimMode` state)
    - **Aim Modes**: *None, ADS, ZoomedZoom, Zoomed, ZoomedFar*

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
    - :ref:`Rotator`
    - GetControlRotation()
    - Gets the rotation this character is looking at

  * - 
    - :term:`FallingMode`
    - GetFallingMode()
    - Gets the Falling Mode

  * - 
    - :term:`boolean`
    - GetFlyingMode()
    - Gets if the Character is in Flying Mode

  * - 
    - :term:`GaitMode`
    - GetGaitMode()
    - Gets the Gait Mode

  * - 
    - :ref:`Prop`
    - GetGrabbedProp()
    - Gets the Grabbing Prop

  * - 
    - :term:`number`
    - GetGravityScale()
    - Gets the Gravity Scale of this Character

  * - 
    - :term:`number`
    - GetHealth()
    - Gets the Character's Health.

  * - 
    - :term:`number`
    - GetMaxHealth()
    - Gets the Character's MaxHealth.

  * - 
    - :term:`string`
    - GetMesh()
    - Gets the Mesh Asset name

  * - 
    - Entity
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
    - :term:`StanceMode`
    - GetStanceMode()
    - 

  * - 
    - :term:`SwimmingMode`
    - GetSwimmingMode()
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
    - :term:`ViewMode`
    - GetViewMode()
    - Gets Character View Mode

  * - 
    - :term:`AimMode`
    - GetWeaponAimMode()
    - Gets Character Aim Mode

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
    - :ref:`Character` self, |br| :term:`number` last_damage_taken, |br| :term:`string` last_bone_damaged, |br| :term:`DamageType` damage_type_reason, |br| :ref:`Vector` hit_from_direction, |br| :ref:`Player` instigator
    - When Character Dies

  * -
    - Drop
    - :ref:`Character` self, |br| :ref:`Item`/:ref:`Grenade`/:ref:`Weapon` object, |br| :term:`boolean` triggered_by_player
    - When Character drops anything

  * -
    - EnterVehicle
    - :ref:`Character` self, |br| :ref:`Vehicle` vehicle
    - When Character enters a vehicle

  * -
    - FallingModeChanged
    - :ref:`Character` self, |br| :term:`FallingMode` old_state, |br| :term:`FallingMode` new_state
    - **Falling Modes**: *None, Jumping, Climbing, Vaulting, Falling, HighFalling, Parachuting, SkyDiving*

  * -
    - Fire
    - :ref:`Character` self, |br| :ref:`Weapon` weapon
    - When Character fires a Weapon

  * -
    - GaitModeChanged
    - :ref:`Character` self, |br| :term:`GaitMode` old_state, |br| :term:`GaitMode` new_state
    - **Gait Modes**: *None, Walking, Sprinting*

  * -
    - GrabProp
    - :ref:`Character` self, |br| :ref:`Prop` prop
    - When Character grabs up a Prop

  * - |server-only-label|
    - Interact
    - :ref:`Character` self, |br| :ref:`Item`/:ref:`Grenade`/:ref:`Weapon` object
    - When a Character interacts with an object (i.e. try to pick it up) - return false to prevent it

  * -
    - LeaveVehicle
    - :ref:`Character` self, |br| :ref:`Vehicle` vehicle
    - When Character leaves a vehicle

  * -
    - MoveCompleted
    - :ref:`Character` self, |br| :term:`boolean` succeeded
    - Called when AI reaches it's destination, or when it fails

  * -
    - PickUp
    - :ref:`Character` self, |br| :ref:`Item`/:ref:`Grenade`/:ref:`Weapon` object
    - When Character picks up anything

  * -
    - Possessed
    - :ref:`Character` self, |br| :ref:`Player` possesser
    - When Character is possessed

  * -
    - Punch
    - :ref:`Character` self
    - When Character punches

  * -
    - RagdollModeChanged
    - :ref:`Character` self, |br| :term:`boolean` old_state, |br| :term:`boolean` new_state
    - 

  * -
    - Reload
    - :ref:`Character` self, |br| :ref:`Weapon` weapon, |br| :term:`number` ammo_to_reload
    - When Character reloads a weapon

  * -
    - Respawn
    - :ref:`Character` self
    - When Character Respawns

  * -
    - StanceModeChanged
    - :ref:`Character` self, |br| :term:`StanceMode` old_state, |br| :term:`StanceMode` new_state
    - **Stance Modes**: *None, Standing, Crouching, Proning*

  * -
    - SwimmingModeChanged
    - :ref:`Character` self, |br| :term:`SwimmingMode` old_state, |br| :term:`SwimmingMode` new_state
    - **Swimming Modes**: *None, Surface, Underwater*

  * -
    - TakeDamage
    - :ref:`Character` self, |br| :term:`number` damage, |br| :term:`string` bone, |br| :term:`DamageType` type, |br| :ref:`Vector` from_direction, |br| :ref:`Player` instigator
    - When Character takes Damage

  * -
    - UnGrabProp
    - :ref:`Character` self, |br| :ref:`Prop` prop
    - When Character drops a Prop

  * -
    - UnPossessed
    - :ref:`Character` self, |br| :ref:`Player` old_possesser
    - When Character is unpossessed

  * -
    - ViewModeChanged
    - :ref:`Character` self, |br| :term:`ViewMode` old_state, |br| :term:`ViewMode` new_state
    - **View Modes**: *FPS, TPS1, TPS2, TPS3*

  * -
    - WeaponAimModeChanged
    - :ref:`Character` self, |br| :term:`AimMode` old_state, |br| :term:`AimMode` new_state
    - **Aim Modes**: *None, ADS, ZoomedZoom, Zoomed, ZoomedFar*

.. include:: ../common/events/Actor.rst


Male & Female Customization
---------------------------

The following items can be used to customize Male & Female (``NanosWorld::SK_Male`` & ``NanosWorld::SK_Female``) default meshes from nanos world


+----------------------+-------------------------+----------------------+----------------------+
| Morph Targets        | Mat. Scalar Params      | Mat. Color Params    | Mat. Texture Params  |
+======================+=========================+======================+======================+
| nose1                | BaseColorPower          | LipstickTint         | Texture              |
+----------------------+-------------------------+----------------------+----------------------+
| nose2                | Muscular                | BrowsTint            | LipstickMask         |
+----------------------+-------------------------+----------------------+----------------------+
| brows                | Specular                | BlushTint            | BrowsMask            |
+----------------------+-------------------------+----------------------+----------------------+
| mouth                | Roughness               | EyeShadowTint        | BlushMask            |
+----------------------+-------------------------+----------------------+----------------------+
| fat                  | Scatter                 | UnderwearTint        | EyeShadowMask        |
+----------------------+-------------------------+----------------------+----------------------+
| nose3                | DetailAmount            | HairTint             | Normal               |
+----------------------+-------------------------+----------------------+----------------------+
| chin                 | DetailScale             | Tint                 | NormalMuscular       |
+----------------------+-------------------------+----------------------+----------------------+
| face                 | UnderwearRoughness      |                      | UnderwearMask        |
+----------------------+-------------------------+----------------------+----------------------+
| nose4                | UnderwearSpecular       |                      | SR                   |
+----------------------+-------------------------+----------------------+----------------------+
| skinny               | HairScatter             |                      | HairTexture          |
+----------------------+-------------------------+----------------------+----------------------+
| jaw                  | HairAlphaPower          |                      | HairSpecular         |
+----------------------+-------------------------+----------------------+----------------------+
| brows2               | HairSpecularMultiplier  |                      | HairRoughness        |
+----------------------+-------------------------+----------------------+----------------------+
| angry                | HairRoughnessMultiplier |                      | HairTangent          |
+----------------------+-------------------------+----------------------+----------------------+
| smirk                | HairPixelDepth          |                      |                      |
+----------------------+-------------------------+----------------------+----------------------+
| smirk2               |                         |                      |                      |
+----------------------+-------------------------+----------------------+----------------------+
| smirk3               |                         |                      |                      |
+----------------------+-------------------------+----------------------+----------------------+
| smile                |                         |                      |                      |
+----------------------+-------------------------+----------------------+----------------------+
| nose6                |                         |                      |                      |
+----------------------+-------------------------+----------------------+----------------------+
| jaw_forward          |                         |                      |                      |
+----------------------+-------------------------+----------------------+----------------------+
| lips                 |                         |                      |                      |
+----------------------+-------------------------+----------------------+----------------------+
| lips2                |                         |                      |                      |
+----------------------+-------------------------+----------------------+----------------------+
| mouth_wide           |                         |                      |                      |
+----------------------+-------------------------+----------------------+----------------------+
| eyes1                |                         |                      |                      |
+----------------------+-------------------------+----------------------+----------------------+
| eyes2                |                         |                      |                      |
+----------------------+-------------------------+----------------------+----------------------+
| eyes3                |                         |                      |                      |
+----------------------+-------------------------+----------------------+----------------------+
| eyes4                |                         |                      |                      |
+----------------------+-------------------------+----------------------+----------------------+
| eyes_retracti     on |                         |                      |                      |
+----------------------+-------------------------+----------------------+----------------------+
| lips3                |                         |                      |                      |
+----------------------+-------------------------+----------------------+----------------------+
| eyes5                |                         |                      |                      |
+----------------------+-------------------------+----------------------+----------------------+
| nose7                |                         |                      |                      |
+----------------------+-------------------------+----------------------+----------------------+
| forehead             |                         |                      |                      |
+----------------------+-------------------------+----------------------+----------------------+
| bodyfat              |                         |                      |                      |
+----------------------+-------------------------+----------------------+----------------------+


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
