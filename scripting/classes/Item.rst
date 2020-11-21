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
      true,
      5
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
    - ModelName (StaticMesh)
    - 

  * - :term:`number`
    - CollisionType
    - 0 (Normal)

  * - :term:`boolean`
    - GravityEnabled
    - true

  * - :term:`number`
    - HandlingMode (0. SingleHandedWeapon, 1. DoubleHandedWeapon, 2. SingleHandedMelee, 3. DoubleHandedMelee, 4. Throwable, 5. Torch, 6. Barrel, 7. Box)
    - 5


Functions
----------

.. include:: ../common/functions/Pickable.rst

.. include:: ../common/functions/Actor.rst


Events
------

.. include:: ../common/events/Pickable.rst

.. include:: ../common/events/Actor.rst