.. _Particle:

.. include:: ../common/common.rst

********
Particle
********

.. image:: https://i.imgur.com/DoiElJS.png

.. tip:: Both **Cascade** and **Niagara** Particle Systems are supported!

.. tip:: You can spawn this entity is both Client or Server (if you spawn it on client, it won't be synchronized with other players).


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
    - location
    - Vector(0, 0, 0)

  * - :ref:`Rotator`
    - rotation
    - Rotator(0, 0, 0)

  * - :term:`string`
    - model_name
    - 

  * - :term:`boolean`
    - auto_destroy
    - true

  * - :term:`boolean`
    - auto_activate
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

  * - 
    - 
    - SetParameterFloat(:term:`string` parameter, :term:`number` value)
    - Sets a parameter in this Particle System

  * - 
    - 
    - SetParameterInt(:term:`string` parameter, :term:`number` value)
    - Sets a parameter in this Particle System

  * - 
    - 
    - SetParameterBool(:term:`string` parameter, :term:`boolean` value)
    - Sets a parameter in this Particle System

  * - 
    - 
    - SetParameterVector(:term:`string` parameter, :term:`Vector` value)
    - Sets a parameter in this Particle System

  * - 
    - 
    - SetParameterColor(:term:`string` parameter, :term:`Color` value)
    - Sets a parameter in this Particle System


.. include:: ../common/functions/Actor.rst


Events
------

.. include:: ../common/events/Actor.rst