import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as h,r as D}from"./iframe-Bb2mJfHr.js";import{c as f}from"./index-GFDuFSKK.js";import{U as N,b as R,E as M}from"./UiTypography-9wudyqN4.js";import{U as C,E as t}from"./UiInputStatusMessage-D0BjbS7b.js";import{U as r,E as c}from"./UiIcon-wAypom20.js";import"./preload-helper-PPVm8Dsz.js";const w="_UiSelect_1fbno_1",T={UiSelect:w};var a=(n=>(n.SM="SM",n.MD="MD",n))(a||{});const k={[t.DEFAULT]:"border-secondary-alt-600",[t.ERROR]:"border-error",[t.SUCCESS]:"border-primary-600",[t.WARNING]:"border-warning-600"},i=({children:n,heading:p,subLabel:l,disabled:d,onChange:S,className:b,placeholder:j,prefixIcon:o,postfixIcon:E,statusMessage:y,kind:g,size:u=a.MD,...s})=>{const[m,O]=h.useState(s.value||s.defaultValue||""),I=h.useCallback(U=>{O(U.target.value),S?.(U)},[S]);return D.useEffect(()=>{s.value!==void 0&&O(s.value)},[s.value]),e.jsxs("div",{className:f("ui-select",b),children:[p?e.jsx(N,{size:R.MD,className:"mb-xxs",children:p}):null,e.jsxs("div",{className:f(T.UiSelect,"flex items-center gap-sm","relative","rounded-xl","border","hover:border-secondary-alt-600",d?["pointer-events-none","border-secondary-alt-300","bg-secondary-alt-200"]:[g&&k[g],"bg-white"]),children:[o?e.jsx("div",{className:"flex items-center pl-sm",children:o}):null,e.jsxs("select",{...s,className:f("m-0 w-full cursor-pointer appearance-none border-0 bg-transparent outline-0",{"text-secondary-alt":m===""||!m,"text-black":m,"py-xs":u===a.SM&&o,"py-sm":u===a.MD&&o,"px-sm py-xs":u===a.SM&&!o,"p-sm":u===a.MD&&!o},o?"pr-xl":"p-sm pr-xl"),disabled:d,value:m,onChange:I,children:[j?e.jsx("option",{value:"",disabled:!0,hidden:!0,children:j}):null,n]}),e.jsx("div",{className:"pointer-events-none absolute top-1/2 right-sm -translate-y-1/2",children:E||e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M13.25 6.8125L8.5 11.2812C8.34375 11.4375 8.15625 11.5 8 11.5C7.8125 11.5 7.625 11.4375 7.46875 11.3125L2.71875 6.8125C2.40625 6.53125 2.40625 6.0625 2.6875 5.75C2.96875 5.4375 3.4375 5.4375 3.75 5.71875L8 9.71875L12.2188 5.71875C12.5312 5.4375 13 5.4375 13.2812 5.75C13.5625 6.0625 13.5625 6.53125 13.25 6.8125Z",fill:"currentColor"})})})]}),l?e.jsx(N,{size:R.SM,color:M.SECONDARY_ALT,className:"mt-xxs",children:l}):null,y?e.jsx(C,{kind:g,children:y}):null]})};i.__docgenInfo={description:"",methods:[],displayName:"UiSelect",props:{heading:{required:!1,tsType:{name:"string"},description:""},subLabel:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"union",raw:"string | number | readonly string[]",elements:[{name:"string"},{name:"number"},{name:"unknown"}]},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},prefixIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},postfixIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},kind:{required:!1,tsType:{name:"EInputKind"},description:""},size:{required:!1,tsType:{name:"ESelectSize"},description:"",defaultValue:{value:"ESelectSize.MD",computed:!0}},statusMessage:{required:!1,tsType:{name:"union",raw:"string | React.ReactElement",elements:[{name:"string"},{name:"ReactReactElement",raw:"React.ReactElement"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLSelectElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLSelectElement>",elements:[{name:"HTMLSelectElement"}]},name:"event"}],return:{name:"void"}}},description:""}}};const F={title:"Components/UiSelect",component:i,argTypes:{children:{control:{type:"text"}},disabled:{control:{type:"boolean"},description:"Disable the select element"},heading:{control:{type:"text"},description:"Heading of the select element"},statusMessage:{control:{type:"text"},description:"Status message of the select element"},subLabel:{control:{type:"text"},description:"Sublabel of the select element"},kind:{control:{type:"select"},options:Object.values(t),description:"Kind of the select element"},size:{control:{type:"select"},options:Object.values(a),description:"Size of the select element"},value:{control:{type:"select"},options:["","1","2","3"],description:"Value of the select element"}},args:{disabled:!1,heading:"Heading",subLabel:"subLabel",kind:t.DEFAULT,statusMessage:"",value:"",onChange:n=>console.log(n.target.value)}},v={render:n=>{const[p,l]=h.useState(n.value??"");return h.useEffect(()=>{l(n.value??"")},[n.value]),e.jsxs(i,{...n,value:p,onChange:d=>l(d.target.value),children:[e.jsx("option",{value:"",disabled:!0,children:"Select an option"}),e.jsx("option",{value:"1",children:"Option 1"}),e.jsx("option",{value:"2",children:"Option 2"}),e.jsx("option",{value:"3",children:"Option 3"})]})}},x={render:n=>e.jsxs("div",{className:"flex flex-col gap-lg",children:[e.jsx("div",{className:"flex flex-col gap-sm",children:e.jsxs("div",{className:"flex gap-sm",children:[e.jsxs(i,{...n,kind:t.DEFAULT,heading:"Default",children:[e.jsx("option",{value:"",children:"Select option"}),e.jsx("option",{value:"1",children:"Option 1"}),e.jsx("option",{value:"2",children:"Option 2"})]}),e.jsxs(i,{...n,kind:t.ERROR,heading:"Error",children:[e.jsx("option",{value:"",children:"Select option"}),e.jsx("option",{value:"1",children:"Option 1"}),e.jsx("option",{value:"2",children:"Option 2"})]}),e.jsxs(i,{...n,kind:t.SUCCESS,heading:"Success",children:[e.jsx("option",{value:"",children:"Select option"}),e.jsx("option",{value:"1",children:"Option 1"}),e.jsx("option",{value:"2",children:"Option 2"})]}),e.jsxs(i,{...n,kind:t.WARNING,heading:"Warning",children:[e.jsx("option",{value:"",children:"Select option"}),e.jsx("option",{value:"1",children:"Option 1"}),e.jsx("option",{value:"2",children:"Option 2"})]})]})}),e.jsx("div",{className:"flex flex-col gap-sm",children:e.jsxs("div",{className:"flex gap-sm",children:[e.jsxs(i,{...n,kind:t.DEFAULT,heading:"Default with Icon",prefixIcon:e.jsx(r,{name:["far","face-angry"],size:c.MD,className:"text-secondary-alt-600"}),children:[e.jsx("option",{value:"",children:"Select option"}),e.jsx("option",{value:"1",children:"Option 1"}),e.jsx("option",{value:"2",children:"Option 2"})]}),e.jsxs(i,{...n,kind:t.ERROR,heading:"Error with Icon",prefixIcon:e.jsx(r,{name:["far","face-angry"],size:c.MD,className:"text-error"}),statusMessage:"Error message",children:[e.jsx("option",{value:"",children:"Select option"}),e.jsx("option",{value:"1",children:"Option 1"}),e.jsx("option",{value:"2",children:"Option 2"})]}),e.jsxs(i,{...n,kind:t.SUCCESS,heading:"Success with Icon",prefixIcon:e.jsx(r,{name:["far","face-angry"],size:c.MD,className:"text-primary-600"}),children:[e.jsx("option",{value:"",children:"Select option"}),e.jsx("option",{value:"1",children:"Option 1"}),e.jsx("option",{value:"2",children:"Option 2"})]}),e.jsxs(i,{...n,kind:t.WARNING,heading:"Warning with Icon",prefixIcon:e.jsx(r,{name:["far","face-angry"],size:c.MD,className:"text-warning-600"}),statusMessage:"Warning message",children:[e.jsx("option",{value:"",children:"Select option"}),e.jsx("option",{value:"1",children:"Option 1"}),e.jsx("option",{value:"2",children:"Option 2"})]})]})}),e.jsx("div",{className:"flex flex-col gap-sm",children:e.jsxs(i,{...n,kind:t.DEFAULT,heading:"Disabled",disabled:!0,prefixIcon:e.jsx(r,{name:["far","face-angry"],size:c.MD,className:"text-secondary-alt-300"}),children:[e.jsx("option",{value:"",children:"Cannot select"}),e.jsx("option",{value:"1",children:"Option 1"}),e.jsx("option",{value:"2",children:"Option 2"})]})})]})};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState(args.value ?? "");
    React.useEffect(() => {
      setValue(args.value ?? "");
    }, [args.value]);
    return <UiSelect {...args} value={value} onChange={event => setValue(event.target.value)}>
                <option value="" disabled>Select an option</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
            </UiSelect>;
  }
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};const _=["Primary","Variants"];export{v as Primary,x as Variants,_ as __namedExportsOrder,F as default};
