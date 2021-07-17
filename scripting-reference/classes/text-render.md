---
description: >-
  A Text Render class is useful for spawning Texts in 3D world, you can even
  attach it to other entities
---

# TextRender

![](../../.gitbook/assets/image%20%2852%29.png)

{% hint style="success" %}
This is a **Client** only Class.
{% endhint %}

{% hint style="info" %}
⏬ **Inheritance:** This class inherits from [Actor](base-classes/actor.md) and [Paintable](base-classes/paintable.md). Please check their pages for inherited **Methods** and **Events**.
{% endhint %}

## Usage

{% tabs %}
{% tab title="Lua" %}
```lua
local my_text_render = TextRender(
    Vector(-100, 200, 300),
    Rotator(),
    "My Awesome Text",
    Vector(1, 1, 1) -- Scale
    Color(1, 0, 0), -- Red Color
    FontType.OpenSans,
    TextRenderAlignCamera.FaceCamera
)
```
{% endtab %}
{% endtabs %}

{% hint style="info" %}
If you desire your **TextRender** to be visible through walls, replace it’s material with the nanos Default TranslucentDepth one!

`SetDefaultMaterial(MaterialType.TranslucentDepth)`.

You can also tweak it’s color and other properties using the Material methods.
{% endhint %}

{% page-ref page="../../getting-started/tutorials-and-examples/name-tags.md" %}

## Constructor Parameters

| **Type** | **Name** | **Default** |
| :--- | :--- | :--- |
| [Vector](../utility-classes/vector.md) | **`location`** | `Vector(0, 0, 0)` |
| [Rotator](../utility-classes/rotator.md) | **`rotation`** | `Rotator(0, 0, 0)` |
| [string](../glossary/basic-types.md#string) | **`text`** |  |
| [Vector](../utility-classes/vector.md) | **`scale`** | `Vector(1, 1, 1)` |
| [Color](../utility-classes/color.md) | **`color`** | `Color(1, 1, 1, 1)` |
| [FontType](../glossary/enums.md#fonttype) | **`font_type`** | `FontType.Roboto` |
| [TextRenderAlignCamera](../glossary/enums.md#textrenderaligncamera) | **`align_camera`** | `TextRenderAlignCamera.Unaligned` |

## Functions

{% page-ref page="base-classes/actor.md" %}

{% page-ref page="base-classes/paintable.md" %}

| **Returns** | **Name** | **Description** |
| :--- | :--- | :--- |
|  | [`SetColor`](text-render.md#setcolor) | Sets the Color |
|  | [`SetFont`](text-render.md#setfont) | Sets the Font |
|  | [`SetFreeze`](text-render.md#setfreeze) | Freeze mesh rebuild, to avoid unnecessary mesh rebuilds when setting a few properties together |
|  | [`SetGlyphSettings`](text-render.md#setglyphsettings) | Sets the Glyph representation settings to generate the 3D Mesh for this text render |
|  | [`SetMaxSize`](text-render.md#setmaxsize) | Sets the Max Size of the TextRender, optionally scaling it proportionally |
|  | [`SetText`](text-render.md#settext) | Sets the Text |
|  | [`SetTextSettings`](text-render.md#settextsettings) | Sets the Text & Font settings for this text render |

### `SetColor`

> Sets the Color Internally this will call the _SetMaterialColorParameter\("Tint", color\)_ method

```lua
my_text_render:SetColor(color)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [Color](../utility-classes/color.md) | **`color`** |  |

### `SetFont`

> Sets the Font

```lua
my_text_render:SetFont(:font_type)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [FontType](../glossary/enums.md#fonttype) | **`font_type`** |  |

### `SetFreeze`

> Freeze mesh rebuild, to avoid unnecessary mesh rebuilds when setting a few properties together

```lua
my_text_render:SetFreeze(freeze)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [boolean](../glossary/basic-types.md#boolean) | **`freeze`** |  |

### `SetGlyphSettings`

> Sets the Glyph representation settings to generate the 3D Mesh for this text render

```lua
my_text_render:SetGlyphSettings(extrude, bevel, bevel_type, bevel_segments, outline)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`extrude`** | `0` |  |
| [number](../glossary/basic-types.md#number) | **`level`** | `0` |  |
| [TextRenderBevelType](../glossary/enums.md#textrenderbeveltype) | **`bevel_type`** | `TextRenderBevelType.Convex` |  |
| [number](../glossary/basic-types.md#number) | **`bevel_segments`** | `8` |  |
| [boolean](../glossary/basic-types.md#boolean) | **`outline`** | `false` |  |

### `SetMaxSize`

> Sets the Max Size of the TextRender, optionally scaling it proportionally

```lua
my_text_render:SetMaxSize(max_width, max_height, scale_proportionally)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`max_width`** | `0` |  |
| [number](../glossary/basic-types.md#number) | **`max_height`** | `0` |  |
| [boolean](../glossary/basic-types.md#boolean) | **`boolean`** | `true` |  |

### `SetText`

> Sets the Text

```lua
my_text_render:SetText(text)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`text`** |  |

### `SetTextSettings`

> Sets the Text & Font settings for this text render

```lua
my_text_render:SetTextSettings(kerning, line_spacing, word_spacing, horizontal_alignment, vertical_alignment)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`kerning`** | `0` |  |
| [number](../glossary/basic-types.md#number) | **`line_spacing`** | `0` |  |
| [number](../glossary/basic-types.md#number) | **`word_spacing`** | `0` |  |
| [TextRenderHorizontalAlignment](../glossary/enums.md#textrenderhorizontalalignment) | **`horizontal_alignment`** | `TextRenderHorizontalAlignment.Center` |  |
| [TextRenderVerticalAlignment](../glossary/enums.md#textrenderverticalalignment) | **`vertical_alignment`** | `TextRenderVerticalAlignment.Center` |  |

