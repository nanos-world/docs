---
description: >-
  This sample code shows how to attach custom sights meshes into a Weapon and
  work as real scopes.
tags: [tutorial-example, scripting, assets]
---

# Weapon Scope

This sample code shows how to attach custom sights meshes into a Weapon and work as real scopes.

![](/img/docs/tutorials/weapon-scope.jpg)


```lua title="Server/Index.lua"
-- Spawning the AK47
local my_ak47 = NanosWorldWeapons.AK47(Vector(1035, 154, 300), Rotator())

-- Adds a StaticMesh Attached with a RedDot mesh into AK47 on sight_socket bone from AK47 model. As our AK47 model already
-- have a bone named sight_socket at the right location, we can just attach to it, otherwise we would
-- need to set it's Attach Location to where the RedDot fits and using bone name as empty ""
my_ak47:AddStaticMeshAttached("sight", "nanos-world::SM_T4_Sight", "sight_socket")

-- Makes the FOV multiplier reduces by 0.35x when ADS (aiming)
my_ak47.SightFOVMultiplier = 0.35

-- Sets the ADS transform offset to fit the RedDot center position,
-- each weapon will need a different offset to fit it's sight. AK47 + RedDot best fit is Z = -15.9
my_ak47:SetSightTransform(Vector(0, 0, -15.9), Rotator(0, 0, 0))
```


## Some Static Mesh assets which can be used as scope:

* `nanos-world::SM_T4_Sight`
* `nanos-world::SM_Vertgrip`
* `nanos-world::SM_Suppressor`
* `nanos-world::SM_Scope_25x56_X`

