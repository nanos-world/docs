.. _Character:

.. include:: ../common/common.rst

*********
Character
*********

Chad Character

.. attention:: This page is under construction.


Usage
-----

.. tabs::
 .. code-tab:: lua Lua

    local char = Character(Vector(123, 456, 789), Rotator(0, 0, 90))


Constructors
------------

.. list-table::
   :widths: 3 1

   * - **Name**
     - **Description**

   * - Character(:ref:`Vector` Location, :ref:`Rotator` Rotation)
     - Default Constructor


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
    - PickUpWeapon(:ref:`Weapon`)
    - Gives a Weapon to the Character :term:`number`

  * - |server-only-label|
    - 
    - PickUpGrenade(:ref:`Grenade`)
    - Gives a Grenade to the Character

  * - |server-only-label|
    - 
    - PickUpGrenade(:ref:`Item`)
    - Gives an Item to the Character

  * - |server-only-label|
    - 
    - Drop()
    - Drops whatever the Character is holding

  * - 
    - Vehicle
    - GetVehicle()
    - Gets the Vehicle the Character is on

  * - 
    - Player
    - GetPlayer()
    - Gets the Player controlling this Character

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
    - PickUpItem
    - :ref:`Character` self, :ref:`Item`/:ref:`Grenade`/:ref:`Weapon` object
    - When Character picks up anything

  * -
    - DropItem
    - :ref:`Character` self, :ref:`Item`/:ref:`Grenade`/:ref:`Weapon` object
    - When Character drops anything

  * -
    - EnterVehicle
    - :ref:`Character` self, :ref:`Vehicle` vehicle
    - When Character enters a vehicle

  * -
    - LeaveVehicle
    - :ref:`Character` self, :ref:`Vehicle` vehicle
    - When Character leaves a vehicle