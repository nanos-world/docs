---
description: A File represents an entry to a system file.
---

# File

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

| **Type** | **Name** | **Default** | Description |
| :--- | :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`file_path`** |  | Path relative to server executable |
| [boolean](../glossary/basic-types.md#boolean) | **`truncate`** | `false` | Whether or not to clear the file upon opening it |

## Static Functions

| **Returns** | **Name** | **Description** |
| :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | \*\*\*\*[**`Time`**](file.md#time)\*\*\*\* | Returns when a file was last modified in Unix time |
| [boolean](../glossary/basic-types.md#boolean) | [**`CreateDirectory`**](file.md#createdirectory) | Creates a directory \(for every folder passed\) |
| [number](../glossary/basic-types.md#number) | \*\*\*\*[**`Remove`**](file.md#remove)\*\*\*\* | Deletes a folder or file |
| [boolean](../glossary/basic-types.md#boolean) | \*\*\*\*[**`Exists`**](file.md#exists)\*\*\*\* | Verifies if a entry exists in the file system |
| [boolean](../glossary/basic-types.md#boolean) | \*\*\*\*[**`IsDirectory`**](file.md#isdirectory)\*\*\*\* | Checks if a path is a directory |
| [boolean](../glossary/basic-types.md#boolean) | \*\*\*\*[**`IsRegularFile`**](file.md#isregularfile)\*\*\*\* | Checks if a path is a file |

### `Time`

> Returns when the file was last modified in Unix time
>
> Returns [number](../glossary/basic-types.md#number)

```lua
File.Time(path)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`path`** | Path to file |

### `CreateDirectory`

> Creates a directory \(for every folder passed\)
>
> Returns [boolean](../glossary/basic-types.md#boolean) if succeeded

```lua
File.CreateDirectory(path)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`path`** | Path to folder |

### `Remove`

> Deletes a folder or a file
>
> Returns [number](../glossary/basic-types.md#number) \(number of files or directories deleted\)

```lua
File.Remove(path)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`path`** | Path to file or folder |

### `Exists`

> Gets if a file or folder exists
>
> Returns [boolean](../glossary/basic-types.md#boolean)

```lua
File.Exists(path)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`path`** | Path to file or folder |

### `IsDirectory`

> Gets if a path is a directory
>
> Returns [boolean](../glossary/basic-types.md#boolean)

```lua
File.IsDirectory(path)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`path`** | Path to folder |

### `IsRegularFile`

> Gets if a path is a file
>
> Returns [boolean](../glossary/basic-types.md#boolean)

```lua
File.IsRegularFile(path)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`path`** | Path to file |

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

### `Write`

> Writes the Data at the current position of the file

```lua
my_file:Write(data)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`data`** | Writes the data to the file |

