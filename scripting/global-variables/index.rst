.. _GlobalVariables:

****************
Global Variables
****************

In nanos.world, all interactions are made above a Class or a Global Variable / Namespace. That means 99% of things you would do needs an Object/Table reference to be done. With that in mind, this page will list all nanos.world Objects which already exists and/or is spawned by default and can be accessed from anywhere.

For example, if you want to interact with World (move the sun, set it rain, etc), you will need the ``World`` Global Variable:

.. tabs::
 .. code-tab:: lua Lua

	-- make it 9:25 AM
	World.SetTime(9, 25)

.. note:: ``World`` is a Namespace and exists by default, i.e. you do not need (or can) spawn World entities. P.S.: the code above is client-only.

.. attention:: Some Global Variables are ``Namespaces``, which means their functions are called with ``.`` instead of ``:``. Others are just instances of a ``Class`` (for example: :ref:`Package` and :ref:`Events` are Instances of Classes, and :ref:`Render` is a Namespace). This is going to be standardized soon. 

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
