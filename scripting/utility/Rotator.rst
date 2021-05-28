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

    local new_rotator = Rotator(45, 90, 180)


Properties
----------

.. list-table::
  :widths: 10 30 60
   
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
    - RotateVector(:ref:`Vector` vector)
    - Rotate a vector rotated by this rotator.

  * - 
    - Normalize()
    - In-place normalize, removes all winding and creates the "shortest route" rotation.

  * - :ref:`Vector`
    - UnrotateVector(:ref:`Vector` vector)
    - Returns the vector rotated by the inverse of this rotator.

  * - :ref:`Quat`
    - Quaternion()
    - Get Rotation as a quaternion.

  * - :ref:`Rotator`
    - GetNormalized()
    - Returns a new Rotator normalized.

  * - :term:`boolean`
    - IsNearlyZero(:term:`number` tolerance)
    - 

  * - :term:`boolean`
    - IsZero()
    - 