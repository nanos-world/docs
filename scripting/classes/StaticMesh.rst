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

  * - :term:`number`
    - collision_type
    - 0 (Normal)


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
    - SetDefaultMaterial(:term:`number` material_type = 1)
    - Replaces all materials of this actor with a nanos basic material with comon parameters available (1 - Masked, 2 - Translucent)

  * - 
    - 
    - SetMaterialColorParameter(:term:`string` parameter_name, :ref:`Color` color)
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
    - GetAssetName()
    - Gets the Asset name


.. note:: The following methods ``AddImpulse & SetGravityEnabled`` don't have effect on this actor.

.. include:: ../common/functions/Actor.rst


Events
------

.. include:: ../common/events/Actor.rst
