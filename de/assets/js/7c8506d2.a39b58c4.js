"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[8656],{40389:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var o=n(85893),r=n(11151);const s={title:"\ud83d\udcd0 Vector",description:"A vector composed of components (X, Y, Z) with floating point precision.",tags:["utility-class"]},c=void 0,i={id:"scripting-reference/structs/vector",title:"\ud83d\udcd0 Vector",description:"A vector composed of components (X, Y, Z) with floating point precision.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/scripting-reference/structs/vector.mdx",sourceDirName:"scripting-reference/structs",slug:"/scripting-reference/structs/vector",permalink:"/de/docs/next/scripting-reference/structs/vector",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/de",tags:[{inline:!0,label:"utility-class",permalink:"/de/docs/next/tags/utility-class"}],version:"current",frontMatter:{title:"\ud83d\udcd0 Vector",description:"A vector composed of components (X, Y, Z) with floating point precision.",tags:["utility-class"]},sidebar:"main",previous:{title:"\ud83e\udded Rotator",permalink:"/de/docs/next/scripting-reference/structs/rotator"},next:{title:"\ud83d\udccf Vector2D",permalink:"/de/docs/next/scripting-reference/structs/vector2d"}},a={},l=[{value:"\ud83c\udf92\xa0Examples",id:"examples",level:2},{value:"\ud83d\udee0\xa0Constructors",id:"constructors",level:2},{value:"\ud83e\uddfd Properties",id:"-properties",level:2},{value:"\ud83e\udda0\xa0Functions",id:"functions",level:2}];function d(e){const t={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components},{ConstructorDeclaration:n,FunctionsDeclaration:s,HeaderDeclaration:c,PropertiesDeclaration:i}=t;return n||u("ConstructorDeclaration",!0),s||u("FunctionsDeclaration",!0),c||u("HeaderDeclaration",!0),i||u("PropertiesDeclaration",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c,{type:"Struct",name:"Vector",is_open_source:!0}),"\n",(0,o.jsxs)(t.admonition,{type:"info",children:[(0,o.jsx)(t.p,{children:"Vectors are internally and automatically compressed, which reduces it's size in the network up to 90%. Some cool details:"}),(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Vectors parameters in Classes Methods are usually compressed with precision of 1 decimal place (with some exceptions which we need more precision)."}),"\n",(0,o.jsx)(t.li,{children:"Vectors passed in Remote Events are compressed with precision of 2 decimal places. If you need more precision, we recommend passing them as raw number instead."}),"\n"]})]}),"\n",(0,o.jsx)(t.h2,{id:"examples",children:"\ud83c\udf92\xa0Examples"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-lua",children:"local new_vector = Vector(1452.5, 512, 943.1)\n"})}),"\n",(0,o.jsx)(t.h2,{id:"constructors",children:"\ud83d\udee0\xa0Constructors"}),"\n",(0,o.jsx)(n,{type:"Struct",name:"Vector"}),"\n",(0,o.jsx)(t.h2,{id:"-properties",children:"\ud83e\uddfd Properties"}),"\n",(0,o.jsx)(i,{type:"Struct",name:"Vector"}),"\n",(0,o.jsx)(t.h2,{id:"functions",children:"\ud83e\udda0\xa0Functions"}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["This structure supports ",(0,o.jsx)(t.code,{children:"+"}),", ",(0,o.jsx)(t.code,{children:"-"}),", ",(0,o.jsx)(t.code,{children:"*"}),", ",(0,o.jsx)(t.code,{children:"/"}),", ",(0,o.jsx)(t.code,{children:"^"}),", ",(0,o.jsx)(t.code,{children:"=="}),", and ",(0,o.jsx)(t.code,{children:"tostring"})," operations."]})}),"\n",(0,o.jsx)(s,{type:"Struct",name:"Vector"})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}function u(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>c});var o=n(67294);const r={},s=o.createContext(r);function c(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);