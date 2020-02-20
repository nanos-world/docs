.. _Vector:

******
Vector
******

A vector composed of components (X, Y, Z) with floating point precision.

.. attention:: This page is under construction.


Properties
----------

.. list-table::
  :widths: 1 1 8
  :header-rows: 1
   
  * - Name
    - Type
    - Description

  * - X
    - :term:`number`
    - X Coordinate

  * - Y
    - :term:`number`
    - Y Coordinate

  * - Z
    - :term:`number`
    - Z Coordinate


Functions
---------

.. list-table:: 
  :widths: 1 9
  :header-rows: 1
   
  * - Return Type
    - Name

  * - :term:`number`
    - :ref:`Distance<Vector_Function_Distance>`\(:ref:`Vector` OtherVector)

  * - :term:`number`
    - :ref:`Size<Vector_Function_Size>`\()


Function Descriptions
---------------------

.. _Vector_Function_Distance:

- :term:`number` Distance(:ref:`Vector` OtherVector)

Euclidean distance between two vectors.

----

.. _Vector_Function_Size:

- :term:`number` Size()

Get the length (magnitude) of this vector.