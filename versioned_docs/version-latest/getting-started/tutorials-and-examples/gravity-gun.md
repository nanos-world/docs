---
description: How to create a simple Gravity Gun to move Props around
tags: [tutorial-example, scripting]
---

# Gravity Gun

How to create a simple Gravity Gun to move Props around.

### Final result

<video controls="true" allowfullscreen="true">
    <source src="/videos/docs/tutorials/gravity-gun.mp4" type="video/mp4" />
</video>

:::tip

You can now find a fully working Gravity Gun in the [Sandbox](https://github.com/nanos-world/nanos-world-sandbox) game-mode!

:::

### Code Snippet

```lua title="Server/Index.lua"
-- Spawns some Props and Static Meshes
-- (note: Static Meshes don't have physics so they will freeze where released automatically)
local p_sphere = Prop(Vector(200, 0, 200), Rotator(), "nanos-world::SM_Sphere")
local p_cone = Prop(Vector(200, 0, 200), Rotator(), "nanos-world::SM_Cone")
local sm_cube = StaticMesh(Vector(100, 0, 200), Rotator(), "nanos-world::SM_Cube")
local sm_cylinder = StaticMesh(Vector(300, 0, 200), Rotator(), "nanos-world::SM_Cylinder")

-- Subscribe for Client's custom event, for when the object is grabbed/dropped
Events.Subscribe("PickUp", function(player, object, is_grabbing)
    object:SetGravityEnabled(not is_grabbing)
    object:TranslateTo(object:GetLocation(), 0)
end)

-- Subscribe for Client's custom event, to update the position of the object he is grabbing
Events.Subscribe("UpdateObjectPosition", function(player, object, location)
    object:TranslateTo(location, 10)
end)
```


```lua title="Client/Index.lua"
-- Global Variables
picking_object = nil
distance_trace_object = nil
distance = 200

-- Sets the color of Highlighing at index 1
Client.SetHighlightColor(Color(0, 20, 20, 1.5), 1, HighlightMode.OnlyVisible)

-- When Player clicks
Client.Subscribe("MouseUp", function(key_name)

    -- If mouse was left button
    if (key_name == "LeftMouseButton") then

        -- If is grabbing something, drop it
        if (picking_object) then
            -- Calls server to re-enable gravity (if possible) and update it's last position
            Events.CallRemote("PickUp", picking_object, false)

            -- Disables the highlight
            picking_object:SetHighlightEnabled(false)

            picking_object = nil
            return
        end

        -- Get the camera location in 3D World Space
        local viewport_2D_center = Render:GetViewportSize() / 2
        local viewport_3D = Render:Deproject(viewport_2D_center)
        local start_location = viewport_3D.Position

        -- Gets the end location of the trace (5000 units ahead)
        local trace_max_distance = 5000
        local end_location = viewport_3D.Position + viewport_3D.Direction * trace_max_distance

        -- Determine at which object we will be tracing for (WorldStatic - StaticMeshes - and PhysicsBody - Props)
        local collision_trace = CollisionChannel.WorldStatic | CollisionChannel.PhysicsBody

        -- Do the Trace
        local trace_result = Client.Trace(start_location, end_location, collision_trace, false, true, false, true)

        -- If hit something and hit an Entity
        if (trace_result.Success and trace_result.Entity) then

            -- Sets the new picked up object
            picking_object = trace_result.Entity

            -- Calculates the offset of the hit and the center of the object
            distance_trace_object = picking_object:GetLocation() - trace_result.Location

            -- Calculates the distance of the object and the camera
            distance = trace_result.Location:Distance(viewport_3D.Position)

            -- Calls remote to disable gravity of this object (if has)
            Events.CallRemote("PickUp", picking_object, true)

            -- Enable Highlighting on index 1
            picking_object:SetHighlightEnabled(true, 1)
        end
    elseif (key_name == "MouseScrollUp") then
        -- If mouse scroll, updates the Distance of the object from the camera
        distance = distance + 25
    elseif (key_name == "MouseScrollDown") then
        -- If mouse scroll, updates the Distance of the object from the camera
        distance = distance - 25
        if (distance < 100) then distance = 100 end
    end
end)

Client:Subscribe("Tick", function(delta_time)
    -- On Tick, updates the Position of the object, based on it's distance and camera rotation
    if (picking_object == nil) then return end

    local player = Client.GetLocalPlayer()
    if (player == nil) then return end

    -- Get the camera location in 3D World Space
    local viewport_2D_center = Render.GetViewportSize() / 2
    local viewport_3D = Render.Deproject(viewport_2D_center)
    local start_location = viewport_3D.Position

    -- Gets the new object location
    -- (camera direction * 'distance' units ahead + object offset from first Hit to keep it relative)
    local end_location = (viewport_3D.Position + viewport_3D.Direction * distance) + distance_trace_object

    -- Calls remote to update it's location
    Events.CallRemote("UpdateObjectPosition", picking_object, end_location)
end)
```


