.. _PropShooter:


************
Prop Shooter
************

This sample code modifies a :ref:`Weapon` to make it shoot :ref:`Prop`\s instead of normal bullets.

.. raw:: html

	<video controls src="https://i.imgur.com/mCIPkOw.mp4" width="100%"></video><br><br>


.. note:: The following code runs on Server.


.. tabs::
 .. code-tab:: lua Lua

    Package:RequirePackage("NanosWorldWeapons")

    my_weap = NanosWorldWeapons.AR4(Vector(-2250, 9153, 192), Rotator(0, 90, 90))
    my_weap.BaseDamage = 0

    my_weap:on("Fire", function(shooter)
        local control_rotation = shooter:GetControlRotation()
        local forward_vector = control_rotation:GetForwardVector()
        local spawn_location = shooter:GetLocation() + Vector(0, 0, 40) + forward_vector * Vector(200)
        
        local prop = Prop(spawn_location, control_rotation, "NanosWorld::SM_TeaPot_Interior", 1)
        prop:AddImpulse(forward_vector * Vector(10000))
    end)