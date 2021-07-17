---
description: How to store and retrieve persistent data from disk using the built-in system
---

# Persistent Data

In nanos world it is possible to store and retrieve data from disk with simple functions.

{% hint style="success" %}
It is possible to store Persistent Data in both **Client** and **Server**!
{% endhint %}

## File Format

The persistent data is automatically stored in the **TOML** format in the file `PersistentData.toml` inside your Package/ folder. This file is only created if you call `Package.SetPersistentData()`.

## Storing and Retrieving data

All **PersistentData** files are loaded automatically when the Package loads and stored in memory. You can easily access the whole file with `Package.GetPersistentData()` method.

For storing data you will need to pass a `key` value, which will store [any](../../scripting-reference/glossary/basic-types.md#any) lua value in that key.

## Examples

{% tabs %}
{% tab title="Lua" %}
```lua
local my_table = {
    my_id = 123,
    my_data_02 = "data"
}

Package.SetPersistentData("awesome_table", my_table)

-- PersistentData.toml will be:
-- awesome_table = {my_id = 123, my_data_02 = "data"}
```
{% endtab %}
{% endtabs %}

{% tabs %}
{% tab title="Lua" %}
```lua
local my_table = Package.GetPersistentData().awesome_table

Package.Log(my_table.my_id)

-- Will print:
-- 123
```
{% endtab %}
{% endtabs %}

