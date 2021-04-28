.. _StaticMesh:

.. include:: ../common/common.rst

***********
Static Mesh
***********

.. image:: https://i.imgur.com/DLysSYP.png

A StaticMesh entity represents a Mesh which can be spawned in the world, can't move and is more optmized for using in decorating the world.

.. tip:: You can spawn this entity is both Client or Server (if you spawn it on client, it won't be synchronized with other players).


Usage
-----

.. tabs::
 .. code-tab:: lua Lua

    local static_mesh = StaticMesh(
      Vector(-900, 185, 215), 
      Rotator(0, 90, 90), 
      "NanosWorld::SM_Crate_07"
    )


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

  * - :ref:`Rotator`
    - rotation
    - Rotator(0, 0, 0)

  * - :term:`string`
    - model_name (StaticMesh)
    - 

  * - :term:`CollisionType`
    - collision_type
    - CollisionType.Normal


Functions
----------

.. list-table:: 
  :widths: 5 10 35 50

  * - 
    - **Returns**
    - **Name**
    - **Description**

  * - 
    - 
    - SetDefaultMaterial( |br-p| :term:`MaterialType` material_type = MaterialType.Masked |br| )
    - Replaces all materials of this actor with a nanos basic material with comon parameters available (*Masked, Translucent, TranslucentDepth*)

  * - 
    - 
    - SetMaterialColorParameter( |br-p| :term:`string` parameter_name, |br-p| :ref:`Color` color |br| )
    - Sets a Color parameter in this actor's material

  * - 
    - 
    - SetMaterialScalarParameter(:term:`string` parameter_name, :term:`number` scalar)
    - Sets a scalar parameter in this actor's material

  * - 
    - 
    - SetMaterialTextureParameter(:term:`string` parameter_name, :term:`string` texture_path)
    - Loads a image from computer (relative to `Assets/` folder) and sets as parameter in this actor's material

  * - 
    - 
    - SetMaterialVectorParameter(:term:`string` parameter_name, :ref:`Vector` vector)
    - Sets a Vector parameter in this actor's material

  * - 
    - :term:`string`
    - GetMesh()
    - Gets the Asset name


.. note:: The following methods ``AddImpulse & SetGravityEnabled`` don't have effect on this actor.

.. include:: ../common/functions/Actor.rst


Events
------

.. include:: ../common/events/Actor.rst
