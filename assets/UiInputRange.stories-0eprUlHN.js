import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{R as o}from"./index-D4lIrffr.js";import{c as H}from"./index-_oZgBBUR.js";const B="_thumb_hkko1_18",$={thumb:B},i=({value:e,min:r,max:s,step:u,onChangeHandler:t,className:U,...b})=>{const l=o.useRef(null),v=o.useRef(null),[x,k]=o.useState(0),h=o.useCallback(()=>{var y,f;if(!l.current||!v.current)return;const a=parseFloat(String(e)),d=parseFloat(String(r)),F=parseFloat(String(s)),M=((y=v.current)==null?void 0:y.getBoundingClientRect().width)??0,C=((f=l.current)==null?void 0:f.getBoundingClientRect().width)??0;if(C===0)return;const O=(a-d)/(F-d)*100,E=M/C*100,W=Math.max(0,Math.min(100,O*(1-E/100)));k(W)},[r,s,e]);o.useEffect(()=>{h();const a=new ResizeObserver(()=>{h()});return l.current&&a.observe(l.current),()=>{a.disconnect()}},[h]);const z=a=>{if(a===e)return;const d=parseFloat(a.toFixed(10));t(d)};return n.jsxs("div",{className:H("relative box-content h-xl py-xxs",b.disabled&&"opacity-60 cursor-default pointer-events-none",U),children:[n.jsx("input",{...b,ref:l,className:"absolute left-0 top-0 size-full cursor-pointer appearance-none bg-transparent",style:{touchAction:"none"},type:"range",min:r,max:s,step:u,value:e,onChange:a=>z(+a.target.value),onTouchStart:a=>a.stopPropagation(),onTouchMove:a=>a.stopPropagation()}),n.jsx("div",{className:"pointer-events-none absolute left-0 top-1/2 h-xxs w-full -translate-y-1/2 rounded-sm bg-secondary-alt"}),n.jsx("div",{className:"pointer-events-none absolute left-0 top-1/2 h-xxs -translate-y-1/2 rounded-sm bg-primary-600",style:{width:`${x}%`}}),n.jsx("div",{className:H($.thumb,"pointer-events-none","absolute","box-content","size-md","-translate-y-1/2","rounded-full","bg-white","border-primary-600"),ref:v,style:{left:`${x}%`},children:n.jsx("div",{className:"absolute left-1/2 top-1/2 size-xxs -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-600"})})]})};i.__docgenInfo={description:"",methods:[],displayName:"UiInputRange",props:{value:{required:!0,tsType:{name:"number"},description:""},min:{required:!0,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},max:{required:!0,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},step:{required:!0,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},onChangeHandler:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const K={title:"Components/UiInputRange",component:i,argTypes:{min:{control:{type:"number"},description:"The minimum range value"},max:{control:{type:"number"},description:"The maximum range value"},step:{control:{type:"number"},description:"The step increment of the range"}},args:{min:0,max:100,step:1,disabled:!1,value:50,onChangeHandler:e=>console.log(e)}},c={render:e=>{const[r,s]=o.useState(e.value),u=t=>{s(t),e.onChangeHandler(t)};return n.jsxs("div",{children:[n.jsx(i,{...e,value:r,onChangeHandler:u}),n.jsxs("div",{style:{marginTop:"2rem"},children:["Current value: ",r]})]})},args:{min:0,max:100,step:1,value:50,onChangeHandler:()=>{}}},m={render:e=>{const[r,s]=o.useState(e.value),u=t=>{s(t),e.onChangeHandler(t)};return n.jsxs("div",{children:[n.jsx(i,{...e,value:r,onChangeHandler:u}),n.jsxs("div",{style:{marginTop:"2rem"},children:["Current value: ",r]})]})},args:{min:-50,max:50,step:5,value:0,onChangeHandler:()=>{}}},p={render:e=>{const[r,s]=o.useState(e.value),u=t=>{s(t),e.onChangeHandler(t)};return n.jsxs("div",{children:[n.jsx(i,{...e,value:r,onChangeHandler:u}),n.jsxs("div",{style:{marginTop:"2rem"},children:["Current value: ",r]})]})},args:{min:0,max:1,step:.1,value:.5,onChangeHandler:()=>{}}},g={args:{disabled:!0}};var R,j,T;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
    value: 50,
    onChangeHandler: () => {}
  }
}`,...(T=(j=c.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var S,N,V;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(V=(N=m.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var w,I,_;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(_=(I=p.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var q,D,P;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(P=(D=g.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};const L=["Default","NegativeRange","DecimalSteps","Disabled"];export{p as DecimalSteps,c as Default,g as Disabled,m as NegativeRange,L as __namedExportsOrder,K as default};
