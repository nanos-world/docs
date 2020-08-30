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
    - SetDiscordActivity(:term:`string` State, :term:`string` Details, :term:`string` LargeImage, :term:`string` LargeText)
    - Comunicates with Discord and sets a custom user status

  * - 
    - SetMouseEnabled(:term:`boolean`)
    - Sets mouse enabled and toggles game input

  * - 
    - SetOutlineColor(:ref:`Color` OutlineColor)
    - Changes the Outline Color for interactable stuff. Multiply it by 5 (or more) for having a glowing effect.

  * - :ref:`Vector2D`
    - GetMousePosition()
    - Gives the current mouse location

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
    - Called when a chat text is submitted (by LocalPlayer)

  * - Console
    - :term:`string` Text
    - Called when a console command is submitted

  * - KeyDown
    - :term:`string` KeyName
    - A keyboard key has been pressed / is being pressed

  * - KeyUp
    - :term:`string` KeyName
    - A keyboard key has been released

  * - MouseDown
    - :term:`string` KeyName, :term:`number` MouseX, :term:`number` MouseY
    - A mouse button has been pressed / is being pressed

  * - MouseUp
    - :term:`string` KeyName, :term:`number` MouseX, :term:`number` MouseY
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
