import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{R as C}from"./index-D4lIrffr.js";import{c as k}from"./index-_oZgBBUR.js";import{E as c}from"./align-CojEiJiX.js";const S="_UiCheckbox_6diu5_1",M="_UiCheckbox__custom_6diu5_5",N="_UiCheckbox__icon_6diu5_11",O="_UiCheckbox__disabled_6diu5_63",p={UiCheckbox:S,UiCheckbox__custom:M,UiCheckbox__icon:N,UiCheckbox__disabled:O};var i=(e=>(e.SM="SM",e.MD="MD",e))(i||{});const R={[c.START]:"justify-start",[c.END]:"justify-end",[c.CENTER]:"justify-center",[c.BETWEEN]:"justify-between",[c.AROUND]:"justify-around",[c.EVENLY]:"justify-evenly"},D={[i.SM]:"size-sm",[i.MD]:"size-md"},z={[i.SM]:"size-xs",[i.MD]:"size-sm"},h=({checked:e,value:o,size:a=i.MD,disabled:s=!1,justify:n=c.START,invertOrder:r=!1,children:l,onChange:d,className:U,name:j,...v})=>{const T=E=>{!s&&d&&(d==null||d(E.target.checked))};return t.jsxs("label",{className:k(p.UiCheckbox,"grid","cursor-pointer",l&&"items-center gap-sm",R[n],s&&p.UiCheckbox__disabled,U),children:[t.jsx("input",{...v,className:"absolute appearance-none",type:"checkbox",checked:e,disabled:s,value:o,name:j,onChange:T}),t.jsx("span",{className:k(p.UiCheckbox__custom,"relative","flex","items-center","justify-center","rounded-sm","border","border-secondary-alt-600","hover:border-secondary-alt-700",r&&"order-last",D[a]),children:t.jsx("svg",{className:k(p.UiCheckbox__icon,"text-white",z[a]),viewBox:"0 0 16 12",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:t.jsx("path",{d:"M1 4.40106L6.60071 10.1135L15.1694 1.71245",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"})})}),l]})};h.__docgenInfo={description:"",methods:[],displayName:"UiCheckbox",props:{invertOrder:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},justify:{required:!1,tsType:{name:"EJustify"},description:"",defaultValue:{value:"EJustify.START",computed:!0}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"ECheckboxSize"},description:"",defaultValue:{value:"ECheckboxSize.MD",computed:!0}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""}}};const A={title:"Components/UiCheckbox",component:h,argTypes:{justify:{control:{type:"select"},options:Object.values(c),description:"The Element justify"},size:{control:{type:"select"},options:Object.values(i),description:"The element size can be SM or MD (MD by default)"},invertOrder:{control:{type:"boolean"},description:"The Element order"},disabled:{control:{type:"boolean"},description:"The Element disabled state"},checked:{control:{type:"boolean"},description:"The Element checked state"},children:{control:{type:"text"}}},args:{children:"Some text",justify:c.START,invertOrder:!1,disabled:!1,checked:!1,onChange:(e,o)=>console.log(`${o||"Value"} updated to ${e}`),size:i.MD}},u={render:e=>{const[o,a]=C.useState(e.checked);C.useEffect(()=>{a(e.checked)},[e.checked]);const s=n=>{var r;a(n),(r=e.onChange)==null||r.call(e,n)};return t.jsx(h,{...e,checked:o,onChange:s})}},m={render:e=>{const[o,a]=C.useState({option1:!1,option2:!0,option3:!1}),s=(n,r)=>{var l;a(d=>({...d,[r]:n})),(l=e.onChange)==null||l.call(e,n,r)};return t.jsxs("div",{className:"flex flex-col gap-sm",children:[t.jsx(h,{...e,name:"option1",checked:o.option1,onChange:n=>s(n,"option1"),children:"Option 1"}),t.jsx(h,{...e,name:"option2",checked:o.option2,onChange:n=>s(n,"option2"),children:"Option 2"}),t.jsx(h,{...e,name:"option3",checked:o.option3,onChange:n=>s(n,"option3"),children:"Option 3"})]})}};var f,x,b;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(b=(x=u.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var y,_,g;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(g=(_=m.parameters)==null?void 0:_.docs)==null?void 0:g.source}}};const L=["Primary","CheckboxGroup"];export{m as CheckboxGroup,u as Primary,L as __namedExportsOrder,A as default};
