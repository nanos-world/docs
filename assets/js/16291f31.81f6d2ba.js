"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[7936],{43491:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var t=s(85893),i=s(11151);const a={title:"\ud83d\udd0a Sound",description:"Class for playing in-game 2D and 3D sounds",sidebar_position:0,tags:["class"]},o=void 0,r={id:"scripting-reference/classes/sound",title:"\ud83d\udd0a Sound",description:"Class for playing in-game 2D and 3D sounds",source:"@site/versioned_docs/version-latest/scripting-reference/classes/sound.mdx",sourceDirName:"scripting-reference/classes",slug:"/scripting-reference/classes/sound",permalink:"/docs/scripting-reference/classes/sound",draft:!1,unlisted:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/scripting-reference/classes/sound.mdx",tags:[{inline:!0,label:"class",permalink:"/docs/tags/class"}],version:"latest",lastUpdatedBy:"Gabriel Tanasovici Nardy",lastUpdatedAt:1729935614e3,sidebarPosition:0,frontMatter:{title:"\ud83d\udd0a Sound",description:"Class for playing in-game 2D and 3D sounds",sidebar_position:0,tags:["class"]},sidebar:"main",previous:{title:"\ud83d\udcfd\ufe0f SceneCapture",permalink:"/docs/scripting-reference/classes/scene-capture"},next:{title:"\ud83c\udfe0 StaticMesh",permalink:"/docs/scripting-reference/classes/static-mesh"}},c={},d=[{value:"\ud83c\udf92\xa0Examples",id:"examples",level:2},{value:"\ud83d\udee0\xa0Constructors",id:"constructors",level:2},{value:"\ud83d\uddff\xa0Static Functions",id:"static-functions",level:2},{value:"\ud83e\udda0\xa0Functions",id:"functions",level:2},{value:"\ud83d\ude80\xa0Events",id:"events",level:2},{value:"\ud83d\udd0a\xa0Sound Attenuation",id:"sound-attenuation",level:2},{value:"\ud83d\udd08\xa0Linear",id:"linear",level:3},{value:"\ud83d\udd08\xa0Logarithmic",id:"logarithmic",level:3},{value:"\ud83d\udd08\xa0Inverse",id:"inverse",level:3},{value:"\ud83d\udd08\xa0Log Reverse",id:"log-reverse",level:3},{value:"\ud83d\udd08\xa0Natural Sound",id:"natural-sound",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components},{ConstructorDeclaration:a,EventsDeclaration:o,FunctionsDeclaration:r,HeaderDeclaration:c,StaticFunctionsDeclaration:d}=n;return a||h("ConstructorDeclaration",!0),o||h("EventsDeclaration",!0),r||h("FunctionsDeclaration",!0),c||h("HeaderDeclaration",!0),d||h("StaticFunctionsDeclaration",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c,{type:"Class",name:"Sound",image:"/img/docs/sound.webp"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["You can also load raw ",(0,t.jsx)(n.code,{children:".ogg"})," files from disk! Please check ",(0,t.jsx)(n.a,{href:"/docs/scripting-reference/glossary/basic-types#specialpath",children:"SpecialPath"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"\ud83c\udf92\xa0Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:'local my_sound = Sound(\n    Vector(-510, 145, 63), -- Location (if a 3D sound)\n    "nanos-world::A_VR_Confirm", -- Asset Path\n    false, -- Is 2D Sound\n    true, -- Auto Destroy (if to destroy after finished playing)\n    SoundType.SFX,\n    1, -- Volume\n    1 -- Pitch\n)\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:'-- Spawning a ogg sound located in a Package\nlocal ogg_sound = Sound(Vector(), "package://my-package/Client/awesome_beep.ogg", true)\n'})}),"\n",(0,t.jsx)(n.h2,{id:"constructors",children:"\ud83d\udee0\xa0Constructors"}),"\n",(0,t.jsx)(a,{type:"Class",name:"Sound"}),"\n",(0,t.jsx)(n.admonition,{title:"Note",type:"info",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"auto_destroy"})})," means the Entity will be immediately destroyed after spawned, losing references to the ",(0,t.jsx)(n.em,{children:"Particle System"})," spawned in-game. So if the ",(0,t.jsx)(n.em,{children:"Particle System"})," itself loops indefinitely, it will keep playing until the Player reconnects."]})}),"\n",(0,t.jsx)(n.h2,{id:"static-functions",children:"\ud83d\uddff\xa0Static Functions"}),"\n",(0,t.jsx)(d,{type:"Class",name:"Sound"}),"\n",(0,t.jsx)(n.h2,{id:"functions",children:"\ud83e\udda0\xa0Functions"}),"\n",(0,t.jsx)(r,{type:"Class",name:"Sound"}),"\n",(0,t.jsx)(n.h2,{id:"events",children:"\ud83d\ude80\xa0Events"}),"\n",(0,t.jsx)(o,{type:"Class",name:"Sound"}),"\n",(0,t.jsx)(n.h2,{id:"sound-attenuation",children:"\ud83d\udd0a\xa0Sound Attenuation"}),"\n",(0,t.jsx)(n.p,{children:"This property defines the function that determines the rate of attenuation over distance. There are a number of different functions to choose from:"}),"\n",(0,t.jsx)(n.h3,{id:"linear",children:"\ud83d\udd08\xa0Linear"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(77226).Z+"",width:"2500",height:"1476"})}),"\n",(0,t.jsx)(n.p,{children:"This is the default function. When using this function the volume will attenuate linearly and so the changes in volume are constant as the listener moves towards and away from the source. This function is good for crossfading between large background-type sounds that don't need tightly focussed 3D spatial falloff settings."}),"\n",(0,t.jsx)(n.h3,{id:"logarithmic",children:"\ud83d\udd08\xa0Logarithmic"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(51614).Z+"",width:"2500",height:"1476"})}),"\n",(0,t.jsx)(n.p,{children:"When using this function the volume attenuates such that the changes in volume are greater at close distances, and lesser at far distances. This function is good for spot sounds that need good 3D positioning, while still being audible at reasonable distances."}),"\n",(0,t.jsx)(n.h3,{id:"inverse",children:"\ud83d\udd08\xa0Inverse"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(57074).Z+"",width:"2500",height:"1476"})}),"\n",(0,t.jsx)(n.p,{children:"When using this function, the changes in volume are similar to that of the logarithmic curve, but are more exaggerated. This function is good for sounds that only need to be just audible at far distances, but that gets significantly louder as the listener gets quite close to the source."}),"\n",(0,t.jsx)(n.h3,{id:"log-reverse",children:"\ud83d\udd08\xa0Log Reverse"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(11343).Z+"",width:"2500",height:"1476"})}),"\n",(0,t.jsx)(n.p,{children:"When using this function, the changes in volume are lesser at close distances, with more dramatic differences at far distances. This function is good for sounds that need to be loud across larger distances."}),"\n",(0,t.jsx)(n.h3,{id:"natural-sound",children:"\ud83d\udd08\xa0Natural Sound"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(21246).Z+"",width:"2500",height:"1476"})}),"\n",(0,t.jsx)(n.p,{children:"This function attempts to model a more 'naturalistic' falloff behavior to produce behaviors that closer match reality. This function is a kind of 'middle ground' between the Logarithmic and Inverse functions."})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}function h(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},57074:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/sounds-inverse-c55f6d8674c960bb226ae568025a3ca4.webp"},77226:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/sounds-linear-a848c9dc2b62d5e8a046ba8616b21288.webp"},11343:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/sounds-log-reverse-509f2660e62991973bb34d93a253dee4.webp"},51614:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/sounds-log-406cd75301c542ed16592ba40e2d747e.webp"},21246:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/sounds-natural-8795f6b14ee91ebdd6f1c38b6afbec36.webp"},11151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>o});var t=s(67294);const i={},a=t.createContext(i);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);