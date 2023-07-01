---
title: Basic HUD (React)
description: >-
    How to add a basic HUD using React to display the character's Health and Ammo.
tags: [tutorial-example, scripting, ui, react]
---

How to add a basic HUD using React to display the character's Health and Ammo.

![](/img/docs/tutorials/react-00.webp)

## Creating the React App

:::info

In this Tutorial we'll be using [React](https://react.dev/), please download and install [NodeJs](https://nodejs.org/en/download) to be able to use it.

:::

:::info

This tutorial will not teach you how to use React. A basic knowledge of the framework is required to understand the tutorial. You can find some documentation and tutorials [here](https://react.dev/learn)

:::

In the folder of your choice, create a new React Application that will be used to create our UI. To do so, execute the following command in your terminal:

```bash title="Terminal" 
npx create-react-app basic-hud
```

Once finished, you should see the following message appears in your terminal: 

```bash title="Terminal" 
Success! Created basic-hud at F:\Nanos\Documentation\basic-hud
Inside that directory, you can run several commands:

npm start
Starts the development server.

npm run build
Bundles the app into static files for production.

npm test
Starts the test runner.

npm run eject
Removes this tool and copies build dependencies, configuration files
and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

cd basic-hud
npm start

Happy hacking!
```

Your App folder should look like this : 

![](/img/docs/tutorials/react-01.webp)

## Basic Configuration of your App

Before starting to add some code, there's a few things to configure to be sure that your App will be compatible with NanosWorld:

- ### Changing the homepage path of your app 

Once compiled your App may not work properly if you don't set the homepage path properly. To avoid any path related issue, edit your `package.json` file and add the following line:

```json title="./package.json"
"homepage": "./"
```

- ### Adding the NanosWorld Events handling 

By default, your react App will not be able to handle the native NanosWorld Events. To fix that add the following code in a new file named `Events.js` in the `src` directory of your App: 

```js title="./src/Events.js"
const Events = {};

Events.Call = function (sEventName, ...args) {
    if (typeof (window.Events) == "undefined") return;
    window.Events.Call(sEventName, ...args);
}

Events.Subscribe = function (sEventName, callback) {
    if (typeof (window.Events) == "undefined") return;
    window.Events.Subscribe(sEventName, callback);
}

export default Events;
```

:::info

Don't forget to import this file in your components that needs to Call/Subscribe to NanosWorld Events

:::

- ### Clean unused files from the App

A bunch of unused files is present into the App by default. For the sake of cleanliness, we'll remove them.

- `./src/App.test.js`
- `./src/logo.svg`
- `./src/reportWebVitals.js`
- `./src/setupTests.js`
- `./public/favicon.ico`
- `./public/logo192.png`
- `./public/logo512.png`
- `./public/manifest.json`
- `./public/robots.txt`

:::info

Don't forget to remove the references of the deleted files and functions in your `./src/index.js` and `./src/App.js` files.

:::

Once cleaned your App should be like this : 

![](/img/docs/tutorials/react-02.webp)

## Creating the UI

Now that our App is ready and compatible with NanosWorld, we are ready to add our code into it. Since this UI is very simple, we will use the default `App.js` components available in the `src` folder

```js title="./basic-hud/src/App.js"
import './App.css';

function App() {
  return (
    <div >
      {/* Health container (black background) */}
        <div id="health_container">
            <img src="./img/health.png" alt="health-cross"/>
              <span id="health_current">100</span> {/* Health value */}
        </div>

        {/* Weapon Ammo container (black background) */}
        <div id="weapon_ammo_container">
            <span id="weapon_ammo_clip">30</span> {/* Ammo Clip value */}
            <span id="weapon_ammo_bag">/ 1000</span> {/* Ammo Bag value */}
        </div>
    </div>
  );
}

export default App;
```

:::info

If you noticed we are using an image `health.png`, you can download it here [https://i.imgur.com/0BmQJVZ.png](https://i.imgur.com/0BmQJVZ.png) and place it inside the `./public/img` folder of your App. 

:::

:::tip

When you're referencing stuff stored in the public folder you don't need to add the `public` in the path since we changed the homepage earlier in this tutorial. Once compiled, all the stuff stored in the public folder will be put in the root folder of your app.

:::

Now let's add the style to it, for that, edit your `App.css` file and add the following `CSS` code:

```css title="./src/App.css"
body {
    font-family: Tahoma, sans-serif;
    font-size: 14px;
    margin: 0px;
    padding: 0px;
    margin-bottom: 20px;
}

#weapon_ammo_container {
    position: absolute;
    right: 0px;
    bottom: 0px;
    width: 200px;
    height: 50px;
    background-image: linear-gradient(to right, #00000000, #00000080);
    text-align: right;
    line-height: 47px;
}

#weapon_ammo_bag {
    color: #ededed;
    font-weight: bold;
    font-size: 16px;
    margin-right: 30px;
    position: relative;
    top: -4px;
}

#weapon_ammo_clip {
    color: white;
    font-weight: bold;
    font-size: 32px;
}

#health_container {
    position: absolute;
    bottom: 0px;
    width: 200px;
    height: 50px;
    background-image: linear-gradient(to left, #00000000, #00000080);
}

#health_container img {
    height: 23px;
    margin: 13px;
}

#health_current {
    color: white;
    font-size: 32px;
    font-weight: bold;
    position: absolute;
    margin-top: 4px;
}
```

To make sure that your App works, you can simply start the application and see the end result in your web browser? To do so use the following command : 


```bash title="Terminal"
npm start
```

:::info 

You can see the running App at the following address : `http://localhost:3000`

:::

Once started you should see something like this in your web browser :

![](/img/docs/tutorials/react-03.webp)

## Adding Events handling into your App 

Now that we have all the base of our App set, we can start to implement the Events handling. For this, edit your `App.js`:

```js title="./src/App.js"
import './App.css';
import Events from './Events.js';
import { useState } from 'react';


function App() {
  
  // Use React State to store the health and ammo values
  // The values are updated by the events from the server
  const [health, setHealth] = useState(100);
  const [weaponAmmo, setWeaponAmmo] = useState(30);
  const [weaponBag, setWeaponBag] = useState(1000);
  const [displayAmmo, setDisplayAmmo] = useState(false);

  // Subscribe to the events ralated to the Ammo and visibility of the Ammo container
  Events.Subscribe("UpdateWeaponAmmo",(enable, clip, bag) => {
    setDisplayAmmo(enable);
    setWeaponAmmo(clip);
    setWeaponBag(bag);
  });

  // Subscribe to the events ralated to the Health
  Events.Subscribe("UpdateHealth", (health) => {
    setHealth(health);
  });

  return (
    <div >
      {/* Health container (black background) */}
        <div id="health_container">
            <img src="./img/health.png" alt="health-cross"/>
              <span id="health_current">{health}</span> {/* Health value */}
        </div>

        {/* Weapon Ammo container (black background) */}
        {displayAmmo && 
          <div id="weapon_ammo_container">
            <span id="weapon_ammo_clip">{weaponAmmo}</span> {/* Ammo Clip value */}
            <span id="weapon_ammo_bag">/ {weaponBag}</span> {/* Ammo Bag value */}
        </div>
        }
    </div>
  );
}

export default App;
```

Now that coding part for the UI is done, you can `build` it to add it to your NanosWorld Package!

## Building your React Application

Once finished with the development of the web part, you'll need to build the App. In the root folder of your app, execute the following command: 

```bash title="Terminal
npm run build
```

When completed, you will find all the files of your application in the `./build` folder.

## Creating the UI Package

Inside your Package’s Client folder, create a new folder (optional) called UI/ to separate the UI files from the Scripting (lua) files:

![](/img/docs/tutorials/react-04.webp)

After that copy all the files present in the `./build` folder of your react app (except the `asset-manifets.json`) into the `/UI` folder of your NanosWorld Package.

Finally, in your Package’s `Index.lua`, let’s add all the required code to spawn and update the UI : 

```lua title="Client/Index.lua"
-- Spawns a WebUI with the HTML file you just created
main_hud = WebUI("Main HUD", "file://UI/index.html", 1)

-- When LocalPlayer spawns, sets an event on it to trigger when we possesses a new character, to store the local controlled character locally. This event is only called once, see Package:Subscribe("Load") to load it when reloading a package
Client.Subscribe("SpawnLocalPlayer", function(local_player)
    local_player:Subscribe("Possess", function(player, character)
        UpdateLocalCharacter(character)
    end)
end)

-- When package loads, verify if LocalPlayer already exists (eg. when reloading the package), then try to get and store it's controlled character
Package.Subscribe("Load", function()
    local local_player = Client.GetLocalPlayer()
    if (local_player ~= nil) then
        UpdateLocalCharacter(local_player:GetControlledCharacter())
    end
end)

-- Function to set all needed events on local character (to update the UI when it takes damage or dies)
function UpdateLocalCharacter(character)
    -- Verifies if character is not nil (eg. when GetControllerCharacter() doesn't return a character)
    if (character == nil) then
        return
    end

    -- Updates the UI with the current character's health
    UpdateHealth(character:GetHealth())

    -- Sets on character an event to update the health's UI after it takes damage
    character:Subscribe("TakeDamage", function(charac, damage, type, bone, from_direction, instigator, causer)
        UpdateHealth(math.max(charac:GetHealth() - damage, 0))
    end)

    -- Sets on character an event to update the health's UI after it dies
    character:Subscribe("Death", function(charac)
        UpdateHealth(0)
    end)

    -- Try to get if the character is holding any weapon
    local current_picked_item = character:GetPicked()

    -- If so, update the UI
    if (current_picked_item and current_picked_item:GetClass():GetName() == "Weapon") then
        UpdateAmmo(true, current_picked_item:GetAmmoClip(), current_picked_item:GetAmmoBag())
    end

    -- Sets on character an event to update his grabbing weapon (to show ammo on UI)
    character:Subscribe("PickUp", function(charac, object)
        if (object.Super:GetClass():GetName() == "Weapon") then
            UpdateAmmo(true, object:GetAmmoClip(), object:GetAmmoBag())
        end
    end)

    -- Sets on character an event to remove the ammo ui when he drops it's weapon
    character:Subscribe("Drop", function(charac, object)
        UpdateAmmo(false)
    end)

    -- Sets on character an event to update the UI when he fires
    character:Subscribe("Fire", function(charac, weapon)
        UpdateAmmo(true, weapon:GetAmmoClip(), weapon:GetAmmoBag())
    end)

    -- Sets on character an event to update the UI when he reloads the weapon
    character:Subscribe("Reload", function(charac, weapon, ammo_to_reload)
        UpdateAmmo(true, weapon:GetAmmoClip(), weapon:GetAmmoBag())
    end)
end

-- Function to update the Ammo's UI
function UpdateAmmo(enable_ui, ammo, ammo_bag)
    main_hud:CallEvent("UpdateWeaponAmmo",enable_ui, ammo, ammo_bag)
end

-- Function to update the Health's UI
function UpdateHealth(health)
    main_hud:CallEvent("UpdateHealth",health)
end
```

Et voilà! Your app should now be ready to be used into NanosWorld. To test it simply run your Server and contemplate your hard work

![](/img/docs/tutorials/react-05.webp)

That's It ! Your React Web Ui is now integrated into NanosWorld and ready to use. Feel free to use this exemple in your own project :\)