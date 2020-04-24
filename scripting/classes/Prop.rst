.. _Prop:

.. include:: ../common/common.rst

****
Prop
****

A Prop represents a Static Mesh which can be spawned in the world, can be grabbed around and have physics.

.. attention:: This page is under construction.


Usage
-----

.. tabs::
 .. code-tab:: lua Lua

    local MyProp = Prop(
      Vector(-900, 185, 215), 
      Rotator(0, 90, 90), 
      "/Game/NanosWorld/Art/Rural/Extra/SM_Crate_07"
    )


Constructors
------------

.. list-table::
   :widths: 3 1

   * - **Name**
     - **Description**

   * - Item(:ref:`Vector` Location, :ref:`Rotator` Rotation, :term:`string` ModelName)
     - Default Constructor


Functions
----------

.. include:: ../common/functions/Actor.rst

.. list-table:: 
  :widths: 5 10 35 50

  * - 
    - **Returns**
    - **Name**
    - **Description**

  * - 
    - :term:`string`
    - GetAssetName()
    - Gets the Asset name


Events
------

.. include:: ../common/events/Actor.rst

.. list-table::
  :widths: 5 15 30 50
   
  * -
    - **Name**
    - **Arguments**
    - **Description**

  * -
    - Grab
    - :ref:`Prop` self, :ref:`Character` handler
    - When Character grabs a Prop

  * -
    - UnGrab
    - :ref:`Prop` self, :ref:`Character` handler
    - When Character ungrabs a Prop
