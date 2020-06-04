.. _Player:

.. include:: ../common/common.rst

******
Player
******

Players are Entities that represents the individual behind the mouse and keyboard. Players are spawned automatically when connected to the server.

.. attention:: This page is under construction.


Constructors
------------

You cannot Spawn or Destroy Players.


Functions
---------

.. list-table:: 
  :widths: 5 10 35 50

  * - 
    - **Returns**
    - **Name**
    - **Description**

  * - 
    - :term:`number`
    - GetPing()
    - Returns the ping of a player

  * - 
    - :ref:`Character`
    - GetControlledCharacter()
    - Returns the character of the player. If the player has not yet been assigned a character, :term:`nil` is returned.

  * - |server-only-label|
    - 
    - Possess(:ref:`Character` NewCharacter)
    - Bind the ``Player`` to a :ref:`Character` 

  * - |server-only-label|
    - 
    - UnPossess()
    - Release the ``Player`` from the :ref:`Character` 

  * - 
    - 
    - SetValue(:term:`string` Key, any Value)
    - Sets a value in this entity, which can be accessed by any package (local only)

  * - 
    - any
    - GetValue(:term:`string` Key)
    - Gets a value given a key


Events
------

.. list-table::
  :widths: 5 15 30 50
   
  * -
    - **Name**
    - **Arguments**
    - **Description**

  * -
    - Possess
    - :ref:`Player` player, :ref:`Character` character
    - A ``Player`` was bound to a :ref:`Character`

  * -
    - UnPossess
    - :ref:`Player` player, :ref:`Character` character, :term:`boolean` bIsPlayerDisconnecting
    - A :ref:`Character` was released from the ``Player``


Examples
--------

* Spawn player at random locations :ref:`TutorialSpawnPlayerRandomLocations`
