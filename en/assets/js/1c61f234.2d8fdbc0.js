"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[937],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(r),m=o,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3702:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={},i=void 0,c={unversionedId:"woe-discord-bot/roster/create",id:"woe-discord-bot/roster/create",title:"create",description:"Erstellt ein neues Roster",source:"@site/docs/woe-discord-bot/roster/create.md",sourceDirName:"woe-discord-bot/roster",slug:"/woe-discord-bot/roster/create",permalink:"/docs/en/woe-discord-bot/roster/create",draft:!1,editUrl:"https://github.com/ragnaworld-eu/docs/blob/main/docs/woe-discord-bot/roster/create.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"autoreset",permalink:"/docs/en/woe-discord-bot/roster/autoreset"},next:{title:"delete",permalink:"/docs/en/woe-discord-bot/roster/delete"}},l={},s=[{value:"Erstellt ein neues Roster",id:"erstellt-ein-neues-roster",level:2},{value:"name",id:"name",level:3},{value:"channel",id:"channel",level:3},{value:"interaction",id:"interaction",level:3}],d={toc:s};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"erstellt-ein-neues-roster"},"Erstellt ein neues Roster"),(0,o.kt)("admonition",{type:"cmd"},(0,o.kt)("p",{parentName:"admonition"},"/roster create ",(0,o.kt)("strong",{parentName:"p"},"name")," ",(0,o.kt)("em",{parentName:"p"},"[","channel","]")," ",(0,o.kt)("em",{parentName:"p"},"[","interaction","]"))),(0,o.kt)("h3",{id:"name"},"name"),(0,o.kt)("p",null,"Name des Roster, dieser kann sp\xe4ter per Liste ausgew\xe4hlt werden und wird auch in der \xdcbersicht angezeigt"),(0,o.kt)("h3",{id:"channel"},"channel"),(0,o.kt)("p",null,"Der Channel in dem die \xdcbersicht, ver\xf6ffentlicht werden soll"),(0,o.kt)("h3",{id:"interaction"},"interaction"),(0,o.kt)("p",null,"Hier kann ein Channel angegeben werden, indem beim benutzen von ",(0,o.kt)("inlineCode",{parentName:"p"},"/woe yes|no|maybe")," keine Roster angegeben werden muss."))}p.isMDXComponent=!0}}]);