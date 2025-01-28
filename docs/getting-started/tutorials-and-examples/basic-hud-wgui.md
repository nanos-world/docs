---
title: Basic HUD (WGUI)
description: >-
    How to add a basic HUD to display the character's health and ammo using WGUI.
tags: [tutorial-example, scripting, ui, wgui]
---

How to add a basic HUD to display the character's health and ammo using WGUI.

![](/img/docs/tutorials/wgui-00.webp)

:::info
    The technical documentation for **WGUI** can be found [here](https://negativename.gitbook.io/wgui-2/).
:::

:::info
    This tutorial assumes that you have a basic understanding of Lua scripting and [**nanos world** concepts](/getting-started/essential-concepts.mdx).
:::

## Installating WGUI

### WGUI package installation
Download `WGUI` package from the [GitHub repository](https://github.com/NegativeNameNGT/wgui) and extract it to your server's `Packages` folder.

Once the package is installed, it needs to be loaded by the server.
To do so, 2 possible methods can be used:

- Add **"wgui"** to the `packages` array of **Config.toml** file.
- Add **"wgui"** to the `packages_requirement` array of an existing package **Package.toml** file.

### WGUI asset pack installation
WGUI also requires an Asset Pack to be installed which can be downloaded from the [Asset Pack GitHub repository](https://github.com/NegativeNameNGT/wgui-assets). Extract the `wgui-assets` folder to your server's `Assets` folder. WGUI package will automatically load the Asset Pack.

## Creating the UI
Once **WGUI** is installed and loaded, we are ready to build our UI.

For this basic HUD, we will use [inheritance](/core-concepts/scripting/inheriting-classes.md) to create custom classes for each element.

We will create 4 custom classes:
    - `Indicator` - A base class for the Health and Weapon indicators that represents a container for the content.
    - `HealthIndicator` - A class inherited from `Indicator` to display the character's health.
    - `WeaponIndicator` - A class inherited from `Indicator` to display the character's weapon ammo.
    - `HUD` - A class to display the Health and Weapon indicators.

```lua title="Client/Indicator.lua" showLineNumbers
---@class Indicator : SizeBox
Indicator = SizeBox.Inherit("Indicator")

-- Static Brush to be used by all Indicators to draw the border.
local BorderBrush = Brush()
BorderBrush.SetDrawMode(DrawMode.RoundedBox)
BorderBrush.SetColor(Color(0.041, 0.041, 0.041, 0.8))
BorderBrush.SetOutlineSettings(OutlineSettings(Quat(4)))

function Indicator:Constructor()
    -- Calls the SizeBox constructor with a minimum desired size of 125x50.
    SizeBox.Constructor(self, Vector2D(125, 50))

    -- Creates a border inside the size box.
    local ContainerBorder = WGUI.Create(Border, self)
    ContainerBorder:SetBrush(BorderBrush)

    -- Creates a flex box inside the border. This flex box will be used by inherited classes to add their content.
    local ContentFlexBox = WGUI.Create(FlexBox, ContainerBorder, Orientation.Horizontal)
    ContentFlexBox:SetHAlign(HAlign.Center)
    ContentFlexBox:SetVAlign(VAlign.Center)

    -- Redirection of the panel functions to the ContentFlexBox.
    WGUI.RedirectPanelFunctions(self, ContentFlexBox)
    return self
end
```

```lua title="Client/HealthIndicator.lua" showLineNumbers
---@class HealthIndicator : Indicator
HealthIndicator = Indicator.Inherit("HealthIndicator")

function HealthIndicator:Constructor()
    Indicator.Constructor(self)

    -- Creates an image to display the health icon
    local HealthIcon = WGUI.Create(Image, self)
    HealthIcon:SetBrushFromSrc("package://MyPackage/Client/health-icon.png")
    HealthIcon:SetHAlign(HAlign.Center)
    HealthIcon:SetVAlign(VAlign.Center)

    -- Creates a text block to display the health value
    local HealthText = WGUI.Create(TextBlock, self, "100")
    HealthText:SetFont("Oswald", "Bold", 26)
    HealthText:SetPadding(Margin(10, 0, 0, 0))
    HealthText:SetHAlign(HAlign.Center)
    HealthText:SetVAlign(VAlign.Top)

    -- Stores the HealthText to be used later
    self:SetValue("Text", HealthText)

    return self
end

function HealthIndicator:SetHealth(Health)
    local HealthText = self:GetValue("Text")
    HealthText:SetText(tostring(Health))
end
```

:::info
    If you noticed we are using an image `health-icon.png`, you can download it from here [https://i.imgur.com/0BmQJVZ.png](https://i.imgur.com/0BmQJVZ.png) and place it inside your `Client/` package folder.
:::

```lua title="Client/WeaponIndicator.lua" showLineNumbers
---@class WeaponIndicator : Indicator
WeaponIndicator = Indicator.Inherit("WeaponIndicator")

function WeaponIndicator:Constructor()
    Indicator.Constructor(self)

    -- Creates a text block to display the ammo value
    local AmmoText = WGUI.Create(TextBlock, self, "6")
    AmmoText:SetFont("Oswald", "Bold", 28)

    -- Creates a text block to display the ammo bag value
    local AmmoBagText = WGUI.Create(TextBlock, self, " / 960")
    AmmoBagText:SetFont("Oswald", "Bold", 18)
    AmmoBagText:SetPadding(Margin(0, 0, 0, 5))
    AmmoBagText:SetVAlign(VAlign.Bottom)

    -- Stores the AmmoText and AmmoBagText to be used later
    self:SetValue("AmmoText", AmmoText)
    self:SetValue("AmmoBagText", AmmoBagText)

    -- Hides the widget by default
    self:SetVisibility(WGUIVisibility.Hidden)
    return self
end

function WeaponIndicator:SetAmmo(Ammo, AmmoBag)
    local AmmoText = self:GetValue("AmmoText")
    local AmmoBagText = self:GetValue("AmmoBagText")

    AmmoText:SetText(tostring(Ammo))
    AmmoBagText:SetText(" / " .. tostring(AmmoBag))
end
```

```lua title="Client/HUD.lua" showLineNumbers
Package.Require("Indicator.lua")
Package.Require("HealthIndicator.lua")
Package.Require("WeaponIndicator.lua")

---@class HUD : FlexBox
HUD = FlexBox.Inherit("HUD")

function HUD:Constructor()
    FlexBox.Constructor(self, Orientation.Horizontal)

    -- Adds the HUD to the default WGUI canvas panel widget.
    WGUI.GetLayout():AddChild(self)
    self:SetAnchor(Anchor.StretchBottom)
    self:SizeToContent()
    self:SetPadding(10)

    -- Creates the HealthIndicator and WeaponIndicator widgets
    local HealthContainer = WGUI.Create(HealthIndicator, self)
    local WeaponContainer = WGUI.Create(WeaponIndicator, self)

    -- Sets the weapon container to be on the right side of the HUD
    WeaponContainer:SetHAlign(HAlign.Right)
    WeaponContainer:SetSize(1)

    -- Stores the HealthContainer and WeaponContainer to be used later
    self:SetValue("HealthContainer", HealthContainer)
    self:SetValue("WeaponContainer", WeaponContainer)

    return self
end

-- Sets the health value
function HUD:SetHealth(Health)
    self:GetValue("HealthContainer"):SetHealth(Health)
end

-- Sets the ammo and ammo bag values
function HUD:SetAmmo(EnableUI, Ammo, AmmoBag)
    local WeaponContainer = self:GetValue("WeaponContainer")

    -- Hides the widget if EnableUI is false, otherwise shows it
    WeaponContainer:SetVisibility(EnableUI and WGUIVisibility.Visible or WGUIVisibility.Hidden)

    -- Updates the ammo values
    self:GetValue("WeaponContainer"):SetAmmo(Ammo, AmmoBag)
end
```

## Adding Events and Callbacks to handle the HUD
Now that we have our UI, we need to add some events and callbacks to handle the HUD.

```lua title="Client/Index.lua" showLineNumbers
Package.Require("Client/HUD.lua")

-- Spawns the HUD
local HUD = WGUI.Create(HUD)

-- When LocalPlayer spawns, sets an event on it to trigger when we possesses a new character, to store the local controlled character locally. This event is only called once, see Package:Subscribe("Load") to load it when reloading a package
Client.Subscribe("SpawnLocalPlayer", function(local_player)
    local_player:Subscribe("Possess", function(player, character)
        UpdateLocalCharacter(character)
    end)
end)

-- When package loads, verify if LocalPlayer already exists (eg. when reloading the package), then try to get and store it's controlled character
Package.Subscribe("Load", function()
    local local_player = Client.GetLocalPlayer()
    if (local_player ~= nil) then
        UpdateLocalCharacter(local_player:GetControlledCharacter())
    end
end)

-- Function to set all needed events on local character (to update the UI when it takes damage or dies)
function UpdateLocalCharacter(character)
    -- Verifies if character is not nil (eg. when GetControllerCharacter() doesn't return a character)
    if (not character or not character:IsValid()) then
        return
    end

    -- Updates the UI with the current character's health
    HUD:SetHealth(character:GetHealth())

    -- Sets on character an event to update the health's UI after it takes damage
    character:Subscribe("TakeDamage", function(charac, damage)
        HUD:SetHealth(math.max(charac:GetHealth() - damage, 0))
    end)

    -- Sets on character an event to update the health's UI after it dies
    character:Subscribe("Death", function()
        HUD:SetHealth(0)
    end)

    -- Try to get if the character is holding any weapon
    local current_picked_item = character:GetPicked()

    -- If so, update the UI
    if (current_picked_item and current_picked_item:GetClass():GetName() == "Weapon") then
        HUD:SetAmmo(true, current_picked_item:GetAmmoClip(), current_picked_item:GetAmmoBag())
    end

    -- Sets on character an event to update his grabbing weapon (to show ammo on UI)
    character:Subscribe("PickUp", function(charac, object)
        if (object.Super:GetClass():GetName() == "Weapon") then
            HUD:SetAmmo(true, object:GetAmmoClip(), object:GetAmmoBag())
        end
    end)

    -- Sets on character an event to remove the ammo ui when he drops it's weapon
    character:Subscribe("Drop", function(charac, object)
        HUD:SetAmmo(false, 0, 0)
    end)

    -- Sets on character an event to update the UI when he fires
    character:Subscribe("Fire", function(charac, weapon)
        HUD:SetAmmo(true, weapon:GetAmmoClip(), weapon:GetAmmoBag())
    end)

    -- Sets on character an event to update the UI when he reloads the weapon
    character:Subscribe("Reload", function(charac, weapon, ammo_to_reload)
        HUD:SetAmmo(true, weapon:GetAmmoClip(), weapon:GetAmmoBag())
    end)

    -- Sets on character an event to reset the health's UI when he respawns
    character:Subscribe("Respawn", function(charac)
        HUD:SetHealth(charac:GetHealth())
    end)
end
```

That's it! Your HUD is now ready to be used on your **nanos world server**.
You can test it by possessing a character and picking up a weapon.

![](/img/docs/tutorials/wgui-00.webp)