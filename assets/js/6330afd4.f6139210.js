"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[765],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=n.createContext({}),s=function(e){var r=n.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(d.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,l=e.originalType,d=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=s(t),m=o,f=p["".concat(d,".").concat(m)]||p[m]||u[m]||l;return t?n.createElement(f,i(i({ref:r},c),{},{components:t})):n.createElement(f,i({ref:r},c))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var l=t.length,i=new Array(l);i[0]=p;var a={};for(var d in r)hasOwnProperty.call(r,d)&&(a[d]=r[d]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var s=2;s<l;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6523:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>s});var n=t(7462),o=(t(7294),t(3905));const l={},i=void 0,a={unversionedId:"woe-discord-bot/roster/role",id:"woe-discord-bot/roster/role",title:"role",description:"Neue Rolle hinzuf\xfcgen",source:"@site/docs/woe-discord-bot/roster/role.md",sourceDirName:"woe-discord-bot/roster",slug:"/woe-discord-bot/roster/role",permalink:"/docs/woe-discord-bot/roster/role",draft:!1,editUrl:"https://github.com/ragnaworld-eu/docs/blob/main/docs/woe-discord-bot/roster/role.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"remove",permalink:"/docs/woe-discord-bot/roster/remove"},next:{title:"roster-remind",permalink:"/docs/woe-discord-bot/roster-remind"}},d={},s=[{value:"Neue Rolle hinzuf\xfcgen",id:"neue-rolle-hinzuf\xfcgen",level:2},{value:"name",id:"name",level:3},{value:"default",id:"default",level:3},{value:"role",id:"role",level:3},{value:"L\xf6schen einer Rolle",id:"l\xf6schen-einer-rolle",level:2},{value:"roster",id:"roster",level:3},{value:"name",id:"name-1",level:3}],c={toc:s};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"neue-rolle-hinzuf\xfcgen"},"Neue Rolle hinzuf\xfcgen"),(0,o.kt)("admonition",{type:"cmd"},(0,o.kt)("p",{parentName:"admonition"},"/roster role add ",(0,o.kt)("strong",{parentName:"p"},"roster")," ",(0,o.kt)("strong",{parentName:"p"},"name")," ",(0,o.kt)("em",{parentName:"p"},"[","default","]")," ",(0,o.kt)("em",{parentName:"p"},"[","role","]"))),(0,o.kt)("h3",{id:"name"},"name"),(0,o.kt)("p",null,"Name der Rolle welche auch in der \xdcbersicht angezeigt wird z.b.: Tanks, Priest ..."),(0,o.kt)("h3",{id:"default"},"default"),(0,o.kt)("p",null,"Ist dieser Wert gesetzt, landen in dieser Rolle alle Mitglieder welche keiner Rolle explizit zugeordnet sind.\nPro Roster, kann es nur eine Standardrolle geben."),(0,o.kt)("h3",{id:"role"},"role"),(0,o.kt)("p",null,"Eine Discord Rolle welche mit dieser Rolle verkn\xfcpft ist. Alle mitglieder dieser Discord-Rolle werden automatisch dem\nRoster hinzugef\xfcgt oder auch wieder entfernt"),(0,o.kt)("h2",{id:"l\xf6schen-einer-rolle"},"L\xf6schen einer Rolle"),(0,o.kt)("admonition",{type:"cmd"},(0,o.kt)("p",{parentName:"admonition"},"/roster role remove ",(0,o.kt)("strong",{parentName:"p"},"roster")," ",(0,o.kt)("strong",{parentName:"p"},"name"))),(0,o.kt)("h3",{id:"roster"},"roster"),(0,o.kt)("p",null,"Name des Roster in dem eine Rolle gel\xf6scht werden soll"),(0,o.kt)("h3",{id:"name-1"},"name"),(0,o.kt)("p",null,"Name der Rolle, welche gel\xf6scht werden soll"))}u.isMDXComponent=!0}}]);