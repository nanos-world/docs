.. _Classes:

*******
Classes
*******

All entities in nanos world are represented by a Class. In Lua, classes are represented by :term:`table`\s. That means that every interaction with entities (:ref:`Player`\s, :ref:`Character`\s, :ref:`Prop`\s, etc) are made with Classes/Tables functions following an `OOP (Object-oriented programming <https://en.wikipedia.org/wiki/Object-oriented_programming>`_ pattern). In this page we will explain more about that.

If you read our Getting Started :ref:`ScriptingQuickStart` guide, you noticed we were spawning entities in the format ``my_var = Entity()`` (with a constructor), and after that we could interact with our entity with ``my_var:my_function()``, this is how OOP works, you create objects and call functions/catch events on that object. Unlike other scripting games which have tons of global functions and events to interact with entities, our nanos world scripting is a modern approach to modern programming.

As already stated, spawning Entities is easy as:

.. tabs::
 .. code-tab:: lua Lua

    -- Spawning a Character in the world
    local my_character = Character()

Each Class have it's own **Constructor**, **Properties**, **Functions** and **Events**. At the bottom of this page you'll be able to see a list of Classes which can be spawned in nanos world.

Under the hood, our Classes follow an `Inheritance Pattern <https://en.wikipedia.org/wiki/Inheritance_(object-oriented_programming)>`_, which means we have a master parent class, and it's childs which inherits all functions, events and properties from it's parents. You will notice that all Classes that can be spawned in the world are ``Actors``, because of that some Classes like :ref:`Character` and :ref:`Prop` will contain functions and events sections saying "Inherited from Actor", which means all these functions and events are the same in all Actor's inherited Classes, for example on all Actors it is possible to call the function: ``:SetLocation(Vector)``.

.. tip:: :ref:`Weapon`, :ref:`Grenade` and :ref:`Item` inherits from a ``Pickable`` class, as they all are pickable entities which characters can pick up and hold them.


Class List
----------

.. toctree::
   :maxdepth: 1
   :name: toc-scripting-classes
   :glob:

   Character.rst
   Grenade.rst
   Item.rst
   Light.rst
   Player.rst
   Prop.rst
   Trigger.rst
   Sound.rst
   Vehicle.rst
   Weapon.rst
   WebUI.rst
