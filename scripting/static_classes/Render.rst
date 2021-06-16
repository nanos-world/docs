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
    - AddLine( |br-p| :term:`number` group_id, |br-p| :ref:`Vector2D` start_position, |br-p| :ref:`Vector2D` end_position, |br-p| :term:`number` thickness, |br-p| :ref:`Color` color |br| )
    - Draws a Line (doesn't support opacity)

  * - :term:`number` item_id
    - AddBox( |br-p| :term:`number` group_id, |br-p| :ref:`Vector2D` start_position, |br-p| :ref:`Vector2D` end_position, |br-p| :term:`number` thickness, |br-p| :ref:`Color` color |br| )
    - Draws a Box

  * - :term:`number` item_id
    - AddTile( |br-p| :term:`number` group_id, |br-p| :ref:`Vector2D` position, |br-p| :ref:`Vector2D` size, |br-p| :ref:`Color` color |br| )
    - Draws a Tile (filled)

  * - :term:`number` item_id
    - AddPolygon( |br-p| :term:`number` group_id, |br-p| :ref:`Vector2D` screen_position, |br-p| :ref:`Vector2D` radius, |br-p| :term:`number` number_of_sides, |br-p| :ref:`Color` color |br| )
    - Draws a Polygon

  * - :term:`number` item_id
    - AddText( |br-p| :term:`number` group_id, |br-p| :term:`string` text, |br-p| :ref:`Vector2D` position, |br-p| :term:`FontType` font_type, |br-p| :term:`number` font_size, |br-p| :ref:`Color` text_color, |br-p| :term:`number` kerning, |br-p| :term:`boolean` is_centered_x, |br-p| :term:`boolean` is_centered_y, |br-p| :term:`boolean` enable_shadow, |br-p| :ref:`Vector2D` shadow_offset, |br-p| :ref:`Color` shadow_color, |br-p| :term:`boolean` enable_outline, |br-p| :ref:`Color` outline_color |br| )
    - Draws a Text with optionals Shadow and Outline

  * - :ref:`Vector2D`
    - Project(:ref:`Vector` world_position)
    - Transforms a 3D world-space vector into 2D screen coordinates.

  * - :term:`table`
    - Deproject(:ref:`Vector2D` screen_position)
    - Transforms a 2D screen coordinates into 3D world-space location. |br| Returns ``{"Position", "Direction"}``

  * - 
    - ClearItems(:term:`number` group_id)
    - Remove all drawing of using that specific group_id

  * - 
    - Subscribe(:term:`string` event_name, :term:`function`)
    - Subscribes for an Event 

  * - 
    - Unsubscribe(:term:`string` event_name, :term:`function` = nil)
    - Unsubscribes from all subscribed Events in this Class and in this Package, optionally passing the function to unsubscribe only that callback

  * - 
    - UpdateItemText( |br-p| :term:`number` group_id, |br-p| :term:`number` item_id, |br-p| :term:`string` new_text |br| )
    - Updates a specific Canvas Text giving it's group_id and item_id

  * - 
    - UpdateItemPosition( |br-p| :term:`number` group_id, |br-p| :term:`number` item_id, |br-p| :ref:`Vector2D` new_position |br| )
    - Updates a specific Canvas's position giving it's group_id and item_id

  * - :ref:`Vector2D`
    - GetViewportSize()
    - Returns the size of viewport (how much screen space the game window occupies)


Events
------

.. list-table:: 
  :widths: 15 35 50
   
  * - **Name**
    - **Arguments**
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