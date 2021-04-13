.. _Vector2D:

.. include:: ../common/common.rst

********
Vector2D
********

A Vector2D composed of components (X, Y) with floating point precision. Used mainly for HUD and Drawing on screen.

.. tip:: This structure is Open Sourced at https://github.com/nanos-world/nanos-world-lua-lib. Feel free to push merge requests and suggest changes!

.. tip:: This structure supports `+`, `-`, `*`, `/`, `==`, and `tostring` operations.


Usage
-----

.. tabs::
 .. code-tab:: lua Lua

    local new_vector2D = Vector2D(1452.5, 512)


Properties
----------

.. list-table::
  :widths: 10 30 60
   
  * - **Type**
    - **Name**
    - **Description**

  * - :term:`number`
    - X
    - X Coordinate

  * - :term:`number`
    - Y
    - Y Coordinate