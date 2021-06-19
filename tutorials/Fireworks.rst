.. _Fireworks:


*********
Fireworks
*********

This sample code shows how to create a Firework-shooter weapon using the **Fireworks Particle Effects** Asset Pack from our Vault!

.. raw:: html

    <video controls src="https://i.imgur.com/aeKQXZQ.mp4" width="100%"></video><br><br>


First you will need to download **Fireworks Particle Effects** from our Vault!

.. image:: https://i.imgur.com/5eSdT6e.png


After that you will need to add the requirement of this **Asset Pack** into your Package *Config.toml*:

.. code-block:: toml

    # Package Configurations
    [package]
        # Package Name
        name =                  "My Awesome Firework Package"
        # Contributors
        author =                "SyedMuhammad"
        # Version
        version =               "1.0.0"
        # Image URL
        image =                 "https://i.imgur.com/tQXi0xt.jpg"
        # Package Type: 'executable' (normal package) | 'library' (doesn't run - useful for code library)
        type =                  "executable"
        # Whether to force the Custom Map Script to do NOT load
        force_no_map_script =   false
        # Auto Destroy all entities spawned by this package when it unloads
        auto_cleanup =          true
        # Asset Packs Requirements
        assets_requirements = [
            "TS_Fireworks",
        ]


.. note:: The following code runs on Server.


.. tabs::
 .. code-tab:: lua Server

    -- For convenience, we will use the default weapons of the NanosWorldWeapons library to be our Firewoork-shooter weapon
    Package:RequirePackage("NanosWorldWeapons")

    -- Let's spawn a Glock and set it to give no damage, this also avoids it from spawning a trail particle
    local weapon = NanosWorldWeapons.Glock()
    weapon.BaseDamage = 0

    -- Let's subscribe for 'Fire' event from this weapon, this will be triggered for every fire it shoots
    weapon:Subscribe("Fire", function(weap, shooter)
        -- We get the position at the front of the weapon
        local control_rotation = shooter:GetControlRotation()
        local forward_vector = control_rotation:GetForwardVector()
        local spawn_location = shooter:GetLocation() + Vector(0, 0, 40) + forward_vector * Vector(400)

        -- We will spawn an empty/invisible Prop, to be our projectile - using our Invisible mesh 'SM_None'
        local prop = Prop(spawn_location, control_rotation, "NanosWorld::SM_None")

        -- Spawns the trail/shell particle, this particle is not auto destroyed as it should follow the projectile,
        -- this way we must destroy it manually after all
        -- The Asset Pack which we are using to get the particles contains two Shells: 'PS_TS_FireworksShell' and 'PS_TS_FireworksShell_Palm'
        -- You can use the another one to get more cool effects!
        local particle = Particle(Vector(), Rotator(), "TS_Fireworks::PS_TS_FireworksShell", false, true)

        -- Attaches the particle to the projectile prop
        particle:AttachTo(prop)

        -- Impulses the Projectile forward
        prop:AddImpulse(forward_vector * Vector(50000), true)

        -- Sets the shooter to be the Network Authority of this Projectile for the next 1000 miliseconds
        -- This way only the shooter will be reponsible to handle the physics of this object (for 1 second)
        prop:SetNetworkAuthority(shooter:GetPlayer(), 1000)

        -- Calls the client to spawn the 'Launch' sound
        Events:BroadcastRemote("SpawnFireworkSound", {particle})

        -- After 500 miliseconds, explode the firework
        Timer:SetTimeout(500, function(pr)
            -- Calls the client to spawn the 'Explosion' sound at the projectile location
            Events:BroadcastRemote("ExplodeFireworkSound", {pr:GetLocation()})

            -- Spawns the Particle Explosion.
            -- This Asset Pack also contains the following Particles, feel free to try them!
            -- 'PS_TS_Fireworks_Burst_Chrys', 'PS_TS_Fireworks_Burst_Circle', 'PS_TS_Fireworks_Burst_Palm',
            -- 'PS_TS_Fireworks_Burst_Shaped' and 'PS_TS_Fireworks_Burst_ShellsWithinShells'
            local particle_burst = Particle(pr:GetLocation(), Rotator(), "TS_Fireworks::PS_TS_Fireworks_Burst_Palm", true, true)

            -- Those particles make it available to tweak some of their properties, let's set the BlastColor to red
            particle_burst:SetParameterColor("BlastColor", Color(1, 0, 0))

            -- Those particles exposes the following parameters:
            -- 	Color: 'BurstColor', 'SparkleColor', 'FlareColor', 'TailColor'
            -- 	bool: 'BlastSmoke', 'TailSmoke'
            -- 	float: 'BurstMulti', 'SparkleMulti'

            return false
        end, {prop})

        -- After 1000 miliseconds, destroy the particle and the projectile
        Timer:SetTimeout(1000, function(pr, pa)
            pr:Destroy()
            pa:Destroy()
            return false
        end, {prop, particle})
    end)


.. tabs::
 .. code-tab:: lua Client

    -- Subscribes to spawn and attach the Firework launch sound
    Events:Subscribe("SpawnFireworkSound", function(firework)
        local sound = Sound(Vector(), "TS_Fireworks::A_Firework_Launch", false, true, SoundType.SFX, 1, 1, 400, 100000)
        sound:AttachTo(firework)
    end)

    -- Subscribes to spawn the Firework explosion sound
    Events:Subscribe("ExplodeFireworkSound", function(location)
        Sound(location, "TS_Fireworks::A_Firework_Explosion_Fizz", false, true, SoundType.SFX, 3, 1, 400, 100000)
    end)
