import{j as s}from"./jsx-runtime-C6qLVRqm.js";import"./index-C2WPW1L7.js";import{c as F}from"./index-BmPQVgn-.js";var t=(e=>(e.DEFAULT="default",e.OFFSET_TOP_LEFT="offset-top-left",e.OFFSET_BOTTOM_RIGHT="offset-bottom-right",e.OFFSET_BOTTOM_LEFT="offset-bottom-left",e))(t||{}),r=(e=>(e.DEFAULT="default",e.LARGE="lg",e))(r||{}),a=(e=>(e.DEFAULT="error",e.PRIMARY="primary",e))(a||{});const E={[t.DEFAULT]:"-right-xxxs -top-xxxs",[t.OFFSET_BOTTOM_RIGHT]:"-right-xxxs -bottom-xxxs",[t.OFFSET_TOP_LEFT]:"-left-xxxs -top-xxxs",[t.OFFSET_BOTTOM_LEFT]:"-left-xxxs -bottom-xxxs"},g={[a.DEFAULT]:`
		bg-error-500

	`,[a.PRIMARY]:`
		bg-primary-800

	`},v={[r.DEFAULT]:`
		h-sm
		min-w-sm
		p-xxxs
		text-xxs
	`,[r.LARGE]:`
		h-lg
		min-w-lg
		p-xxs
		justify-center
		text-2xl
		border-2

	`},i=({offset:e=t.DEFAULT,children:p,kind:T=a.DEFAULT,size:u=r.DEFAULT})=>s.jsx("div",{className:F("notification-badge","absolute","inline-flex","items-center","rounded-full","border","border-white","text-center","font-bold","leading-none","text-white","whitespace-nowrap","gap-xxxs",E[e],g[T],v[u]),children:p});i.__docgenInfo={description:"",methods:[],displayName:"UiNotificationBadge",props:{offset:{defaultValue:{value:"EBadgeOffset.DEFAULT",computed:!0},required:!1},kind:{defaultValue:{value:"EBadgeTypes.DEFAULT",computed:!0},required:!1},size:{defaultValue:{value:"EBadgeSizes.DEFAULT",computed:!0},required:!1}}};const _={title:"Components/UiNotificationBadge",component:i,argTypes:{offset:{control:{type:"select"},options:Object.values(t),description:"The position of the badge relative to its container"},kind:{control:{type:"select"},options:Object.values(a),description:"Color types badges"},children:{control:{type:"text"}},size:{control:{type:"select"},options:Object.values(r),description:"Badge sizes"}},args:{offset:t.DEFAULT,kind:a.DEFAULT,size:r.DEFAULT,children:"1"}},o={render:e=>s.jsxs("div",{className:"flex gap-sm",children:[s.jsx("div",{className:"relative",children:s.jsx(i,{...e})}),s.jsx("div",{className:"relative size-xxl rounded-full bg-primary",children:s.jsx(i,{...e})})]})},n={render:e=>s.jsxs("div",{className:"flex h-xxl w-xxxxl gap-md rounded-sm bg-secondary-alt-600 p-xxs",children:[s.jsx("div",{className:"relative",children:s.jsx(i,{...e,size:r.DEFAULT,offset:t.OFFSET_TOP_LEFT})}),s.jsx("div",{className:"relative",children:s.jsx(i,{...e,size:r.LARGE,offset:t.OFFSET_TOP_LEFT})})]})};var d,l,x;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <div className="flex gap-sm">
            <div className="relative">
                <UiNotificationBadge {...args} />
            </div>
            <div className="relative size-xxl rounded-full bg-primary">
                <UiNotificationBadge {...args} />
            </div>

        </div>
}`,...(x=(l=o.parameters)==null?void 0:l.docs)==null?void 0:x.source}}};var c,f,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <div className="flex h-xxl w-xxxxl gap-md rounded-sm bg-secondary-alt-600 p-xxs">
            <div className="relative">
                <UiNotificationBadge {...args} size={EBadgeSizes.DEFAULT} offset={EBadgeOffset.OFFSET_TOP_LEFT} />
            </div>
            <div className="relative">
                <UiNotificationBadge {...args} size={EBadgeSizes.LARGE} offset={EBadgeOffset.OFFSET_TOP_LEFT} />
            </div>

        </div>
}`,...(m=(f=n.parameters)==null?void 0:f.docs)==null?void 0:m.source}}};const A=["Primary","Variant"];export{o as Primary,n as Variant,A as __namedExportsOrder,_ as default};
