"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[810],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),l=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(a.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,f=u["".concat(a,".").concat(m)]||u[m]||d[m]||c;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,i=new Array(c);i[0]=m;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<c;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},66950:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>g,frontMatter:()=>c,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const c={title:"\ud83d\udccf Vector2D",description:"A Vector2D composed of components (X, Y) with floating point precision. Used mainly for HUD and Drawing on screen",tags:["utility-class"]},i=void 0,s={unversionedId:"scripting-reference/structs/vector2d",id:"version-latest/scripting-reference/structs/vector2d",title:"\ud83d\udccf Vector2D",description:"A Vector2D composed of components (X, Y) with floating point precision. Used mainly for HUD and Drawing on screen",source:"@site/i18n/de/docusaurus-plugin-content-docs/version-latest/scripting-reference/structs/vector2d.mdx",sourceDirName:"scripting-reference/structs",slug:"/scripting-reference/structs/vector2d",permalink:"/de/docs/scripting-reference/structs/vector2d",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/de",tags:[{label:"utility-class",permalink:"/de/docs/tags/utility-class"}],version:"latest",frontMatter:{title:"\ud83d\udccf Vector2D",description:"A Vector2D composed of components (X, Y) with floating point precision. Used mainly for HUD and Drawing on screen",tags:["utility-class"]},sidebar:"version-latest/main",previous:{title:"\ud83d\udcd0 Vector",permalink:"/de/docs/scripting-reference/structs/vector"},next:{title:"JSON",permalink:"/de/docs/scripting-reference/utility-classes/json"}},a={},l=[{value:"\ufffd\xa0Examples",id:"examples",level:2},{value:"\ufffd\xa0Constructors",id:"constructors",level:2},{value:"\ufffd Properties",id:"-properties",level:2},{value:"\ufffd\xa0Functions",id:"functions",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},u=p("HeaderDeclaration"),d=p("ConstructorDeclaration"),m=p("PropertiesDeclaration"),f=p("FunctionsDeclaration"),y={toc:l},v="wrapper";function g(e){let{components:t,...r}=e;return(0,o.kt)(v,(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(u,{type:"Struct",name:"Vector2D",is_open_source:!0,mdxType:"HeaderDeclaration"}),(0,o.kt)("h2",{id:"examples"},"\ufffd\xa0Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"local new_vector = Vector2D(1452.5, 512)\n")),(0,o.kt)("h2",{id:"constructors"},"\ufffd\xa0Constructors"),(0,o.kt)(d,{type:"Struct",name:"Vector2D",mdxType:"ConstructorDeclaration"}),(0,o.kt)("h2",{id:"-properties"},"\ufffd Properties"),(0,o.kt)(m,{type:"Struct",name:"Vector2D",mdxType:"PropertiesDeclaration"}),(0,o.kt)("h2",{id:"functions"},"\ufffd\xa0Functions"),(0,o.kt)("p",null,"::info"),(0,o.kt)("p",null,"his structure supports ",(0,o.kt)("inlineCode",{parentName:"p"},"+"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"-"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"*"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"/"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"==")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"tostring")," operations."),(0,o.kt)("p",null,"::"),(0,o.kt)(f,{type:"Struct",name:"Vector2D",mdxType:"FunctionsDeclaration"}))}g.isMDXComponent=!0}}]);