---
description: How to migrate your Scripts to the newer API version
sidebar_position: 4
---

# 🧳 Migrating to Alpha

There have been no significant changes from version 0.73.0 to Alpha, however this guide remains for those coming from older versions.

![THE DAY THE API STOOD STEADY update](/img/blog/updates/devastation.jpg)

## Migration Notes

:::tip
We've created several **REGEX** to help you converting your Packages. Please refer to [Converting your Code with Regex](migrating-to-alpha#converting-your-code-with-regex).
:::

Here it follows a list with all changes we had which need attention:

### 1. Now all Static Classes are accessed with `.` instead of `:`

```lua
-- Before:
World:SetTime(15, 30)

-- After:
World.SetTime(15, 30)


-- Before:
Player:Subscribe("Spawn", function(player)
    -- ...
end)

-- After:
Player.Subscribe("Spawn", function(player)
    -- ...
end)
```

### 2. The Static Class **`NanosWorld`** has been deprecated

:::tip
Use **`Player.GetAll()`** instead of `NanosWorld:GetPlayers()`.

Use **`NanosUtils.Dump()`** instead of `NanosWorld:Dump()`.
:::

```lua
-- Before:
local character_list = NanosWorld:GetCharacters()
local is_character = NanosWorld:IsA(entity, Character)

-- After:
local character_list = Character.GetAll()
local is_character = NanosUtils.IsA(entity, Character)
```

### 3. Parameters in `Events:Call()`, `my_webui:CallEvent()` and `Package:Call()` now are passed as Variadic Parameters

```lua
-- Before:
Events:Call("MyEvent", {parameter1, parameter2})

-- After:
Events.Call("MyEvent", parameter1, parameter2)
```

### 4. Package and Asset Pack names now must follow a new pattern

Although this still works, it is highly recommended to convert your **Asset Packs** and **Packages** to the new Folder Name pattern, this will be fully prohibited in a future update:

* All lowercase
* Allowed only alphanumeric and `-` characters
* Max 64 Characters

#### Examples

| Old Folder name | New Folder name suggestion |
| :--- | :--- |
| `Sandbox` | **`sandbox`** |
| `AwesomeGameMode` | **`awesome-game-mode`** |
| `Nice-And-Neat-TTT` | **`nice-and-neat-ttt`** |
| `DARK_Roleplay_v34` | **`dark-roleplay`** |
| `MyAssets_Withouth-any-PaTtern` | **`my-assets-with-pattern`** |

:::caution
**Note:** All reference to assets now must use the new format as well \(the folder name\). So

`nanos-world::SM_Cube` would become `nanos-world::SM_Cube`.
:::

### 5. Package Types has been reworked

We don't have type `library` anymore, we now have `script`, `game-mode` and `loading-screen`. All your Packages has been replaced with `script` by default. If your Package is a full game, please set it `game-mode`.

> Please refer to [Packages](/docs/core-concepts/packages/packages) for more information.

### 6. Timer has a new signature and methods

> Please refer to [Timer](migrating-to-alpha#timer).

### 7. LoadingScreen folder has been replaced with Package `loading-screen`

> Please refer to [Loading Screen](/docs/core-concepts/packages/loading-screen) for more information.

## Converting your Code with Regex

We've created some regexes to help you migrating your code, if you use **VSCode**, using the replacer tool with regex is very easy and straightforward.

#### VSCode Replacer \(CTRL + F\) with Regex \(ALT + R\), Match Whole World \(Alt + W\) and Match Case enabled
![](/img/docs/migrating-to-alpha.jpg)

### Fixing Events:Call Variadic Parameters

This will remove the characters `{` and `}` from `Events:Call` parameters.

| Find | Replace |
| :--- | :--- |
| `Events[.,:](.*)\((.*),(.*)\{(.*)\}\)` | `Events.$1($2, $4)` |

```lua
-- Results:

-- Before:
Events:Call("MyEvent", {my_parameter1, my_parameter2})
-- After:
Events.Call("MyEvent", my_parameter1, my_parameter2)
```

### Fixing Package:Call Variadic Parameters

This will remove the characters `{` and `}` from `Package:Call` parameters.

| Find | Replace |
| :--- | :--- |
| `Package[.,:]Call\((.*),\s?\{(.*)\}\)` | `Package.Call($1, $2)` |

```lua
-- Results:

-- Before:
Package:Call("sandbox", "PackageFunction", {my_parameter1, my_parameter2})
-- After:
Package.Call("sandbox", "PackageFunction", my_parameter1, my_parameter2)
```

### Fixing WebUI:CallEvent Variadic Parameters

This will remove the characters `{` and `}` from web `webui:CallEvent` parameters.

| Find | Replace |
| :--- | :--- |
| `:CallEvent\((.*),\s?\{(.*)\}\)` | `:CallEvent($1, $2)` |

```lua
-- Results:

-- Before:
my_webui:CallEvent("MyWebUIEvent", {my_parameter1, my_parameter2})
-- After:
my_webui:CallEvent("MyWebUIEvent", my_parameter1, my_parameter2)
```

### Fixing StaticClasses using : instead of .

This will convert StaticClasses using `:` instead of the new pattern `.`.

| Find | Replace |
| :--- | :--- |
| (Assets \| Client \| Events \| Package \| Render \| Server \| Timer \| World \| Character \| File \| Grenade \| Item \| Light \| Particle \| Player \| Prop \| Sound \| StaticMesh \| TextRender \| Trigger \| Vehicle \| Weapon \| WebUI\): | `$1.` |

```lua
-- Results:

-- Before:
Player:Subscribe("Event", function() ...)
-- After:
Player.Subscribe("Event", function() ...)
```

### Fixing NanosWorld:GetEntities\(\) deprecated

This will convert `NanosWorld:GetENTITY()` to `ENTITY.GetAll()`.

| Find | Replace |
| :--- | :--- |
| `NanosWorld:Get(.*)s\(\)` | `$1.GetAll()` |

```lua
-- Results:

-- Before:
NanosWorld:GetPlayers()
-- After:
Player.GetAll()
```

## Conversions not covered by Regex

### Timer

Timer was not covered by [Regex Fixes](migrating-to-alpha#converting-your-code-with-regex), you will need to convert it manually. We recommend searching for `Timer` and converting one by one to the new pattern:

#### Infinite Triggering Timer

```lua
-- Before:
Timer:SetTimeout(5000, function(param1, param2)
    -- Triggers infinite at each 5000 ms
end, {my_param1, my_param2})

-- After:
Timer.SetInterval(function(param1, param2)
    -- Triggers infinite at each 5000 ms
end, 5000, my_param1, my_param2)
```

#### Run Once Timer

```lua
-- Before:
Timer:SetTimeout(4000, function()
    -- Triggers once after 4000 ms
    return false
end)

-- After:
Timer.SetTimeout(function()
    -- Triggers once after 4000 ms
end, 4000)
```

#### Boiling H²O

![yes](/img/docs/migrating-boiling.jpg)

