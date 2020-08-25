.. _Trigger:

.. include:: ../common/common.rst

*******
Trigger
*******

A Trigger class is a utility class to trigger events when some Actor enters an Area.


Usage
-----

.. tabs::
 .. code-tab:: lua Lua

    local MyTrigger = Trigger(Vector(-200, 100, 500), 100)
    
    MyTrigger:on("BeginOverlap", function(actorTriggering)
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

  * - :term:`boolean`
    - Is Visible
    - true

  * - :ref:`Color`
    - Color of the Trigger Sphere (if Visible)
    - Color(1, 0, 0, 1)


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
    - SetRadius(:term:`number` Radius)
    - Sets the radius of this trigger

  * - |server-only-label|
    - 
    - SetVisibility(:term:`boolean` Visible)
    - Sets if this Trigger is visible as a Sphere

.. attention:: :ref:`Trigger` inherits from Actor, but some of the following functions doesn't have any effect. E.g. ``SetCollision``, ``SetGravityEnabled``, ``AddImpulse``, ``SetScale``.

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
    - BeginOverlap
    - :ref:`Trigger` self, any Actor
    - When an Actor enters this trigger

  * -
    - EndOverlap
    - :ref:`Trigger` self, any Actor
    - When an Actor leaves this trigger

.. include:: ../common/events/Actor.rst


Related Tutorials
-----------------

.. raw:: html

	<script>
		DrawCard(
			"../../tutorials/PropRain.html",
			"https://i.imgur.com/0VVlryj.png",
			"Prop Rain",
			"A little fun making it rain props when entering a trigger!"
		);
	</script>
