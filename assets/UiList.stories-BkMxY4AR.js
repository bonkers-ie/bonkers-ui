import{j as i}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-Tx73yq3h.js";import{c as f}from"./index-Cv_nbNIh.js";import{U as j}from"./UiIcon-DtXtfvyl.js";var r=(e=>(e.VERTICAL="VERTICAL",e.HORIZONTAL="HORIZONTAL",e))(r||{}),s=(e=>(e.DEFAULT="DEFAULT",e.COMPACT="COMPACT",e))(s||{}),a=(e=>(e.SM="SM",e.MD="MD",e))(a||{});const C={[s.DEFAULT]:"gap-xxxs",[s.COMPACT]:"gap-xxs"},t=({children:e,prefix:o,className:d,space:I=s.DEFAULT})=>i.jsxs("li",{className:f("flex",C[I],d),children:[o?i.jsx("span",{className:"w-[1em]",children:o}):null,e?i.jsx("span",{children:e}):null]});t.__docgenInfo={description:"",methods:[],displayName:"UiListItem",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},prefix:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},space:{required:!1,tsType:{name:"EListItemSpacing"},description:"",defaultValue:{value:"EListItemSpacing.DEFAULT",computed:!0}}}};const h={[r.VERTICAL]:"flex-col",[r.HORIZONTAL]:"flex-row"},z={[s.DEFAULT]:"gap-sm",[s.COMPACT]:"gap-xxs"},A={[a.SM]:"text-sm",[a.MD]:"text-md"},c=({children:e,direction:o=r.VERTICAL,spacing:d=s.DEFAULT,size:I=a.SM,className:T})=>i.jsx("ul",{className:f("ui-list","flex",h[o],z[d],A[I],T),children:e});c.__docgenInfo={description:"",methods:[],displayName:"UiList",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},direction:{required:!1,tsType:{name:"EListItemDirection"},description:"",defaultValue:{value:"EListItemDirection.VERTICAL",computed:!0}},size:{required:!1,tsType:{name:"EListItemSize"},description:"",defaultValue:{value:"EListItemSize.SM",computed:!0}},spacing:{required:!1,tsType:{name:"EListItemSpacing"},description:"",defaultValue:{value:"EListItemSpacing.DEFAULT",computed:!0}},className:{required:!1,tsType:{name:"string"},description:""}}};const y={title:"Components/UiList",component:c,argTypes:{direction:{control:{type:"select"},options:Object.values(r),description:"Direction"},size:{control:{type:"select"},options:Object.values(a),description:"Icon Size"},spacing:{control:{type:"select"},options:Object.values(s),description:"Icon Spacing"}},args:{direction:r.VERTICAL,size:a.SM,spacing:s.DEFAULT}},n=()=>i.jsx(j,{name:["far","face-smile"]}),m={render:e=>i.jsxs(c,{direction:e.direction,size:e.size,spacing:e.spacing,children:[i.jsx(t,{prefix:n(),children:"Item 1"}),i.jsx(t,{prefix:n(),children:"Item 2"}),i.jsx(t,{prefix:n(),children:"Item 3"})]})},p={render:e=>i.jsxs("div",{className:"flex flex-col gap-lg",children:[i.jsxs(c,{direction:e.direction,size:e.size,spacing:e.spacing,children:[i.jsx(t,{children:"Item 1"}),i.jsx(t,{children:"Item 2"}),i.jsx(t,{children:"Item 3"})]}),i.jsxs(c,{direction:e.direction,size:e.size,spacing:e.spacing,children:[i.jsxs(t,{prefix:n(),children:["Item 1",i.jsx("br",{})," Item 1"]}),i.jsx(t,{prefix:n(),children:"Item 2"}),i.jsx(t,{prefix:n(),children:"Item 3"})]}),i.jsxs(c,{direction:r.HORIZONTAL,size:e.size,spacing:e.spacing,children:[i.jsxs(t,{prefix:n(),children:["Item 1",i.jsx("br",{})," Item 1"]}),i.jsx(t,{prefix:n(),children:"Item 2"}),i.jsx(t,{children:"Item 3"})]}),i.jsxs(c,{direction:r.HORIZONTAL,size:e.size,spacing:e.spacing,children:[i.jsxs(t,{children:["Item 1",i.jsx("br",{})," Item 1"]}),i.jsx(t,{children:"Item 2"}),i.jsx(t,{children:"Item 3"})]})]})};var l,L,x;m.parameters={...m.parameters,docs:{...(l=m.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <UiList direction={args.direction} size={args.size} spacing={args.spacing}>
            <UiListItem prefix={IconComponent()}>Item 1</UiListItem>
            <UiListItem prefix={IconComponent()}>Item 2</UiListItem>
            <UiListItem prefix={IconComponent()}>Item 3</UiListItem>
        </UiList>
}`,...(x=(L=m.parameters)==null?void 0:L.docs)==null?void 0:x.source}}};var U,u,g;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(g=(u=p.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const D=["Primary","Variants"];export{m as Primary,p as Variants,D as __namedExportsOrder,y as default};
