---
description: Creating servers in nanos world is very simple and straightforward, just a few steps and you have your server up and ready!
sidebar_position: 1
tags: [hosting]
---

# Server Installation

Creating servers in nanos world is very simple and straightforward, just a few steps and you have your server up and ready!

## System Requirements

* OS: Windows or Linux
* Processor: `1.0 GHz` (Faster core is better than multiple cores)
* Memory: `50 MB` (grows if having too many Players or spawned Entities)
* Storage: `10 MB` (+ Assets & Packages size)
* Network: Recommended at least `1 MB/s` (grows if having too many Players or spawned Entities)
* Network Forwarded Ports: `7777 TCP/UDP` and `7778 UDP` (you can change that in the Config)

:::info

The default installation of nanos world already contains the server executable, you can find it at `nanos-world/Server/NanosWorldServer.exe`. You can use this one to create your custom Packages as it seamlessly integrates with New Game menu screen!

:::

## Installing (Linux and Windows)

nanos world servers are downloaded through SteamCMD, a command line version of Steam. Please [download it](https://developer.valvesoftware.com/wiki/SteamCMD#Downloading_SteamCMD) before proceeding.

:::tip

If you are on Linux Ubuntu/Debian machine, you can easily install it like that:

```shell
sudo add-apt-repository multiverse
sudo dpkg --add-architecture i386
sudo apt update
sudo apt install lib32gcc1 steamcmd 
```

:::

### 1. Run SteamCMD

After downloaded, run `steamcmd` executable, it will update and you will enter it's console:

```bash
Steam>
```

### 2. Login

The next step is to login on SteamCMD, you can login anonymously with:

```bash
Steam> login anonymous
```

### 3. Specify an installation directory

You can optionally define an installation folder to install nanos world server:

```bash
Steam> force_install_dir c:\nanos-world-server\
```

### 4. Download nanos world Server

You can then install nanos world server using it's app id: `1686460`:

```bash
Steam> app_update 1686460
```

:::tip

You can run `app_update 1686460` to update your nanos world server to the latest version as well!

:::

And you are done! You can quit the console:

```bash
Steam> quit
```

## Running on Linux

On Linux, you must start the server using the Shell Script `./NanosWorldServer.sh`, which will configure proper paths and needed dynamic libraries which need to be loaded!

## Automated Installation

You can optionally use a one-liner command to install/update nanos world server:

```bash
steamcmd.exe +login anonymous +app_update 1686460 validate +quit
```

:::tip

Finished!, you can now proceed to the next steps to configure your nanos world server.

:::

## Installing bleeding-edge version

To install the `bleeding-edge` version of the server, you will need to specify it's branch when installing:

```bash
Steam> app_update 1686460 -beta bleeding-edge
```

or

```bash
steamcmd.exe +login anonymous +app_update "1686460 -beta bleeding-edge" validate +quit
```

## Linux Debian 10 Installation

:::tip

Follow this part if you have this kind of problem : `version GLIBCXX 3.4.26 not found`

:::

For this distribution, some extra steps are required. Since nanos world use `gcc 9`, we will need to upgrade one of our package to the testing repository.

First, update your `sources.list` file \(located in: `/etc/apt/sources.list`\), you will need to add the testing repo source, you can add theses lines below to your sources:

```text
deb http://ftp.fr.debian.org/debian/ testing main contrib non-free
deb-src http://ftp.fr.debian.org/debian/ testing main contrib non-free
```

After that, we will need to create a `preferences` file that will tell our system to not prefer installing testing package over stable unless specified. In `/etc/apt/preferences` \(create if it doesn’t exists\), add theses lines:

```text
Package: *
Pin: release a=stable
Pin-Priority: 700

Package: *
Pin: release a=testing
Pin-Priority: 650
```

Now, update your server to make sure that your system can find testing repositories with this command:

```bash
sudo apt update
```

We will install `libstdc++6` testing package to the server, it will allow the server to start correctly. You can type the command below to install it:

```bash
sudo apt-get --target-release testing install libstdc++6
```

:::tip

Finished!, you can now proceed to the next steps to configure your nanos world server.

:::

## Game Panel Server Installation

Nanos world is supported on 2 games panel : https://pterodactyl.io, https://cubecoders.com/AMP

* Installation files are open source at https://github.com/Falaxir/nanos-world_yolks-game-panels

:::caution

The following is work in progress. Check on github to see wich features are working or not.

:::

## Pterodactyl

The installation of this panel can be complex depending on the type of your infrastructure. This panel is only compatible on linux and the server must have a docker compatible system (OpenVZ is not compatible)

If you haven't installed the panel yet, we recommend using the unofficial installer available here : https://github.com/vilhelmprytz/pterodactyl-installer

### Installing the `egg`

Once the panel is installed, download the file `egg-nanos-world-server.json` located inside the `pterodactyl-egg` folder on github.

Then, go to your panel on the category `SERVICE MANAGEMENT` and click on `NESTS`

You will need to create a new Nest by pressing the `Create New` button

After the nest is created, go back to the `NESTS` and click on the button `Import EGG`, select the .json file you downloaded earlier and on the dropdown menu, select the nest you created earlier.

:::tip

Finished!, you can now create a nanos world server as normal inside the panel.

:::

## AMP

The installation of this panel is the easiest, you can go to https://cubecoders.com/AMPInstall and follow the instruction to install the panel.

It works even with OpenVZ virtualization and windows !

:::info

**Note:** This panel requires a licence that can be bought at https://cubecoders.com/AMP. Your main ADS instance (ADS01) can have a different name

:::

### Installing the template

Once the panel is installed, shutdown the ADS instance, you can do it on linux by typing this command :
```bash
ampinstmgr -q ADS01
```

After, go to your server files inside the folder
```text
/home/amp/.ampdata/instances/ADS01/Plugins/ADSModile/GenericTemplates
```

Then download the files on github inside the folder `amp-generic` and put them on your server inside the `GenericTemplates` folder

You can start the panel again by typing
```bash
ampinstmgr -s ADS01
```

:::tip

Finished!, you can now create a nanos world server as normal inside the panel.

:::