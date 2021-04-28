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
    - location
    - Vector(0, 0, 0)

  * - :ref:`Rotator`
    - rotation
    - Rotator(0, 0, 0)

  * - :term:`string`
    - model_name (Skeletal Mesh)
    - 

  * - :term:`CollisionType`
    - collision_type
    - CollisionType.Normal

  * - :term:`boolean`
    - gravity_enabled
    - true

  * - :term:`boolean`
    - auto_create_physics *(can be disabled to improve performance when setting several configs. Must call* ``RecreatePhysics()`` *after all)*
    - true

  * - :term:`boolean`
    - auto_unflip *(auto rotates the vehicle if flipped)*
    - true

  * - :term:`string`
    - engine_sound_asset
    - NanosWorld::A_Vehicle_Engine_01

  * - :term:`string`
    - horn_sound_asset
    - NanosWorld::A_Vehicle_Horn_Toyota

  * - :term:`string`
    - brake_sound_asset
    - NanosWorld::A_Vehicle_Brake

  * - :term:`string`
    - engine_start_sound_asset
    - NanosWorld::A_Car_Engine_Start

  * - :term:`string`
    - vehicle_door_sound_asset
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

  * - 
    - 
    - AddStaticMeshAttached( |br-p| :term:`string` id, |br-p| :term:`string` static_mesh_path, |br-p| :term:`string` socket = "", |br-p| :ref:`Vector` relative_location = Vector(), |br-p| :ref:`Rotator` relative_rotation = Rotator() |br| )
    - Spawns and Attaches a StaticMesh into this Vehicle in a Socket with relative Location and Rotation. Uses a custom ID to be used for removing it further

  * - |server-only-label|
    - 
    - Horn(:term:`boolean`)
    - Starts or stops the vehicles horn

  * - |server-only-label|
    - 
    - RecreatePhysics()
    - Recreate the Vehicle Physics (call this after configuring the vehicle if using AutoCreatePhysics = false)

  * - 
    - 
    - RemoveStaticMeshAttached(:term:`string` id)
    - Removes, if existing, a StaticMesh from this Vehicle given it's custom ID

  * - 
    - 
    - SetDefaultMaterial( |br-p| :term:`MaterialType` material_type = MaterialType.Masked |br| )
    - Replaces all materials of this actor with a nanos basic material with comon parameters available (*Masked, Translucent, TranslucentDepth*)

  * - |server-only-label|
    - 
    - SetDifferentialSetup( |br-p| :term:`DifferentialType` differential_type = LimitedSlip_4W, |br-p| :term:`number` front_rear_split = 0.45, |br-p| :term:`number` front_left_right_split = 0.5, |br-p| :term:`number` rear_left_right_split = 0.5, |br-p| :term:`number` center_bias = 1.3, |br-p| :term:`number` front_bias = 1.3, |br-p| :term:`number` rear_bias = 1.3 |br| )
    - Configures the Vehicle Differential. Check the page bottom to see each property explanation

  * - |server-only-label|
    - 
    - SetEngineSetup( |br-p| :term:`number` max_rpm = 4500, |br-p| :term:`number` moi = 1, |br-p| :term:`number` damping_rate_full_throttle = 0.15, |br-p| :term:`number` d_r_zero_trt_clutch_engaged = 2, |br-p| :term:`number` d_r_zero_trt_clutch_disengaged = 0.35 |br| )
    - Configures the Vehicle Engine. Check the page bottom to see each property explanation

  * - 
    - 
    - SetMaterialColorParameter( |br-p| :term:`string` parameter_name, |br-p| :ref:`Color` color |br| )
    - Sets a Color parameter in this actor's material

  * - 
    - 
    - SetMaterialScalarParameter( |br-p| :term:`string` parameter_name, |br-p| :term:`number` scalar |br| )
    - Sets a scalar parameter in this actor's material

  * - 
    - 
    - SetMaterialTextureParameter( |br-p| :term:`string` parameter_name, |br-p| :term:`string` texture_path |br| )
    - Loads a image from computer (relative to `Assets/` folder) and sets as parameter in this actor's material

  * - 
    - 
    - SetMaterialVectorParameter( |br-p| :term:`string` parameter_name, |br-p| :ref:`Vector` vector |br| )
    - Sets a Vector parameter in this actor's material

  * - |server-only-label|
    - 
    - SetVehicleSetup( |br-p| :term:`number` drag_coefficient = 0.3, |br-p| :term:`number` throttle_input_rise_rate = 6, |br-p| :term:`number` throttle_input_fall_rate = 10, |br-p| :term:`number` brake_input_rise_rate = 6, |br-p| :term:`number` brake_input_fall_rate = 10, |br-p| :term:`number` handbrake_input_rise_rate = 12, |br-p| :term:`number` handbrake_input_fall_rate = 12, |br-p| :term:`number` steering_input_rise_rate = 2.5, |br-p| :term:`number` steering_input_fall_rate = 5 |br| )
    - Configures the Vehicle General Settings. Check the page bottom to see each property explanation

  * - |server-only-label|
    - 
    - SetTransmissionSetup( |br-p| :term:`boolean` has_automatic_transmission = true, |br-p| :term:`number` gear_switch_time = 0.5, |br-p| :term:`number` gear_auto_box_latency = 2, |br-p| :term:`number` final_ratio = 4, |br-p| :term:`number` clutch_strength = 10 |br| )
    - Configures the Vehicle Transmission. Check the page bottom to see each property explanation

  * - |server-only-label|
    - 
    - SetWheel( |br-p| :term:`number` index (0-3), |br-p|:term:`string` bone_name, |br-p| :term:`number` shape_radius = 30, |br-p| :term:`number` shape_width = 10, |br-p| :term:`number` steer_angle = 70, |br-p| :term:`number` mass = 20, |br-p| :term:`number` damping_rate = 0.25, |br-p| :term:`number` lat_stiff_max_load = 2, |br-p| :term:`number` lat_stiff_value = 17, |br-p| :term:`number` long_stiff_value = 1000, |br-p| :term:`number` suspension_force_offset = 0, |br-p| :term:`number` suspension_max_raise = 10, |br-p| :term:`number` suspension_max_drop = 10, |br-p| :term:`number` suspension_natural_frequency = 7, |br-p| :term:`number` suspension_damping_ratio = 1, |br-p| :term:`number` max_brake_torque = 1500, |br-p| :term:`number` max_handbrake_torque = 3000, |br-p| :term:`boolean` is_affected_by_handbrake = true, |br-p| :ref:`Vector` offset = Vector(0, 0, 0) |br| )
    - Configures a Vehicle Wheel. Check the page bottom to see each property explanation

  * - |server-only-label|
    - 
    - SetDoor( |br-p| :term:`number` seat_index, |br-p| :ref:`Vector` offset_location, |br-p| :ref:`Vector` seat_location, |br-p| :ref:`Rotator` seat_rotation, |br-p| :term:`number` trigger_radius, |br-p| :term:`number` leave_lateral_offset |br| )
    - Adds a Door at OffsetLocation from root which will pose the Character at SeatLocation with SeatRotation rotation. LeaveLateralOffset is where the Character will be ejected when leaving it (e.g. -150 for left door or 150 for right door)

  * - |server-only-label|
    - 
    - SetSteeringWheelSetup( |br-p| :ref:`Vector` location, |br-p| :term:`number` radius |br| )
    - Configures where the Steering Wheel is located, so Characters can grab it procedurally properly

  * - |server-only-label|
    - 
    - SetHeadlightsSetup( |br-p| :ref:`Vector` location, |br-p| :ref:`Color` color = Color(1, 0.86, 0.5) |br| )
    - Configures the Headlights Offset and Color.

  * - 
    - :term:`string`
    - GetAssetName()
    - Gets the Asset name

  * -
    - :ref:`Character`
    - GetPassenger(:term:`number` seat)
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
    - :ref:`Vehicle` self, |br| :term:`boolean` is_honking
    - When Vehicle honks

  * -
    - Hit
    - :ref:`Vehicle` self, |br| :term:`number` intensity
    - When Vehicle hits something

.. include:: ../common/events/Actor.rst


Parameters Detailed
-------------------

.. list-table:: 
  :widths: 35 65

  * - **Parameter Name**
    - **Description**

  * - :term:`DifferentialType` differential_type
    - (*LimitedSlip_4W, LimitedSlip_FrontDrive, LimitedSlip_RearDrive, Open_4W, Open_FrontDrive, Open_RearDrive*)


  * - :term:`number` front_rear_split 
    - Ratio of torque split between front and rear (>0.5 means more to front, <0.5 means more to rear, works only with 4W type)

  * - :term:`number` front_left_right_split
    - Ratio of torque split between front-left and front-right (>0.5 means more to front-left, <0.5 means more to front-right, works only with 4W and LimitedSlip_FrontDrive)

  * - :term:`number` rear_left_right_split
    - Ratio of torque split between rear-left and rear-right (>0.5 means more to rear-left, <0.5 means more to rear-right, works only with 4W and LimitedSlip_RearDrive)

  * - :term:`number` center_bias
    - Maximum allowed ratio of average front wheel rotation speed and rear wheel rotation speeds (range: 1..inf, works only with LimitedSlip_4W)

  * - :term:`number` front_bias
    - Maximum allowed ratio of front-left and front-right wheel rotation speeds (range: 1..inf, works only with LimitedSlip_4W, LimitedSlip_FrontDrive)

  * - :term:`number` rear_bias
    - Maximum allowed ratio of rear-left and rear-right wheel rotation speeds (range: 1..inf, works only with LimitedSlip_4W, LimitedSlip_FrontDrive)

  * - :term:`number` max_rpm
    - Maximum revolutions per minute of the engine

  * - :term:`number` moi
    - Moment of inertia of the engine around the axis of rotation (Kgm^2)

  * - :term:`number` damping_rate_full_throttle
    - Damping rate of engine when full throttle is applied (Kgm^2/s) 

  * - :term:`number` d_r_zero_trt_clutch_engaged
    - Damping rate of engine in at zero throttle when the clutch is engaged (Kgm^2/s)

  * - :term:`number` d_r_zero_trt_clutch_disengaged
    - Damping rate of engine in at zero throttle when the clutch is disengaged (in neutral gear) (Kgm^2/s)

  * - :term:`number` drag_coefficient
    - DragCoefficient of the vehicle chassis

  * - :term:`number` ...input_rise_rate
    - Rate at which the input value rises

  * - :term:`number` ...input_fall_rate
    - Rate at which the input value falls

  * - :term:`number` gear_switch_time
    - Time it takes to switch gears (seconds)

  * - :term:`number` gear_auto_box_latency
    -  Minimum time it takes the automatic transmission to initiate a gear change (seconds)

  * - :term:`number` final_ratio
    - The final gear ratio multiplies the transmission gear ratios

  * - :term:`number` clutch_strength
    - Strength of clutch (Kgm^2/s)

  * - :term:`number` shape_radius
    - Radius of the wheel

  * - :term:`number` shape_width
    - Width of the wheel

  * - :term:`number` steer_angle
    - Steer angle in degrees for this wheel

  * - :term:`number` mass
    - Mass of this wheel

  * - :term:`number` damping_rate
    - Damping rate for this wheel (Kgm^2/s)

  * - :term:`number` lat_stiff_max_load
    - Max normalized tire load at which the tire can deliver no more lateral stiffness no matter how much extra load is applied to the tire

  * - :term:`number` lat_stiff_value
    - How much lateral stiffness to have given lateral slip

  * - :term:`number` long_stiff_value
    - How much longitudinal stiffness to have given longitudinal slip

  * - :term:`number` suspension_force_offset
    - Vertical offset from where suspension forces are applied (along Z-axis)

  * - :term:`number` suspension_max_raise
    - How far the wheel can go above the resting position

  * - :term:`number` suspension_max_drop
    - How far the wheel can drop below the resting position

  * - :term:`number` suspension_natural_frequency
    - Oscillation frequency of suspension. Standard cars have values between 5 and 10

  * - :term:`number` suspension_damping_ratio
    - The rate at which energy is dissipated from the spring. Standard cars have values between 0.8 and 1.2. Values < 1 are more sluggish, values > 1 or more twitchy

  * - :term:`number` max_brake_torque
    - Max brake torque for this wheel (Nm)

  * - :term:`number` max_handbrake_torque
    - Max handbrake brake torque for this wheel (Nm). A handbrake should have a stronger brake torque than the brake. This will be ignored for wheels that are not affected by the handbrake

  * - :ref:`Vector` offset
    - If BoneName is specified, offset the wheel from the bone's location. Otherwise this offsets the wheel from the vehicle's origin
