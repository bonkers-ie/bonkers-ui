import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-D-_bU5Uf.js";import{c as f}from"./index-DBazurmw.js";import{U as g,a as T}from"./UiPills-Bib-3-kj.js";import{U as c,E as m,d as p,a as b,b as x}from"./UiTypography-CUu1AkYq.js";import{U as n,E as o}from"./UiIcon-BD3uLNGB.js";const s=({badgeText:r,title:a,subtitle:l,header:u,className:h})=>e.jsxs("div",{className:f("relative flex flex-col gap-sm rounded-2xl border border-secondary-alt-500 bg-white","px-xs py-sm",h),children:[r&&e.jsx("div",{className:"absolute -top-xxs right-xs",children:e.jsx(g,{rounded:!0,kind:T.ACCENT_ALT,children:r})}),u,e.jsxs("div",{className:"grid gap-xxs",children:[e.jsx(c,{size:x.MD,weight:b.BOLD,align:p.LEFT,color:m.SECONDARY,lineHeight:!0,children:a}),e.jsx(c,{size:x.XS,align:p.LEFT,color:m.SECONDARY_400,lineHeight:!0,children:l})]})]});s.__docgenInfo={description:"",methods:[],displayName:"UiProductCard",props:{badgeText:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},subtitle:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},header:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const U={title:"Components/UiProductCard",component:s,argTypes:{title:{control:{type:"text"},description:"The title text"},subtitle:{control:{type:"text"},description:"The subtitle text"},header:{description:"The element to display in the header area of the card"},badgeText:{description:"The text or component displayed in the badge"}},args:{title:"This is a Title",subtitle:"This is a Subtitle",badgeText:"",header:null}},t={render:r=>{const a=e.jsx("div",{className:"flex w-fit rounded-full bg-primary p-sm text-white",children:e.jsx(n,{name:["far","face-smile"],size:o.LG})});return e.jsx(s,{...r,header:a})}},i={render:r=>{const a=e.jsx("div",{className:"flex w-fit rounded-full bg-primary p-sm text-white",children:e.jsx(n,{name:["far","face-angry"],size:o.MD})}),l=e.jsx("div",{className:"flex w-fit rounded-full bg-primary p-xxs text-white",children:e.jsx(n,{name:["far","face-meh"],size:o.LG})});return e.jsxs("div",{className:"grid w-[412px] grid-cols-2 gap-xs",children:[e.jsx(s,{...r,header:a}),e.jsx(s,{...r,header:l,badgeText:"UP TO €586 OFF"})]})}},d={args:{title:"This is a Titleajhs",subtitle:"This is a Subtitle uablobv",badgeText:"",header:null},render:r=>{const a=e.jsx("div",{className:"flex w-fit rounded-full bg-primary p-sm text-white",children:e.jsx(n,{name:["far","face-smile"],size:o.LG})});return e.jsx(s,{...r,header:a})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => {
    const Header = <div className="flex w-fit rounded-full bg-primary p-sm text-white">
                <UiIcon name={["far", "face-smile"]} size={ESize.LG} />
            </div>;
    return <UiProductCard {...args} header={Header} />;
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => {
    const Header1 = <div className="flex w-fit rounded-full bg-primary p-sm text-white">
                <UiIcon name={["far", "face-angry"]} size={ESize.MD} />
            </div>;
    const Header2 = <div className="flex w-fit rounded-full bg-primary p-xxs text-white">
                <UiIcon name={["far", "face-meh"]} size={ESize.LG} />
            </div>;
    return <div className="grid w-[412px] grid-cols-2 gap-xs">
                <UiProductCard {...args} header={Header1} />
                <UiProductCard {...args} header={Header2} badgeText="UP TO €586 OFF" />
            </div>;
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: "This is a Titleajhs",
    subtitle: "This is a Subtitle uablobv",
    badgeText: "",
    header: null
  },
  render: args => {
    const Header = <div className="flex w-fit rounded-full bg-primary p-sm text-white">
                <UiIcon name={["far", "face-smile"]} size={ESize.LG} />
            </div>;
    return <UiProductCard {...args} header={Header} />;
  }
}`,...d.parameters?.docs?.source}}};const z=["Default","Variants","Test1"];export{t as Default,d as Test1,i as Variants,z as __namedExportsOrder,U as default};
