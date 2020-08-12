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
  :widths: 5 10 35 50

  * - 
    - **Returns**
    - **Name**
    - **Description**

  * - |client-only-label|
    - :ref:`Vector2D`
    - GetMousePosition()
    - Gives the current mouse location

  * - |client-only-label|
    - :term:`boolean`
    - IsMouseEnabled()
    - 

  * - |client-only-label|
    - :term:`boolean`
    - IsKeyDown(:term:`string` KeyName)
    - Returns if a key is being pressed

  * - |client-only-label|
    - 
    - SetMouseEnabled(:term:`boolean`)
    - Sets mouse enabled and toggles game input

  * - |client-only-label|
    - 
    - SetDiscordActivity(:term:`string` State, :term:`string` Details, :term:`string` LargeImage, :term:`string` LargeText)
    - Comunicates with Discord and sets a custom user status

  * - |client-only-label|
    - 
    - SetOutlineColor(:ref:`Color` OutlineColor)
    - Changes the Outline Color for interactable stuff. Multiply it by 5 (or more) for having a glowing effect.


Events
------

.. list-table:: 
  :widths: 5 15 30 50
   
  * - |client-only-label|
    - **Name**
    - **Parameters**
    - **Description**

  * - |client-only-label|
    - Tick
    - :term:`number` DeltaTime
    - Called Every Frame. Do not abuse.

  * - |client-only-label|
    - Console
    - :term:`string` Text
    - Called when a console command is submitted

  * - |client-only-label|
    - KeyUp
    - :term:`string` KeyName
    - A keyboard key has been released

  * - |client-only-label|
    - KeyDown
    - :term:`string` KeyName
    - A keyboard key has been pressed / is being pressed

  * - |client-only-label|
    - MouseUp
    - :term:`string` KeyName, :term:`number` MouseX, :term:`number` MouseY
    - A mouse button has been released

  * - |client-only-label|
    - MouseDown
    - :term:`string` KeyName, :term:`number` MouseX, :term:`number` MouseY
    - A mouse button has been pressed / is being pressed


Examples
--------

.. tabs::
 .. code-tab:: lua Lua

    Client:on("MouseUp", function(KeyName, MouseX, MouseY)
        if (KeyName == "LeftMouseButton")
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