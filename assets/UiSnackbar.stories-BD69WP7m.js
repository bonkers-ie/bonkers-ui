import{j as o}from"./jsx-runtime-D_zvdyIk.js";import"./index-D4lIrffr.js";import{c as m}from"./index-_oZgBBUR.js";var e=(t=>(t.SECONDARY="secondary",t.DEFAULT="default",t.PRIMARY="primary",t.WARNING="warning",t.ERROR="error",t))(e||{});const p={[e.DEFAULT]:`
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
	`},n=({kind:t=e.SECONDARY,title:c,children:d,className:l})=>o.jsxs("div",{className:m("ui-snackbar","flex","w-full","rounded-lg","items-center","justify-between","shadow-md","p-sm","flex-row-reverse","text-sm",p[t],l),children:[o.jsx("div",{style:{color:t===e.DEFAULT?"black":"white",fontWeight:"normal"},children:d}),c]});n.__docgenInfo={description:"",methods:[],displayName:"UiSnackbar",props:{kind:{required:!1,tsType:{name:"ESnackbarTypes"},description:"",defaultValue:{value:"ESnackbarTypes.SECONDARY",computed:!0}},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const y={title:"Components/UiSnackbar",component:n,argTypes:{kind:{control:{type:"select"},options:Object.values(e),description:"Snackbar Color"},title:{control:{type:"text",description:"text or title"}},children:{control:{type:"text",description:"text or child element/s"}}},args:{kind:e.SECONDARY,title:"Some Text",children:"Text"}},r={};var a,s,i;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(i=(s=r.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const N=["Primary"];export{r as Primary,N as __namedExportsOrder,y as default};
