---
slug: sandbox-improvements
title: Sandbox Improvements
authors: gtnardy
tags: [updates]
---

Lot's of improvements on Sandbox game-mode has been made in the past month, here's the highlights!

## Reworked Spawn Menu UI & UX

We thought a lot about how to make the experience of sandbox game-mode even better. And with that we made several improvements, including the addition of categories in the sidebar, new tabs and even new stuff to spawn! Not to mention several bug fixes and the overall usability has been improved! No more movement blocked when opening the Spawn Menu!

<video controls="true" allowfullscreen="true">
    <source src="/videos/blog/sandbox-improvements/new-sandbox-ui.mp4" type="video/mp4" />
</video>


## New Props 📦

We're importing a big pack of props that will come with the base game.

We've been debating a lot what the threshold is between shipping the game with several props or shipping it with no props and just allowing the player to download whatever they want from the Vault. It's a tough decision, but for now we've decided to deliver a basic pack with some cool stuff, including new **Construction Props**, **Fruits**, **Tools** and even new **Weapons**!

![](/img/blog/sandbox-improvements/new-props.jpg)


## NPCs 🤖

It's been in there for some time, but we'd like to highlight it! On Spawn Menu now there is a new tab which allows spawning NPCs.

Those NPCs has some basic functionality defined in Lua, they walk around randomly and even run away when they are threatened! Insane!

<video controls="true" allowfullscreen="true">
    <source src="/videos/blog/sandbox-improvements/npcs.mp4" type="video/mp4" />
</video>

## New Weapons  🔫

This is not strictly related to Sandbox game-mode, but besides the new Props, we are shipping brand new and configured Weapons in the `nanos-world-weapons` default package!

This includes a P90, UMP-45, M1911 Pistol and many other!

<video controls="true" allowfullscreen="true">
    <source src="/videos/blog/sandbox-improvements/new-weapons.mp4" type="video/mp4" />
</video>


## Weapons Pattern 🎨

Besides the categories in the left-side, we are starting to add a new section to be our "options section", we started by adding a new option in the Weapons tab: **Patterns**.

![](/img/blog/sandbox-improvements/weapon-pattern.jpg)

![](/img/blog/sandbox-improvements/weapon-pattern-floor.jpg)

![](/img/blog/sandbox-improvements/weapon-pattern-infernoo.jpg)

You can change and select any pattern from the hundreds included in the game to be applied in your weapon (it is synchronized with other players as well)! It's is really easy to add your own `.jpg` as pattern in the menu!

<video controls="true" allowfullscreen="true">
    <source src="/videos/blog/sandbox-improvements/weapons-pattern.mp4" type="video/mp4" />
</video>


## Breakable Props 🍉

This is an awesome feature which I've been working in the last weeks, it's something 100% scripting side, I'm not sure yet if this should become a built-in thing.

<video controls="true" allowfullscreen="true">
    <source src="/videos/blog/sandbox-improvements/breakable-watermelon.mp4" type="video/mp4" />
</video>

But now on Sandbox we can configure Props to break when Hit or TakeDamage! It is also possible to easily configure which debris will be generated, it's randomness and much more, see an example:

```lua
SetBreakableProp("nanos-world::SM_Fruit_Watermelon_01", 700, {
	{ mesh = "nanos-world::SM_Fruit_Watermelon_01_Half_01", rotation = Rotator() },
	{ mesh = "nanos-world::SM_Fruit_Watermelon_01_Half_01", rotation = Rotator(180, 0, 0) },
	{ mesh = "nanos-world::SM_Fruit_Watermelon_01_Crust_01" },
	{ mesh = "nanos-world::SM_Fruit_Watermelon_01_Slice_01" },
	{ mesh = "nanos-world::SM_Fruit_Watermelon_01_Slice_01" },
})
```

And voila every time a Watermelon spawns through the Spawn Menu, it will be breakable!


## Explosive Props 💥

In a sub-category as Breakable Props, we can have Explosive ones! Which will not only break if they take damage or get Hit, but will also EXPLODE! Causing damage, and even start a chain reaction of explosions!

<video controls="true" allowfullscreen="true">
    <source src="/videos/blog/sandbox-improvements/chain-explosions.mp4" type="video/mp4" />
</video>

<video controls="true" allowfullscreen="true">
    <source src="/videos/blog/sandbox-improvements/gas-house-explosion.mp4" type="video/mp4" />
</video>

<video controls="true" allowfullscreen="true">
    <source src="/videos/blog/sandbox-improvements/gas-explosion-danger.mp4" type="video/mp4" />
</video>

As you can see it can be very dangerous to play with fire! 😅


## What's next! 💡

We are currently working on making everything ready for the official Alpha 1.0.0 release! We are slowly distributing Beta Keys to some testers, this way we can calmly fix some last bugs and give the finishing touches before the full launch!

We've also implemented a LOT of new content for modding & scripting that will still be announced in the next weeks! This will make a HUGE changelog list so probably I will highlight all features in separated Blog News!

That's all for this blog! Thank you so much for all your support! 🥰

<video controls="true" allowfullscreen="true">
    <source src="/videos/blog/sandbox-improvements/watch-teaser.mp4" type="video/mp4" />
</video>
