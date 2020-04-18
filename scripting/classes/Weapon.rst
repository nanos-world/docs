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


Functions
----------

.. list-table:: 
  :widths: 1 4 4 4
   
  * - **Returns**
    - **Name**
    - **Parameters**
    - **Description**

  * - :ref:`Vector`
    - GetLocation()
    - 
    - Get the actor's position in the game world

  * - :ref:`Rotator`
    - GetRotation()
    - 
    - Gets the actor's rotation in the game world

  * - 
    - SetRotation
    - :ref:`Rotator` NewRotation
    - Sets the actor's rotation in the game world

  * - 
    - SetLocation
    - :ref:`Vector` NewLocation
    - Sets the actor's location in the game world

  * - :term:`string`
    - GetModelName()
    -
    - Get the actor's model name

Events
======

.. list-table:: 
  :widths: 1 4 4
   
  * - **Name**
    - **Parameters**
    - **Description**

  * - OnPickedUp
    - ``Weapon``
    - ``Weapon`` has been picked up

  * - OnDrop
    - ``Weapon``
    - ``Weapon`` has been dropped