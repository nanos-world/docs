---
description: Base Paintable Class
---

# Base Paintable

A **Paintable** class is a base Class in nanos world which provides customization on the Meshes Materials, exposing common functions to allow you to set custom Material Parameters and loading Textures from Disk.

{% hint style="info" %}
This is a base Class. You cannot spawn it directly.
{% endhint %}

## Functions <a id="functions"></a>

| **Returns** | **Name** | **Description** |
| :--- | :--- | :--- |
|  | [**`SetDefaultMaterial`**](paintable.md#sedefaultmaterial) | Replaces all materials of this actor with a nanos basic material with common parameters available |
|  | [**`SetMaterialColorParameter`**](paintable.md#setmaterialcolorparameter) | Sets a Color parameter in this actor’s material |
|  | [**`SetMaterialScalarParameter`**](paintable.md#setmaterialscalarparameter) | Sets a scalar parameter in this actor’s material |
|  | [**`SetMaterialTextureParameter`**](paintable.md#setmaterialtextureparameter) | Loads a image from computer \(relative to Assets/ folder\) and sets as parameter in this actor’s material |
|  | [**`SetMaterialVectorParameter`**](paintable.md#setmaterialvectorparameter) | Sets a Vector parameter in this actor’s material |

### `SetDefaultMaterial`

> Replaces all materials of this actor with a nanos basic material with common parameters available

{% tabs %}
{% tab title="Lua" %}
```lua
my_entity:SetDefaultMaterial(material_type)
```
{% endtab %}
{% endtabs %}

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [MaterialType](../../glossary/enums.md#materialtype) | material\_type | The `MaterialType` to apply |

### `SetMaterialColorParameter`

> Sets a Color parameter in this actor’s material

{% tabs %}
{% tab title="Lua" %}
```lua
my_entity:SetMaterialColorParameter(parameter_name, color)
```
{% endtab %}
{% endtabs %}

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [string](../../glossary/basic-types.md#string) | parameter\_name | The name of Material parameter |
| [Color](../../utility-classes/color.md) | color | The value to set |

### `SetMaterialScalarParameter`

> Sets a Scalar parameter in this actor’s material

{% tabs %}
{% tab title="Lua" %}
```lua
my_entity:SetMaterialScalarParameter(parameter_name, number)
```
{% endtab %}
{% endtabs %}

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [string](../../glossary/basic-types.md#string) | parameter\_name | The name of Material parameter |
| [string](../../glossary/basic-types.md#number) | scalar | The value to set |

### `SetMaterialTextureParameter`

> Loads a image from computer \(relative to Assets/ folder\) and sets as parameter in this actor’s material

{% tabs %}
{% tab title="Lua" %}
```lua
my_entity:SetMaterialTextureParameter(parameter_name, texture_path)
```
{% endtab %}
{% endtabs %}

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [string](../../glossary/basic-types.md#string) | parameter\_name | The name of Material parameter |
| [SpecialPath](../../glossary/basic-types.md#specialpath) | texture\_path | The path of the Texture |

### `SetMaterialVectorParameter`

> Sets a Vector parameter in this actor’s material

{% tabs %}
{% tab title="Lua" %}
```lua
my_entity:SetMaterialVectorParameter(parameter_name, vector)
```
{% endtab %}
{% endtabs %}

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [string](../../glossary/basic-types.md#string) | parameter\_name | The name of Material parameter |
| [Vector](../../utility-classes/vector.md) | vector | The vector to apply |

## Material Types

nanos world provides 3 Material types ready to use with predefined parameters which can be easily accessed with this page methods.

{% hint style="info" %}
You can create and access your own Materials Parameters if you have a Mesh which uses a Custom Material!
{% endhint %}

![](../../../.gitbook/assets/image%20%2811%29.png)

{% hint style="success" %}
For more information regarding **Material Types** and **Blend Modes**, please refer to [Unreal Docs](https://docs.unrealengine.com/4.26/en-US/RenderingAndGraphics/Materials/MaterialProperties/BlendModes/).
{% endhint %}

#### Parameters Supported by nanos Default Materials

<table>
  <thead>
    <tr>
      <th style="text-align:left">Type</th>
      <th style="text-align:left">Parameter</th>
      <th style="text-align:left">Default</th>
      <th style="text-align:left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><a href="../../utility-classes/color.md">Color</a>
      </td>
      <td style="text-align:left"><b><code>Tint</code></b>
      </td>
      <td style="text-align:left"><code>Color.WHITE</code>
      </td>
      <td style="text-align:left">
        <p>Affects <code>Base Color</code> input</p>
        <p><b>Tint</b> multiplies with <b>Texture</b> parameter to generate the final
          color</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">Texture</td>
      <td style="text-align:left"><b><code>Texture</code></b>
      </td>
      <td style="text-align:left"><code>White Texture</code>
      </td>
      <td style="text-align:left">Image which multiplies with <b>Tint</b> to generate the final color</td>
    </tr>
    <tr>
      <td style="text-align:left">Texture</td>
      <td style="text-align:left"><b><code>Normal</code></b>
      </td>
      <td style="text-align:left"><code>Default Normal Map Vector(0.5, 0.5, 1)</code>
      </td>
      <td style="text-align:left">Image which affects how Light reflects on the object</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="../../utility-classes/color.md">Color</a>
      </td>
      <td style="text-align:left"><b><code>Emissive</code></b>
      </td>
      <td style="text-align:left"><code>Color.BLACK</code>
      </td>
      <td style="text-align:left">Affects <code>Emissive</code> input, high values will cause bloom effect</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="../../glossary/basic-types.md#number">number</a>
      </td>
      <td style="text-align:left"><b><code>Metallic</code></b>
      </td>
      <td style="text-align:left"><code>0</code>
      </td>
      <td style="text-align:left">Affects <code>Metallic</code> input - goes from 0 to 1</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="../../glossary/basic-types.md#number">number</a>
      </td>
      <td style="text-align:left"><b><code>Specular</code></b>
      </td>
      <td style="text-align:left"><code>0.5</code>
      </td>
      <td style="text-align:left">Affects <code>Specular</code> input - goes from 0 to 1</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="../../glossary/basic-types.md#number">number</a>
      </td>
      <td style="text-align:left"><b><code>Roughness</code></b>
      </td>
      <td style="text-align:left"><code>0.65</code>
      </td>
      <td style="text-align:left">Affects <code>Roughness</code> input - goes from 0 to 1</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="../../glossary/basic-types.md#number">number</a>
      </td>
      <td style="text-align:left"><b><code>Opacity</code></b>
      </td>
      <td style="text-align:left"><code>0</code>
      </td>
      <td style="text-align:left">
        <p>Affects <code>Opacity</code> and <code>Opacity Mask</code> inputs - goes from
          0 to 1
          <br />
        </p>
        <p><b>Opacity</b> multiplies with <b>Texture</b> Alpha Channel to generate the
          final opacity</p>
      </td>
    </tr>
  </tbody>
</table>

{% hint style="success" %}
For more information regarding how each Parameter affects the final visual, please take a look at Unreal [Physically Based Materials](https://docs.unrealengine.com/4.26/en-US/RenderingAndGraphics/Materials/PhysicallyBased/) and [Material Inputs](https://docs.unrealengine.com/4.26/en-US/RenderingAndGraphics/Materials/MaterialInputs/) docs page.
{% endhint %}

### `MaterialType.Masked`

Masked is the default Material Type in nanos world. Masked Materials are the most efficient one and supports **Opacity Mask** only. It means the **Opacity** input accepts only `0` or `1`.

### `MaterialType.Translucent`

Translucent Materials are the the heavier ones to render, and cause a lot of overdraw \(and performance issues\) if used incorrectly. It supports **Opacity** but does not support **Normal**, **Metallic,** **Specular** and **Roughness** inputs for optimization reasons.

### `MaterialType.TranslucentDepth`

Is the same as Translucent but will be always visible in the screen, even behind walls or other objects.

#### Supported Parameters in each Material

<table>
  <thead>
    <tr>
      <th style="text-align:left"></th>
      <th style="text-align:left">Tint</th>
      <th style="text-align:left">Texture</th>
      <th style="text-align:left">Normal</th>
      <th style="text-align:left">Emissive</th>
      <th style="text-align:left">Metallic</th>
      <th style="text-align:left">Specular</th>
      <th style="text-align:left">Roughness</th>
      <th style="text-align:left">Opacity</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>Masked</b>
      </td>
      <td style="text-align:left"><code>true</code>
      </td>
      <td style="text-align:left"><code>true</code>
      </td>
      <td style="text-align:left"><code>true</code>
      </td>
      <td style="text-align:left"><code>true</code>
      </td>
      <td style="text-align:left"><code>true</code>
      </td>
      <td style="text-align:left"><code>true</code>
      </td>
      <td style="text-align:left"><code>true</code>
      </td>
      <td style="text-align:left"><code>true*</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Translucent</b>
      </td>
      <td style="text-align:left"><code>true</code>
      </td>
      <td style="text-align:left"><code>true</code>
      </td>
      <td style="text-align:left"><code>false</code>
      </td>
      <td style="text-align:left"><code>true</code>
      </td>
      <td style="text-align:left"><code>false</code>
      </td>
      <td style="text-align:left"><code>false</code>
      </td>
      <td style="text-align:left"><code>false</code>
      </td>
      <td style="text-align:left"><code>true</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">
        <p><b>Translucent</b>
        </p>
        <p><b>Depth</b>
        </p>
      </td>
      <td style="text-align:left"><code>true</code>
      </td>
      <td style="text-align:left"><code>true</code>
      </td>
      <td style="text-align:left"><code>false</code>
      </td>
      <td style="text-align:left"><code>true</code>
      </td>
      <td style="text-align:left"><code>false</code>
      </td>
      <td style="text-align:left"><code>false</code>
      </td>
      <td style="text-align:left"><code>false</code>
      </td>
      <td style="text-align:left"><code>true</code>
      </td>
    </tr>
  </tbody>
</table>

> \*Masked Material's Opacity supports only Opacity Mask: `0` or `1`

