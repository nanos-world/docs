Functions (Inherited from Actor)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. list-table:: 
  :widths: 5 10 35 50

  * - 
    - **Returns**
    - **Name**
    - **Description**

  * - |server-only-label|
    - 
    - AddImpulse(:ref:`Vector` Force)
    - Applies a Force in world coordinate on this Actor (the force is applied on Client side, by the (in most of cases) the closest player of this object)

  * - |server-only-label|
    - 
    - AttachTo(Actor Other, :term:`string` BoneName, :ref:`Vector` RelativeLocation, :ref:`Rotator` RelativeRotation)
    - Attaches this Actor to any other Actor with a Relative Offset/Rotation

  * - |server-only-label|
    - 
    - Destroy()
    - Destroys this Actor

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
    - 
    - SetLocation(:ref:`Vector` NewLocation)
    - Sets the actor's location in the game world

  * - |server-only-label|
    - 
    - SetRotation(:ref:`Rotator` NewRotation)
    - Sets the actor's rotation in the game world

  * - |server-only-label|
    - 
    - SetScale(:ref:`Vector` Scale)
    - Sets the actor's scale

  * - |server-only-label|
    - 
    - SetTintColor(:ref:`Color` NewTintColor)
    - Sets the tint color, for completely paint an object, multiply the color by 10 or 100

  * - 
    - 
    - SetValue(:term:`string` Key, any Value)
    - Sets a value in this entity, which can be accessed by any package (local only)

  * - 
    - :term:`boolean`
    - IsGravityEnabled()
    - Gets the actor's gravity enabled

  * - 
    - :term:`boolean`
    - IsValid()
    - Returns if this is Valid

  * - 
    - :term:`number`
    - GetCollision()
    - Gets the current actor's collision

  * - 
    - :ref:`Vector`
    - GetLocation()
    - Get the actor's position in the game world

  * - |server-only-label|
    - :ref:`Vector`
    - GetInitialLocation()
    - Gets the initial location

  * - 
    - :ref:`Rotator`
    - GetRotation()
    - Gets the actor's rotation in the game world

  * - 
    - :ref:`Color`
    - GetTintColor()
    - Gets the Tint Color

  * - 
    - :term:`string`
    - GetType()
    - Returns the type of this Actor

  * - 
    - any
    - GetValue(:term:`string` Key)
    - Gets a value given a key