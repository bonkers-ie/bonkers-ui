import{j as i}from"./jsx-runtime-D_zvdyIk.js";import"./index-DmM0KDA7.js";import{c as u}from"./index-C7T3p30y.js";import{U as T}from"./UiIcon-BhDFDDHY.js";const t=({children:e,prefix:o,className:d})=>i.jsxs("li",{className:u("flex gap-xxxs",d),children:[o?i.jsx("span",{className:"w-[1em]",children:o}):null,e?i.jsx("span",{children:e}):null]});t.__docgenInfo={description:"",methods:[],displayName:"UiListItem",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},prefix:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};var n=(e=>(e.VERTICAL="VERTICAL",e.HORIZONTAL="HORIZONTAL",e))(n||{}),c=(e=>(e.DEFAULT="DEFAULT",e.COMPACT="COMPACT",e))(c||{}),a=(e=>(e.SM="SM",e.MD="MD",e))(a||{});const h={[n.VERTICAL]:"flex-col",[n.HORIZONTAL]:"flex-row"},z={[c.DEFAULT]:"gap-sm",[c.COMPACT]:"gap-xxs"},R={[a.SM]:"text-sm",[a.MD]:"text-md"},r=({children:e,direction:o=n.VERTICAL,spacing:d=c.DEFAULT,size:f=a.SM,className:j})=>i.jsx("ul",{className:u("ui-list","flex",h[o],z[d],R[f],j),children:e});r.__docgenInfo={description:"",methods:[],displayName:"UiList",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},direction:{required:!1,tsType:{name:"EListItemDirection"},description:"",defaultValue:{value:"EListItemDirection.VERTICAL",computed:!0}},size:{required:!1,tsType:{name:"EListItemSize"},description:"",defaultValue:{value:"EListItemSize.SM",computed:!0}},spacing:{required:!1,tsType:{name:"EListItemSpacing"},description:"",defaultValue:{value:"EListItemSpacing.DEFAULT",computed:!0}},className:{required:!1,tsType:{name:"string"},description:""}}};const E={title:"Components/UiList",component:r,argTypes:{direction:{control:{type:"select"},options:Object.values(n),description:"Direction"},size:{control:{type:"select"},options:Object.values(a),description:"Icon Size"},spacing:{control:{type:"select"},options:Object.values(c),description:"Icon Spacing"}},args:{direction:n.VERTICAL,size:a.SM,spacing:c.DEFAULT}},s=()=>i.jsx(T,{name:["far","face-smile"]}),m={render:e=>i.jsxs(r,{direction:e.direction,size:e.size,spacing:e.spacing,children:[i.jsx(t,{prefix:s(),children:"Item 1"}),i.jsx(t,{prefix:s(),children:"Item 2"}),i.jsx(t,{prefix:s(),children:"Item 3"})]})},p={render:e=>i.jsxs("div",{className:"flex flex-col gap-lg",children:[i.jsxs(r,{direction:e.direction,size:e.size,spacing:e.spacing,children:[i.jsx(t,{children:"Item 1"}),i.jsx(t,{children:"Item 2"}),i.jsx(t,{children:"Item 3"})]}),i.jsxs(r,{direction:e.direction,size:e.size,spacing:e.spacing,children:[i.jsxs(t,{prefix:s(),children:["Item 1",i.jsx("br",{})," Item 1"]}),i.jsx(t,{prefix:s(),children:"Item 2"}),i.jsx(t,{prefix:s(),children:"Item 3"})]}),i.jsxs(r,{direction:n.HORIZONTAL,size:e.size,spacing:e.spacing,children:[i.jsxs(t,{prefix:s(),children:["Item 1",i.jsx("br",{})," Item 1"]}),i.jsx(t,{prefix:s(),children:"Item 2"}),i.jsx(t,{children:"Item 3"})]}),i.jsxs(r,{direction:n.HORIZONTAL,size:e.size,spacing:e.spacing,children:[i.jsxs(t,{children:["Item 1",i.jsx("br",{})," Item 1"]}),i.jsx(t,{children:"Item 2"}),i.jsx(t,{children:"Item 3"})]})]})};var I,l,L;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => <UiList direction={args.direction} size={args.size} spacing={args.spacing}>
            <UiListItem prefix={IconComponent()}>Item 1</UiListItem>
            <UiListItem prefix={IconComponent()}>Item 2</UiListItem>
            <UiListItem prefix={IconComponent()}>Item 3</UiListItem>
        </UiList>
}`,...(L=(l=m.parameters)==null?void 0:l.docs)==null?void 0:L.source}}};var x,U,g;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(g=(U=p.parameters)==null?void 0:U.docs)==null?void 0:g.source}}};const y=["Primary","Variants"];export{m as Primary,p as Variants,y as __namedExportsOrder,E as default};
