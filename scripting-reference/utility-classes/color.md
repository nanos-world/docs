---
description: 'A color composed of components (R, G, B, A) with floating point precision.'
---

# Color

{% hint style="info" %}
**Tip:** This structure is Open Sourced at [https://github.com/nanos-world/nanos-world-lua-lib](https://github.com/nanos-world/nanos-world-lua-lib). Feel free to push merge requests and suggest changes!
{% endhint %}

{% hint style="success" %}
**Note:** This structure supports `+`, `-`, `*`, `/`, `==`, and `tostring` operations.
{% endhint %}

## Usage

{% tabs %}
{% tab title="Lua" %}
```lua
local grey_color = Color(0.5, 0.5, 0.5, 1)
```
{% endtab %}
{% endtabs %}

## Properties

<table>
  <thead>
    <tr>
      <th style="text-align:left"><b>Type</b>
      </th>
      <th style="text-align:left"><b>Name</b>
      </th>
      <th style="text-align:left"><b>Description</b>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><a href="../glossary/basic-types.md#number">number</a>
      </td>
      <td style="text-align:left"><b><code>R</code></b>
      </td>
      <td style="text-align:left">Red color percentage (0-1)</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="../glossary/basic-types.md#number">number</a>
      </td>
      <td style="text-align:left"><b><code>G</code></b>
      </td>
      <td style="text-align:left">Green color percentage (0-1)</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="../glossary/basic-types.md#number">number</a>
      </td>
      <td style="text-align:left"><b><code>B</code></b>
      </td>
      <td style="text-align:left">Blue color percentage (0-1)</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="../glossary/basic-types.md#number">number</a>
      </td>
      <td style="text-align:left"><b><code>A</code></b>
      </td>
      <td style="text-align:left">
        <p>Alpha transparency percentage (0-1)</p>
        <p>0 -&gt; fully transparency and 1 -&gt; no transparency</p>
      </td>
    </tr>
  </tbody>
</table>

## Static Properties

| **Value** | **Name** |
| :--- | :--- |
| `Color(1, 1, 1)` | **`Color.WHITE`** |
| `Color(0, 0, 0)` | **`Color.BLACK`** |
| `Color(1, 0, 0)` | **`Color.RED`** |
| `Color(0, 1, 0)` | **`Color.GREEN`** |
| `Color(0, 0, 1)` | **`Color.BLUE`** |
| `Color(1, 1, 0)` | **`Color.YELLOW`** |
| `Color(0, 1, 1)` | **`Color.CYAN`** |
| `Color(1, 0, 1)` | **`Color.MAGENTA`** |
| `Color(1, 0.5, 0)` | **`Color.ORANGE`** |
| `Color(0.5, 1, 1)` | **`Color.CHARTREUSE`** |
| `Color(0, 1, 0.5)` | **`Color.AQUAMARINE`** |
| `Color(0, 0.5, 1)` | **`Color.AZURE`** |
| `Color(0.5, 0, 1)` | **`Color.VIOLET`** |
| `Color(1, 0, 0.5)` | **`Color.ROSE`** |

## Static Functions

<table>
  <thead>
    <tr>
      <th style="text-align:left"><b>Returns</b>
      </th>
      <th style="text-align:left"><b>Name</b>
      </th>
      <th style="text-align:left"><b>Description</b>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><a href="color.md">Color</a>
      </td>
      <td style="text-align:left"><b><code>Color.RandomPalette()</code></b>
      </td>
      <td style="text-align:left">Returns a random color from Color Palette</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="color.md">Color</a>
      </td>
      <td style="text-align:left"><b><code>Color.Random()</code></b>
      </td>
      <td style="text-align:left">Returns a random color from all color scope</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="color.md">Color</a>
      </td>
      <td style="text-align:left"><b><code>Color.FromRGBA(<br /> number r,<br /> number g,<br /> number b,<br /> number a<br />)</code></b>
      </td>
      <td style="text-align:left">Returns the color from 0-255 range values</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="color.md">Color</a>
      </td>
      <td style="text-align:left"><b><code>Color.FromCYMK(<br /> number c,<br /> number y,<br /> number m,<br /> number k,<br /> number a<br />)</code></b>
      </td>
      <td style="text-align:left">Returns a color from the CYMK format</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="color.md">Color</a>
      </td>
      <td style="text-align:left">
        <p><b><code>Color.FromHSL(<br /> number h,</code></b>
        </p>
        <p><b><code> number s,</code></b>
        </p>
        <p><b><code> number l<br />)</code></b>
        </p>
      </td>
      <td style="text-align:left">Returns a color from the HSL format</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="color.md">Color</a>
      </td>
      <td style="text-align:left">
        <p><b><code>Color.FromHSV(<br /> number h,<br /> number s,</code></b>
        </p>
        <p><b><code> number v<br />)</code></b>
        </p>
      </td>
      <td style="text-align:left">Returns a color from the HSV format</td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="color.md">Color</a>
      </td>
      <td style="text-align:left"><b><code>Color.FromHEX(string hex)</code></b>
      </td>
      <td style="text-align:left">Returns a color from the Hexadecimal format</td>
    </tr>
  </tbody>
</table>

