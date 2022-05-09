---
title: Importing Mixamo Animations
description: How to import Mixamo animations into nanos world
tags: [assets, animations]
keywords: [mixamo, animation, mannequin, unreal]
---


Mixamo is a library of thousands of animations captured from professional motion actors.

![](/img/docs/mixamo.jpg)

For this guide we are going to use a Tool for exporting Mixamo animations directly into Unreal Engine, 100% compatible with nanos world Characters.

## Step 1: Download Mixamo Converter

Go to [Mixamo Converter](http://terribilisstudio.fr/?section=MC) page and download the Tool. Unzip it (password is `terribilis`) and you will have a folder like this:

![](/img/docs/tutorials/mixamo-02.jpg)

## Step 2: Create an Account in Mixamo website

Please go to [Mixamo Website](https://mixamo.com) and create an account. Adobe will require you to have an account to be able to download it's animations.

![](/img/docs/tutorials/mixamo-01.jpg)

## Step 3: Upload the Mannequin to Mixamo

Upload the file `SK_Mannequin_For_Mixamo.fbx` from Mixamo Converter root folder into Mixamo website:

![](/img/docs/tutorials/mixamo-03.jpg)

![](/img/docs/tutorials/mixamo-04.jpg)

Now you will be able to see Unreal Mannequin in there!

![](/img/docs/tutorials/mixamo-05.jpg)

## Step 4: Choose your animation!

Now you can choose any animation you want from Mixamo website, once you select it you will be able to see the Mannequin playing that. Also you can tweak some settings in the right side.

![](/img/docs/tutorials/mixamo-06.jpg)

## Step 5: Download it!

Once you are satisfied with the animation, download it.

:::caution

You must select **Without Skin** and **uniform** in the Download Settings.

:::

![](/img/docs/tutorials/mixamo-07.jpg)

After downloading it, copy the file into `mixamo_converter/Initial` folder. In our case, we copied `Hip Hop Dancing.fbx`:

![](/img/docs/tutorials/mixamo-08.jpg)

## Step 6: Run Mixamo Converter Tool

Now, double click `Mixamo_Converter.exe` tool you downloaded in Step 1 to open it:

![](/img/docs/tutorials/mixamo-09.jpg)

Once you press **Mixamo -> Unreal**, it will convert all animations from `/Initial` folder into `/Complete` folder.

:::tip

You can optionally select the option to delete the `/Initial` animations once is converted.

:::

![](/img/docs/tutorials/mixamo-10.jpg)

![](/img/docs/tutorials/mixamo-11.jpg)

## Step 7: Import the Converted Animation into Unreal Engine

:::info

Please before proceeding, make sure you read and downloaded our [Assets Development Kit](/assets-modding/creating-assets/adk-assets-development-kit.md).

:::

Now you just need to import it into your UE4 Project! We are going to import it into our ADK to create a new Asset Pack with the animations we imported!

### Create a new Asset Pack folder

We are calling it `AwesomeMixamoAnimations`:

![](/img/docs/tutorials/mixamo-12.jpg)

### Drag the Animation file into Unreal

Open the Folder you created and drag the animation exported by Mixamo Converter into that.

A FBX Import Options screen will show up.

:::caution

Please set all options as the following image. To expand the advanced options, click in the arrow in **Animation** category!

:::

![](/img/docs/tutorials/mixamo-13.jpg)

And voilá! You imported it!

![](/img/docs/tutorials/mixamo-14.jpg)

If you double click it you will be able to see it working!

![](/img/docs/tutorials/mixamo-15.jpg)

## Step 8: Exporting the animation from Unreal

:::tip

For more information on how to use **ADK** or Export Content in a faster way, please check [Assets Development Kit](/assets-modding/creating-assets/adk-assets-development-kit.md) and [Importing Assets](/assets-modding/creating-assets/importing-assets.md)!

:::

Go to File -> Package Export -> Windows 64 Bits and select a folder in your computer. It will start compiling your assets.

![](/img/docs/tutorials/mixamo-16.jpg)

![](/img/docs/tutorials/mixamo-17.jpg)

## Step 9: Creating your nanos world Asset Pack

Wait the Packaging to finish!

![](/img/docs/tutorials/mixamo-18.jpg)

Now that we have the compiled assets, we already can use it in nanos world! For that we will need to create an Asset Pack!

![](/img/docs/tutorials/mixamo-19.jpg)

:::tip

Please take a look into [Importing Assets](/assets-modding/creating-assets/importing-assets.md#exporting--cooking-your-assets) for how to create an Asset Pack.

We are not going to cover all aspects of creating Asset Packs here for avoiding redundant information in the docs!

:::

## Step 10: Using your animations!

After exported and created your Asset Pack, you will be able to use them in code like that!

```lua
local my_character = Character()
my_character:PlayAnimation("awesome-mixamo-animations::HipHopDancing4UE4")
```

