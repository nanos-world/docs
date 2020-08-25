.. _BasicHUDCanvas:


******************
Basic HUD (Canvas)
******************

This sample code shows how to add a basic HUD using :ref:`Render`'s Canvas features, to display the character's Health and Ammo.

.. image:: https://i.imgur.com/WE3rqAL.png

.. note:: The following code runs on Client.


.. tabs::
 .. code-tab:: lua Lua

    -- Variable to stores the Health Canvas Group ID of this UI (to be used to clear all canvas with that ID when the package unloads)
    health_group_id = 10
    ammo_group_id = 11

    -- Variable to stores the Canvas Item ID of Health UI (to be used to edit a specific Canvas Item (Text))
    health_item_id = nil
    ammo_clip_item_id = nil
    ammo_bag_item_id = nil

    -- When LocalPlayer spawns, sets an event on it to trigger when we possesses a new character, to store the local controlled character locally. This event is only called once, see Package:on("Load") to load it when reloading a package
    NanosWorld:on("SpawnLocalPlayer", function(local_player)
        local_player:on("Possess", function(character)
            UpdateLocalCharacter(character)
        end)
    end)

    -- When package loads, verify if LocalPlayer already exists (eg. when reloading the package), then try to get and store it's controlled character
    Package:on("Load", function()
        if (NanosWorld:GetLocalPlayer() ~= nil) then
            UpdateLocalCharacter(NanosWorld:GetLocalPlayer():GetControlledCharacter())
        end
    end)

    -- Function to set all needed events on local character (to update the UI when it takes damage or dies)
    function UpdateLocalCharacter(character)
        -- Verifies if character is not nil (eg. when GetControllerCharacter() doesn't return a character)
        if (character == nil) then return end

        -- Updates the UI with the current character's health
        UpdateHealth(character:GetHealth())

        -- Sets on character an event to update the health's UI after it takes damage
        character:on("TakeDamage", function(damage, type, bone, from_direction, instigator)
            UpdateHealth(character:GetHealth())
        end)

        -- Sets on character an event to update the health's UI after it dies
        character:on("Death", function()
            UpdateHealth(0)
        end)

        -- Try to get if the character is holding any weapon
        local current_picked_item = character:GetPicked()

        -- If so, update the UI
        if (current_picked_item and current_picked_item:GetType() == "Weapon") then
            UpdateAmmo(true, current_picked_item:GetAmmoClip(), current_picked_item:GetAmmoBag())
        end

        -- Sets on character an event to update his grabbing weapon (to show ammo on UI)
        character:on("PickUp", function(object)
            if (object:GetType() == "Weapon") then
                UpdateAmmo(true, object:GetAmmoClip(), object:GetAmmoBag())
            end
        end)

        -- Sets on character an event to remove the ammo ui when he drops it's weapon
        character:on("Drop", function(object)
            UpdateAmmo(false)
        end)

        -- Sets on character an event to update the UI when he fires
        character:on("Fire", function(weapon)
            UpdateAmmo(true, weapon:GetAmmoClip(), weapon:GetAmmoBag())
        end)

        -- Sets on character an event to update the UI when he reloads the weapon
        character:on("Reload", function(weapon, ammo_to_reload)
            UpdateAmmo(true, weapon:GetAmmoClip(), weapon:GetAmmoBag())
        end)
    end

    -- Function to update the Ammo's UI
    function UpdateAmmo(enable_ui, ammo, ammo_bag)
        if (enable_ui) then
            if (ammo_clip_item_id == nil and ammo_bag_item_id == nil) then
                -- Creates a new Text Canvas to display the character's Health, we choose the ID ammo_group_id = 11 arbitrarily for being our Health Canvas ID (to be able to edit it later on)
                ammo_clip_item_id = Render:AddText(ammo_group_id, tostring(ammo), Render:GetViewportSize() - Vector2D(200, 100), 2, 25, Color(1, 1, 1), 0, false, false, true, Vector2D(2, 2), Color(0, 0, 0), true, Color(0, 0, 0))
                ammo_bag_item_id = Render:AddText(ammo_group_id, "/ " .. tostring(ammo_bag), Render:GetViewportSize() - Vector2D(140, 87), 2, 15, Color(1, 1, 1), 0, false, false, true, Vector2D(2, 2), Color(0, 0, 0), true, Color(0, 0, 0))
            else
                -- Otherwise if a Text Canvas is already created, then just update it (more performatic than deleting and creating a new one all the time)
                Render:UpdateItemText(ammo_group_id, ammo_clip_item_id, tostring(ammo))
                Render:UpdateItemText(ammo_group_id, ammo_bag_item_id, "/ " .. tostring(ammo_bag))
            end
        else
            Render:ClearItems(ammo_group_id)
            ammo_clip_item_id = nil
            ammo_bag_item_id = nil
        end
    end

    -- Function to update the Health's UI
    function UpdateHealth(health)
        if (health_item_id == nil) then
            -- Creates a new Text Canvas to display the character's Health, we choose the ID health_group_id = 10 arbitrarily for being our Health Canvas ID (to be able to edit it later on)
            health_item_id = Render:AddText(health_group_id, tostring(health), Vector2D(100, Render:GetViewportSize().Y - 100), 2, 25, Color(1, 1, 1), 0, false, false, true, Vector2D(2, 2), Color(0, 0, 0), true, Color(0, 0, 0))
        else
            -- Otherwise if a Text Canvas is already created, then just update it (more performatic than deleting and creating a new one all the time)
            Render:UpdateItemText(health_group_id, health_item_id, tostring(health))
        end
    end

    -- Clear the UI when the package unloads
    Package:on("Unload", function()
        Render:ClearItems(health_group_id)
        Render:ClearItems(ammo_group_id)
    end)

    -- Updates the UI positions when the Viewport (screen) is resized
    Render:on("ViewportResized", function(NewSize)
        if (health_item_id ~= nil) then
            Render:UpdateItemPosition(health_group_id, health_item_id, Vector2D(100, Render:GetViewportSize().Y - 100))
        end

        if (ammo_clip_item_id ~= nil and ammo_bag_item_id ~= nil) then
            Render:UpdateItemPosition(ammo_group_id, ammo_clip_item_id, Render:GetViewportSize() - Vector2D(200, 100))
            Render:UpdateItemPosition(ammo_group_id, ammo_bag_item_id, Render:GetViewportSize() - Vector2D(140, 87))
        end
    end)