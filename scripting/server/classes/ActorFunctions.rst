Functions (Inherited from Actor)
--------------------------------

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

  * - :term:`number`
    - GetCollision()
    - 
    - Gets the current actor's collision

  * - 
    - SetRotation()
    - :ref:`Rotator` NewRotation
    - Sets the actor's rotation in the game world

  * - 
    - SetLocation()
    - :ref:`Vector` NewLocation
    - Sets the actor's location in the game world

  * - 
    - SetCollision()
    - :term:`number` CollisionType
    - Sets the actor's collision (0 - Normal, 1 - Static Only, 2 - No Collision)