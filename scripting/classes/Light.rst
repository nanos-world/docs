.. _Light:

.. include:: ../common/common.rst

*****
Light
*****

A Light represents a Lighting source. Nanos World provides 3 types of lights: **Spot**, **Point** and **Rect**. All lights are Dynamic and because of that, very expensive! Keep that in mind before spawning 1000 lights ;).


Usage
-----

.. tabs::
 .. code-tab:: lua Lua

    local MyLight = Light(
        Vector(-152, 245, 115), 
        Rotator(0, 90, 90), -- Relevant only for Rect and Spot light types
        Color(1, 0, 0), -- Red Tint
        0, -- Point Light type
        100, -- Intensity
        250, -- Attenuation Radius
        0, -- Source Radius (Relevant only for Spot and Point light types)
        0, -- Source Soft Radius (Relevant only for Spot and Point light types)
        true, -- Cast Shadows?
        true -- Enabled?
    )


Related Tutorials
-----------------

.. raw:: html

	<script>
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
  :widths: 20 45 35

  * - **Type**
    - **Name**
    - **Default**

  * - :ref:`Vector`
    - Location
    - Vector(0, 0, 0)

  * - :ref:`Rotator`
    - Rotation
    - Rotation(0, 0, 0)

  * - :ref:`Color`
    - Color
    - Color(1, 1, 1, 1)

  * - :term:`number`
    - LightType (0 - Point, 1 - Spot, 3 - Rect)
    - 0 (Point)

  * - :term:`number`
    - Intensity
    - 30

  * - :term:`number`
    - AttenuationRadius
    - 250

  * - :term:`number`
    - SouceRadius
    - 0

  * - :term:`number`
    - SoftSouceRadius
    - 250

  * - :term:`boolean`
    - CastShadows
    - true

  * - :term:`boolean`
    - Enabled
    - true


Functions
----------

.. include:: ../common/functions/Actor.rst


Events
------

.. include:: ../common/events/Actor.rst