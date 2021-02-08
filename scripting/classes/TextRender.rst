.. _TextRender:

.. include:: ../common/common.rst

***********
Text Render
***********

A Text Render class is useful for spawning Texts in 3D world, you can even attach to other entities.

.. note:: This is a Client only Class.

.. image:: https://i.imgur.com/Rr1mzO8.png


Usage
-----

.. tabs::
 .. code-tab:: lua Lua

    local my_text_render = TextRender(
        Vector(-100, 200, 300), 
        Rotator(), 
        "My Awesome Text", 
        Color(1, 0, 0), 
        1, -- Horizontal Alignment
        0, -- Vertical Alignment
        32, -- Size
        0, -- Lit
        false -- Align to Camera
    )


Constructor Parameters
----------------------

.. list-table:: 
  :widths: 15 65 20

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
    - text
    - 

  * - :ref:`Color`
    - color
    - Color(1, 1, 1, 1)

  * - :term:`number`
    - horizontal_alignment (0 - Left, 1 - Center, 2 - Right)
    - 0

  * - :term:`number`
    - vertical_alignment (0 - Top, 1 - Center, 2 - Bottom, 3 - Quad Top)
    - 0

  * - :term:`number`
    - size
    - 26

  * - :term:`number`
    - type (0 - Lit, 1 - Unlit, 2 - Unlit & Always Visible)
    - 0

  * - :term:`boolean`
    - align_to_camera (ajudsts the rotation automatically to always looks at the camera)
    - false


Functions
----------

.. list-table::
  :widths: 15 65 20

  * - **Returns**
    - **Name**
    - **Description**

  * - 
    - SetText(:term:`string` text)
    - Sets the Text

  * - 
    - SetColor(:ref:`Color` color)
    - Sets the Color

  * - 
    - SetSize(:term:`number` size)
    - Sets the Size

.. include:: ../common/functions/Actor.rst


Events
------

.. include:: ../common/events/Actor.rst


Related Tutorials
-----------------

.. raw:: html

	<script>
		DrawCard(
			"../../tutorials/NameTags.html",
			"https://i.imgur.com/AyHKrG1.png",
			"NameTags",
			"How to add Player's name above Character's head."
		);
	</script>