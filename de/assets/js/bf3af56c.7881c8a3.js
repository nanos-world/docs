"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[6134],{34948:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var i=t(85893),r=t(11151);const s={title:"Spuren & Raycasting",description:"Wie man Traces & Raycasting benutzt, um Weltinformationen in der Laufzeit zu sammeln",sidebar_position:7,tags:["scripting"]},a=void 0,o={id:"core-concepts/scripting/traces-and-raycasting",title:"Spuren & Raycasting",description:"Wie man Traces & Raycasting benutzt, um Weltinformationen in der Laufzeit zu sammeln",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/core-concepts/scripting/traces-and-raycasting.md",sourceDirName:"core-concepts/scripting",slug:"/core-concepts/scripting/traces-and-raycasting",permalink:"/de/docs/next/core-concepts/scripting/traces-and-raycasting",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/de",tags:[{inline:!0,label:"scripting",permalink:"/de/docs/next/tags/scripting"}],version:"current",sidebarPosition:7,frontMatter:{title:"Spuren & Raycasting",description:"Wie man Traces & Raycasting benutzt, um Weltinformationen in der Laufzeit zu sammeln",sidebar_position:7,tags:["scripting"]},sidebar:"main",previous:{title:"K\xfcnstliche Intelligenz",permalink:"/de/docs/next/core-concepts/scripting/artificial-intelligence"},next:{title:"Extending Classes",permalink:"/de/docs/next/core-concepts/scripting/extending-classes"}},c={},l=[];function d(e){const n={a:"a",admonition:"admonition",code:"code",img:"img",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Wie man Traces & Raycasting benutzt, um Informationen der Welt in der Laufzeit zu sammeln."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Traces"})," bieten eine Methode, um in deinen Karten herauszugreifen und Feedback zu erhalten, was in einem Liniensegment vorhanden ist. You use them by providing two end points (a start and end location) and the physics system \u201ctraces\u201d a line segment between those points, reporting any Actors that it hits. Leiterbahnen sind im Wesentlichen identisch mit ",(0,i.jsx)(n.strong,{children:"Raycasts"})," oder ",(0,i.jsx)(n.strong,{children:"Raytraces"})," in anderen Softwarepaketen."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(39341).Z+"",width:"1152",height:"435"})}),"\n",(0,i.jsx)(n.p,{children:"Das folgende Beispiel zeigt dir, wie du was bekommst und wohin der Spieler schaust."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",metastring:'title="Client/Index.lua"',children:'-- Traces at each 100ms\nTimer.SetInterval(function()\n    -- Gets the middle of the screen\n    local viewport_2D_center = Viewport.GetViewportSize() / 2\n\n    -- Deprojects to get the 3D Location for the middle of the screen\n    local viewport_3D = Viewport.DeprojectScreenToWorld(viewport_2D_center)\n\n    -- Makes a trace with the 3D Location and it\'s direction multiplied by 5000\n    -- Meaning it will trace 5000 units in that direction\n    local trace_max_distance = 5000\n\n    local start_location = viewport_3D.Position\n    local end_location = viewport_3D.Position + viewport_3D.Direction * trace_max_distance\n\n    -- Determine at which object we will be tracing for (WorldStatic - StaticMeshes - and PhysicsBody - Props)\n    local collision_trace = CollisionChannel.WorldStatic | CollisionChannel.PhysicsBody\n\n    -- Sets the trace modes (we want it to return Entity and Draws a Debug line)\n    local trace_mode = TraceMode.ReturnEntity | TraceMode.DrawDebug\n\n    -- Last parameter as true means it will draw a Debug Line in the traced segment\n    local trace_result = Trace.LineSingle(start_location, end_location, collision_trace, trace_mode)\n\n    -- If hit something draws a Debug Point at the location\n    if (trace_result.Success) then\n\n        -- Makes the point Red or Green if hit an Actor\n        local color = Color(1, 0, 0) -- Red\n\n        if (trace_result.Entity) then\n            color = Color(0, 1, 0) -- Green\n\n            -- Here you can check which actor you hit like\n            -- if (trace_result.Entity:GetType() == "Character") then ...\n        end\n\n        -- Draws a Debug Point at the Hit location for 5 seconds with size 10\n        Debug.DrawPoint(trace_result.Location, color, 5, 10)\n    end\nend, 100)\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["As you could see, we can pass bit-wise operators to Trace for more than one ",(0,i.jsx)(n.a,{href:"/de/docs/next/scripting-reference/glossary/enums#collisionchannel",children:"CollisionChannel"})," at once! Benutzen Sie ",(0,i.jsx)(n.code,{children:"|"})," zwischen den ",(0,i.jsx)(n.strong,{children:"CollisionChannels"})," , um dies zu erreichen."]})})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},39341:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/traces-raycasting-fad2ddd4424e6c9b19e682b88acf4371.webp"},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var i=t(67294);const r={},s=i.createContext(r);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);