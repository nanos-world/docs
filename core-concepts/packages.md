---
description: All you need to know about Packages
---

# Packages

![](../.gitbook/assets/image%20%2814%29.png)

**Packages** are pieces/components of your server which will execute Lua scripts to interact to the game. 

Each Package is isolated and have it's own Lua Virtual Machine, this means that each has its own global scope and cannot access others data directly.

## Folder Structure

All Packages must go under `Server/Packages/` folder, each Package is a folder under that.

They can contain the following folders: `Server`, `Client` and `Shared`. Only **Client** and **Shared** folders will be sent and loaded by the clients when they connect.

Each **Package** must have a file called `Index.lua` inside **Server**, **Client** or **Shared** folders, this is the only file which will be triggered when the Package is loaded, this way this file is responsible for including other files and starting up your functionalities.

{% code title="Server Folder" %}
```text
NanosWorldServer.exe
Packages/
|   My_Package_01/
|   |   Server/
|   |   |   Index.lua
|   |   |   *.lua
|   |   Client/
|   |   |   *.lua
|   |   Shared/
|   |   |   *.lua
|   |   Package.toml
|   My_Package_02/
|   |   Package.toml
|   |   ...
Assets/
Config.toml
```
{% endcode %}

## Package Configuration

Packages have a configuration file in the root of the package folder, called `Package.toml`, in this file we can setup all pertinent settings related to the Package:

{% code title="Package.toml" %}
```text
# package configurations
[package]
	# package name
	name =					"testing"
	# contributors
	author =				""
	# version
	version =				"0.0.1"
	# image URL
	image =					""
	# package type: 'script' (normal package), 'game-mode' (unique package - can only load one at a time) or 'loading-screen' (special package loaded in loading screen)
	type =					"script"
	# whether to force the custom map Script to do not load
	force_no_map_script =	false
	# auto destroy all entities spawned by this package when it unloads
	auto_cleanup =			true
	# packages requirements
	packages_requirements = [
		
	]
	# asset packs requirements
	assets_requirements = [
		
	]

```
{% endcode %}

### Settings Detailed

| Setting | Description |
| :--- | :--- |
| **`name`** | Friendly name of the Package |
| **`author`** | Author\(s\) of the Package |
| **`version`** | Version of the Package - please refer to [SemVer](https://semver.org/) |
| **`image`** | Image URL to be displayed in the Vault |
| **`type`** | Type of the Package - please refer to [Package Types](packages.md#package-types) |
| **`force_no_map_script`** | Enabling this will force the map-script \(if any\) to do NOT load |
| **`auto_cleanup`** | Enabling this will destroy all entities spawned by this Package when it unloads |
| **`packages_requirements`** | List of Packages which need to be loaded first |
| **`assets_requirements`** | List of Asset Packs to be loaded when this package loads |

### Package Types

In nanos world we have 3 kind of packages: **script**, **game-mode** and **loading-screen**, each one with with a specific functionality and an unique purpose.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Type</th>
      <th style="text-align:left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b><code>script</code></b>
      </td>
      <td style="text-align:left">Normal Package, will execute it&apos;s scripts and start a new <b>Lua VM </b>when
        started.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b><code>game-mode</code></b>
      </td>
      <td style="text-align:left">
        <p>Like <b><code>script</code> </b>but you can only load one <b><code>game-mode</code></b> package
          at once. Useful</p>
        <p>when you are creating full games which cannot risk being loaded with other</p>
        <p>full games packages.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b><code>loading-screen</code></b>
      </td>
      <td style="text-align:left">
        <p>Special Package which will be loaded during player&apos;s loading screen,
          those</p>
        <p>packages must have an <code>Index.html</code> in the root.</p>
      </td>
    </tr>
  </tbody>
</table>

{% hint style="success" %}
If you are creating a **Library**, a **Tool** or some **Utility** package, make it **`script`**!

If you are creating an unique and complete **Game** with several funcionalities which you don't want to be messed if someone load two full games, make it **`game-mode`**!
{% endhint %}



