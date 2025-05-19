import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as i}from"./index-D4lIrffr.js";import{c as u}from"./index-_oZgBBUR.js";import{U as m,b as h,E as g}from"./UiTypography-C5uiYeZb.js";import{E as a}from"./_types-Bwb-7FgU.js";const w="_UiSelect_1fbno_1",L={UiSelect:w},U={[a.DEFAULT]:"border-secondary-alt-600",[a.ERROR]:"border-error",[a.SUCCESS]:"border-primary-600"},v=({children:t,heading:s,subLabel:r,disabled:l,onChange:n,className:E,placeholder:x,postfixIcon:y,statusMessage:c,kind:d,...p})=>{const[C,T]=i.useState(p.value||p.defaultValue||""),j=i.useCallback(b=>{T(b.target.value),n==null||n(b)},[n]);return e.jsxs("div",{className:u("ui-select",E),children:[s?e.jsx(m,{size:h.MD,className:"mb-xxs",children:s}):null,e.jsxs("div",{className:u(L.UiSelect,"relative","rounded-xl","border","hover:border-secondary-alt-600",l?["pointer-events-none","border-secondary-alt-300","bg-secondary-alt-200"]:[d&&U[d],"bg-white"]),children:[e.jsxs("select",{...p,className:`
						m-0
						pr-xl
						w-full
						cursor-pointer
						appearance-none
						border-0
						bg-transparent
						leading-[20px]
						p-sm
						text-secondary-alt
						outline-0
					`,disabled:l,value:C,onChange:j,children:[x?e.jsx("option",{value:"",disabled:!0,hidden:!0,children:x}):null,t]}),e.jsx("div",{className:"absolute right-sm top-1/2 -translate-y-1/2 pointer-events-none",children:y||e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M13.25 6.8125L8.5 11.2812C8.34375 11.4375 8.15625 11.5 8 11.5C7.8125 11.5 7.625 11.4375 7.46875 11.3125L2.71875 6.8125C2.40625 6.53125 2.40625 6.0625 2.6875 5.75C2.96875 5.4375 3.4375 5.4375 3.75 5.71875L8 9.71875L12.2188 5.71875C12.5312 5.4375 13 5.4375 13.2812 5.75C13.5625 6.0625 13.5625 6.53125 13.25 6.8125Z",fill:"currentColor"})})})]}),r?e.jsx(m,{size:h.SM,color:g.SECONDARY_ALT,className:"mt-xxs",children:r}):null,c?e.jsx(m,{className:u("transition-all duration-300 ease-in-out","max-h-0 opacity-0 overflow-hidden gap-xxs mt-xxs","data-[status=true]:max-h-full data-[status=true]:opacity-100"),lineHeight:!0,color:d===a.ERROR?g.ERROR:g.PRIMARY,size:h.SM,"data-status":!!c,children:c}):null]})};v.__docgenInfo={description:"",methods:[],displayName:"UiSelect",props:{heading:{required:!1,tsType:{name:"string"},description:""},subLabel:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"union",raw:"string | number | readonly string[]",elements:[{name:"string"},{name:"number"},{name:"unknown"}]},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},postfixIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},kind:{required:!1,tsType:{name:"EInputKind"},description:""},statusMessage:{required:!1,tsType:{name:"union",raw:"string | React.ReactElement",elements:[{name:"string"},{name:"ReactReactElement",raw:"React.ReactElement"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLSelectElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLSelectElement>",elements:[{name:"HTMLSelectElement"}]},name:"event"}],return:{name:"void"}}},description:""}}};const H={title:"Components/UiSelect",component:v,argTypes:{children:{control:{type:"text"}},disabled:{control:{type:"boolean"},description:"Disable the select element"},heading:{control:{type:"text"},description:"Heading of the select element"},statusMessage:{control:{type:"text"},description:"Status message of the select element"},subLabel:{control:{type:"text"},description:"Sublabel of the select element"},kind:{control:{type:"select"},options:Object.keys(a),description:"Kind of the select element"},value:{control:{type:"text"},description:"Value of the select element"}},args:{disabled:!1,heading:"Heading",subLabel:"subLabel",kind:a.DEFAULT,statusMessage:"",value:"",onChange:t=>console.log(t.target.value)}},o={render:t=>{const[s,r]=i.useState(t.value),l=n=>{r(n.target.value)};return e.jsx(i.Fragment,{children:e.jsxs(v,{...t,value:s,onChange:l,children:[e.jsx("option",{value:"",disabled:!0,hidden:!0,children:"Select an option"}),e.jsx("option",{value:"1",children:"Option 1"}),e.jsx("option",{value:"2",children:"Option 2"}),e.jsx("option",{value:"3",children:"Option 3"})]})})}};var R,f,S;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(S=(f=o.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};const V=["Primary"];export{o as Primary,V as __namedExportsOrder,H as default};
