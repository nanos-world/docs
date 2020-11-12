.. _Particle:

.. include:: ../common/common.rst

********
Particle
********

.. image:: https://i.imgur.com/DoiElJS.png

.. tip:: Both **Cascade** and **Niagara** Particle Systems are supported!


Usage
-----

.. tabs::
 .. code-tab:: lua Lua

    local my_particle = Particle(
        Vector(-200, 100, 100), 
        Rotator(0, 0, 0),
        "NanosWorld::P_Explosion",
        true, -- Auto Destroy?
        true -- Auto Activate?
    )

.. note:: AutoDestroy means the Network Entity will be immediately destroyed after spawned, losing references to the *Particle System* spawned in-game. So if the *Particle System* itself loops indefinitely, it will keep playing until the Player reconnects.


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
    - ModelName
    - 

  * - :term:`boolean`
    - AutoDestroy
    - true

  * - :term:`boolean`
    - AutoActivate
    - true


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
    - Reset()
    - Activates the Emitter again

.. include:: ../common/functions/Actor.rst


Events
------

.. include:: ../common/events/Actor.rst