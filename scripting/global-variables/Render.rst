.. _Render:

.. include:: ../common/common.rst

******
Render
******

.. tip:: This is a namespace named ``Render``. It is not possible to initialize or create Instances. It's just a name with Functions and Events which are accessed with ``.`` instead of ``:``. This is going to be changed soon ;).

.. note:: This is a Client only Namespace.

.. attention:: This page is under construction.

.. attention:: The usage of this feature is very unstable and will probably cause crashes and memory leaks. This will soon receive a update adding more functions and optimizing this ones.

.. tip:: The following functions have an GroupID parameter, which you can group related Canvas Items with an ID to facilitate the cleanup of them, or can give them Unique IDs. These return an ItemID value, which can be used for updating specific Canvas Items afterwards.


Functions
---------

.. list-table:: 
  :widths: 17 43 40

  * - **Returns**
    - **Name**
    - **Description**

  * - :term:`number` ItemID
    - AddLine(:term:`number` GroupID, :ref:`Vector2D` StartPosition, :ref:`Vector2D` EndPosition, :term:`number` Thickness, :ref:`Color` Color)
    - Draws a Line (doesn't support opacity)

  * - :term:`number` ItemID
    - AddBox(:term:`number` GroupID, :ref:`Vector2D` StartPosition, :ref:`Vector2D` EndPosition, :term:`number` Thickness, :ref:`Color` Color)
    - Draws a Box

  * - :term:`number` ItemID
    - AddTile(:term:`number` GroupID, :ref:`Vector2D` Position, :ref:`Vector2D` Size, :ref:`Color` Color)
    - Draws a Tile (filled)

  * - :term:`number` ItemID
    - AddPolygon(:term:`number` GroupID, :ref:`Vector2D` ScreenPosition, :ref:`Vector2D` Radius, :term:`number` NumberOfSides, :ref:`Color` Color)
    - Draws a Polygon

  * - :term:`number` ItemID
    - AddText(:term:`number` GroupID, :term:`string` Text, :ref:`Vector2D` Position, :term:`number` FontType, :term:`number` FontSize, :ref:`Color` TextColor, :term:`number` Kerning, :term:`boolean` bCenterX, :term:`boolean` bCenterY, :term:`boolean` EnableShadow, :ref:`Vector2D` ShadowOffset, :ref:`Color` ShadowColor, :term:`boolean` EnableOutline, :ref:`Color` OutlineColor)
    - Draws a Text with optionals Shadow and Outline

  * - :ref:`Vector2D`
    - StrLen(:term:`string` Text, :term:`number` FontType, :term:`number`, FontSize)
    - Returns the Length of Text in Pixels

  * - :ref:`Vector`
    - Project(:ref:`Vector` Location3D)
    - Transforms a 3D world-space vector into 2D screen coordinates.

  * - 
    - ClearItems(:term:`number` GroupID)
    - Remove all drawing of using that specific GroupID

  * - 
    - UpdateItemText(:term:`number` GroupID, :term:`number` ItemID, :term:`string` NewText)
    - Updates a specific Canvas Text giving it's GroupID and ItemID

  * - 
    - UpdateItemPosition(:term:`number` GroupID, :term:`number` ItemID, :ref:`Vector2D` NewPosition)
    - Updates a specific Canvas's position giving it's GroupID and ItemID

  * - :ref:`Vector2D`
    - GetViewportSize()
    - Returns the size of viewport (how much screen space the game window occupies)


Events
------

.. note:: The following events are Global Events. This gonna be changed soon.

.. list-table:: 
  :widths: 5 15 30 50
   
  * - 
    - **Name**
    - **Parameters**
    - **Description**

  * -
    - ViewportResized
    - :ref:`Vector2D` NewSize
    - Called when the screen is resized


Examples
--------

This uses a Global Event, this will be changed soon.

.. tabs::
 .. code-tab:: lua Lua
    bEnableShadow = true
    text = "Hello" -- Text to render on the Canvas.
    location = Vector2D(123, 321) -- Screen space position to render the text.
    fontType = 0 -- Roboto
    fontSize = 32 -- Size of the font
    textColor = Color(1, 0, 0, 1) -- Color to render the text.
    kerning = 0 -- Horizontal spacing adjustment to modify the spacing between each letter.
    shadowColor = Color(1, 1, 1, 1) -- Color to render the shadow of the text.
    shadowOffset = Vector2D(1, 1) -- Pixel offset relative to the screen space position to render the shadow of the text.
    bCenterX = false -- If true, then interpret the screen space position X coordinate as the center of the rendered text.
    bCenterY = false -- If true, then interpret the screen space position Y coordinate as the center of the rendered text.
    bOutlined = false -- If true, then the text should be rendered with an outline.
    bEnableShadow = true -- If true, then shadow will be enabled
    outlineColor = Color(1, 1, 1, 1) -- Color to render the outline for the text.
    
    Render.AddText(0, text, location, fontType, fontSize, textColor, kerning, bCenterX, bCenterY, bEnableShadow, shadowOffset, shadowColor, bOutlined, outlineColor)


Available Fonts
---------------

.. list-table:: 
  :widths: 5 95
   
  * - **ID**
    - **Name**

  * - 0
    - Roboto
