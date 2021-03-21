********
Glossary
********


Lua Types
=========

.. tip:: For more information and tutorials, please refer to `Official Lua Documentation <https://www.lua.org/pil/2.html>`_.

.. glossary::

	number
		The number type represents real (double-precision floating-point) numbers. Lua has no integer type, as it does not need it. There is a widespread misconception about floating-point arithmetic errors and some people fear that even a simple increment can go weird with floating-point numbers. The fact is that, when you use a double to represent an integer, there is no rounding error at all (unless the number is greater than 100,000,000,000,000). Specifically, a Lua number can represent any long integer without rounding problems. Moreover, most modern CPUs do floating-point arithmetic as fast as (or even faster than) integer arithmetic.

	string
		Strings have the usual meaning: a sequence of characters. Lua is eight-bit clean and so strings may contain characters with any numeric value, including embedded zeros. That means that you can store any binary data into a string. Strings in Lua are immutable values. You cannot change a character inside a string, as you may in C; instead, you create a new string with the desired modifications, as in the next example: 

	function
		Functions are first-class values in Lua. That means that functions can be stored in variables, passed as arguments to other functions, and returned as results. Such facilities give great flexibility to the language: A program may redefine a function to add new functionality, or simply erase a function to create a secure environment when running a piece of untrusted code (such as code received through a network). Moreover, Lua offers good support for functional programming, including nested functions with proper lexical scoping; just wait. Finally, first-class functions play a key role in Lua's object-oriented facilities.

	boolean
		The boolean type has two values, false and true, which represent the traditional boolean values. However, they do not hold a monopoly of condition values: In Lua, any value may represent a condition. Conditionals (such as the ones in control structures) consider false and nil as false and anything else as true. Beware that, unlike some other scripting languages, Lua considers both zero and the empty string as true in conditional tests. 

	nil
		Nil is a type with a single value, nil, whose main property is to be different from any other value. As we have seen, a global variable has a nil value by default, before a first assignment, and you can assign nil to a global variable to delete it. Lua uses nil as a kind of non-value, to represent the absence of a useful value.

	table
		The table type implements associative arrays. An associative array is an array that can be indexed not only with numbers, but also with strings or any other value of the language, except nil. Moreover, tables have no fixed size; you can add as many elements as you want to a table dynamically. Tables are the main (in fact, the only) data structuring mechanism in Lua, and a powerful one. We use tables to represent ordinary arrays, symbol tables, sets, records, queues, and other data structures, in a simple, uniform, and efficient way. Lua uses tables to represent packages as well. When we write io.read, we mean "the read entry from the io package". For Lua, that means "index the table io using the string "read" as the key".

	any
		We use :term:`any` here in the Docs to represent that any Type can be used.


nanos world Enumerators
=======================

.. tip:: Instead of passing numbers to methods or comparing numbers in Events callbacks, you can use the following Enums to do so. Examples:

.. tabs::
 .. code-tab:: lua Lua

   Character:Subscribe("StanceModeChanged", function(character, old_stance, new_stance)
      if (new_stance == StanceMode.Standing) then
         Package:Log("I'm Standing!")
      else if (new_stance == StanceMode.Crouching) then
         Package:Log("I'm Crouching!")
      end
   end)

   local my_light = Light(Vector(-152, 245, 115), Rotator(), Color(1, 0, 0), LightType.Point)

   character:SetViewMode(ViewMode.FPS)


.. note:: The functions which use the Enums are still receiving numbers as parameters (as always), using Enums is just a facilitator.


.. glossary::

	AimMode
		.. code-block:: lua

			{ None = 0, ADS = 1, ZoomedZoom = 2, Zoomed = 3, ZoomedFar = 4 }

	AnimationSlotType
		.. code-block:: lua

			{ FullBody = 0, UpperBody = 1 }

	AttenuationFunction
		.. code-block:: lua

			{ Linear = 0, Logarithmic = 1, Inverse = 2, LogReverse = 3, NaturalSound = 4 }

	CameraMode
		.. code-block:: lua

			{ FPSTPS = 0, FPSOnly = 1, TPSOnly = 2 }

	CollisionType
		.. code-block:: lua

			{ Normal = 0, StaticOnly = 1, NoCollision = 2 }

	ConstraintMotion
		.. code-block:: lua

			{ Free = 0, Limited = 1, Locked = 2 }

	DamageType
		.. code-block:: lua

			{ Shot = 0, Explosion = 1, Punch = 2, Fall = 3, RunOver = 4, Unknown = 5 }

	DifferentialType
		.. code-block:: lua

			{ LimitedSlip_4W = 0, LimitedSlip_FrontDrive = 1, LimitedSlip_RearDrive = 2, Open_4W = 3, Open_FrontDrive = 4, Open_RearDrive = 5 }

	FallingMode
		.. code-block:: lua

			{ None = 0, Jumping = 1, Climbing = 2, Vaulting = 3, Falling = 4, HighFalling = 5, Parachuting = 6, SkyDiving = 7 }

	FontType
		.. code-block:: lua

			{ Roboto = 0, GothicA1 = 1, PoiretOne = 2 }

	GaitMode
		.. code-block:: lua

			{ None = 0, Walking = 1, Sprinting = 2 }

	HandlingMode
		.. code-block:: lua

			{ SingleHandedWeapon = 0, DoubleHandedWeapon = 1, SingleHandedMelee = 2, DoubleHandedMelee = 3, Throwable = 4, Torch = 5, Barrel = 6, Box = 7 }

	LogType
		.. code-block:: lua

			{ Display = 0, Warning = 1,	Error = 2, Debug = 3, Verbose = 4, Scripting = 5, Chat = 6, WebUI = 7 }

	LightType
		.. code-block:: lua

			{ Point = 0, Spot = 1, React = 2 }

	MaterialType
		.. code-block:: lua

			{ Masked = 1, Translucent = 2 }

	SoundType
		.. code-block:: lua

			{ SFX = 0, Music = 1 }

	StanceMode
		.. code-block:: lua

			{ None = 0, Standing = 1, Crouching = 2, Proning = 3 }

	SwimmingMode
		.. code-block:: lua

			{ None = 0, Superficie = 1, Underwater = 2 }

	TextRenderHorizontalAlignment
		.. code-block:: lua

			{ Left = 0, Center = 1, Right = 2 }

	TextRenderType
		.. code-block:: lua

			{ Lit = 0, Unlit = 1, UnlitAlwaysVisible = 2 }

	TextRenderVerticalAlignment
		.. code-block:: lua

			{ Top = 0, Center = 1, Bottom = 2, QuadTop = 3 }

	ViewMode
		.. code-block:: lua

			{ FPS = 0, TPS1 = 1, TPS2 = 2, TPS3 = 3 }

	VOIPSetting
		.. code-block:: lua

			{ Local = 0, Global = 1, Muted = 2 }
