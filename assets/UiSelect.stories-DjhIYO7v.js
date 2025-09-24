import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as m}from"./iframe-BV9BvOuM.js";import{c as v}from"./index-DRx6VtWy.js";import{U as y,b as U,E as I}from"./UiTypography-rKwxpQL-.js";import{U as b,E as t}from"./UiInputStatusMessage-CP5BwHhA.js";import{U as o,E as a}from"./UiIcon-ChLMJORw.js";const C="_UiSelect_1fbno_1",w={UiSelect:C},D={[t.DEFAULT]:"border-secondary-alt-600",[t.ERROR]:"border-error",[t.SUCCESS]:"border-primary-600",[t.WARNING]:"border-warning-600"},i=({children:n,heading:s,subLabel:l,disabled:r,onChange:c,className:O,placeholder:f,prefixIcon:x,postfixIcon:S,statusMessage:j,kind:h,...g})=>{const[p,N]=m.useState(g.value||g.defaultValue||""),R=m.useCallback(E=>{N(E.target.value),c?.(E)},[c]);return e.jsxs("div",{className:v("ui-select",O),children:[s?e.jsx(y,{size:U.MD,className:"mb-xxs",children:s}):null,e.jsxs("div",{className:v(w.UiSelect,"flex items-center gap-sm","relative","rounded-xl","border","hover:border-secondary-alt-600",r?["pointer-events-none","border-secondary-alt-300","bg-secondary-alt-200"]:[h&&D[h],"bg-white"]),children:[x?e.jsx("div",{className:"flex items-center pl-sm",children:x}):null,e.jsxs("select",{...g,className:v("m-0 w-full cursor-pointer appearance-none border-0 bg-transparent outline-0",{"text-secondary-alt":p===""||!p,"text-black":p},x?"p-0 py-sm pr-xl":"p-sm pr-xl"),disabled:r,value:p,onChange:R,children:[f?e.jsx("option",{value:"",disabled:!0,hidden:!0,children:f}):null,n]}),e.jsx("div",{className:"pointer-events-none absolute top-1/2 right-sm -translate-y-1/2",children:S||e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M13.25 6.8125L8.5 11.2812C8.34375 11.4375 8.15625 11.5 8 11.5C7.8125 11.5 7.625 11.4375 7.46875 11.3125L2.71875 6.8125C2.40625 6.53125 2.40625 6.0625 2.6875 5.75C2.96875 5.4375 3.4375 5.4375 3.75 5.71875L8 9.71875L12.2188 5.71875C12.5312 5.4375 13 5.4375 13.2812 5.75C13.5625 6.0625 13.5625 6.53125 13.25 6.8125Z",fill:"currentColor"})})})]}),l?e.jsx(y,{size:U.SM,color:I.SECONDARY_ALT,className:"mt-xxs",children:l}):null,j?e.jsx(b,{kind:h,children:j}):null]})};i.__docgenInfo={description:"",methods:[],displayName:"UiSelect",props:{heading:{required:!1,tsType:{name:"string"},description:""},subLabel:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"union",raw:"string | number | readonly string[]",elements:[{name:"string"},{name:"number"},{name:"unknown"}]},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},prefixIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},postfixIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},kind:{required:!1,tsType:{name:"EInputKind"},description:""},statusMessage:{required:!1,tsType:{name:"union",raw:"string | React.ReactElement",elements:[{name:"string"},{name:"ReactReactElement",raw:"React.ReactElement"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLSelectElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLSelectElement>",elements:[{name:"HTMLSelectElement"}]},name:"event"}],return:{name:"void"}}},description:""}}};const K={title:"Components/UiSelect",component:i,argTypes:{children:{control:{type:"text"}},disabled:{control:{type:"boolean"},description:"Disable the select element"},heading:{control:{type:"text"},description:"Heading of the select element"},statusMessage:{control:{type:"text"},description:"Status message of the select element"},subLabel:{control:{type:"text"},description:"Sublabel of the select element"},kind:{control:{type:"select"},options:Object.keys(t),description:"Kind of the select element"},value:{control:{type:"text"},description:"Value of the select element"}},args:{disabled:!1,heading:"Heading",subLabel:"subLabel",kind:t.DEFAULT,statusMessage:"",value:"",onChange:n=>console.log(n.target.value)}},d={render:n=>{const[s,l]=m.useState(n.value),r=c=>{l(c.target.value)};return e.jsx(m.Fragment,{children:e.jsxs(i,{...n,value:s,onChange:r,children:[e.jsx("option",{value:"",disabled:!0,hidden:!0,children:"Select an option"}),e.jsx("option",{value:"1",children:"Option 1"}),e.jsx("option",{value:"2",children:"Option 2"}),e.jsx("option",{value:"3",children:"Option 3"})]})})}},u={render:n=>e.jsxs("div",{className:"flex flex-col gap-lg",children:[e.jsx("div",{className:"flex flex-col gap-sm",children:e.jsxs("div",{className:"flex gap-sm",children:[e.jsxs(i,{...n,kind:t.DEFAULT,heading:"Default",children:[e.jsx("option",{value:"",children:"Select option"}),e.jsx("option",{value:"1",children:"Option 1"}),e.jsx("option",{value:"2",children:"Option 2"})]}),e.jsxs(i,{...n,kind:t.ERROR,heading:"Error",children:[e.jsx("option",{value:"",children:"Select option"}),e.jsx("option",{value:"1",children:"Option 1"}),e.jsx("option",{value:"2",children:"Option 2"})]}),e.jsxs(i,{...n,kind:t.SUCCESS,heading:"Success",children:[e.jsx("option",{value:"",children:"Select option"}),e.jsx("option",{value:"1",children:"Option 1"}),e.jsx("option",{value:"2",children:"Option 2"})]}),e.jsxs(i,{...n,kind:t.WARNING,heading:"Warning",children:[e.jsx("option",{value:"",children:"Select option"}),e.jsx("option",{value:"1",children:"Option 1"}),e.jsx("option",{value:"2",children:"Option 2"})]})]})}),e.jsx("div",{className:"flex flex-col gap-sm",children:e.jsxs("div",{className:"flex gap-sm",children:[e.jsxs(i,{...n,kind:t.DEFAULT,heading:"Default with Icon",prefixIcon:e.jsx(o,{name:["far","face-angry"],size:a.MD,className:"text-secondary-alt-600"}),children:[e.jsx("option",{value:"",children:"Select option"}),e.jsx("option",{value:"1",children:"Option 1"}),e.jsx("option",{value:"2",children:"Option 2"})]}),e.jsxs(i,{...n,kind:t.ERROR,heading:"Error with Icon",prefixIcon:e.jsx(o,{name:["far","face-angry"],size:a.MD,className:"text-error"}),statusMessage:"Error message",children:[e.jsx("option",{value:"",children:"Select option"}),e.jsx("option",{value:"1",children:"Option 1"}),e.jsx("option",{value:"2",children:"Option 2"})]}),e.jsxs(i,{...n,kind:t.SUCCESS,heading:"Success with Icon",prefixIcon:e.jsx(o,{name:["far","face-angry"],size:a.MD,className:"text-primary-600"}),children:[e.jsx("option",{value:"",children:"Select option"}),e.jsx("option",{value:"1",children:"Option 1"}),e.jsx("option",{value:"2",children:"Option 2"})]}),e.jsxs(i,{...n,kind:t.WARNING,heading:"Warning with Icon",prefixIcon:e.jsx(o,{name:["far","face-angry"],size:a.MD,className:"text-warning-600"}),statusMessage:"Warning message",children:[e.jsx("option",{value:"",children:"Select option"}),e.jsx("option",{value:"1",children:"Option 1"}),e.jsx("option",{value:"2",children:"Option 2"})]})]})}),e.jsx("div",{className:"flex flex-col gap-sm",children:e.jsxs(i,{...n,kind:t.DEFAULT,heading:"Disabled",disabled:!0,prefixIcon:e.jsx(o,{name:["far","face-angry"],size:a.MD,className:"text-secondary-alt-300"}),children:[e.jsx("option",{value:"",children:"Cannot select"}),e.jsx("option",{value:"1",children:"Option 1"}),e.jsx("option",{value:"2",children:"Option 2"})]})})]})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const q=["Primary","Variants"];export{d as Primary,u as Variants,q as __namedExportsOrder,K as default};
