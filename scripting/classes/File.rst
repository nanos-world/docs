.. _File:

.. include:: ../common/common.rst

****
File
****

A File represents an entry to a system file.

.. note:: Currently it is not possible to Delete or Rename files, that will be added for a future update.

.. note:: This is a server side class. It is not possible to open files from outsite the server folder. All path must be relative to the Server's executable folder. All files are opened as binary file by default.


Example
-------

.. tabs::
 .. code-tab:: lua Lua

    local configuration_file = File("my_awesome_configuration.json")

    local configuration_file_json = JSON.parse(configuration_file:Read(configuration_file:Size()))


Constructor Parameters
----------------------

.. list-table:: 
  :widths: 10 65 25

  * - **Type**
    - **Name**
    - **Default**

  * - :term:`string`
    - file_path
    - 

  * - :term:`boolean`
    - truncate
    - false


Functions
---------

.. list-table:: 
  :widths: 10 35 55

  * - **Returns**
    - **Name**
    - **Description**

  * - 
    - Close()
    - Closes the file

  * - 
    - Flush()
    - Flushes content to the file

  * - :term:`boolean`
    - IsEOF()
    - Checks if the file status is End of File

  * - :term:`boolean`
    - IsBad()
    - Checks if the file status is Bad

  * - :term:`boolean`
    - IsGood()
    - Checks if the file status is Good

  * - :term:`boolean`
    - HasFailed()
    - Checks if the last operation has Failed

  * - :term:`string`
    - Read(:term:`number` length = 0)
    - Reads n (Length) characters from the File and returns it. Also moves the file pointer to the latest read position. Pass 0 to read the whole file

  * - :term:`string`
    - ReadLine()
    - Reads and returns the next file line

  * - 
    - Seek(:term:`number` position)
    - Sets the file pointer to a specific position

  * - :term:`number`
    - Size()
    - Returns the size of the file

  * - 
    - Skip(:term:`number` amount)
    - Skips n (Amount) positions from the current file pointer position

  * - :term:`number`
    - Tell()
    - Returns the current file pointer position

  * - :term:`number`
    - Time()
    - Returns when the file was last modified in Unix time

  * - 
    - Write(:term:`string` data)
    - Writes the Data at the current position of the file
