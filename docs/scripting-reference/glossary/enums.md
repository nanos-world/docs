---
description: nanos world Enums.
tags: [scripting]
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

### `DamageType`

| Label | Value |
| :--- | :--- |
| **`DamageType.Shot`** | `0` |
| **`DamageType.Explosion`** | `1` |
| **`DamageType.Punch`** | `2` |
| **`DamageType.Fall`** | `3` |
| **`DamageType.RunOverProp`** | `4` |
| **`DamageType.RunOverVehicle`** | `5` |
| **`DamageType.Unknown`** | `6` |

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

### `HighlightMode`

| Label | Value |
| :--- | :--- |
| **`HighlightMode.Always`** | `0` |
| **`HighlightMode.OnlyHidden`** | `1` |
| **`HighlightMode.OnlyVisible`** | `2` |

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

### `LightProfile`

| Label | Value |
| :--- | :--- |
| **`None`** | `0` |
| **`Arrow_Star`** | `1` |
| **`Arrow_Up`** | `2` |
| **`Beam_01`** | `3` |
| **`Beam_02`** | `4` |
| **`Beam_03`** | `5` |
| **`Beam_04`** | `6` |
| **`Beam_05`** | `7` |
| **`Beam_06`** | `8` |
| **`Beam_07`** | `9` |
| **`Beam_08`** | `10` |
| **`Beam_LED_01`** | `11` |
| **`Beam_LED_02`** | `12` |
| **`Beam_LED_03`** | `13` |
| **`Beam_LED_04`** | `14` |
| **`Beam_LED_05`** | `15` |
| **`Beam_LED_06`** | `16` |
| **`Beam_LED_07`** | `17` |
| **`Bow`** | `18` |
| **`Capped_01`** | `19` |
| **`Capped_02`** | `20` |
| **`Shattered_01`** | `21` |
| **`Shattered_02`** | `22` |
| **`Shattered_03`** | `23` |
| **`Shattered_04`** | `24` |
| **`Shattered_05`** | `25` |
| **`SpotLight_01`** | `26` |
| **`SpotLight_02`** | `27` |
| **`SpotLight_03`** | `28` |
| **`SpotLight_04`** | `29` |
| **`Spreadout_01`** | `30` |
| **`Spreadout_02`** | `31` |
| **`Spreadout_03`** | `32` |
| **`Spreadout_04`** | `33` |
| **`Star_Bow`** | `34` |
| **`Star_Burst_01`** | `35` |
| **`Star_Burst_02`** | `36` |
| **`Star_Burst_03`** | `37` |
| **`Star_Burst_04`** | `38` |
| **`Star_Burst_05`** | `39` |
| **`Star_Burst_06`** | `40` |
| **`Star_Burst_07`** | `41` |
| **`Star_Burst_08`** | `42` |
| **`Star_X_01`** | `43` |
| **`Star_X_02`** | `44` |
| **`Wall_Boomerang`** | `45` |
| **`Wall_Inverted_V`** | `46` |
| **`Wall_Star_T`** | `47` |
| **`Wing_6`** | `48` |
| **`Wing_V_01`** | `49` |
| **`Wing_V_02`** | `50` |

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

### `SoundType`

| Label | Value |
| :--- | :--- |
| **`SoundType.SFX`** | `0` |
| **`SoundType.Music`** | `1` |

### `SoundLoopMode`

| Label | Value |
| :--- | :--- |
| **`SoundLoopMode.Default`** | `0` |
| **`SoundLoopMode.Forever`** | `1` |
| **`SoundLoopMode.Never`** | `2` |

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

