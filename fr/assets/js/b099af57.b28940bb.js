"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[5155],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),p=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return o.createElement(s.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return t?o.createElement(g,l(l({ref:n},u),{},{components:t})):o.createElement(g,l({ref:n},u))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<r;p++)l[p]=t[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},66135:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var o=t(87462),a=(t(67294),t(3905));const r={title:"Tool Guns",description:"How to create new Tool Guns for nanos world",tags:["tutorial-example","scripting","assets"],sidebar_position:2},l=void 0,i={unversionedId:"getting-started/sandbox-game-mode/tool-guns",id:"getting-started/sandbox-game-mode/tool-guns",title:"Tool Guns",description:"How to create new Tool Guns for nanos world",source:"@site/docs/getting-started/sandbox-game-mode/tool-guns.md",sourceDirName:"getting-started/sandbox-game-mode",slug:"/getting-started/sandbox-game-mode/tool-guns",permalink:"/fr/docs/next/getting-started/sandbox-game-mode/tool-guns",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/fr",tags:[{label:"tutorial-example",permalink:"/fr/docs/next/tags/tutorial-example"},{label:"scripting",permalink:"/fr/docs/next/tags/scripting"},{label:"assets",permalink:"/fr/docs/next/tags/assets"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1680687196,formattedLastUpdatedAt:"5 avr. 2023",sidebarPosition:2,frontMatter:{title:"Tool Guns",description:"How to create new Tool Guns for nanos world",tags:["tutorial-example","scripting","assets"],sidebar_position:2},sidebar:"main",previous:{title:"Spawn Menu",permalink:"/fr/docs/next/getting-started/sandbox-game-mode/spawn-menu"},next:{title:"Context Menu",permalink:"/fr/docs/next/getting-started/sandbox-game-mode/context-menu"}},s={},p=[{value:"Creating a custom Tool Gun",id:"creating-a-custom-tool-gun",level:2},{value:"Overriding ToolGun Client Methods",id:"overriding-toolgun-client-methods",level:2},{value:"Examples",id:"examples",level:2}],u={toc:p},d="wrapper";function c(e){let{components:n,...r}=e;return(0,a.kt)(d,(0,o.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"How to create new Tool Guns for nanos world"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(55925).Z,width:"1919",height:"1079"})),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This ",(0,a.kt)("strong",{parentName:"p"},"Tool Gun")," approach is a convention of the Sandbox game-mode and is not a game-wide concept.")),(0,a.kt)("p",null,"The sandbox game-mode defines a ",(0,a.kt)("inlineCode",{parentName:"p"},"ToolGun")," class (see on GitHub: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nanos-world/nanos-world-sandbox/blob/master/Server/Tools/BaseToolGun.lua"},"Server")," & ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nanos-world/nanos-world-sandbox/blob/master/Client/Tools/BaseToolGun.lua"},"Client"),") which helps on creating new tools based on a base Tool Gun."),(0,a.kt)("h2",{id:"creating-a-custom-tool-gun"},"Creating a custom Tool Gun"),(0,a.kt)("p",null,"To create your own Tool based on Sandbox's ",(0,a.kt)("inlineCode",{parentName:"p"},"ToolGun"),", you need to create a new Class inheriting from it passing some custom parameters to the Class, like that:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'MyToolGun = ToolGun.Inherit("MyToolGun", {\n    -- Spawn Menu\n    name = "My Tool Gun",\n    image = "package://my-package/MyToolGun.webp",\n    category = "special",\n\n    -- Tool Gun Tutorials which will display on Top Left\n    tutorials = {\n        { key = "LeftClick", text = "spawn balloon" },\n        { key = "Undo", text = "undo spawn" },\n        { key = "ContextMenu", text = "balloon settings" },\n    }\n\n    -- Tool Gun Crosshair Trace Debug Settings which will display on World when aiming\n    crosshair_trace = {\n        -- Which Collision Channel to trace\n        collision_channel = CollisionChannel.WorldStatic | CollisionChannel.WorldDynamic,\n        -- Which Color to display when it traces an entity\n        color_entity = Color.GREEN,\n        -- Which Color to display when it traces anything else\n        color_no_entity = Color.RED,\n    }\n})\n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The values ",(0,a.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"image")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"category")," are used by ",(0,a.kt)("strong",{parentName:"p"},"Spawn Menu")," to display it properly on it."),(0,a.kt)("p",{parentName:"admonition"},"The other values ",(0,a.kt)("inlineCode",{parentName:"p"},"tutorials")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"crosshair_trace")," are used by the ",(0,a.kt)("strong",{parentName:"p"},"ToolGun")," to add custom tutorials or behaviors when using it. Those parameters are optional."),(0,a.kt)("p",{parentName:"admonition"},"Those values are only used on ",(0,a.kt)("strong",{parentName:"p"},"Client Side"),"!")),(0,a.kt)("h2",{id:"overriding-toolgun-client-methods"},"Overriding ToolGun Client Methods"),(0,a.kt)("p",null,"The ToolGun have some methods on ",(0,a.kt)("strong",{parentName:"p"},"Client Side")," which you can override to implement custom behaviors to your tool when the Local Player interacts with it."),(0,a.kt)("p",null,"You can just override them in your custom Tool Gun class to implement them:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:"title=Client/Index.lua",title:"Client/Index.lua"},"-- Called when you Fire with it\nfunction MyToolGun:OnLocalPlayerFire(character)\n    -- Do something\n\n    -- Something useful to do here is tracing for where the Player fire\n    -- and send that coordinate to server to spawn something at that location\nend\n\n-- Called when you Pick Up it\nfunction MyToolGun:OnLocalPlayerPickUp(character)\n    -- Do something\n\n    -- Something useful to do here is adding a new entry to Context Menu\n    -- when picking it up (see Sandbox's BalloonGun example)\nend\n\n-- Called when you Drop it\nfunction MyToolGun:OnLocalPlayerDrop(character)\n    -- Do something\n\n    -- You will much likely want to disable any effect or similar thing when\n    -- you drop your Tool\nend\n")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"You can find more examples of Tools in the Sandbox's ",(0,a.kt)("inlineCode",{parentName:"p"},"Tools/")," folder on both ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nanos-world/nanos-world-sandbox/tree/master/Client/Tools"},"Client")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nanos-world/nanos-world-sandbox/tree/master/Server/Tools"},"Server")," side."),(0,a.kt)("p",null,"Now it's up to you to to create your own Packages with your own Tools!"))}c.isMDXComponent=!0},55925:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/tool-gun-d5097a656aa7fe68b88c7ca4c2825bb9.webp"}}]);