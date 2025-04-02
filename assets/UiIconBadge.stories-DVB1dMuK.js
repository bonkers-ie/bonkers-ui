import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./index-BCtMShv3.js";import{E as i,U as n}from"./UiIcon-Bo_kfMvP.js";import{c as I}from"./index-CeDo_qPC.js";var s=(c=>(c.PRIMARY="primary",c.LIGHT="light",c.DARK="dark",c.WARNING="warning",c.ERROR="error",c))(s||{});const h={[i.SM]:"p-xxs",[i.MD]:"p-xs",[i.LG]:"p-sm",[i.XL]:"p-lg"},R={[s.PRIMARY]:"bg-primary-500 text-white",[s.LIGHT]:"bg-primary-100 text-primary-800",[s.DARK]:"bg-primary-800 text-white",[s.WARNING]:"bg-warning-500 text-white",[s.ERROR]:"bg-error-500 text-white"},a=({size:c=i.MD,kind:p=s.PRIMARY,className:g,children:z})=>e.jsx("div",{className:I("rounded-full","inline-flex","items-center","justify-center","aspect-square",h[c],R[p],g),children:z});a.__docgenInfo={description:"",methods:[],displayName:"UiIconBadge",props:{size:{required:!1,tsType:{name:"union",raw:"ESize.SM | ESize.MD | ESize.LG | ESize.XL",elements:[{name:"ESize.SM"},{name:"ESize.MD"},{name:"ESize.LG"},{name:"ESize.XL"}]},description:"",defaultValue:{value:"ESize.MD",computed:!0}},kind:{required:!1,tsType:{name:"EIconBadgeKind"},description:"",defaultValue:{value:"EIconBadgeKind.PRIMARY",computed:!0}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!0,tsType:{name:"string"},description:""}}};const E={title:"Components/UiIconBadge",component:a,argTypes:{size:{control:{type:"select"},options:[i.SM,i.MD,i.LG,i.XL],description:"Badge Size"},kind:{control:{type:"select"},options:Object.values(s),description:"Badge Kind"}},args:{size:i.MD,kind:s.PRIMARY,children:e.jsx(n,{name:["far","face-smile"],size:i.MD})}},r={},d={render:()=>e.jsxs("div",{className:"flex flex-col gap-lg",children:[e.jsxs("div",{className:"flex flex-col gap-sm",children:[e.jsx("h3",{children:"Size Variants"}),e.jsxs("div",{className:"flex gap-sm items-center",children:[e.jsx(a,{size:i.SM,children:e.jsx(n,{name:["far","face-smile"],size:i.SM})}),e.jsx(a,{size:i.MD,children:e.jsx(n,{name:["far","face-smile"],size:i.MD})}),e.jsx(a,{size:i.LG,children:e.jsx(n,{name:["far","face-smile"],size:i.LG})}),e.jsx(a,{size:i.XL,children:e.jsx(n,{name:["far","face-smile"],size:i.XL})})]})]}),e.jsxs("div",{className:"flex flex-col gap-sm",children:[e.jsx("h3",{children:"Kind Variants"}),e.jsxs("div",{className:"flex gap-sm",children:[e.jsx(a,{kind:s.PRIMARY,children:e.jsx(n,{name:["far","face-smile"],size:i.MD})}),e.jsx(a,{kind:s.LIGHT,children:e.jsx(n,{name:["far","face-smile"],size:i.MD})}),e.jsx(a,{kind:s.DARK,children:e.jsx(n,{name:["far","face-smile"],size:i.MD})}),e.jsx(a,{kind:s.WARNING,children:e.jsx(n,{name:["far","face-smile"],size:i.MD})}),e.jsx(a,{kind:s.ERROR,children:e.jsx(n,{name:["far","face-smile"],size:i.MD})})]})]}),e.jsxs("div",{className:"flex flex-col gap-sm",children:[e.jsx("h3",{children:"Custom Child"}),e.jsx("div",{className:"flex gap-sm",children:e.jsx(a,{size:i.LG,children:"Custom"})})]})]})};var l,m,o;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(o=(m=r.parameters)==null?void 0:m.docs)==null?void 0:o.source}}};var t,f,x;d.parameters={...d.parameters,docs:{...(t=d.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-lg">
            <div className="flex flex-col gap-sm">
                <h3>Size Variants</h3>
                <div className="flex gap-sm items-center">
                    <UiIconBadge size={ESize.SM}>
                        <UiIcon name={["far", "face-smile"]} size={ESize.SM} />
                    </UiIconBadge>
                    <UiIconBadge size={ESize.MD}>
                        <UiIcon name={["far", "face-smile"]} size={ESize.MD} />
                    </UiIconBadge>
                    <UiIconBadge size={ESize.LG}>
                        <UiIcon name={["far", "face-smile"]} size={ESize.LG} />
                    </UiIconBadge>
                    <UiIconBadge size={ESize.XL}>
                        <UiIcon name={["far", "face-smile"]} size={ESize.XL} />
                    </UiIconBadge>
                </div>
            </div>

            <div className="flex flex-col gap-sm">
                <h3>Kind Variants</h3>
                <div className="flex gap-sm">
                    <UiIconBadge kind={EIconBadgeKind.PRIMARY}>
                        <UiIcon name={["far", "face-smile"]} size={ESize.MD} />
                    </UiIconBadge>
                    <UiIconBadge kind={EIconBadgeKind.LIGHT}>
                        <UiIcon name={["far", "face-smile"]} size={ESize.MD} />
                    </UiIconBadge>
                    <UiIconBadge kind={EIconBadgeKind.DARK}>
                        <UiIcon name={["far", "face-smile"]} size={ESize.MD} />
                    </UiIconBadge>
                    <UiIconBadge kind={EIconBadgeKind.WARNING}>
                        <UiIcon name={["far", "face-smile"]} size={ESize.MD} />
                    </UiIconBadge>
                    <UiIconBadge kind={EIconBadgeKind.ERROR}>
                        <UiIcon name={["far", "face-smile"]} size={ESize.MD} />
                    </UiIconBadge>
                </div>
            </div>

            <div className="flex flex-col gap-sm">
                <h3>Custom Child</h3>
                <div className="flex gap-sm">
                    <UiIconBadge size={ESize.LG}>
                        Custom
                    </UiIconBadge>
                </div>
            </div>
        </div>
}`,...(x=(f=d.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const U=["Default","Variants"];export{r as Default,d as Variants,U as __namedExportsOrder,E as default};
