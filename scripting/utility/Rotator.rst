.. _Rotator:

.. include:: ../common/common.rst

*******
Rotator
*******

A container for rotation information. All rotation values are stored in degrees.

.. tip:: This structure is Open Sourced at https://github.com/nanos-world/nanos-world-lua-lib. Feel free to push merge requests and suggest changes!

.. tip:: This structure supports `+`, `-`, `*` and `tostring` operations.


Usage
-----

.. tabs::
 .. code-tab:: lua Lua

    local NewRotator = Rotator(45, 90, 180)


Properties
----------

.. list-table::
  :widths: 10 40 50
   
  * - **Type**
    - **Name**
    - **Description**

  * - :term:`number`
    - Pitch
    - 

  * - :term:`number`
    - Yaw
    - 

  * - :term:`number`
    - Roll
    - 


Functions
---------

.. list-table::
  :widths: 10 40 50
   
  * - **Returns**
    - **Name**
    - **Description**

  * - :ref:`Vector`
    - GetForwardVector()
    - Get the forward (X) unit direction vector from this component, in world space.

  * - :ref:`Vector`
    - RotateVector()
    - Rotates a Vector by this Rotator.

  * - 
    - Normalize()
    - In-place normalize, removes all winding and creates the "shortest route" rotation.

  * - :ref:`Rotator`
    - GetNormalized()
    - Returns a new Rotator normalized.

  * - :term:`boolean`
    - IsNearlyZero(:term:`number` Tolerance)
    - 

  * - :term:`boolean`
    - IsZero()
    - 