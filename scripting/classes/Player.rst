.. _Player:

.. include:: ../common/common.rst

******
Player
******

Chad Player

.. attention:: This page is under construction.


Usage
-----




Constructors
------------

An instance of the ``Player`` class cannot be manually created - it is automatically generated when a client establishes a connection.


Functions
---------

.. include:: ../common/functions/Actor.rst

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


Events
------

.. include:: ../common/events/Actor.rst


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

* Spawn player: :ref:`Tutorial-Spawn-Player`

* Spawn player at random locations :ref:`Tutorial-Spawn-Player-Random-Locations`
