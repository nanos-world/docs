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

    local new_grenade = Grenade(
      Vector(-900, 185, 215), 
      Rotator(0, 90, 90), 
      "NanosWorld::SM_Grenade_G67",
      "NanosWorld::P_Explosion_Dirt",
      "NanosWorld::A_Explosion_Large"
    )


Constructor Parameters
----------------------

.. list-table:: 
  :widths: 20 45 35

  * - **Type**
    - **Name**
    - **Default**

  * - :ref:`Vector`
    - location
    - Vector(0, 0, 0)

  * - :ref:`Rotator`
    - rotation
    - Rotator(0, 0, 0)

  * - :term:`string`
    - static_mesh_asset
    - "NanosWorld::SM_Grenade_G67"

  * - :term:`string`
    - explosion_particles
    - "NanosWorld::P_Explosion_Dirt"

  * - :term:`string`
    - explosion_sound
    - "NanosWorld::A_Explosion_Large

  * - :term:`CollisionType`
    - collision_type
    - CollisionType.Normal

  * - :term:`boolean`
    - gravity_enabled
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
    - Damage at Inner Radius

  * - |client-read-only-label|
    - :term:`number`
    - DamageFalloff   
    - Radius which BaseDamage will apply proportionally 

  * - |client-read-only-label|
    - :term:`number`
    - DamageInnerRadius  
    - Radius which MinimumDamage will apply

  * - |client-read-only-label|
    - :term:`number`
    - DamageOuterRadius  
    - Radius which BaseDamage will apply

  * - |client-read-only-label|
    - :term:`number`
    - MinimumDamage  
    - Damage at Outer Radius

  * - |client-read-only-label|
    - :term:`number`
    - TimeToExplode   
    - Time until Explosion

  * - |client-read-only-label|
    - :term:`number`
    - ThrowForce   
    - Impulse applied when throwing


Functions
---------

.. list-table:: 
  :widths: 5 10 35 50

  * - 
    - **Returns**
    - **Name**
    - **Description**

  * - |server-only-label|
    - 
    - Explode()
    - Forces this grenade to Explode


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