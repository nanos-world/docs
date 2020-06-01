.. _Events:

.. include:: ../common/common.rst

******
Events
******

Events (or Callbacks) are the way to transmit and send data between Packages or between Client and Server side.


.. tip:: This is a global variable named ``Events``. It is not possible to initialize or create a new instance. It's just a global variable.

.. tip:: It is possible to pass any kind of Official Classes and Structures (:ref:`Vector`, :ref:`Rotator`, :ref:`Color`, :ref:`Character`, :ref:`Player`, :ref:`Prop`, etc...) through events, including through network =D!

.. attention:: It is NOT (yet) possible to send tables on Network Events.


Functions
---------

.. list-table:: 
  :widths: 45 55

  * - **Name**
    - **Description**

  * - Call(:term:`string` EventName, :term:`table` {Args...})
    - Calls an Event which will be triggered in all Local Packages

  * - CallRemote(:term:`string` EventName, :term:`table` {Args...})
    - Calls an Event which will be triggered in all Remote Packages


Registering an Event
--------------------

.. tabs::
 .. code-tab:: lua Lua

    -- Register an event callback which will be triggered for both local and remote Events
    Events:on("MyEvent", function(...)
        -- Your code goes here
    end)