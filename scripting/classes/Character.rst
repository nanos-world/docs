.. _Character:

.. include:: ../common/common.rst

*********
Character
*********

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
    - Location
    - Vector(0, 0, 0)

  * - :ref:`Rotator`
    - Rotation
    - Rotation(0, 0, 0)

  * - :term:`string`
    - Model
    - NanosWorld/Characters/Male/SK_Male

  * - :term:`number`
    - CollisionType
    - 0 (Normal)

  * - :term:`boolean`
    - GravityEnabled
    - true

  * - :term:`number`
    - Health/MaxHealth
    - 100


Usage
-----

.. tabs::
 .. code-tab:: lua Lua
    
    -- The following examples are using all Skeletal Meshes which we currently have for examples, including the officials Woman, Man and Mannequin:
    local Woman = Character(Vector(100, 0, 100), Rotator(0, 0, 0), "NanosWorld/Characters/Female/SK_Female")
    local Man = Character(Vector(200, 0, 100), Rotator(0, 0, 0), "NanosWorld/Characters/Male/SK_Male")
    local Mannequin = Character(Vector(300, 0, 100), Rotator(0, 0, 0), "NanosWorld/Characters/Mannequin/SK_Mannequin")

    local PostApocalyptic = Character(Vector(400, 0, 100), Rotator(0, 0, 0), "NanosWorld/Characters/PostApocalyptic/SK_PostApocalyptic")
    local ClassicMale = Character(Vector(500, 0, 100), Rotator(0, 0, 0), "NanosWorld/Characters/ClassicMale/SK_ClassicMale")

    -- Adds Clothes to Man. Note: some Meshes only supports a specific Mesh (Men/Woman)
    Man:AddSkeletalMeshAttached("shirt", "NanosWorld/Characters/Common/BodyParts/Clothes/Shirt/SK_Shirt") -- Men only
    Man:AddSkeletalMeshAttached("shirt", "NanosWorld/Characters/Common/BodyParts/Clothes/Underwear/SK_Underwear") -- Men only
    Man:AddSkeletalMeshAttached("pants", "NanosWorld/Characters/Common/BodyParts/Clothes/Pants/SK_Pants") -- Men only
    Man:AddSkeletalMeshAttached("shoes", "NanosWorld/Characters/Common/BodyParts/Clothes/Shoes/SK_Shoes_01")
    Man:AddSkeletalMeshAttached("shoes", "NanosWorld/Characters/Common/BodyParts/Clothes/Tie/SK_Tie")

    -- Adds Clothes to Woman
    Woman:AddSkeletalMeshAttached("full", "NanosWorld/Characters/Common/BodyParts/Clothes/CasualSet/SK_CasualSet") -- Woman only
    Woman:AddSkeletalMeshAttached("shoes", "NanosWorld/Characters/Common/BodyParts/Clothes/Shoes/SK_Sneakers")

    -- Adds Beard to Man
    Man:AddStaticMeshAttached("beard", "NanosWorld/Characters/Common/BodyParts/Beard/SM_Beard_Extra", "beard", Vector(), Rotator())
    Man:AddStaticMeshAttached("beard", "NanosWorld/Characters/Common/BodyParts/Beard/SM_Beard_Middle", "beard", Vector(), Rotator())
    Man:AddStaticMeshAttached("beard", "NanosWorld/Characters/Common/BodyParts/Beard/SM_Beard_Mustache_01", "beard", Vector(), Rotator())
    Man:AddStaticMeshAttached("beard", "NanosWorld/Characters/Common/BodyParts/Beard/SM_Beard_Mustache_02", "beard", Vector(), Rotator())
    Man:AddStaticMeshAttached("beard", "NanosWorld/Characters/Common/BodyParts/Beard/SM_Beard_Side", "beard", Vector(), Rotator())

    -- Adds Hair to Man
    Man:AddStaticMeshAttached("hair", "NanosWorld/Characters/Common/BodyParts/Hair/Male/SM_Hair_Long", "hair_male", Vector(), Rotator())
    Man:AddStaticMeshAttached("hair", "NanosWorld/Characters/Common/BodyParts/Hair/Male/SM_Hair_Short", "hair_male", Vector(), Rotator())

    -- Adds Hair to Woman
    Woman:AddStaticMeshAttached("hair", "NanosWorld/Characters/Common/BodyParts/Hair/Kwang/SM_Hair_Kwang", "hair_female", Vector(), Rotator())


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
    - :ref:`Rotator`
    - GetControlRotation()
    - Gets the rotation this character is looking at

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

  * - |server-only-label|
    - 
    - AddStaticMeshAttached(:term:`number` ID, :term:`string` StaticMeshPath, :term:`string` Socket, :ref:`Vector` RelativeLocation, :ref:`Rotator` RelativeRotation)
    - Spawns and Attaches a StaticMesh into this Character in a Socket with relative Location and Rotation. Uses a custom ID to be used for removing it further

  * - |server-only-label|
    - 
    - AddSkeletalMeshAttached(:term:`number` ID, :term:`string` StaticMeshPath)
    - Spawns and Attaches a SkeletalMesh into this Character, the SkeletalMesh must have the same Skeletal used by the Character Mesh, and will follow all animations from it. Uses a custom ID to be used for removing it further

  * - |server-only-label|
    - 
    - RemoveStaticMeshAttached(:term:`number` ID)
    - Removes, if existing, a StaticMesh from this Character given it's custom ID

  * - |server-only-label|
    - 
    - RemoveSkeletalMeshAttached(:term:`number` ID)
    - Removes, if existing, a SkeletalMesh from this Character given it's custom ID

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
    - :ref:`Character` self, :term:`number` damage, :term:`number` type (1 - Shot, 2 - Explosion), :term:`string` bone, :ref:`Vector` FromDirection, :ref:`Player` Instigator
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
    - Reload
    - :ref:`Character` self, :ref:`Weapon` weapon, :term:`number` AmmoToReload
    - When Character reloads a weapon

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

.. include:: ../common/events/Actor.rst


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