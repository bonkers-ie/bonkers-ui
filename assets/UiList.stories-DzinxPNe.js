import{j as i}from"./jsx-runtime-u17CrQMm.js";import"./iframe-CSy_xDkl.js";import{c as l}from"./index-DmBNOwg2.js";import{U as x,E as U}from"./UiIcon-CMPyT7MU.js";import"./preload-helper-PPVm8Dsz.js";var r=(e=>(e.VERTICAL="VERTICAL",e.HORIZONTAL="HORIZONTAL",e))(r||{}),s=(e=>(e.DEFAULT="DEFAULT",e.COMPACT="COMPACT",e))(s||{}),a=(e=>(e.XS="XS",e.SM="SM",e.MD="MD",e))(a||{});const u={[s.DEFAULT]:"gap-xxxs",[s.COMPACT]:"gap-xxs"},t=({children:e,prefix:o,className:d,space:I=s.DEFAULT})=>i.jsxs("li",{className:l("flex",u[I],d),children:[o?i.jsx("span",{className:"inline-flex h-lh items-center",children:o}):null,e?i.jsx("span",{children:e}):null]});t.__docgenInfo={description:"",methods:[],displayName:"UiListItem",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},prefix:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},space:{required:!1,tsType:{name:"EListItemSpacing"},description:"",defaultValue:{value:"EListItemSpacing.DEFAULT",computed:!0}}}};const g={[r.VERTICAL]:"flex-col",[r.HORIZONTAL]:"flex-row"},f={[s.DEFAULT]:"gap-sm",[s.COMPACT]:"gap-xxs"},T={[a.XS]:"text-xs",[a.SM]:"text-sm",[a.MD]:"text-md"},c=({children:e,direction:o=r.VERTICAL,spacing:d=s.DEFAULT,size:I=a.SM,className:L})=>i.jsx("ul",{className:l("ui-list","flex",g[o],f[d],T[I],L),children:e});c.__docgenInfo={description:"",methods:[],displayName:"UiList",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},direction:{required:!1,tsType:{name:"EListItemDirection"},description:"",defaultValue:{value:"EListItemDirection.VERTICAL",computed:!0}},size:{required:!1,tsType:{name:"EListItemSize"},description:"",defaultValue:{value:"EListItemSize.SM",computed:!0}},spacing:{required:!1,tsType:{name:"EListItemSpacing"},description:"",defaultValue:{value:"EListItemSpacing.DEFAULT",computed:!0}},className:{required:!1,tsType:{name:"string"},description:""}}};const R={title:"Components/UiList",component:c,argTypes:{direction:{control:{type:"select"},options:Object.values(r),description:"Direction"},size:{control:{type:"select"},options:Object.values(a),description:"Icon Size"},spacing:{control:{type:"select"},options:Object.values(s),description:"Icon Spacing"}},args:{direction:r.VERTICAL,size:a.SM,spacing:s.DEFAULT}},n=()=>i.jsx(x,{name:["far","face-smile"],size:U.SM}),m={render:e=>i.jsxs(c,{direction:e.direction,size:e.size,spacing:e.spacing,children:[i.jsx(t,{prefix:n(),children:"Item 1"}),i.jsx(t,{prefix:n(),children:"Item 2"}),i.jsx(t,{prefix:n(),children:"Item 3"})]})},p={render:e=>i.jsxs("div",{className:"flex flex-col gap-lg",children:[i.jsxs(c,{direction:e.direction,size:e.size,spacing:e.spacing,children:[i.jsx(t,{children:"Item 1"}),i.jsx(t,{children:"Item 2"}),i.jsx(t,{children:"Item 3"})]}),i.jsxs(c,{direction:e.direction,size:e.size,spacing:e.spacing,children:[i.jsxs(t,{prefix:n(),children:["Item 1",i.jsx("br",{})," Item 1"]}),i.jsx(t,{prefix:n(),children:"Item 2"}),i.jsx(t,{prefix:n(),children:"Item 3"})]}),i.jsxs(c,{direction:r.HORIZONTAL,size:e.size,spacing:e.spacing,children:[i.jsxs(t,{prefix:n(),children:["Item 1",i.jsx("br",{})," Item 1"]}),i.jsx(t,{prefix:n(),children:"Item 2"}),i.jsx(t,{children:"Item 3"})]}),i.jsxs(c,{direction:r.HORIZONTAL,size:e.size,spacing:e.spacing,children:[i.jsxs(t,{children:["Item 1",i.jsx("br",{})," Item 1"]}),i.jsx(t,{children:"Item 2"}),i.jsx(t,{children:"Item 3"})]})]})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <UiList direction={args.direction} size={args.size} spacing={args.spacing}>
            <UiListItem prefix={IconComponent()}>Item 1</UiListItem>
            <UiListItem prefix={IconComponent()}>Item 2</UiListItem>
            <UiListItem prefix={IconComponent()}>Item 3</UiListItem>
        </UiList>
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const E=["Primary","Variants"];export{m as Primary,p as Variants,E as __namedExportsOrder,R as default};
