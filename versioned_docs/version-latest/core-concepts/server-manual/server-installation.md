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
