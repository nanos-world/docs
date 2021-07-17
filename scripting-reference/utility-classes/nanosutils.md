---
description: A table containing useful and aux functions
---

# NanosUtils

{% hint style="info" %}
**Tip:** This structure is Open Sourced at [https://github.com/nanos-world/nanos-world-lua-lib](https://github.com/nanos-world/nanos-world-lua-lib). Feel free to push merge requests and suggest changes!
{% endhint %}

## Usage

{% tabs %}
{% tab title="Lua" %}
```lua
local table = {
    "my_key" = 123,
    [2] = "my_value"
}

local dump_text = NanosUtils.Dump(table)

Package.Log(dump_text)

-- Outputs Text
--[[
{
    "my_key": 123,
    2 = "my_value"
}
--]]
```
{% endtab %}
{% endtabs %}

{% tabs %}
{% tab title="Lua" %}
```lua
local my_variable = Character()

NanosUtils.IsA(my_variable, Character) -- true
NanosUtils.IsA(my_variable, Vehicle) -- false
```
{% endtab %}
{% endtabs %}

## Functions

| Returns | Name | Description |
| :--- | :--- | :--- |
| [boolean](../glossary/basic-types.md#number) | **`IsA`** | Returns if an object is a type |
| [string](../glossary/basic-types.md#string) | **`Dump`** | Dumps a table into a readable text |

### `IsA`

> Returns if an object is a type
>
> Returns [boolean](../glossary/basic-types.md#boolean)

```lua
NanosUtils.IsA(object, type)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [any](../glossary/basic-types.md#any) | **`object`** | Object to verify |
| [any](../glossary/basic-types.md#any) | **`type`** | Type to verify |

### **`Dump`**

> Dumps a table into a readable text
>
> Returns [string](../glossary/basic-types.md#string)

```lua
NanosUtils.Dump(table)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [table](../glossary/basic-types.md#table) | **`table`** | Table to dump |



