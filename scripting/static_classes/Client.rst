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
    - Calls a Level Blueprint custom event (which can be added when creating levels through Unreal Engine). Parameters can be concatened to event_name like ``"MyEventName 123, 'MyParameter2', 456"``

  * - 
    - DrawDebugLine( |br-p| :ref:`Vector` start, |br-p| :ref:`Vector` end, |br-p| :ref:`Color` color = (1, 0, 0), |br-p| :term:`number` duration = 5, |br-p| :term:`number` thickness = 0 |br| )
    - Draws a Debug Line in the World

  * - 
    - DrawDebugPoint( |br-p| :ref:`Vector` start, |br-p| :ref:`Color` color = (1, 0, 0), |br-p| :term:`number` duration = 5, |br-p| :term:`number` thickness = 0 |br| )
    - Draws a Debug Point in the World

  * - 
    - DrawDebugSphere( |br-p| :ref:`Vector` start, |br-p| :term:`number` radius, |br-p| :term:`number` segments, |br-p| :ref:`Color` color = (1, 0, 0), |br-p| :term:`number` duration = 5, |br-p| :term:`number` thickness = 0 |br| )
    - Draws a Debug Line in the World

  * - 
    - InitializeDiscord(:term:`number` client_id)
    - Initializes the Discord Integration with your custom client_id

  * - 
    - SendChatMessage(:term:`string` Message)
    - Sends a chat message which will display local only

  * - 
    - SetChatConfiguration( |br-p| :ref:`Vector2D` location = (-25, 0), |br-p|  :ref:`Vector2D` size = (600, 250), |br-p| :ref:`Vector2D` anchors_min = (1, 0.5), |br-p| :ref:`Vector2D` anchors_max = (1, 0.5), |br-p| :ref:`Vector2D` alignment = (1, 0.5), |br-p| :term:`boolean` justify = false (false = Left, true = Right), |br-p| :term:`boolean` show_scrollbar = true |br| )
    - Configure the Chat. Anchors = (1, 1) means the location will be relative to bottom right and (0, 0) to top left.

  * - 
    - SetChatVisibility(:term:`boolean`)
    - Set if the Chat is visible or not

  * - 
    - SetCrosshairEnabled(:term:`boolean`)
    - Enables/Disables the default Crosshair

  * - 
    - SetHardwareCursor( |br-p| :term:`CursorType` cursor_shape, |br-p| :term:`string` cursor_path, |br-p| :ref:`Vector2D` hotspot = (0, 0) |br| )
    - Loads or sets a hardware cursor from the content directory in the game.

  * - 
    - SetDiscordActivity( |br-p| :term:`string` state, |br-p| :term:`string` details, |br-p| :term:`string` large_image, |br-p| :term:`string` large_text |br| )
    - Communicates with Discord and sets a custom user status

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
    - SetHighlightColor( |br-p| :ref:`Color` highlight_color, |br-p| :term:`number` Index |br| )
    - Changes the Highlight Color for highlighted actors at a specific Index. Multiply it by 5 (or more) for having a glowing effect.

  * - 
    - SetValue(:term:`string` key, :term:`any` value)
    - Sets a global value in the Client, which can be accessed from anywhere (client side)

  * - 
    - Spectate(:ref:`Player` player)
    - Spectates a Player. The local camera will follow the Player's camera.

  * - 
    - Subscribe(:term:`string` event_name, :term:`function`)
    - Subscribes for an Event 

  * - 
    - Unsubscribe(:term:`string` event_name, :term:`function` = nil)
    - Unsubscribes from all subscribed Events in this Class and in this Package, optionally passing the function to unsubscribe only that callback

  * - 
    - Unspectate()
    - Leaves the Spectator's State.

  * - :term:`table`
    - Trace( |br-p| :ref:`Vector` start, |br-p| :ref:`Vector` end, |br-p| :term:`CollisionChannel` collision_channel = WorldStatic, |br-p| :term:`boolean` trace_complex = false, |br-p| :term:`boolean` return_entity = false, |br-p| :term:`boolean` return_physical_material = false, |br-p| :term:`boolean` draw_debug = false |br| )
    - Trace a ray against the world and returns a table with the first blocking hit information. Currently only supports trace for :ref:`Character`, :ref:`Vehicle`, :ref:`StaticMesh`, :ref:`Weapon`, :ref:`Item`, :ref:`Grenade`, :ref:`StaticMesh` and :ref:`Prop`, more can be requested. |br| |br| Returned Table: ``{"Success", "Location", "Normal", "Entity", "BoneName",`` ``"ActorName", "ComponentName", "SurfaceType"}``

  * - :ref:`Vector`
    - GetRandomReachablePointInRadius( |br-p| :ref:`Vector` origin, |br-p| :term:`number` radius |br| )
    - Finds random, reachable point in navigable space restricted to radius around origin (only if map has a NavMesh)

  * - :ref:`Vector2D`
    - GetMousePosition()
    - Gets the current mouse screen location

  * - :term:`table`
    - GetPackages()
    - Returns a list of Packages folder names loaded and running in the client

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
    - **Arguments**
    - **Description**

  * - Chat
    - :term:`string` text
    - Called when a chat text is submitted (by LocalPlayer) - Return false to do not send the message

  * - ChatEntry
    - :term:`string` text, |br| :ref:`Player` sender
    - Called when a Chat Entry is received, this is also triggered when ``SendChatMessage`` is called

  * - Console
    - :term:`string` text
    - Called when a console command is submitted

  * - KeyDown
    - :term:`string` key_name
    - A keyboard key is being pressed - Return false to block it

  * - KeyPress
    - :term:`string` key_name
    - A keyboard key has been pressed - Return false to block it

  * - KeyUp
    - :term:`string` key_name
    - A keyboard key has been released - Return false to block it

  * - LogEntry
    - :term:`string` text, :term:`LogType` type
    - Called when a Client log is received

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

.. raw:: html

	<script>
		DrawCard(
			"../../tutorials/Trace.html",
			"https://i.imgur.com/4LeSR2G.png",
			"Trace / Raycasting",
			"Check out how to get World information with Traces!"
		);

		DrawCard(
			"../../tutorials/XRay.html",
			"https://i.imgur.com/OuQHLIJ.jpeg",
			"X-Ray",
			"Check how to Highlight objects through walls."
		);
	</script>


.. tabs::
 .. code-tab:: lua Lua

    Client:Subscribe("MouseUp", function(key_name, mouse_x, mouse_y)
        if (key_name == "LeftMouseButton") then
            Package:Log("Left Click pressed at X: " .. mouse_x .. ", Y: " .. mouse_y)
        end
    end)


Key Names
---------

List of all keys names returned in Key/Mouse events.

Function Keys
~~~~~~~~~~~~~

.. list-table:: 
  :widths: 20 80

  * - **Key Name**
    - **Description**

  * - **F1**
    - Function one

  * - **F2**
    - Function two

  * - **F3**
    - Function three

  * - **F4**
    - Function four

  * - **F5**
    - Function five

  * - **F6**
    - Function six
  
  * - **F7**
    - Function seven
  
  * - **F8**
    - Function eight
  
  * - **F9**
    - Function nine
  
  * - **F10**
    - Function ten
  
  * - **F11**
    - Function eleven
  
  * - **F12**
    - Function twelve


Alphanumerical keys
~~~~~~~~~~~~~~~~~~~

.. list-table:: 
  :widths: 20 80

  * - **Key Name**
    - **Description**

  * - **A**
    - Letter A

  * - **B**
    - Letter B

  * - **C**
    - Letter C

  * - **D**
    - Letter D

  * - **E**
    - Letter E

  * - **F**
    - Letter F

  * - **G**
    - Letter G

  * - **H**
    - Letter H

  * - **I**
    - Letter I

  * - **J**
    - Letter J

  * - **K**
    - Letter K

  * - **L**
    - Letter L

  * - **M**
    - Letter M

  * - **N**
    - Letter N

  * - **O**
    - Letter O

  * - **P**
    - Letter P

  * - **Q**
    - Letter Q

  * - **R**
    - Letter R

  * - **S**
    - Letter S

  * - **T**
    - Letter T

  * - **U**
    - Letter U

  * - **V**
    - Letter V

  * - **W**
    - Letter W

  * - **X**
    - Letter X

  * - **Y**
    - Letter Y

  * - **Z**
    - Letter Z


Special keys
~~~~~~~~~~~~

.. list-table:: 
  :widths: 20 80

  * - **Key Name**
    - **Description**

  * - **Escape**
    - Escape

  * - **Tab**
    - Tab

  * - **Tilde**
    - ~

  * - **ScrollLock**
    - Scroll lock

  * - **Pause**
    - Pause

  * - **One**
    - One

  * - **Two**
    - Two

  * - **Three**
    - Three

  * - **Four**
    - Four

  * - **Five**
    - Five

  * - **Six**
    - Six

  * - **Seven**
    - Seven

  * - **Eight**
    - Eight

  * - **Nine**
    - Nine

  * - **zero**
    - Zero

  * - **Underscore**
    - _

  * - **Equals**
    - =

  * - **Backslash**
    - \

  * - **LeftBracket**
    - [
  
  * - **RightBracket**
    - ]

  * - **Enter**
    - Enter or Numpad enter

  * - **CapsLock**
    - Caps lock

  * - **Semicolon**
    - ;

  * - **Quote**
    - '

  * - **LeftShift**
    - Left shift

  * - **Comma**
    - ,

  * - **Period**
    - .

  * - **Slash**
    - /

  * - **RightShift**
    - Right Shif

  * - **LeftControl**
    - Left control

  * - **LeftAlt**
    - Left alt

  * - **SpaceBar**
    - Space bar

  * - **RightAlt**
    - Right alt

  * - **RightControl**
    - Right control

  * - **Left**
    - Left

  * - **Up**
    - Up

  * - **Down**
    - Down

  * - **Right**
    - Right

  * - **Home**
    - Home

  * - **End**
    - End

  * - **Insert**
    - Insert

  * - **PageUp**
    - Page up

  * - **Delete**
    - Delete

  * - **PageDown**
    - Page down

  * - **NumLock**
    - Num lock

  * - **Divide**
    - Numpad /

  * - **Multiply**
    - Numpad *

  * - **Subtract**
    - Numpad -

  * - **Add**
    - Numpad +

  * - **PageDown**
    - Page down

  * - **NumPadOne**
    - Numpad one

  * - **NumPadTwo**
    - Numpad two

  * - **NumPadThree**
    - Numpad three

  * - **NumPadFour**
    - Numpad four

  * - **NumPadFive**
    - Numpad five

  * - **NumPadSix**
    - Numpad six

  * - **NumPadSeven**
    - Numpad seven

  * - **NumPadEight**
    - Numpad eight

  * - **NumPadNine**
    - Numpad nine

  * - **NumPadZero**
    - Numpad zero

  * - **Decimal**
    - Numpad decimal


Mouse
~~~~~

.. list-table:: 
  :widths: 20 80

  * - **Key Name**
    - **Description**

  * - **LeftMouseButton**
    - Left mouse button

  * - **RightMouseButton**
    - Right mouse button

  * - **ThumbMouseButton**
    - Primary mouse thumb button

  * - **ThumbMouseButton2**
    - Secondary mouse thumb button

  * - **MouseScrollUp**
    - Mouse wheel scrolling up

  * - **MouseScrollDown**
    - Mouse wheel scrolling down

  * - **MouseX**
    - Mouse movement on the X axis

  * - **MouseY**
    - Mouse movement on the Y axis
