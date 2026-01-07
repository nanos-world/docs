---
title: Vault
description: 'Vault & Store: share your content with others!'
image: /img/docs/vault-01.webp
---


nanos world **Vault** is in-game interface to download and manage installed Asset Packs & Packages.

![](/img/docs/vault/vault-01.webp)


## About the Vault

Within the game, we have a menu tab called **Vault**, where you will be able to **download**, **update** and **manage** the Packages/Assets you have in your account or installed locally, as well as  browse the whole store!

The Vault provides filtering options to help you find the Resources you are looking for, including filtering by tags, categories, popularity, and more.

![](/img/docs/vault/vault-02.webp)

<MediaLegend>In-game Vault Tab</MediaLegend>


## Resources

A **Resource** is the term we use to refer to any Asset Pack or Package that is available in the Store & Vault. From the Vault, you can view Resource details, download them, manage your own (or your Team's) Resources and more.

![](/img/docs/vault/vault-info.webp)

<MediaLegend>Vault Resource Info Tab</MediaLegend>

![](/img/docs/vault/resource-screenshots.webp)

<MediaLegend>Vault Resource Screenshots Tab</MediaLegend>

![](/img/docs/vault/resource-ratings.webp)

<MediaLegend>Vault Resource Ratings Tab</MediaLegend>

![](/img/docs/vault/resource-changelogs.webp)

<MediaLegend>Vault Resource Changelogs Tab</MediaLegend>

![](/img/docs/vault/resource-dependencies.webp)

<MediaLegend>Vault Resource Dependencies Tab</MediaLegend>

From the right panel of any **Resource** page, you can see information regarding the local installation, as well a button to open the installation folder, the store page, buttons to `review`, `install`, `uninstall`, `update` or start a new game if it's a **Game Mode** Package:

![](/img/docs/vault/resource-right-panel.webp)

<MediaLegend>Vault Resource Right Panel</MediaLegend>


### Creating Resources

From within the game, you can create a new Resource by going to the **Vault** tab and selecting the `+ create new package` (or `+ create new asset pack`) button in the bottom right corner.

This will open a popup where you can fill the name (unique folder name), title and if it's a Package, the type of it (if it's a map, script, game-mode, ETC).

![](/img/docs/vault/create-new-package.webp)

<MediaLegend>Create New Package Popup</MediaLegend>

:::tip

This workflow will create a local Resource in your `nanos-world/Server/Packages/` (or `nanos-world/Server/Assets/`) folder, which you can then edit and add content to. Once you are ready, you can upload the Resource to the Store directly from the Vault manage tab.

:::


### Creating a Store Resource

After creating a local resource, you can create a Store Resource directly from within the game. To do so, go to the **Vault** tab and find your resource (it will appear as yellow bordered), then open the **Manage** tab on it.

There, you will find a `+ create this resource on the store`:

![](/img/docs/vault/resource-local.webp)

<MediaLegend>Local Resource Manage Tab</MediaLegend>

By pressing that button, you will open a popup where you can confirm all the required information for the Store Resource, and select the [Team](#teams) it will belong to:

![](/img/docs/vault/create-on-store.webp)

<MediaLegend>Create Store Resource Popup</MediaLegend>


### Managing Resources

After it's created on the Store, a brand new possibilities will show up in the **Manage** tab of your Resource. From there, you will be able to edit the Resource metadata (title, description, logo, screenshots, visibility and tags) as well as manage Versions (upload new versions, set changelogs, release, delete and modify version numbers).


#### Managing Information

In the `information` tab you can edit all the Resource metadata, such as title, description, short_description, logo and visibility:

![](/img/docs/vault/manage-info.webp)

<MediaLegend>Manage Info</MediaLegend>


#### Adding Screenshots

In the `screenshots` tab you can add or remove screenshots for your Resource, helping to showcase it better in the Store:

![](/img/docs/vault/manage-screenshots.webp)

<MediaLegend>Manage Screenshots</MediaLegend>


#### Adding Tags

In the `tags` tab you can add or remove tags for your Resource, which can be used in filtering:

![](/img/docs/vault/manage-tags.webp)

<MediaLegend>Manage Tags</MediaLegend>


### Managing Resources Versions

In the `versions` tab you can modify the existing version number (to upload an update), upload new versions, set changelogs, release or delete versions.

This is a powerful tab as it automatically handles zipping, uploading and releasing new versions of your Resource to every other user.

![](/img/docs/vault/manage-versions.webp)

<MediaLegend>Manage Versions Tab</MediaLegend>


#### Modifying the Version Number

To be able to upload a new version of your Resource, you must first modify the existing version number to a new one (following [Semantic Versioning](https://semver.org/)).

You can do so by changing the local `.toml` file, or by pressing the `modify local version number` button in the versions tab (that will modify the local `.toml` file for you):

![](/img/docs/vault/modify-version.webp)

<MediaLegend>Modify Version Number</MediaLegend>


#### Uploading a new Version

By having a local version different than the latest released one, you will be able to upload a new version of your Resource to the Store, and a button to upload it will appear in the versions tab.

![](/img/docs/vault/versions-tab-upload.webp)

<MediaLegend>Versions Tab with Upload Button</MediaLegend>

By pressing and confirming the upload, it will automatically compress your Resource folder and upload it to the Store. Once the upload is finished, an automated validator will run, and you will be able to set a changelog and release the new version.

![](/img/docs/vault/resource-upload-pending.webp)

<MediaLegend>Resource Upload Popup as Pending while it's not validated</MediaLegend>

![](/img/docs/vault/resource-upload.webp)

<MediaLegend>Resource Upload Popup approved after it's validated</MediaLegend>

After uploaded, you can already set a changelog on it, and release it when you want.

![](/img/docs/vault/add-changelog.webp)

<MediaLegend>Version Changelog Popup</MediaLegend>

By pressing the `release` button, the new version will be made available to every other user in the Vault!


## Teams

Each resource belongs to a **Team**. Before being able to publish a new resource, you must have a Team created (if you don't have one, a default personal Team will be created for you automatically).

By clicking on any Team logo, either from a Resource page or from your Profile popup, you will open the Team popup, where you can see the Team description, members and all the resources that belong to that Team.

![](/img/docs/vault/team.webp)

<MediaLegend>Team Popup</MediaLegend>


### Accessing your Teams

You can see all the Teams you belong to in your Profile page, just press your Profile Icon in the top left corner of the Main Menu:

![](/img/docs/vault/profile-icon.webp)

<MediaLegend>Your Profile Icon</MediaLegend>

![](/img/docs/vault/profile.webp)

<MediaLegend>Profile Popup</MediaLegend>


### Creating Teams

From the Profile popup, you can create a new Team by pressing the `+ create new team` button, you will be prompted to enter the Team name.

Later you can edit the Team description and logo from the Team manage tab.

![](/img/docs/vault/team-creation.webp)

<MediaLegend>Team Creation Popup</MediaLegend>

:::tip

You can also create a Team while creating a new Resource, by selecting the `+ create new team` option besides the Team selection dropdown.

:::


### Managing Teams

If you are a Team Owner or Admin, you can manage the Team details by opening the Team popup and pressing the `manage` tab.

Here you can edit the Team name, description and logo, as well as manage the Team members (promote/demote/remove):

![](/img/docs/vault/team-manage.webp)

<MediaLegend>Team Manage Popup</MediaLegend>
