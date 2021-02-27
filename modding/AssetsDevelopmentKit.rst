.. _AssetsDevelopmentKit:

****************************
Assets Development Kit - ADK
****************************

nanos world provides a fully configurable and ready Unreal Project to help you integrating assets and maps much faster. This project contains Placeholders, Tools and Correct References that must be used in order to create Characters and make proper Physical Materials, for example.


Downloading nanos world Assets Development Kit - ADK
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Please refer to the official GitHub repository and download the latest `Assets Development Kit - ADK <https://github.com/nanos-world/assets-development-kit/releases/latest>`_ and extract it anywhere. You will find a ``NanosWorldADK.uproject`` file in there, just open it with Unreal Engine 4.26.1 and you are done!

When you open the project, you can start this Tutorial which will give you a brief information about the assets in there.

.. image:: https://i.imgur.com/ncKKP2q.png

.. warning:: DO NOT **MODIFY**, **DELETE**, **CREATE** or **COPY** any file inside ``NanosWorld/`` folder, otherwise the ADK will not work properly. Make sure you DO NOT modify them unintentionally! If asked to save any modified file in there, cancel it! All references must use ``NanosWorld/`` where they are.


Tools avaliable inside the ADK project:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. contents::
   :local:

Placeholder Blueprints ``NanosWorld/Blueprints/Placeholders/``
--------------------------------------------------------------

.. image:: https://i.imgur.com/t6MDCxW.png

You can use these Blueprints to set Spawn Positions of Vehicles, Weapons and Props. This works only to help you generating a Lua code with spawn positions after all. These Blueprints aren't cooked with the map. Use the **Lua Code Generator** to generate a Lua code with all spawn locations.


Lua Code Generator ``NanosWorld/Blueprints/Utility/WBP_LuaCodeGenerator``
-------------------------------------------------------------------------

.. image:: https://i.imgur.com/1lIbAMe.png

This is an **Editor Utility Widget** which scans your map and generate a list of spawn code with exact Location and Rotation for every Placeholder Blueprint you had spawned.

To run it, right click on it and press **Run Editor Utility Widget**:

.. image:: https://i.imgur.com/4e4zCou.png


Assets.toml Generator ``NanosWorld/Blueprints/Utility/WBP_AssetsTomlGenerator``
-------------------------------------------------------------------------------

.. image:: https://i.imgur.com/qQBGocw.png

This is an **Editor Utility Widget** which scans a folder (determined by the TextBox) and generates an `Assets.toml` with all Assets in the folder (which can be used in nanos world).


Sun & Sky Actor ``NanosWorld/Blueprints/World/BP_SunSky``
---------------------------------------------------------

A pre-configured Sun & Sky Actor which can be used and easily replaced by nanos world Official Sun with ``World:SpawnDefaultSun()``. This is useful to get an approximate result of how the light will look like in-game if you decide to Spawn the Default Sun.

.. note:: If you override it with ``World:SpawnDefaultSun()``, no configuration you did on it will persist, i.e. all Light Intensity, Color, Post Process and other configuration will be lost.


Physical Materials ``NanosWorld/MaterialLibrary/PhysicalMaterials/``
--------------------------------------------------------------------

.. image:: https://i.imgur.com/SkBteAq.png

If you are creating a Material, you can use these Physical Materials do integrate better with nanos world. Using these Physical Materials will allow nanos world recognize which type of surface your Prop/Object is, giving it the proper auto-generated Hit Sound. DO NOT modify or rename them, only use them in your Materials.


Mannequin Skeleton ``NanosWorld/Characters/Common/SKEL_Mannequin``
------------------------------------------------------------------

To be able to create Skeletal (Character) Meshes which work with our :ref:`Character` entity, you must set your Skeletal Mesh to use our Mannequin Skeleton. This Skeleton is the same as Unreal Engine 4 default Mannequin, so any Skeletal Mesh which uses UE4's Mannequin Skeleton will work for us!

To change a Skeletal Mesh's Skeleton: right click on it >> Skeleton >> Assign Skeleton and change it to our ``SKEL_Mannequin``.

.. image:: https://i.imgur.com/uGnNCTM.png


Thumbnail Generator ``NanosWorld/Blueprints/Utility/ThumbnailGenerator``
------------------------------------------------------------------------

We've shipped a **Thumbnail Generator** tool to help you generating ``.jpg`` images of your assets. To use that, just open ThumbnailGenerator level and hit Play. Then you will be able to define a folder for search the assets (currently only Static and Skeletal Meshes are supported) and a folder to save the images (.jpg). You can optionally keep the directory hierarchy in the output folder or save all images in the same folder. Once you hit **Generate**, it will start loading all assets and taking a photo from them. Note: this may be a slow process depending if your assets were already compiled previously.

.. image:: https://i.imgur.com/AuWcMTE.png
