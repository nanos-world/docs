---
description: Render provides on-screen methods and events related
---

# Render

{% hint style="success" %}
This is a Static Class named `Render`. You can access it’s methods directly with `.`. It is not possible to initialize or create new instances.

This is a **Client** only Class.
{% endhint %}

{% hint style="warning" %}
If you are looking for how to make UIs, we recommend taking a look at [WebUI](../classes/webui.md) for a more robust and optimal system.
{% endhint %}

{% page-ref page="../../core-concepts/scripting/user-interface.md" %}

## Usage

{% tabs %}
{% tab title="Lua" %}
{% code title="Client/Index.lua" %}
```lua
local text = "Hello" -- Text to render on the Canvas.
local location = Vector2D(123, 321) -- Screen space position to render the text.
local font_type = 0 -- Roboto
local font_size = 32 -- Size of the font
local text_color = Color(1, 0, 0, 1) -- Color to render the text.
local kerning = 0 -- Horizontal spacing adjustment to modify the spacing between each letter.
local shadow_color = Color(1, 1, 1, 1) -- Color to render the shadow of the text.
local shadow_offset = Vector2D(1, 1) -- Pixel offset relative to the screen space position to render the shadow of the text.
local is_centered_x = false -- If true, then interpret the screen space position X coordinate as the center of the rendered text.
local is_centered_y = false -- If true, then interpret the screen space position Y coordinate as the center of the rendered text.
local is_outlined = false -- If true, then the text should be rendered with an outline.
local enable_shadow = true -- If true, then shadow will be enabled
local outline_color = Color(1, 1, 1, 1) -- Color to render the outline for the text.

Render.AddText(0, text, location, font_type, font_size, text_color, kerning, is_centered_x, is_centered_y, enable_shadow, shadow_offset, shadow_color, is_outlined, outline_color)
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Functions

{% hint style="info" %}
The following functions have an `group_id` parameter, which you can group related Canvas Items with an ID to facilitate the cleanup of them, or can give them Unique IDs. These return an `item_id` value, which can be used for updating specific Canvas Items afterwards.
{% endhint %}

| **Returns** | **Name** | **Description** |
| :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | [**`AddLine`**](render.md#addline) | Draws a Line \(doesn’t support opacity\) |
| [number](../glossary/basic-types.md#number) | [**`AddBox`**](render.md#addbox) | Draws a Box |
| [number](../glossary/basic-types.md#number) | [**`AddTile`**](render.md#addtile) | Draws a Tile \(filled\) |
| [number](../glossary/basic-types.md#number) | [**`AddPolygon`**](render.md#addpolygon) | Draws a Polygon |
| [number](../glossary/basic-types.md#number) | [**`AddText`**](render.md#addtext) | Draws a Text with optionals Shadow and Outline |
| [Vector2D](../utility-classes/vector2d.md) | [**`Project`**](render.md#project) | Transforms a 3D world-space vector into 2D screen coordinates. |
| [table](../glossary/basic-types.md#table) | [**`Deproject`**](render.md#deproject) | Transforms a 2D screen coordinates into 3D world-space location |
|  | [**`ClearItems`**](render.md#clearitems) | Remove all drawing of using that specific group\_id |
|  | [**`Subscribe`**](render.md#subscribe) | Subscribes for an Event |
|  | [**`Unsubscribe`**](render.md#unsubscribe) | Unsubscribes from all subscribed Events in this Class and in this Package, optionally passing the function to unsubscribe only that callback |
|  | [**`UpdateItemText`**](render.md#updateitemtext) | Updates a specific Canvas’s position giving it’s group\_id and item\_id |
| [Vector2D](../utility-classes/vector2d.md) | [**`GetViewportSize`**](render.md#getviewportsize) | Returns the size of viewport \(how much screen space the game window occupies\) |

## Events

| **Name** | **Description** |
| :--- | :--- |
| [**`ViewportResized`**](render.md#viewportresized) | Called when the screen is resized |

## Functions Detailed

### `AddLine`

> Draws a Line \(doesn't support opacity\)
>
> Returns [number](../glossary/basic-types.md#number) `item_id`

```lua
World.AddLine(group_id, start_position, end_position, thickness, color)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`group_id`** | The group ID to associate this item |
| [Vector2D](../utility-classes/vector2d.md) | **`start_position`** | Screen position |
| [Vector2D](../utility-classes/vector2d.md) | **`end_position`** | Screen position |
| [number](../glossary/basic-types.md#number) | **`thickness`** | Line thickness |
| [Color](../utility-classes/color.md) | **`color`** | Line color |

### `AddBox`

> Draws a Box
>
> Returns [number](../glossary/basic-types.md#number) item\_id

```lua
World.AddBox(group_id, start_position, end_position, thickness, color)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`group_id`** | The group ID to associate this item |
| [Vector2D](../utility-classes/vector2d.md) | **`start_position`** | Screen position |
| [Vector2D](../utility-classes/vector2d.md) | **`end_position`** | Screen position |
| [number](../glossary/basic-types.md#number) | **`thickness`** | Box thickness |
| [Color](../utility-classes/color.md) | **`color`** | Box color |

### `AddTile`

> Draws a Tile \(filled\)
>
> Returns [number](../glossary/basic-types.md#number) item\_id

```lua
World.AddTile(group_id, position, size, color)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`group_id`** | The group ID to associate this item |
| [Vector2D](../utility-classes/vector2d.md) | **`position`** | Screen position |
| [Vector2D](../utility-classes/vector2d.md) | **`size`** | Tile size |
| [Color](../utility-classes/color.md) | **`color`** | Box color |

### `AddPolygon`

> Draws a Polygon
>
> Returns [number](../glossary/basic-types.md#number) item\_id

```lua
World.AddPolygon(group_id, screen_position, radius,  number_of_sides, color)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`group_id`** | The group ID to associate this item |
| [Vector2D](../utility-classes/vector2d.md) | **`start_position`** | Screen position |
| [Vector2D](../utility-classes/vector2d.md) | **`radius`** | Polygon radius |
| [number](../glossary/basic-types.md#number) | **`number_of_sides`** | Polygon number of sides |
| [Color](../utility-classes/color.md) | **`color`** | Box color |

### `AddText`

> Draws a Text with optionals Shadow and Outline
>
> Returns [number](../glossary/basic-types.md#number) item\_id

```lua
World.AddText(group_id, text, position, font_type, font_size, text_color, kerning, is_centered_x, is_centered_y, enable_shadow, shadow_offset, shadow_color, enable_outline,  outline_color)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`group_id`** | The group ID to associate this item |
| [string](../glossary/basic-types.md#string) | **`text`** | Text |
| [Vector2D](../utility-classes/vector2d.md) | **`position`** | Screen position |
| [FontType](../glossary/enums.md#fonttype) | **`font_type`** |  |
| [number](../glossary/basic-types.md#number) | **`font_size`** |  |
| [Color](../utility-classes/color.md) | **`text_color`** |  |
| [number](../glossary/basic-types.md#number) | **`kerning`** |  |
| [boolean](../glossary/basic-types.md#boolean) | **`is_centered_x`** |  |
| [boolean](../glossary/basic-types.md#boolean) | **`is_centered_y`** |  |
| [boolean](../glossary/basic-types.md#boolean) | **`enable_shadow`** |  |
| [Vector2D](../utility-classes/vector2d.md) | **`shadow_offset`** |  |
| [Color](../utility-classes/color.md) | **`shadow_color`** |  |
| [boolean](../glossary/basic-types.md#boolean) | **`enable_outline`** |  |
| [Color](../utility-classes/color.md) | **`shadow_outline_color`** |  |

### `Project`

> Transforms a 3D world-space vector into 2D screen coordinates
>
> Returns Vector2D

```lua
World.Project(world_position)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [Vector](../utility-classes/vector.md) | **`world_position`** | World 3D position |

### `Deproject`

> Transforms a 2D screen coordinates into 3D world-space location
>
> Returns table in the format `{"Position", "Direction"}`

```lua
World.Deproject(screen_position)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [Vector2D](../utility-classes/vector2d.md) | **`screen_position`** | Screen position |

### `ClearItems`

> Remove all drawing of using that specific group\_id

```lua
World.ClearItems(group_id)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`group_id`** | The group ID to delete all items |

### `Subscribe`

> Subscribes for an Event

```lua
World.Subscribe(event_name, callback)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`event_name`** | The Event Name to Subscribe for an event |
| [function](../glossary/basic-types.md#function) | **`callback`** | The callback function to execute |

### `Unsubscribe`

> Unsubscribes from all subscribed Events in this Class and in this Package, optionally passing the function to unsubscribe only that callback

```lua
World.Unsubscribe(event_name, callback)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`event_name`** |  | The Event Name to Unsubscribe |
| [function](../glossary/basic-types.md#function) | **`callback`** | `nil` | The callback function to unsubscribe |

### `UpdateItemText`

> Updates a specific Canvas Text giving it's group\_id and item\_id

```lua
World.UpdateItemText(group_id, item_id, new_text)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`group_id`** | The group ID to associate this item |
| [number](../glossary/basic-types.md#number) | **`item_id`** | The item of the Text |
| [string](../glossary/basic-types.md#string) | **`new_text`** | Text |

### `UpdateItemPosition`

> Updates a specific Canvas's position giving it's group\_id and item\_id

```lua
World.UpdateItemPosition(group_id, item_id, new_position)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`group_id`** | The group ID to associate this item |
| [number](../glossary/basic-types.md#number) | **`item_id`** | The item of the Text |
| [Vector2D](../utility-classes/vector2d.md) | **`new_position`** | Screen position |

### `GetViewportSize`

> Gets the size of viewport \(how much screen space the game window occupies\)
>
> Returns Vector2D

```lua
World.GetViewportSize()
```

## Events Detailed

### `ViewportResized`

> Called when the screen is resized

```lua
Render.Subscribe("ViewportResized", function(new_size)

end)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [Vector2D](../utility-classes/vector2d.md) | **`new_size`** | New new screen size |

