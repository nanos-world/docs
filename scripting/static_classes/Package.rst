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
    - :term:`any`
    - Call( |br-p| :term:`string` package_name, |br-p| :term:`string` function_name, |br-p| :term:`table` {args...}, |br-p| throw_error = true |br| )
    - Calls an exported function from an other Package

  * -
    -
    - Error(:term:`string` message, ...)
    - Logs and formats an error message in the console in Red (the proper and nanos way)

  * -
    - 
    - Export(:term:`string` function_name, :term:`function` function)
    - 'Exports' a function to be called from any other Package

  * -
    -
    - Log(:term:`string` message, ...)
    - Logs and formats a message in the console (the proper and nanos way)

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
    - Subscribe(:term:`string` event_name, :term:`function`)
    - Subscribes for an Event 

  * - 
    - 
    - Unsubscribe(:term:`string` event_name, :term:`function` = nil)
    - Unsubscribes from all subscribed Events in this Class and in this Package, optionally passing the function to unsubscribe only that callback

  * -
    -
    - Warn(:term:`string` message, ...)
    - Logs and formats a warning message in the console in Orange (the proper and nanos way)

  * -
    -
    - SetPersistentData(:term:`string` key, :term:`any` Value)
    - Sets a Persistent Value which will be saved to Disk

  * -
    - :term:`table`\<:term:`string`\>
    - GetDirectories(:term:`string` path_filter = "")
    - Gets a list of all directories in this package, optionally with filters

  * -
    - :term:`table`\<:term:`string`\>
    - GetFiles( |br-p| :term:`string` path_filter = "", |br-p| :term:`string` extension_filter = "" |br| )
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
    - :term:`table`\<:term:`any`\>
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
    - Called as soon as a package is loaded.

  * -
    - Unload
    - 
    - Called as soon as a package is unloaded.


Examples
--------

.. tabs::
 .. code-tab:: lua Lua

    -- prints the package name at the "Load" event
    Package:Subscribe("Load", function()
      print("Load package: " .. Package:GetName())
    end)

    -- prints the package name at the "Unload" event
    Package:Subscribe("Unload", function()
      print("Unload package: " .. Package:GetName())
    end)
