---
description: How to display information in the Screen for the Player
---

# User Interface

In nanos world there are 2 official ways of plotting screen data: **WebUI** and Render **Canvas**.

{% hint style="warning" %}
Although we highly recommend using **WebUI**, using Render Canvas is still supported but deprecated.
{% endhint %}

## WebUI

With WebUI you can load HTML pages which integrate with your Packages in Lua using Events.

### Basic WebUI Setup

This sample code shows how to add a basic page using HTML+JavaScript with the WebUI class.

{% hint style="info" %}
**Note:** All WebUI code runs on Client side!
{% endhint %}

{% tabs %}
{% tab title="Package \(Lua\)" %}
{% code title="Client/Index.lua" %}
```lua
-- Spawns a WebUI with the HTML file you just created
MyUI = WebUI("My UI", "file:///UI/index.html")

-- When the HTML is ready, triggers an Event in there
MyUI:Subscribe("Ready", function()
    MyUI:CallEvent("MyAwesomeEvent", {"Hello! You are ready!"})
end)

MyUI:Subscribe("MyAwesomeAnswer", function(param1)
    Package.Log("Received an answer! Message: " .. param1)
end)
```
{% endcode %}
{% endtab %}

{% tab title="WebUI \(HTML\)" %}
{% code title="Client/UI/index.html" %}
```markup
<html>
    <head>
        <script src="index.js"></script>
    </head>
    <body>
        Hello World!
    </body>
</html>
```
{% endcode %}
{% endtab %}

{% tab title="WebUI \(JS\)" %}
{% code title="Client/UI/index.js" %}
```javascript
// Register for "MyAwesomeEvent" from Lua
Events.Subscribe("MyAwesomeEvent", function(param1) {
    console.log("Triggered! " + param1);

    // Triggers "MyAwesomeAnswer" on Lua
    Events.Call("MyAwesomeAnswer", "Hey there!");
})
```
{% endcode %}
{% endtab %}
{% endtabs %}

![WebUI results](../../.gitbook/assets/image%20%2821%29.png)

This will output:

```text
[WebUI]  Triggered! Hello! You are ready!
[Script] Received an answer! Message: Hey there!
```

{% page-ref page="../../getting-started/tutorials-and-examples/basic-hud-html.md" %}

## Canvas

{% page-ref page="../../getting-started/tutorials-and-examples/basic-hud-canvas.md" %}

