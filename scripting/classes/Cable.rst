.. _Cable:

.. include:: ../common/common.rst

*****
Cable
*****

.. image:: https://i.imgur.com/GG6W09Y.png

A Cable represents a Physics Constraint which joins two Actors with a rope-like visual representation between them.

nanos world Cables are composed primarily of two Unreal Engine components: a `Cable <https://docs.unrealengine.com/en-US/API/Plugins/CableComponent/UCableComponent/index.html>`_ and a `PhysicsConstraint <https://docs.unrealengine.com/en-US/InteractiveExperiences/Physics/Constraints/ConstraintsBlueprints/index.html>`_. The first is used for visual purposes only and the second one gives the effective physical effects that are applied to each end of the Cable.

Cable **visuals** can be tweaked with ``:SetForces()``, ``:SetCableSettings()`` and ``:SetRenderingSettings()`` methods. Those methods don't have effect on the physics being applied and only have effects on the visual representation.

Cable **physics** can be tweaked with ``:SetAngularLimits()`` and ``:SetLinearLimits()``.

After attaching the two sides of your cable, the physics can be tweaked to affect how the constraint will affect the objects.

.. tip:: You can find more useful information regarding physical properties of the joint in the end of this page.


Usage
-----

.. tabs::
 .. code-tab:: lua Lua

    local my_cable = Cable()
    local cube_01 = Prop(Vector(100, 100, 100), Rotator(), "NanosWorld::SM_Cube")
    local cube_02 = Prop(Vector(200, 0, 100), Rotator(), "NanosWorld::SM_Cube")

    my_cable:AttachStartTo(cube_01)
    my_cable:AttachEndTo(cube_02)


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


Functions
----------

.. list-table:: 
  :widths: 5 10 35 50

  * -
    - **Returns**
    - **Name**
    - **Description**

  * - |authority-only-label|
    - 
    - AttachStartTo( |br-p| Actor other, |br-p| :ref:`Vector` relative_location = Vector(), |br-p| :term:`string` bone_name = "" |br| )
    - Attached the beginning of this cable to another Actor at a specific bone or relative location

  * - |authority-only-label|
    - 
    - AttachEndTo( |br-p| Actor other, |br-p| :ref:`Vector` relative_location = Vector(), |br-p| :term:`string` bone_name = "" |br| )
    - Attached the end of this cable to another Actor at a specific bone or relative location

  * - |authority-only-label|
    - 
    - Destroy()
    - Destroys this Actor

  * - |authority-only-label|
    - 
    - DetachEnd()
    - Detaches the End of this Cable

  * - |authority-only-label|
    - 
    - DetachStart()
    - Detaches the Start of this Cable

  * - |authority-only-label|
    - 
    - SetAngularLimits( |br-p| :term:`ConstraintMotion` swing_1_motion, |br-p| :term:`ConstraintMotion` swing_2_motion, |br-p| :term:`ConstraintMotion` twist_motion, |br-p| :term:`number` swing_1_limit, |br-p| :term:`number` swing_2_limit, |br-p| :term:`number` twist_limit |br| )
    - Sets the Physics Angular Limits of this cable

  * - |authority-only-label|
    - 
    - SetCableSettings( |br-p| :term:`number` length, |br-p| :term:`number` num_segments, |br-p| :term:`number` solver_iterations |br| )
    - Set the overall settings for this cable (visuals only)

  * - |authority-only-label|
    - 
    - SetForces( |br-p| :ref:`Vector` force, |br-p| :term:`number` gravity_scale = 1 |br| )
    - Set the forces the cable has applied (visuals only)

  * - |authority-only-label|
    - 
    - SetLinearLimits( |br-p| :term:`ConstraintMotion` x_motion, |br-p| :term:`ConstraintMotion` y_motion, |br-p| :term:`ConstraintMotion` z_motion, |br-p| :term:`number` limit, |br-p| :term:`number` restitution = 0, |br-p| :term:`boolean` use_soft_constraint = false, |br-p| :term:`number` stiffness = 0, |br-p| :term:`number` damping = 0 |br| )
    - Sets the Physics Linear Limits of this cable. If use_soft_constraint is enabled, then stiffness and damping will be used, otherwise restitution will be used.

  * - |authority-only-label|
    - 
    - SetLocation(:ref:`Vector`)
    - Sets the Cable's location in the game world

  * - |authority-only-label|
    - 
    - SetRenderingSettings( |br-p| :term:`number` width, |br-p| :term:`number` num_sides, |br-p| :term:`number` tile_material |br| )
    - Set the rendering settings of this cable (visuals only)

  * - 
    - 
    - SetValue( |br-p| :term:`string` key, |br-p| :term:`any` value, |br-p| :term:`boolean` sync_on_clients |br| )
    - Sets a value in this entity, which can be accessed by any package (optionally sync on clients if called from server)

  * - 
    - :term:`boolean`
    - IsValid()
    - Returns if this entity is valid (i.e. wasn't destroyed and points to a valid entity)

  * - 
    - :term:`number`
    - GetID()
    - Gets the network ID of this entity (same in both client and server)

  * - 
    - :ref:`Vector`
    - GetLocation()
    - Get the Cable's position in the game world

  * - 
    - any
    - GetValue(:term:`string` key)
    - Gets a value given a key


Events
------

.. include:: ../common/events/Actor.rst


Linear Limits
-------------

- **x_motion**, **y_motion** or **z_motion** indicate the linear constraint along its Axis.
- **limit** defines the distance allowed between the two joint reference frames.

The Constraints can be set to one of the following *Constraint Motions*:


.. list-table:: 
  :widths: 25 75

  * - **Constraint Motion**
    - **Description**

  * - **ConstraintMotion.Free**
    - No constraint along this axis.

  * - **ConstraintMotion.Limited**
    - Limited freedom along this axis. The limit is defined for all axes by the **limit** property.

  * - **ConstraintMotion.Locked**
    - Fully constraint along this axis.


Angular Limits
--------------

- **swing_1_motion**, **swing_2_motion** or **twist_motion** indicates whether it's limit is used.
- **swing_1_limit** Angle of movement along the **XY** Plane.
- **swing_2_limit** Angle of movement along the **XZ** Plane.
- **twist_limit** Symmetric angle of roll along the **X**-axis.

The Constraints can be set to one of the following *Constraint Motions*:


.. list-table:: 
  :widths: 25 75

  * - **Constraint Motion**
    - **Description**

  * - **ConstraintMotion.Free**
    - No constraint along this axis.

  * - **ConstraintMotion.Limited**
    - Limited freedom around this axis. The limit for each Angular Motion is controlled individually by a correspondingly named Limit property: **swing_1_limit**, **swing_2_limit**, and **twist_limit**.

  * - **ConstraintMotion.Locked**
    - Fully constraint along this axis.

