.. _StaticMeshes:

*************
Static Meshes
*************

A Static Mesh is the most straightforward asset to be imported and used in nanos world, as they don't have skeleton, their usage is very seamless. In nanos world Static Meshes are mainly used for Props or for attachments on Characters and/or Weapons.

.. tip:: Please refer to Unreal's `Static Mesh <https://docs.unrealengine.com/en-US/Engine/Content/Types/StaticMeshes/index.html>`_ official definition and usage, also for informations on how to import a .FBX into Unreal, how to otpimize it and so on. There is also thousands of tutorials regarding importing a .FBX from Blender (or other Moddeling tool) into Unreal Engine.


Material and Mesh Color
-----------------------

For a Mesh to have a color, it must contain a `Material <https://docs.unrealengine.com/en-US/Engine/Rendering/Materials/index.html>`_ assigned to it. Materials are the paint of a Mesh. In nanos world, our materials have some parameters exposed so you can tweak them at the scripting part. The most important parameter and which exists in all materials is: ``Tint``, so if you want your mesh to have it's color customized by scripting, just give it a ``Tint`` parameter (which multiplies your Base Color input), which that, ``:SetBaseColor()`` will affect your mesh.