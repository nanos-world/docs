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

    local new_vector = Vector(1452.5, 512, 943.1)


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
    - Equals(:ref:`Vector` other, :term:`number` tolerance)
    - 

  * - :term:`number`
    - DistanceSquared(:ref:`Vector` other)
    - 

  * - :term:`number`
    - Distance(:ref:`Vector` other)
    - 

  * - :ref:`Vector`
    - GetSafeNormal()
    - Gets a normalized copy of the vector, checking it is safe to do so based on the length.

  * - :ref:`boolean`
    - IsNearlyZero(:term:`number` tolerance)
    - 

  * - :term:`boolean`
    - IsZero()
    - 

  * - 
    - Normalize()
    - Normalize this vector in-place if it is larger than a given tolerance. Leaves it unchanged if not.

  * - :term:`number`
    - SizeSquared()
    - 

  * - :ref:`Rotator`
    - Rotation()
    - Returns the orientation corresponding to the direction in which the vector points.

  * - :term:`number`
    - Size()
    - 