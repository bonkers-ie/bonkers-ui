const __vite__fileDeps=["assets/DocsRenderer-K4EAMTCU-DKGKA3h1.js","assets/iframe-DUeUleOt.js","assets/index-DydEPSSr.js","assets/index-BBx97lud.js","assets/index-Dkj0J1ds.js","assets/index-DrFu-skq.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as s}from"./iframe-DUeUleOt.js";import"../sb-preview/runtime.js";const{global:_}=__STORYBOOK_MODULE_GLOBAL__;var a=Object.entries(_.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),d={docs:{renderer:async()=>{let{DocsRenderer:e}=await s(()=>import("./DocsRenderer-K4EAMTCU-DKGKA3h1.js"),__vite__mapDeps([0,1,2,3,4,5]));return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>a[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{d as parameters};