---
description: >-
  How to create a rain effect with Props (boxes) falling from sky once a
  Character enters a Trigger
tags: [tutorial-example, scripting]
---

# Prop Rain

How to create a rain effect with Props (boxes) falling from sky once a Character enters a Trigger.

### Final result

<video controls="true" allowfullscreen="true">
    <source src="/videos/docs/tutorials/prop-rain.mp4" type="video/mp4" />
</video>


```lua title="Server/Index.lua"
-- Spawns a Trigger
my_trigger = Trigger(Vector(200, 200, 0), 200)

-- Defines my_timer globally to be used to store Timer
my_timer = nil

-- Sets BeginOverlap event
my_trigger:Subscribe("BeginOverlap", function(trigger, actor_triggering)
    -- Only activates if a Character enters it
    if (actor_triggering:GetType() ~= "Character") then
        return
    end

    -- Sets a Timer at each 100ms to spawn a Prop
    my_timer = Timer.SetInterval(function()
        -- Gets random Location and Rotation
        local prop_spawn_location = Vector(math.random(100, 300), math.random(100, 300), math.random(800, 1200))
        local prop_spawn_rotation = Rotator(math.random(0, 360), math.random(0, 360), math.random(0, 360))

        -- Spawns a Crate
        Prop(prop_spawn_location, prop_spawn_rotation, "nanos-world::SM_Crate_07")
    end, 100)
end)

-- Sets EndOverlap event
my_trigger:Subscribe("EndOverlap", function(trigger, actor_triggering)
    -- Only deactivates if a Character leaves it
    if (actor_triggering:GetType() ~= "Character") then
        return
    end

    -- Stops/Clear the Timer
    if (my_timer ~= nil) then
        Timer.ClearTimeout(my_timer)
    end
end)
```


