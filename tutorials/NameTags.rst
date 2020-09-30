.. _NameTags:


*********
Name Tags
*********

This sample shows how to add Name Tags to Characters

.. image:: https://i.imgur.com/AyHKrG1.png


.. note:: The following code runs on Client.

.. tabs::
 .. code-tab:: lua Lua

    Character:on("Possessed", function(character, player)
        local nametag = TextRender(Vector(), Rotator(), player:GetName(), Color(1, 1, 1), 1, 0, 24, false, true)
        nametag:AttachTo(character, "", Vector(0, 0, 250), Rotator())
    end)
    
    Character:on("Unpossessed", function(character, player)
        local text_render = character:GetValue("Nametag")
        if (text_render and text_render:IsValid()) then
            text_render:Destroy()
        end
    end)