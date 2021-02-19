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
    - AddImpulse(:ref:`Vector` force)
    - Applies a Force in world coordinate on this Actor (the force is applied on Client side, by the (in most of cases) the closest player of this object)

  * - |server-only-label|
    - 
    - AttachTo(Actor other, :term:`string` bone_name, :ref:`Vector` relative_location, :ref:`Rotator` relative_rotation)
    - Attaches this Actor to any other Actor with a Relative Offset/Rotation

  * - |server-only-label|
    - 
    - Destroy()
    - Destroys this Actor

  * - |server-only-label|
    - 
    - SetCollision(:term:`number` collision_type)
    - Sets the actor's collision (0 - Normal, 1 - Static Only, 2 - No Collision)

  * - |server-only-label|
    - 
    - SetGravityEnabled(:term:`boolean` new_gravity)
    - Sets the actor's gravity enabled

  * - |client-only-label|
    - 
    - SetHighlightEnabled(:term:`boolean` enabled)
    - Sets if this Actors is Highlighting

  * - |server-only-label|
    - 
    - SetInitialLocation(:ref:`Vector` new_initial_location)
    - Sets the initial location

  * - |server-only-label|
    - 
    - SetLocation(:ref:`Vector` new_location)
    - Sets the actor's location in the game world

  * - |server-only-label|
    - 
    - SetMaterialColorParameter(:term:`string` parameter_name, :ref:`Color` color, :term:`number` material_index = -1)
    - Sets a Color parameter on a material of this actor, optionally on a specific material index or -1 for all materials

  * - |server-only-label|
    - 
    - SetMaterialScalarParameter(:term:`string` parameter_name, :term:`number` scalar, :term:`number` material_index = -1)
    - Sets a Scalar parameter on a material of this actor, optionally on a specific material index or -1 for all materials

  * - |server-only-label|
    - 
    - SetMaterialTextureParameter(:term:`string` parameter_name, :term:`string` texture_path, :term:`number` material_index = -1)
    - Loads and sets a Texture parameter on a material of this actor, optionally on a specific material index or -1 for all materials

  * - |server-only-label|
    - 
    - SetMaterialVectorParameter(:term:`string` parameter_name, :ref:`Vector` vector, :term:`number` material_index = -1)
    - Sets a Vector parameter on a material of this actor, optionally on a specific material index or -1 for all materials

  * - |server-only-label|
    - 
    - SetRotation(:ref:`Rotator` new_rotation)
    - Sets the actor's rotation in the game world

  * - |server-only-label|
    - 
    - SetScale(:ref:`Vector` Scale)
    - Sets the actor's scale

  * - |server-only-label|
    - 
    - SetTintColor(:ref:`Color` new_tint_color)
    - Sets the tint color, for completely paint an object, multiply the color by 10 or 100

  * - 
    - 
    - SetValue(:term:`string` key, any value)
    - Sets a value in this entity, which can be accessed by any package (local only)

  * - 
    - 
    - TranslateTo(:ref:`Vector` location, :term:`number` speed)
    - Smoothly moves this actor to a Location with a certain Speed

  * - 
    - 
    - RotateTo(:ref:`Rotator` rotation, :term:`number` speed)
    - Smoothly rotates this actor to a Rotation with a certain Speed

  * - 
    - :term:`boolean`
    - IsGravityEnabled()
    - Gets the actor's gravity enabled

  * - 
    - :term:`boolean`
    - IsInWater()
    - Gets if the actor is in Water

  * - 
    - :term:`boolean`
    - IsValid()
    - Returns if this is Valid

  * - 
    - :term:`number`
    - GetCollision()
    - Gets the current actor's collision

  * - 
    - :term:`number`
    - GetID()
    - Gets the network ID of this entity (same in both client and server)

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
    - :ref:`Vector`
    - GetScale()
    - Gets the actor's scale

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
    - GetValue(:term:`string` key)
    - Gets a value given a key

  * - |client-only-label|
    - :ref:`Vector`
    - GetVelocity()
    - Returns the current actor Velocity