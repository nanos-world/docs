Functions (Inherited from Actor)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. list-table:: 
  :widths: 5 10 35 50

  * - 
    - **Returns**
    - **Name**
    - **Description**

  * - 
    - :ref:`Vector`
    - GetLocation()
    - Get the actor's position in the game world

  * - 
    - :ref:`Rotator`
    - GetRotation()
    - Gets the actor's rotation in the game world

  * - 
    - :term:`number`
    - GetCollision()
    - Gets the current actor's collision

  * - 
    - :term:`boolean`
    - IsGravityEnabled()
    - Gets the actor's gravity enabled

  * - |server-only-label|
    - 
    - SetRotation(:ref:`Rotator` NewRotation)
    - Sets the actor's rotation in the game world

  * - |server-only-label|
    - 
    - SetLocation(:ref:`Vector` NewLocation)
    - Sets the actor's location in the game world

  * - |server-only-label|
    - 
    - SetCollision(:term:`number` CollisionType)
    - Sets the actor's collision (0 - Normal, 1 - Static Only, 2 - No Collision)

  * - |server-only-label|
    - 
    - SetGravityEnabled(:term:`boolean` NewGravity)
    - Sets the actor's gravity enabled

  * - |server-only-label|
    - 
    - SetInitialLocation(:ref:`Vector` NewInitialLocation)
    - Sets the initial location

  * - |server-only-label|
    - :ref:`Vector`
    - GetInitialLocation()
    - Gets the initial location
