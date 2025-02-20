import{j as i}from"./jsx-runtime-D_zvdyIk.js";import"./index-DmM0KDA7.js";import{c as f}from"./index-C7T3p30y.js";import{U as j}from"./UiIcon-D0b3HfTx.js";const t=({children:e,prefix:a})=>i.jsxs("li",{className:"flex gap-xxxs",children:[a?i.jsx("span",{className:"w-[1em]",children:a}):null,e?i.jsx("span",{children:e}):null]});t.__docgenInfo={description:"",methods:[],displayName:"UiListItem",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},prefix:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};var n=(e=>(e.VERTICAL="VERTICAL",e.HORIZONTAL="HORIZONTAL",e))(n||{}),c=(e=>(e.DEFAULT="DEFAULT",e.COMPACT="COMPACT",e))(c||{}),o=(e=>(e.SM="SM",e.MD="MD",e))(o||{});const T={[n.VERTICAL]:"flex-col",[n.HORIZONTAL]:"flex-row"},h={[c.DEFAULT]:"gap-sm",[c.COMPACT]:"gap-xxs"},z={[o.SM]:"text-sm",[o.MD]:"text-md"},r=({children:e,direction:a=n.VERTICAL,spacing:g=c.DEFAULT,size:u=o.SM})=>i.jsx("ul",{className:f("ui-list","flex",T[a],h[g],z[u]),children:e});r.__docgenInfo={description:"",methods:[],displayName:"UiList",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},direction:{required:!1,tsType:{name:"EListItemDirection"},description:"",defaultValue:{value:"EListItemDirection.VERTICAL",computed:!0}},size:{required:!1,tsType:{name:"EListItemSize"},description:"",defaultValue:{value:"EListItemSize.SM",computed:!0}},spacing:{required:!1,tsType:{name:"EListItemSpacing"},description:"",defaultValue:{value:"EListItemSpacing.DEFAULT",computed:!0}}}};const N={title:"Components/UiList",component:r,argTypes:{direction:{control:{type:"select"},options:Object.values(n),description:"Direction"},size:{control:{type:"select"},options:Object.values(o),description:"Icon Size"},spacing:{control:{type:"select"},options:Object.values(c),description:"Icon Spacing"}},args:{direction:n.VERTICAL,size:o.SM,spacing:c.DEFAULT}},s=()=>i.jsx(j,{name:["far","face-smile"]}),m={render:e=>i.jsxs(r,{direction:e.direction,size:e.size,spacing:e.spacing,children:[i.jsx(t,{prefix:s(),children:"Item 1"}),i.jsx(t,{prefix:s(),children:"Item 2"}),i.jsx(t,{prefix:s(),children:"Item 3"})]})},p={render:e=>i.jsxs("div",{className:"flex flex-col gap-lg",children:[i.jsxs(r,{direction:e.direction,size:e.size,spacing:e.spacing,children:[i.jsx(t,{children:"Item 1"}),i.jsx(t,{children:"Item 2"}),i.jsx(t,{children:"Item 3"})]}),i.jsxs(r,{direction:e.direction,size:e.size,spacing:e.spacing,children:[i.jsxs(t,{prefix:s(),children:["Item 1",i.jsx("br",{})," Item 1"]}),i.jsx(t,{prefix:s(),children:"Item 2"}),i.jsx(t,{prefix:s(),children:"Item 3"})]}),i.jsxs(r,{direction:n.HORIZONTAL,size:e.size,spacing:e.spacing,children:[i.jsxs(t,{prefix:s(),children:["Item 1",i.jsx("br",{})," Item 1"]}),i.jsx(t,{prefix:s(),children:"Item 2"}),i.jsx(t,{children:"Item 3"})]}),i.jsxs(r,{direction:n.HORIZONTAL,size:e.size,spacing:e.spacing,children:[i.jsxs(t,{children:["Item 1",i.jsx("br",{})," Item 1"]}),i.jsx(t,{children:"Item 2"}),i.jsx(t,{children:"Item 3"})]})]})};var I,d,l;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => <UiList direction={args.direction} size={args.size} spacing={args.spacing}>
            <UiListItem prefix={IconComponent()}>Item 1</UiListItem>
            <UiListItem prefix={IconComponent()}>Item 2</UiListItem>
            <UiListItem prefix={IconComponent()}>Item 3</UiListItem>
        </UiList>
}`,...(l=(d=m.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var L,x,U;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => <div className='flex flex-col gap-lg'>
            <UiList direction={args.direction} size={args.size} spacing={args.spacing}>
                <UiListItem>Item 1</UiListItem>
                <UiListItem>Item 2</UiListItem>
                <UiListItem>Item 3</UiListItem>
            </UiList>
            <UiList direction={args.direction} size={args.size} spacing={args.spacing}>
                <UiListItem prefix={IconComponent()}>Item 1<br /> Item 1</UiListItem>
                <UiListItem prefix={IconComponent()}>Item 2</UiListItem>
                <UiListItem prefix={IconComponent()}>Item 3</UiListItem>
            </UiList>
            <UiList direction={EListItemDirection.HORIZONTAL} size={args.size} spacing={args.spacing}>
                <UiListItem prefix={IconComponent()}>Item 1<br /> Item 1</UiListItem>
                <UiListItem prefix={IconComponent()}>Item 2</UiListItem>
                <UiListItem>Item 3</UiListItem>
            </UiList>
            <UiList direction={EListItemDirection.HORIZONTAL} size={args.size} spacing={args.spacing}>
                <UiListItem>Item 1<br /> Item 1</UiListItem>
                <UiListItem>Item 2</UiListItem>
                <UiListItem>Item 3</UiListItem>
            </UiList>
        </div>
}`,...(U=(x=p.parameters)==null?void 0:x.docs)==null?void 0:U.source}}};const E=["Primary","variants"];export{m as Primary,E as __namedExportsOrder,N as default,p as variants};
