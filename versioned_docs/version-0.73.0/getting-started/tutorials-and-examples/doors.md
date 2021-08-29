---
description: How to create a simple and automatic door when Characters move in
tags: [tutorial-example, scripting]
---

# Doors

How to create a simple and automatic door when Characters move in.

### Final result

<video controls="true" allowfullscreen="true">
    <source src="/videos/docs/tutorials/doors-01.mp4" type="video/mp4" />
</video>

<video controls="true" allowfullscreen="true">
    <source src="/videos/docs/tutorials/doors-02.mp4" type="video/mp4" />
</video>


### Code Snippet

```lua title="Server/Index.lua"
-- Let's spawn a SM_Plane to be our door, and an empty (SM_None) StaticMesh to be our Hinge.
-- As the SM_Plane has it's pivot at the center of the mesh, we need to have a Hinge to make it rotate properly.
-- This is not needed if your Door Mesh already has the pivot at the correct Hinge location.

-- Spawns the Hinge (which we rotated 90º to stand up)
local door = StaticMesh(Vector(0, 0, 100), Rotator(0, 0, 90), "nanos-world::SM_None")

-- Spawns the Door mesh, scales it to be in the format of a door, and attaches it to the Hinge
local door_mesh = StaticMesh(Vector(), Rotator(), "nanos-world::SM_Plane")
door_mesh:SetScale(Vector(1, 2, 1))

-- Attaches to the Hinge at a relative location of 50 units (to be at the hinge location)
door_mesh:AttachTo(door)
door_mesh:SetRelativeLocation(Vector(50, 0, 0))

-- Spawns our trigger at the center of the Door
local trigger = Trigger(Vector(0, 0, 100), Rotator(), 150)

-- Registers the trigger when a Character moves in
trigger:Subscribe("BeginOverlap", function(trigger, actor)
    if (actor:GetType() ~= "Character") then return end

    -- Plays an opening door animation on the Character
    actor:PlayAnimation("nanos-world::AM_Mannequin_DoorOpen_01", AnimationSlotType.UpperBody)

    -- Rotates the door -90º smoothly
    door:RotateTo(Rotator(0, -90, 90), 1)
end)

-- Registers the trigger when a Character moves out
trigger:Subscribe("EndOverlap", function(trigger, actor)
    if (actor:GetType() ~= "Character") then return end

    -- Rotates the door back to original position, smoothly
    door:RotateTo(Rotator(0, 0, 90), 1)
end)
```


