.. _JSON:

.. include:: ../common/common.rst

****
JSON
****

JSON library, useful for sending data from Client's Package to :ref:`WebUI` environment.

.. note:: nanos world implements a lightweight JSON library from https://github.com/rxi/json.lua.

.. tip:: This structure is Open Sourced at https://github.com/nanos-world/nanos-world-lua-lib/blob/master/json.lua. Feel free to push merge requests and suggest changes!


Usage
-----

.. tabs::
 .. code-tab:: lua Lua

    local encoded_value = JSON.stringify({ 1, 2, 3, { x = 10 } }) -- Returns '[1,2,3,{"x":10}]'

    local decoded_value = JSON.parse('[1,2,3,{"x":10}]') -- Returns { 1, 2, 3, { x = 10 } }


.. note:: Note that custom classes (e.g. Vehicle, Vector, Character... etc) aren't stringified with this functions and stringifying them will cause unknown behavior.


Functions
---------

.. list-table::
  :widths: 15 35 50
   
  * - **Returns**
    - **Name**
    - **Description**

  * - :term:`string`
    - stringify(:term:`any` value)
    - Returns a string representing value encoded in JSON

  * - :term:`any` value
    - parse(:term:`string` str)
    - Returns a value representing the decoded JSON string
