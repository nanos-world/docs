"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[3116],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return k}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=p(a),k=r,m=g["".concat(s,".").concat(k)]||g[k]||d[k]||o;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},20878:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],l={title:"Packages Guide",description:"All you need to know about Packages",sidebar_position:0,tags:["scripting","packages"],keywords:["packages","scripting","lua"]},s=void 0,p={unversionedId:"core-concepts/packages/packages-guide",id:"version-latest/core-concepts/packages/packages-guide",title:"Packages Guide",description:"All you need to know about Packages",source:"@site/versioned_docs/version-latest/core-concepts/packages/packages-guide.md",sourceDirName:"core-concepts/packages",slug:"/core-concepts/packages/packages-guide",permalink:"/docs/core-concepts/packages/packages-guide",editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/core-concepts/packages/packages-guide.md",tags:[{label:"scripting",permalink:"/docs/tags/scripting"},{label:"packages",permalink:"/docs/tags/packages"}],version:"latest",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1649243394,formattedLastUpdatedAt:"4/6/2022",sidebarPosition:0,frontMatter:{title:"Packages Guide",description:"All you need to know about Packages",sidebar_position:0,tags:["scripting","packages"],keywords:["packages","scripting","lua"]},sidebar:"version-latest/main",previous:{title:"Game Panels",permalink:"/docs/core-concepts/server-manual/game-panels"},next:{title:"Loading Screen",permalink:"/docs/core-concepts/packages/loading-screen"}},c={},d=[{value:"Folder Structure",id:"folder-structure",level:2},{value:"Package Configuration",id:"package-configuration",level:2},{value:"Settings Detailed",id:"settings-detailed",level:3},{value:"Package Types",id:"package-types",level:3}],g={toc:d};function k(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},g,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Packages")," are pieces/components of your server which will execute Lua scripts to interact to the game. "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(55583).Z,width:"628",height:"170"})),(0,o.kt)("p",null,"Each Package is isolated and have it's own Lua Virtual Machine, this means that each has its own global scope and cannot access others data directly."),(0,o.kt)("h2",{id:"folder-structure"},"Folder Structure"),(0,o.kt)("p",null,"All Packages must go under ",(0,o.kt)("inlineCode",{parentName:"p"},"Server/Packages/")," folder, each Package is a folder under that."),(0,o.kt)("p",null,"They can contain the following folders: ",(0,o.kt)("inlineCode",{parentName:"p"},"Server"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Client")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Shared"),". Only ",(0,o.kt)("strong",{parentName:"p"},"Client")," and ",(0,o.kt)("strong",{parentName:"p"},"Shared")," folders will be sent and loaded by the clients when they connect."),(0,o.kt)("p",null,"Each ",(0,o.kt)("strong",{parentName:"p"},"Package")," must have a file called ",(0,o.kt)("inlineCode",{parentName:"p"},"Index.lua")," inside ",(0,o.kt)("strong",{parentName:"p"},"Server"),", ",(0,o.kt)("strong",{parentName:"p"},"Client")," or ",(0,o.kt)("strong",{parentName:"p"},"Shared")," folders, this is the only file which will be triggered when the Package is loaded, this way this file is responsible for including other files and starting up your functionalities."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Server Folder"',title:'"Server','Folder"':!0},"NanosWorldServer.exe\nPackages/\n\u251c\u2500\u2500 My_Package_01/\n\u2502   \u251c\u2500\u2500 Server/\n\u2502   \u2502   \u251c\u2500\u2500 Index.lua\n\u2502   \u2502   \u2514\u2500\u2500 *.lua\n\u2502   \u251c\u2500\u2500 Client/\n\u2502   \u2502   \u2514\u2500\u2500 *.lua\n\u2502   \u251c\u2500\u2500 Shared/\n\u2502   \u2502   \u2514\u2500\u2500 *.lua\n\u2502   \u2514\u2500\u2500 Package.toml\n\u251c\u2500\u2500 My_Package_02/\n\u2502   \u251c\u2500\u2500 Package.toml\n\u2502   \u2514\u2500\u2500 ...\nAssets/\nConfig.toml\n")),(0,o.kt)("h2",{id:"package-configuration"},"Package Configuration"),(0,o.kt)("p",null,"Packages have a configuration file in the root of the package folder, called ",(0,o.kt)("inlineCode",{parentName:"p"},"Package.toml"),", in this file we can setup all pertinent settings related to the Package:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml",metastring:"reference",reference:!0},"https://github.com/nanos-world/nanos-world-server/blob/main/Package.toml\n")),(0,o.kt)("h3",{id:"settings-detailed"},"Settings Detailed"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Setting"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"name"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Friendly name of the Package")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"author"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Author","(","s",")"," of the Package")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"version"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Version of the Package - please refer to ",(0,o.kt)("a",{parentName:"td",href:"https://semver.org/"},"SemVer"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"image"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Image URL to be displayed in the Vault")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"type"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Type of the Package - please refer to ",(0,o.kt)("a",{parentName:"td",href:"#package-types"},"Package Types"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"force_no_map_script"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Enabling this will force the map-script ","(","if any",")"," to do NOT load")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"auto_cleanup"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Enabling this will destroy all entities spawned by this Package when it unloads")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"packages_requirements"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"List of Packages which need to be loaded first")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"assets_requirements"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"List of Asset Packs to be loaded when this package loads")))),(0,o.kt)("h3",{id:"package-types"},"Package Types"),(0,o.kt)("p",null,"In nanos world we have 3 kind of packages: ",(0,o.kt)("strong",{parentName:"p"},"script"),", ",(0,o.kt)("strong",{parentName:"p"},"game-mode")," and ",(0,o.kt)("strong",{parentName:"p"},"loading-screen"),", each one with with a specific functionality and an unique purpose."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"script"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Normal Package, will execute it's scripts and start a new ",(0,o.kt)("strong",{parentName:"td"},"Lua VM")," when started.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"game-mode"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Like ",(0,o.kt)("inlineCode",{parentName:"td"},"script")," but you can only load one ",(0,o.kt)("inlineCode",{parentName:"td"},"game-mode")," package at once.",(0,o.kt)("br",null),"Useful when you are creating full games which cannot risk being",(0,o.kt)("br",null),"loaded with other full games packages.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"loading-screen"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Special Package which will be loaded during player's loading screen.",(0,o.kt)("br",null),"Those packages must have an ",(0,o.kt)("inlineCode",{parentName:"td"},"Index.html")," in the root.",(0,o.kt)("br",null),"Please refer to ",(0,o.kt)("a",{parentName:"td",href:"/docs/core-concepts/packages/loading-screen"},"Loading Screen")," for more information.")))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you are creating a ",(0,o.kt)("strong",{parentName:"p"},"Library"),", a ",(0,o.kt)("strong",{parentName:"p"},"Tool")," or some ",(0,o.kt)("strong",{parentName:"p"},"Utility")," package, make it ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"script")),"!"),(0,o.kt)("p",{parentName:"div"},"If you are creating an unique and complete ",(0,o.kt)("strong",{parentName:"p"},"Game")," with several functionalities which you don't want to be messed if someone load two full games, make it ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"game-mode")),"!"))))}k.isMDXComponent=!0},55583:function(e,t,a){t.Z=a.p+"assets/images/packages-01-e5ca40b3250f77522f7e280d3a183cf9.jpg"}}]);