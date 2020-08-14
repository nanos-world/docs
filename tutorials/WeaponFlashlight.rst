.. _WeaponFlashlight:


*****************
Weapon Flashlight
*****************

This sample code attaches a :ref:`Light` to a :ref:`Weapon` to make a Flashlight attachment.

.. image:: https://i.imgur.com/JUtyW9s.png

.. note:: The following code runs on Server.


.. tabs::
 .. code-tab:: lua Lua

    Package:RequirePackage("NanosWorldWeapons")

    -- Spawns a Weapon
    my_weapon = NanosWorldWeapons.AR4(Vector(), Rotator())

    -- Spawns a Spot Light (with color Black, to be turned on only when someone picks up it)
    my_light = Light(Vector(), Rotator(), Color(0, 0, 0), 1, 1000, 1000, 50, 25, true, true)

    -- Attaches the Light to the Weapon with offset X = 100 (at the weapon's front)
    my_light:AttachTo(my_weapon, "", Vector(100, 0, 0), Rotator())

    -- Stores the light on the Weapon
    my_weapon:SetValue("Light", my_light)

    -- Only when someone picks up this weapon, turns on the Flashlight (set it's color)
    my_weapon:on("PickUp", function(character)
        local light = my_weapon:GetValue("Light")
        if (light ~= nil) then
            light:SetTintColor(Color(0.73, 0.67, 0.42))
        end
    end)

    -- When the weapon is dropped, turns off the Flashlight (set it's color to black)
    my_weapon:on("Drop", function(character)
        local light = my_weapon:GetValue("Light")
        if (light ~= nil) then
            light:SetTintColor(Color(0, 0, 0))
        end
    end)