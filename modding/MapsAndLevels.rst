.. _MapsAndLevels:

*************
Maps & Levels
*************

Maps and Levels are quite the most straightforward asset that you can create and import. In Unreal, Maps are called ``Levels``, usually these levels are filled with a Landscape component to make the terrain, some Lights and some Static Meshes (Trees, Houses, etc).

.. tip:: Please refer to `Unreal's Official tutorial - Working with Levels <https://docs.unrealengine.com/en-US/Engine/Levels/HowTo/WorkWithLevelAssets/index.html>`_.


Rules for creating a Map/Level for nanos.world
----------------------------------------------

1. Do not spawn/place Dynamic Meshes (with Physics), as they will not be synced in-game. You need to spawn them as a :ref:`Prop` on the scripting.

2. Add a "Sun" actor-tag to all Lighting/Sky/Sun related actors (DirectionalLight, SkyLight, DomeMesh, SkyAtmosphere or SunSky), this will allow, if wanted, to your light to be overridden by scripters to use instead the Official NanosWorld Sun through `World.SpawnDefaultSun()`, which allows light/sun customization.

.. attention:: Most of :ref:`World` functions rely on our own assets and code, so it is not (yet) possible to change the lighting or weather in your custom Map with :ref:`World` scripting functions.

After exporting your project (refer to :ref:`Assets`), you can just reference your map in your server config like ``MyPack::MyLevel``.


Custom Map Script
-----------------

Maps can also have a **Custom Script** (server-only) attached to it. These are files named ``[MAP_NAME].lua`` in the same folder as the map in the ``Assets/`` folder. If no one of your Packages disallow it, this script file will be loaded as well. Usually these scripts should have map specific spawn props/weapons points and pertinent stuff.


Tutorial for Creating your own Map
----------------------------------

Please refer to our Official Tutorial :ref:`CreatingMaps`.