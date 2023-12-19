---
title: Setting Up Unreal Engine
description: Learn how to Create and Import custom Assets into nanos world
sidebar_position: 0
tags: [assets]
keywords: [assets, ADK, import, unreal]
---

How to set up Unreal Engine to import assets into nanos world


Currently all our workflow for exporting content is through Unreal Engine as the Assets need to be Cooked and Packaged in the correct way before being accessible by the game.

:::tip

Little by little we are able to allow loading some assets without the need of cooking them through Unreal, such as the already supported **Textures** and **Sounds**.

:::


The first step for creating your own Assets, is downloading and installing Unreal Engine.


## On Windows

On Windows, the download of Unreal Engine must be done from inside [Epic Games Launcher](https://www.unrealengine.com/en-US/download). Please download and install it before proceeding to the Unreal installation:

1. Open Epic Games Launcher.
2. Access **Unreal Engine** tab.
3. Open **Library** tab.
4. Press **`+`** and select the correct **Unreal Engine** version (currently nanos world is on **`5.3.X`**).
5. Press `Install` and a Popup will appear.
6. Select an installation folder and press `Install`.


### Prerequisites

Since newer versions of Unreal, it's required to install some SDKs to be able to cook assets on it. You can install them directly by downloading from Microsoft websites, or using Visual Studio Installer if you already have it installed.

#### .NET Core 3.1

Install [.NET Core 3.1](https://dotnet.microsoft.com/en-us/download/dotnet/3.1) directly from Microsoft website.


#### Windows 10 SDK

- (recommended) If you have [Visual Studio](https://visualstudio.microsoft.com/downloads/) installed, you can use Visual Studio Installer to install Windows 10 SDK through there. Just open the **Individual components** tab and install `Windows 10 SDK (10.0.20348.0)`:

![Windows 10 SDK Installation](/img/docs/windows-10-sdk-vs.webp)

- Otherwise, you can install Windows 10 SDK directly from [Microsoft website](https://developer.microsoft.com/en-us/windows/downloads/windows-sdk/) and select `Windows SDK for Desktop C++ amd64 Apps`:

![Windows 10 SDK Installation](/img/docs/windows-10-sdk.webp)


## On Linux

If you are on Linux, Epic Games is releasing standalone binaries which can be downloaded directly from their site. Download the latest Unreal Engine version [here](https://www.unrealengine.com/en-US/linux).


## Next Steps

After downloading Unreal Engine, launch it once to finish the engine installation.

And you are ready to proceed to the next step to download and use the Assets Development Kit!
