---
description: 'Vault & Store: share your content with others!'
---

# Store

nanos world [**Store**](https://store.nanos.world) is the platform on which you are invited to share your **Game-Modes**, **Packages** and **Assets** with the nanos world community!

![](/img/docs/store.jpg)


## About the Store

In the Store, you can upload your Assets, Packages, release new versions, create Teams and much more! It is 100% integrated with [Vault](vault) and the [CLI](/core-concepts/server-manual/nanos-world-cli.mdx)!

:::info

The Store and the Vault are still under development. We are launching small usable pieces of it to build and improve it with you!

:::


## Server Authorization Token

In order to be able to use the CLI, now you must provide an **Authorization Token** in the `Config.toml` or passing with `--token` command line.

This token is used to authenticate your user and the rights to download the Assets/Packages.


### Generating a new Token

To generate a new token, go to the Store, under your **Profile Name**, then on **Settings**, or click on [this link](https://store.nanos.world/settings/tokens/).

![](/img/docs/store-02.jpg)

In that page, you can manage your active tokens and create new ones.

![](/img/docs/store-03.jpg)

When creating a new one, you can specify a label (only you will see it) and an expiration time. The maximum time is 2 years.

![](/img/docs/store-04.jpg)

Once you create it, copy the token as save it, you won't be able to restore it if you lose it.

![](/img/docs/store-05.jpg)

And you are done! Now just copy and paste your token into your `Config.toml` and you are authenticated to run CLI commands!


## Teams

Teams are group of users and are the "holders" of the Resources (Assets/Packages) in the Store.

Currently they can only be created during the Upload of a new Resource.

![](/img/docs/store-06.jpg)

Once created, they can be modified under your Profile/Teams tab or at [this link](https://store.nanos.world/teams/). You can add more members, check all uploaded resources and edit it's information.

![](/img/docs/store-07.jpg)


## Releases & Versions

nanos world Store counts on a Release/Version system, which you can upload new versions of your Resource. You can upload versions as Private, Beta, Alpha and Stable and also add a Changelog to it.

![](/img/docs/store-08.jpg)


## Uploading new Resources

Uploading a [Package](https://store.nanos.world/packages/create/) or an [Asset Pack](https://store.nanos.world/assets/create/) through the UI is very straight. In the upload page, you can define the **Package Name** (must be unique, following the correct pattern - this is the folder name), the **Team**, **Title**, and customize the **Descriptions**!

:::tip

Soon™ we will provide an API which allows you to integrate and automate releases into the store!

:::

You must upload a **.zip** file with all content your or Package or Asset Pack, as it follows:

### Guidelines

1. Remember to delete the hidden `.cache` files if you have them in your Package and Assets folders!
2. Set the correct **version** in the `Package.toml` or `Assets.toml`!
3. Your `.zip` must contain the file `Package.toml` or `Assets.toml` in the root of it.


### Categories & Tags

During the creation of your Resource, you can set the Categories and Tags to customize it.

The **Tags** are used mainly for categorization and (*soon*) searches. And the **Categories** are used differently depending if it's a Package or an Asset Pack:

* **Package**: Categories are used as the type of the Package (game-mode, script, loading-screen).
* **Asset Pack**: Categories are used just like a more specific Tag.