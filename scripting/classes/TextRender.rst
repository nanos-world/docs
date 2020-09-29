.. _TextRender:

.. include:: ../common/common.rst

***********
Text Render
***********

A Text Render class is useful for spawning Texts in 3D world, you can even attach to other entities.

.. image:: https://i.imgur.com/Rr1mzO8.png


Usage
-----

.. tabs::
 .. code-tab:: lua Lua

    local MyTextRender = TextRender(
        Vector(-100, 200, 300), 
        Rotator(), 
        "My Awesome Text", 
        Color(1, 0, 0), 
        1, -- Horizontal Alignment
        0, -- Vertical Alignment
        32, -- Size
        false, -- Emissive
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
    - Location
    - Vector(0, 0, 0)

  * - :ref:`Rotator`
    - Rotation
    - Rotator(0, 0, 0)

  * - :term:`string`
    - Text
    - 

  * - :ref:`Color`
    - Color
    - Color(1, 1, 1, 1)

  * - :term:`number`
    - Horizontal Alignment (0 - Left, 1 - Center, 2 - Right)
    - 0

  * - :term:`number`
    - Vertical Alignment (0 - Top, 1 - Center, 2 - Bottom, 3 - Quad Top)
    - 0

  * - :term:`number`
    - Size
    - 26

  * - :term:`boolean`
    - Is Emissive (appears in the dark)
    - false

  * - :term:`boolean`
    - Align To Camera (ajudsts the rotation automatically to always looks at the camera)
    - false


Functions
----------

.. list-table::
  :widths: 15 65 20

  * - **Returns**
    - **Name**
    - **Description**

  * - 
    - SetText(:term:`string` Text)
    - Sets the Text

  * - 
    - SetColor(:ref:`Color` Color)
    - Sets the Color

  * - 
    - SetSize(:term:`number` Size)
    - Sets the Size

.. include:: ../common/functions/Actor.rst


Events
------

.. include:: ../common/events/Actor.rst
