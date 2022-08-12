---
title: Linux Debian 10 & ARM
description: Special cases for Debian 10 & ARM
sidebar_position: 5
tags: [hosting]
---

Special cases for Debian 10 & ARM server installation.


:::caution

The installation on Debian 10 or ARM systems is not officially supported and currently maintained by the community! The following steps are WIP and may change at any time!

:::


## Linux Debian 10 Installation

:::tip

Follow this part if you have this kind of problem: `version GLIBCXX 3.4.26 not found`

:::

For this distribution, some extra steps are required. Since nanos world use `gcc 9`, we will need to upgrade one of our package to the testing repository.

First, update your `sources.list` file (located in: `/etc/apt/sources.list`), you will need to add the testing repo source, you can add theses lines below to your sources:

```text
deb http://ftp.fr.debian.org/debian/ testing main contrib non-free
deb-src http://ftp.fr.debian.org/debian/ testing main contrib non-free
```

After that, we will need to create a `preferences` file that will tell our system to not prefer installing testing package over stable unless specified. In `/etc/apt/preferences` (create if it doesn’t exists), add theses lines:

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

Finished! You can now proceed to the next steps to configure your nanos world server.

:::


## Linux ARM (raspberry & more)

:::warning

EXPERIMENTAL: Use at your own risk!

:::

Nanos world server is not officially supported on Arm, but if you really really really want your server to be running on arm platform such as a raspberry, rockpro64, ... then you can!

We will need 2 emulators:

* box64 for Nanos World server : https://github.com/ptitSeb/box64
* box86 for steam : https://github.com/ptitSeb/box86

You must build & install these emulators on your board.
box86 is optional if you don't want to use steamcmd to download & update the server

Follow CAREFULLY the instructions on the emulators repository, commands are different in function of the board.

Example :
* RK3399 is for Pine64, RockPro64, Orange Pi, ...

:::caution

These steps have been tested on Armbian Bullseye 64bits (aarch64) on a rockpro64. Some extra steps might be required for other boards & distros

:::


### Box86

To install it, simply follow the instructions here: https://github.com/ptitSeb/box86/blob/master/docs/COMPILE.md

If for some reason, your system cannot find Box86 and you are on a 64bits os, run theses commands:
```
sudo dpkg --add-architecture armhf
sudo apt update
sudo apt install libc6:armhf libncurses5:armhf libstdc++6:armhf
```

### Box64

Clone the repository, then we will need to replace the file `libstdc++.so.6` inside the folder `x64lib`.
You will need a newer version of this file with at least `GLIBCXX v3.4.26`.
You can grab it inside an updated Linux distro such as Ubuntu 20.04, Debian 11.
To check if the file has at least `GLIBCXX v3.4.26`, use this command :
```
strings libstdc++.so.6 | grep LIBCXX
```

If it shows `GLIBCXX v3.4.26`, you can put this file inside `x64lib` folder.

You can now follow the rest of the instructions here (starting from `mkdir` steps since you already cloned the repo): https://github.com/ptitSeb/box64/blob/main/docs/COMPILE.md


### Steam & Server

You have now installed the emulators, they should be able to auto-detect if a program needs a x86_64/x86 emulation or not.

Get steamcmd manually on a folder with this command :

```
curl -sqL "https://steamcdn-a.akamaihd.net/client/installer/steamcmd_linux.tar.gz" | tar zxvf -
```

You can now follow the basic instructions of nanos world Linux installation starting from steamcmd (run steamcmd with this command: `./steamcmd.sh`).


:::tip

Finished! You can now proceed to the next steps to configure your nanos world server.

:::