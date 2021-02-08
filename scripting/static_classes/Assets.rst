.. _Assets:

.. include:: ../common/common.rst

******
Assets
******

Static Class to retrieve all AssetPack information and it's Assets.

.. tip:: This is a Static Class named ``Assets``. You can access it's methods directly with ``:``. It is not possible to initialize or create new instances.


Functions
---------

.. list-table:: 
  :widths: 10 35 55

  * - **Returns**
    - **Name**
    - **Description**

  * - :term:`table`
    - GetAssetPacks()
    - Returns an array of tables containing information about all loaded Asset Packs ``[{Name, Path, Author, Version}, ...]``

  * - :term:`table`
    - GetAnimations(:term:`string` asset_pack_path)
    - Returns an array of strings containing all Animation Assets Keys from an AssetPack

  * - :term:`table`
    - GetMaps(:term:`string` asset_pack_path)
    - Returns an array of strings containing all Map Asset Keys from an AssetPack

  * - :term:`table`
    - GetParticles(:term:`string` asset_pack_path)
    - Returns an array of strings containing all Particle Assets Keys from an AssetPack

  * - :term:`table`
    - GetSounds(:term:`string` asset_pack_path)
    - Returns an array of strings containing all Sound Assets Keys from an AssetPack

  * - :term:`table`
    - GetSkeletalMeshes(:term:`string` asset_pack_path)
    - Returns an array of strings containing all Skeletal Mesh Asset Keys from an AssetPack

  * - :term:`table`
    - GetStaticMeshes(:term:`string` asset_pack_path)
    - Returns an array of strings containing all Static Mesh Assets Keys from an AssetPack

  * - :term:`table`
    - GetOthers(:term:`string` asset_pack_path)
    - Returns an array of strings containing all Other Assets Keys from an AssetPack
