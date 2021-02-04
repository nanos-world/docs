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
    - SetFogDensity(:term:`number` density, :term:`number` second_density = 0)
    - 

  * - 
    - SetFogHeightFalloff(:term:`number` falloff)
    - 

  * - 
    - SetFogHeightOffset(:term:`number` offset)
    - 

  * - 
    - SetSunLightColor(:ref:`Color` color)
    - 

  * - 
    - SetSkyLightIntensity(:term:`number` intensity)
    - 

  * - 
    - SetSkyRayleighScattering(:ref:`Color` color)
    - 

  * - 
    - SetSunLightIntensity(:term:`number` intensity)
    - 

  * - 
    - SetSunTemperatureMultiplier(:term:`number` multiplier)
    - 

  * - 
    - SetPPBloom(:term:`number` intensity = 0.675, :term:`number` threshold = -1)
    - Set Post Process Bloom Settings

  * - 
    - SetPPChromaticAberration(:term:`number` intensity = 0, :term:`number` start_offset = 0)
    - Set Post Process Chromatic Aberration Settings

  * - 
    - SetPPImageEffects(:term:`number` vignette_intensity = 0.6, :term:`number` grain_jitter = 0 , :term:`number` grain_intensity = 0)
    - Set Post Process Image Effect Settings

  * - 
    - SetPPFilm(:term:`number` slope = 0.8, :term:`number` toe = 0.55, :term:`number` shoulder = 0.26, :term:`number` black_clip = 0, :term:`number` white_clip = 0.3)
    - Set Post Process Film Settings

  * - 
    - SetPPGlobalSaturation(const Color& color)
    - Set Post Process Saturation Colors. Use Alpha for overall Saturation intensity

  * - 
    - SetSunAngle(:term:`number` angle)
    - Sets the sun's angle (0-360)

  * - 
    - SetSunSpeed(:term:`number` speed)
    - Sets the sun's time speed (default: '60', which means 60 seconds in game = 1 second in real world)

  * - 
    - SetTime(:term:`number` hours, :term:`number` minutes)
    - Sets the global's time of the day

  * - 
    - SetWeather(:term:`number` weather)
    - Sets the global Weather (0 - Clear, 1 - Rain, 2 - Cloudy, 3 - Thunderstorm)

  * - 
    - SpawnDefaultSun()
    - Overrides all Light/Sun Actors with the NanosWorld's Official one, to be able to use the functions from this page

  * - 
    - SetWind(:term:`number` intensity)
    - Sets the global Wind intensity

  * - :term:`number`
    - GetSunAngle()
    - 

  * - :term:`number`
    - GetSunSpeed()
    - 

  * - {hours, minutes}
    - GetTime()
    - Returns a table containing current Sun hours and minutes

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