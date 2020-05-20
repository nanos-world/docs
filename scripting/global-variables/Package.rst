.. _Package:

.. include:: ../common/common.rst

*******
Package
*******

.. tip:: This is a global variable named ``Package``. It is not possible to initialize or create a new instance. It's just a global variable.

.. attention:: This page is under construction.


Functions
---------

.. list-table:: 
  :widths: 5 10 35 50

  * - 
    - **Returns**
    - **Name**
    - **Description**

  * -
    - :term:`string`
    - GetName()
    - Gives the package name

  * -
    -
    - Require(:term:`string` ScriptFile)
    - Includes new .lua files

  * -
    -
    - RequirePackage(:term:`string` PackageName)
    - Includes other Package in this Package

  * -
    -
    - Log(:term:`string` Message)
    - Logs a message in the console (the proper and Nanos way)

  
Events
------

.. list-table::
  :widths: 5 15 30 50
   
  * -
    - **Name**
    - **Arguments**
    - **Description**

  * -
    - Load
    - 
    - Is called as soon as a package is loaded.

  * -
    - Unload
    - 
    - Is called as soon as a package is unloaded.


Examples
--------

.. tabs::
 .. code-tab:: lua Lua

    -- prints the package name at the "Load" event
    Package:on("Load", function()
      print("Load package: " .. Package:GetName())
    end)

    -- prints the package name at the "Unload" event
    Package:on("Unload", function()
      print("Unload package: " .. Package:GetName())
    end)
