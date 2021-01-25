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
    - Location
    - Vector(0, 0, 0)

  * - :ref:`Rotator`
    - Rotation
    - Rotation(0, 0, 0)

  * - :term:`string`
    - ModelName (StaticMesh)
    - 

  * - :term:`number`
    - CollisionType
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
    - :term:`string`
    - GetAssetName()
    - Gets the Asset name


.. note:: The following methods ``AddImpulse & SetGravityEnabled`` don't have effect on this actor.

.. include:: ../common/functions/Actor.rst


Events
------

.. include:: ../common/events/Actor.rst
