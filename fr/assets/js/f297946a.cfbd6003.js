"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[5389],{80221:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var s=t(85893),r=t(11151);const o={title:"\ud83d\udce6 Prop",description:"Un prop repr\xe9sente un Mesh dynamique qui peut \xeatre cr\xe9\xe9e dans le monde, peut \xeatre saisie par des personnages et ont de la physique.",sidebar_position:0,tags:["class"]},i=void 0,a={id:"scripting-reference/classes/prop",title:"\ud83d\udce6 Prop",description:"Un prop repr\xe9sente un Mesh dynamique qui peut \xeatre cr\xe9\xe9e dans le monde, peut \xeatre saisie par des personnages et ont de la physique.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/scripting-reference/classes/prop.mdx",sourceDirName:"scripting-reference/classes",slug:"/scripting-reference/classes/prop",permalink:"/fr/docs/next/scripting-reference/classes/prop",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/fr",tags:[{inline:!0,label:"class",permalink:"/fr/docs/next/tags/class"}],version:"current",sidebarPosition:0,frontMatter:{title:"\ud83d\udce6 Prop",description:"Un prop repr\xe9sente un Mesh dynamique qui peut \xeatre cr\xe9\xe9e dans le monde, peut \xeatre saisie par des personnages et ont de la physique.",sidebar_position:0,tags:["class"]},sidebar:"main",previous:{title:"\ud83d\udc69\u200d\ud83d\udcbb Joueur",permalink:"/fr/docs/next/scripting-reference/classes/player"},next:{title:"\ud83d\udcfd\ufe0f Capture de Sc\xe8ne",permalink:"/fr/docs/next/scripting-reference/classes/scene-capture"}},c={},p=[{value:"\ud83c\udf92\xa0Examples",id:"examples",level:2},{value:"\ud83d\udee0\xa0Constructors",id:"constructors",level:2},{value:"\ud83d\uddff\xa0Static Functions",id:"static-functions",level:2},{value:"\ud83e\udda0\xa0Functions",id:"functions",level:2},{value:"\ud83d\ude80\xa0Events",id:"events",level:2}];function l(e){const n={admonition:"admonition",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components},{ConstructorDeclaration:t,EventsDeclaration:o,FunctionsDeclaration:i,HeaderDeclaration:a,StaticFunctionsDeclaration:c}=n;return t||d("ConstructorDeclaration",!0),o||d("EventsDeclaration",!0),i||d("FunctionsDeclaration",!0),a||d("HeaderDeclaration",!0),c||d("StaticFunctionsDeclaration",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a,{type:"Class",name:"Prop",image:"/img/docs/props.webp"}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"\ud83c\udf92\xa0Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:'local my_prop = Prop(\n  Vector(-900, 185, 215),\n  Rotator(0, 90, 90),\n  "nanos-world::SM_Crate_07"\n)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"constructors",children:"\ud83d\udee0\xa0Constructors"}),"\n",(0,s.jsx)(t,{type:"Class",name:"Prop"}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"Si un Prop a \xe9t\xe9 cr\xe9\xe9 par le Client. Il aura toutes les interactions d\xe9sactiv\xe9es (par exemple, il ne pourra pas \xeatre saisi par des personnages)."})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Les props qui ont un rayon inf\xe9rieures \xe0 ",(0,s.jsx)(n.strong,{children:"40"})," unit\xe9s ou les props tr\xe8s minces (tout c\xf4t\xe9 inf\xe9rieur \xe0 ",(0,s.jsx)(n.strong,{children:"20"})," unit\xe9s) auront la ",(0,s.jsx)(n.strong,{children:"DCC"})," (D\xe9tection de collision continue) activ\xe9e automatiquement pour \xe9viter de tomber dans le sol ou d'autres objets. ",(0,s.jsx)(n.em,{children:"Cela augmentera l\xe9g\xe8rement leur co\xfbt en performance\xa0!"})]})}),"\n",(0,s.jsx)(n.h2,{id:"static-functions",children:"\ud83d\uddff\xa0Static Functions"}),"\n",(0,s.jsx)(c,{type:"Class",name:"Prop"}),"\n",(0,s.jsx)(n.h2,{id:"functions",children:"\ud83e\udda0\xa0Functions"}),"\n",(0,s.jsx)(i,{type:"Class",name:"Prop"}),"\n",(0,s.jsx)(n.h2,{id:"events",children:"\ud83d\ude80\xa0Events"}),"\n",(0,s.jsx)(o,{type:"Class",name:"Prop"})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}function d(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>i});var s=t(67294);const r={},o=s.createContext(r);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);