import{I as p}from"./CONSTANTS-DufeqkT1.js";import{d as u,o as c,a as R,l as s,f as r,n as t,w as f,h as k}from"./vue.esm-bundler-B4SQYQ1t.js";import{d as N}from"./index-Cci8dJ4U.js";import{d as g}from"./index-DpKOHcH_.js";import{E as A}from"./ui-icon-CN4b7xFD.js";import{d as I}from"./ui-typography-CFnpkGZs.js";var a=(o=>(o.PRIMARY="PRIMARY",o.SECONDARY="SECONDARY",o.ERROR="ERROR",o.WARNING="WARNING",o))(a||{});const m=u({__name:"ui-alert",props:{icon:{},kind:{}},setup(o){return(e,E)=>(c(),R("div",{class:t(["ui-alert flex gap-sm rounded-lg border bg-white p-sm",[(!e.kind||e.kind===r(a).PRIMARY)&&"border-primary",e.kind===r(a).WARNING&&"border-warning",e.kind===r(a).ERROR&&"border-error",e.kind===r(a).SECONDARY&&"border-secondary"]])},[s(r(g),{"icon-name":e.icon,size:r(A).SM,class:t([(!e.kind||e.kind===r(a).PRIMARY)&&"text-primary",e.kind===r(a).WARNING&&"text-warning",e.kind===r(a).ERROR&&"text-error",e.kind===r(a).SECONDARY&&"text-secondary"])},null,8,["icon-name","size","class"]),s(r(N),{size:r(I).XS,"line-height":""},{default:f(()=>[k(e.$slots,"default")]),_:3},8,["size"])],2))}});m.__docgenInfo={exportName:"default",displayName:"ui-alert",description:"",tags:{},props:[{name:"icon",required:!0,type:{name:"TIconName"}},{name:"kind",required:!1,type:{name:"EAlertTypes"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-alert/ui-alert.vue"]};const S={title:"Components/ui-alert",component:m,argTypes:{kind:{control:{type:"select"},options:Object.values(a),description:"The button kinds"},default:{control:{type:"text"}}},args:{kind:a.PRIMARY,default:"This is a default slot"}},n={args:{icon:p}};var i,d,l;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    icon: ICON_DEFAULT
  }
}`,...(l=(d=n.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const Y=["Default"];export{n as Default,Y as __namedExportsOrder,S as default};