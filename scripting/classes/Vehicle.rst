.. _Vehicle:

.. include:: ../common/common.rst

*******
Vehicle
*******

Char Vehicle

.. attention:: This page is under construction.


Usage
-----

.. tabs::
 .. code-tab:: lua Lua

    local veh = Vehicle(
      Vector(0, 0, 0),
      Rotator(0, 0, 0),
      "/Game/NanosWorld/Core/Vehicles/BP_Vehicle_SUV.BP_Vehicle_SUV_C"
    )


Constructors
------------

.. list-table::
   :widths: 3 1

   * - **Name**
     - **Description**

   * - Vehicle(:ref:`Vector` Location, :ref:`Rotator` Rotation, :term:`string` ModelName)
     - Default Constructor


Functions
---------

.. include:: ../common/functions/Actor.rst

.. include:: ../common/functions/Pickable.rst

.. list-table:: 
  :widths: 5 10 35 50

  * - 
    - **Returns**
    - **Name**
    - **Description**

  * -
    - :ref:`Color`
    - GetBodyColor()
    - Gets the vehicle body color

  * - |server-only-label|
    - 
    - SetBodyColor(:ref:`Color` NewBodyColor)
    - Sets the vehicle body color

  * -
    - :term:`number`
    - GetBodyRoughness()
    - Gets the vehicle body roughness

  * - |server-only-label|
    - 
    - SetBodyRoughness(:term:`number` NewBodyRoughness)
    - Sets the vehicle body roughness. Values between 0 and 1.

  * -
    - :ref:`Color`
    - GetGlassColor()
    - Gets the vehicle glass color

  * - |server-only-label|
    - 
    - SetGlassColor(:ref:`Color` NewGlassColor)
    - Sets the vehicle glass color

  * -
    - :term:`number`
    - GetGlassOpacity()
    - Gets the vehicle glass opacity

  * - |server-only-label|
    - 
    - SetGlassOpacity(:term:`number` NewGlassOpacity)
    - Sets the vehicle glass opacity. Values between 0 and 1.

  * -
    - :ref:`Color`
    - GetLightColor()
    - Gets the vehicle light color

  * - |server-only-label|
    - 
    - SetLightColor(:ref:`Color` NewLightColor)
    - Sets the vehicle light color

  * -
    - :ref:`Character`\[]
    - GetPassengers()
    - Gets all passengers

  * -
    - :ref:`Character`
    - GetPassenger(:term:`number` Seat)
    - Gets all passengers. Returns :term:`nil` if Seat is invalid or empty.

  * - |server-only-label|
    - 
    - Horn(:term:`boolean` Bool)
    - Starts or stops the vehicles horn


Events
------

.. include:: ../common/events/Actor.rst
