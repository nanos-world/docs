"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[8405],{98832:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var l=s(85893),n=s(11151);const r={title:"Server Configuration",description:"All you need to know to Configure your server!",sidebar_position:2,tags:["hosting"]},i=void 0,d={id:"core-concepts/server-manual/server-configuration",title:"Server Configuration",description:"All you need to know to Configure your server!",source:"@site/versioned_docs/version-latest/core-concepts/server-manual/server-configuration.md",sourceDirName:"core-concepts/server-manual",slug:"/core-concepts/server-manual/server-configuration",permalink:"/pt-BR/docs/core-concepts/server-manual/server-configuration",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/pt-BR",tags:[{label:"hosting",permalink:"/pt-BR/docs/tags/hosting"}],version:"latest",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1700127464,formattedLastUpdatedAt:"16 de nov. de 2023",sidebarPosition:2,frontMatter:{title:"Server Configuration",description:"All you need to know to Configure your server!",sidebar_position:2,tags:["hosting"]},sidebar:"main",previous:{title:"Server Installation",permalink:"/pt-BR/docs/core-concepts/server-manual/server-installation"},next:{title:"Command Line Interface - CLI",permalink:"/pt-BR/docs/core-concepts/server-manual/command-line-interface"}},o={},c=[{value:"Server Configuration File",id:"server-configuration-file",level:2},{value:"Settings Detailed",id:"settings-detailed",level:3},{value:"Logo Image",id:"logo-image",level:2},{value:"Map &amp; Level",id:"map--level",level:2},{value:"Server Console",id:"server-console",level:2},{value:"Built-in Commands",id:"built-in-commands",level:3},{value:"Custom Commands",id:"custom-commands",level:3},{value:"Command Line Parameters",id:"command-line-parameters",level:2},{value:"One-liner Server Configuration",id:"one-liner-server-configuration",level:3},{value:"Common Console Messages and Errors",id:"common-console-messages-and-errors",level:2},{value:"<code>Server Tick too/extreme high! Verify the server performance! Server got stuck for Xms...</code>",id:"server-tick-tooextreme-high-verify-the-server-performance-server-got-stuck-for-xms",level:4},{value:"<code>Lua Stack Error: Should be X, is Y...</code>",id:"lua-stack-error-should-be-x-is-y",level:4},{value:"<code>...Was it supposed to happen?</code>",id:"was-it-supposed-to-happen",level:4}];function a(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.p,{children:"All you need to know to Configure your server!"}),"\n",(0,l.jsx)(t.h2,{id:"server-configuration-file",children:"Server Configuration File"}),"\n",(0,l.jsxs)(t.p,{children:["The server Configuration file ",(0,l.jsx)(t.code,{children:"Config.toml"})," is generated automatically when the server is launched for the first time. This file will always be overridden with the proper pattern after the server is loaded."]}),"\n",(0,l.jsx)(t.admonition,{type:"tip",children:(0,l.jsxs)(t.p,{children:["nanos world Config files use ",(0,l.jsx)(t.strong,{children:"TOML"})," (Tom\u2019s Obvious, Minimal Language), please refer to ",(0,l.jsx)(t.a,{href:"https://github.com/toml-lang/toml",children:"https://github.com/toml-lang/toml"})," for more information and syntax."]})}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-toml",metastring:"reference",children:"https://github.com/nanos-world/nanos-world-server/blob/main/Config.toml\n"})}),"\n",(0,l.jsx)(t.h3,{id:"settings-detailed",children:"Settings Detailed"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Setting"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.strong,{children:(0,l.jsx)(t.code,{children:"name"})})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Name of the Server"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.strong,{children:(0,l.jsx)(t.code,{children:"description"})})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Description of the Server"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.strong,{children:(0,l.jsx)(t.code,{children:"max_players"})})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Max amount of players allowed to join"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.strong,{children:(0,l.jsx)(t.code,{children:"password"})})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Password to be able to connect"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.strong,{children:(0,l.jsx)(t.code,{children:"ip"})})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Server IP. We recommend leaving it blank"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.strong,{children:(0,l.jsx)(t.code,{children:"port"})})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Server main Port and HTTP Port (UDP/TCP)"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.strong,{children:(0,l.jsx)(t.code,{children:"query_port"})})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Server query Port (UDP)"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.strong,{children:(0,l.jsx)(t.code,{children:"announce"})})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Whether to announce or not in the Server List"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.strong,{children:(0,l.jsx)(t.code,{children:"tick_rate"})})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Server Tick in ms. We recommend leaving it 33"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.strong,{children:(0,l.jsx)(t.code,{children:"log_level"})})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Which Log level to output"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.strong,{children:(0,l.jsx)(t.code,{children:"game_mode"})})}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,l.jsx)(t.a,{href:"/pt-BR/docs/next/core-concepts/packages/packages-guide#game-mode",children:"game-mode"})," package to load -  you can only load one game-mode at once."]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.strong,{children:(0,l.jsx)(t.code,{children:"loading_screen"})})}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,l.jsx)(t.a,{href:"/pt-BR/docs/next/core-concepts/packages/loading-screen",children:"loading-screen"})," package to load - you can only load one loading-screen at once."]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.strong,{children:(0,l.jsx)(t.code,{children:"packages"})})}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,l.jsx)(t.a,{href:"/pt-BR/docs/next/core-concepts/packages/packages-guide#script",children:"script"})," packages to load"]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.strong,{children:(0,l.jsx)(t.code,{children:"map"})})}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,l.jsx)(t.a,{href:"/pt-BR/docs/next/core-concepts/packages/packages-guide#map",children:"map"})," package to load"]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.strong,{children:(0,l.jsx)(t.code,{children:"assets"})})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Additional assets to force to load"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.strong,{children:(0,l.jsx)(t.code,{children:"token"})})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Server Token used for authorize downloads through CLI"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.strong,{children:(0,l.jsx)(t.code,{children:"banned_ids"})})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"List of banned nanos account IDs"})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"logo-image",children:"Logo Image"}),"\n",(0,l.jsxs)(t.p,{children:["It is possible to have a custom image to be displayed in the server list. For that, add a file called ",(0,l.jsx)(t.code,{children:"Server.jpg"})," besides the server executable with the logo you wish. The recommended size is ",(0,l.jsx)(t.code,{children:"300x150"}),"."]}),"\n",(0,l.jsx)(t.admonition,{type:"tip",children:(0,l.jsxs)(t.p,{children:["You can pass a JPG image URL to ",(0,l.jsx)(t.code,{children:"--logo"})," parameter to download and use a image from the web instead of placing it physically in the folder."]})}),"\n",(0,l.jsx)(t.h2,{id:"map--level",children:"Map & Level"}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{src:s(83831).Z+"",width:"1811",height:"852"})}),"\n",(0,l.jsx)(t.p,{children:"The Map (or Level) is defined in the Server's config file, this map will be loaded when the player joins the server in the client side."}),"\n",(0,l.jsxs)(t.p,{children:["To configure a map, please refer to ",(0,l.jsx)(t.a,{href:"/pt-BR/docs/next/core-concepts/packages/packages-guide#map",children:"Packages Guide"})," to create a Map Package pointing to the correct Asset."]}),"\n",(0,l.jsxs)(t.p,{children:["nanos world counts on (for now) 4 built-in maps: ",(0,l.jsx)(t.code,{children:"default-blank-map"}),", ",(0,l.jsx)(t.code,{children:"default-empty-map"}),", ",(0,l.jsx)(t.code,{children:"default-ocean-map"})," and ",(0,l.jsx)(t.code,{children:"default-testing-map"})," which can be used in your server without needing to download any Package/Asset Pack."]}),"\n",(0,l.jsx)(t.h2,{id:"server-console",children:"Server Console"}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{src:s(28046).Z+"",width:"1058",height:"391"})}),"\n",(0,l.jsx)(t.h3,{id:"built-in-commands",children:"Built-in Commands"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Command"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"chat <message>"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Sends a chat message"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"kick <player_id> <reason>"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Kicks a player by it's ID"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"map <map_path>"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Reloads all Packages and reconnect the Players in new Map"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"restart"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Restarts the server, reloading all Packages and reconnecting the Players"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"stop"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Stops the server"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"players"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Lists all Players connected"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"package run <package_name> <lua_code>"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Runs a code in a Package"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"package reload all"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Reloads all Packages and restarts the Lua Virtual Machine"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"package reload <package_names...>"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Reloads Packages"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"package unload <package_names...>"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Unloads Packages"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"package load <package_names...>"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Loads Packages"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"package hotreload <package_names...>"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Reloads all files but keeps the memory as is"})]})]})]}),"\n",(0,l.jsx)(t.h3,{id:"custom-commands",children:"Custom Commands"}),"\n",(0,l.jsxs)(t.p,{children:["It is possible to define custom commands as well, for that please refer to ",(0,l.jsx)(t.a,{href:"/pt-BR/docs/next/scripting-reference/static-classes/console#static-function-registercommand",children:"Console.RegisterCommand()"}),"."]}),"\n",(0,l.jsx)(t.h2,{id:"command-line-parameters",children:"Command Line Parameters"}),"\n",(0,l.jsx)(t.p,{children:"It is possible to override the Server Configuration with Command Line Parameters."}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Value Type"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"--name"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"string"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Server name"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"--description"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"string"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Server description"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"--logo"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"string"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Server Logo (downloads the image in-memory)"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"--password"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"string"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Server password"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"--ip"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"string"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Server IP"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"--map"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"string"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Map to load"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"--port"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"number"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Server port"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"--query_port"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"number"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Server Query port"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"--announce"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"0 or 1"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"If announce in master list"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"--game_mode"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"string"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Server game-mode"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"--loading_screen"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"string"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Server loading-screen"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"--packages"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"string list"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Server packages"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"--assets"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"string list"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Server assets"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"--token"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"string"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Server authorization token"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"--max_players"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"number"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Max allowed players"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"--dedicated_server"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"0 or 1"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"If to start as a Dedicated Server or P2P"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"--async_log"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"0 or 1"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"If to use async or sync logs (async provides better performance) - default is 1"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"--log_level"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"1, 2 or 3"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"If to use Normal, Debug or Verbose logs"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"--custom_settings"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"toml string"}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["A list of ",(0,l.jsx)(t.a,{href:"/pt-BR/docs/core-concepts/packages/packages-guide#custom-settings",children:"Custom Settings"})," to be passed to scripting in toml format"]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"--compression"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"0-9"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Sets the compression level to use in some networking operations - 0 disables it, 1 is the fastest and 9 is the slower but highest compression ratio"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"--save"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.em,{children:"flag"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"If to save the passed parameters in Config.toml"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"--profiling"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.em,{children:"flag"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Enables Performance Profiling Logs for debugging"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"--auto_download"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.em,{children:"flag"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Automatically downloads Packages and Assets from Vault if needed"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"--use_vault_assets_lean"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.em,{children:"flag"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Only downloads the Asset Pack's .toml configuration files from Vault"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"--log_show_thread"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.em,{children:"flag"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Shows the current running thread of each outputted log"})]})]})]}),"\n",(0,l.jsx)(t.admonition,{type:"tip",children:(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"Flag"})," Value Types don't require any argument, just pass the parameter like ",(0,l.jsx)(t.code,{children:"--parameter"}),"."]})}),"\n",(0,l.jsx)(t.h3,{id:"one-liner-server-configuration",children:"One-liner Server Configuration"}),"\n",(0,l.jsxs)(t.p,{children:["With Command Line Parameters and ",(0,l.jsx)(t.a,{href:"/pt-BR/docs/core-concepts/server-manual/command-line-interface",children:"Command Line Interface (CLI)"}),", it is also possible to automate the full server installation, here's an example:"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-shell",metastring:'title="Shell/Linux"',children:'# Installs/Updates the server through SteamCMD\nsteamcmd +force_install_dir /home/nanos-world-server +login anonymous +app_update "1936830 -beta bleeding-edge" validate +quit\n\n# Installs all needed Packages (this will install needed Assets as well)\n./NanosWorldServer.sh --cli install package sandbox battlefield-kill-ui ts-fireworks-tools\n\n# Starts the server with all configs set\n./NanosWorldServer.sh --name "nanos world Amazing Sandbox" --description "Awesome Sandbox Server" --map "nanos-world::TestingMap" --game_mode "sandbox" --packages "battlefield-kill-ui,ts-fireworks-tools" --port 7777 --query_port 7778 --max_players 32 --logo "https://i.imgur.com/vnB8CB5.jpg"\n'})}),"\n",(0,l.jsx)(t.p,{children:"Another shorter example:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-shell",metastring:'title="Shell/Linux"',children:'# Starts the server with all configs set and auto downloads the packages and assets if needed\n./NanosWorldServer.sh --name "nanos world Amazing Sandbox" --description "Awesome Sandbox Server" --map "nanos-world::TestingMap" --game_mode "sandbox" --packages "battlefield-kill-ui,ts-fireworks-tools" --port 7777 --query_port 7778 --max_players 32 --auto_download 1 --logo "https://i.imgur.com/vnB8CB5.jpg"\n'})}),"\n",(0,l.jsx)(t.h2,{id:"common-console-messages-and-errors",children:"Common Console Messages and Errors"}),"\n",(0,l.jsx)(t.h4,{id:"server-tick-tooextreme-high-verify-the-server-performance-server-got-stuck-for-xms",children:(0,l.jsx)(t.code,{children:"Server Tick too/extreme high! Verify the server performance! Server got stuck for Xms..."})}),"\n",(0,l.jsxs)(t.p,{children:["It means the server got ",(0,l.jsx)(t.strong,{children:"stuck"})," for X milliseconds. The warning (",(0,l.jsx)(t.em,{children:"yellow"}),") is not something to worry about, but too many messages in ",(0,l.jsx)(t.em,{children:"red"})," could mean your server infrastructure is not that good or your scripting code is not that optimized."]}),"\n",(0,l.jsx)(t.p,{children:"Usually the server runs at 33 ticks per second (or the value configured at Config.toml), the server runs in an infinite loop in that frequency, and inside that loop all server operations are executed, such as receiving and sending network packets, triggering lua events, executing functions or callbacks, and so on."}),"\n",(0,l.jsx)(t.p,{children:"If a single tick takes more than 33 milliseconds, this warning will appear up."}),"\n",(0,l.jsx)(t.admonition,{type:"tip",children:(0,l.jsx)(t.p,{children:'In some shared VPS, this warning may appear up more frequently due how the VPS handles the scaling of it\'s machines, sometimes the provider may think your VPS is "idle" (due nanos world server using extremely low CPU) and may decrease your processing power, causing this warning show up as well.'})}),"\n",(0,l.jsx)(t.h4,{id:"lua-stack-error-should-be-x-is-y",children:(0,l.jsx)(t.code,{children:"Lua Stack Error: Should be X, is Y..."})}),"\n",(0,l.jsxs)(t.p,{children:["This is an internal error and ",(0,l.jsx)(t.strong,{children:"should not supposed to happen"}),". Those are guards set around our Lua Scripting implementation to prevent bad things from happening. If this error appears it means a implementation bug happened. Please communicate immediately with the devs, and if possible how to reproduce that!"]}),"\n",(0,l.jsx)(t.h4,{id:"was-it-supposed-to-happen",children:(0,l.jsx)(t.code,{children:"...Was it supposed to happen?"})}),"\n",(0,l.jsx)(t.p,{children:"Those FATAL errors usually shouldn't happen, if you experience any, please let us know."})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},83831:(e,t,s)=>{s.d(t,{Z:()=>l});const l=s.p+"assets/images/server-map-bb4747ea1a9ac9805f83bebcc6933cf2.webp"},28046:(e,t,s)=>{s.d(t,{Z:()=>l});const l=s.p+"assets/images/server-069c323cadab182b5b0b9b75d8315bea.webp"},11151:(e,t,s)=>{s.d(t,{Z:()=>d,a:()=>i});var l=s(67294);const n={},r=l.createContext(n);function i(e){const t=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),l.createElement(r.Provider,{value:t},e.children)}}}]);