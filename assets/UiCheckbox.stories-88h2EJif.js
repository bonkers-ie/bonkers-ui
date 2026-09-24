import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{g as n}from"./iframe-DYDs02wk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{t as i}from"./classnames-D09xBJOL.js";import{n as a,t as o}from"./align-D3Oxmsjo.js";var s,c,l,u,d;function f(){return(f=t((()=>{s=`_UiCheckbox_6diu5_1`,c=`_UiCheckbox__custom_6diu5_5`,l=`_UiCheckbox__icon_6diu5_11`,u=`_UiCheckbox__disabled_6diu5_63`,d={UiCheckbox:s,UiCheckbox__custom:c,UiCheckbox__icon:l,"cb-pop":`_cb-pop_6diu5_1`,UiCheckbox__disabled:u}})))()}var p,m;function h(){return(h=t((()=>{p=function(e){return e.SM=`SM`,e.MD=`MD`,e}({}),m=function(e){return e.TOP=`top`,e.CENTER=`center`,e.BOTTOM=`bottom`,e}({})})))()}var g,_,v,y,b,x,S;function C(){return(C=t((()=>{n(),f(),g=e(i(),1),a(),h(),_=r(),v={[o.START]:`justify-start`,[o.END]:`justify-end`,[o.CENTER]:`justify-center`,[o.BETWEEN]:`justify-between`,[o.AROUND]:`justify-around`,[o.EVENLY]:`justify-evenly`},y={[m.TOP]:`items-start`,[m.CENTER]:`items-center`,[m.BOTTOM]:`items-end`},b={[p.SM]:`size-sm`,[p.MD]:`size-md`},x={[p.SM]:`size-xs`,[p.MD]:`size-sm`},S=({checked:e,value:t,size:n=p.MD,disabled:r=!1,justify:i=o.START,invertOrder:a=!1,children:s,onChange:c,className:l,align:u=m.CENTER,name:f,...h})=>{let S=e=>{!r&&c&&c?.(e.target.checked)};return(0,_.jsxs)(`label`,{className:(0,g.default)(d.UiCheckbox,`grid`,`cursor-pointer`,s&&(0,g.default)(`gap-sm`,y[u]),v[i],r&&d.UiCheckbox__disabled,l),children:[(0,_.jsx)(`input`,{...h,className:`absolute appearance-none`,type:`checkbox`,checked:e,disabled:r,value:t,name:f,onChange:S}),(0,_.jsx)(`span`,{className:(0,g.default)(d.UiCheckbox__custom,`relative`,`flex`,`items-center`,`justify-center`,`rounded-sm`,`border`,`border-secondary-alt-600`,`hover:border-secondary-alt-700`,a&&`order-last`,b[n]),children:(0,_.jsx)(`svg`,{className:(0,g.default)(d.UiCheckbox__icon,`text-white`,x[n]),viewBox:`0 0 16 12`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`,children:(0,_.jsx)(`path`,{d:`M1 4.40106L6.60071 10.1135L15.1694 1.71245`,stroke:`currentColor`,strokeWidth:`1.6`,strokeLinecap:`round`})})}),s]})},S.__docgenInfo={description:``,methods:[],displayName:`UiCheckbox`,props:{invertOrder:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},justify:{required:!1,tsType:{name:`EJustify`},description:``,defaultValue:{value:`EJustify.START`,computed:!0}},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},value:{required:!1,tsType:{name:`string`},description:``},size:{required:!1,tsType:{name:`ECheckboxSize`},description:``,defaultValue:{value:`ECheckboxSize.MD`,computed:!0}},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(checked: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`checked`}],return:{name:`void`}}},description:``},className:{required:!1,tsType:{name:`string`},description:``},name:{required:!1,tsType:{name:`string`},description:``},align:{required:!1,tsType:{name:`ECheckboxALign`},description:``,defaultValue:{value:`ECheckboxALign.CENTER`,computed:!0}}}}})))()}var w,T,E,D,O,k,A,j;function M(){return(M=t((()=>{w=e(n(),1),C(),a(),h(),T=r(),E=n(),D={title:`Components/UiCheckbox`,component:S,argTypes:{justify:{control:{type:`select`},options:Object.values(o),description:`The Element justify`},size:{control:{type:`select`},options:Object.values(p),description:`The element size can be SM or MD (MD by default)`},align:{control:{type:`select`},options:Object.values(m),description:`The vertical alignment of the checkbox against its label (center by default)`},invertOrder:{control:{type:`boolean`},description:`The Element order`},disabled:{control:{type:`boolean`},description:`The Element disabled state`},checked:{control:{type:`boolean`},description:`The Element checked state`},children:{control:{type:`text`}}},args:{children:`Some text`,justify:o.START,invertOrder:!1,disabled:!1,checked:!1,onChange:(e,t)=>console.log(`${t||`Value`} updated to ${e}`),size:p.MD,align:m.CENTER}},O={render:e=>{let[t,n]=w.useState(e.checked);w.useEffect(()=>{n(e.checked)},[e.checked]);let r=t=>{n(t),e.onChange?.(t)};return(0,T.jsx)(S,{...e,checked:t,onChange:r})}},k={render:e=>(0,T.jsx)(`div`,{className:`flex flex-col gap-md`,children:Object.values(m).map(t=>(0,E.createElement)(S,{...e,key:t,align:t,checked:!0},`align="${t}" — `,`Some long label text that wraps onto multiple lines so the alignment is visible. Some long label text that wraps onto multiple lines so the alignment is visible. Some long label text that wraps onto multiple lines so the alignment is visible.`))})},A={render:e=>{let[t,n]=w.useState({option1:!1,option2:!0,option3:!1}),r=(t,r)=>{n(e=>({...e,[r]:t})),e.onChange?.(t,r)};return(0,T.jsxs)(`div`,{className:`flex flex-col gap-sm`,children:[(0,T.jsx)(S,{...e,name:`option1`,checked:t.option1,onChange:e=>r(e,`option1`),children:`Option 1`}),(0,T.jsx)(S,{...e,name:`option2`,checked:t.option2,onChange:e=>r(e,`option2`),children:`Option 2`}),(0,T.jsx)(S,{...e,name:`option3`,checked:t.option3,onChange:e=>r(e,`option3`),children:`Option 3`})]})}},j=[`Primary`,`Align`,`CheckboxGroup`],O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [checked, setChecked] = React.useState(args.checked);
    React.useEffect(() => {
      setChecked(args.checked);
    }, [args.checked]);
    const handleChange = (isChecked: boolean) => {
      setChecked(isChecked);
      args.onChange?.(isChecked);
    };
    return <UiCheckbox {...args} checked={checked} onChange={handleChange} />;
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-md">
            {Object.values(ECheckboxALign).map(align => <UiCheckbox {...args} key={align} align={align} checked>
                    {\`align="\${align}" — \`}
                    Some long label text that wraps onto multiple lines so the alignment is visible.
                    Some long label text that wraps onto multiple lines so the alignment is visible.
                    Some long label text that wraps onto multiple lines so the alignment is visible.
                </UiCheckbox>)}
        </div>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [checkedItems, setCheckedItems] = React.useState({
      option1: false,
      option2: true,
      option3: false
    });
    const handleChange = (isChecked: boolean, name: string) => {
      setCheckedItems(prev => ({
        ...prev,
        [name]: isChecked
      }));
      args.onChange?.(isChecked, name as keyof typeof checkedItems);
    };
    return <div className="flex flex-col gap-sm">
                <UiCheckbox {...args} name="option1" checked={checkedItems.option1} onChange={isChecked => handleChange(isChecked, "option1")}>
                    Option 1
                </UiCheckbox>
                <UiCheckbox {...args} name="option2" checked={checkedItems.option2} onChange={isChecked => handleChange(isChecked, "option2")}>
                    Option 2
                </UiCheckbox>
                <UiCheckbox {...args} name="option3" checked={checkedItems.option3} onChange={isChecked => handleChange(isChecked, "option3")}>
                    Option 3
                </UiCheckbox>
            </div>;
  }
}`,...A.parameters?.docs?.source}}}})))()}M();export{k as Align,A as CheckboxGroup,O as Primary,j as __namedExportsOrder,D as default};