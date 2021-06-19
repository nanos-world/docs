.. _AssetsQuickStart:

******************
Assets Quick Start
******************

nanos world provides fully capabilities of modifying, including and customizing the game. In this section we will explain how to include custom Assets in your server.


Structure
---------

Assets can be included in a folder called ``Assets/`` in the root server folder. Files in there will be sent to the clients and will be able to be referenced in your scripting code upon being imported by your Packages.

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

If you are already familiar with `Unreal Engine 4 <https://www.unrealengine.com>`_, creating and using custom assets in nanos world is very straightforward. For that, it's only necessary to follow some steps.

All custom Assets must be cooked and packed through Unreal Engine 4. It is not (yet?) possible to import custom assets (meshes, images, sounds) directly to the game, so you will need Unreal Engine 4 installed just to import your assets and export them in the proper format. This guide will teach you how to download the most light version of Unreal Engine 4 and the steps needed to export and use your assets properly.


Installing Unreal Engine 4
~~~~~~~~~~~~~~~~~~~~~~~~~~

1. Download and Install `Epic Games Launcher <https://www.unrealengine.com/en-US/download/ue_non_games>`_ (follow the steps for agreeing to Unreal Engine terms).
2. Install Unreal Engine from inside Epic Games Launcher -> Unreal Engine tab -> Library -> ``+`` Engine Version (We are always using the latest version ;)). Before starting the download, select Options in the dropdown menu and deselect all items, so your installation will be lean with no unecessary stuff.

.. tip:: Please refer to `Unreal Official Documentation <https://docs.unrealengine.com/en-US/GettingStarted>`_ for more information and tutorials. For the sake of this tutorial, we are not covering further details on Unreal's peculiarities.


Using the Assets Development Kit - ADK
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

nanos world provides an :ref:`AssetsDevelopmentKit` which helps integrating assets and making the process faster. This is an Unreal Project with useful assets and placeholders which can be used to help your assets and mapping creation. You can and must download and use it to continue this tutorial.


Exporting Assets from Unreal Engine
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

For this tutorial, we are going to use a simple Cube (Static Mesh) and a Material (applied to the cube) for our Assets. We've also created and placed them in a folder called MyPack which will help us afterwards.

.. image:: https://i.imgur.com/H5x15qE.png

.. image:: https://i.imgur.com/jcwWd0L.png

For exporting them in a recognizable way by nanos world, you need to "Package the Project" (i.e. cooking and packaging it), for that just select the following option and select any folder in your computer and wait it finishes, it may take some minutes:

.. image:: https://i.imgur.com/h0fMzGa.png

.. image:: https://i.imgur.com/ImGjShf.png

After finishing, you will get a folder like that:

.. image:: https://i.imgur.com/FnUex4P.png


Importing and Using Assets in your Server
-----------------------------------------

After packaging your project, we will manually copy the exported folder from it, the one we are looking for probably will be located at ``assets-development-kit/Content/``. As we created a folder called ``MyPack``, our exported assets will be at ``assets-development-kit/Content/MyPack/``:

.. attention:: It is important to keep your main Asset Folder (in this case ``MyPack``) with the same name when copying to, otherwise internal references will not work.

.. image:: https://i.imgur.com/BIzXctE.png

And thats it! You must now just copy ``MyPack/`` folder inside your Server's ``Assets/`` folder and create a configuration file called ``Assets.toml`` in ``MyPack/`` folder with the pattern described in `<#assets-configuration-file>`_. For each Asset you have in your Pack, you must add an entry in the configuration file.

For our Cube mesh, we just need to add an entry with the Path of the cube relative to our Assets folder in the pattern ``[ASSET_NAME] = "[ASSET_PATH]"``:

.. code-block:: toml

    # Static Meshes
    [assets.static_meshes]
    SM_Cube = "SM_Cube"

Then it is possible to spawn our Cube like ``Prop(Vector(0, 0, 0), Rotator(0, 0, 0), "MyPack::SM_Cube")``:

.. image:: https://i.imgur.com/H0B7WWp.png

.. warning:: Please do NOT rename or change any file or folder in your exported folder after you Packaged it, it will break all internal references used by your assets.


Assets Configuration File
~~~~~~~~~~~~~~~~~~~~~~~~~

.. tip:: nanos world Config files use **TOML** (Tom's Obvious, Minimal Language), please refer to https://github.com/toml-lang/toml for more information and syntax.

The Assets Configuration file ``Assets.toml`` is generated automatically when an Asset Pack is loaded for the first time. This file will always be overriden with the proper pattern after it's loaded.

It is extremely important to setup your ``Assets.toml`` file, in there you will need to list every asset contained in your Pack, as well the type of them, besides that, this is where Scripters can look into to find the assets they want to use.

.. code-block:: toml

    # Asset Pack Configurations
    [asset_pack]
        # Asset Pack Name
        name =              "MyPack"
        # Contributors
        author =            "The incredible Asset Creator"
        # Version
        version =           "1.0.0"
        # Image URL
        image =             "https://i.imgur.com/Qa6Tswl.png"
        # Unreal Folder - the root folder which the assets will have references to each other
        unreal_folder =     "MyPack"

    # Assets Files
    [assets]
        # Maps
        [assets.maps]
        # MyMap = "MyFolder/MyAwesomeMap"
        # ...

        # Static Meshes
        [assets.static_meshes]
        SM_Cube = "SM_Cube"

        # Skeletal Meshes
        [assets.skeletal_meshes]
        # SK_Better_Man = "Characters/SK_BetterMan_3"
        # ...

        [assets.sounds]
        # A_RingSound = "Audios/A_RingSound"
        # ...

        # Animations
        [assets.animations]
        # A_Character_Jump = "Animations/A_Character_Jump"
        # ...

        # Other Assets (for not yet categorized ones)
        [assets.others]
        # A_Audio_Rifle_Fire = "Audios/A_Audio_Rifle_Fire_03"
        # ...
        


As seen above, Assets can be set in a ``key = "value"`` pattern, the **key** being how Scripters reference it in their code, and the **value** being the path where the game will look for it. Note: all paths are relative to the Asset Pack folder. So for example, if **Characters** is a **folder** inside MyPack Asset Pack folder then the relative path would be: "Characters/Your_Asset_Name".


Referencing Assets in Code
~~~~~~~~~~~~~~~~~~~~~~~~~~

The first step to be able to reference your assets in your packages is requiring your Asset Pack in your Package.toml like that:

.. code-block:: toml

    # Package Configurations
    [package]
        # Package Name
        name =                  "My Awesome Package"
        # Contributors
        author =                "SyedMuhammad"
        # Version
        version =               "1.0.0"
        # Image URL
        image =                 "https://i.imgur.com/AjtVZBQ.jpg"
        # Package Type: 'executable' (normal package) | 'library' (doesn't run - useful for code library)
        type =                  "executable"
        # Whether to force the Custom Map Script to do NOT load
        force_no_map_script =   false
        # Auto Destroy all entities spawned by this package when it unloads
        auto_cleanup =          true
        # Asset Packs Requirements
        assets_requirements = [
            "MyAwesomeAssetPACK",
        ]

.. tip:: The Asset Pack which contains the maps you are loading is automatically loaded when you start the server!


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
			"nanos world Assets Pack",
			"Check it out all assets already included in the base game."
		);
	</script>
