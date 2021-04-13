.. _ChatColors:


***********
Chat Colors
***********

This tutorial teaches how to print colored messages to the chat.

.. image:: https://i.imgur.com/J97aZZy.png

To stylize a text, just circunvent a piece of text with a style tag: ``<TAG>my awesome text</>``.


Example
-------

.. note:: The following code runs on Server.

.. tabs::
 .. code-tab:: lua Lua

	Server:BroadcastChatMessage("Hello with Normal text message!")
	Server:BroadcastChatMessage("Hello with <cyan>Cyan</> text message!")
	Server:BroadcastChatMessage("Hello with <green>Green</> text message!")
	Server:BroadcastChatMessage("Hello with <blue>Blue</> text message!")
	Server:BroadcastChatMessage("Hello with <marengo>Marengo</> text message!")
	Server:BroadcastChatMessage("Hello with <yellow>Yellow</> text message!")
	Server:BroadcastChatMessage("Hello with <orange>Orange</> text message!")
	Server:BroadcastChatMessage("Hello with <red>Red</> text message!")
	Server:BroadcastChatMessage("Hello with <grey>Grey</> text message!")
	Server:BroadcastChatMessage("Hello with <bold>Bold</> text message!")
	Server:BroadcastChatMessage("Hello with <italic>Italic</> text message!")

.. note:: It is NOT possible to combine two or more styles together (eg.: Bold + Red).


All supported text styles/tags
------------------------------

* <Cyan>
* <Green>
* <Blue>
* <Purple>
* <Marengo>
* <Yellow>
* <Orange>
* <Red>
* <Grey>
* <Bold>
* <Italic>