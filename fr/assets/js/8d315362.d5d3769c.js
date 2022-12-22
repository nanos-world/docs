"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[3008],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var i=n.createContext({}),d=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(a),m=s,h=p["".concat(i,".").concat(m)]||p[m]||u[m]||l;return a?n.createElement(h,r(r({ref:t},c),{},{components:a})):n.createElement(h,r({ref:t},c))}));function m(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var l=a.length,r=new Array(l);r[0]=p;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:s,r[1]=o;for(var d=2;d<l;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},77864:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(87462),s=(a(67294),a(3905));const l={slug:"november-2021",title:"2021 November: Unreal Engine 5?",authors:"gtnardy",tags:["updates"]},r=void 0,o={permalink:"/fr/blog/november-2021",editUrl:"https://github.com/nanos-world/docs/edit/master/blog/2021-12-01-unreal-engine-5.md",source:"@site/i18n/fr/docusaurus-plugin-content-blog/2021-12-01-unreal-engine-5.md",title:"2021 November: Unreal Engine 5?",description:"Nouvelles Classes, Exp\xe9rimentations avec Unreal Engine 5 et Am\xe9liorations du Scripting!",date:"2021-12-01T00:00:00.000Z",formattedDate:"1 d\xe9cembre 2021",tags:[{label:"updates",permalink:"/fr/blog/tags/updates"}],readingTime:6.605,hasTruncateMarker:!1,authors:[{name:"Gabriel T. Nardy",title:"nanos world developer (SyedMuhammad)",url:"https://twitter.com/gtnardy",imageURL:"/img/blog/gtnardy.jpg",key:"gtnardy"}],frontMatter:{slug:"november-2021",title:"2021 November: Unreal Engine 5?",authors:"gtnardy",tags:["updates"]},prevItem:{title:"2022 January: Store & Vault!",permalink:"/fr/blog/janvier-2022"},nextItem:{title:"Octobre 2021 : Alpha publi\xe9!",permalink:"/fr/blog/alpha publi\xe9"}},i={authorsImageUrls:[void 0]},d=[{value:"Nouvelle Classe: Decal",id:"nouvelle-classe-decal",level:2},{value:"Nouvelle Classe: Billboard",id:"nouvelle-classe-billboard",level:2},{value:"Nouvelle Classe: Melee",id:"nouvelle-classe-melee",level:2},{value:"Am\xe9lioration des scripts",id:"am\xe9lioration-des-scripts",level:2},{value:"V\xe9ritable Hot Reload",id:"v\xe9ritable-hot-reload",level:3},{value:"Extension des Classes",id:"extension-des-classes",level:3},{value:"New View Mode: TopDown",id:"new-view-mode-topdown",level:2},{value:"New Camera Methods",id:"new-camera-methods",level:2},{value:"TextRender on Server Side",id:"textrender-on-server-side",level:2},{value:"Other Changes",id:"other-changes",level:2},{value:"Unreal Engine 5",id:"unreal-engine-5",level:2},{value:"Graphical Results",id:"graphical-results",level:3},{value:"Stability",id:"stability",level:3},{value:"What now?",id:"what-now",level:3}],c={toc:d};function u(e){let{components:t,...l}=e;return(0,s.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Nouvelles Classes, Exp\xe9rimentations avec Unreal Engine 5 et Am\xe9liorations du Scripting!"),(0,s.kt)("h2",{id:"nouvelle-classe-decal"},"Nouvelle Classe: ",(0,s.kt)("a",{parentName:"h2",href:"/docs/scripting-reference/classes/decal"},"Decal")),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(10400).Z,width:"820",height:"175"})),(0,s.kt)("p",null,"Nous avons ajout\xe9 une nouvelle classe pour faire appara\xeetre des ",(0,s.kt)("strong",{parentName:"p"},"Decals"),"! Decals are Materials that are projected onto meshes in your level, including Static Meshes and Skeletal Meshes. Vous pouvez charger n'importe quel ",(0,s.kt)("inlineCode",{parentName:"p"},".jpg")," depuis le disque pendant l'ex\xe9cution, et l'utiliser comme param\xe8tre dans votre Mat\xe9riel de Decal !"),(0,s.kt)("p",null,"Comme les statuts sont h\xe9rit\xe9s des Acteurs, vous pouvez changer son emplacement, la rotation, l'attacher ou appeler n'importe quelle m\xe9thode de ",(0,s.kt)("a",{parentName:"p",href:"/docs/scripting-reference/classes/base-classes/actor"},"Base Actor")," sur lui !"),(0,s.kt)("h2",{id:"nouvelle-classe-billboard"},"Nouvelle Classe: ",(0,s.kt)("a",{parentName:"h2",href:"/docs/scripting-reference/classes/billboard"},"Billboard")),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(54085).Z,width:"650",height:"175"})),(0,s.kt)("p",null,"Nous avons ajout\xe9 une nouvelle classe pour faire appara\xeetre des ",(0,s.kt)("strong",{parentName:"p"},"Billboards"),"! A Billboard is a 2D Material that will be rendered always facing the camera. Il est \xe9galement possible d'utiliser toutes les m\xe9thodes personnalis\xe9es de Paintable et de faire appara\xeetre des textures personnalis\xe9es. Vous pouvez modifier ses propri\xe9t\xe9s de mat\xe9riaux avec ",(0,s.kt)("a",{parentName:"p",href:"/docs/scripting-reference/classes/base-classes/paintable"},"Base Paintable")," ou m\xeame utiliser un mat\xe9riau de votre choix."),(0,s.kt)("p",null,"Comme les Billboards h\xe9ritent des Acteurs, vous pouvez changer leur emplacement, leur rotation, les attacher ou appeler n'importe quelle m\xe9thode de ",(0,s.kt)("a",{parentName:"p",href:"/docs/scripting-reference/classes/base-classes/actor"},"Base Actor")," sur eux !"),(0,s.kt)("h2",{id:"nouvelle-classe-melee"},"Nouvelle Classe: ",(0,s.kt)("a",{parentName:"h2",href:"/docs/scripting-reference/classes/melee"},"Melee")),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(67018).Z,width:"800",height:"216"})),(0,s.kt)("p",null,"Nous recevons une toute nouvelle classe tr\xe8s demand\xe9e : ",(0,s.kt)("strong",{parentName:"p"},"Melee"),"! La classe Melee arrive pour remplacer l'ancienne classe ",(0,s.kt)("strong",{parentName:"p"},"Item"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Melee")," est une nouvelle Classe (qui fonctionne exactement comme l'ancien ",(0,s.kt)("strong",{parentName:"p"},"Item"),") mais avec la capacit\xe9 d'attaquer avec. Il est possible d'ajouter des animations personnalis\xe9es, un temps de recharge et d'ajuster les d\xe9g\xe2ts de celles-ci. La physique des attaques est bas\xe9e sur l'animation de mani\xe8re proc\xe9durale, ce qui signifie que vous pouvez poignarder, taillader ou m\xeame frapper des objets en changeant l'animation et le coup sera bas\xe9 sur celle-ci !"),(0,s.kt)("p",null,"Les r\xe9sultats sont assez amusants, les coups/dommages affectent \xe9galement l'environnement dynamiquement \ud83d\ude0a"),(0,s.kt)("video",{controls:"true",allowfullscreen:"true"},(0,s.kt)("source",{src:"/videos/blog/november/melee.webm"})),(0,s.kt)("h2",{id:"am\xe9lioration-des-scripts"},"Am\xe9lioration des scripts"),(0,s.kt)("p",null,"Nous avons \xe9cout\xe9 votre demande et nous apportons enfin les nouvelles fonctionnalit\xe9s de scripting tant attendues !"),(0,s.kt)("h3",{id:"v\xe9ritable-hot-reload"},"V\xe9ritable Hot Reload"),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(96724).Z,width:"612",height:"176"})),(0,s.kt)("p",null,"Apr\xe8s plusieurs demandes, nous avons commenc\xe9 \xe0 impl\xe9menter une vraie fonctionnalit\xe9 de Hot Reload !"),(0,s.kt)("p",null,"Le vrai ",(0,s.kt)("strong",{parentName:"p"},"Hot Reload")," est une fonctionnalit\xe9 \xe9tonnante qui vous permet de charger un nouveau code de script sans devoir perdre tout l'\xe9tat de m\xe9moire actuel de vos Packages. Il fonctionne en chargeant les fichiers de script sur la VM Lua en cours d'ex\xe9cution."),(0,s.kt)("p",null,"Actuellement il fonctionne en le d\xe9clenchant manuellement dans la console :"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"package hotreload [NOM_DU_PACKAGE|all]\n")),(0,s.kt)("p",null,"Cela mettra \xe0 jour les clients avec la version plus r\xe9cente des fichiers et chargera les fichiers ",(0,s.kt)("inlineCode",{parentName:"p"},"Index.lua")," \xe0 partir des packages. Il conservera l'\xe9tat actuel de la m\xe9moire des paquets. Il d\xe9sabonnera \xe9galement tous les \xe9v\xe9nements enregistr\xe9s dans ce package."),(0,s.kt)("p",null,"Dans le futur, il serait possible d'ajouter un v\xe9rificateur en temps r\xe9el pour mettre \xe0 jour automatiquement les fichiers modifi\xe9s apr\xe8s les avoir enregistr\xe9s."),(0,s.kt)("h3",{id:"extension-des-classes"},"Extension des Classes"),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(9688).Z,width:"823",height:"319"})),(0,s.kt)("p",null,"L'extension et l'h\xe9ritage des Classes de nanos world constituent une nouvelle fonctionnalit\xe9 int\xe9ressante. ",(0,s.kt)("em",{parentName:"p"},"Ceci est toujours exp\xe9rimental et nous voulons recueillir vos commentaires et trouver les bogues restants.")),(0,s.kt)("p",null,"Il est maintenant possible d'",(0,s.kt)("strong",{parentName:"p"},"ajouter de nouvelles m\xe9thodes")," aux Classes de nanos world, ",(0,s.kt)("strong",{parentName:"p"},"Remplacer les M\xe9thodes existantes")," et m\xeame ",(0,s.kt)("strong",{parentName:"p"},"Remplacer ",(0,s.kt)("strong",{parentName:"strong"},"index et "),"newindex"),"."),(0,s.kt)("p",null,"L'ajout d'une nouvelle m\xe9thode \xe0 une classe est simple comme bonjour :"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},"-- Ajout d'une nouvelle m\xe9thode 'AddScore' \xe0 la classe Player\nfunction Player:AddScore(score)\n    self:SetValue(\"score\", self:GetValue(\"score\", 0) + score)\nend\n\n-- L'utiliser\nmy_player:AddScore(10)\n")),(0,s.kt)("p",null,"Lisez la documentation compl\xe8te ",(0,s.kt)("a",{parentName:"p",href:"/docs/core-concepts/scripting/extending-classes"},"ici"),"."),(0,s.kt)("h2",{id:"new-view-mode-topdown"},"New View Mode: TopDown"),(0,s.kt)("p",null,"We created a new native View Mode: ",(0,s.kt)("strong",{parentName:"p"},"TopDown"),"!"),(0,s.kt)("p",null,"This ViewMode allows you to fully control Characters from a TopDown perspective."),(0,s.kt)("p",null,"With just a single line:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},"my_character:SetViewMode(ViewMode.TopDown)\n")),(0,s.kt)("p",null,"nanos world becomes a completely different game, the mouse is now a crosshair which the Character aims to. Mechanics of picking up Weapons, grabbing Props and interacting with stuff was slightly modified to work with the ViewMode. Also driving is fully supported as well! \ud83e\udd29"),(0,s.kt)("p",null,"It also is possible to dynamically change the view mode and switch between them during game-play and also tweak settings such as camera distance and so on."),(0,s.kt)("video",{controls:"true",allowfullscreen:"true"},(0,s.kt)("source",{src:"/videos/blog/november/top-down.webm"})),(0,s.kt)("h2",{id:"new-camera-methods"},"New Camera Methods"),(0,s.kt)("p",null,"Player got a bunch of new Camera methods: ",(0,s.kt)("inlineCode",{parentName:"p"},"Player:SetCameraSocketOffset()"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"Player:SetCameraArmLength()"),"."),(0,s.kt)("p",null,"And also ability to detach and attach it to other actors (\ud83d\udc40 including Props): ",(0,s.kt)("inlineCode",{parentName:"p"},"Player:AttachCameraTo()")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"Player:ResetCamera()"),". It will attach including a Camera SpringArm component!"),(0,s.kt)("p",null,"Note: ",(0,s.kt)("strong",{parentName:"p"},"Spectate")," methods from ",(0,s.kt)("strong",{parentName:"p"},"Client")," has been moved to ",(0,s.kt)("strong",{parentName:"p"},"Player"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"Player:Spectate()"),"."),(0,s.kt)("h2",{id:"textrender-on-server-side"},(0,s.kt)("a",{parentName:"h2",href:"/docs/scripting-reference/classes/text-render"},"TextRender")," on Server Side"),(0,s.kt)("p",null,"Now the Class ",(0,s.kt)("inlineCode",{parentName:"p"},"TextRender")," now can be spawned on Server Side as well!"),(0,s.kt)("h2",{id:"other-changes"},"Other Changes"),(0,s.kt)("p",null,"Besides the major topics covered here, we've got several other new features which were been added during the month:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Added a new method for Character: ",(0,s.kt)("inlineCode",{parentName:"li"},"Character:Follow()")," which will make the AI follow other actor."),(0,s.kt)("li",{parentName:"ul"},"Added a new Utils method: ",(0,s.kt)("inlineCode",{parentName:"li"},"NanosUtils.Benchmark()")," which will take a function as parameter and test the performance of it."),(0,s.kt)("li",{parentName:"ul"},"Now ",(0,s.kt)("inlineCode",{parentName:"li"},"Subscribe")," will return the callback function (which can be used to Unsubscribe afterwards)."),(0,s.kt)("li",{parentName:"ul"},"Fixed tons of bugs, detailed information can be found in the Discord Changelog channel.")),(0,s.kt)("h2",{id:"unreal-engine-5"},"Unreal Engine 5"),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(38488).Z,width:"1200",height:"630"})),(0,s.kt)("p",null,"Lastly, it is already known we have a big objective of porting nanos world to Unreal Engine 5. Personally this is something I wanted to do as soon as possible because Unreal Engine 5 features are amazing, not to mention the publicity and marketing bonuses we would get for nanos world."),(0,s.kt)("p",null,"In this month, we decided to give a try: we tested porting nanos world to Unreal 5, at first we had some problems because of some Unreal modules have been completely renamed or even removed. And also we got some Unreal methods deprecated by the newer version, so we needed to update them and even reimplement some small stuff."),(0,s.kt)("p",null,"Currently Unreal Engine 4 uses PhysX physics and in Unreal 5 all the Physics Engine have been replaced by ",(0,s.kt)("a",{parentName:"p",href:"https://docs.unrealengine.com/5.0/en-US/PhysicsFeatures/ChaosVSPhysxOverview/"},"Unreal's Chaos"),", which is a new Engine replacing the NVIDIA's PhysX."),(0,s.kt)("p",null,"This made us need to disable Vehicles for this test, as Unreal vehicles are very dependent on the PhysX engine and I would need to reimplement them using the new Chaos API for vehicles (I believe that our Vehicles API will need to change a bit as well once we fully update it)."),(0,s.kt)("p",null,"But after half of dozen adaptions and disabled Vehicles, the results were surprisingly good! nanos world worked on Unreal Engine 5! Personally I got very happy and proud that the biggest problems I had was updating deprecate methods and updating some Unreal modules, thanks to the architecture developed so far in nanos world!"),(0,s.kt)("h3",{id:"graphical-results"},"Graphical Results"),(0,s.kt)("p",null,"nanos world on Unreal Engine 5 is beautiful, joying with Lumen and Global Illumination is really fun!"),(0,s.kt)("p",null,"There were some graphical artifacts (such as changing the time of day too fast causing a delay/ghosting effect), but I believe they will improve them for the final Unreal Engine 5 version."),(0,s.kt)("p",null,"Check it out some screenshots taken during the tests trying the Global Illumination and Lumen:"),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(78491).Z,width:"1919",height:"1079"})),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(52168).Z,width:"1916",height:"1079"})),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(13713).Z,width:"1919",height:"1079"})),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(922).Z,width:"1919",height:"1079"})),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(77929).Z,width:"1919",height:"1079"})),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(37681).Z,width:"1919",height:"1079"})),(0,s.kt)("h3",{id:"stability"},"Stability"),(0,s.kt)("p",null,"Unfortunately the stability was extremely bad. It didn't surprise me too much as Unreal Engine 5 is on Early Access, so bugs and crashes would happen. Several random crashes occurred during gameplay, I could notice mostly of them were caused by the new Chaos Engine (related to Physics)."),(0,s.kt)("h3",{id:"what-now"},"What now?"),(0,s.kt)("p",null,"I was really happy in being able to port nanos world to Unreal Engine 5, this attempt made us be sure that this would be possible. But I decided that currently is not time yet. During the tests we had several crashes (random ones, related to the low-level of Unreal, mainly coming from Chaos Engine and from Water) that made us conclude that is better to wait a better stable version because it makes nanos world really unplayable. Those random crashes are extremely bad as sometimes it's hard to know if it's my or Unreal's fault."),(0,s.kt)("p",null,"Fortunately, with this we could prove ourselves that nanos world will, when the time comes, be compatible and updated to Unreal Engine 5!"))}u.isMDXComponent=!0},54085:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/billboard-2f990d1836614cb4911de0037063db6a.jpg"},10400:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/decal-1c2b5a43f92764fef8aef1ef52ab55a8.jpg"},9688:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/extending-8581420412041d85bb4dc0d7f9d771e6.jpg"},96724:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/hotreload-4253a61702f6eb5248f5625c777c2633.jpg"},67018:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/melee-2a6d5eba17ca2d388e7feab8cca626d7.jpg"},922:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ue5-inside-flash-01-babc950dd37dfd1eb1c79fb29e202715.jpg"},77929:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ue5-inside-flash-02-25a13edcbc3eaa5cdc6f16e70b8bea77.jpg"},37681:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ue5-inside-flash-03-ca53b17e598a56ef52d64acb758ecc8a.jpg"},52168:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ue5-inside-gas-01-732adef7d75375ac86d95f4507b828fe.jpg"},13713:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ue5-inside-gas-02-b68679c2e0428ea57fb6c283f798f50e.jpg"},78491:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ue5-outside-053681aeb9b681e37261b9f7b9b4b531.jpg"},38488:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ue5-4c7bf9a20188f2814f19bef2abfc392f.jpg"}}]);