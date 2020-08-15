.. _Modding:

*******
Modding
*******

.. toctree::
   :hidden:
   :name: toc-modding
   :glob:

   MapsAndLevels.rst
   StaticMeshes.rst

Nanos World allows several ways of customizations: from programmable scripts to completely modding meshes and assets. Modding allows you to import and create custom meshes, maps, textures and so on to your server!

This section aims to guide you on how to create your own Assets and how to include them in your server.

.. note:: Before moving on, please read :ref:`AssetsQuickStart` for a quick guide on how Assets work and how to import your first Asset.


Exporting and Creating Assets
-----------------------------

*  :ref:`MapsAndLevels` Creating and Exporting Maps & Levels
*  :ref:`StaticMeshes` Creating and Exporting Static Meshes (e.g. used for Props)


Rules for exporting/creating assets in Unreal Engine 4 for nanos world
----------------------------------------------------------------------

1. Always create a Root folder with the name of your pack (e.g. ``/Content/My_Weapon_Pack/``) and put all content you use inside that (you can create sub-folders as well).

2. Do not use Engine Content (i.e. Engine's default materials or default meshes), always make a copy them inside your Content folder and use that instead. Engine content are not exported correctly.


Additional Tips
~~~~~~~~~~~~~~~

1. Use a proper name pattern for your Assets.

2. Use small assets size and configure textures compression properly (big files are bad for network bandwidth). We recommend max 2048x2048 size for textures, as they will be 5MB each.


Recommended Asset Naming Conventions
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

We hardly recommend and encourage you to follow `Allar's Asset Naming Conventions <https://github.com/Allar/ue4-style-guide#1-asset-naming-conventions->`_. We've summarized the most common ones here?

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

  * - Material
    - \M_
    - 

  * - Material Instance
    - \MI_
    - 

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
	</script>