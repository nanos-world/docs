.. _Vector:

******
Vector
******

A vector composed of components (X, Y, Z) with floating point precision.

.. attention:: This page is under construction.


Usage
-----

.. tabs::
 .. code-tab:: lua Lua

    local NewVector = Vector(1452.5, 512, 943.1)


Properties
----------

.. list-table::
  :widths: 1 5 4
   
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
  :widths: 1 5 4
   
  * - **Returns**
    - **Name**
    - **Description**

  * - :term:`number`
    - Distance(:ref:`Vector` OtherVector)
    - Euclidean distance between two vectors.

  * - :term:`number`
    - Size()
    - Get the length (magnitude) of this vector.