.. _MapsAndLevels:

*************
Maps & Levels
*************

Maps and Levels are quite the most straightforward asset that you can create and import. In Unreal, Maps are called ``Levels``, usually these levels are filled with a Landscape component to make the terrain, some Lights and some Static Meshes (Trees, Houses, etc).

.. tip:: Please refer to `Unreal's Official tutorial - Working with Levels <https://docs.unrealengine.com/en-US/Engine/Levels/HowTo/WorkWithLevelAssets/index.html>`_.


Rules for creating a Map/Level for nanos.world
----------------------------------------------

1. Do not spawn/place Dynamic Meshes (with Physics), as they will not be synced in-game. You need to spawn them as a :ref:`Prop` on the scripting.


.. attention:: Most of :ref:`World` functions rely on our own assets and code, so it is not (yet) possible to change the lighting or weather in your custom Map with :ref:`World` scripting functions.

After exporting your project (refer to :ref:`Assets`), you can just reference your map in your server config like ``MyPack/MyLevel``.