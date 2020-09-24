.. _ScoreHitLog:


*********************
Score, Kill & Hit Log
*********************

The following script mimics Battlefield V Score, Kill & Hit Log on the screen.

.. raw:: html

    <video controls src="https://i.imgur.com/nvjtFTN.mp4" width="100%"></video><br><br>


.. note:: The following code runs on Client.

.. note:: In this Sample we will be using `JQuery <https://jquery.com/>`_, please download `the latest version <https://code.jquery.com/jquery-3.5.1.min.js>`_ and place it inside ``UI/`` folder.

.. note:: Scull images can be downloaded `here <https://imgur.com/a/jmW3Ss3>`_ and placed inside `UI/images/` folder.


.. tabs::
 .. code-tab:: lua Index.lua

    -- Stores the UI Instance
    KillHUDUI = nil

    -- Creates a WebUI for the Inventory when the package loads
    Package:on("Load", function()
        KillHUDUI = WebUI("KillHUD", "file:///UI/index.html")
    end)

    -- Destroys the WebUI when the package unloads
    Package:on("Unload", function()
        KillHUDUI:Destroy()
    end)

    -- When a character takes damage, checks if I was the causer and displays it on the screen
    Character:on("TakeDamage", function(charact, damage, bone, type, from, instigator)
        -- If I was not the causer, just ignore it
        if (instigator ~= NanosWorld:GetLocalPlayer()) then return end

        -- If he's dead, just ignore it
        if (charact:GetHealth() == 0) then return end

        -- Stores who was the last damager (me)
        charact:SetValue("LastDamager", instigator)

        -- Stores which bone was the last damaged (to check if he dies from headshop)
        charact:SetValue("LastDamagerBone", bone)

        KillHUDUI:CallEvent("AddScore", {damage, "enemy_hit", "ENEMY HIT", true})
    end)

    -- When a character dies, check if I was the last one to do damage on him and displays on the screen as a kill
    Character:on("Death", function(charact)
        if (charact:GetValue("LastDamager") ~= NanosWorld:GetLocalPlayer()) then return end

        local player = charact:GetPlayer()

        local name = "BOT"

        -- Attempts to get the player's name (if possessed by one)
        if (player) then
            name = player:GetName()
        end

        -- Gets the lat hit bone and check if it was a Headshot
        local last_bone = charact:GetValue("LastDamagerBone")
        local is_headshot = last_bone == "head" or last_bone == "neck_01"

        KillHUDUI:CallEvent("AddKill", {name, is_headshot})
    end)


 .. code-tab:: HTML UI/index.html
        
    <html>
        <head>
            <meta charset="UTF-8">
            <script src="jquery-3.5.1.min.js"></script>
            <script src="index.js"></script>
            <link href='http://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>
            <link rel="stylesheet" href="style.css">
        </head>
        <body>
            <div id="kill_hud">
                <div id="death_counts">
                    <!-- <span class="death_count death_count_white"></span> -->
                </div>
                <div id="death_name"></div>
                <div id="total_score"></div>
                <div id="score_feed">
                    <!-- <span class="score_feed_item enemy_hit">ENEMY HIT +<span class="score_value_item">100</span></span> -->
                    <!-- <span class="score_feed_item">DEFENSIVE KILL +100</span> -->
                </div>
            </div>
        </body>
    </html>


 .. code-tab:: JavaScript UI/index.js
        
    var timeout_hud;
    var interval_score;
    var total_score = 0;
    var total_score_current = 0;

    Events.on("AddScore", function(score, type_id, label, use_current) {
        total_score += score;

        // Displays all DOM elements
        DisplayHUD();

        // If should increment current score item instead of creating a new one
        if (use_current)
        {
            // Try to find if there is already a score item
            let score_feed_item_value = $(`.${type_id} .score_value_item`);

            // If a score item is found, then update it and return, otherwise it will keep on and will create a new one
            if (score_feed_item_value.length)
            {
                score_feed_item_value.html(parseInt(score_feed_item_value.html()) + score);
                return;
            }
        }

        // Create a new score item and prepend it on the list
        let score_feed_item = $(`<span class='score_feed_item ${type_id}'>${label} +<span class='score_value_item'>${score}</span></span>`);
        $("#score_feed").prepend(score_feed_item);
    });

    Events.on("AddKill", function(name, is_headshot) {
        // Adds 20 score for killing
        total_score += 20;

        // Displays the killed name
        $("#death_name").html(`${name} +20`);

        // If it was headshot, displays the red skull, otherwise displays the white
        let death_count_white = $(`<span class='death_count ${is_headshot ? "death_count_red" : "death_count_white"}'>`);
        $("#death_counts").prepend(death_count_white);

        // Displays all DOM elements
        DisplayHUD();
    });

    // Resets all animations and displays the HUD, also resets the timers and creates a new one to hide it in 4 seconds
    function DisplayHUD() {
        $("#death_counts").stop(true, true).show();
        $("#death_name").stop(true, true).show();
        $("#score_feed").stop(true, true).show();
        $("#total_score").stop(true, true).show();

        if (timeout_hud)
            clearTimeout(timeout_hud);

        timeout_hud = setTimeout(ResetHUD, 4000);

        if (interval_score)
            clearInterval(interval_score);

        interval_score = setInterval(UpdateHUD, 50);
    }

    // Resets the HUD, i.e. hides everything with animations and resets all data
    function ResetHUD() {
        $("#death_counts").fadeOut(500, function() {
            $("#death_counts").html("");
        });

        $("#death_name").fadeOut(500, function() {
            $("#death_name").html("");
        
            $("#score_feed").fadeOut(500, function() { $("#score_feed").html(""); });
            $("#total_score").fadeOut(500);
        });

        clearInterval(interval_score);
        interval_score = null;

        timeout_hud = null;
        total_score = 0;
        total_score_current = 0;
    }

    // Updates the HUD, i.e. updates the current displayed score in the screen
    function UpdateHUD() {
        let interp_pace = Math.max((total_score - total_score_current) / 2, 1);

        total_score_current = parseInt(Math.min(total_score, total_score_current + interp_pace));
        $("#total_score").html(total_score_current);
    }


 .. code-tab:: CSS UI/style.css

    body {
        font-family: Roboto, sans-serif;
        margin: 0px;
        padding: 0px;
        background-size: 100%;
    }

    #kill_hud {
        width: 300px;
        height: 200px;
        position: fixed;
        left: 50%;
        margin-left: -150px;
        margin-bottom: 100px;
        bottom: 0;
        text-align: center;
        color: white;
        text-shadow: 1px 1px 1px #00000040;
    }

    #death_name {
        font-size: 18px;
        position: absolute;
        width: 100%;
        margin-top: 5px;
    }

    #total_score {
        font-size: 32px;
        position: absolute;
        width: 100%;
        margin-top: 30px;
    }

    #score_feed {
        font-size: 15px;
        max-height: 63px;
        overflow: hidden;
        position: absolute;
        width: 100%;
        margin-top: 70px;
    }

    .score_feed_item {
        display: block;
        margin: 3px;
    }

    #death_counts {
        height: 30px;
    }

    .death_count {
        display: inline-block;
        width: 25px;
        height: 30px;
        background-size: 100% auto;
        background-repeat: no-repeat;
        margin: 0px 3px;
    }

    .death_count_white {
        background-image: url("images/skull_white.png");
    }

    .death_count_red {
        background-image: url("images/skull_red.png");
    }