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
      "NanosWorld/Art/Rural/Extra/SM_Crate_07"
    )


Constructor Parameters
----------------------

.. list-table:: 
  :widths: 20 45 35

  * - **Type**
    - **Name**
    - **Default**

  * - :ref:`Vector`
    - Location
    - Vector(0, 0, 0)

  * - :ref:`Rotator`
    - Rotation
    - Rotation(0, 0, 0)

  * - :term:`string`
    - ModelName
    - 

  * - :term:`number`
    - CollisionType
    - 0 (Normal)

  * - :term:`boolean`
    - GravityEnabled
    - true
 
  * - :term:`boolean`
    - IsGrabbable
    - true


Functions
----------

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

  * - |server-only-label|
    - 
    - SetGrabbable(:term:`boolean`)
    - Sets ability to Grab this Prop

  * - 
    - :term:`boolean`
    - IsGrabbable()
    - Gets ability to Grab this Prop

  * - 
    - :ref:`Character`
    - GetHandler()
    - Gets the Character (if existing) which is holding this

.. include:: ../common/functions/Actor.rst


Events
------

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

.. include:: ../common/events/Actor.rst