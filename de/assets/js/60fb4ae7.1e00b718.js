"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[3993],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var s=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,s,n=function(e,t){if(null==e)return{};var a,s,n={},r=Object.keys(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=s.createContext({}),c=function(e){var t=s.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return s.createElement(i.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(a),m=n,k=p["".concat(i,".").concat(m)]||p[m]||h[m]||r;return a?s.createElement(k,o(o({ref:t},d),{},{components:a})):s.createElement(k,o({ref:t},d))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<r;c++)o[c]=a[c];return s.createElement.apply(null,o)}return s.createElement.apply(null,a)}m.displayName="MDXCreateElement"},71488:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var s=a(87462),n=(a(67294),a(3905));const r={title:"Characters Meshes",description:"How to correctly import custom Models into nanos world",tags:["assets","characters","skeletal-meshes"],keywords:["mannequin","character","skeleton","mesh","unreal"]},o=void 0,l={unversionedId:"assets-modding/creating-assets/skeletal-meshes/characters-meshes",id:"assets-modding/creating-assets/skeletal-meshes/characters-meshes",title:"Characters Meshes",description:"How to correctly import custom Models into nanos world",source:"@site/docs/assets-modding/creating-assets/skeletal-meshes/characters-meshes.md",sourceDirName:"assets-modding/creating-assets/skeletal-meshes",slug:"/assets-modding/creating-assets/skeletal-meshes/characters-meshes",permalink:"/de/docs/next/assets-modding/creating-assets/skeletal-meshes/characters-meshes",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/de",tags:[{label:"assets",permalink:"/de/docs/next/tags/assets"},{label:"characters",permalink:"/de/docs/next/tags/characters"},{label:"skeletal-meshes",permalink:"/de/docs/next/tags/skeletal-meshes"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1682969002,formattedLastUpdatedAt:"1. Mai 2023",frontMatter:{title:"Characters Meshes",description:"How to correctly import custom Models into nanos world",tags:["assets","characters","skeletal-meshes"],keywords:["mannequin","character","skeleton","mesh","unreal"]},sidebar:"main",previous:{title:"Static Meshes",permalink:"/de/docs/next/assets-modding/creating-assets/static-meshes/"},next:{title:"Vehicles Meshes",permalink:"/de/docs/next/assets-modding/creating-assets/skeletal-meshes/vehicles-meshes"}},i={},c=[{value:"Tips for integrating Skeletal Meshes with nanos world Character",id:"tips-for-integrating-skeletal-meshes-with-nanos-world-character",level:2},{value:"1. Use nanos world Skeleton SKEL_Mannequin",id:"1-use-nanos-world-skeleton-skel_mannequin",level:3},{value:"Right click on your mesh and select to assign a Skeleton",id:"right-click-on-your-mesh-and-select-to-assign-a-skeleton",level:4},{value:"Selecting SKEL_Mannequin and pressing Accept to convert",id:"selecting-skel_mannequin-and-pressing-accept-to-convert",level:4},{value:"2. Use nanos world Physics Assets PHYS_Mannequin",id:"2-use-nanos-world-physics-assets-phys_mannequin",level:3},{value:"Opening Skeletal Mesh to use the proper Physics Asset",id:"opening-skeletal-mesh-to-use-the-proper-physics-asset",level:4},{value:"Importing a new Character Skeletal Mesh",id:"importing-a-new-character-skeletal-mesh",level:2},{value:"Stylized Character Kit from Unreal Engine Marketplace",id:"stylized-character-kit-from-unreal-engine-marketplace",level:4},{value:"Downloading the Asset Pack from Unreal Marketplace",id:"downloading-the-asset-pack-from-unreal-marketplace",level:3},{value:"Finding Stylized Character Kit: Casual 01",id:"finding-stylized-character-kit-casual-01",level:4},{value:"Adding Stylized Character Kit: Casual 01 to ADK Project",id:"adding-stylized-character-kit-casual-01-to-adk-project",level:4},{value:"Opened Premade_Characters folder",id:"opened-premade_characters-folder",level:4},{value:"Copying the wanted files to our Asset Pack folder",id:"copying-the-wanted-files-to-our-asset-pack-folder",level:3},{value:"Opened MESH_PC_00",id:"opened-mesh_pc_00",level:4},{value:"Right clicked MESH_PC_00 and Advancing Copying into MyAssetPack/ folder",id:"right-clicked-mesh_pc_00-and-advancing-copying-into-myassetpack-folder",level:4},{value:"Confirming copying files",id:"confirming-copying-files",level:4},{value:"All files copied automatically",id:"all-files-copied-automatically",level:4},{value:"Converting the Skeleton to nanos world\u2019s Skeleton and Physics Asset",id:"converting-the-skeleton-to-nanos-worlds-skeleton-and-physics-asset",level:3},{value:"Deleting old useless Skeleton",id:"deleting-old-useless-skeleton",level:4},{value:"Exporting the Assets",id:"exporting-the-assets",level:2},{value:"Using the Skeletal Mesh in a Character through Scripting",id:"using-the-skeletal-mesh-in-a-character-through-scripting",level:3}],d={toc:c},p="wrapper";function h(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,s.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"nanos world Characters use Unreal\u2019s Default Mannequin Skeleton. So any Skeletal Mesh which uses it by default will probably work in nanos world as a ",(0,n.kt)("a",{parentName:"p",href:"/de/docs/next/scripting-reference/classes/character"},"Character"),".")),(0,n.kt)("h2",{id:"tips-for-integrating-skeletal-meshes-with-nanos-world-character"},"Tips for integrating Skeletal Meshes with nanos world Character"),(0,n.kt)("h3",{id:"1-use-nanos-world-skeleton-skel_mannequin"},"1. Use nanos world Skeleton SKEL_Mannequin"),(0,n.kt)("p",null,"It\u2019s of paramount importance to convert all ",(0,n.kt)("strong",{parentName:"p"},"Skeleton")," references to use nanos world ",(0,n.kt)("strong",{parentName:"p"},"Skeleton")," instead, if the Skeletal Mesh you imported is 100% equal to UE4\u2019s Mannequin Skeleton, this conversion won\u2019t be even noticed, but if the Skeleton of the Skeletal Mesh you are importing have more bones or is different, it won\u2019t work! You can try remake/modify it in a 3D software like Blender and make it equal to UE4\u2019s Mannequin."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"Note:")," It is only possible to convert Skeletal Meshes of Meshes which already use the default ",(0,n.kt)("strong",{parentName:"p"},"Unreal Mannequin Skeleton"),".")),(0,n.kt)("p",null,"For that, just right click on your ",(0,n.kt)("strong",{parentName:"p"},"Skeletal Mesh")," \u27a1 Skeleton \u27a1 Assign Skeleton, and select our Skeleton ",(0,n.kt)("inlineCode",{parentName:"p"},"SKEL_Mannequin"),", press ",(0,n.kt)("em",{parentName:"p"},"Accept")," to convert:"),(0,n.kt)("h4",{id:"right-click-on-your-mesh-and-select-to-assign-a-skeleton"},"Right click on your mesh and select to assign a Skeleton"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Right click on your mesh and select to assign a Skeleton",src:a(17017).Z,width:"476",height:"826"})),(0,n.kt)("h4",{id:"selecting-skel_mannequin-and-pressing-accept-to-convert"},"Selecting SKEL_Mannequin and pressing Accept to convert"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Selecting SKEL_Mannequin and pressing Accept to convert",src:a(9914).Z,width:"539",height:"750"})),(0,n.kt)("h3",{id:"2-use-nanos-world-physics-assets-phys_mannequin"},"2. Use nanos world Physics Assets PHYS_Mannequin"),(0,n.kt)("p",null,"Besides converting your mesh to use nanos world ",(0,n.kt)("strong",{parentName:"p"},"Skeleton"),", it is also needed that you set your mesh to use the nanos world ",(0,n.kt)("strong",{parentName:"p"},"Physics Assets"),"."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"This is needed so your Characters can have a proper in-game Ragdoll physics.")),(0,n.kt)("p",null,"Open your ",(0,n.kt)("strong",{parentName:"p"},"Skeletal Mesh")," and set the ",(0,n.kt)("strong",{parentName:"p"},"Physics Asset")," to use ",(0,n.kt)("inlineCode",{parentName:"p"},"PHYS_Mannequin"),":"),(0,n.kt)("h4",{id:"opening-skeletal-mesh-to-use-the-proper-physics-asset"},"Opening Skeletal Mesh to use the proper Physics Asset"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Opening Skeletal Mesh to use the proper Physics Asset",src:a(74078).Z,width:"707",height:"658"})),(0,n.kt)("h2",{id:"importing-a-new-character-skeletal-mesh"},"Importing a new Character Skeletal Mesh"),(0,n.kt)("p",null,"Learn how to import and use custom Skeletal Meshes in nanos world Characters."),(0,n.kt)("p",null,"For this Guide, we will import a Skeletal Mesh from ",(0,n.kt)("a",{parentName:"p",href:"https://www.unrealengine.com/marketplace/en-US/product/stylized-male-character-kit-casual"},"Stylized Character Kit: Casual 01")," ","(","which is a ",(0,n.kt)("a",{parentName:"p",href:"https://www.unrealengine.com/en-US/blog/featured-free-marketplace-content---september-2020"},"Free Marketplace Content for September 2020"),")","."),(0,n.kt)("h4",{id:"stylized-character-kit-from-unreal-engine-marketplace"},"Stylized Character Kit from Unreal Engine Marketplace"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Stylized Character Kit from Unreal Engine Marketplace",src:a(98133).Z,width:"1600",height:"900"})),(0,n.kt)("p",null,"Also, we will be using our ",(0,n.kt)("a",{parentName:"p",href:"/de/docs/next/assets-modding/creating-assets/adk-assets-development-kit"},"Assets Development Kit - ADK"),", make sure you downloaded it."),(0,n.kt)("h3",{id:"downloading-the-asset-pack-from-unreal-marketplace"},"Downloading the Asset Pack from Unreal Marketplace"),(0,n.kt)("p",null,"The first step is to download the Asset Pack ",(0,n.kt)("em",{parentName:"p"},"Stylized Character Kit: Casual 01")," from UE4 Marketplace, to do so, please follow:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("em",{parentName:"li"},"\u27a1 Epic Games Launcher")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("em",{parentName:"li"},"\u27a1 Unreal Engine")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("em",{parentName:"li"},"\u27a1 Library")),(0,n.kt)("li",{parentName:"ol"},"\u2b07 Scroll to ",(0,n.kt)("em",{parentName:"li"},(0,n.kt)("strong",{parentName:"em"},"VAULT"))," section")),(0,n.kt)("p",null,"In Vault section you will find all your Marketplace content you have in your account, to download it click on ",(0,n.kt)("em",{parentName:"p"},"Add To Project")," and select the ",(0,n.kt)("strong",{parentName:"p"},"Assets Development Kit")," project, this will download all files and \u2018install\u2019 them into the ADK project."),(0,n.kt)("h4",{id:"finding-stylized-character-kit-casual-01"},"Finding Stylized Character Kit: Casual 01"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Finding Stylized Character Kit: Casual 01",src:a(57142).Z,width:"1275",height:"563"})),(0,n.kt)("h4",{id:"adding-stylized-character-kit-casual-01-to-adk-project"},"Adding Stylized Character Kit: Casual 01 to ADK Project"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Adding Stylized Character Kit: Casual 01 to ADK Project",src:a(12442).Z,width:"1115",height:"664"})),(0,n.kt)("p",null,"You can now notice that there is a new folder ",(0,n.kt)("inlineCode",{parentName:"p"},"Content/SCK_Casual01/")," in the ADK project, this is the Asset Pack you just downloaded from UE4 Marketplace:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(47169).Z,width:"1209",height:"245"})),(0,n.kt)("p",null,"And you can find it\u2019s Skeletal Meshes inside ",(0,n.kt)("inlineCode",{parentName:"p"},"Content/SCK_Casual01/Models/Premade_Characters/"),":"),(0,n.kt)("h4",{id:"opened-premade_characters-folder"},"Opened Premade_Characters folder"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Opened Premade_Characters folder",src:a(67860).Z,width:"1210",height:"253"})),(0,n.kt)("h3",{id:"copying-the-wanted-files-to-our-asset-pack-folder"},"Copying the wanted files to our Asset Pack folder"),(0,n.kt)("p",null,"For this example, let\u2019s import the Skeletal Mesh ",(0,n.kt)("inlineCode",{parentName:"p"},"MESH_PC_00")," to nanos world and use it as our Character\u2019s Mesh:"),(0,n.kt)("h4",{id:"opened-mesh_pc_00"},"Opened MESH_PC_00"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Opened MESH_PC_00",src:a(39251).Z,width:"1119",height:"811"})),(0,n.kt)("p",null,"The first step is to copy it and all it\u2019s dependencies to your ",(0,n.kt)("inlineCode",{parentName:"p"},"AssetPack/")," folder inside the Project:"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"If you want, you don\u2019t need to do this and instead you can generate an Asset Pack with all files from the Marketplace, but will create a big and kind of useless content for nanos world.")),(0,n.kt)("p",null,"To do so, just drag-n-drop ",(0,n.kt)("inlineCode",{parentName:"p"},"MESH_PC_00")," into your ",(0,n.kt)("inlineCode",{parentName:"p"},"AssetPack/")," folder and select ",(0,n.kt)("em",{parentName:"p"},"Advanced Copy Here"),", this will copy all files and all dependencies in there, i.e. only the real needed ones:"),(0,n.kt)("h4",{id:"right-clicked-mesh_pc_00-and-advancing-copying-into-myassetpack-folder"},"Right clicked MESH_PC_00 and Advancing Copying into MyAssetPack/ folder"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Right clicked MESH_PC_00 and Advancing Copying into MyAssetPack/ folder",src:a(4876).Z,width:"1099",height:"219"})),(0,n.kt)("p",null,"Press OK to confirm:"),(0,n.kt)("h4",{id:"confirming-copying-files"},"Confirming copying files"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Confirming copying files",src:a(75855).Z,width:"808",height:"636"})),(0,n.kt)("p",null,"And now we have only our wanted Skeletal Mesh and it\u2019s Textures/Materials into our Asset Pack folder, which we will export:"),(0,n.kt)("h4",{id:"all-files-copied-automatically"},"All files copied automatically"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"All files copied automatically",src:a(37245).Z,width:"1215",height:"283"})),(0,n.kt)("h3",{id:"converting-the-skeleton-to-nanos-worlds-skeleton-and-physics-asset"},"Converting the Skeleton to nanos world\u2019s Skeleton and Physics Asset"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Please refer to section ",(0,n.kt)("a",{parentName:"p",href:"characters-meshes#tips-for-integrating-skeletal-meshs-with-nanos-world-character"},"Tips for integrating Skeletal Meshes with nanos world Character")," for converting the ",(0,n.kt)("inlineCode",{parentName:"p"},"MESH_PC_00")," to use our ",(0,n.kt)("strong",{parentName:"p"},"Skeleton")," and the ",(0,n.kt)("strong",{parentName:"p"},"Physics Asset"),".")),(0,n.kt)("p",null,"After it\u2019s converted, save everything and you can delete the old Skeleton ","(","which was located at ",(0,n.kt)("inlineCode",{parentName:"p"},"SCK_Casual01/Mannquin/")," folder",")",":"),(0,n.kt)("h4",{id:"deleting-old-useless-skeleton"},"Deleting old useless Skeleton"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Deleting old useless Skeleton",src:a(97334).Z,width:"375",height:"179"})),(0,n.kt)("h2",{id:"exporting-the-assets"},"Exporting the Assets"),(0,n.kt)("p",null,"The Exporting process follows the usual process of exporting assets to nanos world. Please follow the ",(0,n.kt)("a",{parentName:"p",href:"/de/docs/next/assets-modding/creating-assets/importing-assets"},"Importing Custom Assets")," Guide."),(0,n.kt)("h3",{id:"using-the-skeletal-mesh-in-a-character-through-scripting"},"Using the Skeletal Mesh in a Character through Scripting"),(0,n.kt)("p",null,"After exporting and configuring your Assets.toml correctly, the last step is to use it! For that, you just need to use it\u2019s Key you configured in the Assets.toml in the last step (e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},"my-asset-pack::MESH_PC_00"),"):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'local char = Character(Vector(0, 300, 100), Rotator(), "my-asset-pack::MESH_PC_00")\n')),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(67255).Z,width:"1598",height:"932"})),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"And\u2026 voila! Imported and integrated with all nanos world animations!")))}h.isMDXComponent=!0},17017:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/character-meshes-01-1eec8f8b08fd05799bce45b456c50899.jpg"},9914:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/character-meshes-02-2fcc24aea988b4718757135b07cec045.jpg"},74078:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/character-meshes-03-31b4a0d821df6c468a570beb711bdfbb.jpg"},98133:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/character-meshes-04-6b5bc42cd9dbfbad6e04fac41d97abe7.jpg"},57142:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/character-meshes-05-cdd0b7b8120c2daff11fd6bd89324ebf.jpg"},12442:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/character-meshes-06-c42142eea83a699ba09f9e5133c0b2bd.jpg"},47169:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/character-meshes-07-0bc69419c2bf2435d83f6b29c92090d2.jpg"},67860:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/character-meshes-08-a506268778a08f45d2d8aee1e8898913.jpg"},39251:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/character-meshes-09-3999b43c406aee684da4306a354e610e.jpg"},4876:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/character-meshes-10-9fd3c65f52304a8e8f4825d0b486097a.jpg"},75855:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/character-meshes-11-9bb025ffc68ef59d228d0b555c5596f1.jpg"},37245:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/character-meshes-12-8226d527eacf532b885d80f320a9c90a.jpg"},97334:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/character-meshes-13-3564439dffb1f5a2fdb0565b384517bb.jpg"},67255:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/character-meshes-21-e14ba2678fc5324ce74b1f0d97998f89.jpg"}}]);