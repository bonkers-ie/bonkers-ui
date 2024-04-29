import{d as p,u as f,c as g,o as n,a as k,b as i,e as l,f as s,g as d,w as h,h as b,n as z}from"./vue.esm-bundler-B4SQYQ1t.js";import{d as R}from"./index-DpKOHcH_.js";import{E as y}from"./ui-icon-CN4b7xFD.js";import{d as E}from"./index-Cci8dJ4U.js";import{d as o}from"./ui-typography-CFnpkGZs.js";var r=(e=>(e.SMALL="small",e.MEDIUM="medium",e.LARGE="large",e))(r||{}),t=(e=>(e.PRIMARY="primary",e.ERROR="error",e.ACCENT="accent",e))(t||{});const v={class:"ui-badge relative overflow-hidden text-white"},M={class:"relative z-[1] flex content-center items-center gap-xxs px-xs py-xxs"},S=p({__name:"ui-badge",props:{size:{},kind:{},icon:{}},setup(e){const u=e,c=f(),m=g(()=>{switch(u.size){case r.MEDIUM:return o.XS;case r.LARGE:return o.SM;case r.SMALL:default:return o.XXS}});return(a,w)=>(n(),k("div",v,[i("div",M,[a.icon?(n(),l(s(R),{key:0,size:s(y).SM,"icon-name":a.icon},null,8,["size","icon-name"])):d("",!0),s(c).default?(n(),l(s(E),{key:1,size:m.value,class:"whitespace-nowrap","line-height":""},{default:h(()=>[b(a.$slots,"default")]),_:3},8,["size"])):d("",!0)]),i("div",{class:z(["absolute left-0 top-0 size-full rounded-full",[(!a.kind||a.kind===s(t).PRIMARY)&&"bg-primary-600",a.kind===s(t).ERROR&&"bg-error-600",a.kind===s(t).ACCENT&&"bg-accent-600"]])},null,2)]))}});S.__docgenInfo={exportName:"default",displayName:"ui-badge",description:"",tags:{},props:[{name:"size",required:!1,type:{name:"EBadgeSize"}},{name:"kind",required:!1,type:{name:"EBadgeKind"}},{name:"icon",required:!1,type:{name:"TIconName"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-badge/ui-badge.vue"]};export{t as E,S as _,r as a};