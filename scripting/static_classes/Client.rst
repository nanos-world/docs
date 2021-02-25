.. _Client:

.. include:: ../common/common.rst

******
Client
******

.. tip:: This is a Static Class named ``Client``. You can access it's methods directly with ``:``. It is not possible to initialize or create new instances.

.. note:: This is a Client only Class.


Functions
---------

.. list-table:: 
  :widths: 10 40 50

  * - **Returns**
    - **Name**
    - **Description**

  * - 
    - CallLevelBlueprintEvent(:term:`string` event_name)
    - Calls a Level Blueprint custom event (which can be added when creating levels through Unreal Engine). Parameters can be concatened to event_name

  * - 
    - DrawDebugLine(:ref:`Vector` start, :ref:`Vector` end, :ref:`Color` color = (1, 0, 0), :term:`number` duration = 5, :term:`number` thickness = 0)
    - Draws a Debug Line in the World

  * - 
    - DrawDebugPoint(:ref:`Vector` start, :ref:`Color` color = (1, 0, 0), :term:`number` duration = 5, :term:`number` thickness = 0)
    - Draws a Debug Point in the World

  * - 
    - DrawDebugSphere(:ref:`Vector` start, :term:`number` radius, :term:`number` segments, :ref:`Color` color = (1, 0, 0), :term:`number` duration = 5, :term:`number` thickness = 0)
    - Draws a Debug Line in the World

  * - 
    - SendChatMessage(:term:`string` Message)
    - Sends a chat message which will display local only

  * - 
    - SetChatConfiguration(:ref:`Vector2D` location = (-25, 0), :ref:`Vector2D` size = (600, 250), :ref:`Vector2D` anchors_min = (1, 0.5), :ref:`Vector2D` anchors_max = (1, 0.5), :ref:`Vector2D` alignment = (1, 0.5), :term:`boolean` justify = false (false = Left, true = Right))
    - Configure the Chat. Anchors = (1, 1) means the location will be relative to bottom right and (0, 0) to top left.

  * - 
    - SetCrosshairEnabled(:term:`boolean`)
    - Enables/Disables the default Crosshair

  * - 
    - SetDiscordActivity(:term:`string` state, :term:`string` details, :term:`string` large_image, :term:`string` large_text)
    - Comunicates with Discord and sets a custom user status

  * - 
    - SetInputEnabled(:term:`boolean` enable_input)
    - Toggles Local Player input

  * - 
    - SetMouseEnabled(:term:`boolean`)
    - Displays/Hides Mouse Cursor

  * - 
    - SetOutlineColor(:ref:`Color` outline_color)
    - Changes the Outline Color for interactable stuff. Multiply it by 5 (or more) for having a glowing effect.

  * - 
    - SetHighlightColor(:ref:`Color` highlight_color)
    - Changes the Highlight Color for highlighted actors. Multiply it by 5 (or more) for having a glowing effect.

  * - 
    - SetValue(:term:`string` key, any value)
    - Sets a global value in the Client, which can be accessed from anywhere (client side)

  * - 
    - Spectate(:ref:`Player` player)
    - Spectates a Player. The local camera will follow the Player's camera.

  * - 
    - Unspectate()
    - Leaves the Spectator's State.

  * - :term:`table`
    - Trace(:ref:`Vector` start, :ref:`Vector` end, :term:`boolean` draw_debug = false)
    - Trace a ray against the world and returns a table with the first blocking hit information ``{"Success", "Location", "Normal", "Actor"}``. Currently only supports trace for :ref:`Character`, :ref:`Vehicle` and :ref:`Prop`, more can be requested.

  * - :ref:`Vector2D`
    - GetMousePosition()
    - Gets the current mouse screen location

  * - any
    - GetValue(:term:`string` key)
    - Gets a value given a key

  * - :term:`boolean`
    - IsKeyDown(:term:`string` key_name)
    - Returns if a key is being pressed

  * - :term:`boolean`
    - IsMouseEnabled()
    - 


Events
------

.. list-table:: 
  :widths: 15 35 50
   
  * - **Name**
    - **Parameters**
    - **Description**

  * - Chat
    - :term:`string` text
    - Called when a chat text is submitted (by LocalPlayer) - Return false to do not send the message

  * - Console
    - :term:`string` text
    - Called when a console command is submitted

  * - KeyDown
    - :term:`string` key_name
    - A keyboard key has been pressed / is being pressed - Return false to block it

  * - KeyUp
    - :term:`string` key_name
    - A keyboard key has been released - Return false to block it

  * - MouseDown
    - :term:`string` key_name, |br| :term:`number` mouse_x, |br| :term:`number` mouse_y
    - A mouse button has been pressed / is being pressed - Return false to block it

  * - MouseUp
    - :term:`string` key_name, |br| :term:`number` mouse_x, |br| :term:`number` mouse_y
    - A mouse button has been released - Return false to block it

  * - Tick
    - :term:`number` delta_time
    - Called Every Frame. Do not abuse.


Examples
--------

.. tabs::
 .. code-tab:: lua Lua

    Client:Subscribe("MouseUp", function(key_name, mouse_x, mouse_y)
        if (key_name == "LeftMouseButton") then
            Package:Log("Left Click pressed at X: " .. mouse_x .. ", Y: " .. mouse_y)
        end
    end)


Available Discord Images
------------------------

Yeah naming is trash

.. list-table:: 
  :widths: 100
   
  * - **Name**

  * - screenshot_137
  * - screenshot_140
  * - screenshot_141
  * - screenshot_146
  * - screenshot_148
  * - screenshot_152
  * - screenshot_152
  * - screenshot_156
  * - screenshot_157
  * - screenshot_157
  * - screenshot_159
  * - screenshot_159
  * - screenshot_164
  * - screenshot_168
  * - screenshot_173
  * - screenshot_173
  * - screenshot_175
  * - screenshot_191
  * - screenshot_191
  * - screenshot_195
