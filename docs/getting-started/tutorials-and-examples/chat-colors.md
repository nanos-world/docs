---
description: Learn how to use and print colored messages to the built-in chat
tags: [tutorial-example]
---

# Chat Colors

![](/img/docs/tutorials/chat-colors.jpg)

To stylize a text, just circumvent a piece of text with a style tag: `<TAG>my awesome text</>`.

## Example


```lua title="Server/Index.lua"
Server.BroadcastChatMessage("Hello with Normal text message!")
Server.BroadcastChatMessage("Hello with <cyan>Cyan</> text message!")
Server.BroadcastChatMessage("Hello with <green>Green</> text message!")
Server.BroadcastChatMessage("Hello with <blue>Blue</> text message!")
Server.BroadcastChatMessage("Hello with <marengo>Marengo</> text message!")
Server.BroadcastChatMessage("Hello with <yellow>Yellow</> text message!")
Server.BroadcastChatMessage("Hello with <orange>Orange</> text message!")
Server.BroadcastChatMessage("Hello with <red>Red</> text message!")
Server.BroadcastChatMessage("Hello with <grey>Grey</> text message!")
Server.BroadcastChatMessage("Hello with <bold>Bold</> text message!")
Server.BroadcastChatMessage("Hello with <italic>Italic</> text message!")
```


:::caution

It is NOT possible to combine two or more styles together \(eg.: Bold + Red\).

:::

## All supported text styles/tags

* `<cyan>`
* `<green>`
* `<blue>`
* `<purple>`
* `<marengo>`
* `<yellow>`
* `<orange>`
* `<red>`
* `<grey>`
* `<bold>`
* `<italic>`

