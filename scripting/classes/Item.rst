.. _Item:

.. include:: ../common/common.rst

****
Item
****

An Item represents an Entity which can be Pickable by a Character, doesn't have any special action unless holding it with hands with pre-defined handling modes.


Usage
-----

.. tabs::
 .. code-tab:: lua Lua

    local NewItem = Item(
      Vector(-900, 185, 215), 
      Rotator(0, 90, 90), 
      "NanosWorld::SM_Torch",
      CollisionType.Normal,
      true,
      HandlingMode.SingleHandedMelee,
      CrosshairType.None
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
    - ModelName (StaticMesh)
    - 

  * - :term:`CollisionType`
    - collision_type
    - CollisionType.Normal

  * - :term:`boolean`
    - gravity_enabled
    - true

  * - :term:`HandlingMode`
    - handling_mode *(SingleHandedWeapon, DoubleHandedWeapon, SingleHandedMelee, DoubleHandedMelee, Throwable, Torch)*
    - HandlingMode.Torch

  * - :term:`CrosshairType`
    - crosshair_type
    - CrosshairType.None


Functions
----------

.. include:: ../common/functions/Pickable.rst

.. include:: ../common/functions/Actor.rst


Events
------

.. include:: ../common/events/Pickable.rst

.. include:: ../common/events/Actor.rst