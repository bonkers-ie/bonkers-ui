import{j as s}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-BwznxUV6.js";import{c as F}from"./index-CuoXRDjT.js";var t=(e=>(e.DEFAULT="default",e.OFFSET_TOP_LEFT="offset-top-left",e.OFFSET_BOTTOM_RIGHT="offset-bottom-right",e.OFFSET_BOTTOM_LEFT="offset-bottom-left",e))(t||{}),a=(e=>(e.DEFAULT="default",e.LARGE="lg",e))(a||{}),r=(e=>(e.DEFAULT="error",e.PRIMARY="primary",e))(r||{});const g={[t.DEFAULT]:"-right-xxxs -top-xxxs",[t.OFFSET_BOTTOM_RIGHT]:"-right-xxxs -bottom-xxxs",[t.OFFSET_TOP_LEFT]:"-left-xxxs -top-xxxs",[t.OFFSET_BOTTOM_LEFT]:"-left-xxxs -bottom-xxxs"},v={[r.DEFAULT]:`
		bg-error-500

	`,[r.PRIMARY]:`
		bg-primary-800

	`},L={[a.DEFAULT]:`
		h-sm
		min-w-sm
		p-xxxs
		text-xxs
	`,[a.LARGE]:`
		h-lg
		min-w-lg
		p-xxs
		justify-center
		text-2xl
		border-2

	`},i=({offset:e=t.DEFAULT,children:f,className:T,kind:u=r.DEFAULT,size:E=a.DEFAULT})=>s.jsx("div",{className:F("notification-badge","absolute","inline-flex","items-center","rounded-full","border","border-white","text-center","font-bold","leading-none","text-white","whitespace-nowrap","gap-xxxs",g[e],v[u],L[E],T),children:f});i.__docgenInfo={description:"",methods:[],displayName:"UiNotificationBadge",props:{offset:{required:!1,tsType:{name:"EBadgeOffset"},description:"",defaultValue:{value:"EBadgeOffset.DEFAULT",computed:!0}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},kind:{required:!1,tsType:{name:"EBadgeTypes"},description:"",defaultValue:{value:"EBadgeTypes.DEFAULT",computed:!0}},size:{required:!1,tsType:{name:"EBadgeSizes"},description:"",defaultValue:{value:"EBadgeSizes.DEFAULT",computed:!0}},className:{required:!1,tsType:{name:"string"},description:""}}};const _={title:"Components/UiNotificationBadge",component:i,argTypes:{offset:{control:{type:"select"},options:Object.values(t),description:"The position of the badge relative to its container"},kind:{control:{type:"select"},options:Object.values(r),description:"Color types badges"},children:{control:{type:"text"}},size:{control:{type:"select"},options:Object.values(a),description:"Badge sizes"}},args:{offset:t.DEFAULT,kind:r.DEFAULT,size:a.DEFAULT,children:"1"}},o={render:e=>s.jsxs("div",{className:"flex gap-sm",children:[s.jsx("div",{className:"relative",children:s.jsx(i,{...e})}),s.jsx("div",{className:"relative size-xxl rounded-full bg-primary",children:s.jsx(i,{...e})})]})},n={render:e=>s.jsxs("div",{className:"flex h-xxl w-xxxxl gap-md rounded-xs bg-secondary-alt-600 p-xxs",children:[s.jsx("div",{className:"relative",children:s.jsx(i,{...e,size:a.DEFAULT,offset:t.OFFSET_TOP_LEFT})}),s.jsx("div",{className:"relative",children:s.jsx(i,{...e,size:a.LARGE,offset:t.OFFSET_TOP_LEFT})})]})};var d,l,c;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <div className="flex gap-sm">
            <div className="relative">
                <UiNotificationBadge {...args} />
            </div>
            <div className="relative size-xxl rounded-full bg-primary">
                <UiNotificationBadge {...args} />
            </div>

        </div>
}`,...(c=(l=o.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var x,p,m;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <div className="flex h-xxl w-xxxxl gap-md rounded-xs bg-secondary-alt-600 p-xxs">
            <div className="relative">
                <UiNotificationBadge {...args} size={EBadgeSizes.DEFAULT} offset={EBadgeOffset.OFFSET_TOP_LEFT} />
            </div>
            <div className="relative">
                <UiNotificationBadge {...args} size={EBadgeSizes.LARGE} offset={EBadgeOffset.OFFSET_TOP_LEFT} />
            </div>

        </div>
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const A=["Primary","Variant"];export{o as Primary,n as Variant,A as __namedExportsOrder,_ as default};
