"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[523],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,k=u["".concat(s,".").concat(m)]||u[m]||p[m]||l;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},54639:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return p}});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),i=["components"],o={title:"Kommandozeilenschnittstelle",description:"Wie man nanos world CLI verwendet, um Pakete zu installieren und den Server zu aktualisieren.",sidebar_position:3,tags:["hosting"]},s=void 0,d={unversionedId:"core-concepts/server-manual/nanos-world-cli",id:"version-latest/core-concepts/server-manual/nanos-world-cli",title:"Kommandozeilenschnittstelle",description:"Wie man nanos world CLI verwendet, um Pakete zu installieren und den Server zu aktualisieren.",source:"@site/i18n/de/docusaurus-plugin-content-docs/version-latest/core-concepts/server-manual/nanos-world-cli.mdx",sourceDirName:"core-concepts/server-manual",slug:"/core-concepts/server-manual/nanos-world-cli",permalink:"/de/docs/core-concepts/server-manual/nanos-world-cli",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/core-concepts/server-manual/nanos-world-cli.mdx",tags:[{label:"hosting",permalink:"/de/docs/tags/hosting"}],version:"latest",sidebarPosition:3,frontMatter:{title:"Kommandozeilenschnittstelle",description:"Wie man nanos world CLI verwendet, um Pakete zu installieren und den Server zu aktualisieren.",sidebar_position:3,tags:["hosting"]},sidebar:"version-latest/main",previous:{title:"Serverkonfiguration",permalink:"/de/docs/core-concepts/server-manual/server-configuration"},next:{title:"Game Panels",permalink:"/de/docs/core-concepts/server-manual/game-panels"}},c={},p=[{value:"CLI starten",id:"cli-starten",level:2},{value:"CLI-Befehle",id:"cli-befehle",level:2},{value:"Ein-Liner-CLI",id:"ein-liner-cli",level:2}],u=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",t)}},m=u("Tabs"),k=u("TabItem"),f={toc:p};function g(e){var t=e.components,o=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},f,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Wie man nanos world CLI verwendet, um Pakete zu installieren und den Server zu aktualisieren."),(0,l.kt)("p",null,"importiere Tabs von '@theme/Tabs'; importiere TabItem von '@theme/TabItem';"),(0,l.kt)("p",null,"nanos world stellt ein CLI ","(","Command Line Interface",")"," zur Verf\xfcgung, um den Server, die Pakete und die Assets zu aktualisieren und sie auch herunterzuladen!"),(0,l.kt)("h2",{id:"cli-starten"},"CLI starten"),(0,l.kt)("p",null,"Um den Client auszuf\xfchren, starten Sie den Server mit dem ",(0,l.kt)("inlineCode",{parentName:"p"},"--cli")," Argument:"),(0,l.kt)(m,{defaultValue:"cmd",values:[{label:"Windows",value:"cmd"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,l.kt)(k,{value:"cmd",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"./NanosWorldServer.exe --cli\n"))),(0,l.kt)(k,{value:"linux",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"./NanosWorldServer.sh --cli\n")))),(0,l.kt)("p",null," After started, if you type ",(0,l.kt)("inlineCode",{parentName:"p"},"help")," you can see all the available commands:"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(96999).Z,width:"890",height:"171"})),(0,l.kt)("h2",{id:"cli-befehle"},"CLI-Befehle"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Befehle"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Beschreibung"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"install package [PACKAGE_NAMES...]")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Install Packages")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"update package [PACKAGE_NAMES...]")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Update Packages")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"install assets [ASSET_NAMES...]")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Install Asset Packs")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"update assets [ASSET_NAMES...]")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Update Asset Packs")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"add package [PACKAGE_PATH]")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Creates a new Package in a interactive way")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"add assets [ASSET_PATH]")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Creates a new Asset Pack in a interactive way")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"check")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Check for Updates")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"help")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Display all Commands")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"stoppen")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Stops the CLI")))),(0,l.kt)("h2",{id:"ein-liner-cli"},"Ein-Liner-CLI"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Es ist auch m\xf6glich, CLI in einem nicht-interaktiven Modus auszuf\xfchren, f\xfchren Sie einfach den Befehl zusammen nach dem ",(0,l.kt)("inlineCode",{parentName:"p"},"--cli")," aus.")),(0,l.kt)(m,{defaultValue:"cmd",values:[{label:"Windows",value:"cmd"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,l.kt)(k,{value:"cmd",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"./NanosWorldServer.exe --cli update package sandbox\n"))),(0,l.kt)(k,{value:"linux",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"./NanosWorldServer.sh --cli update package sandbox\n")))),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"You can also install/update several Packages/Assets in a single command, separating them by spaces:"),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"install package sandbox battlefield-kill-ui\n"))))}g.isMDXComponent=!0},96999:function(e,t,n){t.Z=n.p+"assets/images/cli-01-9d9f96b3e580babfbfa6cf6ed4416040.jpg"}}]);