---
description: A File represents an entry to a system file.
---

# File

{% hint style="info" %}
Currently it is not possible to Delete or Rename files, that will be added for a future update.
{% endhint %}

{% hint style="info" %}
This is a **Server** side class. It is not possible to open files from outside the server folder. All path must be relative to the Server’s executable folder. All files are opened as binary file by default.
{% endhint %}

## Example

{% tabs %}
{% tab title="Lua" %}
```lua
local configuration_file = File("my_awesome_configuration.json")

local configuration_file_json = JSON.parse(configuration_file:Read(configuration_file:Size()))
```
{% endtab %}
{% endtabs %}

## Constructor Parameters

| **Type** | **Name** | **Default** |
| :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`file_path`** |  |
| [boolean](../glossary/basic-types.md#boolean) | **`truncate`** | `false` |

## Functions

| **Returns** | **Name** | **Description** |
| :--- | :--- | :--- |
|  | [**`Close`**](file.md#functions) | Closes the file |
|  | [**`Flush`**](file.md#flush) | Flushes content to the file |
| [boolean](../glossary/basic-types.md#boolean) | [**`IsEOF`**](file.md#iseof) | Checks if the file status is End of File |
| [boolean](../glossary/basic-types.md#boolean) | [**`IsBad`**](file.md#isbad) | Checks if the file status is Bad |
| [boolean](../glossary/basic-types.md#boolean) | [**`IsGood`**](file.md#isgood) | Checks if the file status is Good |
| [boolean](../glossary/basic-types.md#boolean) | [**`HasFailed`**](file.md#hasfailed) | Checks if the last operation has Failed |
| [string](../glossary/basic-types.md#string) | [**`Read`**](file.md#read) | Reads n \(Length\) characters from the File and returns it. Also moves the file pointer to the latest read position. Pass 0 to read the whole file |
| [string](../glossary/basic-types.md#string) | [**`ReadLine`**](file.md#readline) | Reads and returns the next file line |
|  | [**`Seek`**](file.md#seek) | Sets the file pointer to a specific position |
| [number](../glossary/basic-types.md#number) | [**`Size`**](file.md#size) | Returns the size of the file |
|  | [**`Skip`**](file.md#skip) | Skips n \(amount\) positions from the current file pointer position |
| [number](../glossary/basic-types.md#number) | [**`Tell`**](file.md#tell) | Returns the current file pointer position |
| [number](../glossary/basic-types.md#number) | [**`Time`**](file.md#time) | Returns when the file was last modified in Unix time |
|  | [**`Write`**](file.md#write) | Writes the Data at the current position of the file |

### `Close`

> Closes the file

```lua
my_file:Close()
```

### `Flush`

> Flushes content to the file

```lua
my_file:Flush()
```

### `IsEOF`

> Checks if the file status is End of File
>
> Returns [boolean](../glossary/basic-types.md#boolean)

```lua
my_file:IsEOF()
```

### `IsBad`

> Checks if the file status is Bad
>
> Returns [boolean](../glossary/basic-types.md#boolean)

```lua
my_file:IsBad()
```

### `IsGood`

> Checks if the file status is Good
>
> Returns [boolean](../glossary/basic-types.md#boolean)

```lua
my_file:IsGood()
```

### `HasFailed`

> Checks if the last operation has Failed
>
> Returns [boolean](../glossary/basic-types.md#boolean)

```lua
my_file:HasFailed()
```

### `Read`

> Reads n \(Length\) characters from the File and returns it. Also moves the file pointer to the latest read position. Pass 0 to read the whole file
>
> Returns [string](../glossary/basic-types.md#string)

```lua
my_file:Read(length)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`length`** | `0` | Length to be read from file |

### `ReadLine`

> Reads and returns the next file line
>
> Returns [string](../glossary/basic-types.md#string)

```lua
my_file:ReadLine()
```

### `Seek`

> Sets the file pointer to a specific position

```lua
my_file:Seek(position)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`position`** | Position to  offset the file pointer |

### `Size`

> Returns the size of the file
>
> Returns [number](../glossary/basic-types.md#number)

```lua
my_file:Size()
```

### `Skip`

> Skips n \(amount\) positions from the current file pointer position

```lua
my_file:Skip(amount)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`amount`** | Amount to offset the file pointer |

### `Tell`

> Returns the current file pointer position
>
> Returns [number](../glossary/basic-types.md#number)

```lua
my_file:Tell()
```

### `Time`

> Returns when the file was last modified in Unix time
>
> Returns [number](../glossary/basic-types.md#number)

```lua
my_file:Time()
```

### `Write`

> Writes the Data at the current position of the file

```lua
my_file:Write(data)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`data`** | Writes the data to the file |

