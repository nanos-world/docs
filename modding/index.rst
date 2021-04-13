.. _Modding:

*******
Modding
*******

.. toctree::
   :hidden:
   :name: toc-modding
   :glob:

   AssetsDevelopmentKit.rst
   Characters.rst
   MapsAndLevels.rst
   StaticMeshes.rst

nanos world allows several ways of customizations: from programmable scripts to completely modding meshes and assets. Modding allows you to import and create custom meshes, maps, textures and so on to your server!

This section aims to guide you on how to create your own Assets and how to include them in your server.

.. note:: Before moving on, please read :ref:`AssetsQuickStart` for a quick guide on how Assets work and how to import your first Asset.


Exporting and Creating Assets
-----------------------------

*  :ref:`MapsAndLevels` Creating and Exporting Maps & Levels
*  :ref:`StaticMeshes` Creating and Exporting Static Meshes (e.g. used for Props)
*  :ref:`CharactersModding` Creating and Exporting Character's Skeletal Meshes


Rules for exporting/creating assets in Unreal Engine 4 for nanos world
----------------------------------------------------------------------

1. Always create a Root folder with the name of your pack (e.g. ``/Content/My_Weapon_Pack/``) and put all content you use inside that (you can create sub-folders as well).

2. Do not use Engine Content (i.e. Engine's Materials or Meshes). If you want to use them, we recommend copying them to your Content/Your_Pack folder, otherwise they may not be exported correctly. There is only some Engine Content which is allowed to use, from the following folders (these are already included by the base game and are safe to use):

   1. ``/Engine/Functions``
   2. ``/Engine/BasicShapes``
   3. ``/Engine/ArtTools``
   4. ``/Engine/EngineMaterials``


Additional Tips
~~~~~~~~~~~~~~~

1. Use a proper name pattern for your Assets.

2. Use small assets size and configure textures compression properly (big files are bad for network bandwidth). We recommend max 2048x2048 size for textures, as they will be 5MB each.


Recommended Asset Naming Conventions
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

We hardly recommend and encourage you to follow `Allar's Asset Naming Conventions <https://github.com/Allar/ue4-style-guide#1-asset-naming-conventions->`_. We've summarized the most common ones here:

.. list-table::
  :widths: 35 20 45

  * - **Asset Type**
    - **Prefix**
    - **Suffix**

  * - Skeletal Mesh
    - \SK_
    - 

  * - Static Mesh
    - \SM_
    - 

  * - Physical Asset
    - \PHYS_
    - 

  * - Material
    - \M_
    - 

  * - Material Instance
    - \MI_
    - 

  * - Animation
    - \A_
    - 

  * - Animation Montage
    - \A_
    - 

  * - Particle
    - \P_
    - 

  * - Sound Wave
    - \A_
    - 

  * - Sound Cue
    - \A_
    - _Cue

  * - Texture
    - \T_
    - _? (see `Textures <https://github.com/Allar/ue4-style-guide#anc-textures>`_)


Moving Further
--------------

.. raw:: html

	<script>
		DrawCard(
			"MapsAndLevels.html",
			"https://docs.unrealengine.com/Images/Engine/Rendering/VirtualTexturing/Runtime/QuickStart/5_0_RVTActors_1.jpg",
			"Creating Maps",
			"Learn how to create maps from scratch and import them in nanos world."
		);

		DrawCard(
			"StaticMeshes.html",
			"https://cdn.lynda.com/course/681091/681091-637286238509169718-16x9.jpg",
			"Creating custom Static Meshes",
			"Learn how to import and use custom Static Meshes in nanos world."
		);

		DrawCard(
			"NanosWorldDefaultPack.html",
			"https://cdn.arstechnica.net/wp-content/uploads/2015/09/IBC-facebook-1200x630-398254359.png",
			"nanos world Assets Pack",
			"Check it out all assets already included in the base game."
		);

		DrawCard(
			"../tutorials/PaintingMeshes.html",
			"https://i.imgur.com/9yyOU5F.png",
			"Painting Meshes",
			"Check how to customize, paint and import custom textures to your meshes with scripting!"
		);
	</script>