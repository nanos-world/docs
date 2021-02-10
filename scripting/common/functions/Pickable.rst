Functions (Inherited from Pickable)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. list-table:: 
  :widths: 5 10 35 50

  * - 
    - **Returns**
    - **Name**
    - **Description**

  * - 
    - 
    - AddSkeletalMeshAttached(:term:`string` id, :term:`string` static_mesh_path)
    - Spawns and Attaches a SkeletalMesh into this Actor, the SkeletalMesh must have the same Skeletal used by this Actor Mesh, and will follow all animations from it. Uses a custom ID to be used for removing it further

  * - 
    - 
    - AddStaticMeshAttached(:term:`string` id, :term:`string` static_mesh_path, :term:`string` socket = "", :ref:`Vector` relative_location = Vector(), :ref:`Rotator` relative_rotation = Rotator())
    - Spawns and Attaches a StaticMesh into this Actor in a Socket with relative Location and Rotation. Uses a custom ID to be used for removing it further

  * - 
    - 
    - SetDefaultMaterial()
    - Replaces all materials of this actor with a nanos basic material with comon parameters available

  * - 
    - 
    - SetMaterialColorParameter(:term:`string` parameter_name, :ref:`Color` color)
    - Sets a Color parameter in this actor's material

  * - 
    - 
    - SetMaterialScalarParameter(:term:`string` parameter_name, :term:`number` scalar)
    - Sets a scalar parameter in this actor's material

  * - 
    - 
    - SetMaterialTextureParameter(:term:`string` parameter_name, :term:`string` texture_path)
    - Loads a image from computer (relative to `Assets/` folder) and sets as parameter in this actor's material

  * - 
    - 
    - SetMaterialVectorParameter(:term:`string` parameter_name, :ref:`Vector` vector)
    - Sets a Vector parameter in this actor's material

  * - |server-only-label|
    - 
    - PullUse()
    - Force this Pickable to be used (e.g. if this is a Weapon, will fire)

  * - |server-only-label|
    - 
    - ReleaseUse()
    - Force this Pickable to be released the usage

  * - 
    - 
    - RemoveSkeletalMeshAttached(:term:`string` id)
    - Removes, if existing, a SkeletalMesh from this Actor given it's custom ID

  * - 
    - 
    - RemoveStaticMeshAttached(:term:`string` id)
    - Removes, if existing, a StaticMesh from this Actor given it's custom ID

  * - 
    - :term:`string`
    - GetAssetName()
    - Gets the Asset name

  * - 
    - :ref:`Character`
    - GetHandler()
    - Gets the Character (if existing) which is holding this
