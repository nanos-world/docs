---
title: Chat Colors
description: Learn how to use and print colored messages to the built-in chat
tags: [tutorial-example]
---

Learn how to use and print colored messages to the built-in chat

![](/img/docs/tutorials/chat-colors.webp)

To stylize a text, just circumvent a piece of text with a style tag: `<TAG>my awesome text</>`.

## Example


```lua title="Server/Index.lua"
Chat.BroadcastMessage("Hello with Normal text message!")
Chat.BroadcastMessage("Hello with <cyan>Cyan</> text message!")
Chat.BroadcastMessage("Hello with <green>Green</> text message!")
Chat.BroadcastMessage("Hello with <blue>Blue</> text message!")
Chat.BroadcastMessage("Hello with <marengo>Marengo</> text message!")
Chat.BroadcastMessage("Hello with <yellow>Yellow</> text message!")
Chat.BroadcastMessage("Hello with <orange>Orange</> text message!")
Chat.BroadcastMessage("Hello with <red>Red</> text message!")
Chat.BroadcastMessage("Hello with <grey>Grey</> text message!")
Chat.BroadcastMessage("Hello with <bold>Bold</> text message!")
Chat.BroadcastMessage("Hello with <italic>Italic</> text message!")
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

