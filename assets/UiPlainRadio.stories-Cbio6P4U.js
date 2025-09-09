import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./iframe-D53uEavB.js";import{c as t}from"./index-tJk0GiGU.js";const d=({id:e,children:o,disabled:r,subHeader:s,value:i,name:c,checked:n=!1,className:u,onChange:p,...g})=>a.jsxs("label",{className:t("ui-plain-radio","relative","group",{"pointer-events-none opacity-50":r},u),children:[a.jsx("input",{className:t("absolute","appearance-none","peer"),id:e||`${c}-${i}`,type:"radio",value:i,checked:n,onChange:()=>p(i),...g}),a.jsxs("div",{className:t("bg-white","box-border","cursor-pointer","flex","gap-sm","items-center","p-sm","peer-active:bg-secondary-alt-200","peer-active:ring-primary-800","peer-focus-within:outline-offset-4","peer-focus:outline-2","peer-focus:peer-checked:outline-primary-600","peer-hover:ring-primary-700","rounded-xl","size-full","text-sm",r?"ring-secondary-alt-300":`
						peer-checked:ring-primary-600
						peer-checked:outline
						peer-checked:outline-primary-600
					`,n?"ring-2":"ring",{"ring-secondary-alt-600 hover:ring-secondary-500":!r&&!n}),children:[a.jsx("span",{className:t("bg-white","group-active:ring-primary-800","group-hover:ring-primary-700","pointer-events-none","relative","rounded-full","size-md",n?"ring-2":"ring",r?"ring-secondary-alt-300":"ring-primary-600",{"ring-secondary-alt-600 group-hover:ring-secondary-500 group-active:ring-secondary-500":!r&&!n}),children:a.jsx("span",{className:t("absolute","block","group-active:bg-primary-800","group-hover:bg-primary-700","left-xxs","pointer-events-none","rounded-full","size-xxs","top-xxs",n?"bg-primary-600":"bg-white",r?"bg-secondary-alt-300":"bg-primary-600",{"bg-white group-hover:bg-white group-active:bg-white":!r&&!n})})}),a.jsxs("div",{className:`
					flex
					flex-col
				`,children:[o,s?a.jsx("div",{className:`
								text-xs
								font-normal
								text-secondary-alt-400
							`,children:s}):null]})]})]});d.__docgenInfo={description:"",methods:[],displayName:"UiPlainRadio",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},subHeader:{required:!1,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},checked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const b={title:"Components/UiPlainRadio",component:d,argTypes:{children:{control:{type:"text"},description:"RadioFancy Children"},disabled:{control:{type:"boolean"},description:"Radio disabled"},subHeader:{control:{type:"text"},description:"RadioFancy Children"}},args:{children:"Rural",disabled:!1,subHeader:"DG2 = Rural supply region",onChange:e=>console.log(e),checked:!1,value:"value",name:"Value"}},l={render:e=>{const[o,r]=m.useState("value1"),s=i=>{r(i),e.onChange&&e.onChange(i)};return a.jsxs("div",{children:[a.jsx(d,{disabled:e.disabled,name:"Value1",value:"value1",onChange:s,checked:o==="value1",children:e.children}),a.jsx("br",{}),a.jsx(d,{disabled:e.disabled,name:"Value2",value:"value2",onChange:s,checked:o==="value2",children:e.children,subHeader:e.subHeader})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const x=["Primary"];export{l as Primary,x as __namedExportsOrder,b as default};
