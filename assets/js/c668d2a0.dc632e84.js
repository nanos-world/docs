"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[1809],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),l=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(r),u=n,f=m["".concat(o,".").concat(u)]||m[u]||d[u]||i;return r?a.createElement(f,s(s({ref:t},p),{},{components:r})):a.createElement(f,s({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=u;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[m]="string"==typeof e?e:n,s[1]=c;for(var l=2;l<i;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3288:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>y,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const i={title:"\u23f1\ufe0f Timer",description:"Execute of code at specified time intervals.",tags:["static-class"]},s=void 0,c={unversionedId:"scripting-reference/static-classes/timer",id:"version-latest/scripting-reference/static-classes/timer",title:"\u23f1\ufe0f Timer",description:"Execute of code at specified time intervals.",source:"@site/versioned_docs/version-latest/scripting-reference/static-classes/timer.mdx",sourceDirName:"scripting-reference/static-classes",slug:"/scripting-reference/static-classes/timer",permalink:"/docs/scripting-reference/static-classes/timer",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/scripting-reference/static-classes/timer.mdx",tags:[{label:"static-class",permalink:"/docs/tags/static-class"}],version:"latest",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1678873206,formattedLastUpdatedAt:"Mar 15, 2023",frontMatter:{title:"\u23f1\ufe0f Timer",description:"Execute of code at specified time intervals.",tags:["static-class"]},sidebar:"version-latest/main",previous:{title:"\ud83c\udfae Steam",permalink:"/docs/scripting-reference/static-classes/steam"},next:{title:"\ud83d\udd0d Trace",permalink:"/docs/scripting-reference/static-classes/trace"}},o={},l=[{value:"\ud83c\udf92\xa0Examples",id:"examples",level:2},{value:"\ud83d\uddff\xa0Static Functions",id:"static-functions",level:2},{value:"\ud83d\ude80\xa0Events",id:"events",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},m=p("HeaderDeclaration"),d=p("StaticFunctionsDeclaration"),u=p("EventsDeclaration"),f={toc:l},v="wrapper";function y(e){let{components:t,...r}=e;return(0,n.kt)(v,(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(m,{type:"StaticClass",name:"Timer",is_static:!0,image:"/img/docs/stopwatch.webp",mdxType:"HeaderDeclaration"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"The shortest interval possible is equal to the local Tick Rate - usually at 33ms. On the Server this can vary depending on the Config.toml setting.")),(0,n.kt)("h2",{id:"examples"},"\ud83c\udf92\xa0Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},'-- creates a Interval to call a function at every 2 seconds\nlocal my_interval = Timer.SetInterval(function(param1, param2)\n    Console.Log("Triggered each 2 seconds! Param1: " .. param1 .. ". Param2: " .. param2)\nend, 2000, "awesome param 1", 456)\n\n-- cancels the Interval\nTimer.ClearInterval(my_interval)\n\n-- creates a Timeout to call my_function in 5 seconds, once - passing a parameter\nTimer.SetTimeout(function(my_param)\n    Console.Log("nanos " .. my_param)\nend, 5000, "world")\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"local character = Character(...)\n\nlocal my_timer = Timer.SetTimeout(function(_character)\n    -- Do something with _character\n    -- Ex: Destroy the character after 10 seconds\n    _character:Destroy()\nend, 10000, character)\n\n-- Binds the Timer to the Character\n-- This will ensure it will never trigger if the character is destroyed before it\n-- With this you don't need to validate if the '_character' parameter is valid\nTimer.Bind(my_timer, character)\n")),(0,n.kt)("h2",{id:"static-functions"},"\ud83d\uddff\xa0Static Functions"),(0,n.kt)(d,{type:"StaticClass",name:"Timer",mdxType:"StaticFunctionsDeclaration"}),(0,n.kt)("h2",{id:"events"},"\ud83d\ude80\xa0Events"),(0,n.kt)(u,{type:"StaticClass",name:"Timer",mdxType:"EventsDeclaration"}))}y.isMDXComponent=!0}}]);