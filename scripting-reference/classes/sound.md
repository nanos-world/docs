---
description: Class for playing in-game 2D and 3D sounds
---

# Sound

{% hint style="success" %}
This is a **Client** only Class.
{% endhint %}

{% hint style="info" %}
It is not possible \(yet?\) to load custom sound files \(.mp3, .wav…\), the sounds must be pre-cooked in Unreal before used.
{% endhint %}

## Usage

```lua
local my_sound = Sound(
    Vector(-510, 145, 63), -- Location (if a 3D sound)
    "nanos-world::A_VR_Confirm", -- Asset Path
    false, -- Is 2D Sound
    true, -- Auto Destroy (if to destroy after finished playing)
    SoundType.SFX,
    1, -- Volume
    1 -- Pitch
)
```

## Constructor Parameters

| **Type** | **Name** | **Default** | Description |
| :--- | :--- | :--- | :--- |
| [Vector](../utility-classes/vector.md) | **`location`** | `Vector(0, 0, 0)` | 3D only |
| [string](../glossary/basic-types.md#string) | **`asset`** |  |  |
| [boolean](../glossary/basic-types.md#boolean) | **`is_2D_sound`** | `false` |  |
| [boolean](../glossary/basic-types.md#boolean) | **`auto_destroy`** | `true` | If to destroy after finished playing |
| [SoundType](../glossary/enums.md#soundtype) | **`sound_type`** | `SoundType.SFX` | Used to apply user’s volume settings |
| [number](../glossary/basic-types.md#number) | **`volume`** | `1` |  |
| [number](../glossary/basic-types.md#number) | **`pitch`** | `1` |  |
| [number](../glossary/basic-types.md#number) | **`inner_radius`** | `400` | 3D only |
| [number](../glossary/basic-types.md#number) | **`falloff_distance`** | `3600` | 3D only |
| [AttenuationFunction](../glossary/enums.md#attenuationfunction) | **`attenuation_function`** | `Linear` | 3D only |
| [boolean](../glossary/basic-types.md#boolean) | **`keep_playing_when_silent`** | `false` | 3D only - Whether to keep playing this sound when it’s not audible - Use with caution, it may cause performance issues! |

## Functions

| **Returns** | **Name** | **Description** |
| :--- | :--- | :--- |
|  | [**`FadeIn`**](sound.md#fadein) | Plays the sound with a fade effect |
|  | [**`FadeOut`**](sound.md#fadeout) | Stops the sound with a fade effect |
|  | [**`Play`**](sound.md#play) | Starts the sound |
|  | [**`SetFalloffDistance`**](sound.md#setfalloffdistance) | If a 3D Sound, sets the distance which the sound is inaudible |
|  | [**`SetInnerRadius`**](sound.md#setinnerradius) | If a 3D Sound, sets the distance within the volume is 100% |
|  | [**`SetLowPassFilter`**](sound.md#setlowpassfilter) | Sets lowpass filter frequency. Sets 0 to disable it. |
|  | [**`SetPaused`**](sound.md#setpaused) | Pauses the sound |
|  | [**`SetPitch`**](sound.md#setpitch) | Sets the Sound’s pitch |
|  | [**`SetVolume`**](sound.md#setvolume) | Sets the Sound’s volume \(0 - 1\) |
|  | [**`Stop`**](sound.md#stop) | Stops the sound |
|  | [**`StopDelayed`**](sound.md#stopdelayed) | Stops the sound after the provided delay |
| [boolean](../glossary/basic-types.md#boolean) | `IsPlaying` | Returns if the sound is playing |

### `FadeIn`

> Plays the sound with a fade effect

```lua
my_sound:FadeIn(fade_in_duration, fade_volume_level, start_time)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`fade_in_duration`** |  |
| [number](../glossary/basic-types.md#number) | **`fade_volume_level`** |  |
| [number](../glossary/basic-types.md#number) | **`start_time`** |  |

### `FadeOut`

> Stops the sound with a fade effect

```lua
my_sound:FadeOut(fade_out_duration, fade_volume_level)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`fade_out_duration`** |  |
| [number](../glossary/basic-types.md#number) | **`fade_volume_level`** |  |

### `Play`

> Starts the sound

```lua
my_sound:Play(start_time)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`start_time`** | `0` |  |

### `SetFalloffDistance`

> If a 3D Sound, sets the distance which the sound is inaudible

```lua
my_sound:SetFalloffDistance(falloff_distance)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`falloff_distance`** |  |

### `SetInnerRadius`

> If a 3D Sound, sets the distance within the volume is 100%

```lua
my_sound:SetInnerRadius(inner_radius)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`inner_radius`** |  |

### `SetLowPassFilter`

> Sets lowpass filter frequency. Sets 0 to disable it.

```lua
my_sound:SetLowPassFilter(frequency)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`frequency`** |  |

### `SetPaused`

> Pauses the sound

```lua
my_sound:SetPaused(pause)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [boolean](../glossary/basic-types.md#boolean) | **`pause`** | `true` |  |

### `SetPitch`

> Sets the Sound's pitch

```lua
my_sound:SetPitch(new_pitch)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`new_pitch`** |  |

### `SetVolume`

> Sets the Sound's volume \(0 - 1\)

```lua
my_sound:SetVolume(new_volume)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`new_volume`** |  |

### `Stop`

> Stops the sound

```lua
my_sound:Stop()
```

### `StopDelayed`

> Stops the sound after the provided delay

```lua
my_sound:StopDelayed(delay)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`delay`** |  |

### `IsPlaying`

> Gets if the sound is playing
>
> Returns [boolean](../glossary/basic-types.md#boolean)

```lua
my_sound:IsPlaying()
```

## Sound Attenuation

This property defines the function that determines the rate of attenuation over distance. There are a number of different functions to choose from:

### Linear

![](https://i.imgur.com/PZ5xFDb.png)

This is the default function. When using this function the volume will attenuate linearly and so the changes in volume are constant as the listener moves towards and away from the source. This function is good for crossfading between large background-type sounds that don’t need tightly focussed 3D spatial falloff settings.

### Logarithmic

![](https://i.imgur.com/DVlwkiZ.png)

When using this function the volume attenuates such that the changes in volume are greater at close distances, and lesser at far distances. This function is good for spot sounds that need good 3D positioning, while still being audible at reasonable distances.

### Inverse

![](https://i.imgur.com/AUEKMD4.png)

When using this function, the changes in volume are similar to that of the logarithmic curve, but are more exaggerated. This function is good for sounds that only need to be just audible at far distances, but that gets significantly louder as the listener gets quite close to the source.

### Log Reverse

![](https://i.imgur.com/UB5LFHx.png)

When using this function, the changes in volume are lesser at close distances, with more dramatic differences at far distances. This function is good for sounds that need to be loud across larger distances.

### Natural Sound

![](https://i.imgur.com/hIw1HfW.png)

This function attempts to model a more ‘naturalistic’ falloff behavior to produce behaviors that closer match reality. This function is a kind of ‘middle ground’ between the Logarithmic and Inverse functions.

