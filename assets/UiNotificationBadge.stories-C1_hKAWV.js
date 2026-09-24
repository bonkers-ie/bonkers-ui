import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{g as n}from"./iframe-DYDs02wk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{t as i}from"./classnames-D09xBJOL.js";var a,o,s;function c(){return(c=t((()=>{a=function(e){return e.DEFAULT=`default`,e.OFFSET_TOP_LEFT=`offset-top-left`,e.OFFSET_BOTTOM_RIGHT=`offset-bottom-right`,e.OFFSET_BOTTOM_LEFT=`offset-bottom-left`,e}({}),o=function(e){return e.DEFAULT=`default`,e.LARGE=`lg`,e}({}),s=function(e){return e.DEFAULT=`error`,e.PRIMARY=`primary`,e}({})})))()}var l,u,d,f,p,m;function h(){return(h=t((()=>{n(),l=e(i(),1),c(),u=r(),d={[a.DEFAULT]:`-right-xxxs -top-xxxs`,[a.OFFSET_BOTTOM_RIGHT]:`-right-xxxs -bottom-xxxs`,[a.OFFSET_TOP_LEFT]:`-left-xxxs -top-xxxs`,[a.OFFSET_BOTTOM_LEFT]:`-left-xxxs -bottom-xxxs`},f={[s.DEFAULT]:`
		bg-error-500

	`,[s.PRIMARY]:`
		bg-primary-800

	`},p={[o.DEFAULT]:`
		h-sm
		min-w-sm
		p-xxxs
		text-xxs
	`,[o.LARGE]:`
		h-lg
		min-w-lg
		p-xxs
		justify-center
		text-2xl
		border-2

	`},m=({offset:e=a.DEFAULT,children:t,className:n,kind:r=s.DEFAULT,size:i=o.DEFAULT})=>(0,u.jsx)(`div`,{className:(0,l.default)(`notification-badge`,`absolute`,`inline-flex`,`items-center`,`rounded-full`,`border`,`border-white`,`text-center`,`font-bold`,`leading-none`,`text-white`,`whitespace-nowrap`,`gap-xxxs`,d[e],f[r],p[i],n),children:t}),m.__docgenInfo={description:``,methods:[],displayName:`UiNotificationBadge`,props:{offset:{required:!1,tsType:{name:`EBadgeOffset`},description:``,defaultValue:{value:`EBadgeOffset.DEFAULT`,computed:!0}},children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},kind:{required:!1,tsType:{name:`EBadgeTypes`},description:``,defaultValue:{value:`EBadgeTypes.DEFAULT`,computed:!0}},size:{required:!1,tsType:{name:`EBadgeSizes`},description:``,defaultValue:{value:`EBadgeSizes.DEFAULT`,computed:!0}},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}var g,_,v,y,b;function x(){return(x=t((()=>{h(),c(),n(),g=r(),_={title:`Components/UiNotificationBadge`,component:m,argTypes:{offset:{control:{type:`select`},options:Object.values(a),description:`The position of the badge relative to its container`},kind:{control:{type:`select`},options:Object.values(s),description:`Color types badges`},children:{control:{type:`text`}},size:{control:{type:`select`},options:Object.values(o),description:`Badge sizes`}},args:{offset:a.DEFAULT,kind:s.DEFAULT,size:o.DEFAULT,children:`1`}},v={render:e=>(0,g.jsxs)(`div`,{className:`flex gap-sm`,children:[(0,g.jsx)(`div`,{className:`relative`,children:(0,g.jsx)(m,{...e})}),(0,g.jsx)(`div`,{className:`relative size-xxl rounded-full bg-primary`,children:(0,g.jsx)(m,{...e})})]})},y={render:e=>(0,g.jsxs)(`div`,{className:`flex h-xxl w-xxxxl gap-md rounded-xs bg-secondary-alt-600 p-xxs`,children:[(0,g.jsx)(`div`,{className:`relative`,children:(0,g.jsx)(m,{...e,size:o.DEFAULT,offset:a.OFFSET_TOP_LEFT})}),(0,g.jsx)(`div`,{className:`relative`,children:(0,g.jsx)(m,{...e,size:o.LARGE,offset:a.OFFSET_TOP_LEFT})})]})},b=[`Primary`,`Variant`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex gap-sm">
            <div className="relative">
                <UiNotificationBadge {...args} />
            </div>
            <div className="relative size-xxl rounded-full bg-primary">
                <UiNotificationBadge {...args} />
            </div>

        </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex h-xxl w-xxxxl gap-md rounded-xs bg-secondary-alt-600 p-xxs">
            <div className="relative">
                <UiNotificationBadge {...args} size={EBadgeSizes.DEFAULT} offset={EBadgeOffset.OFFSET_TOP_LEFT} />
            </div>
            <div className="relative">
                <UiNotificationBadge {...args} size={EBadgeSizes.LARGE} offset={EBadgeOffset.OFFSET_TOP_LEFT} />
            </div>

        </div>
}`,...y.parameters?.docs?.source}}}})))()}x();export{v as Primary,y as Variant,b as __namedExportsOrder,_ as default};