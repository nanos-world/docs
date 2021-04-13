.. _Trigger:

.. include:: ../common/common.rst

*******
Trigger
*******

A Trigger class is a utility class to trigger events when any Entity enters an Area.


Usage
-----

.. tabs::
 .. code-tab:: lua Lua

    local my_trigger = Trigger(Vector(-200, 100, 500), 100)

    my_trigger:Subscribe("BeginOverlap", function(trigger, actor_triggering)
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
    - location
    - Vector(0, 0, 0)

  * - :term:`number`
    - radius
    - 100

  * - :term:`boolean`
    - is_visible
    - true

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
    - SetRadius(:term:`number` radius)
    - Sets the radius of this trigger

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
