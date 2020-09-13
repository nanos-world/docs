.. _JSON:

.. include:: ../common/common.rst

****
JSON
****

JSON library, useful for sending data from Client's Package to :ref:`WebUI` environment.

.. note:: nanos world implements a lightweight JSON library from https://github.com/rxi/json.lua.


Usage
-----

.. tabs::
 .. code-tab:: lua Lua

    local encoded_value = JSON.Encode({ 1, 2, 3, { x = 10 } }) -- Returns '[1,2,3,{"x":10}]'

    local decoded_value = JSON.Decode('[1,2,3,{"x":10}]') -- Returns { 1, 2, 3, { x = 10 } }


Functions
---------

.. list-table::
  :widths: 15 35 50
   
  * - **Returns**
    - **Name**
    - **Description**

  * - :term:`string`
    - Encode(any value)
    - Returns a string representing value encoded in JSON

  * - any value
    - Decode(:term:`string` Str)
    - Returns a value representing the decoded JSON string
