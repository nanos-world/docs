---
description: How to setup your nanos world server using a Game Panel
sidebar_position: 4
tags: [hosting]
---

# Game Panels

How to setup your nanos world server using a Game Panel!

:::caution

The use of Game Panels is not officially supported and currently maintained by the community! The following steps are WIP and may change at any time! Please check the following GitHub repositories for updated information!

:::

Currently nanos world is supported on 2 games panel: https://pterodactyl.io and https://cubecoders.com/AMP.

:::tip

Installation files are open source at Falaxir GitHub: https://github.com/Falaxir/nanos-world_yolks-game-panels.

:::

## Pterodactyl Installation

The installation of this panel can be complex depending on the type of your infrastructure. This panel is only compatible on linux and the server must have a docker compatible system (OpenVZ is not compatible).

If you haven't installed the panel yet, we recommend using the unofficial installer available here: https://github.com/vilhelmprytz/pterodactyl-installer.

### Installing the `egg`

Once the panel is installed, download the file `egg-nanos-world-server.json` located inside the `pterodactyl-egg` folder on github.

Then, go to your panel on the category `SERVICE MANAGEMENT` and click on `NESTS`.

You will need to create a new Nest by pressing the `Create New` button.

After the nest is created, go back to the `NESTS` and click on the button `Import EGG`, select the .json file you downloaded earlier and on the dropdown menu, select the nest you created earlier.

:::tip

Finished! Uou can now create a nanos world server as usual inside the panel!

:::


## AMP Installation

The installation of this panel is the easiest, you can go to https://cubecoders.com/AMPInstall and follow the instruction to install the panel.

It works even with OpenVZ virtualization and windows!

:::info Note

This panel requires a licence that can be bought at https://cubecoders.com/AMP. Your main ADS instance (ADS01) can have a different name.

:::

### Installing the template

Once the panel is installed, shutdown the ADS instance, you can do it on linux by typing this command:
```bash
ampinstmgr -q ADS01
```

After, go to your server files inside the folder
```text
/home/amp/.ampdata/instances/ADS01/Plugins/ADSModile/GenericTemplates
```

Then download the files on github inside the folder `amp-generic` and put them on your server inside the `GenericTemplates` folder.

You can start the panel again by typing:
```bash
ampinstmgr -s ADS01
```

:::tip

Finished! Uou can now create a nanos world server as usual inside the panel!

:::