---
description: >-
  How to use nanos world Discord methods to create a nice integration for your
  server
---

# Discord Integration

Integrating your server with Discord is really easy! We provide a built-in integration which is ready to use, but you can also add your own Discord Application ID and use your own application!

## Updating the Player Discord Activity \(Rich Presence\)

We made the process very simple, we have one method for changing the Player's Activity:

{% tabs %}
{% tab title="Lua" %}
{% code title="Client/Index.lua" %}
```lua
local state = "Working as Truck Driver"
local details = "Awesome Roleplay"
local large_text = "Honk!"
local large_image = "screenshot_191"

Client.SetDiscordActivity(state, details, large_image, large_text)
```
{% endcode %}
{% endtab %}
{% endtabs %}

![How it will look like](../../.gitbook/assets/image%20%2836%29.png)

{% hint style="info" %}
You can use your own Application ID to upload your own Images!
{% endhint %}

## Using your own Application ID

Using your own Application ID brings the advantage of being able to configure it the way you want, and even uploading your own images to be displayed in the Rich Presence.

![](../../.gitbook/assets/image%20%2841%29.png)

Initializing your own Application ID is extremely easy, just execute the following code on the Client side:

{% tabs %}
{% tab title="Lua" %}
{% code title="Client/Index.lua" %}
```lua
Client.InitializeDiscord(client_id)
```
{% endcode %}
{% endtab %}
{% endtabs %}

{% hint style="success" %}
And you are done! Now you can use the `Client.SetDiscordActivity()`method!
{% endhint %}

 

