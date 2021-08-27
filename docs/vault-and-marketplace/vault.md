---
description: 'Vault & Marketplace: share your content with others!'
---

# Vault

nanos world **Marketplace** is the platform on which you are invited to share your **Game-Modes**, **Packages** and **Assets** with the nanos world community!

![](/img/docs/vault-01.jpg)

:::info
The Marketplace and the Vault are still under development. While we are still developing a final version of them, we decided to start launching small usable pieces of it to build and improve it with you!
:::

## Vault

Within the game, we have a menu tab called **Vault**, where you will be able to **download**, **update** and **manage** the Packages/Assets you have in your account, as well as soon browse the whole marketplace!

![](/img/docs/vault-02.jpg)

:::info
In this first stage of development, we are releasing only the **Vault** with hard-coded listed Packages/Assets. If you have game-modes or Assets in a playable state please share with us, we would love to add your content to this initial hardcoded list!
:::

## How to get my content ready for the Marketplace

:::caution
The following notes may change as we improve or leave testing stages of the Vault/Marketplace!
:::

We are advising everyone to **.zip** and upload their **Packages** and **Assets** to [https://github.com/](https://github.com/), as it follows:

### Prepare your Package!

1. Remember to delete the hidden `.cache` files if you have them in your Package and Assets folders!
2. Set up the correct version of your content!
3. Add an image which will appear in the Vault screen, please use the format 2:1 \(e.g. 300px x 150px\)!
4. Your Package must contain the file `Package.toml` in the root of your .zip

Your .zip would end up like:

```text title="MyPackage.zip"
|   Server/
|   |   Index.lua
|   |   *.lua
|   |   ...
|   Client/
|   Shared/
|   Package.toml
```

### Prepare your Asset Pack!

Your Asset Pack must contain the `Assets.toml` in the root of your .zip, your .zip would end up like:

```text title="MyAssetPack.zip"
|   MyMap/
|   |   Map.umap
|   |   *.uasset
|   |   ...
|   MyMeshes/
|   Assets.toml
```

:::tip
You can see an example of Package + Assets Pack of the Halloween Package: [https://github.com/gtnardy/nanos-world-halloween/](https://github.com/gtnardy/nanos-world-halloween/)
:::

### Pushing it to GitHub

The next step is to create a release on GitHub:

#### Go to your GitHub repository page, and go to **Tags** page:

![](/img/docs/vault-03.jpg)

#### Then you will create a new **Release**:

![](/img/docs/vault-04.jpg)

#### Now you can fill the blanks and put the version \(we recommend using semver v1.0.0\) and drag-n-drop your .zips you created:

![](/img/docs/vault-05.jpg)

#### You will end up with something like that, in your release page with 2 .zips attached to the release:

![](/img/docs/vault-06.jpg)

:::tip
And you are done! Now, everything you need to do is to send your .zips URLs \(e.g. [https://github.com/nanos-world/nanos-world-weapons/releases/download/v1.0.0/MyAssetPack.zip](https://github.com/nanos-world/nanos-world-weapons/releases/download/v1.0.0/MyAssetPack.zip)\) to SyedMuhammad to have it in the testing phase of the Vault!

Feel free to modify and edit your .zips and reupload them with newer versions! Just warn SyedMuhammad to update the .zip links in the Vault list!
:::

> _"I have recommended your services to my employers, and they have authorized me to offer you a job. They agree with me that you have limitless potential."_

