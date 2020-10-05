.. _Sound:

.. include:: ../common/common.rst

*****
Sound
*****

Class for playing in-game 2D and 3D sounds.

.. note:: This is a Client only Class.

.. note:: It is not possible (yet?) to load custom sound files (.mp3, .wav...), the sounds must be pre-cooked in Unreal before used.


Usage
-----

.. tabs::
 .. code-tab:: lua Lua

    local MySound = Sound(
        Vector(-510, 145, 63), -- Location (if a 3D sound)
        "NanosWorld::A_VR_Confirm", -- Asset Path
        false, -- Is 2D Sound
        true, -- Auto Destroy (if to destroy after finished playing)
        0, -- Sound Type (SFX)
        1, -- Volume
        1 -- Pitch
    )


Constructor Parameters
----------------------

.. list-table:: 
  :widths: 10 70 20

  * - **Type**
    - **Name**
    - **Default**

  * - :ref:`Vector`
    - Location (Used only if 3D sound)
    - Vector(0, 0, 0)

  * - :term:`string`
    - Asset (Sound)
    - 

  * - :term:`boolean`
    - Is2DSound
    - false

  * - :term:`boolean`
    - AutoDestroy (if to destroy after finished playing)
    - true

  * - :term:`number`
    - Sound Type (0 - SFX, 1 - Music) - Used to apply user's volume settings
    - 0

  * - :term:`number`
    - Volume (0 - 1)
    - 1

  * - :term:`number`
    - Pitch
    - 1

  * - :term:`number`
    - InnerRadius (3D only)
    - 400

  * - :term:`number`
    - FalloffDistance (3D only)
    - 3600

  * - :term:`number`
    - AttenuationFunction (3D only) (0 - Linear, 1 - Logarithmic, 2 - Inverse, 3 - Log Reverse, 4 - Natural Sound)
    - 0

  * - :term:`boolean`
    - KeepPlayingWhenSilent (3D only) - Whether to keep playing this sound when it's not audible - Use with caution, it may cause performance issues!
    - false


Functions
----------

.. list-table:: 
  :widths: 10 35 55

  * - **Returns**
    - **Name**
    - **Description**

  * - 
    - FadeIn(:term:`number` FadeInDuration, :term:`number` FadeVolumeLevel, :term:`number` StartTime)
    - Plays the sound with a fade effect

  * - 
    - FadeOut(:term:`number` FadeOutDuration, :term:`number` FadeVolumeLevel)
    - Stops the sound with a fade effect

  * - 
    - Play(:term:`number` StartTime = 0)
    - Starts the sound

  * - 
    - SetFalloffDistance(:term:`number` FalloffDistance)
    - If a 3D Sound, sets the distance which the sound is inaudible

  * - 
    - SetInnerRadius(:term:`number` InnerRadius)
    - If a 3D Sound, sets the distance within the volume is 100%

  * - 
    - SetLowPassFilter(:term:`number` Frequency)
    - Sets lowpass filter frequency. Sets 0 to disable it.

  * - 
    - SetPaused(:term:`boolean` Pause = true)
    - Pauses the sound

  * - 
    - SetPitch(:term:`number` NewPitch)
    - Sets the Sound's pitch

  * - 
    - SetVolume(:term:`number` NewVolume)
    - Sets the Sound's volume (0 - 1)

  * - 
    - Stop()
    - Stops the sound

  * - 
    - StopDelayed(:term:`number` Delay)
    - Stops the sound after the provided delay

  * - :term:`boolean`
    - IsPlaying()
    - Returns if the sound is playing

.. include:: ../common/functions/Actor.rst


Events
------

.. include:: ../common/events/Actor.rst