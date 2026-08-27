import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./iframe-sYJs1LNi.js";import{E as i,U as c}from"./UiIcon-Df1zD2HM.js";import{c as I}from"./index-Cx-s0aks.js";import"./preload-helper-PPVm8Dsz.js";var n=(o=>(o.PRIMARY="primary",o.SECONDARY="secondary",o.WARNING="warning",o.ERROR="error",o.AI="ai",o))(n||{}),a=(o=>(o.FLAT="flat",o.COLORFUL="colorful",o))(a||{});const p={[i.SM]:"p-xxs",[i.MD]:"p-xs",[i.LG]:"p-sm",[i.XL]:"p-lg"},t={[n.SECONDARY]:{[a.COLORFUL]:"bg-secondary-500",[a.FLAT]:"bg-secondary-alt-200"},[n.PRIMARY]:{[a.COLORFUL]:"bg-primary-alt-700",[a.FLAT]:"bg-primary-50"},[n.WARNING]:{[a.COLORFUL]:"bg-warning-600",[a.FLAT]:"bg-warning-300"},[n.ERROR]:{[a.COLORFUL]:"bg-error-500",[a.FLAT]:"bg-error-100"},[n.AI]:{[a.COLORFUL]:"bg-[linear-gradient(225deg,#8b8bfc_16.73%,#282894_86.38%)]",[a.FLAT]:"bg-accent-300"}},s=({size:o=i.MD,kind:l=n.PRIMARY,colorType:m=a.COLORFUL,className:f,children:g})=>e.jsx("div",{className:I("rounded-full","inline-flex","items-center","justify-center","aspect-square","drop-shadow-md drop-shadow-black/25","border-2 border-white","text-white",p[o],t[l][m],f),children:g});s.__docgenInfo={description:"",methods:[],displayName:"UiIconBadge",props:{size:{required:!1,tsType:{name:"union",raw:"ESize.SM | ESize.MD | ESize.LG | ESize.XL",elements:[{name:"ESize.SM"},{name:"ESize.MD"},{name:"ESize.LG"},{name:"ESize.XL"}]},description:"",defaultValue:{value:"ESize.MD",computed:!0}},kind:{required:!1,tsType:{name:"EIconBadgeKind"},description:"",defaultValue:{value:"EIconBadgeKind.PRIMARY",computed:!0}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},colorType:{required:!1,tsType:{name:"EIconBadgeColorType"},description:"",defaultValue:{value:"EIconBadgeColorType.COLORFUL",computed:!0}}}};const L={title:"Components/UiIconBadge",component:s,argTypes:{size:{control:{type:"select"},options:[i.SM,i.MD,i.LG,i.XL],description:"Badge Size"},kind:{control:{type:"select"},options:Object.values(n),description:"Badge Kind"},colorType:{control:{type:"select"},options:Object.values(a),description:"Badge Color Type"}},args:{size:i.MD,kind:n.PRIMARY,colorType:a.COLORFUL,children:e.jsx(c,{name:["far","face-smile"],size:i.MD})}},d={},r={render:()=>e.jsxs("div",{className:"flex flex-col gap-lg",children:[e.jsxs("div",{className:"flex flex-col gap-sm",children:[e.jsx("h3",{children:"Size Variants"}),e.jsxs("div",{className:"flex items-center gap-sm",children:[e.jsx(s,{size:i.SM,children:e.jsx(c,{name:["far","face-smile"],size:i.SM})}),e.jsx(s,{size:i.MD,children:e.jsx(c,{name:["far","face-smile"],size:i.MD})}),e.jsx(s,{size:i.LG,children:e.jsx(c,{name:["far","face-smile"],size:i.LG})}),e.jsx(s,{size:i.XL,children:e.jsx(c,{name:["far","face-smile"],size:i.XL})})]})]}),e.jsxs("div",{className:"flex flex-col gap-sm",children:[e.jsx("h3",{children:"Kind Variants"}),e.jsxs("div",{className:"flex gap-sm",children:[e.jsx(s,{kind:n.PRIMARY,children:e.jsx(c,{name:["far","face-smile"],size:i.MD})}),e.jsx(s,{kind:n.SECONDARY,children:e.jsx(c,{name:["far","face-smile"],size:i.MD})}),e.jsx(s,{kind:n.WARNING,children:e.jsx(c,{name:["far","face-smile"],size:i.MD})}),e.jsx(s,{kind:n.ERROR,children:e.jsx(c,{name:["far","face-smile"],size:i.MD})}),e.jsx(s,{kind:n.AI,children:e.jsx(c,{name:["far","face-smile"],size:i.MD})})]})]}),e.jsxs("div",{className:"flex flex-col gap-sm",children:[e.jsx("h3",{children:"Color Type Variants"}),e.jsxs("div",{className:"flex flex-col gap-sm",children:[e.jsxs("div",{className:"flex gap-sm",children:[e.jsx(s,{kind:n.PRIMARY,colorType:a.COLORFUL,children:e.jsx(c,{name:["far","face-smile"],size:i.MD})}),e.jsx(s,{kind:n.SECONDARY,colorType:a.COLORFUL,children:e.jsx(c,{name:["far","face-smile"],size:i.MD})}),e.jsx(s,{kind:n.WARNING,colorType:a.COLORFUL,children:e.jsx(c,{name:["far","face-smile"],size:i.MD})}),e.jsx(s,{kind:n.ERROR,colorType:a.COLORFUL,children:e.jsx(c,{name:["far","face-smile"],size:i.MD})}),e.jsx(s,{kind:n.AI,colorType:a.COLORFUL,children:e.jsx(c,{name:["far","face-smile"],size:i.MD})})]}),e.jsxs("div",{className:"flex gap-sm",children:[e.jsx(s,{kind:n.PRIMARY,colorType:a.FLAT,children:e.jsx(c,{name:["far","face-smile"],size:i.MD})}),e.jsx(s,{kind:n.SECONDARY,colorType:a.FLAT,children:e.jsx(c,{name:["far","face-smile"],size:i.MD})}),e.jsx(s,{kind:n.WARNING,colorType:a.FLAT,children:e.jsx(c,{name:["far","face-smile"],size:i.MD})}),e.jsx(s,{kind:n.ERROR,colorType:a.FLAT,children:e.jsx(c,{name:["far","face-smile"],size:i.MD})}),e.jsx(s,{kind:n.AI,colorType:a.FLAT,children:e.jsx(c,{name:["far","face-smile"],size:i.MD})})]})]})]}),e.jsxs("div",{className:"flex flex-col gap-sm",children:[e.jsx("h3",{children:"Custom Child"}),e.jsx("div",{className:"flex gap-sm",children:e.jsx(s,{size:i.LG,children:"Custom"})})]})]})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-lg">
            <div className="flex flex-col gap-sm">
                <h3>Size Variants</h3>
                <div className="flex items-center gap-sm">
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
                    <UiIconBadge kind={EIconBadgeKind.SECONDARY}>
                        <UiIcon name={["far", "face-smile"]} size={ESize.MD} />
                    </UiIconBadge>
                    <UiIconBadge kind={EIconBadgeKind.WARNING}>
                        <UiIcon name={["far", "face-smile"]} size={ESize.MD} />
                    </UiIconBadge>
                    <UiIconBadge kind={EIconBadgeKind.ERROR}>
                        <UiIcon name={["far", "face-smile"]} size={ESize.MD} />
                    </UiIconBadge>
                    <UiIconBadge kind={EIconBadgeKind.AI}>
                        <UiIcon name={["far", "face-smile"]} size={ESize.MD} />
                    </UiIconBadge>
                </div>
            </div>

            <div className="flex flex-col gap-sm">
                <h3>Color Type Variants</h3>
                <div className="flex flex-col gap-sm">
                    <div className="flex gap-sm">
                        <UiIconBadge kind={EIconBadgeKind.PRIMARY} colorType={EIconBadgeColorType.COLORFUL}>
                            <UiIcon name={["far", "face-smile"]} size={ESize.MD} />
                        </UiIconBadge>
                        <UiIconBadge kind={EIconBadgeKind.SECONDARY} colorType={EIconBadgeColorType.COLORFUL}>
                            <UiIcon name={["far", "face-smile"]} size={ESize.MD} />
                        </UiIconBadge>
                        <UiIconBadge kind={EIconBadgeKind.WARNING} colorType={EIconBadgeColorType.COLORFUL}>
                            <UiIcon name={["far", "face-smile"]} size={ESize.MD} />
                        </UiIconBadge>
                        <UiIconBadge kind={EIconBadgeKind.ERROR} colorType={EIconBadgeColorType.COLORFUL}>
                            <UiIcon name={["far", "face-smile"]} size={ESize.MD} />
                        </UiIconBadge>
                        <UiIconBadge kind={EIconBadgeKind.AI} colorType={EIconBadgeColorType.COLORFUL}>
                            <UiIcon name={["far", "face-smile"]} size={ESize.MD} />
                        </UiIconBadge>
                    </div>
                    <div className="flex gap-sm">
                        <UiIconBadge kind={EIconBadgeKind.PRIMARY} colorType={EIconBadgeColorType.FLAT}>
                            <UiIcon name={["far", "face-smile"]} size={ESize.MD} />
                        </UiIconBadge>
                        <UiIconBadge kind={EIconBadgeKind.SECONDARY} colorType={EIconBadgeColorType.FLAT}>
                            <UiIcon name={["far", "face-smile"]} size={ESize.MD} />
                        </UiIconBadge>
                        <UiIconBadge kind={EIconBadgeKind.WARNING} colorType={EIconBadgeColorType.FLAT}>
                            <UiIcon name={["far", "face-smile"]} size={ESize.MD} />
                        </UiIconBadge>
                        <UiIconBadge kind={EIconBadgeKind.ERROR} colorType={EIconBadgeColorType.FLAT}>
                            <UiIcon name={["far", "face-smile"]} size={ESize.MD} />
                        </UiIconBadge>
                        <UiIconBadge kind={EIconBadgeKind.AI} colorType={EIconBadgeColorType.FLAT}>
                            <UiIcon name={["far", "face-smile"]} size={ESize.MD} />
                        </UiIconBadge>
                    </div>
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
}`,...r.parameters?.docs?.source}}};const B=["Default","Variants"];export{d as Default,r as Variants,B as __namedExportsOrder,L as default};
