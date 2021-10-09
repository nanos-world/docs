---
description: Custom Loading Screen for your servers
sidebar_position: 1
tags: [scripting, ui]
---

# Loading Screen

In nanos world it is possible to add a customized and dynamic Loading Screen to your Server using [WebUI](./scripting-reference/classes/webui.mdx).

![](/img/docs/loading-screen.jpg)


## Creating a Loading Screen

For that, you will need to create a new Package of type [loading-screen](#package-types), and add your HTML/CSS/JS files into the Package's root folder. Your primary HTML file should be called `index.html`. It will look like that:

```text
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

:::tip

**TIP**: You can use **`progress`** and **`progress_total`** for filling up the main loading bar, and **`progress_small`** for a small/sub loading bar.

:::

:::info

Always use `progress / progress_total` for getting the current `%` percentage, as progress\_total can represent the total amount of files being downloaded for example.

:::

```javascript title="Packages/my-loading-screen/index.js"
Events.Subscribe("UpdateScreen", function(message, message_secondary, progress_small, progress_small_total, progress, progress_total, current_stage) {
    // Update your HTML here
});
```

Also, it is possible to fetch Player’s information by accessing a global variable called LoadingScreen:

```javascript
var LoadingScreen = {
  server_ip,
  server_name,
  server_port,
  player_nanos_id,
  player_nanos_username
};
```

## Configuring your server to use the Loading Screen

After creating your loading-screen package, you will need to configure your server to load it in your [Config.toml](./core-concepts/server-manual/server-configuration.md#server-configuration-file). Just set the setting `loading_screen` to your Package's folder name.

```toml
# loading-screen package to load (the loading screen will be displayed when players join your server)
loading_screen = "my-loading-screen"
```



