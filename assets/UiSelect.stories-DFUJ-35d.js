import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as h}from"./iframe-DkeoVeUp.js";import{c as d}from"./index-DzoKTnVk.js";import{U as S,b as j,E as u}from"./UiTypography-DvFn8hxq.js";import{E as n}from"./_types-D2cKG_To.js";import{U as o,E as a}from"./UiIcon-BSNE-oRi.js";const b="_UiSelect_1fbno_1",C={UiSelect:b},w={[n.DEFAULT]:"border-secondary-alt-600",[n.ERROR]:"border-error",[n.SUCCESS]:"border-primary-600",[n.WARNING]:"border-warning-600"},i=({children:t,heading:s,subLabel:l,disabled:r,onChange:c,className:O,placeholder:E,prefixIcon:g,postfixIcon:y,statusMessage:v,kind:p,...f})=>{const[N,U]=h.useState(f.value||f.defaultValue||""),I=h.useCallback(R=>{U(R.target.value),c?.(R)},[c]);return e.jsxs("div",{className:d("ui-select",O),children:[s?e.jsx(S,{size:j.MD,className:"mb-xxs",children:s}):null,e.jsxs("div",{className:d(C.UiSelect,"flex items-center gap-sm","relative","rounded-xl","border","hover:border-secondary-alt-600",r?["pointer-events-none","border-secondary-alt-300","bg-secondary-alt-200"]:[p&&w[p],"bg-white"]),children:[g?e.jsx("div",{className:"flex items-center pl-sm",children:g}):null,e.jsxs("select",{...f,className:d("m-0 w-full cursor-pointer appearance-none border-0 bg-transparent text-secondary-alt outline-0",g?"p-0 py-sm pr-xl":"p-sm pr-xl"),disabled:r,value:N,onChange:I,children:[E?e.jsx("option",{value:"",disabled:!0,hidden:!0,children:E}):null,t]}),e.jsx("div",{className:"pointer-events-none absolute top-1/2 right-sm -translate-y-1/2",children:y||e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M13.25 6.8125L8.5 11.2812C8.34375 11.4375 8.15625 11.5 8 11.5C7.8125 11.5 7.625 11.4375 7.46875 11.3125L2.71875 6.8125C2.40625 6.53125 2.40625 6.0625 2.6875 5.75C2.96875 5.4375 3.4375 5.4375 3.75 5.71875L8 9.71875L12.2188 5.71875C12.5312 5.4375 13 5.4375 13.2812 5.75C13.5625 6.0625 13.5625 6.53125 13.25 6.8125Z",fill:"currentColor"})})})]}),l?e.jsx(S,{size:j.SM,color:u.SECONDARY_ALT,className:"mt-xxs",children:l}):null,v?e.jsx(S,{className:d("transition-all duration-300 ease-in-out","mt-xxs max-h-0 gap-xxs overflow-hidden opacity-0","data-[status=true]:max-h-full data-[status=true]:opacity-100"),lineHeight:!0,color:p===n.ERROR?u.ERROR:p===n.WARNING?u.WARNING_500:u.PRIMARY,size:j.SM,"data-status":!!v,children:v}):null]})};i.__docgenInfo={description:"",methods:[],displayName:"UiSelect",props:{heading:{required:!1,tsType:{name:"string"},description:""},subLabel:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"union",raw:"string | number | readonly string[]",elements:[{name:"string"},{name:"number"},{name:"unknown"}]},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},prefixIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},postfixIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},kind:{required:!1,tsType:{name:"EInputKind"},description:""},statusMessage:{required:!1,tsType:{name:"union",raw:"string | React.ReactElement",elements:[{name:"string"},{name:"ReactReactElement",raw:"React.ReactElement"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLSelectElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLSelectElement>",elements:[{name:"HTMLSelectElement"}]},name:"event"}],return:{name:"void"}}},description:""}}};const A={title:"Components/UiSelect",component:i,argTypes:{children:{control:{type:"text"}},disabled:{control:{type:"boolean"},description:"Disable the select element"},heading:{control:{type:"text"},description:"Heading of the select element"},statusMessage:{control:{type:"text"},description:"Status message of the select element"},subLabel:{control:{type:"text"},description:"Sublabel of the select element"},kind:{control:{type:"select"},options:Object.keys(n),description:"Kind of the select element"},value:{control:{type:"text"},description:"Value of the select element"}},args:{disabled:!1,heading:"Heading",subLabel:"subLabel",kind:n.DEFAULT,statusMessage:"",value:"",onChange:t=>console.log(t.target.value)}},m={render:t=>{const[s,l]=h.useState(t.value),r=c=>{l(c.target.value)};return e.jsx(h.Fragment,{children:e.jsxs(i,{...t,value:s,onChange:r,children:[e.jsx("option",{value:"",disabled:!0,hidden:!0,children:"Select an option"}),e.jsx("option",{value:"1",children:"Option 1"}),e.jsx("option",{value:"2",children:"Option 2"}),e.jsx("option",{value:"3",children:"Option 3"})]})})}},x={render:t=>e.jsxs("div",{className:"flex flex-col gap-lg",children:[e.jsx("div",{className:"flex flex-col gap-sm",children:e.jsxs("div",{className:"flex gap-sm",children:[e.jsxs(i,{...t,kind:n.DEFAULT,heading:"Default",children:[e.jsx("option",{value:"",children:"Select option"}),e.jsx("option",{value:"1",children:"Option 1"}),e.jsx("option",{value:"2",children:"Option 2"})]}),e.jsxs(i,{...t,kind:n.ERROR,heading:"Error",children:[e.jsx("option",{value:"",children:"Select option"}),e.jsx("option",{value:"1",children:"Option 1"}),e.jsx("option",{value:"2",children:"Option 2"})]}),e.jsxs(i,{...t,kind:n.SUCCESS,heading:"Success",children:[e.jsx("option",{value:"",children:"Select option"}),e.jsx("option",{value:"1",children:"Option 1"}),e.jsx("option",{value:"2",children:"Option 2"})]}),e.jsxs(i,{...t,kind:n.WARNING,heading:"Warning",children:[e.jsx("option",{value:"",children:"Select option"}),e.jsx("option",{value:"1",children:"Option 1"}),e.jsx("option",{value:"2",children:"Option 2"})]})]})}),e.jsx("div",{className:"flex flex-col gap-sm",children:e.jsxs("div",{className:"flex gap-sm",children:[e.jsxs(i,{...t,kind:n.DEFAULT,heading:"Default with Icon",prefixIcon:e.jsx(o,{name:["far","face-angry"],size:a.MD,className:"text-secondary-alt-600"}),children:[e.jsx("option",{value:"",children:"Select option"}),e.jsx("option",{value:"1",children:"Option 1"}),e.jsx("option",{value:"2",children:"Option 2"})]}),e.jsxs(i,{...t,kind:n.ERROR,heading:"Error with Icon",prefixIcon:e.jsx(o,{name:["far","face-angry"],size:a.MD,className:"text-error"}),statusMessage:"Error message",children:[e.jsx("option",{value:"",children:"Select option"}),e.jsx("option",{value:"1",children:"Option 1"}),e.jsx("option",{value:"2",children:"Option 2"})]}),e.jsxs(i,{...t,kind:n.SUCCESS,heading:"Success with Icon",prefixIcon:e.jsx(o,{name:["far","face-angry"],size:a.MD,className:"text-primary-600"}),children:[e.jsx("option",{value:"",children:"Select option"}),e.jsx("option",{value:"1",children:"Option 1"}),e.jsx("option",{value:"2",children:"Option 2"})]}),e.jsxs(i,{...t,kind:n.WARNING,heading:"Warning with Icon",prefixIcon:e.jsx(o,{name:["far","face-angry"],size:a.MD,className:"text-warning-600"}),statusMessage:"Warning message",children:[e.jsx("option",{value:"",children:"Select option"}),e.jsx("option",{value:"1",children:"Option 1"}),e.jsx("option",{value:"2",children:"Option 2"})]})]})}),e.jsx("div",{className:"flex flex-col gap-sm",children:e.jsxs(i,{...t,kind:n.DEFAULT,heading:"Disabled",disabled:!0,prefixIcon:e.jsx(o,{name:["far","face-angry"],size:a.MD,className:"text-secondary-alt-300"}),children:[e.jsx("option",{value:"",children:"Cannot select"}),e.jsx("option",{value:"1",children:"Option 1"}),e.jsx("option",{value:"2",children:"Option 2"})]})})]})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <div className='flex flex-col gap-lg'>
            <div className='flex flex-col gap-sm'>
                <div className='flex gap-sm'>
                    <UiSelect {...args} kind={EInputKind.DEFAULT} heading="Default">
                        <option value="">Select option</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                    </UiSelect>
                    <UiSelect {...args} kind={EInputKind.ERROR} heading="Error">
                        <option value="">Select option</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                    </UiSelect>
                    <UiSelect {...args} kind={EInputKind.SUCCESS} heading="Success">
                        <option value="">Select option</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                    </UiSelect>
                    <UiSelect {...args} kind={EInputKind.WARNING} heading="Warning">
                        <option value="">Select option</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                    </UiSelect>
                </div>
            </div>
            <div className='flex flex-col gap-sm'>
                <div className='flex gap-sm'>
                    <UiSelect {...args} kind={EInputKind.DEFAULT} heading="Default with Icon" prefixIcon={<UiIcon name={["far", "face-angry"]} size={ESize.MD} className="text-secondary-alt-600" />}>
                        <option value="">Select option</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                    </UiSelect>
                    <UiSelect {...args} kind={EInputKind.ERROR} heading="Error with Icon" prefixIcon={<UiIcon name={["far", "face-angry"]} size={ESize.MD} className="text-error" />} statusMessage="Error message">
                        <option value="">Select option</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                    </UiSelect>
                    <UiSelect {...args} kind={EInputKind.SUCCESS} heading="Success with Icon" prefixIcon={<UiIcon name={["far", "face-angry"]} size={ESize.MD} className="text-primary-600" />}>
                        <option value="">Select option</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                    </UiSelect>
                    <UiSelect {...args} kind={EInputKind.WARNING} heading="Warning with Icon" prefixIcon={<UiIcon name={["far", "face-angry"]} size={ESize.MD} className="text-warning-600" />} statusMessage="Warning message">
                        <option value="">Select option</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                    </UiSelect>
                </div>
            </div>
            <div className='flex flex-col gap-sm'>
                <UiSelect {...args} kind={EInputKind.DEFAULT} heading="Disabled" disabled prefixIcon={<UiIcon name={["far", "face-angry"]} size={ESize.MD} className="text-secondary-alt-300" />}>
                    <option value="">Cannot select</option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                </UiSelect>
            </div>
        </div>
}`,...x.parameters?.docs?.source}}};const W=["Primary","Variants"];export{m as Primary,x as Variants,W as __namedExportsOrder,A as default};
