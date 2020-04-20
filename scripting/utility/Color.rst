.. _Color:

.. include:: ../common/common.rst

*****
Color
*****

A color composed of components (R, G, B, A) with floating point precision. The values are between 0 and 1.

.. attention:: This page is under construction.


Usage
-----

.. tabs::
 .. code-tab:: lua Lua

    local GreyColor = Color(0.5, 0.5, 0.5, 1)


Properties
----------

.. list-table::
  :widths: 1 5 4
   
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
