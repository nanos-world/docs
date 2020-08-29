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
  :widths: 20 45 35

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
    - Volume (0 - 1)
    - 1

  * - :term:`number`
    - Sound Type (0 - SFX, 1 - Music) - Used to apply user's volume settings
    - 0

  * - :term:`number`
    - Pitch
    - 1


Functions
----------

.. list-table:: 
  :widths: 5 10 35 50

  * - 
    - **Returns**
    - **Name**
    - **Description**

  * - |client-only-label|
    - 
    - FadeIn(:term:`number` FadeInDuration, :term:`number` FadeVolumeLevel, :term:`number` StartTime)
    - Plays the sound with a fade effect

  * - |client-only-label|
    - 
    - FadeOut(:term:`number` FadeOutDuration, :term:`number` FadeVolumeLevel)
    - Stops the sound with a fade effect

  * - |client-only-label|
    - 
    - Play()
    - Starts the sound

  * - |client-only-label|
    - 
    - SetFalloffDistance(:term:`number` FalloffDistance)
    - If a 3D Sound, sets the distance which the sound is inaudible

  * - |client-only-label|
    - 
    - SetLowPassFilter(:term:`number` Frequency)
    - Sets lowpass filter frequency. Sets 0 to disable it.

  * - |client-only-label|
    - 
    - SetPaused(:term:`boolean` Pause)
    - Pauses the sound

  * - |client-only-label|
    - 
    - SetPitch(:term:`number` NewPitch)
    - Sets the Sound's pitch

  * - |client-only-label|
    - 
    - SetVolume(:term:`number` NewVolume)
    - Sets the Sound's volume (0 - 1)

  * - |client-only-label|
    - 
    - Stop()
    - Stops the sound

  * - |client-only-label|
    - 
    - StopDelayed(:term:`number` Delay)
    - Stops the sound after the provided delay

  * - |client-only-label|
    - :term:`boolean`
    - IsPlaying()
    - Returns if the sound is playing

.. include:: ../common/functions/Actor.rst


Events
------

.. include:: ../common/events/Actor.rst