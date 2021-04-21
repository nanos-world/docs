.. _Cable:

.. include:: ../common/common.rst

*****
Cable
*****

.. image:: https://i.imgur.com/GG6W09Y.png

A Cable represents a Physics Constraint which joins two Actors with a rope-like visual representation between them.


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
    - SetLinearLimits( |br-p| :term:`ConstraintMotion` x_motion, |br-p| :term:`ConstraintMotion` y_motion, |br-p| :term:`ConstraintMotion` z_motion, |br| :term:`number` limit |br| )
    - Sets the Physics Linear Limits of this cable

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
    - SetValue(:term:`string` key, :term:`any` value, :term:`boolean` sync_on_clients)
    - Sets a value in this entity, which can be accessed by any package (optionally sync on clients if called from server)

  * - 
    - :term:`boolean`
    - IsValid()
    - Returns if this is Valid

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