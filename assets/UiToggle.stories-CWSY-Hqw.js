import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./index-DmM0KDA7.js";import{c as a}from"./index-C7T3p30y.js";const c=({children:s,disabled:o=!1,invertOrder:y=!1,checked:n,value:l,defaultChecked:h,onChange:i,...b})=>{const[d,p]=m.useState(h??!1),e=l??n??d,x=()=>{l===void 0&&n===void 0&&p(!d),i==null||i(!e)};return m.useEffect(()=>{n!==void 0&&p(n)},[n]),r.jsx("div",{className:a("ui-toggle"),children:r.jsxs("label",{className:a("flex","cursor-pointer","gap-sm","rounded-full","mt-sm","items-center","w-full","leading-normal","text-md",{"flex-row-reverse":y,"pointer-events-none opacity-50":o}),children:[r.jsxs("span",{className:a("relative","block","h-md"),children:[r.jsx("input",{className:a("absolute","size-0","appearance-none","border-0"),type:"checkbox",checked:e,onChange:x,disabled:o,value:l,...b}),r.jsx("span",{className:a("block","h-md","w-xl","rounded-full",{"bg-primary-500":e&&!o,"bg-secondary-alt-300":!e&&o,"bg-secondary-alt-600":!e&&!o,"bg-primary-300":e&&o})}),r.jsx("span",{className:a("absolute","top-[50%]","block","rounded-full","bg-white","w-[22px]","h-[22px]","translate-x-[1px]","translate-y-[-50%]","ease-in-out","transition-transform","active:shadow-border-secondary","focus:shadow-border-secondary",{"hover:shadow-border-secondary":!e&&!o,"hover:shadow-border-primary":e&&!o,"translate-x-[calc(var(--xl)_-_100%_-_1px)] translate-y-[-50%]":e})})]}),s]})})};c.__docgenInfo={description:"",methods:[],displayName:"UiToggle",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},invertOrder:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},defaultChecked:{required:!1,tsType:{name:"boolean"},description:""},checked:{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""}}};const j={title:"Components/UiToggle",component:c,argTypes:{children:{control:{type:"text"},description:"title"},disabled:{control:{type:"boolean"},description:"Toggle Disabled"},invertOrder:{control:{type:"boolean"},description:"The Element order state"},checked:{control:{type:"boolean"},description:"Toggle Checked"},value:{control:{type:"boolean"},description:"Toggle Value"}}},t={args:{children:"title",disabled:!1,invertOrder:!1,onChange:s=>console.log(`Checked ${s}`)},render:s=>r.jsx(r.Fragment,{children:r.jsx(c,{...s})})};var u,g,f;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: "title",
    disabled: false,
    invertOrder: false,
    onChange: (value: boolean) => console.log(\`Checked \${value}\`)
  },
  render: args => {
    return <>
                <UiToggle {...args} />

            </>;
  }
}`,...(f=(g=t.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const k=["Primary"];export{t as Primary,k as __namedExportsOrder,j as default};
