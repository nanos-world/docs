"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[8033],{99008:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(85893),o=n(11151);const i={title:"Basic HUD (WGUI)",description:"How to add a basic HUD to display the character's health and ammo using WGUI.",tags:["tutorial-example","script","ui","wgui"]},r=void 0,l={id:"getting-started/tutorials-and-examples/basic-hud-wgui",title:"Basic HUD (WGUI)",description:"How to add a basic HUD to display the character's health and ammo using WGUI.",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/getting-started/tutorials-and-examples/basic-hud-wgui.md",sourceDirName:"getting-started/tutorials-and-examples",slug:"/getting-started/tutorials-and-examples/basic-hud-wgui",permalink:"/pt-BR/docs/next/getting-started/tutorials-and-examples/basic-hud-wgui",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/pt-BR",tags:[{inline:!0,label:"tutorial-example",permalink:"/pt-BR/docs/next/tags/tutorial-example"},{inline:!0,label:"script",permalink:"/pt-BR/docs/next/tags/script"},{inline:!0,label:"ui",permalink:"/pt-BR/docs/next/tags/ui"},{inline:!0,label:"wgui",permalink:"/pt-BR/docs/next/tags/wgui"}],version:"current",frontMatter:{title:"Basic HUD (WGUI)",description:"How to add a basic HUD to display the character's health and ammo using WGUI.",tags:["tutorial-example","script","ui","wgui"]},sidebar:"main",previous:{title:"Basic HUD (React)",permalink:"/pt-BR/docs/next/getting-started/tutorials-and-examples/basic-hud-react"},next:{title:"Blueprint Communication",permalink:"/pt-BR/docs/next/getting-started/tutorials-and-examples/blueprint-communication"}},s={},c=[{value:"Installating WGUI",id:"installating-wgui",level:2},{value:"WGUI package installation",id:"wgui-package-installation",level:3},{value:"WGUI asset pack installation",id:"wgui-asset-pack-installation",level:3},{value:"Creating the UI",id:"creating-the-ui",level:2},{value:"Adding Events and Callbacks to handle the HUD",id:"adding-events-and-callbacks-to-handle-the-hud",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"How to add a basic HUD to display the character's health and ammo using WGUI."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(79845).Z+"",width:"1919",height:"1079"})}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:["The technical documentation for ",(0,a.jsx)(t.strong,{children:"WGUI"})," can be found ",(0,a.jsx)(t.a,{href:"https://negativename.gitbook.io/wgui-2/",children:"here"}),"."]})}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:["This tutorial assumes that you have a basic understanding of Lua scripting and ",(0,a.jsxs)(t.a,{href:"/pt-BR/docs/next/getting-started/essential-concepts",children:[(0,a.jsx)(t.strong,{children:"nanos world"})," concepts"]}),"."]})}),"\n",(0,a.jsx)(t.h2,{id:"installating-wgui",children:"Installating WGUI"}),"\n",(0,a.jsx)(t.h3,{id:"wgui-package-installation",children:"WGUI package installation"}),"\n",(0,a.jsxs)(t.p,{children:["Download ",(0,a.jsx)(t.code,{children:"WGUI"})," package from the ",(0,a.jsx)(t.a,{href:"https://github.com/NegativeNameNGT/wgui",children:"GitHub repository"})," and extract it to your server's ",(0,a.jsx)(t.code,{children:"Packages"})," folder."]}),"\n",(0,a.jsx)(t.p,{children:"Once the package is installed, it needs to be loaded by the server.\nTo do so, 2 possible methods can be used:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Add ",(0,a.jsx)(t.strong,{children:'"wgui"'})," to the ",(0,a.jsx)(t.code,{children:"packages"})," array of ",(0,a.jsx)(t.strong,{children:"Config.toml"})," file."]}),"\n",(0,a.jsxs)(t.li,{children:["Add ",(0,a.jsx)(t.strong,{children:'"wgui"'})," to the ",(0,a.jsx)(t.code,{children:"packages_requirement"})," array of an existing package ",(0,a.jsx)(t.strong,{children:"Package.toml"})," file."]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"wgui-asset-pack-installation",children:"WGUI asset pack installation"}),"\n",(0,a.jsxs)(t.p,{children:["WGUI also requires an Asset Pack to be installed which can be downloaded from the ",(0,a.jsx)(t.a,{href:"https://github.com/NegativeNameNGT/wgui-assets",children:"Asset Pack GitHub repository"}),". Extract the ",(0,a.jsx)(t.code,{children:"wgui-assets"})," folder to your server's ",(0,a.jsx)(t.code,{children:"Assets"})," folder. WGUI package will automatically load the Asset Pack."]}),"\n",(0,a.jsx)(t.h2,{id:"creating-the-ui",children:"Creating the UI"}),"\n",(0,a.jsxs)(t.p,{children:["Once ",(0,a.jsx)(t.strong,{children:"WGUI"})," is installed and loaded, we are ready to build our UI."]}),"\n",(0,a.jsxs)(t.p,{children:["For this basic HUD, we will use ",(0,a.jsx)(t.a,{href:"/pt-BR/docs/next/core-concepts/scripting/inheriting-classes",children:"inheritance"})," to create custom classes for each element."]}),"\n",(0,a.jsxs)(t.p,{children:["We will create 4 custom classes:\n- ",(0,a.jsx)(t.code,{children:"Indicator"})," - A base class for the Health and Weapon indicators that represents a container for the content.\n- ",(0,a.jsx)(t.code,{children:"HealthIndicator"})," - A class inherited from ",(0,a.jsx)(t.code,{children:"Indicator"})," to display the character's health.\n- ",(0,a.jsx)(t.code,{children:"WeaponIndicator"})," - A class inherited from ",(0,a.jsx)(t.code,{children:"Indicator"})," to display the character's weapon ammo.\n- ",(0,a.jsx)(t.code,{children:"HUD"})," - A class to display the Health and Weapon indicators."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-lua",metastring:'title="Client/Indicator.lua"',children:'---@class Indicator : SizeBox\nIndicator = SizeBox.Inherit("Indicator")\n\n-- Static Brush to be used by all Indicators to draw the border.\nlocal BorderBrush = Brush()\nBorderBrush.SetDrawMode(DrawMode.RoundedBox)\nBorderBrush.SetColor(Color(0.041, 0.041, 0.041, 0.8))\nBorderBrush.SetOutlineSettings(OutlineSettings(Quat(4)))\n\nfunction Indicator:Constructor()\n    -- Calls the SizeBox constructor with a minimum desired size of 125x50.\n    SizeBox.Constructor(self, Vector2D(125, 50))\n\n    -- Creates a border inside the size box.\n    local ContainerBorder = WGUI.Create(Border, self)\n    ContainerBorder:SetBrush(BorderBrush)\n\n    -- Creates a flex box inside the border. This flex box will be used by inherited classes to add their content.\n    local ContentFlexBox = WGUI.Create(FlexBox, ContainerBorder, Orientation.Horizontal)\n    ContentFlexBox:SetHAlign(HAlign.Center)\n    ContentFlexBox:SetVAlign(VAlign.Center)\n\n    -- Redirection of the panel functions to the ContentFlexBox.\n    WGUI.RedirectPanelFunctions(self, ContentFlexBox)\n    return self\nend\n'})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-lua",metastring:'title="Client/HealthIndicator.lua"',children:'---@class HealthIndicator : Indicator\nHealthIndicator = Indicator.Inherit("HealthIndicator")\n\nfunction HealthIndicator:Constructor()\n    Indicator.Constructor(self)\n\n    -- Creates an image to display the health icon\n    local HealthIcon = WGUI.Create(Image, self)\n    HealthIcon:SetBrushFromSrc("package://MyPackage/Client/health-icon.png")\n    HealthIcon:SetHAlign(HAlign.Center)\n    HealthIcon:SetVAlign(VAlign.Center)\n\n    -- Creates a text block to display the health value\n    local HealthText = WGUI.Create(TextBlock, self, "100")\n    HealthText:SetFont("Oswald", "Bold", 26)\n    HealthText:SetPadding(Margin(10, 0, 0, 0))\n    HealthText:SetHAlign(HAlign.Center)\n    HealthText:SetVAlign(VAlign.Top)\n\n    -- Stores the HealthText to be used later\n    self:SetValue("Text", HealthText)\n\n    return self\nend\n\nfunction HealthIndicator:SetHealth(Health)\n    local HealthText = self:GetValue("Text")\n    HealthText:SetText(tostring(Health))\nend\n'})}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:["If you noticed we are using an image ",(0,a.jsx)(t.code,{children:"health-icon.png"}),", you can download it from here ",(0,a.jsx)(t.a,{href:"https://i.imgur.com/0BmQJVZ.png",children:"https://i.imgur.com/0BmQJVZ.png"})," and place it inside your ",(0,a.jsx)(t.code,{children:"Client/"})," package folder."]})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-lua",metastring:'title="Client/WeaponIndicator.lua"',children:'---@class WeaponIndicator : Indicator\nWeaponIndicator = Indicator.Inherit("WeaponIndicator")\n\nfunction WeaponIndicator:Constructor()\n    Indicator.Constructor(self)\n\n    -- Creates a text block to display the ammo value\n    local AmmoText = WGUI.Create(TextBlock, self, "6")\n    AmmoText:SetFont("Oswald", "Bold", 28)\n\n    -- Creates a text block to display the ammo bag value\n    local AmmoBagText = WGUI.Create(TextBlock, self, " / 960")\n    AmmoBagText:SetFont("Oswald", "Bold", 18)\n    AmmoBagText:SetPadding(Margin(0, 0, 0, 5))\n    AmmoBagText:SetVAlign(VAlign.Bottom)\n\n    -- Stores the AmmoText and AmmoBagText to be used later\n    self:SetValue("AmmoText", AmmoText)\n    self:SetValue("AmmoBagText", AmmoBagText)\n\n    -- Hides the widget by default\n    self:SetVisibility(WGUIVisibility.Hidden)\n    return self\nend\n\nfunction WeaponIndicator:SetAmmo(Ammo, AmmoBag)\n    local AmmoText = self:GetValue("AmmoText")\n    local AmmoBagText = self:GetValue("AmmoBagText")\n\n    AmmoText:SetText(tostring(Ammo))\n    AmmoBagText:SetText(" / " .. tostring(AmmoBag))\nend\n'})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-lua",metastring:'title="Client/HUD.lua"',children:'Package.Require("Indicator.lua")\nPackage.Require("HealthIndicator.lua")\nPackage.Require("WeaponIndicator.lua")\n\n---@class HUD : FlexBox\nHUD = FlexBox.Inherit("HUD")\n\nfunction HUD:Constructor()\n    FlexBox.Constructor(self, Orientation.Horizontal)\n\n    -- Adds the HUD to the default WGUI canvas panel widget.\n    WGUI.GetLayout():AddChild(self)\n    self:SetAnchor(Anchor.StretchBottom)\n    self:SizeToContent()\n    self:SetPadding(10)\n\n    -- Creates the HealthIndicator and WeaponIndicator widgets\n    local HealthContainer = WGUI.Create(HealthIndicator, self)\n    local WeaponContainer = WGUI.Create(WeaponIndicator, self)\n\n    -- Sets the weapon container to be on the right side of the HUD\n    WeaponContainer:SetHAlign(HAlign.Right)\n    WeaponContainer:SetSize(1)\n\n    -- Stores the HealthContainer and WeaponContainer to be used later\n    self:SetValue("HealthContainer", HealthContainer)\n    self:SetValue("WeaponContainer", WeaponContainer)\n\n    return self\nend\n\n-- Sets the health value\nfunction HUD:SetHealth(Health)\n    self:GetValue("HealthContainer"):SetHealth(Health)\nend\n\n-- Sets the ammo and ammo bag values\nfunction HUD:SetAmmo(EnableUI, Ammo, AmmoBag)\n    local WeaponContainer = self:GetValue("WeaponContainer")\n\n    -- Hides the widget if EnableUI is false, otherwise shows it\n    WeaponContainer:SetVisibility(EnableUI and WGUIVisibility.Visible or WGUIVisibility.Hidden)\n\n    -- Updates the ammo values\n    self:GetValue("WeaponContainer"):SetAmmo(Ammo, AmmoBag)\nend\n'})}),"\n",(0,a.jsx)(t.h2,{id:"adding-events-and-callbacks-to-handle-the-hud",children:"Adding Events and Callbacks to handle the HUD"}),"\n",(0,a.jsx)(t.p,{children:"Now that we have our UI, we need to add some events and callbacks to handle the HUD."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-lua",metastring:'title="Client/Index.lua"',children:'Package.Require("Client/HUD.lua")\n\n-- Spawns the HUD\nlocal HUD = WGUI.Create(HUD)\n\n-- When LocalPlayer spawns, sets an event on it to trigger when we possesses a new character, to store the local controlled character locally. This event is only called once, see Package:Subscribe("Load") to load it when reloading a package\nClient.Subscribe("SpawnLocalPlayer", function(local_player)\n    local_player:Subscribe("Possess", function(player, character)\n        UpdateLocalCharacter(character)\n    end)\nend)\n\n-- When package loads, verify if LocalPlayer already exists (eg. when reloading the package), then try to get and store it\'s controlled character\nPackage.Subscribe("Load", function()\n    local local_player = Client.GetLocalPlayer()\n    if (local_player ~= nil) then\n        UpdateLocalCharacter(local_player:GetControlledCharacter())\n    end\nend)\n\n-- Function to set all needed events on local character (to update the UI when it takes damage or dies)\nfunction UpdateLocalCharacter(character)\n    -- Verifies if character is not nil (eg. when GetControllerCharacter() doesn\'t return a character)\n    if (not character or not character:IsValid()) then\n        return\n    end\n\n    -- Updates the UI with the current character\'s health\n    HUD:SetHealth(character:GetHealth())\n\n    -- Sets on character an event to update the health\'s UI after it takes damage\n    character:Subscribe("TakeDamage", function(charac, damage)\n        HUD:SetHealth(math.max(charac:GetHealth() - damage, 0))\n    end)\n\n    -- Sets on character an event to update the health\'s UI after it dies\n    character:Subscribe("Death", function()\n        HUD:SetHealth(0)\n    end)\n\n    -- Try to get if the character is holding any weapon\n    local current_picked_item = character:GetPicked()\n\n    -- If so, update the UI\n    if (current_picked_item and current_picked_item:GetClass():GetName() == "Weapon") then\n        HUD:SetAmmo(true, current_picked_item:GetAmmoClip(), current_picked_item:GetAmmoBag())\n    end\n\n    -- Sets on character an event to update his grabbing weapon (to show ammo on UI)\n    character:Subscribe("PickUp", function(charac, object)\n        if (object.Super:GetClass():GetName() == "Weapon") then\n            HUD:SetAmmo(true, object:GetAmmoClip(), object:GetAmmoBag())\n        end\n    end)\n\n    -- Sets on character an event to remove the ammo ui when he drops it\'s weapon\n    character:Subscribe("Drop", function(charac, object)\n        HUD:SetAmmo(false, 0, 0)\n    end)\n\n    -- Sets on character an event to update the UI when he fires\n    character:Subscribe("Fire", function(charac, weapon)\n        HUD:SetAmmo(true, weapon:GetAmmoClip(), weapon:GetAmmoBag())\n    end)\n\n    -- Sets on character an event to update the UI when he reloads the weapon\n    character:Subscribe("Reload", function(charac, weapon, ammo_to_reload)\n        HUD:SetAmmo(true, weapon:GetAmmoClip(), weapon:GetAmmoBag())\n    end)\n\n    -- Sets on character an event to reset the health\'s UI when he respawns\n    character:Subscribe("Respawn", function(charac)\n        HUD:SetHealth(charac:GetHealth())\n    end)\nend\n'})}),"\n",(0,a.jsxs)(t.p,{children:["That's it! Your HUD is now ready to be used on your ",(0,a.jsx)(t.strong,{children:"nanos world server"}),".\nYou can test it by possessing a character and picking up a weapon."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(79845).Z+"",width:"1919",height:"1079"})})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},79845:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/wgui-00-b02160cf9a7817eea45f48ee02cd40a7.webp"},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>r});var a=n(67294);const o={},i=a.createContext(o);function r(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);