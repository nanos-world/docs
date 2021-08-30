---
description: This sample code attaches a Light to a Weapon to make a Flashlight attachment.
tags: [tutorial-example, scripting]
---

# Weapon Flashlight

This sample code attaches a Light to a Weapon to make a Flashlight attachment.

![](/img/docs/tutorials/weapon-flashlight.jpg)


```lua title="Server/Index.lua"
Package.RequirePackage("nanos-world-weapons")

-- Spawns a Weapon
my_weapon = NanosWorldWeapons.AR4(Vector(), Rotator())

-- Spawns a Spot Light (with color Black, to be turned on only when someone picks up it)
my_light = Light(Vector(), Rotator(), Color(0, 0, 0), 1, 1000, 1000, 35)

-- Attaches the Light to the Weapon with offset X = 100 (at the weapon's front)
my_light:AttachTo(my_weapon)
my_light:SetRelativeLocation(Vector(100, 0, 0))

-- Stores the light on the Weapon
my_weapon:SetValue("Light", my_light)

-- Only when someone picks up this weapon, turns on the Flashlight (set it's color)
my_weapon:Subscribe("PickUp", function(weapon, character)
    local light = my_weapon:GetValue("Light")
    if (light ~= nil) then
        light:SetColor(Color(0.73, 0.67, 0.42))
    end
end)

-- When the weapon is dropped, turns off the Flashlight (set it's color to black)
my_weapon:Subscribe("Drop", function(weapon, character)
    local light = my_weapon:GetValue("Light")
    if (light ~= nil) then
        light:SetColor(Color(0, 0, 0))
    end
end)
```


