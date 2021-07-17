---
description: >-
  Class for spawning a web browser in the screen. The browser will fill up the
  whole screen and is automatically resized.
---

# WebUI

![](../../.gitbook/assets/image%20%2848%29.png)

{% hint style="success" %}
This HTML implementation is built upon same core as WebKit/Safari. And currently does not support HTML5 videos and audios.
{% endhint %}

{% hint style="info" %}
This is a **Client** only Class.
{% endhint %}

{% page-ref page="../../core-concepts/scripting/user-interface.md" %}

## Usage

{% tabs %}
{% tab title="Lua" %}
```lua
-- Using a local file
my_ui = WebUI(
    "Awesome UI",            -- Name
    "file:///UI/index.html", -- Path relative to this package (Client/)
    true,                    -- Is Visible
)

-- Using a Web URL
my_browser = WebUI(
    "Awesome Site",       -- Name
    "http://nanos.world", -- Web's URL
    true,                 -- Is Visible
)

-- Using a local file from another package folder
my_ui = WebUI(
    "Awesome UI from Another Package", -- Name
    "file:///UI/index.html",           -- Path relative to this package (Client/)
    true,                              -- Is Visible
    "my_ui_library_package"            -- Package where this HTML is located
)
```
{% endtab %}
{% endtabs %}

## Constructor Parameters

| **Type** | **Name** | **Default** | Description |
| :--- | :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`name`** |  |  |
| [string](../glossary/basic-types.md#string) | **`path`** |  | URL or `file:///relative/to/client/folder.html` |
| [boolean](../glossary/basic-types.md#boolean) | **`is_visible`** | `true` |  |
| [string](../glossary/basic-types.md#string) | **`package_name`** | defaults to this package |  |

## Functions

| **Returns** | **Name** | **Description** |
| :--- | :--- | :--- |
|  | [**`BringToFront`**](webui.md#bringtofront) | Puts this WebUI in the front of all WebUIs |
|  | [**`CallEvent`**](webui.md#callevent) | Calls an Event on the Browser’s JavaScript |
|  | [**`Destroy`**](webui.md#destroy) | Destroys this Browser |
|  | [**`LoadURL`**](webui.md#loadurl) | Loads a new File/URL in this Browser |
|  | [**`SetFocus`**](webui.md#setfocus) | Enables the focus on this browser |
|  | [**`SetVisible`**](webui.md#setvisible) | Toggles the visibility |
| [boolean](../glossary/basic-types.md#boolean) | [**`IsValid`**](webui.md#isvalid) | Returns if this entity is Valid |
| [number](../glossary/basic-types.md#number) | [**`GetID`**](webui.md#getid) | Gets the network ID of this entity |
| [string](../glossary/basic-types.md#string) | [**`GetType`**](webui.md#gettype) | Returns the type of this Entity |
| [boolean](../glossary/basic-types.md#boolean) | [**`IsVisible`**](webui.md#isvisible) | Returns if this WebUI is currently visible |
|  | [**`Subscribe`**](webui.md#subscribe) | Subscribes for an Event |
|  | [**`Unsubscribe`**](webui.md#unsubscribe) | Unsubscribes from all subscribed Events in this Entity and in this Package |

### `BringToFront`

> Puts this WebUI in the front of all WebUIs

```lua
my_webui:BringToFront()
```

### `CallEvent`

> Calls an Event on the Browser's JavaScript

```lua
my_webui:CallEvent(event_name, arguments...)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`event_name`** |  |
| [any](../glossary/basic-types.md#any) | **`arguments...`** |  |

### `Destroy`

> Destroys this Browser

```lua
my_webui:Destroy()
```

### `LoadURL`

> Loads a new File/URL in this Browser
>
> Returns

```lua
my_webui:LoadURL(url)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`url`** |  |

### `SetFocus`

> Enables the focus on this browser \(i.e. can receives keyboard and mouse input\). Note: only one browser can have focus per time. When you click at the screen/WebUI the focus is got automatically as well

```lua
my_webui:SetFocus()
```

### `SetVisible`

> Toggles the visibility

```lua
my_webui:SetVisible(is_visible)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [boolean](../glossary/basic-types.md#boolean) | **`is_visible`** |  |

### `IsValid`

> Gets if this entity is Valid
>
> Returns [boolean](../glossary/basic-types.md#boolean)

```lua
my_webui:IsValid()
```

### `GetID`

> Gets the network ID of this entity
>
> Returns [number](../glossary/basic-types.md#number)

```lua
my_webui:GetID()
```

### `GetType`

> Returns the type of this Entity
>
> Returns [string](../glossary/basic-types.md#string)

```lua
my_webui:GetType()
```

### `IsVisible`

> Returns if this WebUI is currently visible
>
> Returns [boolean](../glossary/basic-types.md#boolean)

```lua
my_webui:IsVisible()
```

### `Subscribe`

> Subscribes for an Event

```lua
my_webui:Subscribe(event_name, callback)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`event_name`** |  |  |
| [function](../glossary/basic-types.md#function) | **`function`** |  |  |

### `Unsubscribe`

> Unsubscribes from all subscribed Events in this Entity and in this Package, optionally passing the function to unsubscribe only that callback

```lua
my_webui:Unsubscribe(event_name, callback)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`event_name`** |  |  |
| [function](../glossary/basic-types.md#function) | **`function`** | `nil` |  |

## Events

| **Name** | **Description** |
| :--- | :--- |
| [**`Failed`**](webui.md#failed) | When this page fails to load |
| [**`Ready`**](webui.md#ready) | When this page is fully loaded \(DOM and JavaScript\) |

### `Failed`

> Triggered when this page fails to load

```lua
my_webui:Subscribe("Failed", function(error_code, message)
    -- Load failed
end)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`error_code`** |  |
| [string](../glossary/basic-types.md#string) | **`message`** |  |

### `Ready`

> Triggered when this page fails to load

```lua
my_webui:Subscribe("Ready", function()
    -- When this page is fully loaded \(DOM and JavaScript\)
end)
```

