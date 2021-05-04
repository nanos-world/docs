.. _Trigger:

.. include:: ../common/common.rst

*******
Trigger
*******

A Trigger class is a utility class to trigger events when any Entity enters an Area.

.. image:: https://i.imgur.com/LcjQqpj.png


Usage
-----

.. tabs::
 .. code-tab:: lua Lua

    local sphere_trigger = Trigger(Vector(-200, 100, 500), Rotator(), Vector(100), TriggerType.Sphere, true, Color(1, 0, 0))

    sphere_trigger:Subscribe("BeginOverlap", function(trigger, actor_triggering)
        Package:Log("Something entered my Sphere Trigger")
    end)

    local box_trigger = Trigger(Vector(300, 200, 500), Rotator(0, 45, 0), Vector(150, 150, 150), TriggerType.Box, true, Color(0, 1, 0))

    box_trigger:Subscribe("BeginOverlap", function(trigger, actor_triggering)
        Package:Log("Something entered my Box Trigger")
    end)
  
    box_trigger:Subscribe("EndOverlap", function(trigger, actor_triggering)
        Package:Log("Something left my Box Trigger")
    end)


Constructor Parameters
----------------------

.. list-table:: 
  :widths: 20 45 35

  * - **Type**
    - **Name**
    - **Default**

  * - :ref:`Vector`
    - location
    - Vector(0, 0, 0)

  * - :ref:`Rotator`
    - rotation
    - Rotator(0, 0, 0)

  * - :ref:`Vector`
    - extent
    - Vector(0, 0, 0)

  * - :term:`TriggerType`
    - trigger_type (*Sphere* or *Box*)
    - TriggerType.Sphere

  * - :term:`boolean`
    - is_visible
    - false

  * - :ref:`Color`
    - color (of the Trigger Sphere - if Visible)
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
    - SetExtent(:ref:`Vector` extent)
    - Sets the extent size of this trigger (sphere triggers will use only the .X component for radius)

  * - |server-only-label|
    - 
    - SetVisibility(:term:`boolean` is_visible)
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
    - :ref:`Trigger` self, |br| :term:`any` entity
    - When an entity enters this trigger

  * -
    - EndOverlap
    - :ref:`Trigger` self, |br| :term:`any` entity
    - When an entity leaves this trigger

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
