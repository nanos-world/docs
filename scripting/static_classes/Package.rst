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
    - any
    - Call(:term:`string` package_name, :term:`string` function_name, :term:`table` {args...})
    - Calls an exported function from an other Package

  * -
    - 
    - Export(:term:`string` function_name, :term:`function` function)
    - 'Exports' a function to be called from any other Package

  * -
    -
    - Log(:term:`string` message)
    - Logs a message in the console (the proper and Nanos way)

  * -
    -
    - Require(:term:`string` script_file)
    - Includes new .lua files

  * -
    -
    - RequirePackage(:term:`string` package_name)
    - Includes other Package in this Package

  * -
    -
    - SetPersistentData(:term:`string` key, any Value)
    - Sets a Persistent Value which will be saved to Disk

  * -
    - :term:`table`\<:term:`string`\>
    - GetFiles(:term:`string` path_filter = "", :term:`string` extension_filter = "")
    - Gets a list of all files in this package, optionally with filters

  * -
    - :term:`string`
    - GetName()
    - Gives the package name

  * -
    - :term:`string`
    - GetPath()
    - Gives the package path

  * -
    - :term:`table`\<any\>
    - GetPersistentData()
    - Gets all Persistent Values from the Disk

  
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
