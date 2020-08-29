.. _World:

.. include:: ../common/common.rst

*****
World
*****

.. tip:: This is a Static Class named ``World``. You can access it's methods directly with ``:``. It is not possible to initialize or create new instances.

.. note:: This is a Client only Class.


Functions
---------

.. list-table:: 
  :widths: 10 40 50

  * - **Returns**
    - **Name**
    - **Description**

  * - 
    - SetSunAngle(:term:`number`)
    - Sets the sun's angle (0-360)

  * - 
    - SetSunSpeed(:term:`number`)
    - Sets the sun's time speed (default: '60', which means 60 seconds in game = 1 second in real world)

  * - 
    - SetTime(:term:`number` Hours, :term:`number` Minutes)
    - Sets the global's time of the day

  * - 
    - SetWeather(:term:`number`)
    - Sets the global Weather (0 - Clear, 1 - Rain, 2 - Cloudy, 3 - Thunderstorm)

  * - 
    - SpawnDefaultSun()
    - Overrides all Light/Sun Actors with the NanosWorld's Official one, to be able to use the functions from this page

  * - 
    - SetWind(:term:`number`)
    - Sets the global Wind intensity

  * - :term:`number`
    - GetSunAngle()
    - 

  * - :term:`number`
    - GetSunSpeed()
    - 

  * - :term:`number`
    - GetTime()
    - (Hours * 60 + Minutes) - Goes from 0 to 1440

  * - :term:`number`
    - GetWeather()
    - 

  * - :term:`number`
    - GetWind()
    - 


Examples
--------

.. tabs::
 .. code-tab:: lua Lua

   -- make it rain
   World:SetWeather(1)

   -- make it 11:30 AM
   World:SetTime(11, 30)