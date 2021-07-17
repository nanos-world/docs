---
description: Base class for all Pickable entities
---

# Base Pickable

**Pickable** are special entities which can be **grabbed**, **hold** and **used** by [Characters](../character.md). Example of Pickable entities are: [Weapons](../weapon.md), [Items](../item.md) and [Grenade](../grenade.md).

They have special methods and events and are highlighted when looking at by a Character.

## Functions

|  | **Returns** | **Name** | **Description** |
| :---: | :--- | :--- | :--- |
|  |  | [**`AddSkeletalMeshAttached`**](pickable.md#addskeletalmeshattached) | Spawns and Attaches a SkeletalMesh into this Actor |
|  |  | [**`AddStaticMeshAttached`**](pickable.md#addstaticmeshattached) | Spawns and Attaches a StaticMesh into this Actor |
| [![](../../../.gitbook/assets/server-only.png)](../../../core-concepts/scripting/authority-concepts.md) |  | [**`PullUse`**](pickable.md#pulluse) | Force this Pickable to be used |
| [![](../../../.gitbook/assets/server-only.png)](../../../core-concepts/scripting/authority-concepts.md) |  | [**`ReleaseUse`**](pickable.md#releaseuse) | Force this Pickable to be released the usage |
|  |  | [**`RemoveSkeletalMeshAttached`**](pickable.md#removeskeletalmeshattached) | Removes, if existing, a SkeletalMesh from this Actor given it's custom ID |
|  |  | [**`RemoveStaticMeshAttached`**](pickable.md#removestaticmeshattached) | Removes, if existing, a StaticMesh from this Actor given it's custom ID |
|  | [string](../../glossary/basic-types.md#string) | [**`GetAssetName`**](pickable.md#getassetname) | Gets the Asset name |
|  | [Character](../character.md) | [**`GetHandler`**](pickable.md#gethandler) | Gets the Character \(if existing\) which is holding this |

### `AddSkeletalMeshAttached`

> Spawns and Attaches a SkeletalMesh into this Actor, the SkeletalMesh must have the same Skeletal used by this Actor Mesh, and will follow all animations from it. Uses a custom ID to be used for removing it further

```lua
entity:AddSkeletalMeshAttached(id, skeletal_mesh_path)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [string](../../glossary/basic-types.md#string) | **`id`** |  | Unique ID to set the Skeletal Mesh |
| [string](../../glossary/basic-types.md#string) | **`skeletal_mesh_path`** |  | Skeletal Mesh Asset to use |

### `AddStaticMeshAttached`

> Spawns and Attaches a StaticMesh into this Actor in a Socket with relative Location and Rotation. Uses a custom ID to be used for removing it further

```lua
entity:AddStaticMeshAttached(id, static_mesh_path, socket, relative_location, relative_rotation)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [string](../../glossary/basic-types.md#string) | **`id`** |  | Unique ID to set the Static Mesh |
| [string](../../glossary/basic-types.md#string) | **`static_mesh_path`** |  | Static Mesh Asset to use |
| [string](../../glossary/basic-types.md#string) | **`socket`** | `""` | Bone Socket to attach to |
| [Vector](../../utility-classes/vector.md) | **`relative_location`** | `Vector(0, 0, 0)` | Relative Location |
| [Rotator](../../utility-classes/rotator.md) | **`relative_rotation`** | `Rotator(0, 0, 0)` | Relative Rotation |

### [![](../../../.gitbook/assets/server-only.png)](../../../core-concepts/scripting/authority-concepts.md) `PullUse`

> Force this Pickable to be used \(e.g. if this is a Weapon, will fire\)

```lua
entity:PullUse()
```

### [![](../../../.gitbook/assets/server-only.png)](../../../core-concepts/scripting/authority-concepts.md) `ReleaseUse`

> Force this Pickable to be released the usage

```lua
entity:ReleaseUse()
```

### `RemoveSkeletalMeshAttached`

> Removes, if existing, a SkeletalMesh from this Actor given it's custom ID

```lua
entity:RemoveSkeletalMeshAttached(id)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [string](../../glossary/basic-types.md#string) | **`id`** |  | Unique ID to remove the Attached Mesh |

### `RemoveStaticMeshAttached`

> Removes, if existing, a StaticMesh from this Actor given it's custom ID

```lua
entity:RemoveStaticMeshAttached(id)
```

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [string](../../glossary/basic-types.md#string) | **`id`** |  | Unique ID to remove the Attached Mesh |

### `GetAssetName`

> Returns the Asset name \([string](../../glossary/basic-types.md#string)\)

```lua
entity:GetAssetName()
```

### `GetHandler`

> Gets the Character \(if existing\) which is holding this

```lua
entity:GetHandler()
```

## Events

| **Name** | **Description** |
| :--- | :--- |
| [**`Drop`**](pickable.md#drop) | When a Character drops this |
| [**`Hit`**](pickable.md#hit) | When this Entity hits something |
| [**`PickUp`**](pickable.md#pickup) | When a Character picks up this |

### `Drop`

> When a Character drops this

```lua
Weapon.Subscribe("Drop", function(self, character, was_triggered_by_player)
    -- called when any weapon is dropped by a Character
end)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [Pickable](pickable.md) | `self` | The entity which has been dropped |
| Character | `character` | The Character which picked up |
| [boolean](../../glossary/basic-types.md#boolean) | `was_triggered_by_player` | If the Player has actively pressed 'G' to drop |

### `Hit`

> When this Entity hits something

```lua
Weapon.Subscribe("Hit", function(self, intensity)
    -- called when any weapon hits something
end)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [Pickable](pickable.md) | `self` | The entity which has been hit |
| [number](../../glossary/basic-types.md#number) | `intensity` | Intensity of the Hit |

### `PickUp`

> When a Character picks up this

```lua
Weapon.Subscribe("PickUp", function(self, character)
    -- called when any weapon is picked up by a Character
end)
```

| Type | Parameter | Description |
| :--- | :--- | :--- |
| [Pickable](pickable.md) | `self` | The entity which has been picked up |
| [Character](../character.md) | `character` | The Character which picked up |

