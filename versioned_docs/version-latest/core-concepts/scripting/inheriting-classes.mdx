---
title: Inheriting Classes
description: How to inherit nanos world Classes
sidebar_position: 8
tags: [scripting]
---


How to inherit nanos world Classes. nanos world provides a built-in way of inheriting the built-in Classes

:::caution

This feature is still **experimental**, you can try it out and provide feedback before it's full release!

:::


### Inheriting a Class

Inheriting a nanos world Class is really easy, for that you just need to use the `Inherit` static method on the Class you want to inherit:

```lua showLineNumbers
-- Creates a new Class called "MyNewClass" inheriting from Prop
-- and stores it in the variable MyNewClass
MyNewClass = Prop.Inherit("MyNewClass")

-- Spawn it using the default constructor
local my_new_class_instance = MyNewClass(Vector(), Rotator(), "nanos-world::SM_Cube")
```


### Multiple Inheritance

You can also inherit from other inherited classes:

```lua showLineNumbers
-- Creates a new Class called "MyNewSubClass" inheriting from MyNewClass
MyNewSubClass = MyNewClass.Inherit("MyNewSubClass")

-- Spawn it using the default constructor
local instance = MyNewSubClass(Vector(), Rotator(), "nanos-world::SM_Cube")
```


### Overriding the Constructor

You can create your own Constructor for your entities, for that you need to define the `Constructor` method:

```lua showLineNumbers
-- Defines my constructor with any parameters you desire
function MyNewClass:Constructor(location, rotation)
    -- Do any kind of logic here
    location = location + Vector(0, 0, 100)

    -- Calls Super Constructor to finalize the construction
    -- This is the original constructor (in this case from Prop)
    -- This is mandatory, if you don't call it, it will throw an error
    -- You will only be able to access original and your own class
    -- methods after calling it, when the class is completely spawned
    self.Super:Constructor(location, rotation, "nanos-world::SM_Cube")

    -- Now it's allowed to class methods
	self:SetMaterialColorParameter("Tint", Color.RED)
end

-- Spawn it using your custom constructor
local my_new_class_instance = MyNewClass(Vector(123, 456, 100), Rotator())
```

:::tip

Inside the constructor, the entity is not fully spawned yet, so you cannot call other entity methods besides `self.Super:Constructor`. Here you should just use to validate constructor parameters, and use `Spawn` event to fully setup the entity.

:::


### Global Registry

Through the parent class, we can get a list of all children classes of that class, having a global registry of all existing classes!

```lua showLineNumbers
local children_classes = ToolGun.GetInheritedClasses()
for _, class in pairs(children_classes) do
    -- 'class' is a custom inherited class! we can spawn it
    local p = class()
end
```


### Adding new Methods

Adding new methods for new classes is very straightforward, let's say we want to add a new method for **MyNewClass**, we just do that:

```lua showLineNumbers
function MyNewClass:Explode()
    -- Spawns a particle
    Particle(self:GetLocation(), Rotator(), "nanos-world::P_Explosion")

    -- Destroys myself
    self:Destroy()
end
```

:::tip

Within your methods, you can access the called entity instance with `self`.

:::

And then you are able to call it as usual:

```lua showLineNumbers
my_new_class_instance:Explode()
```


### Overriding Existing Methods

Besides creating new methods, it's possible to override existing ones, for that just redefine them:

```lua showLineNumbers
function MyNewClass:SetLocation(new_location)
    -- Do any kind of logic here
    new_location = new_location + Vector(0, 0, 100)

    -- Call Super to set the location to the parent Prop
    self.Super:SetLocation(new_location)
end
```


### Calling Native Methods

To call native Class methods, you can use the special variable `self.Super`, which will allow you accessing the native and original methods directly:

```lua showLineNumbers
function MyNewClass:GetRotation()
    -- Calls original GetRotation and adds 90 to yaw
    return self.Super:GetRotation() + Rotator(0, 90, 0)
end
```


### Calling Parent Methods

Besides calling the original/native method with `self.Super`, we can also call parent methods if you have nested inheritance.

For that, you must use a special Lua syntax with `PARENT_CLASS.METHOD_NAME(self, ...)`, for example:

:::tip

In Lua, passing a value as the first parameter to a method while calling it with `.` will make that value appear as `self` inside the called method (if the method was defined with `:`).

:::

```lua showLineNumbers
-- Inherits Prop
MyNewClass = Prop.Inherit("MyNewClass")

function MyNewClass:SetScale(scale)
    -- Does some logic
    scale = scale * 2

    -- Calls Super (original Prop method)
    self.Super:SetScale(scale) * 2
end

-- Inherits MyNewClass
MyNewSubClass = MyNewClass.Inherit("MyNewSubClass")

function MyNewSubClass:SetScale(scale)
    -- Does some logic
    scale = scale + Vector(2, 2, 2)

    -- Calls Parent MyNewClass method with special syntax
    MyNewClass.SetScale(self, scale)
end
```

:::tip

This same rule applies for calling inherited Constructors!

:::


### Overriding `__newindex`

It is also possible to add a custom `__newindex` metamethod on Inherited Classes.

:::tip

`__newindex` metamethod is a function which is triggered when you attempt to **set** a value in an entity. E.g.: `my_entity.something = 123`.

:::

For that, we just add a custom method called **`newindex`**:

:::note

The method name must be `newindex` and not `__newindex` as `__newindex` is the native method used internally to make the inheritance to work.

:::


```lua showLineNumbers
function MyNewClass:newindex(key, value)
	Console.Log("Setting a %s value: %s = %s", tostring(self), key, tostring(value))
end
```

An useful way of using `__newindex` is overriding it to `SetValue` automatically:

```lua showLineNumbers
function MyNewClass:newindex(key, value)
    self:SetValue(key, value)
end

-- Example usage
local my_entity = MyNewClass()
my_entity.amazing_value = 123
```


### Overriding `__index`

:::tip

`__index` metamethod is a function which is triggered when you attempt to **get** a value from an entity. E.g.: `local value = my_entity.something`.

:::

For that, we just add a custom method called **`index`**:

:::note

The method name must be `index` and not `__index` as `__index` is the native method used internally to make the inheritance to work.

:::

```lua showLineNumbers
function MyNewClass:index(key)
	Console.Log("Getting %s value: %s", tostring(self), key)
    -- ... do something
    return some_value
end
```

You can also use `__index` to return a method:

```lua showLineNumbers
function MyNewClass:index(key)
	Console.Log("%s key not found: %s", tostring(self), key)

    -- inside the redirected method you will have all the parameters passed originally
    return function(self, param1, param2...)
        -- ... do something
        return "triggered!"
    end

    -- or you can even redirect to other member functions
    return MyClass.SetLocation
end

local my_entity = MyNewClass()
my_entity:NonExistentMethod(123, "456")
```

An useful way of using `__index` is overriding it to `GetValue` automatically:

```lua showLineNumbers
function MyNewClass:index(key)
    return self:GetValue(key)
end

local my_entity = MyNewClass()
local amazing_value = my_entity.amazing_value
```


### Overriding `__tostring`

You can override `__tostring` as well as usual:

```lua showLineNumbers
function MyNewClass:__tostring()
	return "My Incredible Class!"
end
```


### Native Events

All events which are triggered on an inherited Class will only trigger in that Class and it's parents, also the parameter passed is the custom entity itself, example:

```lua showLineNumbers
Prop.Subscribe("Spawn", function(self)
    Console.Log("Spawned Prop: %s", tostring(self))
end)

MyNewClass.Subscribe("Spawn", function(self)
    Console.Log("Spawned MyNewClass: %s", tostring(self))
end)

local my_entity = MyNewClass()
local my_prop = Prop()
local my_other_entity_inherited_from_prop = MyOtherClass()

-- Will output:
--  Spawned Prop: MyNewClass
--  Spawned MyNewClass: MyNewClass
--  Spawned Prop: Prop
--  Spawned Prop: MyOtherClass
```

Another way of subscribing is separating the definition and the subscription, this way you don't need the first `self` parameter anymore:

```lua showLineNumbers
function MyNewClass:OnSpawn()
    -- self is present is this context automatically
    Console.Log("Spawned MyNewClass: %s", tostring(self))
end

MyNewClass.Subscribe("Spawn", MyNewClass.OnSpawn)
```


#### Multiple Parents Example:

```lua showLineNumbers
MyNewClass = Prop.Inherit("MyNewClass")
MyNewSubClass = MyNewClass.Inherit("MyNewSubClass")
MyNewOtherSubClass = MyNewClass.Inherit("MyNewOtherSubClass")

Prop.Subscribe("Spawn", function(self)
    Console.Log("Spawned Prop: %s", tostring(self))
end)

MyNewClass.Subscribe("Spawn", function(self)
    Console.Log("Spawned MyNewClass: %s", tostring(self))
end)

MyNewSubClass.Subscribe("Spawn", function(self)
    Console.Log("Spawned MyNewSubClass: %s", tostring(self))
end)

MyNewOtherSubClass.Subscribe("Spawn", function(self)
    Console.Log("Spawned MyNewOtherSubClass: %s", tostring(self))
end)

local my_entity = MyNewSubClass()

-- Will output:
--  Spawned Prop: MyNewClass
--  Spawned MyNewClass: MyNewClass
--  Spawned MyNewSubClass: MyNewClass
```

:::tip

Note that **Prop** and all **parent** Classes will still trigger events for all child Classes!

:::


### Client/Server Synchronization

If you define your entities on both Client and Server side, they will behave properly and in a synchronized way! Example:

```lua "title=Server/Index.lua" showLineNumbers
MyNewClass = Prop.Inherit("MyNewClass")

MyNewClass.Subscribe("Spawn", function(self)
    Console.Log("Spawned MyNewClass: %s", tostring(self))
end)

local my_entity = MyNewClass()

-- Will output:
--  Spawned MyNewClass: MyNewClass
```

```lua "title=Client/Index.lua" showLineNumbers
MyNewClass = Prop.Inherit("MyNewClass")

MyNewClass.Subscribe("Spawn", function(self)
    -- It was spawned on server and will spawn on Client as a MyNewClass properly
    Console.Log("Spawned MyNewClass: %s", tostring(self))
end)

-- Will output:
--  Spawned MyNewClass: MyNewClass
```


### Custom Remote Events

It is also possible to trigger custom events on remote instances of your Class, using the methods `CallRemoteEvent` or `BroadcastRemoteEvent`, it works like the `Events` class:

```lua title="Client/Index.lua" showLineNumbers
-- inherits the Class
MyNewClass = Prop.Inherit("MyNewClass")

-- defines a custom method
function MyNewClass:OnMyCustomRemoteEvent(a, b)
    Console.Log("OnMyCustomRemoteEvent!", tostring(self), a, b)
    self:CallRemoteEvent("AnotherRemoteEvent", 456, "def")
end

-- subscribes for a custom remote event
MyNewClass.SubscribeRemote("MyCustomRemoteEvent", MyNewClass.OnMyCustomRemoteEvent)
```

```lua title="Server/Index.lua" showLineNumbers
-- inherits the Class
MyNewClass = Prop.Inherit("MyNewClass")

-- Note that server-side received remote events have the 'player as first parameter
function MyNewClass:OnAnotherRemoteEvent(player, a, b)
    Console.Log("OnAnotherRemoteEvent!", tostring(self), tostring(player), a, b)
end

-- subscribes for a custom remote event
MyNewClass.SubscribeRemote("AnotherRemoteEvent", MyNewClass.OnAnotherRemoteEvent)

-- spawns an entity and calls the custom remote event on that entity
local p = MyNewClass(...)
p:BroadcastRemoteEvent("MyCustomRemoteEvent", 123, "abc")
```


### Class Custom Default Values

It is possible to set a list of default values to the Inherited Class when creating it, just pass it as the 2nd parameter to `Inherit`:

```lua showLineNumbers
-- inherits the Class
MyNewClass = Prop.Inherit("MyNewClass", {
	name = "My Name",
	category = "breakable",
	my_custom_param = 123
})

Console.Log(MyNewClass.category)
-- outputs "breakable"
```


### Class Register Event

When you inherit a new class, the event `ClassRegister` will be triggered on the parents classes, allowing Packages to know when a new Class is registered.

```lua showLineNumbers
Prop.Subscribe("ClassRegister", function(class)
	-- here we see an useful case for the default values
	-- as we can access it here
	Console.Log(MyNewClass.name) -- outputs "My Name
	-- now we can do something (add to spawn menu?)
end)

-- inherits the Class
MyNewClass = Prop.Inherit("MyNewClass", {
	name = "My Name",
	category = "breakable",
	my_custom_param = 123
})
```