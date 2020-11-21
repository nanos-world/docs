.. _Vehicle:

.. include:: ../common/common.rst

*******
Vehicle
*******

.. image:: https://i.imgur.com/IzVg8VU.jpg

Vehicles are 4-wheeled entities which :ref:`Character`\s can possesses and drive. Any Skeletal Mesh can be used to create a Vehicle, although only Skeletal Meshes with Wheels bones can use the built-in feature of animated Wheels.

.. note:: Currently only 4-Wheeled vehicles is supported.

.. tip:: Please take a look at our Default's Vehicle package with all built-in Vehicles already properly configured and ready to use: `<https://github.com/nanos-world/nanos-world-vehicles>`_.


Related Tutorials
-----------------

.. raw:: html

	<script>
		DrawCard(
			"../../tutorials/MonsterTruck.html",
			"https://i.imgur.com/pBoXKZe.jpg",
			"Monster Truck",
			"Check how to configure a vehicle to transform it in a Monster Truck."
		);
	</script>


Usage
-----

.. tabs::
 .. code-tab:: lua Lua

	-- Spawns a SUV Vehicle
	local vehicle = Vehicle(Vector(0, 0, 100), Rotator(), "NanosWorld::SK_SUV", 0, true, false, true, "NanosWorld::A_Vehicle_Engine_14")

	-- Configure it's Engine Speed and Steering Wheel location
	vehicle:SetEngineSetup(4500)
	vehicle:SetSteeringWheelSetup(Vector(0, 20, 131), 26)

	-- Configures each Wheel
	vehicle:SetWheel(0, "Wheel_Front_Left",  35, 22, 50, 20, 0.25, 2, 17, 1000, 50, 50, 10)
	vehicle:SetWheel(1, "Wheel_Front_Right", 35, 22, 50, 20, 0.25, 2, 17, 1000, 50, 50, 10)
	vehicle:SetWheel(2, "Wheel_Rear_Left",   35, 22,  0, 20, 0.25, 2, 17, 1000, 50, 50, 10) 
	vehicle:SetWheel(3, "Wheel_Rear_Right",  35, 22,  0, 20, 0.25, 2, 17, 1000, 50, 50, 10)

	-- Adds 4 Doors/Seats
	vehicle:SetDoor(0, Vector( 22, -80, 120), Vector(-18, -47, 110), Rotator(0, 0, 15), 75, -150)
	vehicle:SetDoor(1, Vector( 22,  80, 120), Vector( 5,   39,  90), Rotator(0, 0,  0), 60,  150)
	vehicle:SetDoor(2, Vector(-80, -80, 120), Vector(-60, -39,  90), Rotator(0, 0,  0), 60, -150)
	vehicle:SetDoor(3, Vector(-80,  80, 120), Vector(-60,  39,  90), Rotator(0, 0,  0), 60,  150)

	-- Make it ready (so clients only create Physics once and not for each function call above)
	vehicle:RecreatePhysics()


Constructor Parameters
----------------------

.. list-table:: 
  :widths: 10 60 30

  * - **Type**
    - **Name**
    - **Default**

  * - :ref:`Vector`
    - Location
    - Vector(0, 0, 0)

  * - :ref:`Rotator`
    - Rotation
    - Rotation(0, 0, 0)

  * - :term:`string`
    - ModelName (Skeletal Mesh)
    - 

  * - :term:`number`
    - CollisionType
    - 0 (Normal)

  * - :term:`boolean`
    - GravityEnabled
    - true

  * - :term:`boolean`
    - AutoCreatePhysics *(can be disabled to improve performance when setting several configs. Must call* ``RecreatePhysics()`` *after all)*
    - true

  * - :term:`boolean`
    - AutoUnflip *(auto rotates the vehicle if flipped)*
    - true

  * - :term:`string`
    - EngineSoundAsset
    - NanosWorld::A_Vehicle_Engine_01

  * - :term:`string`
    - HornSoundAsset
    - NanosWorld::A_Vehicle_Horn_Toyota

  * - :term:`string`
    - BrakeSoundAsset
    - NanosWorld::A_Vehicle_Brake

  * - :term:`string`
    - EngineStartSoundAsset
    - NanosWorld::A_Car_Engine_Start

  * - :term:`string`
    - VehicleDoorSoundAsset
    - NanosWorld::A_Vehicle_Door


.. note:: Most of the functions below will reset the vehicle Physics State (automatically), which means the vehicle will stop immediately if moving.

Functions
---------

.. list-table:: 
  :widths: 5 10 45 40

  * - 
    - **Returns**
    - **Name**
    - **Description**

  * - |server-only-label|
    - 
    - AddStaticMeshAttached(:term:`string` ID, :term:`string` StaticMeshPath, :term:`string` Socket = "", :ref:`Vector` RelativeLocation = Vector(), :ref:`Rotator` RelativeRotation = Rotator())
    - Spawns and Attaches a StaticMesh into this Vehicle in a Socket with relative Location and Rotation. Uses a custom ID to be used for removing it further

  * - |server-only-label|
    - 
    - Horn(:term:`boolean` Bool)
    - Starts or stops the vehicles horn

  * - |server-only-label|
    - 
    - RecreatePhysics()
    - Recreate the Vehicle Physics (call this after configuring the vehicle if using AutoCreatePhysics = false)

  * - |server-only-label|
    - 
    - RemoveStaticMeshAttached(:term:`string` ID)
    - Removes, if existing, a StaticMesh from this Vehicle given it's custom ID

  * - |server-only-label|
    - 
    - SetDifferentialSetup(:term:`number` DifferentialType = 0, :term:`number` FrontRearSplit = 0.45, :term:`number` FrontLeftRightSplit = 0.5, :term:`number` RearLeftRightSplit = 0.5, :term:`number` CenterBias = 1.3, :term:`number` FrontBias = 1.3, :term:`number` RearBias = 1.3)
    - Configures the Vehicle Differential. Check the page bottom to see each property explanation

  * - |server-only-label|
    - 
    - SetEngineSetup(:term:`number` MaxRPM = 4500, :term:`number` MOI = 1, :term:`number` DampingRateFullThrottle = 0.15, :term:`number` DampingRateZeroThrottleClutchEngaged = 2, :term:`number` DampingRateZeroThrottleClutchDisengaged = 0.35)
    - Configures the Vehicle Engine. Check the page bottom to see each property explanation

  * - |server-only-label|
    - 
    - SetVehicleSetup(:term:`number` DragCoefficient = 0.3, :term:`number` ThrottleInputRiseRate = 6, :term:`number` ThrottleInputFallRate = 10, :term:`number` BrakeInputRiseRate = 6, :term:`number` BrakeInputFallRate = 10, :term:`number` HandbrakeInputRiseRate = 12, :term:`number` HandbrakeInputFallRate = 12, :term:`number` SteeringInputRiseRate = 2.5, :term:`number` SteeringInputFallRate = 5)
    - Configures the Vehicle General Settings. Check the page bottom to see each property explanation

  * - |server-only-label|
    - 
    - SetTransmissionSetup(:term:`boolean` bAutomaticTransmission = true, :term:`number` GearSwitchTime = 0.5, :term:`number` GearAutoBoxLatency = 2, :term:`number` FinalRatio = 4, :term:`number` ClutchStrength = 10)
    - Configures the Vehicle Transmission. Check the page bottom to see each property explanation

  * - |server-only-label|
    - 
    - SetWheel(:term:`number` Index (0-3), :term:`string` BoneName, :term:`number` ShapeRadius = 30, :term:`number` ShapeWidth = 10, :term:`number` SteerAngle = 70, :term:`number` Mass = 20, :term:`number` DampingRate = 0.25, :term:`number` LatStiffMaxLoad = 2, :term:`number` LatStiffValue = 17, :term:`number` LongStiffValue = 1000, :term:`number` SuspensionForceOffset = 0, :term:`number` SuspensionMaxRaise = 10, :term:`number` SuspensionMaxDrop = 10, :term:`number` SuspensionNaturalFrequency = 7, :term:`number` SuspensionDampingRatio = 1, :term:`number` MaxBrakeTorque = 1500, :term:`number` MaxHandbrakeTorque = 3000, :term:`boolean` bAffectedByHandbrake = true, :ref:`Vector` Offset = Vector(0, 0, 0))
    - Configures a Vehicle Wheel. Check the page bottom to see each property explanation

  * - |server-only-label|
    - 
    - SetDoor(:term:`number` SeatIndex, :ref:`Vector` OffsetLocation, :ref:`Vector` SeatLocation, :ref:`Rotator` SeatRotation, :term:`number` TriggerRadius, :term:`number` LeaveLateralOffset)
    - Adds a Door at OffsetLocation from root which will pose the Character at SeatLocation with SeatRotation rotation. LeaveLateralOffset is where the Character will be ejected when leaving it (e.g. -150 for left door or 150 for right door)

  * - |server-only-label|
    - 
    - SetSteeringWheelSetup(:ref:`Vector` Location, :term:`number` Radius)
    - Configures where the Steering Wheel is located, so Characters can grab it procedurally properly

  * - |server-only-label|
    - 
    - SetHeadlightsSetup(:ref:`Vector` Location, :ref:`Color` Color = Color(1, 0.86, 0.5))
    - Configures the Headlights Offset and Color.

  * - 
    - :term:`string`
    - GetAssetName()
    - Gets the Asset name

  * -
    - :ref:`Character`
    - GetPassenger(:term:`number` Seat)
    - Gets all passengers. Returns :term:`nil` if Seat is invalid or empty.

  * -
    - :ref:`Character`\[]
    - GetPassengers()
    - Gets all passengers


.. include:: ../common/functions/Actor.rst


Events
------

.. list-table::
  :widths: 5 15 30 50
   
  * -
    - **Name**
    - **Arguments**
    - **Description**

  * -
    - Horn
    - :ref:`Vehicle` self, :term:`boolean` IsHonking
    - When Vehicle honks

  * -
    - Hit
    - :ref:`Vehicle` self, :term:`number` Intensity
    - When Vehicle hits something

.. include:: ../common/events/Actor.rst


Parameters Detailed
-------------------

.. list-table:: 
  :widths: 20 80

  * - **Parameter Name**
    - **Description**

  * - :term:`number` DifferentialType
    - 0 - LimitedSlip_4W, 1 - LimitedSlip_FrontDrive, 2 - LimitedSlip_RearDrive, 3 - Open_4W, 4 - Open_FrontDrive, 5 - Open_RearDrive


  * - :term:`number` FrontRearSplit 
    - Ratio of torque split between front and rear (>0.5 means more to front, <0.5 means more to rear, works only with 4W type)

  * - :term:`number` FrontLeftRightSplit
    - Ratio of torque split between front-left and front-right (>0.5 means more to front-left, <0.5 means more to front-right, works only with 4W and LimitedSlip_FrontDrive)

  * - :term:`number` RearLeftRightSplit
    - Ratio of torque split between rear-left and rear-right (>0.5 means more to rear-left, <0.5 means more to rear-right, works only with 4W and LimitedSlip_RearDrive)

  * - :term:`number` CenterBias
    - Maximum allowed ratio of average front wheel rotation speed and rear wheel rotation speeds (range: 1..inf, works only with LimitedSlip_4W)

  * - :term:`number` FrontBias
    - Maximum allowed ratio of front-left and front-right wheel rotation speeds (range: 1..inf, works only with LimitedSlip_4W, LimitedSlip_FrontDrive)

  * - :term:`number` RearBias
    - Maximum allowed ratio of rear-left and rear-right wheel rotation speeds (range: 1..inf, works only with LimitedSlip_4W, LimitedSlip_FrontDrive)

  * - :term:`number` MaxRPM
    - Maximum revolutions per minute of the engine

  * - :term:`number` MOI
    - Moment of inertia of the engine around the axis of rotation (Kgm^2)

  * - :term:`number` DampingRateFullThrottle
    - Damping rate of engine when full throttle is applied (Kgm^2/s) 

  * - :term:`number` DampingRateZeroThrottle ClutchEngaged
    - Damping rate of engine in at zero throttle when the clutch is engaged (Kgm^2/s)

  * - :term:`number` DampingRateZeroThrottle ClutchDisengaged
    - Damping rate of engine in at zero throttle when the clutch is disengaged (in neutral gear) (Kgm^2/s)

  * - :term:`number` DragCoefficient
    - DragCoefficient of the vehicle chassis

  * - :term:`number` ...InputRiseRate
    - Rate at which the input value rises

  * - :term:`number` ...InputFallRate
    - Rate at which the input value falls

  * - :term:`number` GearSwitchTime
    - Time it takes to switch gears (seconds)

  * - :term:`number` GearAutoBoxLatency
    -  Minimum time it takes the automatic transmission to initiate a gear change (seconds)

  * - :term:`number` FinalRatio
    - The final gear ratio multiplies the transmission gear ratios

  * - :term:`number` ClutchStrength
    - Strength of clutch (Kgm^2/s)

  * - :term:`number` ShapeRadius
    - Radius of the wheel

  * - :term:`number` ShapeWidth
    - Width of the wheel

  * - :term:`number` SteerAngle
    - Steer angle in degrees for this wheel

  * - :term:`number` Mass
    - Mass of this wheel

  * - :term:`number` DampingRate
    - Damping rate for this wheel (Kgm^2/s)

  * - :term:`number` LatStiffMaxLoad
    - Max normalized tire load at which the tire can deliver no more lateral stiffness no matter how much extra load is applied to the tire

  * - :term:`number` LatStiffValue
    - How much lateral stiffness to have given lateral slip

  * - :term:`number` LongStiffValue
    - How much longitudinal stiffness to have given longitudinal slip

  * - :term:`number` SuspensionForceOffset
    - Vertical offset from where suspension forces are applied (along Z-axis)

  * - :term:`number` SuspensionMaxRaise
    - How far the wheel can go above the resting position

  * - :term:`number` SuspensionMaxDrop
    - How far the wheel can drop below the resting position

  * - :term:`number` SuspensionNaturalFrequency
    - Oscillation frequency of suspension. Standard cars have values between 5 and 10

  * - :term:`number` SuspensionDampingRatio
    - The rate at which energy is dissipated from the spring. Standard cars have values between 0.8 and 1.2. Values < 1 are more sluggish, values > 1 or more twitchy

  * - :term:`number` MaxBrakeTorque
    - Max brake torque for this wheel (Nm)

  * - :term:`number` MaxHandbrakeTorque
    - Max handbrake brake torque for this wheel (Nm). A handbrake should have a stronger brake torque than the brake. This will be ignored for wheels that are not affected by the handbrake

  * - :ref:`Vector` Offset
    - If BoneName is specified, offset the wheel from the bone's location. Otherwise this offsets the wheel from the vehicle's origin
