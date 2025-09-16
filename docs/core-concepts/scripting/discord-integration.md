---
title: Discord Integration
description: >-
  How to use nanos world Discord methods to create a nice integration for your
  server
tags: [scripting]
---


How to use nanos world Discord methods to create a nice integration for your server.

![](/img/docs/discord.webp)

Integrating your server with Discord is really easy! We provide a built-in integration which is ready to use, but you can also add your own Discord Application ID and use your own application!

## Updating the Player Discord Activity \(Rich Presence\)

We made the process very simple, we have one method for changing the Player's Activity:

```lua title="Client/Index.lua" showLineNumbers
local state = "Working as Truck Driver"
local details = "Awesome Roleplay"
local large_text = "Honk!"
local large_image = "nanos-world-full-world"

Discord.SetActivity(state, details, largeImage, largeText)
```

![How it will look like](/img/docs/discord-integration-01.webp)

:::info

You can use your own Application ID to upload your own Images!

:::

## Using your own Application ID

Using your own [Application ID](https://discord.com/developers/applications/) brings the advantage of being able to configure it the way you want, and even uploading your own images to be displayed in the Rich Presence.

![How it will look like](/img/docs/discord-integration-02.webp)

Initializing your own Application ID is extremely easy, just execute the following code on the Client side:

```lua title="Client/Index.lua"
Discord.Initialize(clientId)
```

:::tip

And you are done! Now you can use the `Discord.Initialize(clientId)`method!

:::
