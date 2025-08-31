import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{R as d,r as y}from"./iframe-MiKHkO6f.js";import{c as R}from"./index-B8xeVOnk.js";const D="_thumb_hkko1_18",E={thumb:D},m=({value:e,min:a,max:r,step:l,onChangeHandler:s,className:j,...S})=>{const u=d.useRef(null),V=d.useRef(null),C=d.useRef(null),H=k(e,a,r),[T,w]=y.useState(`calc(${H}% - ${H*32/100}px)`),f=y.useCallback(()=>{const t=parseFloat(String(e)),o=parseFloat(String(a)),i=parseFloat(String(r)),c=(t-o)/(i-o)*100;w(`calc(${c}% - ${c*32/100}px)`)},[a,r,e]);y.useEffect(()=>{f();const t=new ResizeObserver(()=>{f()});return u.current&&t.observe(u.current),()=>{t.disconnect()}},[f]);const N=t=>{const o=+t.target.value;if(o===e)return;const i=parseFloat(o.toFixed(10));s(i)},F=t=>{if(!C.current||!u.current)return;const o=C.current.getBoundingClientRect(),i=t.clientX-o.left,c=o.width,p=i/c*100,g=parseFloat(String(a)),I=parseFloat(String(r)),M=g+p/100*(I-g),_=Math.round(M/Number(l))*Number(l);if(u.current){u.current.value=String(_);const q=new Event("input",{bubbles:!0});u.current.dispatchEvent(q)}};function k(t,o,i){const c=parseFloat(String(t)),p=parseFloat(String(o)),g=parseFloat(String(i));return(c-p)/(g-p)*100}return n.jsxs("div",{ref:C,className:R("relative box-content h-xl py-xxs",S.disabled&&"pointer-events-none cursor-default opacity-60",j),onClick:F,children:[n.jsx("input",{...S,ref:u,className:"absolute top-0 left-0 size-full cursor-pointer appearance-none bg-transparent",style:{touchAction:"none"},type:"range",min:a,max:r,step:l,value:e,onChange:N,onTouchStart:t=>t.stopPropagation(),onTouchMove:t=>t.stopPropagation()}),n.jsx("div",{className:"pointer-events-none absolute top-1/2 left-0 h-xxs w-full -translate-y-1/2 overflow-clip rounded-sm bg-secondary-alt",children:n.jsx("div",{className:"pointer-events-none absolute top-1/2 left-0 h-xxs -translate-y-1/2 rounded-sm bg-primary-600",style:{width:`calc(${T} + 16px)`}})}),n.jsx("div",{className:R(E.thumb,"pointer-events-none","absolute","box-content","size-md","-translate-y-1/2","rounded-full","bg-white","border-primary-600"),ref:V,style:{left:T},children:n.jsx("div",{className:"absolute top-1/2 left-1/2 size-xxs -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-600"})})]})};m.__docgenInfo={description:"",methods:[],displayName:"UiInputRange",props:{value:{required:!0,tsType:{name:"number"},description:""},min:{required:!0,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},max:{required:!0,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},step:{required:!0,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},onChangeHandler:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const $={title:"Components/UiInputRange",component:m,argTypes:{min:{control:{type:"number"},description:"The minimum range value"},max:{control:{type:"number"},description:"The maximum range value"},step:{control:{type:"number"},description:"The step increment of the range"}},args:{min:0,max:100,step:1,disabled:!1,value:50,onChangeHandler:e=>console.log(e)}},v={render:e=>{const[a,r]=d.useState(e.value),l=s=>{r(s),e.onChangeHandler(s)};return n.jsxs("div",{children:[n.jsx(m,{...e,value:a,onChangeHandler:l}),n.jsxs("div",{style:{marginTop:"2rem"},children:["Current value: ",a]})]})},args:{min:0,max:100,step:1,value:82,onChangeHandler:()=>{}}},h={render:e=>{const[a,r]=d.useState(e.value),l=s=>{r(s),e.onChangeHandler(s)};return n.jsxs("div",{children:[n.jsx(m,{...e,value:a,onChangeHandler:l}),n.jsxs("div",{style:{marginTop:"2rem"},children:["Current value: ",a]})]})},args:{min:-50,max:50,step:5,value:0,onChangeHandler:()=>{}}},b={render:e=>{const[a,r]=d.useState(e.value),l=s=>{r(s),e.onChangeHandler(s)};return n.jsxs("div",{children:[n.jsx(m,{...e,value:a,onChangeHandler:l}),n.jsxs("div",{style:{marginTop:"2rem"},children:["Current value: ",a]})]})},args:{min:0,max:1,step:.1,value:.5,onChangeHandler:()=>{}}},x={args:{disabled:!0}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState(args.value);
    const handleChange = (val: number) => {
      setValue(val);
      args.onChangeHandler(val);
    };
    return <div>
                <UiInputRange {...args} value={value} onChangeHandler={handleChange} />
                <div style={{
        marginTop: "2rem"
      }}>
                    Current value: {value}
                </div>
            </div>;
  },
  args: {
    min: 0,
    max: 100,
    step: 1,
    value: 82,
    onChangeHandler: () => {}
  }
}`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState(args.value);
    const handleChange = (val: number) => {
      setValue(val);
      args.onChangeHandler(val);
    };
    return <div>
                <UiInputRange {...args} value={value} onChangeHandler={handleChange} />
                <div style={{
        marginTop: "2rem"
      }}>
                    Current value: {value}
                </div>
            </div>;
  },
  args: {
    min: -50,
    max: 50,
    step: 5,
    value: 0,
    onChangeHandler: () => {}
  }
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState(args.value);
    const handleChange = (val: number) => {
      setValue(val);
      args.onChangeHandler(val);
    };
    return <div>
                <UiInputRange {...args} value={value} onChangeHandler={handleChange} />
                <div style={{
        marginTop: "2rem"
      }}>
                    Current value: {value}
                </div>
            </div>;
  },
  args: {
    min: 0,
    max: 1,
    step: 0.1,
    value: 0.5,
    onChangeHandler: () => {}
  }
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...x.parameters?.docs?.source}}};const O=["Default","NegativeRange","DecimalSteps","Disabled"];export{b as DecimalSteps,v as Default,x as Disabled,h as NegativeRange,O as __namedExportsOrder,$ as default};
