"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[2049],{67713:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var n=t(85893),s=t(11151);const i={title:"\ud83e\udea4 Trigger",description:"A Trigger class is a utility class to trigger events when any Entity enters an Area",sidebar_position:0,tags:["class"]},o=void 0,a={id:"scripting-reference/classes/trigger",title:"\ud83e\udea4 Trigger",description:"A Trigger class is a utility class to trigger events when any Entity enters an Area",source:"@site/versioned_docs/version-latest/scripting-reference/classes/trigger.mdx",sourceDirName:"scripting-reference/classes",slug:"/scripting-reference/classes/trigger",permalink:"/fr/docs/scripting-reference/classes/trigger",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/fr",tags:[{label:"class",permalink:"/fr/docs/tags/class"}],version:"latest",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1700127464,formattedLastUpdatedAt:"16 nov. 2023",sidebarPosition:0,frontMatter:{title:"\ud83e\udea4 Trigger",description:"A Trigger class is a utility class to trigger events when any Entity enters an Area",sidebar_position:0,tags:["class"]},sidebar:"main",previous:{title:"\ud83c\udd92 TextRender",permalink:"/fr/docs/scripting-reference/classes/text-render"},next:{title:"\ud83d\udee5\ufe0f VehicleWater",permalink:"/fr/docs/scripting-reference/classes/vehicle-water"}},c={},l=[{value:"\ud83c\udf92\xa0Examples",id:"examples",level:2},{value:"\ud83d\udee0\xa0Constructors",id:"constructors",level:2},{value:"\ud83d\uddff\xa0Static Functions",id:"static-functions",level:2},{value:"\ud83e\udda0\xa0Functions",id:"functions",level:2},{value:"\ud83d\ude80\xa0Events",id:"events",level:2}];function g(e){const r={code:"code",h2:"h2",pre:"pre",...(0,s.a)(),...e.components},{ConstructorDeclaration:t,EventsDeclaration:i,ExamplesDeclaration:o,FunctionsDeclaration:a,HeaderDeclaration:c,StaticFunctionsDeclaration:l}=r;return t||u("ConstructorDeclaration",!0),i||u("EventsDeclaration",!0),o||u("ExamplesDeclaration",!0),a||u("FunctionsDeclaration",!0),c||u("HeaderDeclaration",!0),l||u("StaticFunctionsDeclaration",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c,{type:"Class",name:"Trigger",image:"/img/docs/trigger.webp"}),"\n",(0,n.jsx)(r.h2,{id:"examples",children:"\ud83c\udf92\xa0Examples"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-lua",children:'local sphere_trigger = Trigger(Vector(-200, 100, 500), Rotator(), Vector(100), TriggerType.Sphere, true, Color(1, 0, 0))\n\nsphere_trigger:Subscribe("BeginOverlap", function(trigger, actor_triggering)\n    Console.Log("Something entered my Sphere Trigger")\nend)\n\nlocal box_trigger = Trigger(Vector(300, 200, 500), Rotator(0, 45, 0), Vector(150, 150, 150), TriggerType.Box, true, Color(0, 1, 0))\n\nbox_trigger:Subscribe("BeginOverlap", function(trigger, actor_triggering)\n    Console.Log("Something entered my Box Trigger")\nend)\n\nbox_trigger:Subscribe("EndOverlap", function(trigger, actor_triggering)\n    Console.Log("Something left my Box Trigger")\nend)\n'})}),"\n",(0,n.jsx)(o,{type:"Class",name:"Trigger"}),"\n",(0,n.jsx)(r.h2,{id:"constructors",children:"\ud83d\udee0\xa0Constructors"}),"\n",(0,n.jsx)(t,{type:"Class",name:"Trigger"}),"\n",(0,n.jsx)(r.h2,{id:"static-functions",children:"\ud83d\uddff\xa0Static Functions"}),"\n",(0,n.jsx)(l,{type:"Class",name:"Trigger"}),"\n",(0,n.jsx)(r.h2,{id:"functions",children:"\ud83e\udda0\xa0Functions"}),"\n",(0,n.jsx)(a,{type:"Class",name:"Trigger"}),"\n",(0,n.jsx)(r.h2,{id:"events",children:"\ud83d\ude80\xa0Events"}),"\n",(0,n.jsx)(i,{type:"Class",name:"Trigger"})]})}function d(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(g,{...e})}):g(e)}function u(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,r,t)=>{t.d(r,{Z:()=>a,a:()=>o});var n=t(67294);const s={},i=n.createContext(s);function o(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);