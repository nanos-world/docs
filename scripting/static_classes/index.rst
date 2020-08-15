.. _StaticClasses:

**************
Static Classes
**************

In nanos world, all interactions are made through a **Class** or a **Static Class**. That means 99% of things you would do needs an Object/Table reference to be done. With that in mind, this page will list all nanos world Objects which already exists and/or is spawned by default and can be accessed from anywhere.

For example, if you want to interact with World (move the sun, set it rain, etc), you will need the ``World`` Static Class:

.. tabs::
 .. code-tab:: lua Lua

	-- make it 9:25 AM
	World:SetTime(9, 25)

.. note:: ``World`` is a Static Class and exists by default, i.e. you do not need (or can) spawn World entities. P.S.: the code above is client-only.


Static Class List
-----------------

.. toctree::
   :maxdepth: 1
   :name: toc-scripting-global-variables
   :glob:

   Client.rst
   Events.rst
   Package.rst
   NanosWorld.rst
   Render.rst
   Server.rst
   Timer.rst
   World.rst
