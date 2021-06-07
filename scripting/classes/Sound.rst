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

    local my_sound = Sound(
        Vector(-510, 145, 63), -- Location (if a 3D sound)
        "NanosWorld::A_VR_Confirm", -- Asset Path
        false, -- Is 2D Sound
        true, -- Auto Destroy (if to destroy after finished playing)
        SoundType.SFX,
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
    - location (used only if 3D sound)
    - Vector(0, 0, 0)

  * - :term:`string`
    - asset (sound)
    - 

  * - :term:`boolean`
    - is_2D_sound
    - false

  * - :term:`boolean`
    - auto_destroy (if to destroy after finished playing)
    - true

  * - :term:`SoundType`
    - sound_type (*SFX, Music*) - Used to apply user's volume settings
    - SoundType.SFX

  * - :term:`number`
    - volume (0 - 1)
    - 1

  * - :term:`number`
    - pitch
    - 1

  * - :term:`number`
    - inner_radius (3D only)
    - 400

  * - :term:`number`
    - falloff_distance (3D only)
    - 3600

  * - :term:`AttenuationFunction`
    - attenuation_function (3D only) (*Linear, Logarithmic, Inverse, LogReverse, NaturalSound**)
    - AttenuationFunction.Linear

  * - :term:`boolean`
    - keep_playing_when_silent (3D only) - Whether to keep playing this sound when it's not audible - Use with caution, it may cause performance issues!
    - false


Functions
----------

.. list-table:: 
  :widths: 10 35 55

  * - **Returns**
    - **Name**
    - **Description**

  * - 
    - FadeIn( |br-p| :term:`number` fade_in_duration, |br-p| :term:`number` fade_volume_level, |br-p| :term:`number` start_time |br| )
    - Plays the sound with a fade effect

  * - 
    - FadeOut( |br-p| :term:`number` fade_out_duration, |br-p| :term:`number` fade_volume_level |br| )
    - Stops the sound with a fade effect

  * - 
    - Play(:term:`number` start_time = 0)
    - Starts the sound

  * - 
    - SetFalloffDistance(:term:`number` falloff_distance)
    - If a 3D Sound, sets the distance which the sound is inaudible

  * - 
    - SetInnerRadius(:term:`number` inner_radius)
    - If a 3D Sound, sets the distance within the volume is 100%

  * - 
    - SetLowPassFilter(:term:`number` frequency)
    - Sets lowpass filter frequency. Sets 0 to disable it.

  * - 
    - SetPaused(:term:`boolean` pause = true)
    - Pauses the sound

  * - 
    - SetPitch(:term:`number` new_pitch)
    - Sets the Sound's pitch

  * - 
    - SetVolume(:term:`number` new_volume)
    - Sets the Sound's volume (0 - 1)

  * - 
    - Stop()
    - Stops the sound

  * - 
    - StopDelayed(:term:`number` delay)
    - Stops the sound after the provided delay

  * - :term:`boolean`
    - IsPlaying()
    - Returns if the sound is playing

.. include:: ../common/functions/Actor.rst


Events
------

.. include:: ../common/events/Actor.rst


Sound Attenuation
-----------------

This property defines the function that determines the rate of attenuation over distance. There are a number of different functions to choose from:


Linear
~~~~~~

.. image:: https://i.imgur.com/PZ5xFDb.png

This is the default function. When using this function the volume will attenuate linearly and so the changes in volume are constant as the listener moves towards and away from the source. This function is good for crossfading between large background-type sounds that don't need tightly focussed 3D spatial falloff settings.


Logarithmic
~~~~~~~~~~~

.. image:: https://i.imgur.com/DVlwkiZ.png

When using this function the volume attenuates such that the changes in volume are greater at close distances, and lesser at far distances. This function is good for spot sounds that need good 3D positioning, while still being audible at reasonable distances.


Inverse
~~~~~~~

.. image:: https://i.imgur.com/AUEKMD4.png

When using this function, the changes in volume are similar to that of the logarithmic curve, but are more exaggerated. This function is good for sounds that only need to be just audible at far distances, but that gets significantly louder as the listener gets quite close to the source.


Log Reverse
~~~~~~~~~~~

.. image:: https://i.imgur.com/UB5LFHx.png

When using this function, the changes in volume are lesser at close distances, with more dramatic differences at far distances. This function is good for sounds that need to be loud across larger distances.


Natural Sound
~~~~~~~~~~~~~

.. image:: https://i.imgur.com/hIw1HfW.png

This function attempts to model a more ‘naturalistic' falloff behavior to produce behaviors that closer match reality. This function is a kind of ‘middle ground' between the Logarithmic and Inverse functions.
