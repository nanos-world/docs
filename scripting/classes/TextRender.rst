.. _TextRender:

.. include:: ../common/common.rst

***********
Text Render
***********

A Text Render class is useful for spawning Texts in 3D world, you can even attach it to other entities.

.. note:: This is a Client only Class.

.. image:: https://i.imgur.com/Rr1mzO8.png


Usage
-----

.. tabs::
 .. code-tab:: lua Lua

    local my_text_render = TextRender(
        Vector(-100, 200, 300),
        Rotator(),
        "My Awesome Text",
        Vector(1, 1, 1) -- Scale
        Color(1, 0, 0), -- Red Color
        FontType.OpenSans,
        TextRenderAlignCamera.FaceCamera
    )


.. tip:: If you desire your **TextRender** to be visible through walls, replace it's material with the nanos Default TranslucentDepth one! ``:SetDefaultMaterial(MaterialType.TranslucentDepth)``. You can also tweak it's color and other properties using the Material methods.


Constructor Parameters
----------------------

.. list-table:: 
  :widths: 15 45 40

  * - **Type**
    - **Name**
    - **Default**

  * - :ref:`Vector`
    - location
    - Vector(0, 0, 0)

  * - :ref:`Rotator`
    - rotation
    - Rotator(0, 0, 0)

  * - :term:`string`
    - text
    - 

  * - :ref:`Vector`
    - scale
    - Vector(1, 1, 1)

  * - :ref:`Color`
    - color
    - Color(1, 1, 1, 1)

  * - :term:`FontType`
    - font_type
    - FontType.Roboto

  * - :term:`TextRenderAlignCamera`
    - align_camera
    - TextRenderAlignCamera.Unaligned


Functions
----------

.. list-table::
  :widths: 10 50 40

  * - **Returns**
    - **Name**
    - **Description**

  * - 
    - SetColor(:ref:`Color` color)
    - Sets the Color (internally this will call the *SetMaterialColorParameter("Tint", color)* method)

  * - 
    - SetDefaultMaterial( |br-p| :term:`MaterialType` material_type = MaterialType.Masked |br| )
    - Replaces all materials of this actor with a nanos basic material with comon parameters available (*Masked, Translucent, TranslucentDepth*)

  * - 
    - SetFont(:term:`FontType` font_type)
    - Sets the Font

  * - 
    - SetFreeze(:term:`boolean` freeze)
    - Freeze mesh rebuild, to avoid unnecessary mesh rebuilds when setting a few properties together

  * - 
    - SetGlyphSettings( |br-p| :term:`number` extrude = 0, |br-p| :term:`number` bevel = 0, |br-p| :term:`BevelType` bevel_type = Convex, |br-p| :term:`number` bevel_segments = 8, |br-p| :term:`boolean` outline = false |br| )
    - Sets the Glyph representation settings to generate the 3D Mesh for this text render

  * - 
    - SetMaterialColorParameter( |br-p| :term:`string` parameter_name, |br-p| :ref:`Color` color |br| )
    - Sets a Color parameter in this actor's material

  * - 
    - SetMaterialScalarParameter(:term:`string` parameter_name, :term:`number` scalar)
    - Sets a scalar parameter in this actor's material

  * - 
    - SetMaterialTextureParameter(:term:`string` parameter_name, :term:`string` texture_path)
    - Loads a image from computer (relative to `Assets/` folder) and sets as parameter in this actor's material

  * - 
    - SetMaterialVectorParameter(:term:`string` parameter_name, :ref:`Vector` vector)
    - Sets a Vector parameter in this actor's material

  * - 
    - SetMaxSize( |br-p| :term:`number` max_width = 0, |br-p| :term:`number` max_height = 0, |br-p| :term:`boolean` scale_proportionally = true |br| )
    - Sets the Max Size of the TextRender, optionally scalling it proportionally

  * - 
    - SetText(:term:`string` text)
    - Sets the Text

  * - 
    - SetTextSettings( |br-p| :term:`number` kerning = 0, |br-p| :term:`number` line_spacing = 0, |br-p| :term:`number` word_spacing = 0, |br-p| :term:`TextRenderHorizontalAlignment` horizontal_alignment = Center, |br-p| :term:`TextRenderVerticalAlignment` vertical_alignment = Center |br| )
    - Sets the Text & Font settings for this text render


.. include:: ../common/functions/Actor.rst


Events
------

.. include:: ../common/events/Actor.rst


Related Tutorials
-----------------

.. raw:: html

	<script>
		DrawCard(
			"../../tutorials/NameTags.html",
			"https://i.imgur.com/AyHKrG1.png",
			"NameTags",
			"How to add Player's name above Character's head."
		);
	</script>