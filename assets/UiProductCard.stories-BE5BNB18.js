import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{g as n}from"./iframe-DYDs02wk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{t as i}from"./classnames-D09xBJOL.js";import{a,n as o,o as s,r as c,s as l,t as u}from"./UiTypography-BwoLwmnk.js";import{r as d,t as f}from"./colors-CdX8yQ1z.js";import{i as p,n as m,r as h,t as g}from"./UiIcon-DFqNdBsp.js";import{a as _,n as v,r as y,t as b}from"./UiPills-TydMa28I.js";var x,S,C;function w(){return(w=t((()=>{n(),_(),v(),o(),l(),d(),x=e(i(),1),S=r(),C=({badgeText:e,title:t,subtitle:n,header:r,className:i})=>(0,S.jsxs)(`div`,{className:(0,x.default)(`relative flex flex-col gap-sm rounded-2xl border border-secondary-alt-500 bg-white`,`px-xs py-sm`,i),children:[e&&(0,S.jsx)(`div`,{className:`absolute -top-xxs right-xs`,children:(0,S.jsx)(b,{rounded:!0,kind:y.ACCENT_ALT,children:e})}),r,(0,S.jsxs)(`div`,{className:`grid gap-xxs`,children:[(0,S.jsx)(u,{size:s.MD,weight:a.BOLD,align:c.LEFT,color:f.SECONDARY,lineHeight:!0,children:t}),(0,S.jsx)(u,{size:s.XS,align:c.LEFT,color:f.SECONDARY_400,lineHeight:!0,children:n})]})]}),C.__docgenInfo={description:``,methods:[],displayName:`UiProductCard`,props:{badgeText:{required:!1,tsType:{name:`string`},description:``},title:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},subtitle:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},header:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}var T,E,D,O,k,A;function j(){return(j=t((()=>{n(),w(),m(),p(),T=r(),E={title:`Components/UiProductCard`,component:C,argTypes:{title:{control:{type:`text`},description:`The title text`},subtitle:{control:{type:`text`},description:`The subtitle text`},header:{description:`The element to display in the header area of the card`},badgeText:{description:`The text or component displayed in the badge`}},args:{title:`This is a Title`,subtitle:`This is a Subtitle`,badgeText:``,header:null}},D={render:e=>{let t=(0,T.jsx)(`div`,{className:`flex w-fit rounded-full bg-primary p-sm text-white`,children:(0,T.jsx)(g,{name:[`far`,`face-smile`],size:h.LG})});return(0,T.jsx)(C,{...e,header:t})}},O={render:e=>{let t=(0,T.jsx)(`div`,{className:`flex w-fit rounded-full bg-primary p-sm text-white`,children:(0,T.jsx)(g,{name:[`far`,`face-angry`],size:h.MD})}),n=(0,T.jsx)(`div`,{className:`flex w-fit rounded-full bg-primary p-xxs text-white`,children:(0,T.jsx)(g,{name:[`far`,`face-meh`],size:h.LG})});return(0,T.jsxs)(`div`,{className:`grid w-[412px] grid-cols-2 gap-xs`,children:[(0,T.jsx)(C,{...e,header:t}),(0,T.jsx)(C,{...e,header:n,badgeText:`UP TO €586 OFF`})]})}},k={args:{title:`This is a Titleajhs`,subtitle:`This is a Subtitle uablobv`,badgeText:``,header:null},render:e=>{let t=(0,T.jsx)(`div`,{className:`flex w-fit rounded-full bg-primary p-sm text-white`,children:(0,T.jsx)(g,{name:[`far`,`face-smile`],size:h.LG})});return(0,T.jsx)(C,{...e,header:t})}},A=[`Default`,`Variants`,`Test1`],D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => {
    const Header = <div className="flex w-fit rounded-full bg-primary p-sm text-white">
                <UiIcon name={["far", "face-smile"]} size={ESize.LG} />
            </div>;
    return <UiProductCard {...args} header={Header} />;
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}}})))()}j();export{D as Default,k as Test1,O as Variants,A as __namedExportsOrder,E as default};