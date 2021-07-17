---
description: Execute of code at specified time intervals
---

# Timer

{% hint style="success" %}
This is a Static Class named `Timer`. You can access it’s methods directly with `.`. It is not possible to initialize or create new instances.
{% endhint %}

{% hint style="info" %}
The shortest interval possible is equal to the local Tick Rate - usually at 33ms. On the Server this can vary depending on the Config.toml setting.
{% endhint %}

## Static Functions

| Returns | Name | Description |
| :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | [**`SetTimeout`**](timer.md#settimeout) | Executes a function, after waiting a specified number of milliseconds |
| [number](../glossary/basic-types.md#number) | [**`SetInterval`**](timer.md#setinterval) | Same as SetTimeout\(\), but repeats the execution of the function continuously |
|  | [**`ClearTimeout`**](timer.md#cleartimeout) | Stops the execution of the function specified in SetTimeout\(\) |
|  | [**`ClearInterval`**](timer.md#clearinterval) | Stops the execution of the function specified in SetInterval\(\) |

### `SetTimeout`

> Executes a function, after waiting a specified number of milliseconds
>
> Returns the timeout\_id

{% tabs %}
{% tab title="Lua" %}
```lua
Timer.SetTimeout(function(param1, param2)
    Package.Log("Timeout after 3 seconds! Param1: " .. param1 .. ". Param2: " .. param2)
end, 3000, "hello", 123)
```
{% endtab %}
{% endtabs %}

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [function](https://github.com/nanos-world/docs-gitbook/tree/2dbd9fb785225f3342957ce3caa5ea5b476314dc/glossary/basic-types.md#function) | **`callback`** |  | The callback that will be executed |
| [number](https://github.com/nanos-world/docs-gitbook/tree/2dbd9fb785225f3342957ce3caa5ea5b476314dc/glossary/basic-types.md#number) | **`milliseconds`** | **`0`** | The number of milliseconds to wait before executing the code |
| [any](https://github.com/nanos-world/docs-gitbook/tree/2dbd9fb785225f3342957ce3caa5ea5b476314dc/glossary/basic-types.md#any) | **`parameters...`** |  | Additional parameters to pass to the function |

### `SetInterval`

> Same as SetTimeout\(\), but repeats the execution of the function continuously
>
> Returns the interval\_id

{% tabs %}
{% tab title="Lua" %}
```lua
Timer.SetInterval(function(param1, param2)
    Package.Log("Triggered each 2 seconds! Param1: " .. param1 .. ". Param2: " .. param2)
end, 2000, "world", 456)
```
{% endtab %}
{% endtabs %}

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [function](https://github.com/nanos-world/docs-gitbook/tree/2dbd9fb785225f3342957ce3caa5ea5b476314dc/glossary/basic-types.md#function) | **`callback`** |  | The callback that will be executed |
| [number](https://github.com/nanos-world/docs-gitbook/tree/2dbd9fb785225f3342957ce3caa5ea5b476314dc/glossary/basic-types.md#number) | **`milliseconds`** | **`0`** | The intervals \(in milliseconds\) on how often to execute the code |
| [any](https://github.com/nanos-world/docs-gitbook/tree/2dbd9fb785225f3342957ce3caa5ea5b476314dc/glossary/basic-types.md#any) | **`parameters...`** |  | Additional parameters to pass to the function |

### `ClearTimeout`

> Stops the execution of the function specified in SetTimeout\(\) The ID value returned by SetTimeout\(\) is used as the parameter for the ClearTimeout\(\) method

{% tabs %}
{% tab title="Lua" %}
```lua
-- Creates the Timeout
local my_timeout = Timer.SetTimeout(function() end, 3000)

-- Stops the Timeout
Timer.ClearTimeout(my_timeout)
```
{% endtab %}
{% endtabs %}

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [number](https://github.com/nanos-world/docs-gitbook/tree/2dbd9fb785225f3342957ce3caa5ea5b476314dc/glossary/basic-types.md#number) | **`timeout_id`** |  | The ID value of the timer returned by the SetTimeout\(\) method |

### `ClearInterval`

> Stops the execution of the function specified in SetInterval\(\) The ID value returned by SetInterval\(\) is used as the parameter for the ClearInterval\(\) method

{% tabs %}
{% tab title="Lua" %}
```lua
-- Creates the Interval
local my_interval = Timer.SetInterval(function() end, 3000)

-- Stops the Interval
Timer.ClearInterval(my_interval)
```
{% endtab %}
{% endtabs %}

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [number](https://github.com/nanos-world/docs-gitbook/tree/2dbd9fb785225f3342957ce3caa5ea5b476314dc/glossary/basic-types.md#number) | **`interval_id`** |  | The ID value of the timer returned by the SetInterval\(\) method |

## Examples

{% tabs %}
{% tab title="Lua" %}
```lua
-- creates a Interval to call a function at every 1 second
local my_interval = Timer.SetInterval(1000, function()
    Package.Log("Tick 1 second!")
end)

-- cancels the Interval
Timer.ClearInterval(my_id)

-- creates a Timeout to call my_function in 5 seconds, once - passing a parameter
Timer.SetTimeout(function(my_param)
    Package.Log("nanos " .. my_param)
end, 5000, "world")
```
{% endtab %}
{% endtabs %}

