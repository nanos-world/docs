---
description: >-
  Characters represents Actors which can be possessed, can move and interact
  with world. They are the default Skeletal Mesh Character built for nanos world
---

# Character

![](https://i.imgur.com/yPtYbR6.jpg)

{% hint style="info" %}
Characters are Skeletal Meshes using Unreal’s Mannequin Skeletal, with animations and interactivity already natively integrated into nanos world. It is possible to import any Skeletal Mesh \(which uses Unreal’s Mannequin Skeletal\) to this Character.
{% endhint %}

{% hint style="info" %}
⏬ **Inheritance:** This class inherits from [Actor](base-classes/actor.md) and [Paintable](base-classes/paintable.md). Please check their pages for inherited **Methods** and **Events**.
{% endhint %}

## Usage

```lua
-- The following examples are using all Skeletal Meshes which we currently have for examples, including the officials Woman, Man and Mannequin:
local woman = Character(Vector(100, 0, 100), Rotator(0, 0, 0), "nanos-world::SK_Female")
local man = Character(Vector(200, 0, 100), Rotator(0, 0, 0), "nanos-world::SK_Male")
local mannequin = Character(Vector(300, 0, 100), Rotator(0, 0, 0), "nanos-world::SK_Mannequin")
local mannequin_female = Character(Vector(400, 0, 100), Rotator(0, 0, 0), "nanos-world::SK_Mannequin_Female")

local post_apocalyptic = Character(Vector(400, 0, 100), Rotator(0, 0, 0), "nanos-world::SK_PostApocalyptic")
local classic_male = Character(Vector(500, 0, 100), Rotator(0, 0, 0), "nanos-world::SK_ClassicMale")

-- Adds Clothes to Man. Note: some Meshes only supports a specific Mesh (Men/Woman)
man:AddSkeletalMeshAttached("shirt", "nanos-world::SK_Shirt") -- Men only
man:AddSkeletalMeshAttached("shirt", "nanos-world::SK_Underwear") -- Men only
man:AddSkeletalMeshAttached("pants", "nanos-world::SK_Pants") -- Men only
man:AddSkeletalMeshAttached("shoes", "nanos-world::SK_Shoes_01")
man:AddSkeletalMeshAttached("shoes", "nanos-world::SK_Tie")

-- Adds Clothes to Woman
woman:AddSkeletalMeshAttached("full", "nanos-world::SK_CasualSet") -- Woman only
woman:AddSkeletalMeshAttached("shoes", "nanos-world::SK_Sneakers")

-- Adds Beard to Man
man:AddStaticMeshAttached("beard", "nanos-world::SM_Beard_Extra", "beard")
man:AddStaticMeshAttached("beard", "nanos-world::SM_Beard_Middle", "beard")
man:AddStaticMeshAttached("beard", "nanos-world::SM_Beard_Mustache_01", "beard")
man:AddStaticMeshAttached("beard", "nanos-world::SM_Beard_Mustache_02", "beard")
man:AddStaticMeshAttached("beard", "nanos-world::SM_Beard_Side", "beard")

-- Adds Hair to Man
man:AddStaticMeshAttached("hair", "nanos-world::SM_Hair_Long", "hair_male")
man:AddStaticMeshAttached("hair", "nanos-world::SM_Hair_Short", "hair_male")

-- Adds Hair to Woman
woman:AddStaticMeshAttached("hair", "nanos-world::SM_Hair_Kwang", "hair_female")
```

## Constructor Parameters

| **Type** | **Name** | **Default** |
| :--- | :--- | :--- |
| [Vector](../utility-classes/vector.md) | **`location`** | `Vector(0, 0, 0)` |
| [Rotator](../utility-classes/rotator.md) | **`rotation`** | `Rotator(0, 0, 0)` |
| [string](../glossary/basic-types.md#string) | **`skeletal_mesh`** | `nanos-world::SK_Mannequin` |
| [CollisionType](../glossary/enums.md#collisiontype) | **`collision_type`** | `CollisionType.Normal` |
| [boolean](../glossary/basic-types.md#boolean) | **`gravity_enabled`** | `true` |
| [number](../glossary/basic-types.md#number) | **`health/max_health`** | `100` |
| [string](../glossary/basic-types.md#string) | **`death_sounds`** | `nanos-world::A_Male_01_Death` |
| [string](../glossary/basic-types.md#string) | **`pain_sounds`** | `nanos-world::A_Male_01_Pain` |

{% page-ref page="../../getting-started/tutorials-and-examples/play-as-prop.md" %}

{% page-ref page="../../getting-started/tutorials-and-examples/name-tags.md" %}

{% page-ref page="../../assets-modding/creating-assets/characters-meshes.md" %}

## Functions

{% page-ref page="base-classes/actor.md" %}

{% page-ref page="base-classes/paintable.md" %}

|  | **Returns** | **Name** | **Description** |
| :--- | :--- | :--- | :--- |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) | [number](https://docs.nanos.world/scripting/Glossary.html#term-number) | [**`ApplyDamage`**](character.md#applydamage) | Do damage in a character, will trigger all related events and apply modified damage based on bone. Also will apply impulse if it’s a heavy explosion. |
|  |  | [**`AddSkeletalMeshAttached`**](character.md#addskeletalmeshattached) | Spawns and Attaches a SkeletalMesh into this Character, the SkeletalMesh must have the same Skeletal used by the Character Mesh, and will follow all animations from it. Uses a custom ID to be used for removing it further |
|  |  | [**`AddStaticMeshAttached`**](character.md#addstaticmeshattached) | Spawns and Attaches a StaticMesh into this Character in a Socket with relative Location and Rotation. Uses a custom ID to be used for removing it further |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`Drop`**](character.md#drop) | Drops any Pickable the Character is holding |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`EnterVehicle`**](character.md#entervehicle) | Enters the Vehicle at Seat \(0 - Driver\) |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`GrabProp`**](character.md#grabprop) | Gives a Prop to the Character |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`Jump`**](character.md#jump) | Triggers this Character to jump |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`LeaveVehicle`**](character.md#leavevehicle) | Leaves the current Vehicle |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`LookAt`**](character.md#lookat) | AI: Tries to make this Character to look at Location |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`MoveTo`**](character.md#moveto) | AI: Makes this Character to walk to the Location |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`PickUp`**](character.md#pickup) | Gives a Item/Grenade/Weapon \(Pickable\) to the Character |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`PlayAnimation`**](character.md#playanimation) | Plays an Animation Montage on this character |
|  |  | [**`RemoveSkeletalMeshAttached`**](character.md#removeskeletalmeshattached) | Removes, if existing, a SkeletalMesh from this Character given it’s custom ID |
|  |  | [**`RemoveStaticMeshAttached`**](character.md#removestaticmeshattached) | Removes, if existing, a StaticMesh from this Character given it’s custom ID |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`Respawn`**](character.md#respawn) | Respawns the Character, fullying it’s Health and moving it to it’s Initial Location |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`SetAccelerationSettings`**](character.md#setaccelerationsettings) | Sets the Movement Max Acceleration of this Character. |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`SetBrakingSettings`**](character.md#setbrakingsettings) | Sets the Movement Braking Settings of this Character. |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`SetCameraMode`**](character.md#setcameramode) | Sets the Camera Mode \(0 - FPS and TPS, 1 = FPS only, 2 = TPS only\) |
| [![](../../.gitbook/assets/client-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`SetCameraOffset`**](character.md#setcameraoffset) | Sets the Camera Offset \(only affects TPS\) |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`SetCanCrouch`**](character.md#setcancrouch) | Sets if this Character is allowed to Crouch and to Prone |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`SetCanAim`**](character.md#setcanaim) | Sets if this Character is allowed to Aim |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`SetCanSprint`**](character.md#setcansprint) | Sets if this Character is allowed to Sprint |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`SetCanGrabProps`**](character.md#setcangrabprops) | Sets if this Character is allowed to Grab any Prop |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`SetCanPickupPickables`**](character.md#setcanpickuppickables) | Sets if this Character is allowed to Pick up any Pickable \(Weapon, Grenade, Item…\) |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`SetCanPunch`**](character.md#setcanpunch) | Sets if this Character is allowed to Punch \(Melee\) |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`SetCapsuleSize`**](character.md#setcapsulesize) | Sets this Character’s Capsule size \(will affect Camera location and Character’s collision\) - default is \(42, 96\) |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`SetDeathSound`**](character.md#setdeathsound) | Changes the Death sound when Character dies |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`SetFallDamageTaken`**](character.md#SetFallDamageTaken) | Set the Fall Damage multiplier taken when falling from High places \(default: 10\). Setting to 0 will make the Character to do not take damage or enter ragdoll mode |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`SetFlyingMode`**](character.md#setflyingmode) | Sets the Flying Mode |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`SetGaitMode`**](character.md#setgaitmode) | Sets the Gait Mode |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`SetGravityScale`**](character.md#setgravityscale) | Changes the Gravity Scale of this Character \(can be negative\) |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`SetHealth`**](character.md#sethealth) | Sets the Health of this Character. If the character is dead, respawns it with full health |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`SetImpactDamageTaken`**](character.md#setimpactdamagetaken) | Set the Impact Damage taken when being roamed by things \(default: 10\). Setting to 0 will make the Character to do not take damage or enter ragdoll mode |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`SetInvulnerable`**](character.md#setinvulnerable) | Sets if the Character can receive any damage |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`SetMaxHealth`**](character.md#setmaxhealth) | Sets the MaxHealth of this Character |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`SetMesh`**](character.md#setmesh) | Changes the Character Mesh on the fly |
|  |  | [**`SetMorphTarget`**](character.md#setmorphtarget) |  |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`SetMovementEnabled`**](character.md#setmovementenabled) | Enables/Disables Character’s Movement |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`SetPainSound`**](character.md#setpainsound) | Changes the Pain sound when Character takes damage |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`SetPunchDamage`**](character.md#setpunchdamage) | Set the Punch Damage this Character will apply on others \(default is 15\) |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`SetRagdollMode`**](character.md#setragdollmode) | Sets Character Ragdoll Mode |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`SetSpeedMultiplier`**](character.md#setspeedmultiplier) | 1 = normal |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`SetStanceMode`**](character.md#setstancemode) | **Stance Modes**: _None, Standing, Crouching, Proning_ |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`SetTeam`**](character.md#setteam) | Sets a Team which will disable damaging same Team Members. 0 for Neutral |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`SetViewMode`**](character.md#setviewmode) | **View Modes**: _FPS, TPS1, TPS2, TPS3_ |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`SetWeaponAimMode`**](character.md#setweaponaimmode) | **Aim Modes**: _None, ADS, ZoomedZoom, Zoomed, ZoomedFar_ |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`StopAnimation`**](character.md#stopanimation) | Stops an Animation Montage on this character |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`UnGrabProp`**](character.md#ungrabprop) | UnGrabs/Drops the Prop the Character is holding |
|  | [boolean](https://docs.nanos.world/scripting/Glossary.html#term-boolean) | [**`IsInRagdollMode`**](character.md#isinragdollmode) | Gets Character Ragdoll Mode |
|  | [boolean](https://docs.nanos.world/scripting/Glossary.html#term-boolean) | [**`IsInvulnerable`**](character.md#isinvulnerable) | Gets if the Character can receive damage |
|  | [boolean](https://docs.nanos.world/scripting/Glossary.html#term-boolean) | [**`IsMovementEnabled`**](character.md#ismovementenabled) | Gets Character Movement Enabled |
|  | [Rotator](../utility-classes/rotator.md) | [**`GetControlRotation`**](character.md#getcontrolrotation) | Gets the rotation this character is looking at |
|  | [FallingMode](https://docs.nanos.world/scripting/Glossary.html#term-fallingmode) | [**`GetFallingMode`**](character.md#GetFallingMode) | Gets the Falling Mode |
|  | [boolean](https://docs.nanos.world/scripting/Glossary.html#term-boolean) | [**`GetFlyingMode`**](character.md#getflyingmode) | Gets if the Character is in Flying Mode |
|  | [GaitMode](https://docs.nanos.world/scripting/Glossary.html#term-gaitmode) | [**`GetGaitMode`**](character.md#getgaitmode) | Gets the Gait Mode |
|  | [Prop](https://docs.nanos.world/scripting/classes/Prop.html#prop) | [**`GetGrabbedProp`**](character.md#GetGrabbedProp) | Gets the Grabbing Prop |
|  | [number](https://docs.nanos.world/scripting/Glossary.html#term-number) | [**`GetGravityScale`**](character.md#getgravityscale) | Gets the Gravity Scale of this Character |
|  | [number](https://docs.nanos.world/scripting/Glossary.html#term-number) | [**`GetHealth`**](character.md#GetHealth) | Gets the Character’s Health. |
|  | [number](https://docs.nanos.world/scripting/Glossary.html#term-number) | [**`GetMaxHealth`**](character.md#getmaxhealth) | Gets the Character’s MaxHealth. |
|  | [string](https://docs.nanos.world/scripting/Glossary.html#term-string) | [**`GetMesh`**](character.md#getmesh) | Gets the Mesh Asset name |
|  | Entity | [**`GetPicked`**](character.md#getpicked) | Gets the holding Picked Item/Grenade/Weapon |
|  | [Player](https://docs.nanos.world/scripting/classes/Player.html#player) | [**`GetPlayer`**](character.md#getplayer) | Gets the Player controlling this Character |
|  | [number](https://docs.nanos.world/scripting/Glossary.html#term-number) | [**`GetSpeedMultiplier`**](character.md#getspeedmultiplier) |  |
|  | [StanceMode](https://docs.nanos.world/scripting/Glossary.html#term-stancemode) | [**`GetStanceMode`**](character.md#getstancemode) |  |
|  | [SwimmingMode](https://docs.nanos.world/scripting/Glossary.html#term-swimmingmode) | [**`GetSwimmingMode`**](character.md#getswimmingmode) |  |
|  | [number](https://docs.nanos.world/scripting/Glossary.html#term-number) | [**`GetTeam`**](character.md#getteam) |  |
|  | [Vehicle](https://docs.nanos.world/scripting/classes/Vehicle.html#vehicle) | [**`GetVehicle`**](character.md#getvehicle) | Gets the Vehicle the Character is on |
|  | [ViewMode](https://docs.nanos.world/scripting/Glossary.html#term-viewmode) | [**`GetViewMode`**](character.md#getviewmode) | Gets Character View Mode |
|  | [AimMode](https://docs.nanos.world/scripting/Glossary.html#term-aimmode) | [**`GetWeaponAimMode`**](character.md#getweaponaimmode) | Gets Character Aim Mode |

## Events

|  | **Name** | **Description** |
| :--- | :--- | :--- |
|  | [**`Death`**](character.md#death) | When Character Dies |
|  | [**`Drop`**](character.md#drop) | When Character drops anything |
|  | [**`EnterVehicle`**](character.md#entervehicle) | When Character enters a vehicle |
|  | [**`FallingModeChanged`**](character.md#fallingmodechanged) | **Falling Modes**: _None, Jumping, Climbing, Vaulting, Falling, HighFalling, Parachuting, SkyDiving_ |
|  | [**`Fire`**](character.md#fire) | When Character fires a Weapon |
|  | [**`GaitModeChanged`**](character.md#gaitmodechanged) | **Gait Modes**: _None, Walking, Sprinting_ |
|  | [**`GrabProp`**](character.md#grabprop) | When Character grabs up a Prop |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) | [**`Interact`**](character.md#interact) | When a Character interacts with an object \(i.e. try to pick it up\) - return false to prevent it |
|  | [**`LeaveVehicle`**](character.md#leavevehicle) | When Character leaves a vehicle |
|  | [**`MoveCompleted`**](character.md#movecompleted) | Called when AI reaches it’s destination, or when it fails |
|  | [**`PickUp`**](character.md#pickup) | When Character picks up anything |
|  | [**`Possessed`**](character.md#possessed) | When Character is possessed |
|  | [**`Punch`**](character.md#punch) | When Character punches |
|  | [**`RagdollModeChanged`**](character.md#ragdollmodechanged) |  |
|  | [**`Reload`**](character.md#reload) | When Character reloads a weapon |
|  | [**`Respawn`**](character.md#respawn) | When Character Respawns |
|  | [**`StanceModeChanged`**](character.md#stancemodechanged) | **Stance Modes**: _None, Standing, Crouching, Proning_ |
|  | [**`SwimmingModeChanged`**](character.md#swimmingmodechanged) | **Swimming Modes**: _None, Surface, Underwater_ |
|  | [**`TakeDamage`**](character.md#takedamage) | When Character takes Damage |
|  | [**`UnGrabProp`**](character.md#ungrabprop) | When Character drops a Prop |
|  | [**`UnPossessed`**](character.md#unpossessed) | When Character is unpossessed |
|  | [**`ViewModeChanged`**](character.md#viewmodechanged) | **View Modes**: _FPS, TPS1, TPS2, TPS3_ |
|  | [**`WeaponAimModeChanged`**](character.md#weaponaimmodechanged) | **Aim Modes**: _None, ADS, ZoomedZoom, Zoomed, ZoomedFar_ |

## Functions Detailed

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `ApplyDamage`

> Do damage in a character, will trigger all related events and apply modified damage based on bone. Also will apply impulse if it's a heavy explosion

```lua
my_character:ApplyDamage(damage, bone_name, damage_type, from_direction, instigator)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`damage`** |  |  |
| [string](../glossary/basic-types.md#string) | **`bone_name`** | \`\` |  |
| DamageType | **`damage_type`** | `DamageType.Shot` |  |
| [Vector](../utility-classes/vector.md) | **`from_direction`** | `Vector()` |  |
| [Player](https://github.com/nanos-world/docs-gitbook/tree/456785b68b61f82d2a0b36e60cac438e7b99c660/scripting-reference/player.md) | **`instigator`** | `nil` |  |

### `AddSkeletalMeshAttached`

> Spawns and Attaches a SkeletalMesh into this Character, the SkeletalMesh must have the same Skeletal used by the Character Mesh, and will follow all animations from it. Uses a custom ID to be used for removing it further

```lua
my_character:AddSkeletalMeshAttached(id, skeletal_mesh_path)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`id`** |  |  |
| [string](../glossary/basic-types.md#string) | **`skeletal_mesh_path`** | \`\` |  |

### `AddStaticMeshAttached`

> Spawns and Attaches a StaticMesh into this Character in a Socket with relative Location and Rotation. Uses a custom ID to be used for removing it further

```lua
my_character:AddStaticMeshAttached( id, static_mesh_path, socket, relative_location, relative_rotation)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`id`** |  |  |
| [string](../glossary/basic-types.md#string) | **`static_mesh_path`** | \`\` |  |
| [string](../glossary/basic-types.md#string) | **`socket`** | \`\` |  |
| [Vector](../utility-classes/vector.md) | **`relative_location`** | `Vector()` |  |
| [Rotator](../utility-classes/rotator.md) | **`relative_rotation`** | `Rotator()` |  |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `Drop`

> Drops any Pickable the Character is holding

```lua
my_character:Drop()
```

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `EnterVehicle`

> Enters the Vehicle at Seat \(0 - Driver\)

```lua
my_character:EnterVehicle(vehicle, seat)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [Vehicle](vehicle.md) | **`vehicle`** |  |  |
| [number](../glossary/basic-types.md#number) | **`seat`** | `0` |  |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `GrabProp`

> Gives a Prop to the Character

```lua
my_character:GrabProp(prop)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [Prop](prop.md) | **`prop`** |  |  |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `Jump`

> Triggers this Character to jump

```lua
my_character:Jump()
```

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `LeaveVehicle`

> Leaves the current Vehicle

```lua
my_character:LeaveVehicle()
```

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `LookAt`

> AI: Tries to make this Character to look at Location

```lua
my_character:LookAt(location)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [Vector](../utility-classes/vector.md) | **`location`** |  |  |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `MoveTo`

> AI: Makes this Character to walk to the Location
>
> Triggers event [MoveCompleted](character.md#movecompleted).

```lua
my_character:MoveTo(location, acceptance_radius)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [Vector](../utility-classes/vector.md) | **`location`** |  |  |
| [number](../glossary/basic-types.md#number) | **`acceptance_radius`** | `50` |  |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `PickUp`

> Gives a Item/Grenade/Weapon \(Pickable\) to the Character

```lua
my_character:PickUp(pickable)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| Pickable | **`pickable`** |  |  |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `PlayAnimation`

> Plays an Animation Montage on this character

```lua
my_character:PlayAnimation(animation_path, slot_type, loop_indefinitely)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`animation_path`** |  |  |
| [AnimationSlotType](../glossary/enums.md#animationslottype) | **`slot_type`** | `FullBody` |  |
| [boolean](../glossary/basic-types.md#boolean) | **`loop_indefinitely`** |  |  |

### `RemoveSkeletalMeshAttached`

> Removes, if existing, a SkeletalMesh from this Character given it's custom ID

```lua
my_character:RemoveSkeletalMeshAttached(id)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`id`** |  |  |

### `RemoveStaticMeshAttached`

> Removes, if existing, a StaticMesh from this Character given it's custom ID

```lua
my_character:RemoveStaticMeshAttached(id)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`id`** |  |  |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `Respawn`

> Respawns the Character, fullying it's Health and moving it to it's Initial Location

```lua
my_character:Respawn()
```

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `SetAccelerationSettings`

> Sets the Movement Max Acceleration of this Character.

```lua
my_character:SetAccelerationSettings(walking, parachuting, skydiving, falling, swimming, swimming_surface, flying)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`walking`** | `768` |  |
| [number](../glossary/basic-types.md#number) | **`parachuting`** | `512` |  |
| [number](../glossary/basic-types.md#number) | **`skydiving`** | `768` |  |
| [number](../glossary/basic-types.md#number) | **`falling`** | `128` |  |
| [number](../glossary/basic-types.md#number) | **`swimming`** | `256` |  |
| [number](../glossary/basic-types.md#number) | **`swimming_surface`** | `256` |  |
| [number](../glossary/basic-types.md#number) | **`flying`** | `1024` |  |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `SetBrakingSettings`

> Sets the Movement Braking Settings of this Character.

```lua
my_character:SetBrakingSettings(ground_friction, braking_friction_factor, braking_walking, braking_flying, braking_swimming, braking_falling)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`ground_friction`** | `2` |  |
| [number](../glossary/basic-types.md#number) | **`braking_friction_factor`** | `2` |  |
| [number](../glossary/basic-types.md#number) | **`braking_walking`** | `96` |  |
| [number](../glossary/basic-types.md#number) | **`braking_flying`** | `3000` |  |
| [number](../glossary/basic-types.md#number) | **`braking_swimming`** | `10` |  |
| [number](../glossary/basic-types.md#number) | **`braking_falling`** | `0` |  |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `SetCameraMode`

> Sets the Camera Mode \(0 - FPS and TPS, 1 = FPS only, 2 = TPS only\)

```lua
my_character:SetCameraMode(camera_mode)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [CameraMode](../glossary/enums.md#cameramode) | **`camera_mode`** |  |  |

### \|client-only-label\| `SetCameraOffset`

> Sets the Camera Offset \(only affects TPS\)

```lua
my_character:SetCameraOffset(camera_offset)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [Vector](../utility-classes/vector.md) | **`camera_offset`** |  |  |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `SetCanCrouch`

> Sets if this Character is allowed to Crouch and to Prone

```lua
my_character:SetCanCrouch(can_crouch)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [boolean](../glossary/basic-types.md#boolean) | **`can_crouch`** |  |  |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `SetCanAim`

> Sets if this Character is allowed to Aim

```lua
my_character:SetCanAim(can_aim)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [boolean](../glossary/basic-types.md#boolean) | **`can_aim`** |  |  |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `SetCanSprint`

> Sets if this Character is allowed to Sprint

```lua
my_character:SetCanSprint(can_sprint)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [boolean](../glossary/basic-types.md#boolean) | **`can_sprint`** |  |  |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `SetCanGrabProps`

> Sets if this Character is allowed to Grab any Prop

```lua
my_character:SetCanGrabProps(can_grab_props)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [boolean](../glossary/basic-types.md#boolean) | **`can_grab_props`** |  |  |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `SetCanPickupPickables`

> Sets if this Character is allowed to Pick up any Pickable \(Weapon, Grenade, Item...\)

```lua
my_character:SetCanPickupPickables(can_pickup)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [boolean](../glossary/basic-types.md#boolean) | **`can_pickup`** |  |  |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `SetCanPunch`

> Sets if this Character is allowed to Punch \(Melee\)

```lua
my_character:SetCanPunch(can_punch)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [boolean](../glossary/basic-types.md#boolean) | **`can_punch`** |  |  |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `SetCapsuleSize`

> Sets this Character's Capsule size \(will affect Camera location and Character's collision\) - default is \(42, 96\)

```lua
my_character:SetCapsuleSize(radius, half_height)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [boolean](../glossary/basic-types.md#boolean) | **`radius`** |  |  |
| [boolean](../glossary/basic-types.md#boolean) | **`half_height`** |  |  |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `SetDeathSound`

> Changes the Death sound when Character dies

```lua
my_character:SetDeathSound(sound_asset)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`sound_asset`** |  |  |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `SetFallDamageTaken`

> Set the Fall Damage multiplier taken when falling from High places \(default: 10\). Setting to 0 will make the Character to do not take damage or enter ragdoll mode

```lua
my_character:SetFallDamageTaken(damage)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`damage`** |  |  |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `SetFlyingMode`

> Sets the Flying Mode

```lua
my_character:SetFlyingMode(flying_mode)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [boolean](../glossary/basic-types.md#boolean) | **`flying_mode`** |  |  |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `SetGaitMode`

> **Gait Modes**: _None, Walking, Sprinting_

```lua
my_character:SetGaitMode(mode)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [GaitMode](../glossary/enums.md#gaitmode) | **`mode`** |  |  |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `SetGravityScale`

> Changes the Gravity Scale of this Character \(can be negative\)

```lua
my_character:SetGravityScale(scale)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [Vector](../utility-classes/vector.md) | **`scale`** |  |  |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `SetHealth`

> Sets the Health of this Character. If the character is dead, respawns it with full health

```lua
my_character:SetHealth(new_health)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`new_health`** |  |  |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `SetImpactDamageTaken`

> Set the Impact Damage taken when being roamed by things \(default: 10\). Setting to 0 will make the Character to do not take damage or enter ragdoll mode

```lua
my_character:SetImpactDamageTaken(damage)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`damage`** |  |  |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `SetInvulnerable`

> Sets if the Character can receive any damage

```lua
my_character:SetInvulnerable(is_invulnerable)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [boolean](../glossary/basic-types.md#boolean) | **`is_invulnerable`** |  |  |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `SetMaxHealth`

> Sets the MaxHealth of this Character

```lua
my_character:SetMaxHealth(new_max_health)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`new_max_health`** |  |  |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `SetMesh`

> Changes the Character Mesh on the fly

```lua
my_character:SetMesh(skeletal_mesh_asset)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`skeletal_mesh_asset`** |  |  |

### `SetMorphTarget`

&gt;

```lua
my_character:SetMorphTarget(key, value)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`skeletal_mesh_asset`** |  |  |
| [number](../glossary/basic-types.md#number) | **`value`** |  |  |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `SetMovementEnabled`

> Enables/Disables Character's Movement

```lua
my_character:SetMovementEnabled(is_movement_enabled)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [boolean](../glossary/basic-types.md#boolean) | **`is_movement_enabled`** |  |  |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `SetPainSound`

> Changes the Pain sound when Character takes damage

```lua
my_character:SetPainSound(sound_asset)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`sound_asset`** |  |  |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `SetPunchDamage`

> Set the Punch Damage this Character will apply on others \(default is 15\)

```lua
my_character:SetPunchDamage(damage)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`damage`** |  |  |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `SetRagdollMode`

> Sets Character Ragdoll Mode

```lua
my_character:SetRagdollMode(ragdoll_enabled)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [boolean](../glossary/basic-types.md#boolean) | **`ragdoll_enabled`** |  |  |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `SetSpeedMultiplier`

> 1 = normal

```lua
my_character:SetSpeedMultiplier(multiplier)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`multiplier`** |  |  |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `SetStanceMode`

> **Stance Modes**: _None, Standing, Crouching, Proning_

```lua
my_character:SetStanceMode(mode)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| StanceMode | **`mode`** |  |  |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `SetTeam`

> Sets a Team which will disable damaging same Team Members. 0 for Neutral

```lua
my_character:SetTeam(team)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`team`** |  |  |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `SetViewMode`

> **View Modes**: _FPS, TPS1, TPS2, TPS3_

```lua
my_character:SetViewMode(view_mode)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| ViewMode | **`view_mode`** |  |  |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `SetWeaponAimMode`

> **Aim Modes**: _None, ADS, ZoomedZoom, Zoomed, ZoomedFar_

```lua
my_character:SetWeaponAimMode(aim_mode)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| AimMode | **`aim_mode`** |  |  |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `StopAnimation`

> Stops an Animation Montage on this character

```lua
my_character:StopAnimation(animation_path = "")
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`animation_path`** | \`\` |  |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `UnGrabProp`

> UnGrabs/Drops the Prop the Character is holding

```lua
my_character:UnGrabProp()
```

### `IsInRagdollMode`

> Gets Character Ragdoll Mode
>
> Returns [boolean](../glossary/basic-types.md#boolean)

```lua
my_character:IsInRagdollMode()
```

### `IsInvulnerable`

> Gets if the Character can receive damage
>
> Returns [boolean](../glossary/basic-types.md#boolean)

```lua
my_character:IsInvulnerable()
```

### `IsMovementEnabled`

> Gets Character Movement Enabled
>
> Returns [boolean](../glossary/basic-types.md#boolean)

```lua
my_character:IsMovementEnabled()
```

### `GetControlRotation`

> Gets the rotation this character is looking at
>
> Returns [Rotator](../utility-classes/rotator.md)

```lua
my_character:GetControlRotation()
```

### `GetFallingMode`

> Gets the Falling Mode
>
> Returns FallingMode

```lua
my_character:GetFallingMode()
```

### `GetFlyingMode`

> Gets if the Character is in Flying Mode
>
> Returns FlyingMode

```lua
my_character:GetFlyingMode()
```

### `GetGaitMode`

> Gets the Gait Mode
>
> Returns GaitMode

```lua
my_character:GetGaitMode()
```

### `GetGrabbedProp`

> Gets the Grabbing Prop
>
> Returns Prop

```lua
my_character:GetGrabbedProp()
```

### `GetGravityScale`

> Gets the Gravity Scale of this Character
>
> Returns [number](../glossary/basic-types.md#number)

```lua
my_character:GetGravityScale()
```

### `GetHealth`

> Gets the Character's Health.
>
> Returns [number](../glossary/basic-types.md#number)

```lua
my_character:GetHealth()
```

### `GetMaxHealth`

> Gets the Character's MaxHealth.
>
> Returns [number](../glossary/basic-types.md#number)

```lua
my_character:GetMaxHealth()
```

### `GetMesh`

> Gets the Mesh Asset name
>
> Returns [string](../glossary/basic-types.md#string)

```lua
my_character:GetMesh()
```

### `GetPicked`

> Gets the holding Picked Item/Grenade/Weapon
>
> Returns Pickable

```lua
my_character:GetPicked()
```

### `GetPlayer`

> Gets the Player controlling this Character
>
> Returns Player

```lua
my_character:GetPlayer()
```

### `GetSpeedMultiplier`

> Returns [number](../glossary/basic-types.md#number)

```lua
my_character:GetSpeedMultiplier()
```

### `GetStanceMode`

> Returns StanceMode

```lua
my_character:GetStanceMode()
```

### `GetSwimmingMode`

> Returns SwimmingMode

```lua
my_character:GetSwimmingMode()
```

### `GetTeam`

> Returns [number](../glossary/basic-types.md#number)

```lua
my_character:GetTeam()
```

### `GetVehicle`

> Gets the Vehicle the Character is on
>
> Returns Vehicle

```lua
my_character:GetVehicle()
```

### `GetViewMode`

> Gets Character View Mode
>
> Returns ViewMode

```lua
my_character:GetViewMode()
```

### `GetWeaponAimMode`

> Gets Character Aim Mode
>
> Returns AimMode

```lua
my_character:GetWeaponAimMode()
```

## Events Detailed

### `Death`

> When Character Dies

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [Character](character.md) | **`self`** |  |
| [number](../glossary/basic-types.md#number) | **`last_damage_taken`** |  |
| [string](../glossary/basic-types.md#string) | **`last_bone_damaged`** |  |
| DamageType | **`damage_type_reason`** |  |
| [Vector](../utility-classes/vector.md) | **`hit_from_direction`** |  |
| [Player](https://github.com/nanos-world/docs-gitbook/tree/456785b68b61f82d2a0b36e60cac438e7b99c660/scripting-reference/player.md) | **`instigator`** |  |

```lua
Character.Subscribe("Death", function(self, last_damage_taken, last_bone_damage, damage_type_reason, hit_from_direction, instigator)

end)
```

### `Drop`

> When Character drops anything

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [Character](character.md) | **`self`** |  |
| Pickable | **`object`** |  |
| [boolean](../glossary/basic-types.md#boolean) | **`triggered_by_player`** |  |

```lua
Character.Subscribe("Drop", function(self, object, triggered_by_player)

end)
```

### `EnterVehicle`

> When Character enters a vehicle

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [Character](character.md) | **`self`** |  |
| Vehicle | **`vehicle`** |  |

```lua
Character.Subscribe("EnterVehicle", function(self, vehicle)

end)
```

### `FallingModeChanged`

> **Falling Modes**: _None, Jumping, Climbing, Vaulting, Falling, HighFalling, Parachuting, SkyDiving_

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [Character](character.md) | **`self`** |  |
| FallingMode | **`old_state`** |  |
| FallingMode | **`new_state`** |  |

```lua
Character.Subscribe("FallingModeChanged", function(self, old_state, new_state)

end)
```

### `Fire`

> When Character fires a Weapon

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [Character](character.md) | **`self`** |  |
| Weapon | **`weapon`** |  |

```lua
Character.Subscribe("Fire", function(self, weapon)

end)
```

### `GaitModeChanged`

> **Gait Modes**: _None, Walking, Sprinting_

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [Character](character.md) | **`self`** |  |
| GaitMode | **`old_state`** |  |
| GaitMode | **`new_state`** |  |

```lua
Character.Subscribe("GaitModeChanged", function(self, old_state, new_state)

end)
```

### `GrabProp`

> When Character grabs up a Prop

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [Character](character.md) | **`self`** |  |
| Prop | **`prop`** |  |

```lua
Character.Subscribe("GrabProp", function(self, prop)

end)
```

### \|server-only-label\| `Interact`

> When a Character interacts with an object \(i.e. try to pick it up\) - return false to prevent it

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [Character](character.md) | **`self`** |  |
| Pickable | **`object`** |  |

```lua
Character.Subscribe("Interact", function(self, object)

end)
```

### `LeaveVehicle`

> When Character leaves a vehicle

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [Character](character.md) | **`self`** |  |
| Vehicle | **`vehicle`** |  |

```lua
Character.Subscribe("LeaveVehicle", function(self, vehicle)

end)
```

### `MoveCompleted`

> Called when AI reaches it's destination, or when it fails

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [Character](character.md) | **`self`** |  |
| [boolean](../glossary/basic-types.md#boolean) | **`succeeded`** |  |

```lua
Character.Subscribe("MoveCompleted", function(self, succeeded)

end)
```

### `PickUp`

> When Character picks up anything

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [Character](character.md) | **`self`** |  |
| Pickable | **`object`** |  |

```lua
Character.Subscribe("PickUp", function(self, object)

end)
```

### `Possessed`

> When Character is possessed

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [Character](character.md) | **`self`** |  |
| [Player](https://github.com/nanos-world/docs-gitbook/tree/456785b68b61f82d2a0b36e60cac438e7b99c660/scripting-reference/player.md) | **`possesser`** |  |

```lua
Character.Subscribe("Possessed", function(self, possesser)

end)
```

### `Punch`

> When Character punches

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [Character](character.md) | **`self`** |  |

```lua
Character.Subscribe("Punch", function(self)

end)
```

### `RagdollModeChanged`

&gt;

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [Character](character.md) | **`self`** |  |
| [boolean](../glossary/basic-types.md#boolean) | **`old_state`** |  |
| [boolean](../glossary/basic-types.md#boolean) | **`new_state`** |  |

```lua
Character.Subscribe("RagdollModeChanged", function(self, old_state, new_state)

end)
```

### `Reload`

> When Character reloads a weapon

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [Character](character.md) | **`self`** |  |
| Weapon | **`weapon`** |  |
| [number](../glossary/basic-types.md#number) | **`ammo_to_reload`** |  |

```lua
Character.Subscribe("Reload", function(self, weapon, ammo_to_reload)

end)
```

### `Respawn`

> When Character Respawns

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [Character](character.md) | **`self`** |  |

```lua
Character.Subscribe("Respawn", function(self)

end)
```

### `StanceModeChanged`

> **Stance Modes**: _None, Standing, Crouching, Proning_

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [Character](character.md) | **`self`** |  |
| StanceMode | **`old_state`** |  |
| StanceMode | **`new_state`** |  |

```lua
Character.Subscribe("StanceModeChanged", function(self, old_state, new_state)

end)
```

### `SwimmingModeChanged`

> **Swimming Modes**: _None, Surface, Underwater_

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [Character](character.md) | **`self`** |  |
| SwimmingMode | **`old_state`** |  |
| SwimmingMode | **`new_state`** |  |

```lua
Character.Subscribe("SwimmingModeChanged", function(self, old_state, new_state)

end)
```

### `TakeDamage`

> When Character takes Damage

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [Character](character.md) | **`self`** |  |
| [number](../glossary/basic-types.md#number) | **`damage`** |  |
| [string](../glossary/basic-types.md#string) | **`bone`** |  |
| DamageType | **`type`** |  |
| [Vector](../utility-classes/vector.md) | **`from_direction`** |  |
| [Player](https://github.com/nanos-world/docs-gitbook/tree/456785b68b61f82d2a0b36e60cac438e7b99c660/scripting-reference/player.md) | **`instigator`** |  |

```lua
Character.Subscribe("TakeDamage", function(self, damage, bone, type, from_direction, instigator)

end)
```

### `UnGrabProp`

> When Character drops a Prop

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [Character](character.md) | **`self`** |  |
| Prop | **`prop`** |  |

```lua
Character.Subscribe("UnGrabProp", function(self, prop)

end)
```

### `UnPossessed`

> When Character is unpossessed

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [Character](character.md) | **`self`** |  |
| [Player](https://github.com/nanos-world/docs-gitbook/tree/456785b68b61f82d2a0b36e60cac438e7b99c660/scripting-reference/player.md) | **`old_possesser`** |  |

```lua
Character.Subscribe("UnPossessed", function(self, old_possesser)

end)
```

### `ViewModeChanged`

> **View Modes**: _FPS, TPS1, TPS2, TPS3_

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [Character](character.md) | **`self`** |  |
| ViewMode | **`old_state`** |  |
| ViewMode | **`new_state`** |  |

```lua
Character.Subscribe("ViewModeChanged", function(self, old_state, new_state)

end)
```

### `WeaponAimModeChanged`

> **Aim Modes**: _None, ADS, ZoomedZoom, Zoomed, ZoomedFar_

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [Character](character.md) | **`self`** |  |
| AimMode | **`old_state`** |  |
| AimMode | **`new_state`** |  |

```lua
Character.Subscribe("WeaponAimModeChanged", function(self, old_state, new_state)

end)
```

## Male & Female Customization

The following items can be used to customize Male & Female \(`nanos-world::SK_Male` & `nanos-world::SK_Female`\) default meshes from nanos world.

| Morph Targets | Mat. Scalar Params | Mat. Color Params | Mat. Texture Params |
| :--- | :--- | :--- | :--- |
| `nose1` | `BaseColorPower` | `LipstickTint` | `Texture` |
| `nose2` | `Muscular` | `BrowsTint` | `LipstickMask` |
| `brows` | `Specular` | `BlushTint` | `BrowsMask` |
| `mouth` | `Roughness` | `EyeShadowTint` | `BlushMask` |
| `fat` | `Scatter` | `UnderwearTint` | `EyeShadowMask` |
| `nose3` | `DetailAmount` | `HairTint` | `Normal` |
| `chin` | `DetailScale` | `Tint` | `NormalMuscular` |
| `face` | `UnderwearRoughness` |  | `UnderwearMask` |
| `nose4` | `UnderwearSpecular` |  | `SR` |
| `skinny` | `HairScatter` |  | `HairTexture` |
| `jaw` | `HairAlphaPower` |  | `HairSpecular` |
| `brows2` | `HairSpecularMultiplier` |  | `HairRoughness` |
| `angry` | `HairRoughnessMultiplier` |  | `HairTangent` |
| `smirk` | `HairPixelDepth` |  |  |
| `smirk2` |  |  |  |
| `smirk3` |  |  |  |
| `smile` |  |  |  |
| `nose6` |  |  |  |
| `jaw_forward` |  |  |  |
| `lips` |  |  |  |
| `lips2` |  |  |  |
| `mouth_wide` |  |  |  |
| `eyes1` |  |  |  |
| `eyes2` |  |  |  |
| `eyes3` |  |  |  |
| `eyes4` |  |  |  |
| `eyes_retraction` |  |  |  |
| `lips3` |  |  |  |
| `eyes5` |  |  |  |
| `nose7` |  |  |  |
| `forehead` |  |  |  |
| `bodyfat` |  |  |  |

## Character’s Skeleton Bone Names

{% hint style="info" %}
Ugly list I know.
{% endhint %}

* `root`
  * `pelvis`
    * `spine_01`
      * `spine_02`
        * `spine_03`
          * `clavicle_l`
            * `upperarm_l`
              * `lowerarm_l`
                * `hand_l`
                  * `index_01_l`
                    * `index_02_l`
                      * `index_03_l`
                  * `middle_01_l`
                    * `middle_02_l`
                      * `middle_03_l`
                  * `pinky_01_l`
                    * `pinky_02_l`
                      * `pinky_03_l`
                  * `ring_01_l`
                    * `ring_02_l`
                      * `ring_03_l`
                  * `thumb_01_l`
                    * `thumb_02_l`
                      * `thumb_03_l`
                  * `weapon_l`
          * `clavicle_r`
            * `upperarm_r`
              * `lowerarm_r`
                * `hand_r`
                  * `index_01_r`
                    * `index_02_r`
                      * `index_03_r`
                  * `middle_01_r`
                    * `middle_02_r`
                      * `middle_03_r`
                  * `pinky_01_r`
                    * `pinky_02_r`
                      * `pinky_03_r`
                  * `ring_01_r`
                    * `ring_02_r`
                      * `ring_03_r`
                  * `thumb_01_r`
                    * `thumb_02_r`
                      * `thumb_03_r`
                  * `weapon_r`
          * `neck_01`
            * `head`
              * `lefteye`
              * `righteye`
              * `leftlidup`
              * `leftlidlow`
              * `rightlidup`
              * `rightlitlow`
    * `thigh_l`
      * `calf_l`
        * `foot_l`
          * `ball_l`
    * `thigh_r`
      * `calf_r`
        * `foot_r`
          * `ball_r`

