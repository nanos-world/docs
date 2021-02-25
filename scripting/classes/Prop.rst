.. _Prop:

.. include:: ../common/common.rst

****
Prop
****

A Prop represents a Dynamic Mesh which can be spawned in the world, can be grabbed around by characters and have physics.


Usage
-----

.. tabs::
 .. code-tab:: lua Lua

    local my_prop = Prop(
      Vector(-900, 185, 215), 
      Rotator(0, 90, 90), 
      "NanosWorld::SM_Crate_07"
    )


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

  * - :term:`string`
    - model_name
    - 

  * - :term:`number`
    - collision_type
    - 0 (Normal)

  * - :term:`boolean`
    - gravity_enabled
    - true
 
  * - :term:`boolean`
    - is_grabbable
    - true


Functions
----------

.. list-table:: 
  :widths: 5 10 35 50

  * - 
    - **Returns**
    - **Name**
    - **Description**

  * - 
    - 
    - SetDefaultMaterial(:term:`number` material_type = 1)
    - Replaces all materials of this actor with a nanos basic material with comon parameters available (1 - Masked, 2 - Translucent)

  * - |server-only-label|
    - 
    - SetGrabbable(:term:`boolean`)
    - Sets ability to Grab this Prop

  * - 
    - 
    - SetMaterialColorParameter(:term:`string` parameter_name, :ref:`Color` color)
    - Sets a Color parameter in this actor's material

  * - 
    - 
    - SetMaterialScalarParameter(:term:`string` parameter_name, :term:`number` scalar)
    - Sets a scalar parameter in this actor's material

  * - 
    - 
    - SetMaterialTextureParameter(:term:`string` parameter_name, :term:`string` texture_path)
    - Loads a image from computer (relative to `Assets/` folder) and sets as parameter in this actor's material

  * - 
    - 
    - SetMaterialVectorParameter(:term:`string` parameter_name, :ref:`Vector` vector)
    - Sets a Vector parameter in this actor's material

  * - 
    - :term:`string`
    - GetAssetName()
    - Gets the Asset name

  * - 
    - :ref:`Character`
    - GetHandler()
    - Gets the Character (if existing) which is holding this

  * - 
    - :term:`boolean`
    - IsGrabbable()
    - Gets ability to Grab this Prop

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
    - Grab
    - :ref:`Prop` self, |br| :ref:`Character` handler
    - When Character grabs a Prop

  * -
    - Hit
    - :ref:`Prop` self, |br| :term:`number` intensity
    - When this Prop hits something

  * -
    - UnGrab
    - :ref:`Prop` self, |br| :ref:`Character` handler
    - When Character ungrabs a Prop

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
