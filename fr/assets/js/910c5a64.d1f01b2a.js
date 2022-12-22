"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[2633],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var s=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=s.createContext({}),u=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return s.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||r;return n?s.createElement(g,o(o({ref:t},p),{},{components:n})):s.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<r;u++)o[u]=n[u];return s.createElement.apply(null,o)}return s.createElement.apply(null,n)}d.displayName="MDXCreateElement"},27988:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var s=n(87462),a=(n(67294),n(3905));const r={},o=void 0,i={unversionedId:"assets-modding/creating-assets/maps-and-levels/water",id:"assets-modding/creating-assets/maps-and-levels/water",title:"water",description:"- - -",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/assets-modding/creating-assets/maps-and-levels/water.md",sourceDirName:"assets-modding/creating-assets/maps-and-levels",slug:"/assets-modding/creating-assets/maps-and-levels/water",permalink:"/fr/docs/next/assets-modding/creating-assets/maps-and-levels/water",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/assets-modding/creating-assets/maps-and-levels/water.md",tags:[],version:"current",frontMatter:{},sidebar:"main",previous:{title:"Map Script et Configuration",permalink:"/fr/docs/next/assets-modding/creating-assets/maps-and-levels/map-script-and-data"},next:{title:"Default Asset Pack List",permalink:"/fr/docs/next/assets-modding/default-asset-pack/default-assets-list"}},l={},u=[{value:"Comment les objets r\xe9agissent \xe0 l&#39;eau",id:"comment-les-objets-r\xe9agissent-\xe0-leau",level:2},{value:"Props &amp; Pickables",id:"props--pickables",level:3},{value:"V\xe9hicules",id:"v\xe9hicules",level:3},{value:"Personnage",id:"personnage",level:3}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,s.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("hr",null),(0,a.kt)("p",null,"title: L'Eau description: Comment ajouter l'Unreal Water dans votre Level et l'int\xe9grer de fa\xe7on transparente dans nanos world. tags: ","[assets, water]"," keywords: ","[map, level, water, unreal, physics]"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Comment ajouter de l'Unreal Water dans votre level et l'int\xe9grer de fa\xe7on transparente dans nanos world"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(18724).Z,width:"1367",height:"767"})),(0,a.kt)("p",null,"Depuis Unreal Engine 4.26, il est possible d'utiliser un ",(0,a.kt)("a",{parentName:"p",href:"https://docs.unrealengine.com/4.27/en-US/BuildingWorlds/Water/"},"syst\xe8me d'eau")," incroyable et magnifique dans vos cartes. Et nanos world a r\xe9ussi \xe0 int\xe9grer ce syst\xe8me de fa\xe7on transparente dans notre jeu."),(0,a.kt)("p",null,"N'importe quel ",(0,a.kt)("strong",{parentName:"p"},"Prop"),", ",(0,a.kt)("strong",{parentName:"p"},"Caract\xe8re"),", ",(0,a.kt)("strong",{parentName:"p"},"V\xe9hicule"),", ou m\xeame ",(0,a.kt)("strong",{parentName:"p"},"Pickables")," r\xe9agira de mani\xe8re proc\xe9durale \xe0 ce syst\xe8me d'eau, aucune modification suppl\xe9mentaire n'est n\xe9cessaire, vous pouvez simplement glisser-d\xe9poser vos Acteurs d'eau dans votre niveau et \xe7a marche !"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"L'utilisation du nouveau Plugin Eau d'Unreal vous oblige \xe0 l'activer dans votre projet ADK, et n\xe9cessite \xe9galement que vous ayez install\xe9 Visual Studio et tous les outils habituels . D\xe9pendances ET pour la compilation.")),(0,a.kt)("p",null,"Dans la ",(0,a.kt)("a",{parentName:"p",href:"https://docs.unrealengine.com/4.27/en-US/BuildingWorlds/Water/"},"Documentation Unreal Engine")," vous pouvez trouver des dizaines de guides et de tutoriels sur la fa\xe7on de l'utiliser, et ne vous inqui\xe9tez pas, tout fonctionnera une fois que vous l'importerez dans nanos world !"),(0,a.kt)("h2",{id:"comment-les-objets-r\xe9agissent-\xe0-leau"},"Comment les objets r\xe9agissent \xe0 l'eau"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(90841).Z,width:"1157",height:"655"})),(0,a.kt)("p",null,"Unreal Water a le concept de Buoyance Spheres, chaque sph\xe8re repr\xe9sente un \xe9l\xe9ment de Buoyance qui fera flotter l'objet."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Nous voulons toujours vous exposer des fa\xe7ons de personnaliser et de contr\xf4ler les Sph\xe8res de Buoyance \xe0 travers le scripting!")),(0,a.kt)("h3",{id:"props--pickables"},"Props & Pickables"),(0,a.kt)("p",null,"Les props et les Pickables sont les objets les plus directs, ils recevront automatiquement ",(0,a.kt)("strong",{parentName:"p"},"une Sph\xe8re de Buoyance")," \xe0 la m\xeame taille de leurs meshes."),(0,a.kt)("h3",{id:"v\xe9hicules"},"V\xe9hicules"),(0,a.kt)("p",null,"Les v\xe9hicules obtiendront automatiquement ",(0,a.kt)("strong",{parentName:"p"},"quatre")," sph\xe8res de flottabilit\xe9, positionn\xe9es autour de chaque roue, ce qui fera flotter les v\xe9hicules et ne tournera pas aussi facilement."),(0,a.kt)("h3",{id:"personnage"},"Personnage"),(0,a.kt)("p",null,'Les personnages utilisent un syst\xe8me plus complexe, int\xe9gr\xe9 avec les "Swimming states" et les animations. Il utilise ',(0,a.kt)("strong",{parentName:"p"},"une Sph\xe8re Buoyance")," aussi, l\xe9g\xe8rement traduite pour que les transitions d'animation de natation fonctionnent parfaitement."))}c.isMDXComponent=!0},90841:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/water-boat-5a9c2e08841c23f153b5a2590f619e63.jpg"},18724:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/water-6dd47e5a60534aed5c1182330f691159.jpg"}}]);