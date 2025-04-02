import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as g}from"./index-BCtMShv3.js";import{c as t}from"./index-CeDo_qPC.js";import{U as b}from"./UiRadio-OLeNNVJ7.js";import"./align-CojEiJiX.js";const o=({children:e,disabled:r,subHeader:l,value:n,name:i,checked:s=!1,className:h,onChange:c})=>a.jsxs("label",{className:t("ui-radio-fancy","relative",{"pointer-events-none opacity-50":r},h),htmlFor:i+n,children:[a.jsx("input",{className:t(" absolute","appearance-none","peer/plain-radio"),id:i+n,type:"radio",value:n,checked:s,onChange:()=>c(n)}),a.jsxs("div",{className:t("box-border","size-full","cursor-pointer","rounded-xl","border border-secondary-alt-600","peer-checked/plain-radio:border-primary-600","peer-checked/plain-radio:outline","peer-checked/plain-radio:outline","peer-checked/plain-radio:outline-primary-600","peer-hover/plain-radio:peer-checked/plain-radio:outline-primary-700","bg-white","peer-active/plain-radio:bg-secondary-alt-200","p-sm","peer-hover/plain-radio:border-primary-700","peer-focus/plain-radio:shadow-border-primary","flex","items-center","gap-sm","text-sm",{"border-secondary-alt-400":r&&!s,"border-primary-300":r&&s,"border-secondary-alt-600":!r&&!s,"border-primary-600":!r&&s}),children:[a.jsx(b,{className:"pointer-events-none",disabled:r,value:n,name:i,onChange:()=>c(n),checked:s,tabIndex:-1}),a.jsxs("div",{className:"flex flex-col",children:[e,a.jsx("div",{className:"text-xs font-normal text-secondary-alt-400",children:l})]})]})]});o.__docgenInfo={description:"",methods:[],displayName:"UiPlainRadio",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},subHeader:{required:!1,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},checked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const R={title:"Components/UiPlainRadio",component:o,argTypes:{children:{control:{type:"text"},description:"RadioFancy Children"},disabled:{control:{type:"boolean"},description:"Radio disabled"},subHeader:{control:{type:"text"},description:"RadioFancy Children"}},args:{children:"Rural",disabled:!1,subHeader:"DG2 = Rural supply region",onChange:e=>console.log(e),checked:!1,value:"value",name:"Value"}},d={render:e=>{const[r,l]=g.useState("value1"),n=i=>{l(i),e.onChange&&e.onChange(i)};return a.jsxs("div",{children:[a.jsx(o,{disabled:e.disabled,name:"Value1",value:"value1",onChange:n,checked:r==="value1",children:e.children}),a.jsx("br",{}),a.jsx(o,{disabled:e.disabled,name:"Value2",value:"value2",onChange:n,checked:r==="value2",children:e.children,subHeader:e.subHeader})]})}};var p,u,m;d.parameters={...d.parameters,docs:{...(p=d.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => {
    const [selectedValue, setSelectedValue] = useState<string>("value1");
    const handleChange = (value: string) => {
      setSelectedValue(value);
      if (args.onChange) {
        args.onChange(value);
      }
    };
    return <div>
                <UiPlainRadio disabled={args.disabled} name="Value1" value="value1" onChange={handleChange} checked={selectedValue === "value1"} children={args.children}>

                </UiPlainRadio>

                <br />

                <UiPlainRadio disabled={args.disabled} name="Value2" value="value2" onChange={handleChange} checked={selectedValue === "value2"} children={args.children} subHeader={args.subHeader}>

                </UiPlainRadio>
            </div>;
  }
}`,...(m=(u=d.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const V=["Primary"];export{d as Primary,V as __namedExportsOrder,R as default};
