.. _Weapon:

.. include:: ../common/common.rst

******
Weapon
******

Chad Weapon

.. attention:: This page is under construction.


Usage
-----

.. tabs::
 .. code-tab:: lua Lua

    local NewWeapon = Weapon(
      Vector(-900, 185, 215), 
      Rotator(0, 90, 90), 
      "Blueprint'/Game/NanosWorld/Core/Weapons/Rifles/BP_Weapon_AK47.BP_Weapon_AK47_C'"
    )


Constructors
------------

.. list-table::
   :widths: 3 1

   * - **Name**
     - **Description**

   * - Weapon(:ref:`Vector` Location, :ref:`Rotator` Rotation, :term:`string` ModelName)
     - Default Constructor

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
    - BaseDamage 
    - Weapon's Base Damage

  * - |client-ready-only-label|
    - :term:`number`
    - ClipCapacity 
    - Weapon's Clip Capacity
	

Functions
---------

.. include:: ../common/functions/Actor.rst

.. include:: ../common/functions/Pickable.rst

.. list-table:: 
  :widths: 5 10 35 50

  * - 
    - **Returns**
    - **Name**
    - **Description**

  * - |server-only-label|
    - 
    - SetAmmoClip(:term:`number` NewAmmo)
    - Sets this Weapon's Ammo Clip

  * - |server-only-label|
    - 
    - SetAmmoBag(:term:`number` NewAmmo)
    - Sets this Weapon's Ammo Bag

  * - 
    - :term:`number`
    - GetAmmoClip()
    - Gets this Weapon's Ammo Clip

  * - 
    - :term:`number`
    - GetAmmoBag()
    - Gets this Weapon's Ammo Bag


Events
------

.. include:: ../common/events/Actor.rst

.. include:: ../common/events/Pickable.rst

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