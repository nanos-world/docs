# Weapon

![](../../.gitbook/assets/image%20%2855%29.png)

Weapons are fully customizable, all pieces of the weapon can be changed with immense possibility of creation

{% hint style="info" %}
Please take a look at our Default’s Weapon package with all built-in Weapons already properly configured and ready to use: [https://github.com/nanos-world/nanos-world-weapons](https://github.com/nanos-world/nanos-world-weapons).
{% endhint %}

## Usage

{% tabs %}
{% tab title="Lua" %}
{% code title="Server/Index.lua" %}
```lua
-- Spawning an AK47
local new_weapon = Weapon(Vector(-900, 185, 215), Rotator(0, 90, 90), "nanos-world::SK_AK47", CollisionType.Normal, true)

-- Configures Weapon Base Settings
new_weapon:SetAmmoSettings(30, 1000)
new_weapon:SetDamage(30)
new_weapon:SetSpread(30)
new_weapon:SetBulletSettings(1, 20000, 20000, Color(100, 58, 0))
new_weapon:SetCadence(0.1)

-- Configures how the Character Grabs and Aims the Weapon
new_weapon:SetHandlingMode(HandlingMode.DoubleHandedWeapon)
new_weapon:SetSightTransform(Vector(0, 0, -14.85), Rotator(-1, 0, 0))
new_weapon:SetLeftHandTransform(Vector(26, 0, 8.5), Rotator(0, 60, 90))
new_weapon:SetRightHandOffset(Vector(-10, 0, 0))

-- Configures Weapon Particles
new_weapon:SetParticlesBulletTrail("nanos-world::P_Bullet_Trail")
new_weapon:SetParticlesBarrel("nanos-world::P_Weapon_BarrelSmoke")
new_weapon:SetParticlesShells("nanos-world::P_Weapon_Shells_762x39")

-- Configures Weapon Sounds
new_weapon:SetSoundDry("nanos-world::A_Rifle_Dry")
new_weapon:SetSoundLoad("nanos-world::A_Rifle_Load")
new_weapon:SetSoundUnload("nanos-world::A_Rifle_Unload")
new_weapon:SetSoundZooming("nanos-world::A_AimZoom")
new_weapon:SetSoundAim("nanos-world::A_Rattle")
new_weapon:SetSoundFire("nanos-world::A_AK47_Shot")

-- Configures Weapon Animations
new_weapon:SetAnimationCharacterFire("nanos-world::AM_Mannequin_Sight_Fire")
new_weapon:SetAnimationReload("nanos-world::AM_Mannequin_Reload_Rifle")

-- Configures the Mesh to drop when reloading
new_weapon:SetMagazineMesh("nanos-world::SM_AK47_Mag_Empty")

-- Configures the Crosshair Type
new_weapon:SetCrosshairSetting(CrosshairType.Regular)
```
{% endcode %}
{% endtab %}
{% endtabs %}

Using our Default Weapons Package [https://github.com/nanos-world/nanos-world-weapons](https://github.com/nanos-world/nanos-world-weapons) \(already built-in included\) for spawning an AK47:

{% tabs %}
{% tab title="Lua" %}
{% code title="Server/Index.lua" %}
```lua
-- Includes the nanos world Default Weapons Package in your Package (you don't need to download it, just include it!)
Package.RequirePackage("NanosWorldWeapons")

-- Spawning the AK47
local my_ak47 = NanosWorldWeapons.AK47(Vector(1035, 154, 300), Rotator())

-- Giving the Weapon to a Character
my_character:PickUp(my_ak47)
```
{% endcode %}
{% endtab %}
{% endtabs %}

{% page-ref page="../../getting-started/tutorials-and-examples/prop-shooter.md" %}

{% page-ref page="../../getting-started/tutorials-and-examples/weapon-scope.md" %}

{% page-ref page="../../getting-started/tutorials-and-examples/weapon-flashlight.md" %}

## Constructor Parameters

| **Type** | **Name** | **Default** |
| :--- | :--- | :--- |
| [Vector](../utility-classes/vector.md) | **`location`** | `Vector(0, 0, 0)` |
| [Rotator](../utility-classes/rotator.md) | **`rotation`** | `Rotator(0, 0, 0)` |
| [string](../glossary/basic-types.md#string) | **`model_name`** | `Skeletal Mesh Path` |
| [CollisionType](../glossary/enums.md#collisiontype) | **`collision_type`** | `CollisionType.Normal` |
| [boolean](../glossary/basic-types.md#boolean) | **`gravity_enabled`** | `true` |

## Available [Crosshairs Types](../glossary/enums.md#crosshairtype)

![All available Crosshairs](../../.gitbook/assets/image%20%2854%29.png)

## Functions

{% page-ref page="base-classes/actor.md" %}

{% page-ref page="base-classes/pickable.md" %}

|  | **Returns** | **Name** | **Description** |
| :--- | :--- | :--- | :--- |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`SetAmmoBag`**](weapon.md#setammobag) | Sets this Weapon’s Ammo in the Bag |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`SetAmmoClip`**](weapon.md#setammoclip) | Sets this Weapon’s Ammo in the Clip |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`SetAmmoSettings`**](weapon.md#setammosettings) | Auxiliary for setting and configuring ammo |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`SetAnimationCharacterFire`**](weapon.md#setanimationcharacterfire) | Animation played by the Character when Firing |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`SetAnimationReload`**](weapon.md#setanimationreload) | Animation played by the Character when Reloading |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`SetBulletColor`**](weapon.md#setbulletcolor) | Set the Bullet Color |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`SetBulletSettings`**](weapon.md#setbulletsettings) | Auxiliary for setting and configuring the Bullet |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`SetCadence`**](weapon.md#setcadence) | Speed of shots |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`SetClipCapacity`**](weapon.md#setclipcapacity) | Capacity of the Weapon’s Clip |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`SetCrosshairSetting`**](weapon.md#setcrosshairsetting) | Sets the Crosshair Type |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`SetDamage`**](weapon.md#setdamage) | Base Weapon’s Damage |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`SetHandlingMode`**](weapon.md#sethandlingmode) | Sets how the Character grabs this Weapon |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`SetLeftHandTransform`**](weapon.md#setlefthandtransform) | Left Hand Offset |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`SetMagazineMesh`**](weapon.md#setmagazinemesh) | The mesh used when the Character reloads the weapon. Will drop this Mesh as an animation effect. |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`SetParticlesBulletTrail`**](weapon.md#setparticlesbullettrail) | Particle of the Bullet flying |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`SetParticlesBarrel`**](weapon.md#setparticlesbarrel) | Particle of the Fire Blast in the muzzle |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`SetParticlesShells`**](weapon.md#setparticlesshells) | Particle of the empty bullet flying from the weapon when shooting |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`SetRightHandOffset`**](weapon.md#setrighthandoffset) | Offset of Right Hand. To position relative to the camera. |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`SetSightFOVMultiplier`**](weapon.md#setsightfovmultiplier) | The FOV multiplier when ADS |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`SetSightTransform`**](weapon.md#setsighttransform) | Offset applied to align player’s head to weapon’s sight and rotation applied on the weapon when ADS |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`SetSoundDry`**](weapon.md#setsounddry) | Sound when weapon has not bullet and try to shoot |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`SetSoundLoad`**](weapon.md#setsoundload) | Sound when Loading a magazine |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`SetSoundUnload`**](weapon.md#setsoundunload) | Sound when Unloading a magazine |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`SetSoundZooming`**](weapon.md#setsoundzooming) | Sound when Zooming |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`SetSoundAim`**](weapon.md#setsoundaim) | Sound when Aiming |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`SetSoundFire`**](weapon.md#setsoundfire) | Sound when Shooting |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`SetSpread`**](weapon.md#setspread) | Base Weapon’s Spread \(the higher the less precision - recommended value: 20\) |
| [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) |  | [**`SetUsageSettings`**](weapon.md#setusagesettings) | Sets if the Weapon can hold to keep firing and if it needs to release to fire |
|  | [number](https://docs.nanos.world/scripting/Glossary.html#term-number) | [**`GetAmmoBag`**](weapon.md#getammobag) | Gets this Weapon’s Ammo Bag |
|  | [number](https://docs.nanos.world/scripting/Glossary.html#term-number) | [**`GetAmmoClip`**](weapon.md#getammoclip) | Gets this Weapon’s Ammo Clip |
|  | [Color](https://docs.nanos.world/scripting/utility/Color.html#color) | [**`GetBulletColor`**](weapon.md#getbulletcolor) |  |
|  | [number](https://docs.nanos.world/scripting/Glossary.html#term-number) | [**`GetDamage`**](weapon.md#getdamage) |  |
|  | [Vector](https://docs.nanos.world/scripting/utility/Vector.html#vector) | [**`GetRightHandOffset`**](weapon.md#getrighthandoffset) | \`\` |
|  | [number](https://docs.nanos.world/scripting/Glossary.html#term-number) | [**`GetSpread`**](weapon.md#getspread) |  |

## Events

| **Name** | **Description** |
| :--- | :--- |
| [**`Fire`**](vehicle.md#fire) | When Weapon is fired |
| [**`Reload`**](vehicle.md#reload) | When Weapon is reloaded |

## Functions Detailed

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `SetAmmoBag`

> Sets this Weapon's Ammo in the Bag

```lua
my_weapon:SetAmmoBag(new_ammo)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`new_ammo`** |  |  |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `SetAmmoClip`

> Sets this Weapon's Ammo in the Clip

```lua
my_weapon:SetAmmoClip(new_ammo)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`new_ammo`** |  |  |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `SetAmmoSettings`

> Aux for setting and configuring ammo

```lua
my_weapon:SetAmmoSettings(ammo_clip, ammo_bag, ammo_to_reload, clip_capacity)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`ammo_clip`** |  |  |
| [number](../glossary/basic-types.md#number) | **`ammo_bag`** |  |  |
| [number](../glossary/basic-types.md#number) | **`ammo_to_reload`** | `ammo_clip` | The amount of ammo which will be effectively reloaded in the clip when reloading |
| [number](../glossary/basic-types.md#number) | **`clip_capacity`** | `ammo_clip` | How much ammo the clip can hold without needing to reload |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `SetAnimationCharacterFire`

> Animation played by the Character when Firing

```lua
my_weapon:SetAnimationCharacterFire(animation_asset_path)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`animation_asset_path`** |  |  |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `SetAnimationReload`

> Animation played by the Character when Reloading
>
> Currently this animation must be one of the default ones: `AM_Mannequin_Reload_Rifle`, `AM_Mannequin_Reload_Pistol` or `AM_Mannequin_Reload_Shotgun`, as they have internal triggers to finish the reload

```lua
my_weapon:SetAnimationReload(animation_asset_path)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`animation_asset_path`** |  |  |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `SetBulletColor`

> Set the Bullet Color
>
> Only has effect if using Bullet Trail particle `P_Bullet_Trail` or if you particle has the **Color** parameter

```lua
my_weapon:SetBulletColor(color)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| Color | **`color`** |  |  |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `SetBulletSettings`

> Aux for setting and configuring the Bullet

```lua
my_weapon:SetBulletSettings(bullet_count, bullet_max_distance, bullet_velocity, bullet_color)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`bullet_count`** |  | 1 for common weapons, &gt; 1 for shotguns |
| [number](../glossary/basic-types.md#number) | **`bullet_max_distance`** |  |  |
| [number](../glossary/basic-types.md#number) | **`bullet_velocity`** |  | Visuals only |
| Color | **`bullet_color`** |  |  |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `SetCadence`

> Speed of shots

```lua
my_weapon:SetCadence(cadence)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`cadence`** |  | 1 shot at each `cadence` second |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `SetClipCapacity`

> Capacity of the Weapon's Clip

```lua
my_weapon:SetClipCapacity(clip)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`clip`** |  |  |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `SetCrosshairSetting`

> Sets the Crosshair Type

```lua
my_weapon:SetCrosshairSetting(type)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| CrosshairType | **`type`** |  |  |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `SetDamage`

> Base Weapon's Damage
>
> This will be multiplied by multiplier factors when hitting specific bones

```lua
my_weapon:SetDamage(damage)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`damage`** |  |  |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `SetHandlingMode`

> Sets how the Character grabs this Weapon

```lua
my_weapon:SetHandlingMode(mode)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| HandlingMode | **`mode`** |  |  |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `SetLeftHandTransform`

> Left Hand Offset

```lua
my_weapon:SetLeftHandTransform(location, rotation)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| Vector | **`location`** |  |  |
| Rotator | **`rotation`** |  |  |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `SetMagazineMesh`

> The mesh used when the Character reloads the weapon. Will drop this Mesh as an animation effect.

```lua
my_weapon:SetMagazineMesh(static_mesh_asset_path)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`static_mesh_asset_path`** |  |  |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `SetParticlesBulletTrail`

> Particle of the Bullet flying

```lua
my_weapon:SetParticlesBulletTrail(particle_asset_path)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`particle_asset_path`** |  |  |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `SetParticlesBarrel`

> Particle of the Fire Blast in the muzzle

```lua
my_weapon:SetParticlesBarrel(particle_asset_path)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`particle_asset_path`** |  |  |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `SetParticlesShells`

> Particle of the empty bullet flying from the weapon when shooting

```lua
my_weapon:SetParticlesShells(particle_asset_path)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`particle_asset_path`** |  |  |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `SetRightHandOffset`

> Offset of Right Hand. To position relative to the camera.

```lua
my_weapon:SetRightHandOffset(offset)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| Vector | **`offset`** |  |  |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `SetSightFOVMultiplier`

> The FOV multiplier when ADS

```lua
my_weapon:SetSightFOVMultiplier(multiplier)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`multiplier`** |  |  |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `SetSightTransform`

> Offset applied to align player's head to weapon's sight and rotation applied on the weapon when ADS

```lua
my_weapon:SetSightTransform(location, rotation)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| Vector | **`location`** |  |  |
| Rotator | **`rotation`** |  |  |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `SetSoundDry`

> Sound when weapon has not bullet and try to shoot

```lua
my_weapon:SetSoundDry(sound_asset_path)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`sound_asset_path`** |  |  |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `SetSoundLoad`

> Sound when Loading a magazine

```lua
my_weapon:SetSoundLoad(sound_asset_path)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`sound_asset_path`** |  |  |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `SetSoundUnload`

> Sound when Unloading a magazine

```lua
my_weapon:SetSoundUnload(sound_asset_path)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`sound_asset_path`** |  |  |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `SetSoundZooming`

> Sound when Zooming

```lua
my_weapon:SetSoundZooming(sound_asset_path)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`sound_asset_path`** |  |  |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `SetSoundAim`

> Sound when Aiming

```lua
my_weapon:SetSoundAim(sound_asset_path)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`sound_asset_path`** |  |  |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `SetSoundFire`

> Sound when Shooting

```lua
my_weapon:SetSoundFire(sound_asset_path)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [string](../glossary/basic-types.md#string) | **`sound_asset_path`** |  |  |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `SetSpread`

> Base Weapon's Spread \(the higher the less precision - recommended value: 20\)

```lua
my_weapon:SetSpread(damage)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [number](../glossary/basic-types.md#number) | **`damage`** |  |  |

### [![](../../.gitbook/assets/server-only.png)](../../core-concepts/scripting/authority-concepts.md#methods-and-events-availability) `SetUsageSettings`

> Sets if the Weapon can hold to keep firing and if it needs to release to fire

```lua
my_weapon:SetUsageSettings(can_hold_use, hold_release_use)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [boolean](../glossary/basic-types.md#boolean) | **`can_hold_use`** |  |  |
| [boolean](../glossary/basic-types.md#boolean) | **`hold_release_use`** |  |  |

### `GetAmmoBag`

> Gets this Weapon's Ammo Bag
>
> Returns [number](../glossary/basic-types.md#number)

```lua
my_weapon:GetAmmoBag()
```

### `GetAmmoClip`

> Gets this Weapon's Ammo Clip
>
> Returns [number](../glossary/basic-types.md#number)

```lua
my_weapon:GetAmmoClip()
```

### `GetBulletColor`

> Returns Color

```lua
my_weapon:GetBulletColor()
```

### `GetDamage`

> Returns [number](../glossary/basic-types.md#number)

```lua
my_weapon:GetDamage()
```

### `GetRightHandOffset`

> Returns Vector

```lua
my_weapon:GetRightHandOffset()
```

### `GetSpread`

> Returns [number](../glossary/basic-types.md#number)

```lua
my_weapon:GetSpread()
```

## Events Detailed

### `Fire`

> Triggered when Weapon fired

```lua
Weapon.Subscribe("Fire", function(self, shooter)

end)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [Weapon](weapon.md) | `self` |  |
| Character | `shooter` |  |

### `Reload`

> When a Weapon is reloaded, optionally by a Character

```lua
Weapon.Subscribe("Reload", function(self, character, ammo_to_reload)

end)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [Weapon](weapon.md) | `self` |  |
| Character | `character` |  |
| [number](../glossary/basic-types.md#number) | **`ammo_to_reload`** |  |

