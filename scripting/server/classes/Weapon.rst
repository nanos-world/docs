.. _Weapon:

******
Weapon
******

Chad Weapon

.. attention:: This page is under construction.


Properties
----------

.. list-table:: 
   :widths: 1 1 8
   :header-rows: 1

   * - Name
     - Type
     - Description

   * - position
     - :ref:`Vector`
     - Position in the game world

   * - rotation
     - :ref:`Rotator`
     - Rotation in the game world

   * - model
     - :term:`string`
     - Model Name


Tutorials
---------

.. tabs::
 .. code-tab:: lua Lua

	local NewWeapon = Weapon(
	  Vector(-900, 185, 215), 
	  Rotator(0, 90, 90), 
	  "Blueprint'/Game/NanosWorld/Core/Weapons/Rifles/BP_Weapon_AK47.BP_Weapon_AK47_C'"
	)