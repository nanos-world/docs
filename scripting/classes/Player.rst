.. _Player:

.. include:: ../common/common.rst

******
Player
******

Players are Entities that represents the individual behind the mouse and keyboard. Players are spawned automatically when connected to the server.


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
    - :term:`string`
    - GetName()
    - Returns the player's name

  * - |server-only-label|
    - 
    - SetName(:term:`string`)
    - Sets the player's name

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

  * - |client-only-label|
    - :term:`boolean`
    - IsLocalPlayer()
    - Returns if this is the LocalPlayer

  * - 
    - 
    - SetCameraRotation(:ref:`Rotator`)
    - Sets the Player's Camera Rotation

  * - 
    - 
    - SetCameraLocation(:ref:`Vector`)
    - Sets the Player's Camera Location (only works if not possessing any Character)

  * - |server-only-label|
    - 
    - Kick(:term:`string` Reason)
    - Kicks the player from the server

  * - |server-only-label|
    - 
    - Ban(:term:`string` Reason)
    - Bans the player from the server

  * - 
    - :term:`boolean`
    - IsValid()
    - Returns if this is Valid

  * - 
    - :term:`string`
    - GetType()
    - Returns the type of this Actor

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

  * -
    - Spawn
    - :ref:`Player` player
    - Triggered when Player connects to the server

  * -
    - Destroy
    - :ref:`Player` player
    - Triggered when Player disconnects from the server