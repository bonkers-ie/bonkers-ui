import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{R as k}from"./iframe-BZ5EBhaA.js";import{c as m}from"./index-DDEMp-JE.js";import{E as c}from"./align-CojEiJiX.js";import"./preload-helper-PPVm8Dsz.js";const _="_UiCheckbox_6diu5_1",U="_UiCheckbox__custom_6diu5_5",j="_UiCheckbox__icon_6diu5_11",v="_UiCheckbox__disabled_6diu5_63",l={UiCheckbox:_,UiCheckbox__custom:U,UiCheckbox__icon:j,UiCheckbox__disabled:v};var a=(e=>(e.SM="SM",e.MD="MD",e))(a||{});const T={[c.START]:"justify-start",[c.END]:"justify-end",[c.CENTER]:"justify-center",[c.BETWEEN]:"justify-between",[c.AROUND]:"justify-around",[c.EVENLY]:"justify-evenly"},E={[a.SM]:"size-sm",[a.MD]:"size-md"},S={[a.SM]:"size-xs",[a.MD]:"size-sm"},r=({checked:e,value:o,size:i=a.MD,disabled:s=!1,justify:n=c.START,invertOrder:d=!1,children:h,onChange:C,className:f,name:x,...b})=>{const g=y=>{!s&&C&&C?.(y.target.checked)};return t.jsxs("label",{className:m(l.UiCheckbox,"grid","cursor-pointer",h&&"items-center gap-sm",T[n],s&&l.UiCheckbox__disabled,f),children:[t.jsx("input",{...b,className:"absolute appearance-none",type:"checkbox",checked:e,disabled:s,value:o,name:x,onChange:g}),t.jsx("span",{className:m(l.UiCheckbox__custom,"relative","flex","items-center","justify-center","rounded-sm","border","border-secondary-alt-600","hover:border-secondary-alt-700",d&&"order-last",E[i]),children:t.jsx("svg",{className:m(l.UiCheckbox__icon,"text-white",S[i]),viewBox:"0 0 16 12",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:t.jsx("path",{d:"M1 4.40106L6.60071 10.1135L15.1694 1.71245",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"})})}),h]})};r.__docgenInfo={description:"",methods:[],displayName:"UiCheckbox",props:{invertOrder:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},justify:{required:!1,tsType:{name:"EJustify"},description:"",defaultValue:{value:"EJustify.START",computed:!0}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"ECheckboxSize"},description:"",defaultValue:{value:"ECheckboxSize.MD",computed:!0}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""}}};const z={title:"Components/UiCheckbox",component:r,argTypes:{justify:{control:{type:"select"},options:Object.values(c),description:"The Element justify"},size:{control:{type:"select"},options:Object.values(a),description:"The element size can be SM or MD (MD by default)"},invertOrder:{control:{type:"boolean"},description:"The Element order"},disabled:{control:{type:"boolean"},description:"The Element disabled state"},checked:{control:{type:"boolean"},description:"The Element checked state"},children:{control:{type:"text"}}},args:{children:"Some text",justify:c.START,invertOrder:!1,disabled:!1,checked:!1,onChange:(e,o)=>console.log(`${o||"Value"} updated to ${e}`),size:a.MD}},p={render:e=>{const[o,i]=k.useState(e.checked);k.useEffect(()=>{i(e.checked)},[e.checked]);const s=n=>{i(n),e.onChange?.(n)};return t.jsx(r,{...e,checked:o,onChange:s})}},u={render:e=>{const[o,i]=k.useState({option1:!1,option2:!0,option3:!1}),s=(n,d)=>{i(h=>({...h,[d]:n})),e.onChange?.(n,d)};return t.jsxs("div",{className:"flex flex-col gap-sm",children:[t.jsx(r,{...e,name:"option1",checked:o.option1,onChange:n=>s(n,"option1"),children:"Option 1"}),t.jsx(r,{...e,name:"option2",checked:o.option2,onChange:n=>s(n,"option2"),children:"Option 2"}),t.jsx(r,{...e,name:"option3",checked:o.option3,onChange:n=>s(n,"option3"),children:"Option 3"})]})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const I=["Primary","CheckboxGroup"];export{u as CheckboxGroup,p as Primary,I as __namedExportsOrder,z as default};
