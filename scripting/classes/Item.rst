.. _Item:

.. include:: ../common/common.rst

****
Item
****

An Item represents an Entity which can be Pickable by a Character, doesn't have any special action unless holding it with hands.

.. attention:: This page is under construction.


Usage
-----

.. tabs::
 .. code-tab:: lua Lua

    local NewItem = Item(
      Vector(-900, 185, 215), 
      Rotator(0, 90, 90), 
      "/Game/NanosWorld/Core/Items/BP_Grabable_Torch.BP_Grabable_Torch_C"
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

.. include:: ../common/functions/Pickable.rst


Events
------

.. include:: ../common/events/Actor.rst

.. include:: ../common/events/Pickable.rst
