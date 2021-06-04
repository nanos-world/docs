.. _Color:

.. include:: ../common/common.rst

*****
Color
*****

A color composed of components (R, G, B, A) with floating point precision. The values are between 0 and 1.

.. tip:: This structure is Open Sourced at https://github.com/nanos-world/nanos-world-lua-lib. Feel free to push merge requests and suggest changes!

.. tip:: This structure supports `+`, `-`, `*`, `/`, `==`, and `tostring` operations.


Usage
-----

.. tabs::
 .. code-tab:: lua Lua

    local grey_color = Color(0.5, 0.5, 0.5, 1)


Properties
----------

.. list-table::
  :widths: 10 30 60
   
  * - **Type**
    - **Name**
    - **Description**

  * - :term:`number`
    - R
    - Red color percentage (0-1)

  * - :term:`number`
    - G
    - Green color percentage (0-1)

  * - :term:`number`
    - B
    - Blue color percentage (0-1)

  * - :term:`number`
    - A
    - Alpha color percentage (0-1). Alpha is the transparency. 0 -> fully transparency and 1 -> no transparency


Static Properties
-----------------

.. list-table::
  :widths: 30 70

  * - **Value**
    - **Name**

  * - Color(1, 1, 1)
    - Color.WHITE

  * - Color(0, 0, 0)
    - Color.BLACK

  * - Color(1, 0, 0)
    - Color.RED

  * - Color(0, 1, 0)
    - Color.GREEN

  * - Color(0, 0, 1)
    - Color.BLUE

  * - Color(1, 1, 0)
    - Color.YELLOW

  * - Color(0, 1, 1)
    - Color.CYAN

  * - Color(1, 0, 1)
    - Color.MAGENTA

  * - Color(1, 0.5, 0)
    - Color.ORANGE

  * - Color(0.5, 1, 1)
    - Color.CHARTREUSE

  * - Color(0, 1, 0.5)
    - Color.AQUAMARINE

  * - Color(0, 0.5, 1)
    - Color.AZURE

  * - Color(0.5, 0, 1)
    - Color.VIOLET

  * - Color(1, 0, 0.5)
    - Color.ROSE


Static Functions
----------------

.. list-table::
  :widths: 10 40 50

  * - **Returns**
    - **Name**
    - **Description**

  * - :ref:`Color`
    - Color.RandomPalette()
    - Returns a random color from Color Palette

  * - :ref:`Color`
    - Color.Random()
    - Returns a random color from all color scope

  * - :ref:`Color`
    - Color.FromRGBA( |br-p| :term:`number` r, |br-p| :term:`number` g, |br-p| :term:`number` b, |br-p| :term:`number` a |br| )
    - Returns the color from 0-255 range values

  * - :ref:`Color`
    - Color.FromCYMK( |br-p| :term:`number` c, |br-p| :term:`number` y, |br-p| :term:`number` m, |br-p| :term:`number` k, |br-p| :term:`number` a |br| )
    - Returns a color from the CYMK format

  * - :ref:`Color`
    - Color.FromHSL( |br-p| :term:`number` h, |br-p| :term:`number` s, :term:`number` l |br| )
    - Returns a color from the HSL format

  * - :ref:`Color`
    - Color.FromHSV( |br-p| :term:`number` h, |br-p| :term:`number` s, :term:`number` v |br| )
    - Returns a color from the HSV format

  * - :ref:`Color`
    - Color.FromHEX(:term:`string` hex)
    - Returns a color from the Hexadecimal format