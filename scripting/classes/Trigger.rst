.. _Trigger:

.. include:: ../common/common.rst

*******
Trigger
*******

A Trigger class is a utility class to trigger events when some Actor enters an Area.

.. attention:: This page is under construction.


Usage
-----

.. tabs::
 .. code-tab:: lua Lua

	local MyTrigger = Trigger(Vector(-200, 100, 500), 100)
    
	MyTrigger:on("BeginOverlap", function(trigger, actorTriggering)
		Package:Log("Someone entered my Trigger")
	end)


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

  * - :term:`number`
    - Radius
    - 100


Functions
----------

.. list-table:: 
  :widths: 5 10 35 50

  * - 
    - **Returns**
    - **Name**
    - **Description**

  * - |server-only-label|
    - 
    - SetLocation(:ref:`Vector` NewLocation)
    - Sets the trigger's location in the game world

  * - |server-only-label|
    - 
    - SetRadius(:term:`number` Radius)
    - Sets the radius of this trigger


Events
------

.. list-table::
  :widths: 5 15 30 50
   
  * -
    - **Name**
    - **Arguments**
    - **Description**

  * -
    - BeginOverlap
    - :ref:`Trigger` self, any Actor
    - When an Actor enters this trigger

  * -
    - EndOverlap
    - :ref:`Trigger` self, any Actor
    - When an Actor leaves this trigger

.. include:: ../common/events/Actor.rst