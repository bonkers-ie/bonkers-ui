import{j as o}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-EMvoHGHG.js";import{c}from"./index-EEEaJ7bf.js";var e=(t=>(t.SECONDARY="secondary",t.DEFAULT="default",t.PRIMARY="primary",t.WARNING="warning",t.ERROR="error",t))(e||{});const d={[e.DEFAULT]:`
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
	`},a=({kind:t=e.SECONDARY,title:s,children:i,className:n})=>o.jsxs("div",{className:c("ui-snackbar","flex","w-full","rounded-lg","items-center","justify-between","shadow-md","p-sm","flex-row-reverse","text-sm",d[t],n),children:[o.jsx("div",{style:{color:t===e.DEFAULT?"black":"white",fontWeight:"normal"},children:i}),s]});a.__docgenInfo={description:"",methods:[],displayName:"UiSnackbar",props:{kind:{required:!1,tsType:{name:"ESnackbarTypes"},description:"",defaultValue:{value:"ESnackbarTypes.SECONDARY",computed:!0}},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const R={title:"Components/UiSnackbar",component:a,argTypes:{kind:{control:{type:"select"},options:Object.values(e),description:"Snackbar Color"},title:{control:{type:"text",description:"text or title"}},children:{control:{type:"text",description:"text or child element/s"}}},args:{kind:e.SECONDARY,title:"Some Text",children:"Text"}},r={};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};const u=["Primary"];export{r as Primary,u as __namedExportsOrder,R as default};
