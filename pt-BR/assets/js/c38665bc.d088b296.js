"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[3831],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=c(n),d=o,m=f["".concat(u,".").concat(d)]||f[d]||p[d]||i;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},87469:function(e,t,n){n.d(t,{PZ:function(){return y},SM:function(){return s},Ut:function(){return b},YS:function(){return a},Yb:function(){return f},aj:function(){return g},p2:function(){return v},rt:function(){return h}});n(87462),n(63366),n(67294);var r=n(3905),o=n(65551),i=function(){return(0,o.zu)().path},a=function(e){var t=e.title,n=e.description,o=e.href,a=e.image_src;return(0,r.kt)("a",{class:"card-link",href:o.startsWith("http")?o:i()+"/"+o},(0,r.kt)("img",{src:a||"/img/docs/nanos-world-background.jpg"}),(0,r.kt)("h4",null,t),(0,r.kt)("p",null,n))},s=function(e){var t=e.children,n=e.href;return(0,r.kt)("a",{class:"reference-link",href:n.startsWith("http")?n:i()+"/"+n},t,(0,r.kt)("span",null,n))},u=function(e,t){return(0,r.kt)("a",{class:"authority-availability",href:i()+"/core-concepts/scripting/authority-concepts#methods-and-events-availability"},(0,r.kt)("img",{src:e,title:t}))},c=function(e){return(0,r.kt)("a",{href:i()+"/scripting-reference/glossary/basic-types#"+e.toLowerCase()},e)},l=function(e,t){return(0,r.kt)("a",{href:i()+"/scripting-reference/utility-classes/"+(t||e.toLowerCase())},e)},p=function(e,t){return(0,r.kt)("a",{href:i()+"/scripting-reference/classes/"+(t||e.toLowerCase())},e)},f=function(e){var t=e.children;return(0,r.kt)("a",{href:i()+"/scripting-reference/glossary/enums#"+t.toLowerCase(),title:t+" Enum (number)"},t)},d=function(e){return(0,r.kt)("a",{href:i()+"/core-concepts/assets#referencing-assets-in-scripting",title:"Asset Path (string)"},e)},m=function(e){return(0,r.kt)("a",{href:i()+"/scripting-reference/glossary/basic-types#specialpath",title:"Special Path (string)"},e)},g={AuthorityOnly:function(){return u("/img/scripting/authority-only.svg","authority-only - this can be called only on the side which spawned it!")},ServerOnly:function(){return u("/img/scripting/server-only.svg","server-only - this can be called only on server side!")},ClientOnly:function(){return u("/img/scripting/client-only.svg","client-only - this can be called only on client side!")},Both:function(){return u("/img/scripting/both.png","both-sides - this can be called on any side!")}},h={Number:function(){return c("number")},String:function(){return c("string")},Boolean:function(){return c("boolean")},Table:function(){return c("table")},Iterator:function(){return c("iterator")},Any:function(){return c("any")},Function:function(){return c("function")},Nil:function(){return c("nil")}},b={Vector:function(){return l("Vector")},Rotator:function(){return l("Rotator")},Color:function(){return l("Color")},Quat:function(){return l("Quat","quaternion")},Vector2D:function(){return l("Vector2D","vectortwod")}},y={Actor:function(){return p("Actor","base-classes/actor")},Paintable:function(){return p("Paintable","base-classes/paintable")},Pickable:function(){return p("Pickable","base-classes/pickable")},Billboard:function(){return p("Billboard")},Blueprint:function(){return p("Blueprint")},Canvas:function(){return p("Canvas")},Cable:function(){return p("Cable")},Character:function(){return p("Character")},Database:function(){return p("Database")},File:function(){return p("File")},Grenade:function(){return p("Grenade")},Melee:function(){return p("Melee")},Light:function(){return p("Light")},Particle:function(){return p("Particle")},Player:function(){return p("Player")},Prop:function(){return p("Prop")},Sound:function(){return p("Sound")},SceneCapture:function(){return p("SceneCapture","scene-capture")},StaticMesh:function(){return p("StaticMesh","static-mesh")},TextRender:function(){return p("TextRender","text-render")},Trigger:function(){return p("Trigger")},Vehicle:function(){return p("Vehicle")},Weapon:function(){return p("Weapon")},WebUI:function(){return p("WebUI")}},v={StaticMesh:function(){return d("StaticMesh Asset")},SkeletalMesh:function(){return d("SkeletalMesh Asset")},Animation:function(){return d("Animation Asset")},Particle:function(){return d("Particle Asset")},Material:function(){return d("Material Asset")},Map:function(){return d("Map Asset")},Blueprint:function(){return d("Blueprint Asset")},Sound:function(){return m("Sound Asset or Special Path")},Image:function(){return m("Image Special Path")},HTML:function(){return m("HTML Special Path")}}},13754:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return f}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=n(87469),s=["components"],u={id:"roadmap",title:"\ud83d\udee3\ufe0f Roadmap",description:"nanos world Roadmap e futuras atualiza\xe7\xf5es",image:"/img/docs/roadmap.jpg",keywords:["future","plan","updates"],sidebar_position:.2},c=void 0,l={unversionedId:"roadmap",id:"version-latest/roadmap",title:"\ud83d\udee3\ufe0f Roadmap",description:"nanos world Roadmap e futuras atualiza\xe7\xf5es",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/version-latest/roadmap.mdx",sourceDirName:".",slug:"/roadmap",permalink:"/pt-BR/docs/roadmap",editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/roadmap.mdx",tags:[],version:"latest",sidebarPosition:.2,frontMatter:{id:"roadmap",title:"\ud83d\udee3\ufe0f Roadmap",description:"nanos world Roadmap e futuras atualiza\xe7\xf5es",image:"/img/docs/roadmap.jpg",keywords:["future","plan","updates"],sidebar_position:.2},sidebar:"version-latest/main",previous:{title:"\ud83e\uddea Sign Up for Alpha Testing",permalink:"/pt-BR/docs/signing-up-alpha"},next:{title:"\ud83e\udd1d Contributing to the Docs",permalink:"/pt-BR/docs/contributing-to-the-docs"}},p={},f=[{value:"Sugerir novas ideias",id:"sugerir-novas-ideias",level:2}],d={toc:f};function m(e){var t=e.components,u=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},d,u,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Confira nossos planos futuros e futuras atualiza\xe7\xf5es!"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(1787).Z,width:"1407",height:"793"})),(0,i.kt)("p",null,"nanos mundo \xe9 um jogo orientado por feedbacks, isso significa que estamos sempre ouvindo coment\xe1rios e ideias da comunidade para seguir um caminho de desenvolvimento!"),(0,i.kt)("p",null,"Agrupamos todos os nossos objetivos e ideias em nosso ",(0,i.kt)("a",{parentName:"p",href:"https://roadmap.nanos.world"},"Roadmap oficial do Trello Board"),", que est\xe1 sempre a ser atualizado com as novas ideias que possam surgir!"),(0,i.kt)(a.SM,{href:"https://roadmap.nanos.world",mdxType:"ReferenceLink"},"\ud83d\udee3\ufe0f Roadmap Oficial"),(0,i.kt)("h2",{id:"sugerir-novas-ideias"},"Sugerir novas ideias"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(41423).Z,width:"1248",height:"318"})),(0,i.kt)("p",null,"Todas as suas sugest\xf5es e ideias podem ser coletadas em nosso ",(0,i.kt)("a",{parentName:"p",href:"https://issues.nanos.world"},"GitHub Issue Tracker"),". N\xf3s lemos todas as sugest\xf5es por l\xe1 e os discutimos profundamente para adicionar o recurso ao jogo!"),(0,i.kt)(a.SM,{href:"https://issues.nanos.world",mdxType:"ReferenceLink"},"\u2714\ufe0f Oficial Issue Tracker"),(0,i.kt)("p",null,"Voc\xea tamb\xe9m pode se juntar a n\xf3s no ",(0,i.kt)("a",{parentName:"p",href:"https://discord.nanos.world"},"Discord")," e participar da discuss\xe3o conosco no canal # \ud83e\udde0speak. brainstorm :P!"))}m.isMDXComponent=!0},41423:function(e,t,n){t.Z=n.p+"assets/images/github-issues-fcf9f576f01fc930d24e89357f2ee6ab.jpg"},1787:function(e,t,n){t.Z=n.p+"assets/images/roadmap-b2298f740cfedf78356bbe5dc59fd92e.jpg"}}]);