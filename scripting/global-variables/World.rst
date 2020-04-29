.. _World:

.. include:: ../common/common.rst

*****
World
*****

.. tip:: This is a namespace named ``World``. It is not possible to initialize or create Instances. It's just a name with Functions and Events which are accessed with ``.`` instead of ``:``. This is going to be changed soon ;).

.. note:: This is a Client only Namespace.

.. attention:: This page is under construction.


Functions
---------

.. list-table:: 
  :widths: 5 10 35 50

  * - 
    - **Returns**
    - **Name**
    - **Description**

  * - |client-only-label|
    - 
    - SetWind(:term:`number`)
    - Sets the global Wind intensity

  * - |client-only-label|
    - 
    - SetWeather(:term:`number`)
    - Sets the global Weather (0 - Clear, 1 - Rain, 2 - Cloudy, 3 - Thunderstorm)

  * - |client-only-label|
    - 
    - SetSunAngle(:term:`number`)
    - Sets the sun's angle (0-360)

  * - |client-only-label|
    - 
    - SetSunSpeed(:term:`number`)
    - Sets the sun's time speed

  * - |client-only-label|
    - 
    - SetTime(:term:`number` Hours, :term:`number` Minutes)
    - Sets the global's time of the day

  * - |client-only-label|
    - :term:`number`
    - GetWeather()
    - 

  * - |client-only-label|
    - :term:`number`
    - GetWind()
    - 

  * - |client-only-label|
    - :term:`number`
    - GetSunAngle()
    - 

  * - |client-only-label|
    - :term:`number`
    - GetSunSpeed()
    - 

  * - |client-only-label|
    - :term:`number`
    - GetTime()
    - (Hours * 60 + Minutes) - Goes from 0 to 1440


Examples
--------

.. tabs::
 .. code-tab:: lua Lua

   -- makes rain
   World.SetWeather(1)

   -- makes 11:30 AM
   World.SetTime(11, 30)