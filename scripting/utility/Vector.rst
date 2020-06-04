.. _Vector:

.. include:: ../common/common.rst

******
Vector
******

A vector composed of components (X, Y, Z) with floating point precision.

.. tip:: This structure is Open Sourced at https://github.com/nanos-world/nanos-world-lua-lib. Feel free to push merge requests and suggest changes!

.. tip:: This structure supports `+`, `-`, `*`, `/`, `^`, `==`, and `tostring` operations.


Usage
-----

.. tabs::
 .. code-tab:: lua Lua

    local NewVector = Vector(1452.5, 512, 943.1)


Properties
----------

.. list-table::
  :widths: 10 40 50
   
  * - **Type**
    - **Name**
    - **Description**

  * - :term:`number`
    - X
    - X Coordinate

  * - :term:`number`
    - Y
    - Y Coordinate

  * - :term:`number`
    - Z
    - Z Coordinate


Functions
---------

.. list-table::
  :widths: 10 40 50
   
  * - **Returns**
    - **Name**
    - **Description**

  * - :term:`boolean`
    - Equals(:ref:`Vector` Other, :term:`number` Tolerance)
    - 

  * - :term:`number`
    - SizeSquared()
    - 

  * - :term:`number`
    - Size()
    - 

  * - :ref:`Rotator`
    - IsNearlyZero(:term:`number` Tolerance)
    - 

  * - :term:`boolean`
    - IsZero()
    - 

  * - :term:`number`
    - DistanceSquared(:ref:`Vector` Other)
    - 

  * - :term:`number`
    - Distance(:ref:`Vector` Other)
    - 