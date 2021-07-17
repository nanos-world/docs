---
description: Class which represents the Current Package
---

# Package

{% hint style="success" %}
This is a Static Class named `Package`. You can access it’s methods directly with `.`. It is not possible to initialize or create new instances.
{% endhint %}

## Static Functions

| **Returns** | **Name** | **Description** |
| :--- | :--- | :--- |
| [any](../glossary/basic-types.md#any) | [**`Call`**](package.md#call) | Calls an exported function from an other Package |
|  | [**`Error`**](package.md#error) | Logs and formats an error message in the console in _Red_ |
|  | [**`Export`**](package.md#export) | ‘Exports’ a function to be called from any other Package |
|  | [**`Log`**](package.md#log) | Logs and formats a message in the console |
|  | [**`Require`**](package.md#require) | Includes new .lua files |
|  | [**`RequirePackage`**](package.md#requirepackage) | Includes other Package in this Package |
|  | [**`Subscribe`**](package.md#subscribe) | Subscribes for an Event |
|  | [**`Unsubscribe`**](package.md#unsubscribe) | Unsubscribes from all subscribed Events in this Class and in this Package |
|  | [**`Warn`**](package.md#Warn) | Logs and formats a warning message in the console in _Orange_ |
|  | [**`SetPersistentData`**](package.md#setpersistentdata) | Sets a Persistent Value which will be saved to Disk |
| [table](../glossary/basic-types.md#table) | [**`GetDirectories`**](package.md#getdirectories) | Gets a list of all directories in this package |
| [table](../glossary/basic-types.md#table) | [**`GetFiles`**](package.md#getfiles) | Gets a list of all files in this package |
| [string](../glossary/basic-types.md#string) | [**`GetName`**](package.md#getname) | Gives the package name |
| [string](../glossary/basic-types.md#string) | [**`GetPath`**](package.md#getpath) | Gives the package path |
| [table](../glossary/basic-types.md#table) | [**`GetPersistentData`**](package.md#getpersistentdata) | Gets all Persistent Values from the Disk |

## Events

| **Name** | **Description** |
| :--- | :--- |
| [**`Load`**](package.md#load) | Called when this package is loaded |
| [**`Unload`**](package.md#unload) | Called when this package is unloaded |

## Functions Detailed

### `Call`

> Calls an exported function from an other Package
>
> Returns [any](../glossary/basic-types.md#any)

```lua
Package.Call(package_name, function_name, args...)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`package_name`** |  |
| [string](../glossary/basic-types.md#string) | **`function_name`** |  |
| [any](../glossary/basic-types.md#any) | **`args...`** |  |

### `Error`

> Logs and formats an error message in the console in Red \(the proper and nanos way\)

```lua
Package.Error(message, ...)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`message`** |  |
| [any](../glossary/basic-types.md#any) | **`args...`** |  |

### `Export`

> 'exports' a function to be called from any other package

```lua
Package.Export(function_name, callback)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`function_name`** |  |
| [function](../glossary/basic-types.md#function) | **`callback`** |  |

### `Log`

> Logs and formats a message in the console \(the proper and nanos way\)

```lua
Package.Log(message, ...)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`message`** |  |
| [any](../glossary/basic-types.md#any) | **`args...`** |  |

### `Require`

> Includes new .lua files

```lua
Package.Require(script_file)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`script_file`** |  |

### `RequirePackage`

> Includes other Package in this Package

```lua
Package.RequirePackage(package_name)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`package_name`** |  |

### `Subscribe`

> Subscribes for an Event

```lua
Package.Subscribe(event_name, callback)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`event_name`** |  |
| [function](../glossary/basic-types.md#function) | **`callback`** |  |

### `Unsubscribe`

> Unsubscribes from all subscribed Events in this Class and in this Package, optionally passing the function to unsubscribe only that callback

```lua
Package.Unsubscribe(event_name, callback)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`event_name`** |  |  |
| [function](../glossary/basic-types.md#function) | **`callback`** | `nil` |  |

### `Warn`

> Logs and formats a warning message in the console in Orange \(the proper and nanos way\)
>
> Returns

```lua
Package.Warn(message, ...)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`message`** |  |
| [any](../glossary/basic-types.md#any) | **`args...`** |  |

### `SetPersistentData`

> Sets a Persistent Value which will be saved to Disk

```lua
Package.SetPersistentData(key, value)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`key`** |  |
| [any](../glossary/basic-types.md#any) | **`value`** |  |

### `GetDirectories`

> Gets a list of all directories in this package, optionally with filters
>
> Returns [table](../glossary/basic-types.md#table) of [strings](../glossary/basic-types.md#string)

```lua
Package.GetDirectories(path_filter)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`path_filter`** | `""` |  |

### `GetFiles`

> Gets a list of all files in this package, optionally with filters
>
> Returns [table](../glossary/basic-types.md#table) of [strings](../glossary/basic-types.md#string)

```lua
Package.GetFiles(path_filter, extension_filter)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`path_filter`** | `""` |  |
| [string](../glossary/basic-types.md#string) | **`extension_filter`** | `""` |  |

### `GetName`

> Gives the package name
>
> Returns [string](../glossary/basic-types.md#string)

```lua
Package.GetName()
```

### `GetPath`

> Gives the package path
>
> Returns [string](../glossary/basic-types.md#string)

```lua
Package.GetPath()
```

### `GetPersistentData`

> Gets all Persistent Values from the Disk
>
> Returns [table](../glossary/basic-types.md#table) of [any](../glossary/basic-types.md#any)

```lua
Package.GetPersistentData()
```

## Events Detailed

### `Load`

> Called when this package is loaded

{% hint style="info" %}
The event `Load` is triggered differently depending on the situation:

* When the **server starts** or you run **`package reload all`** the event triggers only after ALL packages are loaded.
* In all other cases \(**`package load/reload`** or **`Package.Load/Reload`**\) the event is triggered immediately after the package is loaded/reloaded.
{% endhint %}

```lua
Package.Subscribe("Load", function()
    -- Package has been loaded
end)
```

### `Unload`

> Triggered when this page fails to load

```lua
Package.Subscribe("Unload", function()
    -- Package has been unloaded
end)
```

