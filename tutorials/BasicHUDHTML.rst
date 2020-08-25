.. _BasicHUDHTML:


****************
Basic HUD (HTML)
****************

.. attention:: This page is under construction.


This sample code shows how to add a basic HUD using HTML+JavaScript with the new :ref:`WebUI` class.

.. note:: The following code runs on Client.

Inside your Package's Client folder, create a new folder (optional) called ``UI`` to separate the UI files from the Scripting (lua) files:

.. image:: https://i.imgur.com/cvlGFyH.png

Inside ``UI`` let's create a simple HTML file ``index.html`` which you can write your own HTML code:

.. tabs::
 .. code-tab:: HTML HTML
    
    <html>
        <head>
        </head>
        <body>
            Hello World!
        </body>
    </html>

In your Package's Index.lua, create the WebUI:

.. tabs::
 .. code-tab:: lua Lua

	-- Spawns a WebUI with the HTML file you just created
    MainHUD = WebUI("Main HUD", "file:///UI/index.html")


Result:

.. image:: https://i.imgur.com/qxY9IXq.png


Adding Events and Callbacks to communicate with your Package
------------------------------------------------------------

First, create a file ``index.js`` where we will put our JavaScript code.

.. image:: https://i.imgur.com/dSuccUd.png


And let's modify our HTML to include our ``index.js`` file:

.. tabs::
 .. code-tab:: HTML HTML
    
    <html>
        <head>
            <script src="index.js"></script>
        </head>
        <body>
            Hello World!
        </body>
    </html>


Let's add some JavaScript code (into ``index.js``) to communicate with your Package:

.. tabs::
 .. code-tab:: javascript JavaScript
    
    // Register for "MyAwesomeEvent" from Lua
    Events.on("MyAwesomeEvent", function(param1) {
        console.log("Triggered! " + param1);

        // Triggers "MyAwesomeAnswer" on Lua
        Events.Call("MyAwesomeAnswer", "Hey there!");
    })


Let's modify our Lua code to add some handles for JS events:

.. tabs::
 .. code-tab:: lua Lua

    -- Spawns a WebUI with the HTML file you just created
    MainHUD = WebUI("Main HUD", "file:///UI/index.html")

    -- When the HTML is ready, triggers an Event in there
    MainHUD:on("Ready", function()
        MainHUD:CallEvent("MyAwesomeEvent", "Hello! You are ready!")
    end)

    MainHUD:on("MyAwesomeAnswer", function(param1)
        Package:Log("Received an answer! Message: " .. param1)
    end)


Results (on console):
---------------------

- [WebUI] Triggered! Hello! You are ready!
- [Script]   Received an answer! Message: Hey there!