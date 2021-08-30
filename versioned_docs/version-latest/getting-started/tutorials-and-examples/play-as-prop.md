---
description: >-
  How to simulate a Prop possessing using a Character. This can be used for Prop
  Hunt game-modes!
tags: [tutorial-example, scripting]
---

# Play as Prop

How to simulate a Prop possessing using a Character. This can be used for Prop Hunt game-modes!

### Final result

<video controls="true" allowfullscreen="true">
    <source src="/videos/docs/tutorials/play-as-prop.mp4" type="video/mp4" />
</video>

### Code Snippet

```lua title="Server/Index.lua"
-- Spawns a Character using SK_None mesh (an invisible mesh)
local new_char = Character(Vector(0, 0, 0), Rotator(), "nanos-world::SK_None")

-- Adjusts the Capsule of this character. For small props it's recommended to use small capsule size
-- (A capsule is used to handle Character's collision, this will also adjust camera height location)
-- It's important to adjust the Capsule Size before adding a StaticMesh, as it will be adjusted based on Capsule Size
new_char:SetCapsuleSize(32, 64)

-- Attaches a Static Mesh on the character - which will be the Prop it will possess
new_char:AddStaticMeshAttached("prop", "nanos-world::SM_WoodenChair")

-- Disables some functionalities from the Character (picking up stuff, ability to crouch/prone, FPS camera...)
new_char:SetCanPickupPickables(false)
new_char:SetCanGrabProps(false)
new_char:SetCanCrouch(false)
new_char:SetCameraMode(2) -- Allows only Third Person
```


