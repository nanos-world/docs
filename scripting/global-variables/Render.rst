.. _Render:

.. include:: ../common/common.rst

******
Render
******

.. tip:: This is a namespace named ``Render``. It is not possible to initialize or create Instances. It's just a name with Functions and Events which are accessed with ``.`` instead of ``:``. This is going to be changed soon ;).

.. note:: This is a Client only Namespace.

.. attention:: This page is under construction.

.. attention:: The usage of this feature is very unstable and will probably cause crashes and memory leaks. This will soon receive a update adding more functions and optimizing this ones.


Functions
---------

.. list-table:: 
  :widths: 5 10 35 50

  * - 
    - **Returns**
    - **Name**
    - **Description**

  * - |client-only-label|
    - 
    - DrawLine(:ref:`Vector2D` ScreenPosition, :ref:`Vector2D` ScreenSize, :term:`number` Thick, :ref:`Color` Color)
    - Draws a Line

  * - |client-only-label|
    -
    - DrawBox(:ref:`Vector2D` ScreenPosition, :ref:`Vector2D` ScreenSize, :term:`number` Thick, :ref:`Color` Color)
    - Draws a Box

  * - |client-only-label|
    -
    - DrawText(:term:`string` Text, :ref:`Vector2D` Position, :ref:`Vector2D` Scale, :ref:`Color` TextColor, :term:`number` Kerning, :ref:`Color` ShadowColor, :ref:`Vector2D` ShadowOffset, :term:`boolean` bCenterX, :term:`boolean` bCenterY, :term:`boolean` bOutlined, :ref:`Color` OutlineColor)
    - Draws a Text. Please store Vector2D and Color outside DrawHUD and do not instantiate it inside the DrawHUD, as it will cause 60 new instantiations per second which will cause performance problems.


Events
------

.. list-table:: 
  :widths: 5 15 30 50
   
  * - 
    - **Name**
    - **Parameters**
    - **Description**

  * - |client-only-label|
    - .on("DrawHUD")
    - 
    - All Draw functions must be called inside this event. This is a Global Event, check Examples to see how it works. Calls every frame, currently we may have performance problems which will be fixed soon, use wisely. Avoid too much calculations and instantiation of Vectors inside. Very unstable.


Examples
--------

This uses a Global Event, this will be changed soon.

.. tabs::
 .. code-tab:: lua Lua
    
	text = "Hello" -- Text to render on the Canvas.
	location = Vector2D(123, 321) -- Screen space position to render the text.
	scale = Vector2D(1, 1) -- Scale of the text.
	textColor = Color(1, 0, 0, 1) -- Color to render the text.
	kerning = 0 -- Horizontal spacing adjustment to modify the spacing between each letter.
	shadowColor = Color(1, 1, 1, 1) -- Color to render the shadow of the text.
	shadowOffset = Vector2D(1, 1) -- Pixel offset relative to the screen space position to render the shadow of the text.
	bCenterX = false -- If true, then interpret the screen space position X coordinate as the center of the rendered text.
	bCenterY = false -- If true, then interpret the screen space position Y coordinate as the center of the rendered text.
	bOutlined = false -- If true, then the text should be rendered with an outline.
	outlineColor = Color(1, 1, 1, 1) -- Color to render the outline for the text.
    
    on("DrawHUD", function()
       Render.DrawText(text, location, scale, textColor, kerning, shadowColor, shadowOffset, bCenterX, bCenterY, bOutlined, outlineColor)
    end)