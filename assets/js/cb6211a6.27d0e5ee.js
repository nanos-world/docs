"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[3091],{35130:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(85893),i=n(11151);const a={title:"Gravity Gun",description:"How to create a simple Gravity Gun to move Props around",tags:["tutorial-example","scripting"]},r=void 0,s={id:"getting-started/tutorials-and-examples/gravity-gun",title:"Gravity Gun",description:"How to create a simple Gravity Gun to move Props around",source:"@site/docs/getting-started/tutorials-and-examples/gravity-gun.md",sourceDirName:"getting-started/tutorials-and-examples",slug:"/getting-started/tutorials-and-examples/gravity-gun",permalink:"/docs/next/getting-started/tutorials-and-examples/gravity-gun",draft:!1,unlisted:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/getting-started/tutorials-and-examples/gravity-gun.md",tags:[{inline:!0,label:"tutorial-example",permalink:"/docs/next/tags/tutorial-example"},{inline:!0,label:"scripting",permalink:"/docs/next/tags/scripting"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1735814927e3,frontMatter:{title:"Gravity Gun",description:"How to create a simple Gravity Gun to move Props around",tags:["tutorial-example","scripting"]},sidebar:"main",previous:{title:"Fireworks",permalink:"/docs/next/getting-started/tutorials-and-examples/fireworks"},next:{title:"Hosting Server 4Free - Google Cloud",permalink:"/docs/next/getting-started/tutorials-and-examples/hosting-server-4free-gcp"}},c={},l=[{value:"Final result",id:"final-result",level:3},{value:"Code Snippet",id:"code-snippet",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components},{VideoExternal:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VideoExternal",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"How to create a simple Gravity Gun to move Props around."}),"\n",(0,o.jsx)(t.h3,{id:"final-result",children:"Final result"}),"\n",(0,o.jsx)(n,{path:"/docs/tutorials/gravity-gun.webm"}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsxs)(t.p,{children:["You can now find a fully working Gravity Gun in the ",(0,o.jsx)(t.a,{href:"https://github.com/nanos-world/nanos-world-sandbox",children:"Sandbox"})," game-mode!"]})}),"\n",(0,o.jsx)(t.h3,{id:"code-snippet",children:"Code Snippet"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-lua",metastring:'title="Server/Index.lua"',children:'-- Spawns some Props and Static Meshes\n-- (note: Static Meshes don\'t have physics so they will freeze where released automatically)\nlocal p_sphere = Prop(Vector(200, 0, 200), Rotator(), "nanos-world::SM_Sphere")\nlocal p_cone = Prop(Vector(200, 0, 200), Rotator(), "nanos-world::SM_Cone")\nlocal sm_cube = StaticMesh(Vector(100, 0, 200), Rotator(), "nanos-world::SM_Cube")\nlocal sm_cylinder = StaticMesh(Vector(300, 0, 200), Rotator(), "nanos-world::SM_Cylinder")\n\n-- Subscribe for Client\'s custom event, for when the object is grabbed/dropped\nEvents.SubscribeRemote("PickUp", function(player, object, is_grabbing)\n    object:SetGravityEnabled(not is_grabbing)\n    object:TranslateTo(object:GetLocation(), 0)\nend)\n\n-- Subscribe for Client\'s custom event, to update the position of the object he is grabbing\nEvents.SubscribeRemote("UpdateObjectPosition", function(player, object, location)\n    object:TranslateTo(location, 0.1)\nend)\n'})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-lua",metastring:'title="Client/Index.lua"',children:'-- Global Variables\npicking_object = nil\ndistance_trace_object = nil\ndistance = 200\n\n-- Sets the color of Highlighing at index 1\nClient.SetHighlightColor(Color(0, 20, 20, 1.5), 1, HighlightMode.OnlyVisible)\n\n-- When Player clicks\nInput.Subscribe("MouseUp", function(key_name)\n\n    -- If mouse was left button\n    if (key_name == "LeftMouseButton") then\n\n        -- If is grabbing something, drop it\n        if (picking_object) then\n            -- Calls server to re-enable gravity (if possible) and update it\'s last position\n            Events.CallRemote("PickUp", picking_object, false)\n\n            -- Disables the highlight\n            picking_object:SetHighlightEnabled(false)\n\n            picking_object = nil\n            return\n        end\n\n        -- Get the camera location in 3D World Space\n        local viewport_2D_center = Viewport.GetViewportSize() / 2\n        local viewport_3D = Viewport.DeprojectScreenToWorld(viewport_2D_center)\n        local start_location = viewport_3D.Position\n\n        -- Gets the end location of the trace (5000 units ahead)\n        local trace_max_distance = 5000\n        local end_location = viewport_3D.Position + viewport_3D.Direction * trace_max_distance\n\n        -- Determine at which object we will be tracing for (WorldStatic - StaticMeshes - and PhysicsBody - Props)\n        local collision_trace = CollisionChannel.WorldStatic | CollisionChannel.PhysicsBody\n\n        -- Sets the trace modes (we want it to return Entity and Draws a Debug line)\n        local trace_mode = TraceMode.ReturnEntity | TraceMode.DrawDebug\n\n        -- Do the Trace\n        local trace_result = Trace.LineSingle(start_location, end_location, collision_trace, trace_mode)\n\n        -- If hit something and hit an Entity\n        if (trace_result.Success and trace_result.Entity) then\n\n            -- Sets the new picked up object\n            picking_object = trace_result.Entity\n\n            -- Calculates the offset of the hit and the center of the object\n            distance_trace_object = picking_object:GetLocation() - trace_result.Location\n\n            -- Calculates the distance of the object and the camera\n            distance = trace_result.Location:Distance(viewport_3D.Position)\n\n            -- Calls remote to disable gravity of this object (if has)\n            Events.CallRemote("PickUp", picking_object, true)\n\n            -- Enable Highlighting on index 1\n            picking_object:SetHighlightEnabled(true, 1)\n        end\n    elseif (key_name == "MouseScrollUp") then\n        -- If mouse scroll, updates the Distance of the object from the camera\n        distance = distance + 25\n    elseif (key_name == "MouseScrollDown") then\n        -- If mouse scroll, updates the Distance of the object from the camera\n        distance = distance - 25\n        if (distance < 100) then distance = 100 end\n    end\nend)\n\nClient.Subscribe("Tick", function(delta_time)\n    -- On Tick, updates the Position of the object, based on it\'s distance and camera rotation\n    if (picking_object == nil) then return end\n\n    local player = Client.GetLocalPlayer()\n    if (player == nil) then return end\n\n    -- Get the camera location in 3D World Space\n    local viewport_2D_center = Viewport.GetViewportSize() / 2\n    local viewport_3D = Viewport.DeprojectScreenToWorld(viewport_2D_center)\n    local start_location = viewport_3D.Position\n\n    -- Gets the new object location\n    -- (camera direction * \'distance\' units ahead + object offset from first Hit to keep it relative)\n    local end_location = (viewport_3D.Position + viewport_3D.Direction * distance) + distance_trace_object\n\n    -- Calls remote to update it\'s location\n    Events.CallRemote("UpdateObjectPosition", picking_object, end_location)\nend)\n'})})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>r});var o=n(67294);const i={},a=o.createContext(i);function r(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);