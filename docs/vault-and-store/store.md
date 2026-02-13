---
title: Store
description: 'Vault & Store: share your content with others!'
image: /img/docs/store.webp
---


nanos world [**Store**](https://store.nanos.world) is the platform on which you are invited to share your **Game-Modes**, **Packages** and **Assets** with the nanos world community!

![](/img/docs/store.webp)


## About the Store

In the Store, you can upload your Assets, Packages, release new versions, create Teams and much more! It is 100% integrated with [Vault](vault) and the [CLI](/core-concepts/server-manual/command-line-interface.mdx)!

:::info

The Store and the Vault are still under development. We are launching small usable pieces of it to build and improve it with you!

:::


## Server Authorization Token

In order to be able to use the CLI, now you must provide an **Authorization Token** in the `Config.toml` or passing with `--token` command line.

This token is used to authenticate your user and the rights to download the Assets/Packages.


### Generating a new Token

To generate a new token, go to the Store, under your **Profile Name**, then on **Settings**, or click on [this link](https://store.nanos.world/settings/tokens/).

![](/img/docs/store-02.webp)

In that page, you can manage your active tokens and create new ones.

![](/img/docs/store-03.webp)

When creating a new one, you can specify a label (only you will see it) and an expiration time. The maximum time is 2 years.

![](/img/docs/store-04.webp)

Once you create it, copy the token as save it, you won't be able to restore it if you lose it.

![](/img/docs/store-05.webp)

And you are done! Now just copy and paste your token into your `Config.toml` and you are authenticated to run CLI commands!


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

You can download, upload and edit your resources through HTTPS requests, check it the Swagger documentation at https://api.nanos.world/store/docs. More tutorials coming soon™.


## Automate GitHub Releases

If your Package or Asset Pack is uploaded to GitHub, you can use the [Nanos World Store Publisher Action](https://github.com/olivatooo/nanos-world-store-action) to automate the upload of new releases!

This action automatically handles version validation, package zipping, and uploading to the Nanos World Store.

### Setup in 3 Steps

#### 1. Add Your Token as a Secret

1. Go to your repository **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Name: `NANOS_STORE_TOKEN`
4. Value: Your Nanos World Store Personal Access Token (generate at https://store.nanos.world/settings/tokens/)
5. Click **Add secret**

#### 2. Create Workflow File

Create a `.yml` file inside your repository at `.github/workflows/`. E.g.: `.github/workflows/publish.yml` with the content:

```yml showLineNumbers
name: Publish to Nanos World Store

on:
  push:
    tags:
      - 'v*'  # Publishes when you push a version tag
  workflow_dispatch:  # Allows manual trigger

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - uses: nanos-world/store-action@v1
        with:
          NANOS_PERSONAL_ACCESS_TOKEN: ${{ secrets.NANOS_STORE_TOKEN }}
          NANOS_PACKAGE_NAME: 'your-package-name'  # Replace with your package name
```

#### 3. Prepare Your Package

Ensure your `Package.toml` has a version in the `[meta]` section:

```toml
[meta]
    title = "My Awesome Package"
    author = "Your Name"
    version = "1.0.0"
```

### Publishing a New Version

To publish a new version:

1. **Update version in Package.toml:**
   ```toml
   [meta]
       version = "1.0.1"  # Increment from previous
   ```

2. **Commit, tag and push:**
   ```bash
   git add Package.toml
   git commit -m "Bump version to 1.0.1"
   git tag v1.0.1
   git push origin main --tags
   ```

The action will automatically publish your package when you push the tag!

:::tip

**Version Management:** The action automatically reads the version from your `Package.toml` file and compares it with the store version. Your local version must be greater than the store version for the upload to succeed.

**Multiple Packages:** If you have multiple packages in your repository, you can publish them all at once using the `EXTRA_PACKAGE_PATHS` input with a JSON array format:

```yml
EXTRA_PACKAGE_PATHS: '["path/to/package1", "path/to/package2"]'
```

**Manual Trigger:** You can also manually trigger the workflow from the **Actions** tab in your repository using the `workflow_dispatch` event.

:::

For more advanced configuration options and troubleshooting, visit the [action repository](https://github.com/olivatooo/nanos-world-store-action).


## Automatic Version Incrementing with Git Hooks

To improve your development workflow, you can set up a Git pre-commit hook that automatically increments the patch version in your `Package.toml` file every time you commit changes. This ensures you never forget to update the version number before publishing.

### Setting Up the Pre-Commit Hook

1. **Create the hook file:**
   
   In your repository root, create or edit the file `.git/hooks/pre-commit`:

   ```bash
   touch .git/hooks/pre-commit
   chmod +x .git/hooks/pre-commit
   ```

2. **Add the following script to the file:**

```bash showLineNumbers
#!/bin/bash

# Pre-commit hook to increment patch version in Package.toml

PACKAGE_TOML="Package.toml"

# Check if Package.toml exists
if [ ! -f "$PACKAGE_TOML" ]; then
    echo "Warning: $PACKAGE_TOML not found. Skipping version increment."
    exit 0
fi

# Extract current version from Package.toml
# Looks for line like: version = "0.0.1"
CURRENT_VERSION=$(grep -E '^\s*version\s*=' "$PACKAGE_TOML" | sed -E 's/.*version\s*=\s*"([^"]+)".*/\1/')

if [ -z "$CURRENT_VERSION" ]; then
    echo "Warning: Could not find version in $PACKAGE_TOML. Skipping version increment."
    exit 0
fi

# Parse version components (assumes semver format: major.minor.patch)
IFS='.' read -ra VERSION_PARTS <<< "$CURRENT_VERSION"
MAJOR=${VERSION_PARTS[0]:-0}
MINOR=${VERSION_PARTS[1]:-0}
PATCH=${VERSION_PARTS[2]:-0}

# Increment patch version only
NEW_PATCH=$((PATCH + 1))
NEW_VERSION="$MAJOR.$MINOR.$NEW_PATCH"

# Update Package.toml with new version
# This handles the version line with proper whitespace preservation
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS sed requires different syntax
    sed -i '' "s/\(^\s*version\s*=\s*\"\)$CURRENT_VERSION\(\".*\)/\1$NEW_VERSION\2/" "$PACKAGE_TOML"
else
    # Linux sed
    sed -i "s/\(^\s*version\s*=\s*\"\)$CURRENT_VERSION\(\".*\)/\1$NEW_VERSION\2/" "$PACKAGE_TOML"
fi

# Stage the updated Package.toml
git add "$PACKAGE_TOML"

echo "Version incremented: $CURRENT_VERSION -> $NEW_VERSION in $PACKAGE_TOML"

exit 0
```

3. **Make the hook executable:**

   ```bash
   chmod +x .git/hooks/pre-commit
   ```

### How It Works

Every time you run `git commit`, the hook will:

1. ✅ Find your `Package.toml` file
2. ✅ Read the current version (e.g., `1.2.3`)
3. ✅ Increment the patch number (e.g., `1.2.3` → `1.2.4`)
4. ✅ Update the `Package.toml` file
5. ✅ Stage the updated file automatically
6. ✅ Display the version change

:::tip

**Version Format:** This hook increments only the **patch** version (the third number in semantic versioning). If you want to increment the minor or major version, you'll need to manually edit `Package.toml` before committing.

**Manual Control:** If you need to set a specific version (e.g., for a major release), simply edit `Package.toml` manually before committing. The hook will increment from whatever version is currently in the file.

**Skipping the Hook:** If you need to commit without incrementing the version, use:
```bash
git commit --no-verify -m "Your commit message"
```

:::

This combination provides a fully automated release pipeline from development to publication!

