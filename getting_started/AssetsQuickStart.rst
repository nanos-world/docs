.. _AssetsQuickStart:

******************
Assets Quick Start
******************

nanos world provides fully capabilities of modifying, including and customizing the game. In this section we will explain how to include custom Assets in your server.


Structure
---------

Assets can be included in a folder called ``Assets/`` in the root server folder. All files in there will be sent to the clients and will be able to be referenced in your scripting code.

.. code-block:: javascript

	NanosWorldServer.exe
	Packages/
	Assets/
	|   My_Asset_Pack_01/
	|   |   My_Asset_01.uasset
	|   |   My_Asset_02.uasset
	|   |   My_Big_Map.umap
	|   |   ...
	|   |   Assets.toml
	|   Awesome_Weapons/
	|   |   Big_Fucking_Gun.uasset
	|   |   AwesomeWeaponBundle.pak
	|   |   ...
	|   |   Assets.toml


Creating your own Assets
------------------------

If you are already familiar with `Unreal Engine 4 <https://www.unrealengine.com>`_, creating custom assets is very straightforward. Otherwise, you just need to follow some steps.

All custom Assets must be cooked and packed through Unreal Engine 4. It is not (yet?) possible to import custom assets (meshes, images, sounds) directly to the game. So because of that, you will need Unreal Engine 4 installed just to import your assets and export in the proper format. This guide will teach you how to download the most light version of Unreal Engine and the steps needed to export and use your assets properly.


Installing Unreal Engine 4
~~~~~~~~~~~~~~~~~~~~~~~~~~

1. Download and Install `Epic Games Launcher <https://www.unrealengine.com/en-US/download/ue_non_games>`_ (follow the steps for agreeing to Unreal Engine terms).
2. Install Unreal Engine from inside Epic Games Launcher -> Unreal Engine tab -> Library -> ``+`` Engine Version (We are always using the latest version ;)). Before starting the download, select Options in the dropdown menu and deselect all items, so your installation will be lean with no unecessary stuff.

.. tip:: Please refer to `Unreal Official Documentation <https://docs.unrealengine.com/en-US/GettingStarted>`_ for more information and tutorials.


Exporting Assets from Unreal Engine
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. note:: For the sake of this tutorial, we are not covering further details on Unreal's peculiarities. The following guide is using a default's blueprint's blank Unreal Project, without any Starting Content.

.. attention:: All your Asset Pack content must be in a folder with the name of your Asset Pack inside the ``Content/`` Folder.

.. attention:: Do not use Engine's Content in your assets (e.g. Engine's Materials or Assets). If you wants to use them, always copy them to your Content/Your_Pack folder.

For this tutorial, we are going to use a simple Cube (Static Mesh) and a Material (applied to the cube) for our Assets. We've also created and placed them in a folder called MyPack which will help us afterwards.

.. image:: https://i.imgur.com/H5x15qE.png

.. image:: https://i.imgur.com/jcwWd0L.png

For exporting them in a recognizable way by nanos world, you need to "Package the Project" (i.e. cooking and packaging it).

Before moving on, we just need to change three settings, for that open the Packaging Settings:

.. image:: https://i.imgur.com/CKWmKwl.png

And deselect ``Use Pak File``, ``Share Material Shader Code`` and ``Allow Static Lighting`` options:

.. image:: https://i.imgur.com/0dqzFh9.png

And you are done! Now you just need to Package it! For that just select the following option and select any folder in your computer and wait it finishes, it may take some minutes:

.. image:: https://i.imgur.com/h0fMzGa.png

.. image:: https://i.imgur.com/ImGjShf.png

After finishing, you will get a folder like that:

.. image:: https://i.imgur.com/FnUex4P.png


Importing and Using Assets in your Server
-----------------------------------------

After packaging your project, we will manually copy the exported folder from it, the one we are looking for will be located at ``NanosWorldAssets/Content/`` (or whatever is the name of your project). As we created a folder called ``MyPack``, our exported assets will be at ``NanosWorldAssets/Content/MyPack/``:

.. attention:: It is important to keep your main Asset Folder (in this case ``MyPack``) with the same name when copying to, otherwise internal references will not work.

.. image:: https://i.imgur.com/BIzXctE.png

And thats it! You must now just copy ``MyPack/`` folder inside your Server's ``Assets/`` folder and reference your Cube like ``Prop(Vector(0, 0, 0), Rotator(0, 0, 0), "MyPack/SM_Cube")`` when loading a Prop for example.

.. image:: https://i.imgur.com/H0B7WWp.png

.. note:: Please do NOT rename or change any file or folder in your exported folder after you Packaged it, it will break all internal references used by your assets.


Assets Configuration File
~~~~~~~~~~~~~~~~~~~~~~~~~

.. tip:: nanos world Config files use **TOML** (Tom's Obvious, Minimal Language), please refer to https://github.com/toml-lang/toml for more information and syntax.

The Assets Configuration file ``Assets.toml`` is generated automatically when an Asset Pack is loaded for the first time. This file will always be overriden with the proper pattern after it's loaded.

It is extremely important to setup your ``Assets.toml`` file, in there you will need to list every asset contained in your Pack, as well the type of them, besides that, this is where Scripters can look into to find the assets they want to use.

.. code-block:: toml

    # Asset Pack Configurations
    [asset_pack]
        # Asset Pack Name
        name =                "My Pack"
        # Author
        author =            "Incredible Scripter"
        # Version
        version =            "1.1.0"

    # Assets Files
    [assets]
        # Maps
        [assets.maps]
            AwesomeAndBigMap = "Maps/BigMap_01"

        # Static Meshes
        [assets.static_meshes]
            # SM_Flower_01 = "MyFolder/SM_Awesome_Flower_01"
            # ...

        # Skeletal Meshes
        [assets.skeletal_meshes]
            # SK_Better_Man = "Characters/SK_BetterMan_3"
            # ...

        # Other Assets (for not yet categorized ones)
        [assets.others]
            # A_Audio_Rifle_Fire = "Audios/A_Audio_Rifle_Fire_03"
            # ...

As seen above, Assets can be set in a ``key = "value"`` pattern, the **key** being how Scripters reference it in their code, and the **value** being the path where the game will look for it. Note: all paths are relative to the Asset Pack folder.


Referencing Assets in Code
~~~~~~~~~~~~~~~~~~~~~~~~~~

The correct way of referencing assets in code is using the pattern: ``ASSET_PACK_NAME::ASSET_FILE_NAME``. So for example, if I want to reference to AwesomeAndBigMap as the above example, I would use: ``MyPack::AwesomeAndBigMap``

.. note:: The key ``ASSET_PACK_NAME`` is the Asset Pack's folder name.


Going Further
-------------

.. raw:: html

	<script>
		DrawCard(
			"../modding/index.html",
			"https://uploads.jovemnerd.com.br/wp-content/uploads/2019/03/thomas-re2-1210x540.png",
			"Modding Overview",
			"Learn how modding in possible in nanos world."
		);

		DrawCard(
			"../modding/NanosWorldDefaultPack.html",
			"https://cdn.arstechnica.net/wp-content/uploads/2015/09/IBC-facebook-1200x630-398254359.png",
			"Nanos World Assets Pack",
			"Check it out all assets already included in the base game."
		);
	</script>