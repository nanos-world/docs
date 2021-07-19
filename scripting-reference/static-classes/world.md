---
description: Interaction with World and Environment elements
---

# World

{% hint style="success" %}
This is a Static Class named `World`. You can access it’s methods directly with `.`. It is not possible to initialize or create new instances.

This is a **Client** only Class.
{% endhint %}

{% hint style="info" %}
Please check [Interacting with Sun](../../core-concepts/scripting/interacting-with-the-sun.md) for further information and examples.
{% endhint %}

{% page-ref page="../../core-concepts/scripting/interacting-with-the-sun.md" %}

## Static Functions

| Returns | Name | Description |
| :--- | :--- | :--- |
|  | [**`LoadStreamLevel`**](world.md#loadstreamlevel) | Loads a Level in runtime |
|  | [**`SetFogDensity`**](world.md#setfogdensity) |  |
|  | [**`SetFogHeightFalloff`**](world.md#setfogheightfalloff) |  |
|  | [**`SetFogHeightOffset`**](world.md#setfogheightoffset) |  |
|  | [**`SetSunLightColor`**](world.md#setsunlightcolor) |  |
|  | [**`SetSkyLightIntensity`**](world.md#setskylightintensity) |  |
|  | [**`SetSkyRayleighScattering`**](world.md#setskyrayleighscattering) |  |
|  | [**`SetSunLightIntensity`**](world.md#setsunlightintensity) |  |
|  | [**`SetSunTemperatureMultiplier`**](world.md#setsuntemperaturemultiplier) |  |
|  | [**`SetPPBloom`**](world.md#setppbloom) | Set Post Process Bloom Settings |
|  | [**`SetPPChromaticAberration`**](world.md#setppchromaticaberration) | Set Post Process Chromatic Aberration Settings |
|  | [**`SetPPImageEffects`**](world.md#setppimageeffects) | Set Post Process Image Effect Settings |
|  | [**`SetPPFilm`**](world.md#setppfilm) | Set Post Process Film Settings |
|  | [**`SetPPGlobalSaturation`**](world.md#setppglobalsaturation) | Set Post Process Saturation Colors |
|  | [**`SetSunAngle`**](world.md#setsunangle) | Sets the Sun's angle |
|  | [**`SetSunSpeed`**](world.md#setsunspeed) | Sets the Sun's time speed |
|  | [**`SetTime`**](world.md#settime) | Sets the global time of the day |
|  | [**`SetWeather`**](world.md#setweather) | Sets the global Predefined Weather |
|  | [**`SpawnDefaultSun`**](world.md#spawndefaultsun) | Overrides all Light/Sun Actors with the NanosWorld's Official one |
|  | [**`SetWind`**](world.md#setwind) | Sets the global Wind intensity |
|  | [**`UnloadStreamLevel`**](world.md#unloadstreamlevel) | Unloads a Level in runtime |
| [number](../glossary/basic-types.md#number) | [**`GetSunAngle`**](world.md#getsunangle) |  |
| [number](../glossary/basic-types.md#number) | [**`GetSunSpeed`**](world.md#getsunspeed) |  |
| [table](../glossary/basic-types.md#table) | [**`GetTime`**](world.md#gettime) | Returns a table containing current Sun hours and minutes |
| [WeatherType](../glossary/enums.md#weathertype) | [**`GetWeather`**](world.md#getweather) |  |
| [number](../glossary/basic-types.md#number) | [**`GetWind`**](world.md#getwind) |  |

### `LoadStreamLevel`

> Loads a Level in runtime

```lua
World.LoadStreamLevel(level_name)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [number](../glossary/basic-types.md#string) | **`level_name`** |  |  |

### `SetFogDensity`

&gt;

```lua
World.SetFogDensity(density, second_density)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`density`** |  |  |
| [number](../glossary/basic-types.md#number) | **`second_density`** | `0` |  |

### `SetFogHeightFalloff`

&gt;

```lua
World.SetFogHeightFalloff(falloff)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`falloff`** |  |  |

### `SetFogHeightOffset`

&gt;

```lua
World.SetFogHeightOffset(offset)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`offset`** |  |  |

### `SetSunLightColor`

&gt;

```lua
World.SetSunLightColor(color)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| Color | **`color`** |  |  |

### `SetSkyLightIntensity`

&gt;

```lua
World.SetSkyLightIntensity(ntensity)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`intensity`** |  |  |

### `SetSkyRayleighScattering`

&gt;

```lua
World.SetSkyRayleighScattering(color)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| Color | **`color`** |  |  |

### `SetSunLightIntensity`

&gt;

```lua
World.SetSunLightIntensity([number](intensity)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`intensity`** |  |  |

### `SetSunTemperatureMultiplier`

&gt;

```lua
World.SetSunTemperatureMultiplier(multiplier)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`multiplier`** |  |  |

### `SetPPBloom`

> Set Post Process Bloom Settings

```lua
World.SetPPBloom(intensity, threshold)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`intensity`** | `0.675` |  |
| [number](../glossary/basic-types.md#number) | **`threshold`** | `-1` |  |

### `SetPPChromaticAberration`

> Set Post Process Chromatic Aberration Settings

```lua
World.SetPPChromaticAberration(intensity, start_offset)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`intensity`** | `0` |  |
| [number](../glossary/basic-types.md#number) | **`start_offset`** | `0` |  |

### `SetPPImageEffects`

> Set Post Process Image Effect Settings

```lua
World.SetPPImageEffects(vignette_intensity, grain_jitter, grain_intensity)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`vignette_intensity`** | `0.6` |  |
| [number](../glossary/basic-types.md#number) | **`grain_jitter`** | `0` |  |
| [number](../glossary/basic-types.md#number) | **`grain_intensity`** | `0` |  |

### `SetPPFilm`

> Set Post Process Film Settings

```lua
World.SetPPFilm(slope , toe, shoulder, black_clip, white_clip)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`slope`** | `0.8` |  |
| [number](../glossary/basic-types.md#number) | **`toe`** | `0.55` |  |
| [number](../glossary/basic-types.md#number) | **`shoulder`** | `0.26` |  |
| [number](../glossary/basic-types.md#number) | **`black_clip`** | `0` |  |
| [number](../glossary/basic-types.md#number) | **`white_clip`** | `0.3` |  |

### `SetPPGlobalSaturation`

> Set Post Process Saturation Colors. Use Alpha for overall Saturation intensity

```lua
World.SetPPGlobalSaturation(color)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| Color | **`color`** |  |  |

### `SetSunAngle`

> Sets the sun's angle \(0-360\)

```lua
World.SetSunAngle(angle)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`angle`** |  |  |

### `SetSunSpeed`

> Sets the sun's time speed \(default: '60', which means 60 seconds in game = 1 second in real world\)

```lua
World.SetSunSpeed(speed)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`speed`** |  |  |

### `SetTime`

> Sets the Global time of the day

```lua
World.SetTime(hours, minutes)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`hours`** |  |  |
| [number](../glossary/basic-types.md#number) | **`minutes`** |  |  |

### `SetWeather`

> Sets the global Predefined Weather \(_Clear, Rain, Cloudy, Thunderstorm_\)

```lua
World.SetWeather(weather)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [WeatherType](../glossary/enums.md#weathertype) | **`weather`** |  |  |

### `SpawnDefaultSun`

> Overrides all Light/Sun Actors with the NanosWorld's Official one, to be able to use the functions from this page

```lua
World.SpawnDefaultSun()
```

### `SetWind`

> Sets the global Wind intensity

```lua
World.SetWind(intensity)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`intensity`** |  |  |

### `UnloadStreamLevel`

> Unloads a Level in runtime

```lua
World.UnloadStreamLevel(level_name)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`level_name`** |  |  |

### `GetSunAngle`

> Returns [number](../glossary/basic-types.md#number)

```lua
World.GetSunAngle()
```

### `GetSunSpeed`

> Returns [number](../glossary/basic-types.md#number)

```lua
World.GetSunSpeed()
```

### `GetTime`

> Returns a table containing current Sun hours and minutes
>
> Returns `{hours, minutes}`

```lua
World.GetTime()
```

### `GetWeather`

> Returns WeatherType

```lua
World.GetWeather()
```

### `GetWind`

> Returns [number](../glossary/basic-types.md#number)

```lua
World.GetWind()
```

