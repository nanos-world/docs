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
    - Ban(:term:`string` reason)
    - Bans the player from the server

  * - |server-only-label|
    - 
    - Connect(:term:`string` IP, :term:`string` password = "")
    - Redirects the player to another server

  * - |server-only-label|
    - 
    - Kick(:term:`string` reason)
    - Kicks the player from the server

  * - |server-only-label|
    - 
    - Possess(:ref:`Character` new_character)
    - Bind the ``Player`` to a :ref:`Character` 

  * - 
    - 
    - SetCameraLocation(:ref:`Vector` location)
    - Sets the Player's Camera Location (only works if not possessing any Character)

  * - 
    - 
    - SetCameraRotation(:ref:`Rotator` rotation)
    - Sets the Player's Camera Rotation

  * - |server-only-label|
    - 
    - SetName(:term:`string` new_name)
    - Sets the player's name

  * - 
    - 
    - SetValue( |br-p| :term:`string` key, |br-p| :term:`any` value, |br-p| :term:`boolean` sync_on_clients |br| )
    - Sets a value in this entity, which can be accessed by any package (optionally sync on clients if called from server)

  * - |server-only-label|
    - 
    - SetVOIPChannel(:term:`number` channel)
    - Sets the VOIP Channel of this Player (will only communicate with other players in the same channel)

  * - 
    - 
    - SetVOIPSetting(:term:`VOIPSetting` setting)
    - Sets the VOIP Settings of this Player (*Local, Global, Muted*)

  * - |server-only-label|
    - 
    - UnPossess()
    - Release the ``Player`` from the :ref:`Character` 

  * - 
    - :term:`string`
    - GetAccountID()
    - Gets the nanos account ID

  * - 
    - :term:`string`
    - GetAccountName()
    - Gets the nanos account name

  * - |client-only-label|
    - :ref:`Vector`
    - GetCameraLocation()
    - Gets the Player's Camera Location 

  * - |client-only-label|
    - :ref:`Rotator`
    - GetCameraRotation()
    - Gets the Player's Camera Rotation 

  * - 
    - :ref:`Character`
    - GetControlledCharacter()
    - Returns the character of the player. If the player has not yet been assigned a character, :term:`nil` is returned.

  * - 
    - :term:`number`
    - GetID()
    - Gets the network ID of this entity (same in both client and server)

  * - |server-only-label|
    - :term:`string`
    - GetIP()
    - Gets the IP of this Player

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
    - :term:`number`
    - GetVOIPChannel()
    - Returns the VOIP Channel of this Player

  * - 
    - :term:`any`
    - GetValue(:term:`string` Key)
    - Gets a value given a key

  * - |client-only-label|
    - :term:`boolean`
    - IsLocalPlayer()
    - Returns if this is the LocalPlayer

  * - 
    - :term:`boolean`
    - IsValid()
    - Returns if this entity is valid (i.e. wasn't destroyed and points to a valid entity)

  * - 
    - :term:`VOIPSetting`
    - GetVOIPSetting()
    - Returns this Player VOIP Setting

  * - 
    - 
    - Subscribe(:term:`string` event_name, :term:`function`)
    - Subscribes for an Event 

  * - 
    - 
    - Unsubscribe(:term:`string` event_name, :term:`function` = nil)
    - Unsubscribes from all subscribed Events in this Entity and in this Package, optionally passing the function to unsubscribe only that callback


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
    - :ref:`Player` player, |br| :ref:`Character` character
    - A ``Player`` was bound to a :ref:`Character`

  * -
    - Spawn
    - :ref:`Player` player
    - Triggered when Player connects to the server

  * - |server-only-label|
    - Ready
    - :ref:`Player` player
    - Triggered when Player is ready (the client fully joined, loaded the map and all entities and is ready to play)

  * -
    - UnPossess
    - :ref:`Player` player, |br| :ref:`Character` character
    - A :ref:`Character` was released from the ``Player``

  * -
    - VOIP
    - :ref:`Player` player, |br| :term:`boolean` is_talking
    - When a Player starts/ends using VOIP