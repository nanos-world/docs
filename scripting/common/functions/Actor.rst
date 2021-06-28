Functions (Inherited from Actor)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. list-table:: 
  :widths: 5 10 35 50

  * - 
    - **Returns**
    - **Name**
    - **Description**

  * - |authority-only-label|
    - 
    - AddImpulse( |br-p| :ref:`Vector` force, |br-p| :term:`boolean` velocity_change = false |br| )
    - Applies a Force in world coordinate on this Actor (the force is applied on Client side, by the (in most of cases) the closest player of this object)

  * - |authority-only-label|
    - 
    - AttachTo( |br-p| Actor other, |br-p| :term:`AttachmentRule` attachment_rule = SnapToTarget, |br-p| :term:`string` bone_name = "", |br-p| :term:`string` autodestroy_when_detached = false |br| )
    - Attaches this Actor to any other Actor, optionally at a specific bone

  * - |authority-only-label|
    - 
    - Destroy()
    - Destroys this Actor

  * - |authority-only-label|
    - 
    - Detach()
    - Detaches this Actor from AttachedTo Actor

  * - |authority-only-label|
    - 
    - SetCollision(:term:`CollisionType`)
    - Sets the actor's collision **Collision Types**: *Normal, Static Only, NoCollision*

  * - |authority-only-label|
    - 
    - SetForce(:ref:`Vector` force, :term:`boolean` local = true)
    - Adds a permanent force to this actor. Set to Vector(0, 0, 0) to cancel.

  * - |authority-only-label|
    - 
    - SetGravityEnabled(:term:`boolean`)
    - Sets the actor's gravity enabled

  * - |authority-only-label|
    - 
    - SetHighlightEnabled( |br-p| :term:`boolean`, |br-p| :term:`number` Index |br| )
    - Sets if this Actors is Highlighting at a specific Index color

  * - |authority-only-label|
    - 
    - SetInitialLocation(:ref:`Vector`)
    - Sets the initial location

  * - |authority-only-label|
    - 
    - SetLocation(:ref:`Vector`)
    - Sets the actor's location in the game world

  * - |server-only-label|
    - 
    - SetNetworkAuthority( |br-p| :ref:`Player` player = nil, |br-p| :term:`number` time_ms = 0 |br| )
    - Sets this actor's new Player network authority. This player will be manually assigned to handle this actor physics and share it's location with other clients. The authority assignment will still be overriden by the game automatically, to avoid that set a big time value so the player can keep longer with the authority and override the natural authority selection.

  * - |authority-only-label|
    - 
    - SetRotation(:ref:`Rotator`)
    - Sets the actor's rotation in the game world

  * - |authority-only-label|
    - 
    - SetScale(:ref:`Vector`)
    - Sets the actor's scale

  * - 
    - 
    - SetValue( |br-p| :term:`string` key, |br-p| :term:`any` value, |br-p| :term:`boolean` sync_on_clients |br| )
    - Sets a value in this entity, which can be accessed by any package (optionally sync on clients if called from server)

  * - 
    - 
    - TranslateTo( |br-p| :ref:`Vector` location, |br-p| :term:`number` speed, |br-p| :term:`boolean` sweep, |br-p| :term:`boolean` teleport |br| )
    - Smoothly moves this actor to a Location with a certain Speed - optionally enables sweep to stop when colliding - use teleport flag will not affect velocity

  * - 
    - 
    - RotateTo( |br-p| :ref:`Rotator` rotation, |br-p| :term:`number` speed, |br-p| :term:`boolean` teleport |br| )
    - Smoothly rotates this actor to a Rotation with a certain Speed - use teleport flag will not affect velocity

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
    - IsNetworkDistributed()
    - Gets if the actor is network distributed. Only actors being network distributed can be set network authority.

  * - 
    - :term:`boolean`
    - IsValid()
    - Returns if this entity is valid (i.e. wasn't destroyed and points to a valid entity)

  * - 
    - :term:`table`
    - GetAttachedEntities()
    - Gets all actors attached to this entity

  * - 
    - :term:`any`
    - GetAttachedTo()
    - Gets the actor i'm attached to

  * - |client-only-label|
    - :term:`table`
    - GetBounds()
    - Gets the actor bounds size. |br| |br| Returned Table:  ``{"Origin", "BoxExtent", "SphereRadius"}``

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

  * - 
    - 
    - Subscribe(:term:`string` event_name, :term:`function`)
    - Subscribes for an Event 

  * - 
    - 
    - Unsubscribe(:term:`string` event_name, :term:`function` = nil)
    - Unsubscribes from all subscribed Events in this Entity and in this Package, optionally passing the function to unsubscribe only that callback
