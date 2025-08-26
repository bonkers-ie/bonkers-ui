import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as i}from"./iframe-EMvoHGHG.js";import{c as u}from"./index-EEEaJ7bf.js";import{U as m,b as h,E as g}from"./UiTypography-By9IHOAX.js";import{E as n}from"./_types-Bwb-7FgU.js";const E="_UiSelect_1fbno_1",T={UiSelect:E},j={[n.DEFAULT]:"border-secondary-alt-600",[n.ERROR]:"border-error",[n.SUCCESS]:"border-primary-600"},v=({children:t,heading:a,subLabel:s,disabled:r,onChange:o,className:R,placeholder:x,postfixIcon:y,statusMessage:c,kind:d,...p})=>{const[f,S]=i.useState(p.value||p.defaultValue||""),C=i.useCallback(b=>{S(b.target.value),o?.(b)},[o]);return e.jsxs("div",{className:u("ui-select",R),children:[a?e.jsx(m,{size:h.MD,className:"mb-xxs",children:a}):null,e.jsxs("div",{className:u(T.UiSelect,"relative","rounded-xl","border","hover:border-secondary-alt-600",r?["pointer-events-none","border-secondary-alt-300","bg-secondary-alt-200"]:[d&&j[d],"bg-white"]),children:[e.jsxs("select",{...p,className:`
						m-0
						w-full
						cursor-pointer
						appearance-none
						border-0
						bg-transparent
						p-sm
						pr-xl
						leading-[20px]
						text-secondary-alt
						outline-0
					`,disabled:r,value:f,onChange:C,children:[x?e.jsx("option",{value:"",disabled:!0,hidden:!0,children:x}):null,t]}),e.jsx("div",{className:"pointer-events-none absolute top-1/2 right-sm -translate-y-1/2",children:y||e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M13.25 6.8125L8.5 11.2812C8.34375 11.4375 8.15625 11.5 8 11.5C7.8125 11.5 7.625 11.4375 7.46875 11.3125L2.71875 6.8125C2.40625 6.53125 2.40625 6.0625 2.6875 5.75C2.96875 5.4375 3.4375 5.4375 3.75 5.71875L8 9.71875L12.2188 5.71875C12.5312 5.4375 13 5.4375 13.2812 5.75C13.5625 6.0625 13.5625 6.53125 13.25 6.8125Z",fill:"currentColor"})})})]}),s?e.jsx(m,{size:h.SM,color:g.SECONDARY_ALT,className:"mt-xxs",children:s}):null,c?e.jsx(m,{className:u("transition-all duration-300 ease-in-out","mt-xxs max-h-0 gap-xxs overflow-hidden opacity-0","data-[status=true]:max-h-full data-[status=true]:opacity-100"),lineHeight:!0,color:d===n.ERROR?g.ERROR:g.PRIMARY,size:h.SM,"data-status":!!c,children:c}):null]})};v.__docgenInfo={description:"",methods:[],displayName:"UiSelect",props:{heading:{required:!1,tsType:{name:"string"},description:""},subLabel:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"union",raw:"string | number | readonly string[]",elements:[{name:"string"},{name:"number"},{name:"unknown"}]},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},postfixIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},kind:{required:!1,tsType:{name:"EInputKind"},description:""},statusMessage:{required:!1,tsType:{name:"union",raw:"string | React.ReactElement",elements:[{name:"string"},{name:"ReactReactElement",raw:"React.ReactElement"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLSelectElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLSelectElement>",elements:[{name:"HTMLSelectElement"}]},name:"event"}],return:{name:"void"}}},description:""}}};const q={title:"Components/UiSelect",component:v,argTypes:{children:{control:{type:"text"}},disabled:{control:{type:"boolean"},description:"Disable the select element"},heading:{control:{type:"text"},description:"Heading of the select element"},statusMessage:{control:{type:"text"},description:"Status message of the select element"},subLabel:{control:{type:"text"},description:"Sublabel of the select element"},kind:{control:{type:"select"},options:Object.keys(n),description:"Kind of the select element"},value:{control:{type:"text"},description:"Value of the select element"}},args:{disabled:!1,heading:"Heading",subLabel:"subLabel",kind:n.DEFAULT,statusMessage:"",value:"",onChange:t=>console.log(t.target.value)}},l={render:t=>{const[a,s]=i.useState(t.value),r=o=>{s(o.target.value)};return e.jsx(i.Fragment,{children:e.jsxs(v,{...t,value:a,onChange:r,children:[e.jsx("option",{value:"",disabled:!0,hidden:!0,children:"Select an option"}),e.jsx("option",{value:"1",children:"Option 1"}),e.jsx("option",{value:"2",children:"Option 2"}),e.jsx("option",{value:"3",children:"Option 3"})]})})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState(args.value);
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setValue(event.target.value);
    };
    return <React.Fragment>
                <UiSelect {...args} value={value} onChange={handleChange}>
                    <option value="" disabled hidden>Select an option</option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                </UiSelect>
            </React.Fragment>;
  }
}`,...l.parameters?.docs?.source}}};const M=["Primary"];export{l as Primary,M as __namedExportsOrder,q as default};
