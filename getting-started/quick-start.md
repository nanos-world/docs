---
description: Start your Server and first Package in under 10 minutes!
---

# Quick Start

## Step 1: Download the Server

Use the follow command to download the latest nanos world version from our [Github](https://github.com/nanos-world/nanos-world-server/releases/):

{% tabs %}
{% tab title="Windows \(PowerShell\)" %}
```bash
Invoke-WebRequest -Uri "https://github.com/nanos-world/nanos-world-server/releases/latest/download/NanosWorldServer.exe" -OutFile NanosWorldServer.exe
```
{% endtab %}

{% tab title="Linux \(wget\)" %}
```text
wget "https://github.com/nanos-world/nanos-world-server/releases/latest/download/NanosWorldServer"
chmod +x NanosWorldServer
```
{% endtab %}
{% endtabs %}

The server is as simple as one executable file `NanosWorldServer.exe`. After downloaded it, run it once to generate the proper and initial folders `Assets`, `Packages` and `Config.toml` file, keep your server open for following this guide!

## Step 2: Creating a Basic Package

1. Create a folder inside `Packages/` to be your Package, let's name it `my-package/`.
2. Inside `my-package/` create a folder called `Server/` and a file called `Index.lua` inside `Server/`.
3. In your server console, type `package load my-package` to load your new package and generate the configuration file `Package.toml`. You can edit this file with proper customization later on.

## Step 3: Adding Script functionalities

Open the file `Index.lua` in your preferred editor \(we recommend using [vscode](https://code.visualstudio.com/download)\), and let's edit our first script:

{% tabs %}
{% tab title="Lua" %}
{% code title="Packages/my-package/Server/Index.lua" %}
```lua
-- Let's print to Console a friendly message
Package.Log("Loading some Props =D")

-- Let's spawn some props
prop_table = Prop(Vector(200, 0, 0), Rotator(0, 0, 0), "nanos-world::SM_WoodenTable")
prop_chair = Prop(Vector(400, 200, 0), Rotator(0, 0, 0), "nanos-world::SM_WoodenChair")
prop_tire = Prop(Vector(600, 0, 0), Rotator(0, 0, 0), "nanos-world::SM_TireLarge")
```
{% endcode %}
{% endtab %}
{% endtabs %}

To apply your changes, run the command in the server console: `package reload all`.

## Step 4: Join your server

{% hint style="success" %}
If you join your server you can already see the results 😁
{% endhint %}

![](../.gitbook/assets/image%20%2812%29.png)

## Extra Step: Spawning a Character for the Player

You may have noticed you are just a wandering soul flying around, let’s give you some flesh! For that, we will need to interact with some Events.

Let's append some code in your `Index.lua`:

{% tabs %}
{% tab title="Lua" %}
{% code title="my-package/Server/Index.lua" %}
```lua
-- Called when Players join the server (i.e. Spawn)
Player.Subscribe("Spawn", function(new_player)
    -- Spawns a Character at position 0, 0, 0 with default's constructor parameters
    local new_character = Character(Vector(0, 0, 0))

    -- Possess the new Character
    new_player:Possess(new_character)
end)
```
{% endcode %}
{% endtab %}
{% endtabs %}

To apply your changes, run the command in the server console: `package reload all`.

{% hint style="success" %}
Now if you join the server, you will spawn into a Character!
{% endhint %}

![](../.gitbook/assets/image%20%2813%29.png)

### Finishing up: Destroying the Character when a player Leaves the Server

Note that Characters aren't destroyed automatically if the Player disconnects. For that, we will need to Subscribe for when the Player leaves the server \(`Destroy`\) and manually destroying the Character:

{% tabs %}
{% tab title="Lua" %}
{% code title="my-package/Server/Index.lua" %}
```lua
-- Called when Players join the server (i.e. Spawn)
Player.Subscribe("Spawn", function(new_player)
    -- Spawns a Character at position 0, 0, 0 with default's constructor parameters
    local new_character = Character(Vector(0, 0, 0))

    -- Possess the new Character
    new_player:Possess(new_character)
end)

-- When Player leaves the server, destroy it's Character
Player.Subscribe("Destroy", function(player)
    local character = player:GetControlledCharacter()
    if (character) then
        character:Destroy()
    end
end)
```
{% endcode %}
{% endtab %}
{% endtabs %}

To apply your changes, run the command in the server console: `package reload all`.

## Conclusion

{% hint style="success" %}
Congratulations! You have finished your first basic Script and learned:

* How to setup your Server
* How to setup a simple Package
* Basic interact with entity Events
* Spawning Props
* Spawning & Destroying Characters
{% endhint %}

#### Recommended next step

{% page-ref page="../core-concepts/scripting/classes-guide.md" %}

