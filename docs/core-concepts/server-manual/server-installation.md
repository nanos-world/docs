---
description: Creating servers in nanos world is very simple and straightforward, just a few steps and you have your server up and ready!
sidebar_position: 1
---

# Server Installation

Creating servers in nanos world is very simple and straightforward, just a few steps and you have your server up and ready!

## System Requirements

* OS: Windows or Linux
* Processor: `1.0 GHz` \(Faster core is better than multiple cores\)
* Memory: `50 MB` \(grows if having too many Players or spawned Entities\)
* Storage: `10 MB` \(+ Assets & Packages size\)
* Network: Recommended at least `1 MB/s` \(grows if having too many Players or spawned Entities\)
* Network Forwarded Ports: `7777 TCP` and `UDP` \(you can change that on the config\)

## Installation

:::tip
All nanos world server versions are hosted in our [GitHub](https://github.com/nanos-world/nanos-world-server/releases).
:::

### Windows Installation

Downloading it using `PowerShell`:

```bash
Invoke-WebRequest -Uri "https://github.com/nanos-world/nanos-world-server/releases/latest/download/NanosWorldServer.exe" -OutFile NanosWorldServer.exe
```

### Linux Installation

Downloading it using `wget`:

```bash
wget "https://github.com/nanos-world/nanos-world-server/releases/latest/download/NanosWorldServer"
chmod +x NanosWorldServer
```

### Debian 10 Installation

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
apt update
```

We will install `libstdc++6` testing package to the server, it will allow the server to start correctly. You can type the command below to install it:

```bash
sudo apt-get --target-release testing install libstdc++6
```

:::tip
Finished!, you can now proceed to the next steps to configure your nanos world server.
:::

