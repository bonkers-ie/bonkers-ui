import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./index-DmM0KDA7.js";import{c as l}from"./index-C7T3p30y.js";import{U as m,a as p,b as u}from"./UiButton-C85yurkk.js";var e=(t=>(t.SECONDARY="secondary",t.DEFAULT="default",t.PRIMARY="primary",t.WARNING="warning",t.ERROR="error",t))(e||{});const R={[e.DEFAULT]:`
		bg-white
		text-secondary-700

	`,[e.PRIMARY]:`
		bg-primary-600
		text-white
	`,[e.WARNING]:`
		bg-warning
		text-white
	`,[e.ERROR]:`
		bg-error
		text-white
	`,[e.SECONDARY]:`
		bg-secondary
		text-white
	`},n=({kind:t=e.SECONDARY,title:c,children:d})=>r.jsx(r.Fragment,{children:r.jsxs("div",{className:l("ui-snackbar","flex","w-full","rounded-xxs","items-center","justify-between","shadow-md","p-sm","flex-row-reverse","text-sm",R[t]),children:[r.jsx(m,{kind:u.LINK,size:p.SMALL,style:{color:t===e.DEFAULT?"black":"white",fontWeight:"normal"},children:d}),c]})});n.__docgenInfo={description:"",methods:[],displayName:"UiSnackbar",props:{kind:{required:!1,tsType:{name:"ESnackbarTypes"},description:"",defaultValue:{value:"ESnackbarTypes.SECONDARY",computed:!0}},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const w={title:"Components/UiSnackbar",component:n,argTypes:{kind:{control:{type:"select"},options:Object.values(e),description:"Snackbar Color"},title:{control:{type:"text",description:"text or title"}},children:{control:{type:"text",description:"text or child element/s"}}},args:{kind:e.SECONDARY,title:"Some Text",children:"Text"}},o={};var s,a,i;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(i=(a=o.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const f=["Primary"];export{o as Primary,f as __namedExportsOrder,w as default};
