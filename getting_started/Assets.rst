.. _Assets:

******
Assets
******

nanos.world provides fully capabilities of modifying, including and customizing the game. In this section we will explain how to include custom Assets in your server.


Structure
---------

Assets can be included in a folder called ``Assets/`` in the root server folder. All files in there will be sent to the clients and will be able to be referenced in your scripting code.

.. attention:: Assets folders named ``NanosWorld/`` are forbidden as this name is used for Paths for built-in assets already included in the game.

.. code-block:: javascript

   NanosWorldServer.exe
   Packages/
   Assets/
   |   My_Asset_Pack_01/
   |   |   My_Asset_01.uasset
   |   |   My_Asset_02.uasset
   |   |   My_Big_Map.umap
   |   |   ...
   |   Awesome_Weapons/
   |   |   Big_Fucking_Gun.uasset
   |   |   AwesomeWeaponBundle.pak
   |   |   ...


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

.. attention:: Do not use Engine's Content in your assets (e.g. Engine's Materials or Assets). If you wants to use them, always copy them to the Content folder.

For this tutorial, we are going to use a simple Cube (Static Mesh) and a Material (applied to the cube) for our Assets. We've also created and placed them in a folder called MyPack which will help us afterwards.

.. image:: https://i.imgur.com/H5x15qE.png

.. image:: https://i.imgur.com/jcwWd0L.png

For exporting them in a recognizable way by nanos.world, you need to "Package the Project" (i.e. cooking and packaging it).

Before moving on, we just need to change two settings, for that open the Packaging Settings:

.. image:: https://i.imgur.com/CKWmKwl.png

And deselect ``Use Pak File`` and ``Share Material Shader Code`` settings:

.. image:: https://i.imgur.com/0dqzFh9.png

And you are done! Now you just need to Package it! For that just select the following option and select any folder in your computer and wait it finishes, it may take some minutes:

.. image:: https://i.imgur.com/h0fMzGa.png

.. image:: https://i.imgur.com/ImGjShf.png

After finishing, you will get a folder like that:

.. image:: https://i.imgur.com/FnUex4P.png


Importing and Using Assets in your Server
-----------------------------------------

After packaging your project, we will manually copy the files we want from it, they will be located at ``NanosWorldAssets/Content/`` (or whatever is the name of your project). As we created a folder called ``MyPack``, our exported assets will be at ``NanosWorldAssets/Content/MyPack/``: 

.. image:: https://i.imgur.com/BIzXctE.png

And thats it! You can now just copy ``MyPack/`` folder inside your Server's ``Assets/`` folder and reference your Cube like ``Prop(Vector(0, 0, 0), Rotator(0, 0, 0), "MyPack/SM_Cube")`` when loading a Prop for example.

.. image:: https://i.imgur.com/H0B7WWp.png


Going Further
-------------

If you want to know more, please move to :ref:`Modding`.