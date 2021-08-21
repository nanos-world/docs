---
description: >-
  This sample code shows how to set Actors to be highlighted when behind walls,
  or always highlighted!
---

# X-Ray & Highlight

![](../../.gitbook/assets/image%20%2831%29.png)

{% hint style="success" %}
As highlighting is something calculated in Post Processing, it is really hard to define custom colors for individual entities.

Fortunately nanos world supports having **3** different colors which you can configure yourself!
{% endhint %}

#### To configure the global Highlight color for a specific index, use:

`Client.SetHighlightColor(highlight_color, index)`

#### To enable the Highlight to a specific actor, use:

`my_entity:SetHighlightEnabled(true, index)`

{% hint style="info" %}
Valid indexes are **`0`**, **`1`** and **`2`**.
{% endhint %}

{% tabs %}
{% tab title="Lua" %}
{% code title="Client/Index.lua" %}
```lua
-- Sets the Global desired Highlight color
-- Note: Alpha from 0-1 will only appear if visible
--       Alpha from 1-2 will appear even if behind a wall or other objects
-- Higher color values make it glow (e.g. Color(100, 0, 0))
local highlight_color = Color(10, 2.5, 0, 1)
Client.SetHighlightColor(highlight_color, 0)

-- Setting all Characters to highlight
Character.Subscribe("Spawn", function(character)
    character:SetHighlightEnabled(true, 0)
end)
```
{% endcode %}
{% endtab %}
{% endtabs %}

