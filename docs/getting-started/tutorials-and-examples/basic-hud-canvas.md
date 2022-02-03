---
description: >-
  How to add a basic HUD using Render’s Canvas features, to display the
  character’s Health and Ammo
tags: [tutorial-example, scripting, ui]
---

# Basic HUD (Canvas)

How to add a basic HUD using Render’s Canvas features, to display the character’s Health and Ammo.

:::tip

You can also create complete and complex UIs using HTML + JavaScript + CSS, check it out: [Basic HUD (HTML)](./getting-started/tutorials-and-examples/basic-hud-html.md).

:::

![](/img/docs/tutorials/canvas.jpg)

A Canvas is a painting fabric which can be drawn to. The following code shows how to add a basic UI using Canvas:


```lua title="Client/Index.lua"
-- Spawns the Canvas
HUDCanvas = Canvas(true, Color.TRANSPARENT, 0, true)

-- Subscribes for Update event, we can only draw inside this event
HUDCanvas:Subscribe("Update", function(self, width, height)
    -- Gets the Local Player
    local local_player = Client.GetLocalPlayer()
    if (not local_player) then return end

    -- Gets the Local Character (possessed by the Local Player)
    local local_character = local_player:GetControlledCharacter()
    if (not local_character) then return end

    -- Draws the Health
    self:DrawText(tostring(local_character:GetHealth()), Vector2D(100, height - 100), FontType.PoiretOne, 25, Color.WHITE)

    -- Gets the Local Weapon
    local character_weapon = local_character:GetPicked()
    if (character_weapon and character_weapon:GetType() == "Weapon") then
        -- Draws the Ammo Clip
        self:DrawText(tostring(character_weapon:GetAmmoClip()), Vector2D(width - 200, height - 100), FontType.PoiretOne, 25, Color.WHITE)

        -- Draws the Ammo Bag
        self:DrawText("/ " .. tostring(character_weapon:GetAmmoBag()), Vector2D(width - 140, height - 87), FontType.PoiretOne, 15, Color.WHITE)
    end
end)
```


The example above re-renders and updates all health/ammo information ever tick, which could be bad for performance. Gladly we can fast improve it by limiting the auto repaint rate by changing it in the constructor:

```lua
-- Instead of 0 in the auto_repaint_rate parameter
HUDCanvas = Canvas(true, Color.TRANSPARENT, 0, true)

-- Use 0.033, so it only updates every 0.033ms (i.e. at 30 fps)
// highlight-next-line
HUDCanvas = Canvas(true, Color.TRANSPARENT, 0.033, true)
```


Another further optimization is to only update when needed, for this case we will need to implement some additional code. In this case, we set `auto_repaint_rate` to -1 to disable it from being auto repainted:

```lua
-- We set -1 to never auto repaint
HUDCanvas = Canvas(true, Color.TRANSPARENT, -1, true)

-- Subscribes for Update event, we can only draw inside this event (as usual)
HUDCanvas:Subscribe("Update", function(self, width, height)
    -- Gets the Local Player
    local local_player = Client.GetLocalPlayer()
    if (not local_player) then return end

    -- Gets the Local Character (possessed by the Local Player)
    local local_character = local_player:GetControlledCharacter()
    if (not local_character) then return end

    -- Draws the Health
    self:DrawText(tostring(local_character:GetHealth()), Vector2D(100, height - 100), FontType.PoiretOne, 25, Color.WHITE)

    -- Gets the Local Weapon
    local character_weapon = local_character:GetPicked()
    if (character_weapon and character_weapon:GetType() == "Weapon") then
        -- Draws the Ammo Clip
        self:DrawText(tostring(character_weapon:GetAmmoClip()), Vector2D(width - 200, height - 100), FontType.PoiretOne, 25, Color.WHITE)

        -- Draws the Ammo Bag
        self:DrawText("/ " .. tostring(character_weapon:GetAmmoBag()), Vector2D(width - 140, height - 87), FontType.PoiretOne, 15, Color.WHITE)
    end
end)


-- Now we subscribe for when we want it to be updated:

-- When LocalPlayer spawns, sets an event on it to trigger when we possesses a new character, to store the local controlled character locally. This event is only called once, see Package.Subscribe("Load") to load it when reloading a package
Client.Subscribe("SpawnLocalPlayer", function(local_player)
    local_player:Subscribe("Possess", function(player, character)
        UpdateLocalCharacter(character)
    end)
end)

-- When package loads, verify if LocalPlayer already exists (eg. when reloading the package), then try to get and store it's controlled character
Package.Subscribe("Load", function()
    local local_player = Client.GetLocalPlayer()
    if (local_player  ~= nil) then
        UpdateLocalCharacter(local_player:GetControlledCharacter())
    end
end)

-- Function to set all needed events on local character (to update the UI when it takes damage or dies)
function UpdateLocalCharacter(character)
    -- Verifies if character is not nil (eg. when GetControllerCharacter() doesn't return a character)
    if (character == nil) then return end

    -- Sets on character an event to update the health's UI after it takes damage
    character:Subscribe("TakeDamage", function(charac, damage, type, bone, from_direction, instigator, causer)
        HUDCanvas:Repaint()
    end)

    -- Sets on character an event to update the health's UI after it dies
    character:Subscribe("Death", function(charac)
        HUDCanvas:Repaint()
    end)

    -- Sets on character an event to update his grabbing weapon (to show ammo on UI)
    character:Subscribe("PickUp", function(charac, object)
        if (object:GetType() == "Weapon") then
            HUDCanvas:Repaint()
        end
    end)

    -- Sets on character an event to remove the ammo ui when he drops it's weapon
    character:Subscribe("Drop", function(charac, object)
        HUDCanvas:Repaint()
    end)

    -- Sets on character an event to update the UI when he fires
    character:Subscribe("Fire", function(charac, weapon)
        HUDCanvas:Repaint()
    end)

    -- Sets on character an event to update the UI when he reloads the weapon
    character:Subscribe("Reload", function(charac, weapon, ammo_to_reload)
        HUDCanvas:Repaint()
    end)

    -- Updates the UI immeditelly
    HUDCanvas:Repaint()
end

-- Updates the UI positions when the Viewport (screen) is resized
Client.Subscribe("ViewportResized", function(NewSize)
    HUDCanvas:Repaint()
end)
```