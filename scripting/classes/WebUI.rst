.. _WebUI:

.. include:: ../common/common.rst

*****
WebUI
*****

.. image:: https://i.imgur.com/Sh88Q32.png

Class for spawning a web browser in the screen. The browser will fill up the whole screen and is automatically resized. 

.. attention:: There is a known bug causing WebUI files (.js and .css at least) not being reloaded when modified. Restarting the game seems to solve the problem for now. The developer of this Library already knows and is working on a solution.

.. tip:: This HTML implementation is built upon same core as WebKit/Safari. And currently does not support HTML5 videos and audios.

.. note:: This is a Client only Class.


Usage
-----

.. tabs::
 .. code-tab:: lua Lua

    -- Using a local file
    my_ui = WebUI(
        "Awesome UI", -- Name
        "file:///UI/Index.html", -- Path relative to this package (Client/)
        true, -- Is Visible
    )
    
    -- Using a Web URL
    my_browser = WebUI(
        "Awesome Site", -- Name
        "http://nanos.world", -- Web's URL
        true, -- Is Visible
    )


Constructor Parameters
----------------------

.. list-table:: 
  :widths: 15 65 20

  * - **Type**
    - **Name**
    - **Default**

  * - :term:`string`
    - Name
    - 

  * - :term:`string`
    - Path (URL or ``file:///relative/to/client/folder.html``)
    - 

  * - :term:`boolean`
    - IsVisible
    - true


Functions
---------

.. list-table:: 
  :widths: 5 45 50

  * - **Returns**
    - **Name**
    - **Description**

  * - 
    - BringToFront()
    - Puts this WebUI in the front of all WebUIs

  * - 
    - CallEvent(:term:`string` EventName, any... Arguments)
    - Calls an Event on the Browser's JavaScript

  * - 
    - Destroy()
    - Destroys this Browser

  * - 
    - LoadURL(:term:`string` URL)
    - Loads a new File/URL in this Browser

  * - 
    - SetFocus()
    - Enables the focus on this browser (i.e. can receives keyboard and mouse input). Note: only one browser can have focus per time. When you click at the screen/WebUI the focus is got automatically as well

  * - 
    - SetVisible(:term:`boolean` IsVisible)
    - Toggles the visibiliy

  * - :term:`boolean`
    - IsValid()
    - Returns if this entity is Valid

  * - :term:`number`
    - GetID()
    - Gets the network ID of this entity

  * - :term:`string`
    - GetType()
    - Returns the type of this Actor


Events
------

.. list-table::
  :widths: 15 35 50
   
  * - **Name**
    - **Arguments**
    - **Description**

  * - Failed
    - :term:`number` ErrorCode, :term:`string` Message
    - When this page fails to load

  * - Ready
    - 
    - When this page is fully loaded


.. note:: It is only allowed to pass :term:`number`, :term:`string` and :term:`boolean` between WebUI and your Package.


Examples
--------

.. tabs::
 .. code-tab:: lua Lua / Package
    
    -- creates a browser
    my_ui = WebUI("Awesome UI", "file:///UI/Index.html")

    -- register for an Event from the Browser created
    my_ui:on("MyEventFromJS", function(my_text)
        Package:Log("Event received from Browser! " .. my_text)
        -- outputs "Event received from Browser! hello nanos world from JavaScript!"
    end)

    -- calls an Event in the Browser
    my_ui:CallEvent("MyEventFromLua", {"hello nanos world from lua!"})

 .. code-tab:: javascript JavaScript / (HTML - UI)

    // registers for events from Lua
    Events.on("MyEventFromLua", function(param1) {
        console.log("Event received from Lua!" + param1);
        // outputs "Event received from Lua! hello nanos world from lua!"
    })

    // calls an Event on Lua
    Events.Call("MyEventFromJS", "hello nanos world from JavaScript!");


Related Tutorials and Guides
----------------------------

.. raw:: html

	<script>
		DrawCard(
			"../../getting_started/WebUIQuickStart.html",
			"https://i.imgur.com/ReuYOH1.jpg",
			"WebUI Quick Start",
			"See how to create a basic UI using HTML, CSS and JavaScript!"
		);

		DrawCard(
			"../../tutorials/BasicHUDHTML.html",
			"https://i.imgur.com/lrYCway.png",
			"Basic HUD (HTML)",
			"See how to display a basic HUD using HTML and JavaScript!"
		);
	</script>