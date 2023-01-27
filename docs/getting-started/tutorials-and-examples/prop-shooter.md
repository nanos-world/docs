---
title: Prop Shooter
description: >-
  This sample code modifies a Weapon to make it shoot Props instead of normal
  bullets
tags: [tutorial-example, scripting]
---


This sample code modifies a Weapon to make it shoot Props instead of normal bullets

<video controls="true" allowfullscreen="true">
    <source src="/videos/docs/tutorials/prop-shooter.mp4" />
</video>


```shell title="Terminal"
# install the default-weapons package
./NanosWorldServer.exe --cli install package default-weapons
```

```lua title="Server/Index.lua"
-- Loads the default-weapons (note: it's recommended to add it to your Package's packages_requirements instead)
Server.LoadPackage("default-weapons")

-- Spawns a Weapon from default-weapons package
local my_weap = AR4(Vector(-2250, 9153, 192), Rotator(0, 90, 90))
my_weap:SetDamage(0)

my_weap:Subscribe("Fire", function(weapon, shooter)
    local control_rotation = shooter:GetControlRotation()
    local forward_vector = control_rotation:GetForwardVector()
    local spawn_location = shooter:GetLocation() + Vector(0, 0, 40) + forward_vector * Vector(200)

    local prop = Prop(spawn_location, control_rotation, "nanos-world::SM_TeaPot_Interior", 1)
    prop:AddImpulse(forward_vector * Vector(10000), true)
end)
```


