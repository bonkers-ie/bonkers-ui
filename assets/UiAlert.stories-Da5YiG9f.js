import{j as n}from"./jsx-runtime-D_zvdyIk.js";import"./index-BCtMShv3.js";import{c as p}from"./index-CeDo_qPC.js";import{U as m,E as R}from"./UiIcon-B1g12wmk.js";import"./index-F8yFdyN0.js";var r=(e=>(e.PRIMARY="PRIMARY",e.SECONDARY="SECONDARY",e.ERROR="ERROR",e.WARNING="WARNING",e))(r||{});const u={[r.PRIMARY]:"border-primary text-primary ",[r.SECONDARY]:"'border-secondary text-secondary",[r.ERROR]:"border-error text-error",[r.WARNING]:"border-warning text-warning"},s=({children:e,kind:c=r.PRIMARY,className:l,icon:a})=>n.jsxs("div",{className:p("ui-alert","flex","gap-sm","rounded-xl","border","bg-white","p-sm","leading-normal","text-xs",u[c],l),children:[a?n.jsx(m,{name:a,size:R.SM}):null,e]});s.__docgenInfo={description:"",methods:[],displayName:"UiAlert",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},kind:{required:!1,tsType:{name:"EAlertTypes"},description:"",defaultValue:{value:"EAlertTypes.PRIMARY",computed:!0}},icon:{required:!1,tsType:{name:"IconProp"},description:""}}};const g={title:"Components/UiAlert",component:s,argTypes:{kind:{control:{type:"select"},options:Object.values(r),description:"Alert Kind"},children:{control:{type:"text"},description:"Alert Children"}},args:{kind:r.PRIMARY,children:"This is a default alert"}},t={render:e=>n.jsx(s,{kind:e.kind,icon:["far","face-smile"],children:n.jsx("span",{className:"text-secondary",children:e.children})})};var i,o,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <UiAlert kind={args.kind} icon={["far", "face-smile"]}>
            <span className="text-secondary">
                {args.children}
            </span>

        </UiAlert>
}`,...(d=(o=t.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};const h=["Primary"];export{t as Primary,h as __namedExportsOrder,g as default};
