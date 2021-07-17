---
description: >-
  JSON library, useful for sending data from Client’s Package to WebUI
  environment
---

# JSON

{% hint style="success" %}
nanos world implements a lightweight JSON library from [https://github.com/rxi/json.lua](https://github.com/rxi/json.lua).
{% endhint %}

{% hint style="info" %}
**Tip:** This structure is Open Sourced at [https://github.com/nanos-world/nanos-world-lua-lib](https://github.com/nanos-world/nanos-world-lua-lib). Feel free to push merge requests and suggest changes!
{% endhint %}

## Usage

```lua
local encoded_value = JSON.stringify({ 1, 2, 3, { x = 10 } }) -- Returns '[1,2,3,{"x":10}]'

local decoded_value = JSON.parse('[1,2,3,{"x":10}]') -- Returns { 1, 2, 3, { x = 10 } }
```

{% hint style="warning" %}
Note that custom classes \(e.g. **Vehicle**, **Vector**, **Character**… etc\) aren’t stringified with this functions and stringifying them will cause unknown behavior.
{% endhint %}

### Functions

| **Returns** | **Name** | **Description** |
| :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`stringify`**\([any ](../glossary/basic-types.md#any)value\) | Returns a string representing value encoded in JSON |
| [any](../glossary/basic-types.md#any) | **`parse`**\([string](../glossary/basic-types.md#string) str\) | Returns a value representing the decoded JSON string |

