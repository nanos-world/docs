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
    - CallLevelBlueprintEvent(:term:`string` EventName)
    - Calls a Level Blueprint custom event (which can be added when creating levels through Unreal Engine). Parameters can be concatened to EventName

  * - 
    - DrawDebugLine(:ref:`Vector` Start, :ref:`Vector` End, :ref:`Color` Color = (1, 0, 0), :term:`number` Duration = 5, :term:`number` Thickness = 0)
    - Draws a Debug Line in the World

  * - 
    - DrawDebugPoint(:ref:`Vector` Start, :ref:`Color` Color = (1, 0, 0), :term:`number` Duration = 5, :term:`number` Thickness = 0)
    - Draws a Debug Point in the World

  * - 
    - DrawDebugSphere(:ref:`Vector` Start, :term:`number` Radius, :term:`number` Segments, :ref:`Color` Color = (1, 0, 0), :term:`number` Duration = 5, :term:`number` Thickness = 0)
    - Draws a Debug Line in the World

  * - 
    - SendChatMessage(:term:`string` Message)
    - Sends a chat message which will display local only

  * - 
    - SetChatConfiguration(:ref:`Vector2D` Location = (-25, 0), :ref:`Vector2D` Size = (600, 250), :ref:`Vector2D` AchorsMin = (1, 0.5), :ref:`Vector2D` AchorsMax = (1, 0.5), :ref:`Vector2D` Alignment = (1, 0.5), :term:`boolean` bJustify = false (false = Left, true = Right))
    - Configure the Chat. Anchors = (1, 1) means the location will be relative to bottom right and (0, 0) to top left.

  * - 
    - SetCrosshairEnabled(:term:`boolean`)
    - Enables/Disables the default Crosshair

  * - 
    - SetDiscordActivity(:term:`string` State, :term:`string` Details, :term:`string` LargeImage, :term:`string` LargeText)
    - Comunicates with Discord and sets a custom user status

  * - 
    - SetInputEnabled(:term:`boolean` EnableInput)
    - Toggles Local Player input

  * - 
    - SetMouseEnabled(:term:`boolean`)
    - Displays/Hides Mouse Cursor

  * - 
    - SetOutlineColor(:ref:`Color` OutlineColor)
    - Changes the Outline Color for interactable stuff. Multiply it by 5 (or more) for having a glowing effect.

  * - 
    - SetHighlightColor(:ref:`Color` HighlightColor)
    - Changes the Highlight Color for highlighted actors. Multiply it by 5 (or more) for having a glowing effect.

  * - 
    - Spectate(:ref:`Player` Player)
    - Spectates a Player. The local camera will follow the Player's camera.

  * - 
    - Unspectate()
    - Leaves the Spectator's State.

  * - :term:`table`
    - Trace(:ref:`Vector` Start, :ref:`Vector` End, :term:`boolean` DrawDebug = false)
    - Trace a ray against the world and returns a table with the first blocking hit information ``{"Success", "Location", "Normal", "Actor"}``. Currently only supports trace for :ref:`Character`, :ref:`Vehicle` and :ref:`Prop`, more can be requested.

  * - :ref:`Vector2D`
    - GetMousePosition()
    - Gets the current mouse screen location

  * - :term:`boolean`
    - IsKeyDown(:term:`string` KeyName)
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
    - :term:`string` Text
    - Called when a chat text is submitted (by LocalPlayer) - return false to do not send the message

  * - Console
    - :term:`string` Text
    - Called when a console command is submitted

  * - KeyDown
    - :term:`string` KeyName
    - A keyboard key has been pressed / is being pressed. Return false to block it

  * - KeyUp
    - :term:`string` KeyName
    - A keyboard key has been released. Return false to block it

  * - MouseDown
    - :term:`string` KeyName, :term:`number` MouseX, :term:`number` MouseY. Return false to block it
    - A mouse button has been pressed / is being pressed

  * - MouseUp
    - :term:`string` KeyName, :term:`number` MouseX, :term:`number` MouseY. Return false to block it
    - A mouse button has been released

  * - Tick
    - :term:`number` DeltaTime
    - Called Every Frame. Do not abuse.


Examples
--------

.. tabs::
 .. code-tab:: lua Lua

    Client:on("MouseUp", function(KeyName, MouseX, MouseY)
        if (KeyName == "LeftMouseButton") then
            Package:Log("Left Click pressed at X: " .. MouseX .. ", Y: " .. MouseY)
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
