"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[4085],{86737:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>r});var a=n(85893),s=n(11151);const i={title:"Weapon Reload Animations",description:"How to create custom Weapon Reload Animations",tags:["assets","weapon","animations"],keywords:["animation","weapon","unreal"]},o=void 0,d={id:"assets-modding/creating-assets/animations/weapon-reload-animations",title:"Weapon Reload Animations",description:"How to create custom Weapon Reload Animations",source:"@site/docs/assets-modding/creating-assets/animations/weapon-reload-animations.md",sourceDirName:"assets-modding/creating-assets/animations",slug:"/assets-modding/creating-assets/animations/weapon-reload-animations",permalink:"/pt-BR/docs/next/assets-modding/creating-assets/animations/weapon-reload-animations",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/pt-BR",tags:[{label:"assets",permalink:"/pt-BR/docs/next/tags/assets"},{label:"weapon",permalink:"/pt-BR/docs/next/tags/weapon"},{label:"animations",permalink:"/pt-BR/docs/next/tags/animations"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1700127464,formattedLastUpdatedAt:"16 de nov. de 2023",frontMatter:{title:"Weapon Reload Animations",description:"How to create custom Weapon Reload Animations",tags:["assets","weapon","animations"],keywords:["animation","weapon","unreal"]},sidebar:"main",previous:{title:"Importing Mixamo Animations",permalink:"/pt-BR/docs/next/assets-modding/creating-assets/animations/characters/mixamo-animations"},next:{title:"Creating Custom Maps",permalink:"/pt-BR/docs/next/assets-modding/creating-assets/maps-and-levels/importing-maps"}},l={},r=[{value:"Step 1: Create an Animation Montage with your Animation",id:"step-1-create-an-animation-montage-with-your-animation",level:2},{value:"Step 2: Add Montage Notifies to the Montage",id:"step-2-add-montage-notifies-to-the-montage",level:2},{value:"Step 3: Define the correct Name",id:"step-3-define-the-correct-name",level:2},{value:"Examples",id:"examples",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"How to create custom Weapon Reload Animations."}),"\n",(0,a.jsx)(t.p,{children:"Now it is possible to create custom reload animations for nanos world! To make it work you just need to setup some Notifies at the position you want the reload event occurs."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(17988).Z+"",width:"1145",height:"636"})}),"\n",(0,a.jsx)(t.h2,{id:"step-1-create-an-animation-montage-with-your-animation",children:"Step 1: Create an Animation Montage with your Animation"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(6666).Z+"",width:"1914",height:"981"})}),"\n",(0,a.jsx)(t.p,{children:"For that, you can just right click any Animation Sequence and Create a new Animation Montage like this:"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(20563).Z+"",width:"1220",height:"885"})}),"\n",(0,a.jsx)(t.h2,{id:"step-2-add-montage-notifies-to-the-montage",children:"Step 2: Add Montage Notifies to the Montage"}),"\n",(0,a.jsx)(t.p,{children:"At the bottom (where the timeline is) it is possible to add new Animation Notifies, these are events that trigger special codes to handle the reload."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(12643).Z+"",width:"1158",height:"310"})}),"\n",(0,a.jsx)(t.p,{children:"After adding a notify, you can move it to where you want, note you can set the Name of it in the top right corner:"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(14137).Z+"",width:"1907",height:"936"})}),"\n",(0,a.jsx)(t.h2,{id:"step-3-define-the-correct-name",children:"Step 3: Define the correct Name"}),"\n",(0,a.jsx)(t.p,{children:"There are some special names which can be used in there that will trigger special actions for reloading the weapon"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{style:{textAlign:"left"},children:"Notify Name"}),(0,a.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"left"},children:(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"Reload_Load"})})}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"This is the main notify, which will trigger the actual reload function internally and update the weapon's ammo. This will destroy the Magazine StaticMesh spawned in the left hand."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"left"},children:(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"Reload_Unload"})})}),(0,a.jsxs)(t.td,{style:{textAlign:"left"},children:["This will hide the Weapon's ",(0,a.jsx)(t.code,{children:"b_gun_mag"})," bone and spawn a Magazine StaticMesh attached to the left hand.",(0,a.jsx)("br",{}),"The magazine mesh can be set with ",(0,a.jsxs)(t.a,{href:"/pt-BR/docs/next/scripting-reference/classes/weapon#setmagazinemesh",children:["Weapon",":SetMagazineMesh","()"]}),"."]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"left"},children:(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"Reload_UnloadAndDetach"})})}),(0,a.jsxs)(t.td,{style:{textAlign:"left"},children:["This will hide the Weapon's ",(0,a.jsx)(t.code,{children:"b_gun_mag"}),", spawn the Magazine StaticMesh at the bone location and immediately detach it."]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"left"},children:(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"Reload_SpawnMagazine"})})}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"This will just spawn the Magazine StaticMesh attached to the left hand."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"left"},children:(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"Reload_DropMagazine"})})}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"This will drop the Magazine StaticMesh from the left hand."})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsxs)(t.p,{children:["On Shotguns or Revolvers, you usually will have only ",(0,a.jsx)(t.code,{children:"Reload_Load"})," being called, as you don't have Magazine StaticMeshes and is only adding new bullets into it."]}),"\n",(0,a.jsxs)(t.p,{children:["On Pistols, you may want to call ",(0,a.jsx)(t.code,{children:"Reload_UnloadAndDetach"}),", ",(0,a.jsx)(t.code,{children:"Reload_SpawnMagazine"})," and ",(0,a.jsx)(t.code,{children:"Reload_Load"})," respectively to just release the Magazine from the weapon, then spawn a new one in the hand and finally do the load."]}),"\n",(0,a.jsxs)(t.p,{children:["On Rifles, you may want to call ",(0,a.jsx)(t.code,{children:"Reload_Unload"}),", ",(0,a.jsx)(t.code,{children:"Reload_DropMagazine"}),", ",(0,a.jsx)(t.code,{children:"Reload_SpawnMagazine"})," and ",(0,a.jsx)(t.code,{children:"Reload_Load"})," respectively to hide and spawn a Magazine in the left hand, then after few ms drop it (throwing it back), then spawning a new Magazine in the hand and attaching it to the weapon finishing the load."]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},17988:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/weapon-animations-01-1922cc87f13604ac5d76b84abcdb2375.webp"},6666:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/weapon-animations-02-e3aa4c3875e7cd46e5a575934ea768aa.webp"},12643:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/weapon-animations-03-667b1c561b537fcb77a31e69e58f88ef.webp"},20563:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/weapon-animations-04-48d814b21e0df76ac9cb51ccc771d246.webp"},14137:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/weapon-animations-05-e0a618ceab20525a9de184c47ed13d1a.webp"},11151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>o});var a=n(67294);const s={},i=a.createContext(s);function o(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);