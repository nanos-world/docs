.. _Weapon:

.. include:: ../common/common.rst

******
Weapon
******

.. image:: https://i.imgur.com/GqB7p3Z.png

Weapons are fully customizable, all pieces of the weapon can be changed with immense possibility of creation

.. tip:: Since update 0.16 it is possible to create any kind of weapon with any kind of mesh

.. tip:: Please take a look at our Default's Weapon package with all of them already properly configured and ready to use: `<https://github.com/nanos-world/nanos-world-weapons>`_.


Usage
-----

.. tabs::
 .. code-tab:: lua Lua

    -- spawning a AK47
    local NewWeapon = Weapon(
        Vector(-900, 185, 215), -- Spawn Location
        Rotator(0, 90, 90),     -- Spawn Rotation
        "NanosWorld::SK_AK47", -- Model
        0,                    -- Collision (Normal)
        true,                 -- Gravity Enabled
        30,                   -- Default Ammo in the Clip
        1000,                 -- Default Ammo in the Bag
        30,                   -- Clip Capacity
        30,                   -- Base Damage
        20,                   -- Spread
        1,                    -- Bullet Count (1 for common weapons, > 1 for shotguns)
        30,                   -- Ammo to Reload (Ammo Clip for common weapons, 1 for shotguns)
        20000,                -- Max Bullet Distance
        7500,                 -- Bullet Speed (visual only)
        Color(20, 10000, 0),  -- Bullet Color
        0.5,                  -- Sight's FOV multiplier
        Vector(0, 0, -14.85), -- Sight Location
        Rotator(-1, 0, 0),    -- Sight Rotation
        Vector(26, 0, 8.5),   -- Left Hand Location
        Rotator(0, 60, 90),   -- Left Hand Rotation
        Vector(-10, 0, 0),    -- Right Hand Offset
        1,                    -- Handling Mode (0. SingleHandedWeapon, 1. DoubleHandedWeapon, 2. SingleHandedMelee, 3. DoubleHandedMelee, 4. Throwable, 5. Torch)
        0.15,                 -- Cadence (1 shot at each 0.15seconds)
        true,                 -- Can Hold Use (keep pressing to keep firing, common to automatic weapons)
        false,                -- Need to release to Fire (common to Bows)
        "NanosWorld::P_Bullet_Trail_System",                       -- Bullet Trail Particle
        "NanosWorld::P_Weapon_BarrelSmoke",                        -- Barrel Particle
        "NanosWorld::P_Weapon_Shells_762x39",                      -- Shells Particle
        "NanosWorld::A_Rifle_Dry",                                 -- Weapon's Dry Sound
        "NanosWorld::A_Rifle_Load",                                -- Weapon's Load Sound
        "NanosWorld::A_Rifle_Unload",                              -- Weapon's Unload Sound
        "NanosWorld::A_AimZoom",                                   -- Weapon's Zooming Sound
        "NanosWorld::A_Rattle",                                    -- Weapon's Aiming Sound
        "NanosWorld::A_AK47_Shot",                                 -- Weapon's Shot Sound
        "NanosWorld::AM_Mannequin_Reload_Rifle",                   -- Character's Reloading Animation
        "NanosWorld::AM_Mannequin_Sight_Fire",                     -- Character's Aiming Animation
        "NanosWorld::SM_AK47_Mag_Empty"                            -- Magazine Mesh
    )


Using our Default Weapons Package `<https://github.com/nanos-world/nanos-world-weapons>`_ (already built-in included) for spawning an AK47:

.. tabs::
 .. code-tab:: lua Lua

    -- Includes this Package in your Package
    Package:RequirePackage("NanosWorldWeapons")
    
    -- Spawning the AK47
    local my_ak47 = NanosWorldWeapons.AK47(Vector(1035, 154, 300), Rotator())


Related Tutorials
-----------------

.. raw:: html

	<script>
		DrawCard(
			"../../tutorials/PropShooter.html",
			"https://i.imgur.com/Mq3FBv4.png",
			"Prop Shooter",
			"A small example of how to shoot Props from a weapon!"
		);

		DrawCard(
			"../../tutorials/WeaponScope.html",
			"https://i.imgur.com/K5eVATY.png",
			"Weapon Scope",
			"See how to attach a scope (ex: Red Dot) to any weapon!"
		);

		DrawCard(
			"../../tutorials/WeaponFlashlight.html",
			"https://i.imgur.com/JUtyW9s.png",
			"Weapon Flashlight",
			"See how to create and attach a flashlight to any weapon!"
		);
	</script>


Constructor Parameters
----------------------

.. list-table:: 
  :widths: 15 55 30

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
    - ModelName
    - Skeletal Mesh Path

  * - :term:`number`
    - CollisionType
    - 0 *(Normal)*

  * - :term:`boolean`
    - GravityEnabled
    - true

  * - :term:`number`
    - AmmoClip
    - 32

  * - :term:`number`
    - AmmoBag
    - 1024

  * - :term:`number`
    - ClipCapacity
    - 32

  * - :term:`number`
    - BaseDamage
    - 30

  * - :term:`number`
    - Spread *(the higher the less precision)*
    - 20

  * - :term:`number`
    - BulletCount *(how many bullets are fired at once - 1 for common weapons and >1 for shotguns)*
    - 1

  * - :term:`number`
    - AmmoToReload *(AmmoClip for common weapons, 1 for shotguns)*
    - 32

  * - :term:`number`
    - BulletMaxDistance
    - 20000

  * - :term:`number`
    - BulletVelocity *(visuals only)*
    - 7500

  * - :ref:`Color`
    - BulletColor
    - Color(10000, 20, 0)

  * - :term:`number`
    - SightFOVMultiplier *(amount of FOV reduced when Aiming Down Sights (ADS))*
    - 0.5

  * - :ref:`Vector`
    - SightLocation *(offset applied to align player's head to weapon's sight when ADS)*
    - 

  * - :ref:`Rotator`
    - SightRotation *(rotation applied on the weapon when ADS)*
    - 

  * - :ref:`Vector`
    - LeftHandLocation *(location relative to weapon's root to put the left hand)*
    - 

  * - :ref:`Rotator`
    - LeftHandRotation *(rotation relative to weapon's root to put the left hand)*
    - 

  * - :ref:`Vector`
    - RightHandOffset *(offset of right hand - to offset the weapon as well)*
    - 

  * - :term:`number`
    - HandlingMode *(0. SingleHandedWeapon, 1. DoubleHandedWeapon, 2. SingleHandedMelee, 3. DoubleHandedMelee, 4. Throwable, 5. Torch)*
    - 0

  * - :term:`number`
    - Cadence *(frequency of shots in seconds)*
    - 0.15

  * - :term:`boolean`
    - CanHoldUse *(enables keep holding to keep firing)*
    - true

  * - :term:`boolean`
    - ReleaseToShot *(needs to release the fire button to shot)*
    - false

  * - :term:`string`
    - BulletTrailParticle *(particle of bullet trail)*
    - 

  * - :term:`string`
    - BarrelParticle *(particle of muzzle fire effect)*
    - 

  * - :term:`string`
    - ShellsParticle *(particle of shells being spit out)*
    - 

  * - :term:`string`
    - DrySound *(sound when weapon is dry)*
    - 

  * - :term:`string`
    - LoadSound
    - 

  * - :term:`string`
    - UnloadSound
    - 

  * - :term:`string`
    - ZoomingSound *(sound when switching aimings (wheel mouse))*
    - 

  * - :term:`string`
    - AimingSound *(sound when going from no aim to aiming)*
    - 

  * - :term:`string`
    - ShotSound
    - 

  * - :term:`string`
    - CharacterReloadingAnimation
    - 

  * - :term:`string`
    - CharacterAimingAnimation
    - 

  * - :term:`string`
    - MagazineMesh *(mesh used when reloading)*
    - Static Mesh Path


Properties
----------

.. list-table:: 
  :widths: 5 10 35 50

  * - 
    - **Type**
    - **Name**
    - **Description**

  * - |client-read-only-label|
    - :term:`number`
    - BaseDamage 
    - Weapon's Base Damage

  * - |client-read-only-label|
    - :term:`number`
    - Cadence 
    - Speed of shots (1 shot at each ``Cadence`` seconds)

  * - |client-read-only-label|
    - :term:`number`
    - ClipCapacity 
    - Weapon's Clip Capacity

  * - |client-read-only-label|
    - :term:`number`
    - SightFOVMultiplier 
    - Amount of FOV reduced when Aiming Down Sights (ADS)

  * - |client-read-only-label|
    - :term:`number`
    - Spread 
    - The higher the less precision


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
    - SetAmmoBag(:term:`number` NewAmmo)
    - Sets this Weapon's Ammo Bag

  * - |server-only-label|
    - 
    - SetAmmoClip(:term:`number` NewAmmo)
    - Sets this Weapon's Ammo Clip

  * - |server-only-label|
    - 
    - SetBulletColor(:ref:`Color` Color)
    - Bullet Color

  * - |server-only-label|
    - 
    - SetLeftHandTransform(:ref:`Vector` Location, :ref:`Rotator` Rotation)
    - Left Hand Offset

  * - |server-only-label|
    - 
    - SetRightHandOffset(:ref:`Vector` Offset)
    - Offset of Right Hand

  * - |server-only-label|
    - 
    - SetSightTransform(:ref:`Vector` Location, :ref:`Rotator` Rotation)
    - Offset applied to align player's head to weapon's sight and rotation applied on the weapon when ADS

  * - 
    - :term:`number`
    - GetAmmoBag()
    - Gets this Weapon's Ammo Bag

  * - 
    - :term:`number`
    - GetAmmoClip()
    - Gets this Weapon's Ammo Clip

  * - 
    - :ref:`Color`
    - GetBulletColor()
    - 

  * - 
    - :ref:`Vector`
    - GetRightHandOffset()
    - 

.. include:: ../common/functions/Pickable.rst

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
    - Fire
    - :ref:`Weapon` self, :ref:`Character` shooter
    - When this weapon is fired

  * -
    - Reload
    - :ref:`Weapon` self, :ref:`Character` character, :term:`number` AmmoToReload
    - When this weapon is reloaded, optionally by a Character

.. include:: ../common/events/Pickable.rst

.. include:: ../common/events/Actor.rst