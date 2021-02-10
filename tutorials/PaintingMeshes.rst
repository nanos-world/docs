.. _PaintingMeshes:


***************
Painting Meshes
***************

This tutorial will teach how to use the new Material customization methods included in `0.54.0` update.

.. image:: https://i.imgur.com/cL4T3rk.png

In Unreal Engine, a `Material <https://docs.unrealengine.com/en-US/RenderingAndGraphics/Materials/index.html>`_ is an asset that can be applied to a mesh to control the visual look of the scene. At a high level, it is probably easiest to think of a Material as the "paint" that is applied to an object. You can define its color, how shiny it is, whether you can see through the object, and much more.

In Unreal Engine, when you create a Material, you can define custom `Parameters <https://docs.unrealengine.com/en-US/RenderingAndGraphics/Materials/HowTo/Making_Parameters/index.html>`_ for it. So if you defined some parameters for a Material in a mesh, you can tweak it with simple comands in nanos world!

**nanos world** provides a bunch of methods to allow you to interact with the parameters you created for your materials using our scripting: ``SetMaterialVectorParameter``, ``SetMaterialScalarParameter``, ``SetMaterialColorParameter`` and ``SetMaterialTextureParameter``.

.. tip:: We provide a blank material with basic parameters already defined for you to customize it in a very basic way. To use that, call ``SetDefaultMaterial()`` in the entity!

.. figure:: https://i.imgur.com/JlxMDYU.png
   
   Default Nanos Material and it's Parameters


Example
-------

To illustrate, let's spawn a Cube and change it's Material using Lua:

.. tabs::
 .. code-tab:: lua Lua

   -- spawns a static mesh cube
   local my_cube = StaticMesh(Vector(300, 0, 100), Rotator(0, 45, 0), "NanosWorld::SM_Cube")
   -- replaces it's materials with the nanos defalt one
   my_cube:SetDefaultMaterial()

.. image:: https://i.imgur.com/69gsJpU.png


Now let's set it's material to red! To be able to do that, we must set the Color parameter named **Tint** as we've seen above is the name of parameters which is connected to Base Color of the Material.

.. tabs::
 .. code-tab:: lua Lua

   -- spawns a static mesh cube
   local my_cube = StaticMesh(Vector(300, 0, 100), Rotator(0, 45, 0), "NanosWorld::SM_Cube")
   -- replaces it's materials with the nanos defalt one
   my_cube:SetDefaultMaterial()

   -- paints it red
   my_cube:SetMaterialColorParameter("Tint", Color(1, 0, 0))


.. image:: https://i.imgur.com/w9Sm5KS.png


Now let's give it a metallic style! You can learn more about `Physically Based Materials <https://docs.unrealengine.com/en-US/RenderingAndGraphics/Materials/PhysicallyBased/index.html>`_ to know about how each input affects the final representation of a surface!


.. tabs::
 .. code-tab:: lua Lua

   -- spawns a static mesh cube
   local my_cube = StaticMesh(Vector(300, 0, 100), Rotator(0, 45, 0), "NanosWorld::SM_Cube")
   -- replaces it's materials with the nanos defalt one
   my_cube:SetDefaultMaterial()

   -- paints it red
   my_cube:SetMaterialColorParameter("Tint", Color(1, 0, 0))
   -- makes it metallic
   my_cube:SetMaterialScalarParameter("Metallic", 0.85)
   -- makes it glossy
   my_cube:SetMaterialScalarParameter("Roughness", 0)


.. image:: https://i.imgur.com/uem3QpU.png


A fun thing to do is to make a material fully reflective, like a mirror:

.. tabs::
 .. code-tab:: lua Lua

   -- spawns a static mesh cube
   local my_cube = StaticMesh(Vector(300, 0, 100), Rotator(0, 45, 0), "NanosWorld::SM_Cube")
   -- replaces it's materials with the nanos defalt one
   my_cube:SetDefaultMaterial()

   -- makes it fully metallic and glossy
   my_cube:SetMaterialScalarParameter("Metallic", 1)
   my_cube:SetMaterialScalarParameter("Roughness", 0)


.. image:: https://i.imgur.com/x22FhT8.png


It is even possible to load images (.jpg, .png, etc) from disk and apply to the mesh! For that you will need to create an Asset Pack (:ref:`AssetsQuickStart`) and place your images inside of it.

Let use `this (imgur) <https://i.imgur.com/67CGqHb.jpg>`_ image! Download it and place in a folder called ``MyAwesomePhotos/`` in your server/Assets folder.

.. image:: https://i.imgur.com/jT07X1T.png

Now make sure you require your new Asset Pack in your Package.toml to grant those files will be downloaded when you join the server:

.. image:: https://i.imgur.com/F7ffjnW.png

And now you can set it like that:

.. tabs::
 .. code-tab:: lua Lua

   -- spawns a static mesh cube
   local my_cube = StaticMesh(Vector(300, 0, 100), Rotator(0, 45, 0), "NanosWorld::SM_Cube")
   -- replaces it's materials with the nanos defalt one
   my_cube:SetDefaultMaterial()

   -- applies a custom texture to a parameter called "Texture"
   my_cube:SetMaterialTextureParameter("Texture", "MyAwesomePhotos/Syed.jpg")

.. image:: https://i.imgur.com/Lh5HKLb.png

And voila! Easy Peasy! Feel free to create your own materials and textures and tweak them in-game!