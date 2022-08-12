"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[4603],{3905:function(e,t,s){s.d(t,{Zo:function(){return h},kt:function(){return u}});var n=s(67294);function r(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function a(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function o(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?a(Object(s),!0).forEach((function(t){r(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function l(e,t){if(null==e)return{};var s,n,r=function(e,t){if(null==e)return{};var s,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)s=a[n],t.indexOf(s)>=0||(r[s]=e[s]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)s=a[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(r[s]=e[s])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),s=t;return e&&(s="function"==typeof e?e(t):o(o({},t),e)),s},h=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var s=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),d=c(s),u=r,m=d["".concat(i,".").concat(u)]||d[u]||p[u]||a;return s?n.createElement(m,o(o({ref:t},h),{},{components:s})):n.createElement(m,o({ref:t},h))}));function u(e,t){var s=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=s.length,o=new Array(a);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=s[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,s)}d.displayName="MDXCreateElement"},79331:function(e,t,s){s.r(t),s.d(t,{assets:function(){return h},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var n=s(83117),r=s(80102),a=(s(67294),s(3905)),o=["components"],l={title:"Vehicles Meshes",description:"How to create your own Vehicles",tags:["assets","vehicles","skeletal-meshes"],keywords:["vehicle","unreal"]},i=void 0,c={unversionedId:"assets-modding/creating-assets/skeletal-meshes/vehicles-meshes",id:"assets-modding/creating-assets/skeletal-meshes/vehicles-meshes",title:"Vehicles Meshes",description:"How to create your own Vehicles",source:"@site/docs/assets-modding/creating-assets/skeletal-meshes/vehicles-meshes.md",sourceDirName:"assets-modding/creating-assets/skeletal-meshes",slug:"/assets-modding/creating-assets/skeletal-meshes/vehicles-meshes",permalink:"/docs/next/assets-modding/creating-assets/skeletal-meshes/vehicles-meshes",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/assets-modding/creating-assets/skeletal-meshes/vehicles-meshes.md",tags:[{label:"assets",permalink:"/docs/next/tags/assets"},{label:"vehicles",permalink:"/docs/next/tags/vehicles"},{label:"skeletal-meshes",permalink:"/docs/next/tags/skeletal-meshes"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1660331302,formattedLastUpdatedAt:"Aug 12, 2022",frontMatter:{title:"Vehicles Meshes",description:"How to create your own Vehicles",tags:["assets","vehicles","skeletal-meshes"],keywords:["vehicle","unreal"]},sidebar:"main",previous:{title:"Characters Meshes",permalink:"/docs/next/assets-modding/creating-assets/skeletal-meshes/characters-meshes"},next:{title:"Weapons Meshes",permalink:"/docs/next/assets-modding/creating-assets/skeletal-meshes/weapons-meshes"}},h={},p=[{value:"Preparing a Skeletal Mesh",id:"preparing-a-skeletal-mesh",level:2},{value:"Exporting the Vehicle",id:"exporting-the-vehicle",level:2}],d={toc:p};function u(e){var t=e.components,l=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Vehicles in nanos world implement Unreal's ",(0,a.kt)("a",{parentName:"p",href:"https://docs.unrealengine.com/4.27/en-US/InteractiveExperiences/Vehicles/"},"Wheeled Vehicle"),". The base Mesh of a vehicle is a ",(0,a.kt)("strong",{parentName:"p"},"Skeletal Mesh"),"."),(0,a.kt)("h2",{id:"preparing-a-skeletal-mesh"},"Preparing a Skeletal Mesh"),(0,a.kt)("p",null,'There is no secret to import a Vehicle Skeletal Mesh to nanos world. Any Skeletal Mesh with any Skeleton will work. The only "rule" is to it have 4 wheels bones, so nanos world Vehicle systems can properly rotate them.'),(0,a.kt)("p",null,"Take a look on one of the default nanos world Vehicles Skeleton:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:s(51130).Z,width:"1533",height:"914"})),(0,a.kt)("p",null,"It has only 4 bones behind the root, for each Wheel: ",(0,a.kt)("inlineCode",{parentName:"p"},"Wheel_Front_Left"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Wheel_Front_Right"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Wheel_Rear_Left")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Wheel_Rear_Right"),". Yours don't need to follow this naming, as the Wheel Bone names are set through Lua."),(0,a.kt)("h2",{id:"exporting-the-vehicle"},"Exporting the Vehicle"),(0,a.kt)("p",null,"The Exporting process follows the usual process of exporting assets to nanos world. Please follow the ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/assets-modding/creating-assets/importing-assets"},"Importing Custom Assets")," Guide."))}u.isMDXComponent=!0},51130:function(e,t,s){t.Z=s.p+"assets/images/import-vehicles-01-15246f23e0b4fdd0767c10d8badd5889.jpg"}}]);