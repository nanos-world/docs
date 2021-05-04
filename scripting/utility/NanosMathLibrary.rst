.. _NanosMathLibrary:

.. include:: ../common/common.rst

****************
NanosMathLibrary
****************

A table containing useful and aux Math functions.

.. tip:: This structure is Open Sourced at https://github.com/nanos-world/nanos-world-lua-lib. Feel free to push merge requests and suggest changes!


Usage
-----

.. tabs::
 .. code-tab:: lua Lua

    local axis = NanosMathLibrary.ClampAxis(720)


Functions
---------

.. list-table::
  :widths: 10 30 60

  * - **Returns**
    - **Name**
    - **Description**

  * - :term:`number`
    - ClampAxis(:term:`number`)
    - Clamps an angle to the range of [0, 360].

  * - :term:`number`
    - NormalizeAxis(:term:`number`)
    - Clamps an angle to the range of [-180, 180].

  * - :term:`number`
    - FInterpTo( |br-p| :term:`number` current, |br-p| :term:`number` target, |br-p| :term:`number` delta_time, |br-p| :term:`number` InterpSpeed |br| )
    - 

  * - :ref:`Rotator`
    - RInterpTo( |br-p| :ref:`Rotator` current, |br-p| :ref:`Rotator` target, |br-p| :term:`number` delta_time, |br-p| :term:`number` interp_speed |br| )
    - 

  * - :ref:`Rotator`
    - RInterpConstantTo( |br-p| :ref:`Rotator` current, |br-p| :ref:`Rotator` target, |br-p| :term:`number` delta_time, |br-p| :term:`number` interp_speed |br| )
    - 

  * - :ref:`Vector`
    - VInterpTo( |br-p| :ref:`Vector` current, |br-p| :ref:`Vector` target, |br-p| :term:`number` delta_time, |br-p| :term:`number` interp_speed |br| )
    - 

  * - :ref:`Vector`
    - VInterpConstantTo( |br-p| :ref:`Vector` current, |br-p| :ref:`Vector` target, |br-p| :term:`number` delta_time, |br-p| :term:`number` interp_speed |br| )
    - 


Besides having the NanosMathLibrary table, we've added some new methods to the built-in lua `math` library:


Functions
---------

.. list-table::
  :widths: 10 30 60

  * - :term:`number`
    - math.clamp(:term:`number` value, :term:`number` min, :term:`number` max)
    - Clamps a value between min and max values 

  * - :term:`number`
    - math.round(:term:`number` value)
    - Rounds a value to the nearest integer
