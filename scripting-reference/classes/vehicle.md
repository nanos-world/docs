---
description: Vehicles are 4-wheeled entities which Characters can possesses and drive
---

# Vehicle

![](https://i.imgur.com/IzVg8VU.jpg)

Any Skeletal Mesh can be used to create a Vehicle, although only Skeletal Meshes with Wheels bones can use the built-in feature of animated Wheels.

{% hint style="warning" %}
Currently only 4-Wheeled vehicles are supported.
{% endhint %}

{% hint style="success" %}
Please take a look at our Default’s Vehicle package with all built-in Vehicles already properly configured and ready to use: [https://github.com/nanos-world/nanos-world-vehicles](https://github.com/nanos-world/nanos-world-vehicles).
{% endhint %}

{% page-ref page="../../getting-started/tutorials-and-examples/monster-truck.md" %}

{% hint style="info" %}
⏬ **Inheritance:** This class inherits from [Actor](base-classes/actor.md) and [Paintable](base-classes/paintable.md). Please check their pages for inherited **Methods** and **Events**.
{% endhint %}

## Usage

{% tabs %}
{% tab title="Lua" %}
{% code title="Server/Index.lua" %}
```lua
-- Spawns a SUV Vehicle
local vehicle = Vehicle(Vector(0, 0, 100), Rotator(), "nanos-world::SK_SUV", 0, true, false, true, "nanos-world::A_Vehicle_Engine_14")

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
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Constructor Parameters

| **Type** | **Name** | **Default** |
| :--- | :--- | :--- |
| [Vector](../utility-classes/vector.md) | **`location`** | `Vector(0, 0, 0)` |
| [Rotator](../utility-classes/rotator.md) | **`rotation`** | `Rotator(0, 0, 0)` |
| [string](../glossary/basic-types.md#string) | **`model_name`** \(Skeletal Mesh\) | \`\` |
| [CollisionType](../glossary/enums.md#collisiontype) | **`collision_type`** | `CollisionType.Normal` |
| [boolean](../glossary/basic-types.md#boolean) | **`gravity_enabled`** | `true` |
| [boolean](../glossary/basic-types.md#boolean) | **`auto_create_physics`** _\(can be disabled to improve performance when setting several configs. Must call_ `RecreatePhysics()` _after all\)_ | `true` |
| [boolean](../glossary/basic-types.md#boolean) | **`auto_unflip`** _\(auto rotates the vehicle if flipped\)_ | `true` |
| [string](../glossary/basic-types.md#string) | **`engine_sound_asset`** | `nanos-world::A_Vehicle_Engine_01` |
| [string](../glossary/basic-types.md#string) | **`horn_sound_asset`** | `nanos-world::A_Vehicle_Horn_Toyota` |
| [string](../glossary/basic-types.md#string) | **`brake_sound_asset`** | `nanos-world::A_Vehicle_Brake` |
| [string](../glossary/basic-types.md#string) | **`engine_start_sound_asset`** | `nanos-world::A_Car_Engine_Start` |
| [string](../glossary/basic-types.md#string) | **`vehicle_door_sound_asset`** | `nanos-world::A_Vehicle_Door` |

## Functions

{% page-ref page="base-classes/actor.md" %}

{% page-ref page="base-classes/paintable.md" %}

{% hint style="warning" %}
Most of the functions below will reset the vehicle Physics State \(automatically\), which means the vehicle will stop immediately if moving.
{% endhint %}

|  | **Returns** | **Name** | **Description** |
| :--- | :--- | :--- | :--- |
|  |  | [**`AddStaticMeshAttached`**](vehicle.md#addstaticmeshattached) | Spawns and Attaches a StaticMesh into this Vehicle in a Socket with relative Location and Rotation |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`Horn`**](vehicle.md#horn) | Starts or stops the vehicles horn |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`RecreatePhysics`**](vehicle.md#recreatephysics) | Recreate the Vehicle Physics |
|  |  | [**`RemoveStaticMeshAttached`**](vehicle.md#RemoveStaticMeshAttached) | Removes, if existing, a StaticMesh from this Vehicle given it’s custom ID |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`SetDifferentialSetup`**](vehicle.md#setdifferentialsetup) | Configures the Vehicle Differential |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`SetEngineSetup`**](vehicle.md#setenginesetup) | Configures the Vehicle Engine |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`SetVehicleSetup`**](vehicle.md#setvehiclesetup) | Configures the Vehicle General Settings |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`SetTransmissionSetup`**](vehicle.md#settransmissionsetup) | Configures the Vehicle Transmission |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`SetWheel`**](vehicle.md#setwheel) | Configures a Vehicle Wheel |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`SetDoor`**](vehicle.md#setdoor) | Adds a Door |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`SetSteeringWheelSetup`**](vehicle.md#setsteeringwheelsetup) | Configures where the Steering Wheel is located |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`SetHeadlightsSetup`**](vehicle.md#setheadlightssetup) | Configures the Headlights Offset and Color |
|  | [string](../glossary/basic-types.md#string) | [**`GetAssetName`**](vehicle.md#getassetname) | Gets the Asset name |
|  | [Character](character.md) | [**`GetPassenger`**](vehicle.md#GetPassenger) | Gets a passengers at an index |
|  | [table](../glossary/basic-types.md#table) | [**`GetPassengers`**](vehicle.md#getpassengers) | Gets all passengers |

## Events

| **Name** | **Description** |
| :--- | :--- |
| [**`Horn`**](vehicle.md#horn-1) | When Vehicle honks |
| [**`Hit`**](vehicle.md#hit) | When Vehicle hits something |

## Functions Detailed

### `AddStaticMeshAttached`

> Spawns and Attaches a StaticMesh into this Character in a Socket with relative Location and Rotation. Uses a custom ID to be used for removing it further

```lua
my_vehicle:AddStaticMeshAttached( id, static_mesh_path, socket, relative_location, relative_rotation)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`id`** |  |  |
| [string](../glossary/basic-types.md#string) | **`static_mesh_path`** | \`\` |  |
| [string](../glossary/basic-types.md#string) | **`socket`** | \`\` |  |
| [Vector](../utility-classes/vector.md) | **`relative_location`** | `Vector()` |  |
| [Rotator](../utility-classes/rotator.md) | **`relative_rotation`** | `Rotator()` |  |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `Horn`

> Starts or stops the vehicles horn

```lua
my_vehicle:Horn(enable_horn)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [boolean](../glossary/basic-types.md#boolean) | **`enable_horn`** |  |  |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `RecreatePhysics`

> Recreate the Vehicle Physics
>
> Call this after configuring the vehicle if using `auto_create_physics= false`

```lua
my_vehicle:RecreatePhysics()
```

### `RemoveStaticMeshAttached`

> Removes, if existing, a StaticMesh from this Vehicle given it's custom ID

```lua
my_vehicle:RemoveStaticMeshAttached(id)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`id`** |  |  |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `SetDifferentialSetup`

> Configures the Vehicle Differential. Check the page bottom to see each property explanation

```lua
my_vehicle:SetDifferentialSetup(differential_type, front_rear_split, front_left_right_split, rear_left_right_split, center_bias, front_bias, rear_bias)
```

<table>
  <thead>
    <tr>
      <th style="text-align:left">Type</th>
      <th style="text-align:left">Parameter</th>
      <th style="text-align:left">Default Value</th>
      <th style="text-align:left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><a href="../glossary/enums.md#differentialtype">DifferentialType</a>
      </td>
      <td style="text-align:left"><b><code>differential_type</code></b>
      </td>
      <td style="text-align:left"><code>LimitedSlip_4W</code>
      </td>
      <td style="text-align:left"></td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="../glossary/basic-types.md#number">number</a>
      </td>
      <td style="text-align:left"><b><code>front_rear_split</code></b>
      </td>
      <td style="text-align:left"><code>0.45</code>
      </td>
      <td style="text-align:left">
        <p>Ratio of torque split between front and rear.</p>
        <p><b>&gt;0.5</b> means more to front</p>
        <p><b>&lt;0.5</b> means more to rear</p>
        <p><em>(works only with 4W type)</em>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="../glossary/basic-types.md#number">number</a>
      </td>
      <td style="text-align:left"><b><code>front_left_right_split</code></b>
      </td>
      <td style="text-align:left"><code>0.5</code>
      </td>
      <td style="text-align:left">
        <p>Ratio of torque split between front-left and front-right.</p>
        <p><b>&gt;0.5</b> means more to front-left</p>
        <p><b>&lt;0.5</b> means more to front-right</p>
        <p><em>(works only with 4W and LimitedSlip_FrontDrive)</em>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="../glossary/basic-types.md#number">number</a>
      </td>
      <td style="text-align:left"><b><code>rear_left_right_split</code></b>
      </td>
      <td style="text-align:left"><code>0.5</code>
      </td>
      <td style="text-align:left">
        <p>Ratio of torque split between rear-left and rear-right</p>
        <p><b>&gt;0.5</b> means more to rear-left</p>
        <p><b>&lt;0.5</b> means more to rear-right</p>
        <p><em>(works only with 4W and LimitedSlip_RearDrive)</em>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="../glossary/basic-types.md#number">number</a>
      </td>
      <td style="text-align:left"><b><code>center_bias</code></b>
      </td>
      <td style="text-align:left"><code>1.3</code>
      </td>
      <td style="text-align:left">
        <p>Maximum allowed ratio of average front wheel rotation speed and rear wheel
          rotation speeds</p>
        <p>Acceptable range: 1 .. infinite</p>
        <p><em>(works only with LimitedSlip_4W)</em>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="../glossary/basic-types.md#number">number</a>
      </td>
      <td style="text-align:left"><b><code>front_bias</code></b>
      </td>
      <td style="text-align:left"><code>1.3</code>
      </td>
      <td style="text-align:left">
        <p>Maximum allowed ratio of front-left and front-right wheel rotation speeds</p>
        <p>Acceptable range: 1 .. infinite</p>
        <p><em>(works only with LimitedSlip_4W, LimitedSlip_FrontDrive)</em>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><a href="../glossary/basic-types.md#number">number</a>
      </td>
      <td style="text-align:left"><b><code>rear_bias</code></b>
      </td>
      <td style="text-align:left"><code>1.3</code>
      </td>
      <td style="text-align:left">
        <p>Maximum allowed ratio of rear-left and rear-right wheel rotation speeds</p>
        <p>Acceptable range: 1 .. infinite</p>
        <p>(<em>works only with LimitedSlip_4W, LimitedSlip_FrontDrive)</em>
        </p>
      </td>
    </tr>
  </tbody>
</table>

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `SetEngineSetup`

> Configures the Vehicle Engine. Check the page bottom to see each property explanation

```lua
my_vehicle:SetEngineSetup(max_rpm, moi, damping_rate_full_throttle, d_r_zero_trt_clutch_engaged, d_r_zero_trt_clutch_disengaged)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`max_rpm`** | `4500` | Maximum revolutions per minute of the engine |
| [number](../glossary/basic-types.md#number) | **`moi`** | `1` | Moment of inertia of the engine around the axis of rotation \(Kgm^2\) |
| [number](../glossary/basic-types.md#number) | **`damping_rate_full_throttle`** | `0.15` | Damping rate of engine when full throttle is applied \(Kgm^2/s\) |
| [number](../glossary/basic-types.md#number) | **`d_r_zero_trt_clutch_engaged`** | `2` | Damping rate of engine in at zero throttle when the clutch is engaged \(Kgm^2/s\) |
| [number](../glossary/basic-types.md#number) | **`d_r_zero_trt_clutch_disengaged`** | `0.35` | Damping rate of engine in at zero throttle when the clutch is disengaged \(in neutral gear\) \(Kgm^2/s\) |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `SetVehicleSetup`

> Configures the Vehicle General Settings. Check the page bottom to see each property explanation

```lua
my_vehicle:SetVehicleSetup(drag_coefficient, throttle_input_rise_rate, throttle_input_fall_rate, brake_input_rise_rate, brake_input_fall_rate, handbrake_input_rise_rate, handbrake_input_fall_rate, steering_input_rise_rate, steering_input_fall_rate)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`drag_coefficient`** | `0.3` | DragCoefficient of the vehicle chassis |
| [number](../glossary/basic-types.md#number) | **`throttle_input_rise_rate`** | `6` | Rate at which the input value rises |
| [number](../glossary/basic-types.md#number) | **`throttle_input_fall_rate`** | `10` | Rate at which the input value falls |
| [number](../glossary/basic-types.md#number) | **`brake_input_rise_rate`** | `6` | Rate at which the input value rises |
| [number](../glossary/basic-types.md#number) | **`brake_input_fall_rate`** | `10` | Rate at which the input value falls |
| [number](../glossary/basic-types.md#number) | **`handbrake_input_rise_rate`** | `12` | Rate at which the input value rises |
| [number](../glossary/basic-types.md#number) | **`handbrake_input_fall_rate`** | `12` | Rate at which the input value falls |
| [number](../glossary/basic-types.md#number) | **`steering_input_rise_rate`** | `2.5` | Rate at which the input value rises |
| [number](../glossary/basic-types.md#number) | **`steering_input_fall_rate`** | `5` | Rate at which the input value falls |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `SetTransmissionSetup`

> Configures the Vehicle Transmission. Check the page bottom to see each property explanation

```lua
my_vehicle:SetTransmissionSetup(has_automatic_transmission, gear_switch_time, gear_auto_box_latency, final_ratio, clutch_strength)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [boolean](../glossary/basic-types.md#boolean) | **`has_automatic_transmission`** | `true` |  |
| [number](../glossary/basic-types.md#number) | **`gear_switch_time`** | `0.5` | Time it takes to switch gears \(seconds\) |
| [number](../glossary/basic-types.md#number) | **`gear_auto_box_latency`** | `2` | Minimum time it takes the automatic transmission to initiate a gear change \(seconds\) |
| [number](../glossary/basic-types.md#number) | **`final_ratio`** | `4` | The final gear ratio multiplies the transmission gear ratios |
| [number](../glossary/basic-types.md#number) | **`clutch_strength`** | `10` | Strength of clutch \(Kgm^2/s\) |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `SetWheel`

> Configures a Vehicle Wheel. Check the page bottom to see each property explanation

```lua
my_vehicle:SetWheel(index, bone_name, shape_radius, shape_width, steer_angle, mass, damping_rate, lat_stiff_max_load, lat_stiff_value, long_stiff_value, suspension_force_offset, suspension_max_raise, suspension_max_drop, suspension_natural_frequency, suspension_damping_ratio, max_brake_torque, max_handbrake_torque, is_affected_by_handbrake, offset)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`index`** |  | \(0-3\) |
| [string](../glossary/basic-types.md#string) | **`bone_name`** |  |  |
| [number](../glossary/basic-types.md#number) | **`shape_radius`** | `30` | Radius of the wheel |
| [number](../glossary/basic-types.md#number) | **`shape_width`** | `10` | Width of the wheel |
| [number](../glossary/basic-types.md#number) | **`steer_angle`** | `70` | Steer angle in degrees for this wheel |
| [number](../glossary/basic-types.md#number) | **`mass`** | `20` | Mass of this wheel |
| [number](../glossary/basic-types.md#number) | **`damping_rate`** | `0.25` | Damping rate for this wheel \(Kgm^2/s\) |
| [number](../glossary/basic-types.md#number) | **`lat_stiff_max_load`** | `2` | Max normalized tire load at which the tire can deliver no more lateral stiffness no matter how much extra load is applied to the tire |
| [number](../glossary/basic-types.md#number) | **`lat_stiff_value`** | `17` | How much lateral stiffness to have given lateral slip |
| [number](../glossary/basic-types.md#number) | **`long_stiff_value`** | `1000` | How much longitudinal stiffness to have given longitudinal slip |
| [number](../glossary/basic-types.md#number) | **`suspension_force_offset`** | `0` | Vertical offset from where suspension forces are applied \(along Z-axis\) |
| [number](../glossary/basic-types.md#number) | **`suspension_max_raise`** | `10` | How far the wheel can go above the resting position |
| [number](../glossary/basic-types.md#number) | **`suspension_max_drop`** | `10` | How far the wheel can drop below the resting position |
| [number](../glossary/basic-types.md#number) | **`suspension_natural_frequency`** | `7` | Oscillation frequency of suspension. Standard cars have values between 5 and 10 |
| [number](../glossary/basic-types.md#number) | **`suspension_damping_ratio`** | `1` | The rate at which energy is dissipated from the spring. Standard cars have values between 0.8 and 1.2. Values &lt; 1 are more sluggish, values &gt; 1 or more twitchy |
| [number](../glossary/basic-types.md#number) | **`max_brake_torque`** | `1500` | Max brake torque for this wheel \(Nm\) |
| [number](../glossary/basic-types.md#number) | **`max_handbrake_torque`** | `3000` | Max handbrake brake torque for this wheel \(Nm\). A handbrake should have a stronger brake torque than the brake. This will be ignored for wheels that are not affected by the handbrake |
| [boolean](../glossary/basic-types.md#boolean) | **`is_affected_by_handbrake`** | `true` |  |
| [Vector](../utility-classes/vector.md) | **`offset`** | `Vector(0, 0, 0)` | If **bone\_name** is specified, offset the wheel from the bone’s location. Otherwise this offsets the wheel from the vehicle’s origin |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `SetDoor`

> Adds a Door at OffsetLocation from root which will pose the Character at SeatLocation with SeatRotation rotation. LeaveLateralOffset is where the Character will be ejected when leaving it \(e.g. -150 for left door or 150 for right door\)

```lua
my_vehicle:SetDoor(seat_index, offset_location, seat_location, seat_rotation, trigger_radius, leave_lateral_offset)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`seat_index`** |  |  |
| [Vector](../utility-classes/vector.md) | **`offset_location`** |  |  |
| [Vector](../utility-classes/vector.md) | **`seat_location`** |  |  |
| [Rotator](https://github.com/nanos-world/docs-gitbook/tree/f0ec978e559b9961a7022172cc53518b5c43dd48/scripting-reference/utility-classes/Rotator.md) | **`seat_rotation`** |  |  |
| [number](../glossary/basic-types.md#number) | **`trigger_radius`** |  |  |
| [number](../glossary/basic-types.md#number) | **`leave_lateral_offset`** |  |  |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `SetSteeringWheelSetup`

> Configures where the Steering Wheel is located, so Characters can grab it procedurally properly

```lua
my_vehicle:SetSteeringWheelSetup(location, radius)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [Vector](../utility-classes/vector.md) | **`location`** |  |  |
| [number](../glossary/basic-types.md#number) | **`radius`** |  |  |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `SetHeadlightsSetup`

> Configures the Headlights Offset and Color.

```lua
my_vehicle:SetHeadlightsSetup(location, color)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [Vector](../utility-classes/vector.md) | **`location`** |  |  |
| [Color](../utility-classes/color.md) | **`color`** | `Color(1, 0.86, 0.5)` |  |

### `GetAssetName`

> Gets the Asset name
>
> Returns [string](../glossary/basic-types.md#string)

```lua
my_vehicle:GetAssetName()
```

### `GetPassenger`

> Gets a passenger from a seat
>
> returns [Player ](player.md)or [nil ](../glossary/basic-types.md#nil)if Seat is invalid or empty

```lua
my_vehicle:GetPassenger(seat)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`seat`** |  |  |

### `GetPassengers`

> Gets all passengers
>
> Returns [table](../glossary/basic-types.md#table) of Players

```lua
my_vehicle:GetPassengers()
```

## Events Detailed

### `Horn`

> Triggered when Vehicle honks

```lua
Vehicle.Subscribe("Horn", function(self, is_honking)

end)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [Vehicle](vehicle.md) | `self` |  |
| [boolean](../glossary/basic-types.md#boolean) | `is_honking` |  |

### `Hit`

> Triggered when Vehicle hits something

```lua
Vehicle.Subscribe("Hit", function(self, intensity)

end)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [Vehicle](vehicle.md) | `self` |  |
| [number](../glossary/basic-types.md#number) | `intensity` |  |

