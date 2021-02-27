.. _Render:

.. include:: ../common/common.rst

******
Render
******

.. warning:: If you are looking for how to make UIs, we recommend taking a look at :ref:`WebUI` for a more robust and optimal system.

.. tip:: This is a Static Class named ``Render``. You can access it's methods directly with ``:``. It is not possible to initialize or create new instances.

.. note:: This is a Client only Class.

.. tip:: The following functions have an group_id parameter, which you can group related Canvas Items with an ID to facilitate the cleanup of them, or can give them Unique IDs. These return an item_id value, which can be used for updating specific Canvas Items afterwards.


Functions
---------

.. list-table:: 
  :widths: 17 43 40

  * - **Returns**
    - **Name**
    - **Description**

  * - :term:`number` item_id
    - AddLine(:term:`number` group_id, :ref:`Vector2D` start_position, :ref:`Vector2D` end_position, :term:`number` thickness, :ref:`Color` color)
    - Draws a Line (doesn't support opacity)

  * - :term:`number` item_id
    - AddBox(:term:`number` group_id, :ref:`Vector2D` start_position, :ref:`Vector2D` end_position, :term:`number` thickness, :ref:`Color` color)
    - Draws a Box

  * - :term:`number` item_id
    - AddTile(:term:`number` group_id, :ref:`Vector2D` position, :ref:`Vector2D` size, :ref:`Color` color)
    - Draws a Tile (filled)

  * - :term:`number` item_id
    - AddPolygon(:term:`number` group_id, :ref:`Vector2D` screen_position, :ref:`Vector2D` radius, :term:`number` number_of_sides, :ref:`Color` color)
    - Draws a Polygon

  * - :term:`number` item_id
    - AddText(:term:`number` group_id, :term:`string` text, :ref:`Vector2D` position, :term:`FontType` font_type, :term:`number` font_size, :ref:`Color` text_color, :term:`number` kerning, :term:`boolean` is_centered_x, :term:`boolean` is_centered_y, :term:`boolean` enable_shadow, :ref:`Vector2D` shadow_offset, :ref:`Color` shadow_color, :term:`boolean` enable_outline, :ref:`Color` outline_color)
    - Draws a Text with optionals Shadow and Outline

  * - :ref:`Vector2D`
    - Project(:ref:`Vector` world_position)
    - Transforms a 3D world-space vector into 2D screen coordinates.

  * - :ref:`Vector`
    - Deproject(:ref:`Vector2D` screen_position)
    - Transforms a 2D screen coordinates into 3D world-space location.

  * - 
    - ClearItems(:term:`number` group_id)
    - Remove all drawing of using that specific group_id

  * - 
    - UpdateItemText(:term:`number` group_id, :term:`number` item_id, :term:`string` new_text)
    - Updates a specific Canvas Text giving it's group_id and item_id

  * - 
    - UpdateItemPosition(:term:`number` group_id, :term:`number` item_id, :ref:`Vector2D` new_position)
    - Updates a specific Canvas's position giving it's group_id and item_id

  * - :ref:`Vector2D`
    - GetViewportSize()
    - Returns the size of viewport (how much screen space the game window occupies)


Events
------

.. list-table:: 
  :widths: 15 35 50
   
  * - **Name**
    - **Parameters**
    - **Description**

  * - ViewportResized
    - :ref:`Vector2D` new_size
    - Called when the screen is resized



Examples
--------

.. raw:: html

	<script>
		DrawCard(
			"../../tutorials/BasicHUDCanvas.html",
			"https://i.imgur.com/45n8635.png",
			"Basic HUD",
			"See how to display Health and Ammo on the screen!"
		);
	</script>


.. tabs::
 .. code-tab:: lua Lua

    local text = "Hello" -- Text to render on the Canvas.
    local location = Vector2D(123, 321) -- Screen space position to render the text.
    local font_type = 0 -- Roboto
    local font_size = 32 -- Size of the font
    local text_color = Color(1, 0, 0, 1) -- Color to render the text.
    local kerning = 0 -- Horizontal spacing adjustment to modify the spacing between each letter.
    local shadow_color = Color(1, 1, 1, 1) -- Color to render the shadow of the text.
    local shadow_offset = Vector2D(1, 1) -- Pixel offset relative to the screen space position to render the shadow of the text.
    local is_centered_x = false -- If true, then interpret the screen space position X coordinate as the center of the rendered text.
    local is_centered_y = false -- If true, then interpret the screen space position Y coordinate as the center of the rendered text.
    local is_outlined = false -- If true, then the text should be rendered with an outline.
    local enable_shadow = true -- If true, then shadow will be enabled
    local outline_color = Color(1, 1, 1, 1) -- Color to render the outline for the text.

    Render:AddText(0, text, location, font_type, font_size, text_color, kerning, is_centered_x, is_centered_y, enable_shadow, shadow_offset, shadow_color, is_outlined, outline_color)