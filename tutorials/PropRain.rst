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
    MyTrigger = Trigger(Vector(200, 200, 0), 200)

    -- Defines MyTimer globally to be used to store Timer
    MyTimer = nil

    -- Sets BeginOverlap event
    MyTrigger:on("BeginOverlap", function(actorTriggering)
        -- Only activates if a Character enters it
        if (actorTriggering:GetType() ~= "Character") then
            return
        end

        -- Sets a Timer at each 100ms to spawn a Prop
        MyTimer = Timer:SetTimeout(100, function()
            -- Gets random Location and Rotation
            local PropSpawnLocation = Vector(math.random(100, 300), math.random(100, 300), math.random(800, 1200))
            local PropSpawnRotation = Rotator(math.random(0, 360), math.random(0, 360), math.random(0, 360))

            -- Spawns a Crate
            Prop(PropSpawnLocation, PropSpawnRotation, "NanosWorld::SM_Crate_07")
        end)
    end)

    -- Sets EndOverlap event
    MyTrigger:on("EndOverlap", function(actorTriggering)
        -- Only deactivates if a Character leaves it
        if (actorTriggering:GetType() ~= "Character") then
            return
        end

        -- Stops/Clear the Timer
        if (MyTimer ~= nil) then
            Timer:ClearTimeout(MyTimer)
        end
    end)
