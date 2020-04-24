.. _Packages:

********
Packages
********


About
-----

nanos.world provides a way of customizating and creating custom gamemodes for your server. You can separate your gamemodes and functionalities in different Packages (or you can call it Modules).


.. note:: Each Package will have its own memory space and are not interconnected with other Packages.

.. note:: Under linux the CamelCase is necessary for folder and `Index.lua` names.


Structure
---------

All Packages must go under ``Packages`` folder, each Package is a folder under that. Each Package must contain the following folder: ``Server``, ``Client`` and ``Shared``. Client and Shared will be sent to the Clients when they connect. Server and Shared will run only on Server and won't be sent to Clients.

.. note:: Shared packages are always loaded before.


Example
-------

.. code-block::

   NanosWorldServer.exe
   Packages/
   |   My_Package_01/
   |   |   Server/
   |   |   |   Index.lua
   |   |   |   *.lua
   |   |   Client/
   |   |   |   *.lua
   |   |   Shared/
   |   |   |   *.lua
   |   My_Package_02/
   |   |   ...