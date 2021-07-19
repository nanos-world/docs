---
description: All you need to know about Classes
---

# Classes Guide

All entities in nanos world are represented by a Class. In Lua, classes are represented by [tables](../../scripting-reference/glossary/basic-types.md#table). That means that every interaction with entities \(Players, Characters, [Props](../../scripting-reference/classes/prop.md), etc\) are made with Classes/tables methods following an [OOP \(Object-oriented programming](https://en.wikipedia.org/wiki/Object-oriented_programming) pattern\). In this page we will explain more about that.

{% hint style="success" %}
In nanos world we have 3 types of Classes \(or Structures\): [Classes](../../scripting-reference/classes/), [Static Classes](../../scripting-reference/static-classes/) and [Utility Classes](../../scripting-reference/utility-classes/).
{% endhint %}

## Classes

If you read our [Quick Start](../../getting-started/quick-start.md) guide, you noticed we were spawning entities in the following format:

```lua
-- Spawning an entity with a Constructor
local my_entity = Entity()

-- Interacting with the entity with it's methods
my_entity:MyFunction()
```

{% hint style="success" %}
Access to **Entities / Spawned Objects** **Methods** are made with **`:`**.
{% endhint %}

This is how **OOP** works! You create objects and call functions/catch events on that object. Unlike other scripting games which have tons of global functions and events to interact with entities, nanos world scripting is a **modern approach** to **modern programming**.

{% page-ref page="../../scripting-reference/classes/" %}

### Classes Inheritance

Under the hood, nanos world Classes follow an [Inheritance Pattern](https://en.wikipedia.org/wiki/Inheritance_%28object-oriented_programming%29), which means we have base parent classes, and it’s childs which inherits all functions, events and properties from them. You will notice that all Classes that can be spawned in the world are [Actors](../../scripting-reference/classes/base-classes/actor.md), for example in Character and [Prop](../../scripting-reference/classes/prop.md) \(which are Actors\) it is possible to call the function: `:SetLocation(Vector)`.

{% hint style="info" %}
The [Base Class Actor](../../scripting-reference/classes/base-classes/actor.md) is a very important class in nanos world. It contains the most of methods which are shared through all Classes we have, and also **Static Methods** to get and retrieve entities directly.
{% endhint %}

{% page-ref page="../../scripting-reference/classes/base-classes/" %}

### Spawning Entities

Spawning entities in nanos world is extremely easy and straightforward, let's say we want to spawn a Character:

{% tabs %}
{% tab title="Lua" %}
{% code title="Server/Index.lua" %}
```lua
local my_character = Character()
```
{% endcode %}
{% endtab %}
{% endtabs %}

{% hint style="success" %}
Each Class will contain it's own **Constructor**, **Properties**, **Methods** and **Events**.

Check all Classes that nanos world provides in [Classes](../../scripting-reference/classes/).
{% endhint %}

{% hint style="info" %}
Keep in mind that some Classes can only be spawned in the **Server**, others can only be spawned in the **Client**.
{% endhint %}

### Destroying Entities

All classes \(but Player\) allow you to destroy them with the method `Destroy()`:

{% tabs %}
{% tab title="Lua" %}
{% code title="Server/Index.lua" %}
```lua
my_character:Destroy()
```
{% endcode %}
{% endtab %}
{% endtabs %}

{% hint style="info" %}
Destroying an Entity will trigger the event `Destroy` and also will automatically detach all attached entities it had attached.
{% endhint %}

## Static Classes

Static Classes in nanos world are Classes which you cannot Spawn. Instead you can use it's methods directly with `.`.

For example, if you want to interact with World \(move the sun, set it raining, etc\), you will need the `World` Static Class:

{% tabs %}
{% tab title="Lua" %}
{% code title="Client/Index.lua" %}
```lua
-- Makes it 9:25 AM
World.SetTime(9, 25)
```
{% endcode %}
{% endtab %}
{% endtabs %}

{% hint style="success" %}
Access to **Static Classes / Static Methods** are made with **`.`**.
{% endhint %}

{% page-ref page="../../scripting-reference/static-classes/" %}

## Utility Classes

Besides Classes and Static Classes, we have the **Utility Classes**! Those are mostly structs used in nanos world API such as Vector, Rotator, Color, JSON and some others.

{% hint style="success" %}
All Utility Classes are Open Sourced at [https://github.com/nanos-world/nanos-world-lua-lib](https://github.com/nanos-world/nanos-world-lua-lib). Feel free to push merge requests and suggest changes!
{% endhint %}

{% page-ref page="../../scripting-reference/utility-classes/" %}



