.. _Item:

*****
Item
*****

Chad Item

.. attention:: This page is under construction.


Usage
-----

.. tabs::
 .. code-tab:: lua Lua

    local NewItem = Item(
      Vector(-900, 185, 215), 
      Rotator(0, 90, 90), 
      "Blueprint'/Game/NanosWorld/Core/Items/Pug_Statue'"
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

.. list-table:: 
  :widths: 1 4 4 4
   
  * - **Returns**
    - **Name**
    - **Parameters**
    - **Description**

  * - :ref:`Vector`
    - GetLocation()
    - 
    - Get the actor's position in the game world

  * - :ref:`Rotator`
    - GetRotation()
    - 
    - Gets the actor's rotation in the game world

  * - 
    - SetRotation
    - :ref:`Rotator` NewRotation
    - Sets the actor's rotation in the game world

  * - 
    - SetLocation
    - :ref:`Vector` NewLocation
    - Sets the actor's location in the game world

  * - :term:`string`
    - GetModelName()
    -
    - Get the actor's model name

Events
======

.. list-table:: 
  :widths: 1 4 4
   
  * - **Name**
    - **Parameters**
    - **Description**

  * - OnPickedUp
    - ``Item``
    - ``Item`` has been picked up

  * - OnDrop
    - ``Item``
    - ``Item`` has been dropped