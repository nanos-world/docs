"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[7350],{91043:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var t=n(85893),i=n(11151);const a={title:"Compatibility Versions",description:"How to update your packages to the new Compatibility Versions",tags:["scripting","migration"]},r=void 0,c={id:"core-concepts/packages/compatibility-versions",title:"Compatibility Versions",description:"How to update your packages to the new Compatibility Versions",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-latest/core-concepts/packages/compatibility-versions.md",sourceDirName:"core-concepts/packages",slug:"/core-concepts/packages/compatibility-versions",permalink:"/fr/docs/core-concepts/packages/compatibility-versions",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/fr",tags:[{inline:!0,label:"scripting",permalink:"/fr/docs/tags/scripting"},{inline:!0,label:"migration",permalink:"/fr/docs/tags/migration"}],version:"latest",frontMatter:{title:"Compatibility Versions",description:"How to update your packages to the new Compatibility Versions",tags:["scripting","migration"]},sidebar:"main",previous:{title:"\xc9cran de chargement",permalink:"/fr/docs/core-concepts/packages/loading-screen"},next:{title:"Guide des classes",permalink:"/fr/docs/core-concepts/scripting/classes-guide"}},o={},l=[{value:"All Updates",id:"all-updates",level:2},{value:"Version <code>1.65</code>",id:"version-165",level:3},{value:"Events.Unsubscribe()",id:"eventsunsubscribe",level:4},{value:"Version <code>1.55</code>",id:"version-155",level:3},{value:"Assets.GetX()",id:"assetsgetx",level:4},{value:"Version <code>1.54</code>",id:"version-154",level:3},{value:"Level.CallLevelBlueprintEvent()",id:"levelcalllevelblueprintevent",level:4},{value:"Client.GetPackages()",id:"clientgetpackages",level:4},{value:"Version <code>1.49</code>",id:"version-149",level:3},{value:"Package.GetName()",id:"packagegetname",level:4},{value:"Server.GetMap()",id:"servergetmap",level:4},{value:"Server.GetPackages()",id:"servergetpackages",level:4},{value:"Version <code>1.33</code>",id:"version-133",level:3},{value:"Input.GetScriptingKeyBindings() and Input.GetGameKeyBindings()",id:"inputgetscriptingkeybindings-and-inputgetgamekeybindings",level:4},{value:"Version <code>1.29</code>",id:"version-129",level:3},{value:"HTTP.Select()",id:"httpselect",level:4},{value:"Database()",id:"database",level:4},{value:"Version <code>1.22</code>",id:"version-122",level:3},{value:"Events.Subscribe()",id:"eventssubscribe",level:4}];function d(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"How to update your packages to the new Compatibility Versions"}),"\n",(0,t.jsx)(s.p,{children:"The Compatibility Version is meant to assure your packages will not break in future breaking changes updates."}),"\n",(0,t.jsx)(s.p,{children:"It works by forcing that package to run code in a compatibility mode, meaning that breaking changes will keep working as the way it was before. Exemple :"}),"\n",(0,t.jsx)(s.p,{children:"Let's say you have this code running right now:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-lua",children:'-- Make an asynchronous HTTP request\nHTTP.Request("https://api.nanos.world/", "store/v1/packages/halloween", "GET", "", "application/json", false, {}, function(status, data)\n    -- Do something with my data\nend)\n'})}),"\n",(0,t.jsxs)(s.p,{children:["And then, in the hypothetical update ",(0,t.jsx)(s.code,{children:"9.99"})," the API changes and make ",(0,t.jsx)(s.code,{children:"HTTP.RequestSync"})," to become ",(0,t.jsx)(s.code,{children:"HTTP.Request"})," and ",(0,t.jsx)(s.code,{children:"HTTP.Request"})," to become ",(0,t.jsx)(s.code,{children:"HTTP.RequestAsync"}),". I.e. you need to update your code to use ",(0,t.jsx)(s.code,{children:"HTTP.RequestAsync"})," now, this is a breaking change as the new functions uses the same name as before."]}),"\n",(0,t.jsxs)(s.p,{children:["With compatibility version, your scripts can keep working as it was before this update, as your ",(0,t.jsx)(s.code,{children:"compatibility_version"})," in your Package.toml will still be set to the older version (i.e. ",(0,t.jsx)(s.code,{children:"9.98"}),", lower than the last version ",(0,t.jsx)(s.code,{children:"9.99"})," which changed it)."]}),"\n",(0,t.jsx)(s.admonition,{type:"tip",children:(0,t.jsx)(s.p,{children:"The Compatibility Mode is a feature that aims to keep old and unmaintained packages/game-modes to keep working for a longer time. But from time to time all the deprecated compatibility modes will be removed from the codebase. So always keep your packages up-to-date!"})}),"\n",(0,t.jsx)(s.h2,{id:"all-updates",children:"All Updates"}),"\n",(0,t.jsxs)(s.p,{children:["To use the following features, you must update your Package's ",(0,t.jsx)(s.code,{children:"compatibility_version"})," setting in the Package.toml to at least that version (exact that version or bigger)."]}),"\n",(0,t.jsxs)(s.h3,{id:"version-165",children:["Version ",(0,t.jsx)(s.code,{children:"1.65"})]}),"\n",(0,t.jsx)(s.h4,{id:"eventsunsubscribe",children:(0,t.jsx)(s.a,{href:"/fr/docs/scripting-reference/static-classes/events#static-function-unsubscribe",children:"Events.Unsubscribe()"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Events.Unsubscribe"})," now only unsubscribes to local events (ones subscribed with ",(0,t.jsx)(s.strong,{children:"Events.Subscribe"}),"). If you want to unsubscribe to remote events (ones subscribed as ",(0,t.jsx)(s.strong,{children:"Events.SubscribeRemote"}),"), please use ",(0,t.jsx)(s.a,{href:"/fr/docs/scripting-reference/static-classes/events#static-function-unsubscriberemote",children:"Events.UnsubscribeRemote()"})]}),"\n",(0,t.jsxs)(s.p,{children:["In compatibility mode (i.e. setting it to ",(0,t.jsx)(s.code,{children:"1.64"})," or below) ",(0,t.jsx)(s.code,{children:"Events.Unsubscribe"})," still unsubscribes for both Local and Remote events."]}),"\n",(0,t.jsxs)(s.h3,{id:"version-155",children:["Version ",(0,t.jsx)(s.code,{children:"1.55"})]}),"\n",(0,t.jsx)(s.h4,{id:"assetsgetx",children:(0,t.jsx)(s.a,{href:"/fr/docs/scripting-reference/static-classes/assets",children:"Assets.GetX()"})}),"\n",(0,t.jsxs)(s.p,{children:["Before, any ",(0,t.jsx)(s.code,{children:"Assets.GetX()"})," method returned an array of strings. Now it returns an array of tables, containing at least the ",(0,t.jsx)(s.code,{children:"key"})," field on it. See more about this change in the ",(0,t.jsx)(s.a,{href:"/fr/docs/core-concepts/assets#asset-meta-data",children:"Assets Meta Data page"}),"."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-lua",metastring:'title="Before"',children:'for _, asset in pairs(Assets.GetStaticMeshes("nanos-world")) do\n    local key = asset\nend\n'})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-lua",metastring:'title="After"',children:'for _, asset in pairs(Assets.GetStaticMeshes("nanos-world")) do\n    local key = asset.key\n    local my_meta_data = asset.my_meta_data\n    local my_random_value = asset.my_random_value\n    ...\nend\n'})}),"\n",(0,t.jsxs)(s.h3,{id:"version-154",children:["Version ",(0,t.jsx)(s.code,{children:"1.54"})]}),"\n",(0,t.jsx)(s.h4,{id:"levelcalllevelblueprintevent",children:(0,t.jsx)(s.a,{href:"/fr/docs/scripting-reference/static-classes/level#static-function-calllevelblueprintevent",children:"Level.CallLevelBlueprintEvent()"})}),"\n",(0,t.jsxs)(s.p,{children:["Before, ",(0,t.jsx)(s.code,{children:"Level.CallLevelBlueprintEvent()"})," expected a string with the function name and parameters concatenated together separated by spaces. Now it uses the new approach of receiving a variadic amount of parameters and also returns the function return value."]}),"\n",(0,t.jsx)(s.h4,{id:"clientgetpackages",children:(0,t.jsx)(s.a,{href:"/fr/docs/scripting-reference/static-classes/client#static-function-getpackages",children:"Client.GetPackages()"})}),"\n",(0,t.jsxs)(s.p,{children:["Before, ",(0,t.jsx)(s.code,{children:"Client.GetPackages()"})," returned all packages that the server was running on client side. Now it behaves exactly like ",(0,t.jsx)(s.a,{href:"/fr/docs/scripting-reference/static-classes/server#static-function-getpackages",children:"Server.GetPackages()"}),", having a filter as parameter and providing more information on return."]}),"\n",(0,t.jsxs)(s.h3,{id:"version-149",children:["Version ",(0,t.jsx)(s.code,{children:"1.49"})]}),"\n",(0,t.jsx)(s.h4,{id:"packagegetname",children:(0,t.jsx)(s.a,{href:"/fr/docs/scripting-reference/static-classes/package#static-function-getname",children:"Package.GetName()"})}),"\n",(0,t.jsxs)(s.p,{children:["Before, ",(0,t.jsx)(s.code,{children:"Package.GetName()"})," was returning the title defined in Package.toml. Now it is standardized and it returns the Path of the Package (the real Name of it). Also ",(0,t.jsx)(s.code,{children:"Package.GetPath()"})," was deprecated in favor of ",(0,t.jsx)(s.code,{children:"Package.GetName()"}),"."]}),"\n",(0,t.jsx)(s.h4,{id:"servergetmap",children:(0,t.jsx)(s.a,{href:"/fr/docs/scripting-reference/static-classes/server#static-function-getmap",children:"Server.GetMap()"})}),"\n",(0,t.jsxs)(s.p,{children:["Before, ",(0,t.jsx)(s.code,{children:"Server.GetMap()"})," was returning the map asset defined in Config.toml. Now as we can load Map Packages, it will start returning the Map Package name instead. In compatibility mode it will still return the Map Asset. If you want to still keep retrieving the Map asset, please use the new method ",(0,t.jsx)(s.a,{href:"/fr/docs/scripting-reference/static-classes/server#static-function-getmapasset",children:"Server.GetMapAsset()"})," instead."]}),"\n",(0,t.jsx)(s.h4,{id:"servergetpackages",children:(0,t.jsx)(s.a,{href:"/fr/docs/scripting-reference/static-classes/server#static-function-getpackages",children:"Server.GetPackages()"})}),"\n",(0,t.jsxs)(s.p,{children:["Before, ",(0,t.jsx)(s.code,{children:"Package.GetPackages(only_loaded)"})," returned a list of strings containing all the package names. Now it has a new parameter (",(0,t.jsx)(s.code,{children:"package_type_filter"}),") and returns a list of table with the Packages information:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-lua",children:'local packages = Package.GetPackages(only_loaded, package_type_filter)\n--[[\n    {\n        {\n            ["title"] = "Awesome Package",\n            ["name"] = "awesome-package",\n            ["type"] = PackageType.Script,\n            ["version"] = "1.0.0",\n            ["author"] = "Myself",\n        },\n        ...\n    }\n--]]\n'})}),"\n",(0,t.jsxs)(s.h3,{id:"version-133",children:["Version ",(0,t.jsx)(s.code,{children:"1.33"})]}),"\n",(0,t.jsxs)(s.h4,{id:"inputgetscriptingkeybindings-and-inputgetgamekeybindings",children:[(0,t.jsx)(s.a,{href:"/fr/docs/scripting-reference/static-classes/input#static-function-getscriptingkeybindings",children:"Input.GetScriptingKeyBindings()"})," and ",(0,t.jsx)(s.a,{href:"/fr/docs/scripting-reference/static-classes/input#static-function-getgamekeybindings",children:"Input.GetGameKeyBindings()"})]}),"\n",(0,t.jsx)(s.p,{children:"Before those methods returned a table in the format (example):"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-lua",children:'-- KeyBinding = Key\n{\n    "Jump" = "Spacebar",\n    "Crouch" = "Control",\n    "Fire" = "LeftMouse",\n}\n'})}),"\n",(0,t.jsx)(s.p,{children:"Now it returns in the format (example):"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-lua",children:'-- KeyBinding = { Key, Key, ... }\n{\n    "Jump" = { "Spacebar", "O" },\n    "Crouch" = { "Control" },\n    "Fire" = { "LeftMouse", "Return" },\n}\n'})}),"\n",(0,t.jsxs)(s.h3,{id:"version-129",children:["Version ",(0,t.jsx)(s.code,{children:"1.29"})]}),"\n",(0,t.jsx)(s.h4,{id:"httpselect",children:(0,t.jsx)(s.a,{href:"/fr/docs/scripting-reference/static-classes/http#static-function-select",children:"HTTP.Select()"})}),"\n",(0,t.jsxs)(s.p,{children:["Avant ",(0,t.jsx)(s.code,{children:"HTTP.Select"})," \xe9tait une m\xe9thode asynchrone, et depuis 1.29 elle fonctionne comme une m\xe9thode synchrone, n'ayant plus le param\xe8tre de callback."]}),"\n",(0,t.jsx)(s.h4,{id:"database",children:(0,t.jsxs)(s.a,{href:"/fr/docs/scripting-reference/classes/database#function-execute",children:["Database",":Execute","()"]})}),"\n",(0,t.jsxs)(s.p,{children:["Avant ",(0,t.jsx)(s.code,{children:"Database:Execute"})," \xe9tait une m\xe9thode asynchrone, et depuis 1.29 elle fonctionne comme une m\xe9thode synchrone, n'ayant plus le param\xe8tre de callback."]}),"\n",(0,t.jsxs)(s.h3,{id:"version-122",children:["Version ",(0,t.jsx)(s.code,{children:"1.22"})]}),"\n",(0,t.jsxs)(s.p,{children:["Dans la version 1.22, nous avons introduit le concept de ",(0,t.jsx)(s.a,{href:"/docs/next/core-concepts/packages/packages-guide#compatibility-version",children:"Version de compatibilit\xe9"}),". En plus de cela, nous avons juste un Breaking Change :"]}),"\n",(0,t.jsx)(s.h4,{id:"eventssubscribe",children:(0,t.jsx)(s.a,{href:"/fr/docs/scripting-reference/static-classes/events#static-function-subscribe",children:"Events.Subscribe()"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Events.Subscribe"})," n'\xe9coutera maintenant plus que les \xe9v\xe9nements locaux (ceux appel\xe9s avec ",(0,t.jsx)(s.strong,{children:"Events.Call"}),"). Si vous voulez \xe9couter les \xe9v\xe9nements distants (ceux appel\xe9s avec ",(0,t.jsx)(s.strong,{children:"Events.CallRemote"})," ou ",(0,t.jsx)(s.strong,{children:"Events.BroadcastRemote"}),"), veuillez utiliser ",(0,t.jsx)(s.code,{children:"Events.SubscribeRemote"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["En mode de compatibilit\xe9 (par exemple le r\xe9gler \xe0 ",(0,t.jsx)(s.code,{children:"1.21"})," ou en dessous) ",(0,t.jsx)(s.code,{children:"Events.Subscribe"})," \xe9coute toujours pour les \xe9v\xe9nements locaux et distants."]})]})}function h(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>c,a:()=>r});var t=n(67294);const i={},a=t.createContext(i);function r(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);