---
title: Store
description: The nanos world Store is the platform on which you are invited to share your Game-Modes, Packages and Assets with the nanos world community!
image: /img/docs/store/store.webp
---


The nanos world [Store](https://nanos-world.com/store) is the platform on which you are invited to share your **Game-Modes**, **Packages** and **Assets** with the nanos world community!

![](/img/docs/store/store.webp)


:::warning

The Store is still under development. We are launching small usable pieces of it to build and improve it with you!

:::


## About the Store

In the Store, you can upload your Assets, Packages, release new versions, create Teams and much more! It is 100% integrated with [Vault](vault) and the [CLI](/core-concepts/server-manual/command-line-interface.mdx)!


## Server Authorization Token

In order to be able to use the CLI, you must provide an **Authorization Token** in the Server's `Config.toml` or passing with `--token` command line.

This token is used to authenticate your account and the rights to download/upload the Assets/Packages that belong to your teams.


### Generating a new Token

To generate a new token, go to your [Profile → PAT](https://nanos-world.com/account/pat) page and press `+ Create Token` button. You will be prompted to set a Name and Expiration Date for your Token.

![](/img/docs/store/account-pat.webp)

After created, copy the token and save it, you won't be able to restore it if you lose it.

Now just paste your token into your `Config.toml` `token` field or pass it as `--token` to your server and you are authenticated to run CLI commands!


<!--
TODO
## Teams

Teams are group of users and are the "holders" of the Resources (Assets/Packages) in the Store.

Currently they can only be created during the Upload of a new Resource.

![](/img/docs/store-06.webp)

Once created, they can be modified under your Profile/Teams tab or at [this link](https://store.nanos.world/teams/). You can add more members, check all uploaded resources and edit it's information.

![](/img/docs/store-07.webp)


## Releases & Versions

nanos world Store counts on a Release/Version system, which you can upload new versions of your Resource. You can upload versions as Private, Beta, Alpha and Stable and also add a Changelog to it.

![](/img/docs/store-08.webp)


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

You can download, upload and edit your resources through HTTPS requests, check it the Swagger documentation at https://api.nanos.world/store/docs. More tutorials coming soon™. -->


## Automate GitHub Releases

:::caution Community Resource

This workflow is maintained by the community. For more details, visit the open source [GitHub Repository](https://github.com/olivatooo/nanos-world-store-action).

:::

If your Package or Asset Pack is uploaded to GitHub, you can use the community created [nanos world Store Publisher Action](https://github.com/olivatooo/nanos-world-store-action) to automate the upload of new releases!

This action automatically handles version validation, package zipping, and uploading to the Store.


### Setting up the Github Action

#### 1. Add Your Token as a Secret

1. Create a token as described in the [Generating a new Token](#generating-a-new-token) section
2. Go to your repository **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Name: `NANOS_STORE_TOKEN`
5. Secret: Your token generated in step 1
6. Click **Add secret**


#### 2. Create Workflow File

Create a `.yml` file inside your repository as  `.github/workflows/publish.yml` with the content:

```yml title='.github/workflows/publish.yml' showLineNumbers
name: Publish to nanos world Store

on:
  release:
    types: [published]

jobs:
  build:
    runs-on: ubuntu-latest
    name: Publish package
    steps:
      - uses: actions/checkout@v4

      - uses: nanos-world/store-action@v1
        with:
          NANOS_PERSONAL_ACCESS_TOKEN: ${{ secrets.NANOS_STORE_TOKEN }}
          # highlight-next-line
          NANOS_PACKAGE_NAME: 'your-package-name'  # Replace with your package name
```


### Publishing a New Version

To publish a new version:

#### Update version in Package.toml:

```toml title="Package.toml"
[meta]
    version = "1.0.1"  # Increment from previous
```

#### Commit, tag and push:

```shell title="Terminal"
git add Package.toml
git commit -m "Bump version to 1.0.1"
git tag v1.0.1
git push origin main --tags
```

The action will automatically publish your package when you push the tag!

:::tip Manual Trigger

You can also manually trigger the workflow from the **Actions** tab in your repository using the `workflow_dispatch` event.

:::

:::tip Version Management

The action automatically reads the version from your `Package.toml` file and compares it with the store version. Your local version must be greater than the store version for the upload to succeed.

:::


### Multiple Packages in the Repo

If you have multiple packages in your repository, you can publish them all at once using the `EXTRA_PACKAGE_PATHS` input with a JSON array format:

```yml title=".github/workflows/publish.yml"
        with:
          ...
          # highlight-next-line
          EXTRA_PACKAGE_PATHS: '["path/to/package1", "path/to/package2"]'
```

For more advanced configuration options and troubleshooting, visit the [action repository](https://github.com/olivatooo/nanos-world-store-action).