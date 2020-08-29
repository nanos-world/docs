.. _Grenade:

.. include:: ../common/common.rst

********
Grenade
********

Chad Grenade


Usage
-----

.. tabs::
 .. code-tab:: lua Lua

    local NewGrenade = Grenade(
      Vector(-900, 185, 215), 
      Rotator(0, 90, 90), 
      "NanosWorld::SM_Grenade_G67"
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
 

Properties
----------

.. list-table:: 
  :widths: 5 10 35 50

  * - 
    - **Type**
    - **Name**
    - **Description**

  * - |client-read-only-label|
    - :term:`number`
    - BaseDamage 
    - Grenade's Base Damage

  * - |client-read-only-label|
    - :term:`number`
    - DamageFalloff   
    - Grenade's

  * - |client-read-only-label|
    - :term:`number`
    - DamageInnerRadius  
    - Grenade's 

  * - |client-read-only-label|
    - :term:`number`
    - MinimumDamage  
    - Grenade's Base Damage

  * - |client-read-only-label|
    - :term:`number`
    - TimeToExplode   
    - Grenade's 


Functions
---------

.. list-table:: 
  :widths: 5 10 35 50
   
  * - **Returns**
    - **Name**
    - **Parameters**
    - **Description**

.. include:: ../common/functions/Pickable.rst

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
    - Explode
    - :ref:`Grenade`
    - ``Grenade`` has exploded

  * -
    - Throw
    - :ref:`Grenade`
    - ``Grenade`` has been thrown

.. include:: ../common/events/Pickable.rst

.. include:: ../common/events/Actor.rst