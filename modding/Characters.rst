.. _CharactersModding:

**********
Characters
**********

nanos.world Characters use Unreal's Default Mannequin Skeleton. So any Skeletal Mesh which uses it by default will probably work in nanos world as a :ref:`Character`. In this guide you will learn how to import and use custom Skeletal Meshes in nanos world Characters.

For this Guide, we will import a Skeletal Mesh from `Stylized Character Kit: Casual 01 <https://www.unrealengine.com/marketplace/en-US/product/stylized-male-character-kit-casual>`_ (which is a `Free Marketplace Content for September 2020 <https://www.unrealengine.com/en-US/blog/featured-free-marketplace-content---september-2020>`_).

.. image:: https://i.imgur.com/JsZLaUR.jpg

Also, we will be using our :ref:`AssetsDevelopmentKit`, make sure you downloaded it.


Downloading the Asset Pack from Unreal Marketplace
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The first step is to download the Asset Pack *Stylized Character Kit: Casual 01* from UE4 Marketplace, do to so, open *Epic Games Launcher >> Unreal Engine >> Library* and scroll to *VAULT* section, in there you will find all your Marketplace content you have in your account, to download it click on *Add To Project* and select the **Assets Development Kit** project, this will download all files and 'install' them into the ADK project.

.. image:: https://i.imgur.com/cpv8sBQ.png

.. image:: https://i.imgur.com/iY9pdFf.png

You can now notice that there is a new folder ``Content/SCK_Casual01/`` in the ADK project, this is the Asset Pack you just downloaded from UE4 Marketplace:

.. image:: https://i.imgur.com/p9cCLIo.png

And you can find it's Skeletal Meshes inside ``Content/SCK_Casual01/Models/Premade_Characters/``:

.. image:: https://i.imgur.com/bFlG1Dn.png


Copying the wanted files to our Asset Pack folder
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

For this example, let's import the Skeletal Mesh ``MESH_PC_00`` to nanos world and use it as our Character's Mesh:

.. image:: https://i.imgur.com/l2GRGwF.png

The first step is to copy it and all it's dependencies to your AssetPack/ folder inside the Project:

.. note:: If you want, you don't need to do this and instead you can generate an Asset Pack with all files from the Marketplace, which will create a big and kind of useless content for nanos world.

To do so, just drag-n-drop ``MESH_PC_00`` into your AssetPack/ folder and select *Advanced Copy Here*, this will copy all files and all dependencies in there, i.e. only the real needed ones:

.. image:: https://i.imgur.com/UdJx5Lv.png

Press OK to confirm:

.. image:: https://i.imgur.com/4kaFOfL.png

And now we have only our wanted Skeletal Mesh and it's Textures/Materials into our Asset Pack folder, which we will export:

.. image:: https://i.imgur.com/NtPuPpy.png


Converting the Skeleton to nanos world's Skeleton
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Now it's of paramount importance to convert all Skeleton references to use nanos world Skeleton instead, if the Skeletal Mesh you imported is 100% equal to UE4's Mannequin Skeleton, this convertion won't be even noticed, but if the Skeleton of the Skeletal Mesh you are importing have more bones or is different, it won't work! You can try remake/modify it in a 3D software like Blender and make it equal to UE4's Mannequin.

For that, just right click on your Skeletal Mesh ``MESH_PC_00`` >> Skeleton >> Assign Skeleton, and select our Skeleton ``SKEL_Mannequin``, press *Accept* to convert:

.. image:: https://i.imgur.com/QRuuOSj.png

.. image:: https://i.imgur.com/a9Hlb9H.png

After it's converted, save everything and you can delete the old Skeleton (which was located at ``SCK_Casual01/Mannquin/`` folder):

.. image:: https://i.imgur.com/UEoA3hd.png


Exporting / Packaging / Cooking the assets to nanos world
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Cooking/Packaging Unreal Engine Projects is very straightforward (this is the same as 'generating' your game's .exe if you are making a game in UE4).

Before we export it, let's say to UE4 to only export our AssetPack folder, otherwise it will compile and export all folders in the Project. You can skip this step if you don't care, but will increase the packaging time.

For that, open the Project Settings >> Packaging (or search for *Directories to never Cook*), and let's add a blacklist of directories to skip cooking (exporting), I'm selecting the one from which we imported: ``SCK_Casual01/`` which we don't want exported together because we had already copied the files we want to our AssetPack/ folder:

.. image:: https://i.imgur.com/ST2s6i8.png

And now we just need to Package the Project! File >> Package Project >> Windows (64-bit), and select a folder in your PC to save it:

.. image:: https://i.imgur.com/kzR11W2.png


Getting the Files & Generating Assets.toml
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

We are almost finished! Now, let's copy all cooked files into our ``Server/Assets/`` folder! For that, find and open the folder which you just Packaged from UE4, you will have something like this:

.. image:: https://i.imgur.com/Jec5o4j.png

The folder we want is inside ``Content/YourAssetFolder``:

.. image:: https://i.imgur.com/4qNmj5j.png

Let's copy it into our ``Server/Assets/``:

.. image:: https://i.imgur.com/eUs7w7E.png

And the last step is to generate an ``Assets.toml`` file! For our luck, the ADK comes with a `Tool <https://docs.nanos.world/modding/AssetsDevelopmentKit.html#assets-toml-generator-nanosworld-blueprints-utility-wbp-assetstomlgenerator>`_ which generates an ``Assets.toml`` configuration automatically for us!

We just need to put the AssetPack/ folder name in there and press *GENERATE*:

.. image:: https://i.imgur.com/KAZKEOL.png

Now you just need to create an ``Assets.toml`` file inside your ``Server/Assets/MyAssetPack/`` folder and paste the generated configuration inside of it:

.. image:: https://i.imgur.com/mMVEjWn.png


Using the Skeletal Mesh in a Character through Scripting
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The last step is to use it! For that, you just need to use it's Key ``MyAssetPack::MESH_PC_00``! E.g.:

.. code-block:: lua

	Character(Vector(0, 300, 100), Rotator(0, 180, 0), "MyAssetPack::MESH_PC_00")

And... voila! Imported and integrated with all animations!

.. image:: https://i.imgur.com/QWPDWce.png