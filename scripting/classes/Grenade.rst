.. _Grenade:

.. include:: ../common/common.rst

********
Grenade
********

Chad Grenade

.. attention:: This page is under construction.


Usage
-----

.. tabs::
 .. code-tab:: lua Lua

    local NewGrenade = Grenade(
      Vector(-900, 185, 215), 
      Rotator(0, 90, 90), 
      "Blueprint'/Game/NanosWorld/Core/Grenades/Frag_Grenade'"
    )


Constructors
------------

.. list-table::
   :widths: 3 1

   * - **Name**
     - **Description**

   * - Item(:ref:`Vector` Location, :ref:`Rotator` Rotation, :term:`string` ModelName)
     - Default Constructor

Properties
----------

.. list-table:: 
  :widths: 5 10 35 50

  * - 
    - **Type**
    - **Name**
    - **Description**

  * - |client-ready-only-label|
    - :term:`number`
    - BaseDamage 
    - Grenade's Base Damage

  * - |client-ready-only-label|
    - :term:`number`
    - MinimumDamage  
    - Grenade's Base Damage

  * - |client-ready-only-label|
    - :term:`number`
    - DamageInnerRadius  
    - Grenade's 

  * - |client-ready-only-label|
    - :term:`number`
    - DamageFalloff   
    - Grenade's

  * - |client-ready-only-label|
    - :term:`number`
    - TimeToExplode   
    - Grenade's 


Functions
---------

.. include:: ../common/functions/Actor.rst

.. include:: ../common/functions/Pickable.rst

.. list-table:: 
  :widths: 1 4 4 4
   
  * - **Returns**
    - **Name**
    - **Parameters**
    - **Description**


Events
------

.. include:: ../common/events/Actor.rst

.. include:: ../common/events/Pickable.rst

.. list-table::
  :widths: 5 15 30 50
   
  * -
    - **Name**
    - **Arguments**
    - **Description**

  * -
    - Explode
    - :ref:`Grenade`
    - ``Grenade`` has exploded

  * -
    - Throw
    - :ref:`Grenade`
    - ``Grenade`` has been thrown