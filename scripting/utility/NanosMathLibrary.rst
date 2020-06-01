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

    local Axis = NanosMathLibrary.ClampAxis(720)


Functions
---------

.. list-table::
  :widths: 10 40 50
   
  * - **Returns**
    - **Name**
    - **Description**

  * - :term:`number`
    - ClampAxis(:term:`number`)
    - Clamps an angle to the range of [0, 360].

  * - :term:`number`
    - NormalizeAxis(:term:`number`)
    - Clamps an angle to the range of [-180, 180].