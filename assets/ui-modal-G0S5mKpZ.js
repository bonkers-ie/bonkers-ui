(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".max-height[data-v-fefcb9b0]{max-height:calc(100vh - var(--md))}.max-width[data-v-fefcb9b0]{max-width:calc(100vw - var(--md))}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import{d as c,o as s,c as r,b as l,g as i,f as n,w as d,u as a,n as h,h as g,t as w}from"./vue.esm-bundler-BD_Ybmc6.js";import{E as m,c as u,a as v,U as f}from"./index-C-PnJtVA.js";import{_ as S}from"./_plugin-vue_export-helper-DlAUqK2U.js";var t=(o=>(o.SM="sm",o.MD="md",o.LG="lg",o.RESPONSIVE="responsive",o))(t||{});const y={key:0},E={key:2,class:"mt-auto w-full"},p=c({__name:"ui-modal",props:{title:{default:void 0},modalSize:{default:t.SM}},setup(o){return(e,k)=>(s(),r("div",{class:h(["ui-modal max-height max-width inset-0 z-10 flex w-full flex-col items-center gap-md overflow-y-scroll rounded-2xl bg-white p-md shadow-md",[e.modalSize===a(t).SM&&"h-fit max-w-[24rem]",e.modalSize===a(t).MD&&"h-fit max-w-[32rem]",e.modalSize===a(t).LG&&"h-fit max-w-[40rem]",e.modalSize===a(t).RESPONSIVE&&"h-full"]])},[e.$slots.icon?(s(),r("div",y,[l(e.$slots,"icon",{},void 0,!0)])):i("",!0),l(e.$slots,"title",{},()=>[e.title?(s(),n(a(f),{key:0,weight:a(m).BOLD,align:a(u).CENTER,size:a(v).LG},{default:d(()=>[g(w(e.title),1)]),_:1},8,["weight","align","size"])):i("",!0)],!0),e.$slots.default?(s(),n(a(f),{key:1,is:"div",weight:a(m).REGULAR,align:a(u).CENTER,"line-height":"",class:"w-full overflow-y-auto text-secondary"},{default:d(()=>[l(e.$slots,"default",{},void 0,!0)]),_:3},8,["weight","align"])):i("",!0),e.$slots.footer?(s(),r("div",E,[l(e.$slots,"footer",{},void 0,!0)])):i("",!0)],2))}}),T=S(p,[["__scopeId","data-v-fefcb9b0"]]);p.__docgenInfo={exportName:"default",displayName:"ui-modal",description:"",tags:{},props:[{name:"title",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"modalSize",required:!1,type:{name:"EModalSizes"},defaultValue:{func:!1,value:"EModalSizes.SM"}}],slots:[{name:"icon"},{name:"title"},{name:"default"},{name:"footer"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-modal/ui-modal.vue"]};export{t as E,T as U};