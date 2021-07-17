---
description: >-
  This sample code shows how to set Actors to be highlighted when behind walls,
  or always highlighted!
---

# X-Ray & Highlight

![](../../.gitbook/assets/image%20%2831%29.png)

{% hint style="info" %}
As highlighting is something calculed in Post Processing, it is really hard to define custom colors for individual entities.

Fortunately nanos world supports having **3** different colors which you can configure with `Client.SetHighlightColor(highlight_color, index)`, and then enabled it in the Actor with `my_entity:SetHighlightEnabled(true, index)`.

Valid indexes are `0`, `1` and `2`.
{% endhint %}

{% tabs %}
{% tab title="Lua" %}
{% code title="Client/Index.lua" %}
```lua
-- Sets the Global desired Highlight color
-- Note: Alpha from 0-1 will only appear if visible
--       Alpha from 1-2 will appear even if behind a wall or other objects
-- Higher color values make it glow
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

