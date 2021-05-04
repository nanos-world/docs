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
    - AddSkeletalMeshAttached( |br-p| :term:`string` id, |br-p| :term:`string` static_mesh_path |br| )
    - Spawns and Attaches a SkeletalMesh into this Actor, the SkeletalMesh must have the same Skeletal used by this Actor Mesh, and will follow all animations from it. Uses a custom ID to be used for removing it further

  * - 
    - 
    - AddStaticMeshAttached( |br-p| :term:`string` id, |br-p| :term:`string` static_mesh_path, |br-p| :term:`string` socket = "", |br-p| :ref:`Vector` relative_location = Vector(), |br-p| :ref:`Rotator` relative_rotation = Rotator() |br| )
    - Spawns and Attaches a StaticMesh into this Actor in a Socket with relative Location and Rotation. Uses a custom ID to be used for removing it further

  * - 
    - 
    - SetDefaultMaterial( |br-p| :term:`MaterialType` material_type = MaterialType.Masked |br| )
    - Replaces all materials of this actor with a nanos basic material with comon parameters available **Material Types**: (*Masked, Translucent, TranslucentDepth*)

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
