.. _Client:

.. include:: ../common/common.rst

******
Client
******

.. tip:: This is a global variable named ``Client``. It is not possible to initialize or create a new instance. It's just a global variable.

.. note:: This is a Client only Namespace.

.. attention:: This page is under construction.


Functions
---------

.. list-table:: 
  :widths: 5 10 35 50

  * - 
    - **Returns**
    - **Name**
    - **Description**

  * -
    - :ref:`Vector2D`
    - GetMousePosition()
    - Gives the current mouse location

  * -
    - :term:`boolean`
    - IsMouseEnabled()
    - 

  * -
    - 
    - SetMouseEnabled(:term:`boolean`)
    - Sets mouse enabled and toggles game input


Events
------

.. note:: The following events are Global Event. This gonna be changed soon.

.. list-table:: 
  :widths: 5 15 30 50
   
  * - 
    - **Name**
    - **Parameters**
    - **Description**

  * -
    - KeyUp
    - :term:`string` KeyName
    - A keyboard key has been released

  * -
    - KeyDown
    - :term:`string` KeyName
    - A keyboard key has been pressed / is being pressed

  * -
    - MouseUp
    - :term:`string` KeyName, :term:`number` MouseX, :term:`number` MouseY
    - A mouse button has been released

  * -
    - MouseDown
    - :term:`string` KeyName, :term:`number` MouseX, :term:`number` MouseY
    - A mouse button has been pressed / is being pressed


Examples
--------

.. tabs::
 .. code-tab:: lua Lua

    on("MouseUp", function(KeyName, MouseX, MouseY)
        if (KeyName == "LeftMouseButton")
            Package:Log("Left Click pressed at X: " .. MouseX .. ", Y: " .. MouseY)
        end
    end)
