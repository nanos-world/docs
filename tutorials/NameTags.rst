.. _NameTags:


*********
Name Tags
*********

This sample shows how to add Name Tags to Characters

.. image:: https://i.imgur.com/AyHKrG1.png


.. note:: The following code runs on Client.

.. tabs::
 .. code-tab:: lua Lua

    -- Function to add a Nametag to a Player
    function AddNametag(player, character)
        -- Try to get it's character
        if (character == nil) then
            character = player:GetControlledCharacter()
            if (character == nil) then return end
        end
    
        -- Spawns the Nametag (TextRender), attaches it to the character and saves it to the player's values
        local nametag = TextRender(Vector(), Rotator(), player:GetName(), Color(1, 1, 1), 1, 0, 24, 0, true)
        nametag:AttachTo(character, "", Vector(0, 0, 250), Rotator())
        player:SetValue("Nametag", nametag)
    end
    
    -- Function to remove a Nametag from  a Player
    function RemoveNametag(player, character)
        -- Try to get it's character
        if (character == nil) then
            character = player:GetControlledCharacter()
            if (character == nil) then return end
        end
    
        -- Gets the Nametag from the player, if any, and destroys it
        local text_render = player:GetValue("Nametag")
        if (text_render and text_render:IsValid()) then
            text_render:Destroy()
        end
    end
    
    -- Adds a new Nametag to a character which was possessed
    Character:on("Possessed", function(character, player)
        AddNametag(player, character)
    end)
    
    -- Removes the Nametag from a character which was unpossessed
    Character:on("UnPossessed", function(character, player)
        Package:Log("UnPossessed")
        RemoveNametag(player, character)
    end)
    
    -- When a Player is spawned - for when you connect and there is already Player's connected
    Player:on("Spawn", function(player)
        RemoveNametag(player)
        AddNametag(player)
    end)