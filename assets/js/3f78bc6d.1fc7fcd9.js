"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[9348],{66949:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var n=s(85893),i=s(11151);const r={title:"\u2728 Particle",description:"Class to spawn Particle Systems used to create effects in the world.",sidebar_position:0,tags:["class"]},a=void 0,c={id:"scripting-reference/classes/particle",title:"\u2728 Particle",description:"Class to spawn Particle Systems used to create effects in the world.",source:"@site/versioned_docs/version-latest/scripting-reference/classes/particle.mdx",sourceDirName:"scripting-reference/classes",slug:"/scripting-reference/classes/particle",permalink:"/docs/scripting-reference/classes/particle",draft:!1,unlisted:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/scripting-reference/classes/particle.mdx",tags:[{inline:!0,label:"class",permalink:"/docs/tags/class"}],version:"latest",lastUpdatedBy:"Gabriel Tanasovici Nardy",lastUpdatedAt:1729935614e3,sidebarPosition:0,frontMatter:{title:"\u2728 Particle",description:"Class to spawn Particle Systems used to create effects in the world.",sidebar_position:0,tags:["class"]},sidebar:"main",previous:{title:"\ud83d\udd2a Melee",permalink:"/docs/scripting-reference/classes/melee"},next:{title:"\ud83d\udc69\u200d\ud83d\udcbb Player",permalink:"/docs/scripting-reference/classes/player"}},o={},l=[{value:"\ud83c\udf92\xa0Examples",id:"examples",level:2},{value:"\ud83d\udee0\xa0Constructors",id:"constructors",level:2},{value:"\ud83d\uddff\xa0Static Functions",id:"static-functions",level:2},{value:"\ud83e\udda0\xa0Functions",id:"functions",level:2},{value:"\ud83d\ude80\xa0Events",id:"events",level:2}];function d(e){const t={admonition:"admonition",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components},{ConstructorDeclaration:s,EventsDeclaration:r,FunctionsDeclaration:a,HeaderDeclaration:c,StaticFunctionsDeclaration:o}=t;return s||u("ConstructorDeclaration",!0),r||u("EventsDeclaration",!0),a||u("FunctionsDeclaration",!0),c||u("HeaderDeclaration",!0),o||u("StaticFunctionsDeclaration",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c,{type:"Class",name:"Particle",image:"/img/docs/particle.webp"}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["Both ",(0,n.jsx)(t.strong,{children:"Cascade"})," and ",(0,n.jsx)(t.strong,{children:"Niagara"})," Particle Systems are supported!"]})}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"\ud83c\udf92\xa0Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lua",children:'local my_particle = Particle(\n    Vector(-200, 100, 100),\n    Rotator(0, 0, 0),\n    "nanos-world::P_Explosion",\n    true, -- Auto Destroy?\n    true -- Auto Activate?\n)\n'})}),"\n",(0,n.jsx)(t.h2,{id:"constructors",children:"\ud83d\udee0\xa0Constructors"}),"\n",(0,n.jsx)(s,{type:"Class",name:"Particle"}),"\n",(0,n.jsx)(t.admonition,{title:"Note",type:"info",children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"auto_destroy"})})," means the Entity will be immediately destroyed after spawned, losing references to the ",(0,n.jsx)(t.em,{children:"Particle System"})," spawned in-game. So if the ",(0,n.jsx)(t.em,{children:"Particle System"})," itself loops indefinitely, it will keep playing until the Player reconnects."]})}),"\n",(0,n.jsx)(t.h2,{id:"static-functions",children:"\ud83d\uddff\xa0Static Functions"}),"\n",(0,n.jsx)(o,{type:"Class",name:"Particle"}),"\n",(0,n.jsx)(t.h2,{id:"functions",children:"\ud83e\udda0\xa0Functions"}),"\n",(0,n.jsx)(a,{type:"Class",name:"Particle"}),"\n",(0,n.jsx)(t.h2,{id:"events",children:"\ud83d\ude80\xa0Events"}),"\n",(0,n.jsx)(r,{type:"Class",name:"Particle"})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}function u(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,t,s)=>{s.d(t,{Z:()=>c,a:()=>a});var n=s(67294);const i={},r=n.createContext(i);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);