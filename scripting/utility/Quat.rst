.. _Quat:

.. include:: ../common/common.rst

**********
Quaternion
**********

Floating point quaternion that can represent a rotation about an axis in 3-D space.

.. tip:: This structure is Open Sourced at https://github.com/nanos-world/nanos-world-lua-lib. Feel free to push merge requests and suggest changes!

.. tip:: This structure supports `*` and `tostring` operations.


Usage
-----

.. tabs::
 .. code-tab:: lua Lua

    local new_quaternion = Quat(0.5, 0.5, 1, -1)


Properties
----------

.. list-table::
  :widths: 10 30 60
   
  * - **Type**
    - **Name**
    - **Description**

  * - :term:`number`
    - X
    - 

  * - :term:`number`
    - Y
    - 

  * - :term:`number`
    - Z
    - 

  * - :term:`number`
    - W
    - 


Functions
---------

.. list-table::
  :widths: 10 40 50
   
  * - **Returns**
    - **Name**
    - **Description**

  * - :ref:`Vector`
    - Rotator()
    - Get the Rotator representation of this Quaternion.
