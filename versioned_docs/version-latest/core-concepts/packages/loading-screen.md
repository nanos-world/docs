---
title: Loading Screen
description: Custom Loading Screen for your servers
sidebar_position: 1
tags: [scripting, ui, webui, packages]
keywords: [loading, screen, package, html, webui]
---


In nanos world it is possible to add a customized and dynamic Loading Screen to your Server using <Classes.WebUI />.

![](/img/docs/loading-screen.webp)


## Creating a Loading Screen

For that, you will need to create a new Package of type [loading-screen](#package-types), and add your HTML/CSS/JS files into the Package's root folder. Your primary HTML file should be called `index.html`. It will look like that:

```folder-structure
Packages/
└── my-loading-screen/
	├── Package.toml
	├── index.html
	├── style.css
	└── ...
```

### Getting Load/Download Progress

To be able to display dynamic information in the screen, you can listen to the Event `UpdateScreen` \(which will trigger every few ms\):

#### Event `UpdateScreen`

| Parameter | Description |
| :--- | :--- |
| **`message`** | Display the current state \(loading, validating, downloading...\) |
| **`message_secondary`** | Display the current asset/file being loaded or downloaded |
| **`progress_small`** | Current small progress |
| **`progress_small_total`** | Max small progress |
| **`progress`** | Current progress |
| **`progress_total`** | Max progress value |
| **`current_stage`** | The current stage of the load \(`loading`, `downloading`\) |

```javascript title="Packages/my-loading-screen/index.js" showLineNumbers
Events.Subscribe("UpdateScreen", function(message, message_secondary, progress_small, progress_small_total, progress, progress_total, current_stage) {
	// Update your HTML here
});
```

:::tip

You can use **`progress`** and **`progress_total`** for filling up the main loading bar, and **`progress_small`** for a small/sub loading bar.

:::

:::info

Always use `progress / progress_total` for getting the current `%` percentage, as progress\_total can represent the total amount of files being downloaded for example.

:::


### Player Information

Also, it is possible to fetch Player’s information by accessing a global variable called `LoadingScreen`:

```javascript
var LoadingScreen = {
	server: {
		ip,
		port,
		name,
		description,
	},
	player: {
		nanos_id,
		nanos_username,
		steam_id,
	}
}
```

:::tip

The `LoadingScreen` var is only available a few frames after the Loading Screen browser is created.

:::


### Stop Menu Music

It is possible to turn off the built-in menu music by calling an event from Loading Screen JS:

```javascript title="Packages/my-loading-screen/index.js" showLineNumbers
Events.Call("StopMenuMusic")
```


## Configuring your server to use the Loading Screen

:::warning Note

Currently Loading Screens only work in **Dedicated Servers**.<br/>
Make sure you configure your server's Config.toml as `dedicated_server = true`.

:::


After creating your loading-screen package, you will need to configure your server to load it in your [Config.toml](/core-concepts/server-manual/server-configuration.mdx#server-configuration-file). Just set the setting `loading_screen` to your Package's folder name.

```toml title="Server/Config.toml"
# loading-screen package to load (the loading screen will be displayed when players join your server)
loading_screen = "my-loading-screen"
```

Or start it with `--loading_screen "my-loading-screen"`.
