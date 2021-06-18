.. _Vault:

*****
Vault
*****

nanos world **Marketplace** is the platform on which you are invited to share your **Game-Modes**, **Packages** and **Assets** with the nanos world community!

.. image:: https://i.imgur.com/wTnNXyF.jpg

.. note:: The Marketplace and the Vault are still under development. While we are still developing a final version of them, we decided to start launching small usable pieces of it to build and improve it with you!


Vault
=====

Within the game, we have a menu tab called **Vault**, where you will be able to **download**, **update** and **manage** the Packages/Assets you have in your account, as well as soon browse the whole marketplace!

.. image:: https://i.imgur.com/8tAtT39.png


.. tip:: In this first stage of development, we are releasing only the **Vault** with hard-coded listed Packages/Assets, and to be able to test it at its best we need your help: if you have Packages or Assets in a playable state please share with us, we would love to add your content to this initial hardcoded list! 


How to get my content ready for the Marketplace
===============================================

.. note:: The following notes may change as we improve or leave testing stages of the Vault/Marketplace!

We are advising everyone to **.zip** and upload their **Packages** and **Assets** to https://github.com/, as it follows:

.. warning:: Remember to delete the hidden ``.cache`` files if you have them in your Package and Assets folders!

.. warning:: **For now**, we recommend leaving the version in **1.0.0**, and do not change it! If you want to update your content, just upload it again with the same version.

.. tip:: You can add an image which will appear in the Vault screen, please use the format 2:1 (e.g. 300px x 150px)!


Prepare your Package!
*********************

Your Package must contain the file ``Package.toml`` in the root of your .zip, with the following new format:


.. code-block:: toml

	# Package Configurations
	[package]
		# Package Name
		name =                    "Your Package Name"
		# Contributors
		author =                  "Your Name / Your Team"
		# Version
		version =                 "1.0.0"
		# Image URL
		image =                   "https://i.imgur.com/AjtVZBQ.jpg"
		# Package Type: 'executable' (normal package) | 'library' (doesn't run - useful for code library)
		type =                    "executable"
		# Whether to force the Custom Map Script to do NOT load
		force_no_map_script =     false
		# Auto Destroy all entities spawned by this package when it unloads
		auto_cleanup =            true
		# Asset Packs Requirements
		assets_requirements = [
			"MyAwesomeAssetPack",
		]


Your .zip would end up like:

.. code-block:: javascript

   MyPackage.zip
   |   Server/
   |   |   Index.lua
   |   |   *.lua
   |   |   ...
   |   Client/
   |   Shared/
   |   Package.toml


Prepare your Assets!
********************

Your Asset Pack must contain the ``Assets.toml`` in the root of your .zip, with the following new format:


.. code-block:: toml

	# Asset Pack Configurations
	[asset_pack]
		# Asset Pack Name
		name =              "Your Asset Pack Name"
		# Contributors
		author =            "Your Name / Your Team"
		# Version
		version =           "1.0.0"
		# Image URL
		image =             "https://i.imgur.com/AjtVZBQ.jpg"
		# Unreal Folder - the root folder which the assets will have references to each other
		unreal_folder =     "UnrealRootFolderName"

	# Assets Files
	[assets]
		# Maps
		[assets.maps]
		# Static Meshes
		[assets.static_meshes]
		# Skeletal Meshes
		[assets.skeletal_meshes]
		# Sounds
		[assets.sounds]
		# Animations
		[assets.animations]
		# Particles
		[assets.particles]
		# Other Assets (for not yet categorized ones)
		[assets.others]
		


Your .zip would end up like:

.. code-block:: javascript

   MyAssetPack.zip
   |   MyMap/
   |   |   Map.umap
   |   |   *.uasset
   |   |   ...
   |   MyMeshes/
   |   Assets.toml


.. tip:: You can see an example of Package + Assets Pack of the Halloween Package: https://github.com/gtnardy/nanos-world-halloween/


Pushing to GitHub
*****************

The next step is to create a release on GitHub:

1. Go to your GitHub repository page, and go to **Tags** page:

.. image:: https://i.imgur.com/o3jcxpa.png

2. Then you will create a new **Release**:

.. image:: https://i.imgur.com/YCQEA9g.png

3. Now you can fill the blanks and put the version (we recommend using semver ``v1.0.0``) and drag-n-drop your **.zips** you created:

.. image:: https://i.imgur.com/rzQDlIs.png

4. You will end up with something like that, in your release page with 2 .zips attached to the release:

.. image:: https://i.imgur.com/xxayIVO.png


And you are done! Now, everything you need to do is to send your .zips URLs (e.g. https://github.com/nanos-world/nanos-world-weapons/releases/download/v1.0.0/MyAssetPack.zip) to SyedMuhammad to have it in the testing phase of the Vault!

.. tip:: Feel free to modify and edit your .zips and reupload them - but keep the same name and the same version for now!