"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[1809],{43907:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var n=s(85893),a=s(11151);const i={title:"\u23f1\ufe0f Timer",description:"Execute of code at specified time intervals.",tags:["static-class"]},c=void 0,r={id:"scripting-reference/static-classes/timer",title:"\u23f1\ufe0f Timer",description:"Execute of code at specified time intervals.",source:"@site/versioned_docs/version-latest/scripting-reference/static-classes/timer.mdx",sourceDirName:"scripting-reference/static-classes",slug:"/scripting-reference/static-classes/timer",permalink:"/docs/scripting-reference/static-classes/timer",draft:!1,unlisted:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/scripting-reference/static-classes/timer.mdx",tags:[{inline:!0,label:"static-class",permalink:"/docs/tags/static-class"}],version:"latest",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1735814927e3,frontMatter:{title:"\u23f1\ufe0f Timer",description:"Execute of code at specified time intervals.",tags:["static-class"]},sidebar:"main",previous:{title:"\ud83c\udfae Steam",permalink:"/docs/scripting-reference/static-classes/steam"},next:{title:"\ud83d\udd0d Trace",permalink:"/docs/scripting-reference/static-classes/trace"}},o={},l=[{value:"\ud83c\udf92\xa0Examples",id:"examples",level:2},{value:"\ud83d\uddff\xa0Static Functions",id:"static-functions",level:2},{value:"\ud83d\ude80\xa0Events",id:"events",level:2}];function d(e){const t={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components},{EventsDeclaration:s,ExamplesDeclaration:i,HeaderDeclaration:c,StaticFunctionsDeclaration:r}=t;return s||p("EventsDeclaration",!0),i||p("ExamplesDeclaration",!0),c||p("HeaderDeclaration",!0),r||p("StaticFunctionsDeclaration",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c,{type:"StaticClass",name:"Timer",is_static:!0,image:"/img/docs/stopwatch.webp"}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"The shortest interval possible is equal to the local Tick Rate - usually at 33ms. On the Server this can vary depending on the Config.toml setting."})}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"\ud83c\udf92\xa0Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lua",children:'-- creates a Interval to call a function at every 2 seconds\nlocal my_interval = Timer.SetInterval(function(param1, param2)\n    Console.Log("Triggered each 2 seconds! Param1: " .. param1 .. ". Param2: " .. param2)\nend, 2000, "awesome param 1", 456)\n\n-- cancels the Interval\nTimer.ClearInterval(my_interval)\n\n-- creates a Timeout to call my_function in 5 seconds, once - passing a parameter\nTimer.SetTimeout(function(my_param)\n    Console.Log("nanos " .. my_param)\nend, 5000, "world")\n'})}),"\n",(0,n.jsx)(i,{type:"StaticClass",name:"Timer"}),"\n",(0,n.jsx)(t.h2,{id:"static-functions",children:"\ud83d\uddff\xa0Static Functions"}),"\n",(0,n.jsx)(r,{type:"StaticClass",name:"Timer"}),"\n",(0,n.jsx)(t.h2,{id:"events",children:"\ud83d\ude80\xa0Events"}),"\n",(0,n.jsx)(s,{type:"StaticClass",name:"Timer"})]})}function m(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}function p(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,t,s)=>{s.d(t,{Z:()=>r,a:()=>c});var n=s(67294);const a={},i=n.createContext(a);function c(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);