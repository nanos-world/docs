---
description: How to integrate and communicate with the Sun and Light
tags: [scripting]
---

# Interacting with the Sun

How to integrate and communicate with the Sun and Light.

In nanos world, we allow the greatest possible customization to be made on your servers and packages. And to make it even easier, we've included some built-in functions in the game which helps integrating and customizing your Servers.

A very important concept in nanos world is the **Sun**. We provide some methods on [World](./scripting-reference/static-classes/world.mdx) class which allows the scripters to, in few lines of codes, modify the current **Time of Day**, **Sun Speed**, **Environment Colors** and even change the **Weather** and **Fog**.

For the methods of interaction with the Sun exposed in the [World](./scripting-reference/static-classes/world.mdx) to work, it is necessary that your Map is loaded with a sun that our API can identify it, and for that to be possible, we created the method `World.SpawnDefaultSun()`.

## Spawning the Default Sun

Once you run the method `World.SpawnDefaultSun()`, the game will destroy all \(Unreal\) Actors with the tag `Sun` and will spawn a brand new Actor which contains a `Directional Light`, `Sky Light`, `Fog`, `Clouds` and some others components which you will be able to control with **World** methods.

:::tip

Because of that it is important to set all your [Actors with `Sun` tag when creating Maps](./assets-modding/creating-assets/maps-and-levels/importing-maps.md#rules-for-creating-a-map-level-for-nanos-world)!

:::

:::caution

Sometimes if you use `SpawnDefaultSun()` in some maps, you may notice you will end up with **two** Directional or Sky Lights, this means the Map wasn't configured with the `Sun` tags.

:::

## Interacting with the Sun

It is possible to change Several aspects and settings from the Sun.

:::info

All methods available for customizing the Sun are listed in [World](./scripting-reference/static-classes/world.mdx) Static Class page.

:::

Some examples of methods are `World.SetTime(hours, minutes)` or `World.SetFogDensity(density)` which will change the current Time and the Fog, respectively.

### Weather

We provide some basic methods to change the Weather of the World. You can use the method `World.SetWeather()` to select from a predefined selection of Weathers, or create your own Weather using all the methods the [World](./scripting-reference/static-classes/world.mdx) provides.

### Weather Types

| Weather Type | Sun Intensity | Fog Second Density | Fog Height Falloff | Sun Light Color | Sky Rayleigh Scattering | Sun Temp. Multi. | Sky Light Intensity | Wind |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Clear** | `150` | `0.005` | `0.2` | `Color(1.0, 0.9, 0.8)` | `Color(0.17, 0.41, 1.0)` | `1.0` | `1.0` | `0.25` |
| **Rain** | `10` | `0.025` | `0.03` | `Color(0.82, 0.9, 1.0)` | `Color(0.73, 0.8, 1.0)` | `2.0` | `0.3` | `1.0` |
| **Cloudy** | `10` | `0.1` | `0.01` | `Color(1.0, 0.9, 0.8)` | `Color(0.73, 0.8, 1.0)` | `1.25` | `0.2` | `0.3` |
| **Thunder-storm** | `5` | `0.5` | `0.025` | `Color(0.82, 0.9, 1.0)` | `Color(0.73, 0.8, 1.0)` | `2.0` | `0.25` | `3.0` |
