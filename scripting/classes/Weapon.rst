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

    -- Spawning an AK47
    local new_weapon = Weapon(Vector(-900, 185, 215), Rotator(0, 90, 90), "NanosWorld::SK_AK47", CollisionType.Normal, true)

    -- Configures Weapon Base Settings
    new_weapon:SetAmmoSettings(30, 1000)
    new_weapon:SetDamage(30)
    new_weapon:SetSpread(30)
    new_weapon:SetBulletSettings(1, 20000, 20000, Color(100, 58, 0))
    new_weapon:SetCadence(0.1)

    -- Configures how the Character Grabs and Aims the Weapon
    new_weapon:SetHandlingMode(HandlingMode.DoubleHandedWeapon)
    new_weapon:SetSightTransform(Vector(0, 0, -14.85), Rotator(-1, 0, 0))
    new_weapon:SetLeftHandTransform(Vector(26, 0, 8.5), Rotator(0, 60, 90))
    new_weapon:SetRightHandOffset(Vector(-10, 0, 0))

    -- Configures Weapon Particles
    new_weapon:SetParticlesBulletTrail("NanosWorld::P_Bullet_Trail")
    new_weapon:SetParticlesBarrel("NanosWorld::P_Weapon_BarrelSmoke")
    new_weapon:SetParticlesShells("NanosWorld::P_Weapon_Shells_762x39")

    -- Configures Weapon Sounds
    new_weapon:SetSoundDry("NanosWorld::A_Rifle_Dry")
    new_weapon:SetSoundLoad("NanosWorld::A_Rifle_Load")
    new_weapon:SetSoundUnload("NanosWorld::A_Rifle_Unload")
    new_weapon:SetSoundZooming("NanosWorld::A_AimZoom")
    new_weapon:SetSoundAim("NanosWorld::A_Rattle")
    new_weapon:SetSoundFire("NanosWorld::A_AK47_Shot")

    -- Configures Weapon Animations
    new_weapon:SetAnimationCharacterFire("NanosWorld::AM_Mannequin_Sight_Fire")
    new_weapon:SetAnimationReload("NanosWorld::AM_Mannequin_Reload_Rifle")

    -- Configures the Mesh to drop when reloading
    new_weapon:SetMagazineMesh("NanosWorld::SM_AK47_Mag_Empty")

    -- Configures the Crosshair Type
    new_weapon:SetCrosshairSetting(CrosshairType.Regular)


Using our Default Weapons Package `<https://github.com/nanos-world/nanos-world-weapons>`_ (already built-in included) for spawning an AK47:

.. tabs::
 .. code-tab:: lua Lua

    -- Includes the nanos world Default Weapons Package in your Package (you don't need to download it, just include it!)
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


Available Crosshairs
--------------------

.. image:: https://i.imgur.com/foF0F0d.jpg



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
    - Sets this Weapon's Ammo in the Bag

  * - |server-only-label|
    - 
    - SetAmmoClip(:term:`number` new_ammo)
    - Sets this Weapon's Ammo in the Clip

  * - |server-only-label|
    - 
    - SetAmmoSettings( |br-p| :term:`number` ammo_clip, |br-p| :term:`number` ammo_bag, |br-p| :term:`number` ammo_to_reload = ammo_clip, |br-p| :term:`number` clip_capacity = ammo_clip |br| )
    - Auxiliar for setting and configuring ammo |br| * **ammo_to_reload** is the amount of ammo which will be effectively reloaded in the clip when reloading - defaults to **ammo_clip** |br| * **clip_capacity** is how much ammo the clip can hold without needing to reload - defaults to **ammo_clip**

  * - |server-only-label|
    - 
    - SetAnimationCharacterFire( |br-p| :term:`string` animation_asset_path |br| )
    - Animation played by the Character when Firing

  * - |server-only-label|
    - 
    - SetAnimationReload( |br-p| :term:`string` animation_asset_path |br| )
    - Animation playedb y the Character when Reloading (currently this animation must be one of the default ones (*AM_Mannequin_Reload_Rifle, AM_Mannequin_Reload_Pistol or AM_Mannequin_Reload_Shotgun*) as they have internal triggers to finish the reload).

  * - |server-only-label|
    - 
    - SetBulletColor(:ref:`Color` color)
    - Set the Bullet Color (only has effect if using Bullet Trail particle *P_Bullet_Trail* or if you particle has the *Color* parameter)

  * - |server-only-label|
    - 
    - SetBulletSettings( |br-p| :term:`number` bullet_count, |br-p| :term:`number` bullet_max_distance, |br-p| :term:`number` bullet_velocity, |br-p| :ref:`Color` bullet_color |br| )
    - Auxiliar for setting and configuring the Bullet. |br| * **bullet_velocity** is visuals only |br| * **bullet_count** (1 for common weapons, > 1 for shotguns)

  * - |server-only-label|
    - 
    - SetCadence(:ref:`number` cadence)
    - Speed of shots (1 shot at each ``cadence`` seconds)

  * - |server-only-label|
    - 
    - SetClipCapacity(:ref:`number` clip)
    - Capacity of the Weapon's Clip

  * - |server-only-label|
    - 
    - SetCrosshairSetting(:term:`CrosshairType` type)
    - Sets the Crosshair Type

  * - |server-only-label|
    - 
    - SetDamage(:ref:`number` damage)
    - Base Weapon's Damage

  * - |server-only-label|
    - 
    - SetHandlingMode(:term:`HandlingMode` mode)
    - Sets how the Character grabs this Weapon

  * - |server-only-label|
    - 
    - SetLeftHandTransform( |br-p| :ref:`Vector` location, |br-p| :ref:`Rotator` rotation |br| )
    - Left Hand Offset

  * - |server-only-label|
    - 
    - SetMagazineMesh(:term:`string` static_mesh_asset_path)
    - The mesh used when the Character reloads the weapon. Will drop this Mesh as an animation effect.

  * - |server-only-label|
    - 
    - SetParticlesBulletTrail(:term:`string` particle_asset_path)
    - Particle of the Bullet flying

  * - |server-only-label|
    - 
    - SetParticlesBarrel(:term:`string` particle_asset_path)
    - Particle of the Fire Blast in the muzzle

  * - |server-only-label|
    - 
    - SetParticlesShells(:term:`string` particle_asset_path)
    - Particle of the empty bullet flying from the weapon when shooting

  * - |server-only-label|
    - 
    - SetRightHandOffset(:ref:`Vector` offset)
    - Offset of Right Hand. To position relative to the camera.

  * - |server-only-label|
    - 
    - SetSightFOVMultiplier(:ref:`number` multiplier)
    - The FOV multiplier when ADS

  * - |server-only-label|
    - 
    - SetSightTransform( |br-p| :ref:`Vector` location, |br-p| :ref:`Rotator` rotation |br| )
    - Offset applied to align player's head to weapon's sight and rotation applied on the weapon when ADS

  
  * - |server-only-label|
    - 
    - SetSoundDry(:term:`string` sound_asset_path)
    - Sound when weapon has not bullet and try to shoot
  
  * - |server-only-label|
    - 
    - SetSoundLoad(:term:`string` sound_asset_path)
    - Sound when Loading a magazine
  
  * - |server-only-label|
    - 
    - SetSoundUnload(:term:`string` sound_asset_path)
    - Sound when Unloading a magazine
  
  * - |server-only-label|
    - 
    - SetSoundZooming(:term:`string` sound_asset_path)
    - Sound when Zooming
  
  * - |server-only-label|
    - 
    - SetSoundAim(:term:`string` sound_asset_path)
    - Sound when Aiming
  
  * - |server-only-label|
    - 
    - SetSoundFire(:term:`string` sound_asset_path)
    - Sound when Shooting

  * - |server-only-label|
    - 
    - SetSpread(:ref:`number` damage)
    - Base Weapon's Spread (the higher the less precision - recommended value: 20)

  * - |server-only-label|
    - 
    - SetUsageSettings( |br-p| :term:`boolean` can_hold_use, |br-p| :term:`boolean` hold_release_use |br| )
    - Sets if the Weapon can hold to keep firing and if it needs to release to fire

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
    - :term:`number`
    - GetDamage()
    - 

  * - 
    - :ref:`Vector`
    - GetRightHandOffset()
    - 

  * - 
    - :term:`number`
    - GetSpread()
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