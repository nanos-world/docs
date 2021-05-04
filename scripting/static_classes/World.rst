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
    - LoadStreamLevel(:term:`string` level_name)
    - Loads a Level in runtime

  * - 
    - SetFogDensity( |br-p| :term:`number` density, |br-p| :term:`number` second_density = 0 |br| )
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
    - SetPPBloom( |br-p| :term:`number` intensity = 0.675, |br-p| :term:`number` threshold = -1 |br| )
    - Set Post Process Bloom Settings

  * - 
    - SetPPChromaticAberration( |br-p| :term:`number` intensity = 0, |br-p| :term:`number` start_offset = 0 |br| )
    - Set Post Process Chromatic Aberration Settings

  * - 
    - SetPPImageEffects( |br-p| :term:`number` vignette_intensity = 0.6, |br-p| :term:`number` grain_jitter = 0 , |br-p| :term:`number` grain_intensity = 0 |br| )
    - Set Post Process Image Effect Settings

  * - 
    - SetPPFilm( |br-p| :term:`number` slope = 0.8, |br-p| :term:`number` toe = 0.55, |br-p| :term:`number` shoulder = 0.26, |br-p| :term:`number` black_clip = 0, |br-p| :term:`number` white_clip = 0.3 |br| )
    - Set Post Process Film Settings

  * - 
    - SetPPGlobalSaturation(:ref:`Color` color)
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
    - SetWeather(:term:`WeatherType` weather)
    - Sets the global Predefined Weather (*Clear, Rain, Cloudy, Thunderstorm*)

  * - 
    - SpawnDefaultSun()
    - Overrides all Light/Sun Actors with the NanosWorld's Official one, to be able to use the functions from this page

  * - 
    - SetWind(:term:`number` intensity)
    - Sets the global Wind intensity

  * - 
    - UnloadStreamLevel(:term:`string` level_name)
    - Unloads a Level in runtime

  * - :term:`number`
    - GetSunAngle()
    - 

  * - :term:`number`
    - GetSunSpeed()
    - 

  * - ``{hours, minutes}``
    - GetTime()
    - Returns a table containing current Sun hours and minutes

  * - :term:`WeatherType`
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


Weather Types
-------------

nanos world provides default Weathers with predefined sky/sun/fog parameters, you can use it or create your own Weather.

.. list-table:: 
  :widths: 10 10 8 8 20 20 8 8 8

  * - **WeatherType**
    - **Sun Intensity**
    - **Fog Second Density**
    - **Fog Height Falloff**
    - **Sun Light Color**
    - **Sky Rayleigh Scattering**
    - **Sun Temp. Multiplier**
    - **Sky Light Intensity**
    - **Wind**

  * - **Clear**
    - 150
    - 0.005
    - 0.2
    - :ref:`Color`\(1.0, 0.9, 0.8)
    - :ref:`Color`\(0.17, 0.41, 1.0)
    - 1.0
    - 1.0
    - 0.25

  * - **Rain**
    - 10
    - 0.025
    - 0.03
    - :ref:`Color`\(0.82, 0.9, 1.0)
    - :ref:`Color`\(0.73, 0.8, 1.0)
    - 2.0
    - 0.3
    - 1.0

  * - **Cloudy**
    - 10
    - 0.1
    - 0.01
    - :ref:`Color`\(1.0, 0.9, 0.8)
    - :ref:`Color`\(0.73, 0.8, 1.0)
    - 1.25
    - 0.2
    - 0.3

  * - **Thunderstorm**
    - 5
    - 0.5
    - 0.025
    - :ref:`Color`\(0.82, 0.9, 1.0)
    - :ref:`Color`\(0.73, 0.8, 1.0)
    - 2.0
    - 0.25
    - 3.0
