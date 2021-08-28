---
description: How to create a Monster Truck using the Vehicle system
tags: [tutorial-example, scripting, assets]
---

# Monster Truck

How to create a Monster Truck using the Vehicle system.

![](/img/docs/tutorials/monster-truck.jpg)


```lua title="Server/Index.lua"
-- Spawns a Pickup
local vehicle = Vehicle(Vector(0, 0, 100), Rotator(), "nanos-world::SK_Pickup", 0, true, false, true, "nanos-world::A_Vehicle_Engine_10")

-- Configures it
vehicle:SetEngineSetup(4500)
vehicle:SetSteeringWheelSetup(Vector(0, 27, 120), 24)
vehicle:SetHeadlightsSetup(Vector(250, 0, 70))

-- Adds 4 Static Mesh wheels attached to each mesh's Wheel Bone (those won't have collision and are visual only)
vehicle:AddStaticMeshAttached("wheel_rear_left",   "nanos-world::SM_Tire_01", "Wheel_Rear_Left",   Vector(0, -35, 0), Rotator(0, -90, 0))
vehicle:AddStaticMeshAttached("wheel_rear_right",  "nanos-world::SM_Tire_01", "Wheel_Rear_Right",  Vector(0,  45, 0), Rotator(0, -90, 0))
vehicle:AddStaticMeshAttached("wheel_front_left",  "nanos-world::SM_Tire_01", "Wheel_Front_Left",  Vector(0, -35, 0), Rotator(0,  90, 0))
vehicle:AddStaticMeshAttached("wheel_front_right", "nanos-world::SM_Tire_01", "Wheel_Front_Right", Vector(0,  45, 0), Rotator(0,  90, 0))

-- Configures each "Physical" Wheel, note that as our Wheel Static Mesh has height of 160 and width 60, we configure the wheels to have radius
-- of 80 and width 60, also because of SK_Pickup bones are not perfectly aligned, left wheels must be laterally offset a bit
vehicle:SetWheel(0, "Wheel_Front_Left",  80, 60, 30, 20, 0.25, 2, 17, 1000, 0, 100, 10, 7, 1, 1500, 3000, true, Vector(0, -80, 0))
vehicle:SetWheel(1, "Wheel_Front_Right", 80, 60, 30, 20, 0.25, 2, 17, 1000, 0, 100, 10, 7, 1, 1500, 3000, true, Vector(0,  90, 0))
vehicle:SetWheel(2, "Wheel_Rear_Left",   80, 60, 30, 20, 0.25, 2, 17, 1000, 0, 100, 10, 7, 1, 1500, 3000, true, Vector(0, -80, 0))
vehicle:SetWheel(3, "Wheel_Rear_Right",  80, 60, 30, 20, 0.25, 2, 17, 1000, 0, 100, 10, 7, 1, 1500, 3000, true, Vector(0,  90, 0))

-- Adds only a Passenger and Driver door/seat
vehicle:SetDoor(0, Vector(50, -75, 105), Vector( 8, -32.5,  95), Rotator(0, 0, 10), 70, -150)
vehicle:SetDoor(1, Vector(50,  75, 105), Vector(25,    50,  90), Rotator(0, 0,  0), 70,  150)

-- As we set AutoCreatePhysics = false on the constructor, we need to call this after configuring it (so if there is any player connected, he
-- doesn't need to recreate the physics for each function called - improving the performance)
vehicle:RecreatePhysics()
```


