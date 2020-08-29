.. _Vehicle:

.. include:: ../common/common.rst

*******
Vehicle
*******

.. image:: https://i.imgur.com/CHBy45q.png

Chad Vehicle


Usage
-----

.. tabs::
 .. code-tab:: lua Lua

    local veh = Vehicle(
      Vector(0, 0, 0),
      Rotator(0, 0, 0),
      "NanosWorld::BP_Vehicle_SUV"
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
    - ModelName
    - 

  * - :term:`number`
    - CollisionType
    - 0 (Normal)

  * - :term:`boolean`
    - GravityEnabled
    - true
 

Functions
---------

.. list-table:: 
  :widths: 5 10 35 50

  * - 
    - **Returns**
    - **Name**
    - **Description**

  * - |server-only-label|
    - 
    - Horn(:term:`boolean` Bool)
    - Starts or stops the vehicles horn

  * - |server-only-label|
    - 
    - SetBodyRoughness(:term:`number` NewBodyRoughness)
    - Sets the vehicle body roughness. Values between 0 and 1.

  * - |server-only-label|
    - 
    - SetGlassColor(:ref:`Color` NewGlassColor)
    - Sets the vehicle glass color

  * - |server-only-label|
    - 
    - SetGlassOpacity(:term:`number` NewGlassOpacity)
    - Sets the vehicle glass opacity. Values between 0 and 1.

  * - |server-only-label|
    - 
    - SetLightColor(:ref:`Color` NewLightColor)
    - Sets the vehicle light color

  * -
    - :term:`number`
    - GetBodyRoughness()
    - Gets the vehicle body roughness

  * -
    - :ref:`Color`
    - GetGlassColor()
    - Gets the vehicle glass color

  * -
    - :term:`number`
    - GetGlassOpacity()
    - Gets the vehicle glass opacity

  * -
    - :ref:`Color`
    - GetLightColor()
    - Gets the vehicle light color

  * -
    - :ref:`Character`
    - GetPassenger(:term:`number` Seat)
    - Gets all passengers. Returns :term:`nil` if Seat is invalid or empty.

  * -
    - :ref:`Character`\[]
    - GetPassengers()
    - Gets all passengers

.. include:: ../common/functions/Pickable.rst

.. include:: ../common/functions/Actor.rst


Events
------

.. list-table::
  :widths: 5 15 30 50
   
  * -
    - **Name**
    - **Arguments**
    - **Description**

  * -
    - Horn
    - :ref:`Vehicle` self, :term:`boolean` IsHonking
    - When Vehicle honks

.. include:: ../common/events/Actor.rst