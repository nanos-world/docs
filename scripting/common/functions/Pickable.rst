Functions (Inherited from Pickable)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. list-table:: 
  :widths: 5 10 35 50

  * - 
    - **Returns**
    - **Name**
    - **Description**

  * - |server-only-label|
    - 
    - AddSkeletalMeshAttached(:term:`string` ID, :term:`string` StaticMeshPath)
    - Spawns and Attaches a SkeletalMesh into this Actor, the SkeletalMesh must have the same Skeletal used by this Actor Mesh, and will follow all animations from it. Uses a custom ID to be used for removing it further

  * - |server-only-label|
    - 
    - AddStaticMeshAttached(:term:`string` ID, :term:`string` StaticMeshPath, :term:`string` Socket = "", :ref:`Vector` RelativeLocation = Vector(), :ref:`Rotator` RelativeRotation = Rotator())
    - Spawns and Attaches a StaticMesh into this Actor in a Socket with relative Location and Rotation. Uses a custom ID to be used for removing it further

  * - |server-only-label|
    - 
    - PullUse()
    - Force this Pickable to be used (e.g. if this is a Weapon, will fire)

  * - |server-only-label|
    - 
    - ReleaseUse()
    - Force this Pickable to be released the usage

  * - |server-only-label|
    - 
    - RemoveSkeletalMeshAttached(:term:`string` ID)
    - Removes, if existing, a SkeletalMesh from this Actor given it's custom ID

  * - |server-only-label|
    - 
    - RemoveStaticMeshAttached(:term:`string` ID)
    - Removes, if existing, a StaticMesh from this Actor given it's custom ID

  * - 
    - :term:`string`
    - GetAssetName()
    - Gets the Asset name

  * - 
    - :ref:`Character`
    - GetHandler()
    - Gets the Character (if existing) which is holding this
