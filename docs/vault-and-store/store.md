---
title: Store
description: 'Vault & Store: share your content with others!'
image: /img/docs/store.jpg
---


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


## Store API

You can download, upload and edit your resources through HTTPS requests, check it the Swagger documentation at https://api.nanos.world/store/docs. More tutorials coming soon™.


## Automate GitHub Releases

If your Package or Asset Pack is uploaded to the GitHub, you can make use of our [Official Action](https://github.com/marketplace/actions/nanos-store-action) to automate the upload of new releases!

For that, first create a `.yml` file inside your repository at `.github/workflows/`. E.g.: `./github/workflows/nanos-world-store.yml` with the content:

```yml
name: nanos world Store Publish

on:
  release:
    types: [published]

jobs:
  build:
    runs-on: ubuntu-latest
    name: Publish package
    steps:
      - uses: actions/checkout@v2
      - name: Nanos Store Action
        uses: nanos-world/nanos-store-action@v2.0
        env:
          GITHUB_TOKEN: ${{ github.token }}
        with:
          # folder which contains the asset/package - if it's on root, leave it blank
          folder: ''
          # name of the asset/package
          name: 'name-of-the-package-or-asset'
          # API token - generate at https://store.nanos.world/settings/tokens/ and set under Settings -> Secrets -> Actions with name STORE_SECRET
          token: ${{ secrets.STORE_SECRET }}
```

:::tip

The `folder` must be filled if in your repository the Package/Assets.toml is located inside a subfolder.

The `name` should be set to your Package or Asset Pack folder name.

The `changelog` can be left with a default value for now as it's a required field.

The `token` should be generated at https://store.nanos.world/settings/tokens/ and set under your *GitHub Settings -> Secrets -> Actions* with name `STORE_SECRET`.

:::

Then, on every **release** on your GitHub, it will trigger and publish the new version as **draft**.

So after that, go to your Releases page of your resource: https://store.nanos.world/, edit the changelog and publish it.

