.. _PropRain:


*********
Prop Rain
*********

This sample code creates a rain effect with :ref:`Prop`\s (boxes) falling from sky once a :ref:`Character` enters a :ref:`Trigger`.

.. raw:: html

	<video controls src="https://i.imgur.com/ykdMbGN.mp4" width="100%"></video><br><br>


.. note:: The following code runs on Server.


.. tabs::
 .. code-tab:: lua Lua

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
        my_timer = Timer:SetTimeout(100, function()
            -- Gets random Location and Rotation
            local prop_spawn_location = Vector(math.random(100, 300), math.random(100, 300), math.random(800, 1200))
            local prop_spawn_rotation = Rotator(math.random(0, 360), math.random(0, 360), math.random(0, 360))

            -- Spawns a Crate
            Prop(prop_spawn_location, prop_spawn_rotation, "NanosWorld::SM_Crate_07")
        end)
    end)

    -- Sets EndOverlap event
    my_trigger:Subscribe("EndOverlap", function(trigger, actor_triggering)
        -- Only deactivates if a Character leaves it
        if (actor_triggering:GetType() ~= "Character") then
            return
        end

        -- Stops/Clear the Timer
        if (my_timer ~= nil) then
            Timer:ClearTimeout(my_timer)
        end
    end)
