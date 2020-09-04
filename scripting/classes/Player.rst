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

  * - |server-only-label|
    - 
    - Ban(:term:`string` Reason)
    - Bans the player from the server

  * - |server-only-label|
    - 
    - Kick(:term:`string` Reason)
    - Kicks the player from the server

  * - |server-only-label|
    - 
    - Possess(:ref:`Character` NewCharacter)
    - Bind the ``Player`` to a :ref:`Character` 

  * - 
    - 
    - SetCameraLocation(:ref:`Vector`)
    - Sets the Player's Camera Location (only works if not possessing any Character)

  * - 
    - 
    - SetCameraRotation(:ref:`Rotator`)
    - Sets the Player's Camera Rotation

  * - |server-only-label|
    - 
    - SetName(:term:`string`)
    - Sets the player's name

  * - 
    - 
    - SetValue(:term:`string` Key, any Value)
    - Sets a value in this entity, which can be accessed by any package (local only)

  * - |server-only-label|
    - 
    - SetVOIPChannel(:term:`number` Channel)
    - Sets the VOIP Channel of this Player (will only communicate with other players in the same channel)

  * - |server-only-label|
    - 
    - SetVOIPMuted(:term:`boolean` IsMuted)
    - Mutes/Unmutes this Player

  * - |server-only-label|
    - 
    - UnPossess()
    - Release the ``Player`` from the :ref:`Character` 

  * - 
    - :ref:`Character`
    - GetControlledCharacter()
    - Returns the character of the player. If the player has not yet been assigned a character, :term:`nil` is returned.

  * - 
    - :term:`string`
    - GetName()
    - Returns the player's name

  * - 
    - :term:`number`
    - GetPing()
    - Returns the ping of a player

  * - 
    - :term:`string`
    - GetType()
    - Returns the type of this Actor

  * - 
    - :term:`int`
    - GetVOIPChannel()
    - Returns the VOIP Channel of this Player

  * - 
    - any
    - GetValue(:term:`string` Key)
    - Gets a value given a key

  * - |client-only-label|
    - :term:`boolean`
    - IsLocalPlayer()
    - Returns if this is the LocalPlayer

  * - 
    - :term:`boolean`
    - IsValid()
    - Returns if this is Valid

  * - 
    - :term:`boolean`
    - IsVOIPMuted()
    - Returns if this Player is muted (VOIP)


Events
------

.. list-table::
  :widths: 5 15 30 50
   
  * -
    - **Name**
    - **Arguments**
    - **Description**

  * -
    - Destroy
    - :ref:`Player` player
    - Triggered when Player disconnects from the server

  * -
    - Possess
    - :ref:`Player` player, :ref:`Character` character
    - A ``Player`` was bound to a :ref:`Character`

  * -
    - Spawn
    - :ref:`Player` player
    - Triggered when Player connects to the server

  * -
    - UnPossess
    - :ref:`Player` player, :ref:`Character` character, :term:`boolean` bIsPlayerDisconnecting
    - A :ref:`Character` was released from the ``Player``