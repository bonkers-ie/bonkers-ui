import{j as o}from"./jsx-runtime-u17CrQMm.js";import{R as g,r as E}from"./iframe-sYJs1LNi.js";import{c as p}from"./index-Cx-s0aks.js";import{E as a}from"./align-CojEiJiX.js";import"./preload-helper-PPVm8Dsz.js";const j="_UiCheckbox_6diu5_1",U="_UiCheckbox__custom_6diu5_5",S="_UiCheckbox__icon_6diu5_11",O="_UiCheckbox__disabled_6diu5_63",m={UiCheckbox:j,UiCheckbox__custom:U,UiCheckbox__icon:S,UiCheckbox__disabled:O};var c=(e=>(e.SM="SM",e.MD="MD",e))(c||{}),i=(e=>(e.TOP="top",e.CENTER="center",e.BOTTOM="bottom",e))(i||{});const N={[a.START]:"justify-start",[a.END]:"justify-end",[a.CENTER]:"justify-center",[a.BETWEEN]:"justify-between",[a.AROUND]:"justify-around",[a.EVENLY]:"justify-evenly"},M={[i.TOP]:"items-start",[i.CENTER]:"items-center",[i.BOTTOM]:"items-end"},R={[c.SM]:"size-sm",[c.MD]:"size-md"},w={[c.SM]:"size-xs",[c.MD]:"size-sm"},l=({checked:e,value:t,size:r=c.MD,disabled:s=!1,justify:n=a.START,invertOrder:d=!1,children:h,onChange:b,className:x,align:f=i.CENTER,name:y,...v})=>{const _=T=>{!s&&b&&b?.(T.target.checked)};return o.jsxs("label",{className:p(m.UiCheckbox,"grid","cursor-pointer",h&&p("gap-sm",M[f]),N[n],s&&m.UiCheckbox__disabled,x),children:[o.jsx("input",{...v,className:"absolute appearance-none",type:"checkbox",checked:e,disabled:s,value:t,name:y,onChange:_}),o.jsx("span",{className:p(m.UiCheckbox__custom,"relative","flex","items-center","justify-center","rounded-sm","border","border-secondary-alt-600","hover:border-secondary-alt-700",d&&"order-last",R[r]),children:o.jsx("svg",{className:p(m.UiCheckbox__icon,"text-white",w[r]),viewBox:"0 0 16 12",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:o.jsx("path",{d:"M1 4.40106L6.60071 10.1135L15.1694 1.71245",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"})})}),h]})};l.__docgenInfo={description:"",methods:[],displayName:"UiCheckbox",props:{invertOrder:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},justify:{required:!1,tsType:{name:"EJustify"},description:"",defaultValue:{value:"EJustify.START",computed:!0}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"ECheckboxSize"},description:"",defaultValue:{value:"ECheckboxSize.MD",computed:!0}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},align:{required:!1,tsType:{name:"ECheckboxALign"},description:"",defaultValue:{value:"ECheckboxALign.CENTER",computed:!0}}}};const V={title:"Components/UiCheckbox",component:l,argTypes:{justify:{control:{type:"select"},options:Object.values(a),description:"The Element justify"},size:{control:{type:"select"},options:Object.values(c),description:"The element size can be SM or MD (MD by default)"},align:{control:{type:"select"},options:Object.values(i),description:"The vertical alignment of the checkbox against its label (center by default)"},invertOrder:{control:{type:"boolean"},description:"The Element order"},disabled:{control:{type:"boolean"},description:"The Element disabled state"},checked:{control:{type:"boolean"},description:"The Element checked state"},children:{control:{type:"text"}}},args:{children:"Some text",justify:a.START,invertOrder:!1,disabled:!1,checked:!1,onChange:(e,t)=>console.log(`${t||"Value"} updated to ${e}`),size:c.MD,align:i.CENTER}},u={render:e=>{const[t,r]=g.useState(e.checked);g.useEffect(()=>{r(e.checked)},[e.checked]);const s=n=>{r(n),e.onChange?.(n)};return o.jsx(l,{...e,checked:t,onChange:s})}},k={render:e=>o.jsx("div",{className:"flex flex-col gap-md",children:Object.values(i).map(t=>E.createElement(l,{...e,key:t,align:t,checked:!0},`align="${t}" — `,"Some long label text that wraps onto multiple lines so the alignment is visible. Some long label text that wraps onto multiple lines so the alignment is visible. Some long label text that wraps onto multiple lines so the alignment is visible."))})},C={render:e=>{const[t,r]=g.useState({option1:!1,option2:!0,option3:!1}),s=(n,d)=>{r(h=>({...h,[d]:n})),e.onChange?.(n,d)};return o.jsxs("div",{className:"flex flex-col gap-sm",children:[o.jsx(l,{...e,name:"option1",checked:t.option1,onChange:n=>s(n,"option1"),children:"Option 1"}),o.jsx(l,{...e,name:"option2",checked:t.option2,onChange:n=>s(n,"option2"),children:"Option 2"}),o.jsx(l,{...e,name:"option3",checked:t.option3,onChange:n=>s(n,"option3"),children:"Option 3"})]})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-md">
            {Object.values(ECheckboxALign).map(align => <UiCheckbox {...args} key={align} align={align} checked>
                    {\`align="\${align}" — \`}
                    Some long label text that wraps onto multiple lines so the alignment is visible.
                    Some long label text that wraps onto multiple lines so the alignment is visible.
                    Some long label text that wraps onto multiple lines so the alignment is visible.
                </UiCheckbox>)}
        </div>
}`,...k.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};const L=["Primary","Align","CheckboxGroup"];export{k as Align,C as CheckboxGroup,u as Primary,L as __namedExportsOrder,V as default};
