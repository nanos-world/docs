.. _Package:

.. include:: ../common/common.rst

*******
Package
*******

.. tip:: This is a Static Class named ``Package``. You can access it's methods directly with ``:``. It is not possible to initialize or create new instances.


Functions
---------

.. list-table:: 
  :widths: 5 10 35 50

  * - 
    - **Returns**
    - **Name**
    - **Description**

  * -
    -
    - Log(:term:`string` Message)
    - Logs a message in the console (the proper and Nanos way)

  * -
    -
    - Require(:term:`string` ScriptFile)
    - Includes new .lua files

  * -
    -
    - RequirePackage(:term:`string` PackageName)
    - Includes other Package in this Package

  * -
    - :term:`string`
    - GetName()
    - Gives the package name

  
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
