---
description: How to integrate and communicate with the Sun and Light
---

# Interacting with the Sun

In nanos world, we allow the greatest possible customization to be made on your servers and packages. And to make it even easier, we've included some built-in functions in the game which helps integrating and customizing your Servers.

A very important concept in nanos world is the **Sun**. We provide some methods on [World](../../scripting-reference/static-classes/world.md) class which allows the scripters to, in few lines of codes, modify the current **Time of Day**, **Sun Speed**, **Environment Colors** and even change the **Weather** and **Fog**.

For the methods of interaction with the Sun exposed in the [World](../../scripting-reference/static-classes/world.md) to work, it is necessary that your Map is loaded with a sun that our API can identify it, and for that to be possible, we created the method `World.SpawnDefaultSun()`.

## Spawning the Default Sun

Once you run the method `World.SpawnDefaultSun()`, the game will destroy all \(Unreal\) Actors with the tag `Sun` and will spawn a brand new Actor which contains a `Directional Light`, `Sky Light`, `Fog`, `Clouds` and some others components which you will be able to control with **World** methods.

{% hint style="success" %}
Because of that it is important to set all your [Actors with `Sun` tag when creating Maps](../../assets-modding/creating-assets/maps-and-levels/#rules-for-creating-a-map-level-for-nanos-world)!
{% endhint %}

{% hint style="warning" %}
Sometimes if you use `SpawnDefaultSun()` in some maps, you may notice you will end up with **two** Directional or Sky Lights, this means the Map wasn't configured with the `Sun` tags.
{% endhint %}

## Interacting with the Sun

It is possible to change Several aspects and settings from the Sun.

{% hint style="info" %}
All methods available for customizing the Sun are listed in [World](../../scripting-reference/static-classes/world.md) Static Class page.
{% endhint %}

Some examples of methods are `World.SetTime(hours, minutes)` or `World.SetFogDensity(density)` which will change the current Time and the Fog, respectively.

### Weather

We provide some basic methods to change the Weather of the World. You can use the method `World.SetWeather()` to select from a predefined selection of Weathers, or create your own Weather using all the methods the [World](../../scripting-reference/static-classes/world.md) provides.

### Weather Types

<table>
  <thead>
    <tr>
      <th style="text-align:left">
        <p><b>Weather</b>
        </p>
        <p><b>Type</b>
        </p>
      </th>
      <th style="text-align:left"><b>Sun Intensity</b>
      </th>
      <th style="text-align:left"><b>Fog Second Density</b>
      </th>
      <th style="text-align:left"><b>Fog Height Falloff</b>
      </th>
      <th style="text-align:left"><b>Sun Light Color</b>
      </th>
      <th style="text-align:left"><b>Sky Rayleigh Scattering</b>
      </th>
      <th style="text-align:left"><b>Sun Temp. Multi.</b>
      </th>
      <th style="text-align:left"><b>Sky Light Intensity</b>
      </th>
      <th style="text-align:left"><b>Wind</b>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>Clear</b>
      </td>
      <td style="text-align:left"><code>150</code>
      </td>
      <td style="text-align:left"><code>0.005</code>
      </td>
      <td style="text-align:left"><code>0.2</code>
      </td>
      <td style="text-align:left"><code>Color(1.0, 0.9, 0.8)</code>
      </td>
      <td style="text-align:left"><code>Color(0.17, 0.41, 1.0)</code>
      </td>
      <td style="text-align:left"><code>1.0</code>
      </td>
      <td style="text-align:left"><code>1.0</code>
      </td>
      <td style="text-align:left"><code>0.25</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Rain</b>
      </td>
      <td style="text-align:left"><code>10</code>
      </td>
      <td style="text-align:left"><code>0.025</code>
      </td>
      <td style="text-align:left"><code>0.03</code>
      </td>
      <td style="text-align:left"><code>Color(0.82, 0.9, 1.0)</code>
      </td>
      <td style="text-align:left"><code>Color(0.73, 0.8, 1.0)</code>
      </td>
      <td style="text-align:left"><code>2.0</code>
      </td>
      <td style="text-align:left"><code>0.3</code>
      </td>
      <td style="text-align:left"><code>1.0</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Cloudy</b>
      </td>
      <td style="text-align:left"><code>10</code>
      </td>
      <td style="text-align:left"><code>0.1</code>
      </td>
      <td style="text-align:left"><code>0.01</code>
      </td>
      <td style="text-align:left"><code>Color(1.0, 0.9, 0.8)</code>
      </td>
      <td style="text-align:left"><code>Color(0.73, 0.8, 1.0)</code>
      </td>
      <td style="text-align:left"><code>1.25</code>
      </td>
      <td style="text-align:left"><code>0.2</code>
      </td>
      <td style="text-align:left"><code>0.3</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Thunder-storm</b>
      </td>
      <td style="text-align:left"><code>5</code>
      </td>
      <td style="text-align:left"><code>0.5</code>
      </td>
      <td style="text-align:left"><code>0.025</code>
      </td>
      <td style="text-align:left"><code>Color(0.82, 0.9, 1.0)</code>
      </td>
      <td style="text-align:left"><code>Color(0.73, 0.8, 1.0)</code>
      </td>
      <td style="text-align:left"><code>2.0</code>
      </td>
      <td style="text-align:left"><code>0.25</code>
      </td>
      <td style="text-align:left"><code>3.0</code>
      </td>
    </tr>
  </tbody>
</table>

