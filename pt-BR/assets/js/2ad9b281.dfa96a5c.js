"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[7738],{75086:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var s=t(85893),a=t(11151);const i={title:"\ud83d\udd2a Melee",description:"A Melee represents an Entity which can be Pickable by a Character and can be used to melee attack, Charactes can hold it with hands with pre-defined handling modes.",sidebar_position:0,tags:["class"]},r=void 0,c={id:"scripting-reference/classes/melee",title:"\ud83d\udd2a Melee",description:"A Melee represents an Entity which can be Pickable by a Character and can be used to melee attack, Charactes can hold it with hands with pre-defined handling modes.",source:"@site/docs/scripting-reference/classes/melee.mdx",sourceDirName:"scripting-reference/classes",slug:"/scripting-reference/classes/melee",permalink:"/pt-BR/docs/next/scripting-reference/classes/melee",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/pt-BR",tags:[{label:"class",permalink:"/pt-BR/docs/next/tags/class"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1700127464,formattedLastUpdatedAt:"16 de nov. de 2023",sidebarPosition:0,frontMatter:{title:"\ud83d\udd2a Melee",description:"A Melee represents an Entity which can be Pickable by a Character and can be used to melee attack, Charactes can hold it with hands with pre-defined handling modes.",sidebar_position:0,tags:["class"]},sidebar:"main",previous:{title:"\ud83d\udca1 Light",permalink:"/pt-BR/docs/next/scripting-reference/classes/light"},next:{title:"\u2728 Particle",permalink:"/pt-BR/docs/next/scripting-reference/classes/particle"}},o={},l=[{value:"\ud83c\udf92\xa0Examples",id:"examples",level:2},{value:"\ud83d\udee0\xa0Constructors",id:"constructors",level:2},{value:"\ud83d\uddff\xa0Static Functions",id:"static-functions",level:2},{value:"\ud83e\udda0\xa0Functions",id:"functions",level:2},{value:"\ud83d\ude80\xa0Events",id:"events",level:2}];function d(e){const n={admonition:"admonition",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components},{ConstructorDeclaration:t,EventsDeclaration:i,FunctionsDeclaration:r,HeaderDeclaration:c,StaticFunctionsDeclaration:o}=n;return t||u("ConstructorDeclaration",!0),i||u("EventsDeclaration",!0),r||u("FunctionsDeclaration",!0),c||u("HeaderDeclaration",!0),o||u("StaticFunctionsDeclaration",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c,{type:"Class",name:"Melee",image:"/img/docs/torch.webp"}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"\ud83c\udf92\xa0Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:'local crowbar = Melee(\n  Vector(-900, 185, 215),\n  Rotator(0, 90, 90),\n  "nanos-world::SM_Crowbar_01",\n  CollisionType.Normal,\n  true,\n  HandlingMode.SingleHandedMelee,\n  ""\n)\n\ncrowbar:SetScale(Vector(1.5, 1.5, 1.5))\ncrowbar:AddAnimationCharacterUse("nanos-world::AM_Mannequin_Melee_Slash_Attack")\ncrowbar:SetDamageSettings(0.3, 0.5)\ncrowbar:SetCooldown(1.0)\ncrowbar:SetBaseDamage(40)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"constructors",children:"\ud83d\udee0\xa0Constructors"}),"\n",(0,s.jsx)(t,{type:"Class",name:"Melee"}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["nanos world provides a special ",(0,s.jsx)(n.em,{children:"Particle*"})," called ",(0,s.jsx)(n.code,{children:"nanos-world::P_Grenade_Special"})," which spawns different particles depending on the surface it explodes, and also if is underwater."]}),(0,s.jsxs)(n.p,{children:["*",(0,s.jsx)(n.em,{children:'This "Particle" is just a special identifier which can only be used on Grenades!'})]})]}),"\n",(0,s.jsx)(n.h2,{id:"static-functions",children:"\ud83d\uddff\xa0Static Functions"}),"\n",(0,s.jsx)(o,{type:"Class",name:"Melee"}),"\n",(0,s.jsx)(n.h2,{id:"functions",children:"\ud83e\udda0\xa0Functions"}),"\n",(0,s.jsx)(r,{type:"Class",name:"Melee"}),"\n",(0,s.jsx)(n.h2,{id:"events",children:"\ud83d\ude80\xa0Events"}),"\n",(0,s.jsx)(i,{type:"Class",name:"Melee"})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}function u(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>r});var s=t(67294);const a={},i=s.createContext(a);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);