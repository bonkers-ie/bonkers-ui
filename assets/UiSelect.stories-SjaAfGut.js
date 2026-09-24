import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{g as n}from"./iframe-DYDs02wk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{t as i}from"./classnames-D09xBJOL.js";import{n as a,o,s,t as c}from"./UiTypography-BwoLwmnk.js";import{r as l,t as u}from"./colors-CdX8yQ1z.js";import{i as d,n as f,r as p,t as m}from"./UiIcon-DFqNdBsp.js";import{a as h,n as g,r as _,t as v}from"./UiInputStatusMessage-BmQveYBq.js";var y,b;function x(){return(x=t((()=>{y=`_UiSelect_1fbno_1`,b={UiSelect:y}})))()}var S;function C(){return(C=t((()=>{S=function(e){return e.SM=`SM`,e.MD=`MD`,e}({})})))()}var w,T,E,D,O;function k(){return(k=t((()=>{w=e(n(),1),T=e(i(),1),a(),s(),l(),x(),h(),g(),C(),E=r(),D={[_.DEFAULT]:`border-secondary-alt-600`,[_.ERROR]:`border-error`,[_.SUCCESS]:`border-primary-600`,[_.WARNING]:`border-warning-600`},O=({children:e,heading:t,subLabel:n,disabled:r,onChange:i,className:a,placeholder:s,prefixIcon:l,postfixIcon:d,statusMessage:f,kind:p,size:m=S.MD,...h})=>{let[g,_]=w.useState(h.value||h.defaultValue||``),y=w.useCallback(e=>{_(e.target.value),i?.(e)},[i]);return(0,w.useEffect)(()=>{h.value!==void 0&&_(h.value)},[h.value]),(0,E.jsxs)(`div`,{className:(0,T.default)(`ui-select`,a),children:[t?(0,E.jsx)(c,{size:o.MD,className:`mb-xxs`,children:t}):null,(0,E.jsxs)(`div`,{className:(0,T.default)(b.UiSelect,`flex items-center gap-sm`,`relative`,`rounded-xl`,`border`,`hover:border-secondary-alt-600`,r?[`pointer-events-none`,`border-secondary-alt-300`,`bg-secondary-alt-200`]:[p&&D[p],`bg-white`]),children:[l?(0,E.jsx)(`div`,{className:`flex items-center pl-sm`,children:l}):null,(0,E.jsxs)(`select`,{...h,className:(0,T.default)(`m-0 w-full cursor-pointer appearance-none border-0 bg-transparent pr-xl leading-[22px] outline-0`,{"py-xxs":m===S.SM,"py-sm":m===S.MD,"text-secondary-alt":g===``||!g,"text-black":g,"pl-sm":!l}),disabled:r,value:g,onChange:y,children:[s?(0,E.jsx)(`option`,{value:``,disabled:!0,hidden:!0,children:s}):null,e]}),(0,E.jsx)(`div`,{className:`pointer-events-none absolute top-1/2 right-sm -translate-y-1/2`,children:d||(0,E.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,E.jsx)(`path`,{d:`M13.25 6.8125L8.5 11.2812C8.34375 11.4375 8.15625 11.5 8 11.5C7.8125 11.5 7.625 11.4375 7.46875 11.3125L2.71875 6.8125C2.40625 6.53125 2.40625 6.0625 2.6875 5.75C2.96875 5.4375 3.4375 5.4375 3.75 5.71875L8 9.71875L12.2188 5.71875C12.5312 5.4375 13 5.4375 13.2812 5.75C13.5625 6.0625 13.5625 6.53125 13.25 6.8125Z`,fill:`currentColor`})})})]}),n?(0,E.jsx)(c,{size:o.SM,color:u.SECONDARY_ALT,className:`mt-xxs`,children:n}):null,f?(0,E.jsx)(v,{kind:p,children:f}):null]})},O.__docgenInfo={description:``,methods:[],displayName:`UiSelect`,props:{heading:{required:!1,tsType:{name:`string`},description:``},subLabel:{required:!1,tsType:{name:`string`},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``},value:{required:!1,tsType:{name:`union`,raw:`string | number | readonly string[]`,elements:[{name:`string`},{name:`number`},{name:`unknown`}]},description:``},placeholder:{required:!1,tsType:{name:`string`},description:``},prefixIcon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},postfixIcon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``},kind:{required:!1,tsType:{name:`EInputKind`},description:``},size:{required:!1,tsType:{name:`ESelectSize`},description:``,defaultValue:{value:`ESelectSize.MD`,computed:!0}},statusMessage:{required:!1,tsType:{name:`union`,raw:`string | React.ReactElement`,elements:[{name:`string`},{name:`ReactReactElement`,raw:`React.ReactElement`}]},description:``},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(event: React.ChangeEvent<HTMLSelectElement>) => void`,signature:{arguments:[{type:{name:`ReactChangeEvent`,raw:`React.ChangeEvent<HTMLSelectElement>`,elements:[{name:`HTMLSelectElement`}]},name:`event`}],return:{name:`void`}}},description:``}}}})))()}var A,j,M,N,P,F;function I(){return(I=t((()=>{A=e(n(),1),k(),h(),f(),d(),C(),j=r(),M={title:`Components/UiSelect`,component:O,argTypes:{children:{control:{type:`text`}},disabled:{control:{type:`boolean`},description:`Disable the select element`},heading:{control:{type:`text`},description:`Heading of the select element`},statusMessage:{control:{type:`text`},description:`Status message of the select element`},subLabel:{control:{type:`text`},description:`Sublabel of the select element`},kind:{control:{type:`select`},options:Object.values(_),description:`Kind of the select element`},size:{control:{type:`select`},options:Object.values(S),description:`Size of the select element`},value:{control:{type:`select`},options:[``,`1`,`2`,`3`],description:`Value of the select element`}},args:{disabled:!1,heading:`Heading`,subLabel:`subLabel`,kind:_.DEFAULT,statusMessage:``,value:``,onChange:e=>console.log(e.target.value)}},N={render:e=>{let[t,n]=A.useState(e.value??``);return A.useEffect(()=>{n(e.value??``)},[e.value]),(0,j.jsxs)(O,{...e,value:t,onChange:e=>n(e.target.value),children:[(0,j.jsx)(`option`,{value:``,disabled:!0,children:`Select an option`}),(0,j.jsx)(`option`,{value:`1`,children:`Option 1`}),(0,j.jsx)(`option`,{value:`2`,children:`Option 2`}),(0,j.jsx)(`option`,{value:`3`,children:`Option 3`})]})}},P={render:e=>(0,j.jsxs)(`div`,{className:`flex flex-col gap-lg`,children:[(0,j.jsx)(`div`,{className:`flex flex-col gap-sm`,children:(0,j.jsxs)(`div`,{className:`flex gap-sm`,children:[(0,j.jsxs)(O,{...e,kind:_.DEFAULT,heading:`Default`,children:[(0,j.jsx)(`option`,{value:``,children:`Select option`}),(0,j.jsx)(`option`,{value:`1`,children:`Option 1`}),(0,j.jsx)(`option`,{value:`2`,children:`Option 2`})]}),(0,j.jsxs)(O,{...e,kind:_.ERROR,heading:`Error`,children:[(0,j.jsx)(`option`,{value:``,children:`Select option`}),(0,j.jsx)(`option`,{value:`1`,children:`Option 1`}),(0,j.jsx)(`option`,{value:`2`,children:`Option 2`})]}),(0,j.jsxs)(O,{...e,kind:_.SUCCESS,heading:`Success`,children:[(0,j.jsx)(`option`,{value:``,children:`Select option`}),(0,j.jsx)(`option`,{value:`1`,children:`Option 1`}),(0,j.jsx)(`option`,{value:`2`,children:`Option 2`})]}),(0,j.jsxs)(O,{...e,kind:_.WARNING,heading:`Warning`,children:[(0,j.jsx)(`option`,{value:``,children:`Select option`}),(0,j.jsx)(`option`,{value:`1`,children:`Option 1`}),(0,j.jsx)(`option`,{value:`2`,children:`Option 2`})]})]})}),(0,j.jsx)(`div`,{className:`flex flex-col gap-sm`,children:(0,j.jsxs)(`div`,{className:`flex gap-sm`,children:[(0,j.jsxs)(O,{...e,kind:_.DEFAULT,heading:`Default with Icon`,prefixIcon:(0,j.jsx)(m,{name:[`far`,`face-angry`],size:p.MD,className:`text-secondary-alt-600`}),children:[(0,j.jsx)(`option`,{value:``,children:`Select option`}),(0,j.jsx)(`option`,{value:`1`,children:`Option 1`}),(0,j.jsx)(`option`,{value:`2`,children:`Option 2`})]}),(0,j.jsxs)(O,{...e,kind:_.ERROR,heading:`Error with Icon`,prefixIcon:(0,j.jsx)(m,{name:[`far`,`face-angry`],size:p.MD,className:`text-error`}),statusMessage:`Error message`,children:[(0,j.jsx)(`option`,{value:``,children:`Select option`}),(0,j.jsx)(`option`,{value:`1`,children:`Option 1`}),(0,j.jsx)(`option`,{value:`2`,children:`Option 2`})]}),(0,j.jsxs)(O,{...e,kind:_.SUCCESS,heading:`Success with Icon`,prefixIcon:(0,j.jsx)(m,{name:[`far`,`face-angry`],size:p.MD,className:`text-primary-600`}),children:[(0,j.jsx)(`option`,{value:``,children:`Select option`}),(0,j.jsx)(`option`,{value:`1`,children:`Option 1`}),(0,j.jsx)(`option`,{value:`2`,children:`Option 2`})]}),(0,j.jsxs)(O,{...e,kind:_.WARNING,heading:`Warning with Icon`,prefixIcon:(0,j.jsx)(m,{name:[`far`,`face-angry`],size:p.MD,className:`text-warning-600`}),statusMessage:`Warning message`,children:[(0,j.jsx)(`option`,{value:``,children:`Select option`}),(0,j.jsx)(`option`,{value:`1`,children:`Option 1`}),(0,j.jsx)(`option`,{value:`2`,children:`Option 2`})]})]})}),(0,j.jsx)(`div`,{className:`flex flex-col gap-sm`,children:(0,j.jsxs)(O,{...e,kind:_.DEFAULT,heading:`Disabled`,disabled:!0,prefixIcon:(0,j.jsx)(m,{name:[`far`,`face-angry`],size:p.MD,className:`text-secondary-alt-300`}),children:[(0,j.jsx)(`option`,{value:``,children:`Cannot select`}),(0,j.jsx)(`option`,{value:`1`,children:`Option 1`}),(0,j.jsx)(`option`,{value:`2`,children:`Option 2`})]})})]})},F=[`Primary`,`Variants`],N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}}})))()}I();export{N as Primary,P as Variants,F as __namedExportsOrder,M as default};