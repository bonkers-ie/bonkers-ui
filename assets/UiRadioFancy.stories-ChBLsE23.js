import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as v}from"./iframe-Tx73yq3h.js";import{c}from"./index-Cv_nbNIh.js";import{U as x,E as R}from"./UiIcon-DtXtfvyl.js";var s=(e=>(e.DEFAULT="default",e.COMPACT="compact",e))(s||{});const U={[s.DEFAULT]:"items-center",[s.COMPACT]:"items-start flex-col"},o=({children:e,icon:r,disabled:n,subHeader:d,active:i,radioType:f=s.DEFAULT,value:T,onChange:C,className:b})=>a.jsxs("label",{className:c("ui-radio-fancy","relative",{"pointer-events-none":n},b),children:[a.jsx("input",{className:"group peer absolute appearance-none",type:"radio",checked:i,onChange:()=>C(T)}),a.jsxs("div",{className:c("box-border","cursor-pointer","rounded-lg","border","bg-white","p-sm","hover:border-secondary-alt-700","peer-focus:outline ","peer-focus:outline-4","peer-focus:outline-primary-300","peer-checked:shadow-border-primary-600","peer-checked:border-0","active:peer-checked:bg-secondary-alt-200","hover:peer-checked:shadow-border-primary-700","flex","gap-sm","text-sm",i?"peer-focus:outline-offset-2":"peer-focus:outline-offset-0",n?"border-secondary-alt-400 text-secondary-alt-500 peer-checked:shadow-border-primary-disabled":"border-secondary-alt-600",U[f]),children:[a.jsx("div",{className:c("relative","grid","size-fit","rounded-full","place-items-center","text-white","p-xxs",{"bg-primary-300":n,"bg-primary":!n}),children:r?a.jsx(x,{name:r,size:R.SM}):null}),a.jsxs("div",{className:"flex flex-col",children:[e,a.jsx("div",{className:"text-xs font-normal text-secondary-alt-400",children:d})]})]})]});o.__docgenInfo={description:"",methods:[],displayName:"UiRadioFancy",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},icon:{required:!1,tsType:{name:"IconProp"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},active:{required:!1,tsType:{name:"boolean"},description:""},subHeader:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},radioType:{required:!1,tsType:{name:"ERadioTypes"},description:"",defaultValue:{value:"ERadioTypes.DEFAULT",computed:!0}},value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const F={title:"Components/UiRadioFancy",component:o,argTypes:{children:{control:{type:"text"},description:"RadioFancy Children"},disabled:{control:{type:"boolean"},description:"Radio disabled"},radioType:{control:{type:"select"},options:Object.values(s),description:" radio type "}},args:{children:"Title",disabled:!1,radioType:s.DEFAULT,onChange:e=>console.log(e),active:!1,value:"value"}},l={render:e=>{const[r,n]=v.useState("value1"),d=i=>{n(i),e.onChange&&e.onChange(i)};return a.jsxs("div",{className:"grid grid-rows-2 gap-sm",children:[a.jsx(o,{disabled:e.disabled,icon:["far","face-smile"],radioType:e.radioType,value:"value1",onChange:d,active:r==="value1",children:e.children}),a.jsx(o,{disabled:e.disabled,icon:["far","face-smile"],radioType:e.radioType,value:"value2",onChange:d,active:r==="value2",children:e.children})]})}},t={args:{...F.args,radioType:s.COMPACT},render:e=>{const[r,n]=v.useState("value1"),d=i=>{n(i),e.onChange&&e.onChange(i)};return a.jsxs("div",{className:e.radioType===s.COMPACT?"grid w-[350px] grid-cols-2 gap-sm":"grid grid-rows-2 gap-sm",children:[a.jsx(o,{disabled:e.disabled,icon:["far","face-smile"],radioType:e.radioType,value:"value1",onChange:d,active:r==="value1",children:e.children}),a.jsx(o,{disabled:e.disabled,icon:["far","face-smile"],radioType:e.radioType,value:"value2",onChange:d,active:r==="value2",children:e.children})]})}};var p,u,m;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => {
    const [selectedValue, setSelectedValue] = useState<string>("value1");
    const handleChange = (value: string) => {
      setSelectedValue(value);
      if (args.onChange) {
        args.onChange(value);
      }
    };
    return <div className="grid grid-rows-2 gap-sm">
                <UiRadioFancy disabled={args.disabled} icon={["far", "face-smile"]} radioType={args.radioType} value="value1" onChange={handleChange} active={selectedValue === "value1"}>
                    {args.children}

                </UiRadioFancy>

                <UiRadioFancy disabled={args.disabled} icon={["far", "face-smile"]} radioType={args.radioType} value="value2" onChange={handleChange} active={selectedValue === "value2"}>
                    {args.children}

                </UiRadioFancy>
            </div>;
  }
}`,...(m=(u=l.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var g,h,y;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...meta.args,
    radioType: ERadioTypes.COMPACT
  },
  render: args => {
    const [selectedValue, setSelectedValue] = useState<string>("value1");
    const handleChange = (value: string) => {
      setSelectedValue(value);
      if (args.onChange) {
        args.onChange(value);
      }
    };
    return <div className={args.radioType === ERadioTypes.COMPACT ? "grid w-[350px] grid-cols-2 gap-sm" : "grid grid-rows-2 gap-sm"}>
                <UiRadioFancy disabled={args.disabled} icon={["far", "face-smile"]} radioType={args.radioType} value="value1" onChange={handleChange} active={selectedValue === "value1"}>
                    {args.children}

                </UiRadioFancy>

                <UiRadioFancy disabled={args.disabled} icon={["far", "face-smile"]} radioType={args.radioType} value="value2" onChange={handleChange} active={selectedValue === "value2"}>
                    {args.children}

                </UiRadioFancy>
            </div>;
  }
}`,...(y=(h=t.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const w=["Primary","Variant"];export{l as Primary,t as Variant,w as __namedExportsOrder,F as default};
