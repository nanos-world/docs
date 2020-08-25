.. _Item:

.. include:: ../common/common.rst

****
Item
****

An Item represents an Entity which can be Pickable by a Character, doesn't have any special action unless holding it with hands.


Usage
-----

.. tabs::
 .. code-tab:: lua Lua

    local NewItem = Item(
      Vector(-900, 185, 215), 
      Rotator(0, 90, 90), 
      "NanosWorld::BP_Grabable_Torch"
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
 

Functions
----------

.. include:: ../common/functions/Pickable.rst

.. include:: ../common/functions/Actor.rst


Events
------

.. include:: ../common/events/Pickable.rst

.. include:: ../common/events/Actor.rst