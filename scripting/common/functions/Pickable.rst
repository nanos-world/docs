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
