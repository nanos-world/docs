.. _Light:

.. include:: ../common/common.rst

*****
Light
*****

A Light represents a Lighting source. Nanos World provides 3 types of lights: **Spot**, **Point** and **Rect**. All lights are Dynamic and because of that, very expensive! Keep that in mind before spawning 1000 lights ;).

.. tip:: You can spawn this entity is both Client or Server (if you spawn it on client, it won't be synchronized with other players).


Usage
-----

.. tabs::
 .. code-tab:: lua Lua

    local my_light = Light(
        Vector(-152, 245, 115), 
        Rotator(0, 90, 90), -- Relevant only for Rect and Spot light types
        Color(1, 0, 0), -- Red Tint
        0, -- Point Light type
        100, -- Intensity
        250, -- Attenuation Radius
        0, -- Cone Angle (Relevant only for Spot light type)
        0, -- Inner Cone Angle Percent (Relevant only for Spot light type)
        0, -- Max Draw Distance (Good for performance - 0 for infinite)
        true, -- Whether to use physically based inverse squared distance falloff, where Attenuation Radius is only clamping the light's contribution. (Spot and Point types only)
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
    - location
    - Vector(0, 0, 0)

  * - :ref:`Rotator`
    - rotation
    - Rotator(0, 0, 0)

  * - :ref:`Color`
    - color
    - Color(1, 1, 1, 1)

  * - :term:`number`
    - light_type (0 - Point, 1 - Spot, 3 - Rect)
    - 0 (Point)

  * - :term:`number`
    - intensity
    - 30

  * - :term:`number`
    - attenuation_radius
    - 250

  * - :term:`number`
    - cone_angle
    - 0

  * - :term:`number`
    - inner_cone_angle_percent (0-1)
    - 0

  * - :term:`number`
    - max_daw_distance
    - 0

  * - :term:`boolean`
    - cast_shadows
    - true

  * - :term:`boolean`
    - use_inverse_squared_falloff
    - true

  * - :term:`boolean`
    - enabled
    - true


Functions
----------

.. include:: ../common/functions/Actor.rst


Events
------

.. include:: ../common/events/Actor.rst