.. _XRay:


*****************
X-Ray / Highlight
*****************

This sample code shows how to set Actors to be highlighted when behind walls, or always highlighted!

.. note:: Currently it's only possible to have one color for all Highlighted objects.

.. image:: ../images/highlight_example.jpg


.. note:: The following code runs on Client.


.. tabs::
 .. code-tab:: lua Lua
    
    -- Sets the Global desired Highlight color
    -- Note: Alpha bigger than 0 will make the highlight always appear (even if not behind a wall)
    -- We multiply the color by 10 to make it glow
    local highlight_color = Color(1, 0.25, 0, 0) * 10
    Client:SetHighlightColor(highlight_color)

    -- Setting all Characters to highlight
    Character:on("Spawn", function(character)
        character:SetHighlightEnabled(true)
    end)