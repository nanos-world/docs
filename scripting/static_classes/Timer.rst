.. _Timer:

.. include:: ../common/common.rst

*****
Timer
*****

.. tip:: This is a Static Class named ``Timer``. You can access it's methods directly with ``:``. It is not possible to initialize or create new instances.


Functions
---------

.. list-table:: 
  :widths: 10 45 45

  * - **Returns**
    - **Name**
    - **Description**

  * - :term:`number` ID
    - SetTimeout(:term:`number` Cooldown, :term:`function` Function, [:term:`table` {Args...}])
    - Sets a Timeout which will call Function at every Cooldown milliseconds, returns false inside the function to stops it 

  * -
    - ClearTimeout(:term:`number` ID)
    - Clears/Cancel a Timeout given it's ID


Examples
--------

.. tabs::
 .. code-tab:: lua Lua

    -- creates a Timeout to call a function at every 1 second
    local my_id = Timer:SetTimeout(1000, function()
        Package:Log("Tick 1 second!")
    end)

    -- cancels the timeout
    Timer:ClearTimeout(my_id)

    my_function = function(my_param)
        Package:Log("nanos " .. my_param)
        return false
    end

    -- creates a Timeout to call my_function in 5 seconds, once
    local my_id = Timer:SetTimeout(5000, my_function, {"world"})