---
description: nanos world Enums.
---

# Enums

Instead of passing numbers to methods or comparing numbers in Events callbacks, you can use the following **Enums** to do so. Examples:

```lua
-- Using Enums to figure out which StanceMode the Character is
Character.Subscribe("StanceModeChanged", function(character, old_stance, new_stance)
   if (new_stance == StanceMode.Standing) then
      Package.Log("I'm Standing!")
   else if (new_stance == StanceMode.Crouching) then
      Package.Log("I'm Crouching!")
   end
end)

-- Using Enums to pass a Light Type to the constructor
local my_light = Light(Vector(-5, 0, 50), Rotator(), Color.RED, LightType.Point)

-- Using Enums to set the Character View Mode
character:SetViewMode(ViewMode.FPS)
```

:::info
The functions which use the Enums are still receiving numbers as parameters \(as always\), using Enums is just a facilitator.
:::

## All Enums

### `AimMode`

| Label | Value |
| :--- | :--- |
| **`AimMode.None`** | `0` |
| **`AimMode.ADS`** | `1` |
| **`AimMode.ZoomedZoom`** | `2` |
| **`AimMode.Zoomed`** | `3` |
| **`AimMode.ZoomedFar`** | `4` |

### `AnimationSlotType`

| Label | Value |
| :--- | :--- |
| **`AnimationSlotType.FullBody`** | `0` |
| **`AnimationSlotType.UpperBody`** | `1` |

### `AttachmentRule`

| Label | Value |
| :--- | :--- |
| **`AttachmentRule.KeepRelative`** | `0` |
| **`AttachmentRule.KeepWorld`** | `1` |
| **`AttachmentRule.SnapToTarget`** | `2` |

### `AttenuationFunction`

| Label | Value |
| :--- | :--- |
| **`AttenuationFunction.Linear`** | `0` |
| **`AttenuationFunction.Logarithmic`** | `1` |
| **`AttenuationFunction.Inverse`** | `2` |
| **`AttenuationFunction.LogReverse`** | `3` |
| **`AttenuationFunction.NaturalSound`** | `4` |

### `CameraMode`

| Label | Value |
| :--- | :--- |
| **`CameraMode.FPSTPS`** | `0` |
| **`CameraMode.FPSOnly`** | `1` |
| **`CameraMode.TPSOnly`** | `2` |

### `CollisionChannel`

| Label | Value |
| :--- | :--- |
| **`CollisionChannel.WorldStatic`** | `1 << 0` |
| **`CollisionChannel.WorldDynamic`** | `1 << 1` |
| **`CollisionChannel.Pawn`** | `1 << 2` |
| **`CollisionChannel.PhysicsBody`** | `1 << 5` |
| **`CollisionChannel.Vehicle`** | `1 << 6` |
| **`CollisionChannel.Destructible`** | `1 << 7` |
| **`CollisionChannel.TracePrimitive`** | `1 << 16` |
| **`CollisionChannel.Mesh`** | `1 << 17` |
| **`CollisionChannel.Foliage`** | `1 << 20` |

### `CollisionType`

| Label | Value |
| :--- | :--- |
| **`CollisionType.Normal`** | `0` |
| **`CollisionType.StaticOnly`** | `1` |
| **`CollisionType.NoCollision`** | `2` |

### `CursorType`

| Label | Value |
| :--- | :--- |
| **`CursorType.None`** | `0` |
| **`CursorType.Default`** | `1` |
| **`CursorType.TextEditBeam`** | `2` |
| **`CursorType.ResizeLeftRight`** | `3` |
| **`CursorType.ResizeUpDown`** | `4` |
| **`CursorType.ResizeSouthEast`** | `5` |
| **`CursorType.ResizeSouthWest`** | `6` |
| **`CursorType.CardinalCross`** | `7` |
| **`CursorType.Crosshairs`** | `8` |
| **`CursorType.Hand`** | `9` |
| **`CursorType.GrabHand`** | `10` |
| **`CursorType.GrabHandClosed`** | `11` |
| **`CursorType.SlashedCircle`** | `12` |
| **`CursorType.EyeDropper`** | `13` |

### `ConstraintMotion`

| Label | Value |
| :--- | :--- |
| **`ConstraintMotion.Free`** | `0` |
| **`ConstraintMotion.Limited`** | `1` |
| **`ConstraintMotion.Locked`** | `2` |

### `CrosshairType`

| Label | Value |
| :--- | :--- |
| **`CrosshairType.None`** | `0` |
| **`CrosshairType.Regular`** | `1` |
| **`CrosshairType.Circle`** | `2` |
| **`CrosshairType.Crossbow`** | `3` |
| **`CrosshairType.Dot`** | `4` |
| **`CrosshairType.Holo`** | `5` |
| **`CrosshairType.Launcher`** | `6` |
| **`CrosshairType.RegularX`** | `7` |
| **`CrosshairType.Rocket`** | `8` |
| **`CrosshairType.SeparatedTriangle`** | `9` |
| **`CrosshairType.Shotgun`** | `10` |
| **`CrosshairType.Square`** | `11` |
| **`CrosshairType.Submachine`** | `12` |
| **`CrosshairType.Tee`** | `13` |
| **`CrosshairType.ThreeDots`** | `14` |
| **`CrosshairType.Triangle`** | `15` |
| **`CrosshairType.Vee`** | `16` |

### `DamageType`

| Label | Value |
| :--- | :--- |
| **`DamageType.Shot`** | `0` |
| **`DamageType.Explosion`** | `1` |
| **`DamageType.Punch`** | `2` |
| **`DamageType.Fall`** | `3` |
| **`DamageType.RunOver`** | `4` |
| **`DamageType.Unknown`** | `5` |

### `DifferentialType`

| Label | Value |
| :--- | :--- |
| **`DifferentialType.LimitedSlip_4W`** | `0` |
| **`DifferentialType.LimitedSlip_FrontDrive`** | `1` |
| **`DifferentialType.LimitedSlip_RearDrive`** | `2` |
| **`DifferentialType.Open_4W`** | `3` |
| **`DifferentialType.Open_FrontDrive`** | `4` |
| **`DifferentialType.Open_RearDrive`** | `5` |

### `FallingMode`

| Label | Value |
| :--- | :--- |
| **`FallingMode.None`** | `0` |
| **`FallingMode.Jumping`** | `1` |
| **`FallingMode.Climbing`** | `2` |
| **`FallingMode.Vaulting`** | `3` |
| **`FallingMode.Falling`** | `4` |
| **`FallingMode.HighFalling`** | `5` |
| **`FallingMode.Parachuting`** | `6` |
| **`FallingMode.SkyDiving`** | `7` |

### `FontType`

| Label | Value |
| :--- | :--- |
| **`FontType.Roboto`** | `0` |
| **`FontType.GothicA1`** | `1` |
| **`FontType.PoiretOne`** | `2` |
| **`FontType.Oswald`** | `3` |
| **`FontType.RobotoMono`** | `4` |
| **`FontType.OpenSans`** | `5` |

### `GaitMode`

| Label | Value |
| :--- | :--- |
| **`GaitMode.None`** | `0` |
| **`GaitMode.Walking`** | `1` |
| **`GaitMode.Sprinting`** | `2` |

### `HandlingMode`

| Label | Value |
| :--- | :--- |
| **`HandlingMode.SingleHandedWeapon`** | `0` |
| **`HandlingMode.DoubleHandedWeapon`** | `1` |
| **`HandlingMode.SingleHandedMelee`** | `2` |
| **`HandlingMode.DoubleHandedMelee`** | `3` |
| **`HandlingMode.Throwable`** | `4` |
| **`HandlingMode.Torch`** | `5` |
| **`HandlingMode.Barrel`** | `6` |
| **`HandlingMode.Box`** | `7` |

### `LogType`

| Label | Value |
| :--- | :--- |
| **`LogType.Display`** | `0` |
| **`LogType.Warning`** | `1` |
| **`LogType.Error`** | `2` |
| **`LogType.Debug`** | `3` |
| **`LogType.Verbose`** | `4` |
| **`LogType.Scripting`** | `5` |
| **`LogType.Chat`** | `6` |
| **`LogType.WebUI`** | `7` |

### `LightType`

| Label | Value |
| :--- | :--- |
| **`LightType.Point`** | `0` |
| **`LightType.Spot`** | `1` |
| **`LightType.React`** | `2` |

### `MaterialType`

| Label | Value |
| :--- | :--- |
| **`MaterialType.None`** | `0` |
| **`MaterialType.Masked`** | `1` |
| **`MaterialType.Translucent`** | `2` |
| **`MaterialType.TranslucentDepth`** | `3` |

### `SoundType`

| Label | Value |
| :--- | :--- |
| **`SoundType.SFX`** | `0` |
| **`SoundType.Music`** | `1` |

### `StanceMode`

| Label | Value |
| :--- | :--- |
| **`StanceMode.None`** | `0` |
| **`StanceMode.Standing`** | `1` |
| **`StanceMode.Crouching`** | `2` |
| **`StanceMode.Proning`** | `3` |

### `SurfaceType`

| Label | Value |
| :--- | :--- |
| **`SurfaceType.Default`** | `0` |
| **`SurfaceType.Carpet`** | `1` |
| **`SurfaceType.Concrete`** | `2` |
| **`SurfaceType.Grass`** | `3` |
| **`SurfaceType.Gravel`** | `4` |
| **`SurfaceType.Ground`** | `5` |
| **`SurfaceType.MetalLight`** | `6` |
| **`SurfaceType.Plastic`** | `7` |
| **`SurfaceType.Sand`** | `8` |
| **`SurfaceType.Snow`** | `9` |
| **`SurfaceType.Water`** | `10` |
| **`SurfaceType.WoodLight`** | `11` |
| **`SurfaceType.Flesh`** | `12` |
| **`SurfaceType.MetalHeavy`** | `13` |
| **`SurfaceType.WoodHeavy`** | `14` |
| **`SurfaceType.Ice`** | `15` |
| **`SurfaceType.Mud`** | `16` |
| **`SurfaceType.Rock`** | `17` |
| **`SurfaceType.Thump`** | `18` |
| **`SurfaceType.Glass`** | `19` |

### `SwimmingMode`

| Label | Value |
| :--- | :--- |
| **`SwimmingMode.None`** | `0` |
| **`SwimmingMode.Surface`** | `1` |
| **`SwimmingMode.Underwater`** | `2` |

### `TextRenderAlignCamera`

| Label | Value |
| :--- | :--- |
| **`TextRenderAlignCamera.Unaligned`** | `0` |
| **`TextRenderAlignCamera.AlignCameraRotation`** | `1` |
| **`TextRenderAlignCamera.FaceCamera`** | `2` |

### `TextRenderBevelType`

| Label | Value |
| :--- | :--- |
| **`TextRenderBevelType.Linear`** | `0` |
| **`TextRenderBevelType.HalfCircle`** | `1` |
| **`TextRenderBevelType.Convex`** | `2` |
| **`TextRenderBevelType.Concave`** | `3` |
| **`TextRenderBevelType.OneStep`** | `4` |
| **`TextRenderBevelType.TwoSteps`** | `5` |
| **`TextRenderBevelType.Engraved`** | `6` |

### `TextRenderHorizontalAlignment`

| Label | Value |
| :--- | :--- |
| **`TextRenderHorizontalAlignment.Left`** | `0` |
| **`TextRenderHorizontalAlignment.Center`** | `1` |
| **`TextRenderHorizontalAlignment.Right`** | `2` |

### `TextRenderVerticalAlignment`

| Label | Value |
| :--- | :--- |
| **`TextRenderVerticalAlignment.Top`** | `0` |
| **`TextRenderVerticalAlignment.Center`** | `1` |
| **`TextRenderVerticalAlignment.Bottom`** | `2` |
| **`TextRenderVerticalAlignment.QuadTop`** | `3` |

### `TriggerType`

| Label | Value |
| :--- | :--- |
| **`TriggerType.Sphere`** | `0` |
| **`TriggerType.Box`** | `1` |

### `ViewMode`

| Label | Value |
| :--- | :--- |
| **`ViewMode.FPS`** | `0` |
| **`ViewMode.TPS1`** | `1` |
| **`ViewMode.TPS2`** | `2` |
| **`ViewMode.TPS3`** | `3` |

### `VOIPSetting`

| Label | Value |
| :--- | :--- |
| **`VOIPSetting.Local`** | `0` |
| **`VOIPSetting.Global`** | `1` |
| **`VOIPSetting.Muted`** | `2` |

### `WeatherType`

| Label | Value |
| :--- | :--- |
| **`WeatherType.Clear`** | `0` |
| **`WeatherType.Rain`** | `1` |
| **`WeatherType.Cloudy`** | `2` |
| **`WeatherType.Thunderstorm`** | `3` |

