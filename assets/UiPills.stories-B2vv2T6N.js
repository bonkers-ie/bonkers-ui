import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{E as r,a as n,U as l}from"./UiPills-B6istNis.js";import"./index-BCtMShv3.js";import{U as c,E as d}from"./UiIcon-B1g12wmk.js";import"./index-CeDo_qPC.js";import"./UiTypography-CR1Z7O2Y.js";import"./index-F8yFdyN0.js";const U={title:"Components/UiPills",component:l,argTypes:{size:{control:{type:"select"},options:Object.values(r),description:"Pills Size"},kind:{control:{type:"select"},options:Object.values(n),description:"Pills Kind"},children:{control:{type:"text"},description:"Pills Children"}},args:{kind:n.PRIMARY,size:r.SMALL,children:"Pills"}},e={render:i=>s.jsx(l,{kind:i.kind,size:i.size,icon:s.jsx(c,{name:["far","face-smile"],size:d.XS}),children:i.children})};var o,t,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <UiPills kind={args.kind} size={args.size} icon={<UiIcon name={["far", "face-smile"]} size={ESize.XS} />}>
            {args.children}
        </UiPills>
}`,...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const g=["Primary"];export{e as Primary,g as __namedExportsOrder,U as default};
