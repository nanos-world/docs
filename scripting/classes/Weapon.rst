.. _Weapon:

.. include:: ../common/common.rst

******
Weapon
******

.. image:: https://i.imgur.com/GqB7p3Z.png

Weapons are fully customizable, all pieces of the weapon can be changed with immense possibility of creation

.. tip:: Please take a look at our Default's Weapon package with all built-in Weapons already properly configured and ready to use: `<https://github.com/nanos-world/nanos-world-weapons>`_.


Usage
-----

.. tabs::
 .. code-tab:: lua Lua

    -- spawning a AK47
    local new_weapon = Weapon(
        Vector(-900, 185, 215), -- Spawn Location
        Rotator(0, 90, 90),     -- Spawn Rotation
        "NanosWorld::SK_AK47",  -- Model
        CollisionType.Normal,   -- Collision (Normal)
        true,                   -- Gravity Enabled
        30,                     -- Ammo in the Clip
        1000,                   -- Ammo in the Bag
        30,                     -- Clip Capacity
        30,                     -- Base Damage
        30,                     -- Spread
        1,                      -- Bullet Count (1 for common weapons, > 1 for shotguns)
        30,                     -- Ammo to Reload (Ammo Clip for common weapons, 1 for shotguns)
        20000,                  -- Max Bullet Distance
        20000,                  -- Bullet Speed (visual only)
        Color(100, 58, 0),      -- Bullet Color
        0.5,                    -- Sight's FOV multiplier
        Vector(0, 0, -14.85),   -- Sight Location
        Rotator(-1, 0, 0),      -- Sight Rotation
        Vector(26, 0, 8.5),     -- Left Hand Location
        Rotator(0, 60, 90),     -- Left Hand Rotation
        Vector(-10, 0, 0),      -- Right Hand Offset
        HandlingMode.DoubleHandedWeapon,
        0.1,                    -- Cadence (1 shot at each 0.15seconds)
        true,                   -- Can Hold Use (keep pressing to keep firing, common to automatic weapons)
        false,                  -- Need to release to Fire (common to Bows)
        "NanosWorld::P_Bullet_Trail",            -- Bullet Trail Particle
        "NanosWorld::P_Weapon_BarrelSmoke",      -- Barrel Particle
        "NanosWorld::P_Weapon_Shells_762x39",    -- Shells Particle
        "NanosWorld::A_Rifle_Dry",               -- Weapon's Dry Sound
        "NanosWorld::A_Rifle_Load",              -- Weapon's Load Sound
        "NanosWorld::A_Rifle_Unload",            -- Weapon's Unload Sound
        "NanosWorld::A_AimZoom",                 -- Weapon's Zooming Sound
        "NanosWorld::A_Rattle",                  -- Weapon's Aiming Sound
        "NanosWorld::A_AK47_Shot",               -- Weapon's Shot Sound
        "NanosWorld::AM_Mannequin_Reload_Rifle", -- Character's Reloading Animation
        "NanosWorld::AM_Mannequin_Sight_Fire",   -- Character's Aiming Animation
        "NanosWorld::SM_AK47_Mag_Empty",         -- Magazine Mesh
        CrosshairType.Regular
    )


Using our Default Weapons Package `<https://github.com/nanos-world/nanos-world-weapons>`_ (already built-in included) for spawning an AK47:

.. tabs::
 .. code-tab:: lua Lua

    -- Includes this Package in your Package
    Package:RequirePackage("NanosWorldWeapons")
    
    -- Spawning the AK47
    local my_ak47 = NanosWorldWeapons.AK47(Vector(1035, 154, 300), Rotator())

    -- Giving the Weapon to a Character
    my_character:PickUp(my_ak47)


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
    - location
    - Vector(0, 0, 0)

  * - :ref:`Rotator`
    - rotation
    - Rotator(0, 0, 0)

  * - :term:`string`
    - model_name
    - Skeletal Mesh Path

  * - :term:`CollisionType`
    - collision_type
    - CollisionType.Normal

  * - :term:`boolean`
    - gravity_enabled
    - true

  * - :term:`number`
    - ammo_clip
    - 32

  * - :term:`number`
    - ammo_bag
    - 1024

  * - :term:`number`
    - clip_capacity
    - 32

  * - :term:`number`
    - base_damage
    - 30

  * - :term:`number`
    - spread *(the higher the less precision)*
    - 20

  * - :term:`number`
    - bullet_count *(how many bullets are fired at once - 1 for common weapons and >1 for shotguns)*
    - 1

  * - :term:`number`
    - ammo_to_reload *(AmmoClip for common weapons, 1 for shotguns)*
    - 32

  * - :term:`number`
    - bullet_max_distance
    - 20000

  * - :term:`number`
    - bullet_velocity *(visuals only)*
    - 7500

  * - :ref:`Color`
    - bullet_color
    - Color(10000, 20, 0)

  * - :term:`number`
    - sight_fov_multiplier *(amount of FOV reduced when Aiming Down Sights (ADS))*
    - 0.5

  * - :ref:`Vector`
    - sight_location *(offset applied to align player's head to weapon's sight when ADS)*
    - 

  * - :ref:`Rotator`
    - sight_rotation *(rotation applied on the weapon when ADS)*
    - 

  * - :ref:`Vector`
    - left_hand_location *(location relative to weapon's root to put the left hand)*
    - 

  * - :ref:`Rotator`
    - left_hand_rotation *(rotation relative to weapon's root to put the left hand)*
    - 

  * - :ref:`Vector`
    - right_hand_offset *(offset of right hand - to offset the weapon as well)*
    - 

  * - :term:`HandlingMode`
    - handling_mode *(SingleHandedWeapon, DoubleHandedWeapon, SingleHandedMelee, DoubleHandedMelee, Throwable, Torch)*
    - HandlingMode.SingleHandedWeapon

  * - :term:`number`
    - cadence *(frequency of shots in seconds)*
    - 0.15

  * - :term:`boolean`
    - can_hold_use *(enables keep holding to keep firing)*
    - true

  * - :term:`boolean`
    - release_to_shot *(needs to release the fire button to shot)*
    - false

  * - :term:`string`
    - bullet_trail_particle *(particle of bullet trail)*
    - 

  * - :term:`string`
    - barrel_particle *(particle of muzzle fire effect)*
    - 

  * - :term:`string`
    - shells_particle *(particle of shells being spit out)*
    - 

  * - :term:`string`
    - dry_sound *(sound when weapon is dry)*
    - 

  * - :term:`string`
    - load_sound
    - 

  * - :term:`string`
    - unload_sound
    - 

  * - :term:`string`
    - zooming_sound *(sound when switching aimings (wheel mouse))*
    - 

  * - :term:`string`
    - aiming_sound *(sound when going from no aim to aiming)*
    - 

  * - :term:`string`
    - shot_sound
    - 

  * - :term:`string`
    - character_reloading_animation
    - 

  * - :term:`string`
    - character_aiming_animation
    - 

  * - :term:`string`
    - magazine_mesh *(mesh used when reloading)*
    - Static Mesh Path

  * - :term:`CrosshairType`
    - crosshair
    - CrosshairType.Regular


Available Crosshairs
--------------------

.. image:: https://i.imgur.com/foF0F0d.jpg


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
    - SetAmmoBag(:term:`number` new_ammo)
    - Sets this Weapon's Ammo Bag

  * - |server-only-label|
    - 
    - SetAmmoClip(:term:`number` new_ammo)
    - Sets this Weapon's Ammo Clip

  * - |server-only-label|
    - 
    - SetBulletColor(:ref:`Color` color)
    - Bullet Color

  * - |server-only-label|
    - 
    - SetLeftHandTransform( |br-p| :ref:`Vector` location, |br-p| :ref:`Rotator` rotation |br| )
    - Left Hand Offset

  * - |server-only-label|
    - 
    - SetRightHandOffset(:ref:`Vector` offset)
    - Offset of Right Hand

  * - |server-only-label|
    - 
    - SetSightTransform( |br-p| :ref:`Vector` location, |br-p| :ref:`Rotator` rotation |br| )
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
    - :ref:`Weapon` self, |br| :ref:`Character` shooter
    - When this weapon is fired

  * -
    - Reload
    - :ref:`Weapon` self, |br| :ref:`Character` character, |br| :term:`number` ammo_to_reload
    - When this weapon is reloaded, optionally by a Character

.. include:: ../common/events/Pickable.rst

.. include:: ../common/events/Actor.rst