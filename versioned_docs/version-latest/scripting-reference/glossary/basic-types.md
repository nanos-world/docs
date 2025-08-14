---
title: Basic Types
description: Basic Types used in the API.
tags: [scripting]
---


## Lua Types

:::info

For more information and tutorials, please refer to [Official Lua Documentation](https://www.lua.org/pil/2.html).

:::

### `number`

The number type represents real (double-precision floating-point) numbers. Lua has no integer type, as it does not need it. There is a widespread misconception about floating-point arithmetic errors and some people fear that even a simple increment can go weird with floating-point numbers. The fact is that, when you use a double to represent an integer, there is no rounding error at all (unless the number is greater than 100,000,000,000,000). Specifically, a Lua number can represent any long integer without rounding problems. Moreover, most modern CPUs do floating-point arithmetic as fast as (or even faster than) integer arithmetic.


### `string`

Strings have the usual meaning: a sequence of characters. Lua is eight-bit clean and so strings may contain characters with any numeric value, including embedded zeros. That means that you can store any binary data into a string. Strings in Lua are immutable values. You cannot change a character inside a string, as you may in C; instead, you create a new string with the desired modifications, as in the next example:


### `function`

Functions are first-class values in Lua. That means that functions can be stored in variables, passed as arguments to other functions, and returned as results. Such facilities give great flexibility to the language: A program may redefine a function to add new functionality, or simply erase a function to create a secure environment when running a piece of untrusted code (such as code received through a network). Moreover, Lua offers good support for functional programming, including nested functions with proper lexical scoping; just wait. Finally, first-class functions play a key role in Lua’s object-oriented facilities.


### `boolean`

The boolean type has two values, false and true, which represent the traditional boolean values. However, they do not hold a monopoly of condition values: In Lua, any value may represent a condition. Conditionals (such as the ones in control structures) consider false and nil as false and anything else as true. Beware that, unlike some other scripting languages, Lua considers both zero and the empty string as true in conditional tests.


### `nil`

Nil is a type with a single value, nil, whose main property is to be different from any other value. As we have seen, a global variable has a nil value by default, before a first assignment, and you can assign nil to a global variable to delete it. Lua uses nil as a kind of non-value, to represent the absence of a useful value.


### `table`

The table type implements associative arrays. An associative array is an array that can be indexed not only with numbers, but also with strings or any other value of the language, except nil. Moreover, tables have no fixed size; you can add as many elements as you want to a table dynamically. Tables are the main (in fact, the only) data structuring mechanism in Lua, and a powerful one. We use tables to represent ordinary arrays, symbol tables, sets, records, queues, and other data structures, in a simple, uniform, and efficient way. Lua uses tables to represent packages as well. When we write io.read, we mean “the read entry from the io package”. For Lua, that means “index the table io using the string “read” as the key”.


### `iterator`

Iterator allows you to traverse elements of a table with `for k, v in ipairs()`.


### `any`

We use any here in the Docs to represent that any Type can be used.


### `varargs`

Variadic list of values.


## Numeric Types

Besides the Lua Types, some methods on the API have specific numeric types, those are converted and treated differently internally.

### `integer`

Whole numbers without any fractional parts.


### `float`

Floating-point type with decimal points.


## Special Types

### `SpecialPath`

nanos world supports a special type of Path when loading **Textures (.jpg, .png)**, **Sounds (.ogg)** or referencing files from **WebUI**. It allows any Package or WebUI to access files from other Packages or Asset Packs easily.

**SpecialPath** is a string input which supports the following formats for accessing Assets or Packages files:

#### Referencing Asset Packs files

`assets://[ASSET_PACK_PATH]/[PATH/TO/FILE.jpg]`

#### Referencing Packages files

`package://[PACKAGE_PATH]/[PATH/TO/FILE.jpg]`

#### Example accessing _images_ from `quaternius` Asset Pack:

`assets://quaternius/Thumbnails/SK_Revolver_01.jpg`

#### Example accessing a _.ogg sound_ from `sandbox` Package:

`package://sandbox/Client/my_awesome_audio.ogg`

#### Example accessing a _.ttf font files_ from `my-fonts` Package:

`package://my-fonts/Client/Roboto.ttf`

:::tip

SpecialPath input also supports relative and traditional paths!

:::


### `Steam Avatar`

Steam Avatar is a special URL which can load Steam Avatars as images on WebUIs and Widgets.

`steam-avatar://player_steam_id`

This URL can be automatically retrieved with <MethodReference type="Class" class_name="Player" method="GetAccountIconURL" show_class_name />.

![](/img/blog/2023-january/scoreboard.webp)