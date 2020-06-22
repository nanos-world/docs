.. _Timer:

.. include:: ../common/common.rst

*****
Timer
*****

.. tip:: This is a namespace named ``Timer``. It is not possible to initialize or create Instances. It's just a name with Functions which are accessed with ``.`` instead of ``:``. This is going to be changed soon ;).

.. attention:: This page is under construction.


Functions
---------

.. list-table:: 
  :widths: 10 45 45

  * - **Returns**
    - **Name**
    - **Description**

  * - :term:`number` ID
    - SetTimeout(:term:`number` Cooldown, :term:`table` {Args...}, :term:`function` Function)
    - Sets a Timeout which will call Function at every Cooldown milliseconds, returns false inside the function to stops it 

  * -
    - ClearTimeout(:term:`number` ID)
    - Clears/Cancel a Timeout given it's ID


Examples
--------

.. tabs::
 .. code-tab:: lua Lua

    -- creates a Timeout to call a function at every 1 second
    local my_id = Timer.SetTimeout(1000, {}, function()
        Package:Log("Tick 1 second!")
    end)

    -- cancels the timeout
    Timer.ClearTimeout(my_id)

    my_function = function(my_param)
        Package:Log("nanos " .. my_param)
        return false
    end

    -- creates a Timeout to call my_function in 5 seconds, once
    local my_id = Timer.SetTimeout(5000, {"world"}, my_function)