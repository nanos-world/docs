"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[5240],{18664:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=s(85893),a=s(11151);const o={title:"Weapon Scope",description:"This sample code shows how to attach custom sights meshes into a Weapon and work as real scopes.",tags:["tutorial-example","scripting","assets"]},i=void 0,c={id:"getting-started/tutorials-and-examples/weapon-scope",title:"Weapon Scope",description:"This sample code shows how to attach custom sights meshes into a Weapon and work as real scopes.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/getting-started/tutorials-and-examples/weapon-scope.md",sourceDirName:"getting-started/tutorials-and-examples",slug:"/getting-started/tutorials-and-examples/weapon-scope",permalink:"/de/docs/next/getting-started/tutorials-and-examples/weapon-scope",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/de",tags:[{inline:!0,label:"tutorial-example",permalink:"/de/docs/next/tags/tutorial-example"},{inline:!0,label:"scripting",permalink:"/de/docs/next/tags/scripting"},{inline:!0,label:"assets",permalink:"/de/docs/next/tags/assets"}],version:"current",frontMatter:{title:"Weapon Scope",description:"This sample code shows how to attach custom sights meshes into a Weapon and work as real scopes.",tags:["tutorial-example","scripting","assets"]},sidebar:"main",previous:{title:"Weapon Flashlight",permalink:"/de/docs/next/getting-started/tutorials-and-examples/weapon-flashlight"},next:{title:"X-Ray & Highlight",permalink:"/de/docs/next/getting-started/tutorials-and-examples/x-ray-and-highlight"}},r={},d=[{value:"Some Static Mesh assets which can be used as scope:",id:"some-static-mesh-assets-which-can-be-used-as-scope",level:2}];function l(e){const t={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"This sample code shows how to attach custom sights meshes into a Weapon and work as real scopes."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(42146).Z+"",width:"1918",height:"1022"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lua",metastring:'title="Server/Index.lua"',children:'-- Spawning the AK47\nlocal my_ak47 = NanosWorldWeapons.AK47(Vector(1035, 154, 300), Rotator())\n\n-- Adds a StaticMesh Attached with a RedDot mesh into AK47 on sight_socket bone from AK47 model. As our AK47 model already\n-- have a bone named sight_socket at the right location, we can just attach to it, otherwise we would\n-- need to set it\'s Attach Location to where the RedDot fits and using bone name as empty ""\nmy_ak47:AddStaticMeshAttached("sight", "nanos-world::SM_T4_Sight", "sight_socket")\n\n-- Makes the FOV multiplier reduces by 0.35x when ADS (aiming)\nmy_ak47.SightFOVMultiplier = 0.35\n\n-- Sets the ADS transform offset to fit the RedDot center position,\n-- each weapon will need a different offset to fit it\'s sight. AK47 + RedDot best fit is Z = -15.9\nmy_ak47:SetSightTransform(Vector(0, 0, -15.9), Rotator(0, 0, 0))\n'})}),"\n",(0,n.jsx)(t.h2,{id:"some-static-mesh-assets-which-can-be-used-as-scope",children:"Some Static Mesh assets which can be used as scope:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"nanos-world::SM_T4_Sight"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"nanos-world::SM_Vertgrip"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"nanos-world::SM_Suppressor"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"nanos-world::SM_Scope_25x56_X"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},42146:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/weapon-scope-abab608d65ff37a5b3f3c71736ec1cc5.webp"},11151:(e,t,s)=>{s.d(t,{Z:()=>c,a:()=>i});var n=s(67294);const a={},o=n.createContext(a);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);