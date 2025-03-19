import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{R as o}from"./index-DmM0KDA7.js";import{c as C}from"./index-C7T3p30y.js";const O="_thumb_hkko1_18",$={thumb:O},l=({value:e,min:a,max:s,step:u,onChangeHandler:t,className:_,...v})=>{const g=o.useRef(null),h=o.useRef(null),[k,q]=o.useState(0),[D,P]=o.useState(0);o.useEffect(()=>{if(!g.current||!h.current)return;const r=parseFloat(String(e)),i=parseFloat(String(a)),W=parseFloat(String(s)),F=(r-i)/(W-i)*100,z=h.current.getBoundingClientRect().width,E=g.current.clientWidth,x=z/E*100,b=F*(1-x/100);q(Math.max(0,Math.min(100,b))),P(Math.max(0,Math.min(100,b+x)))},[a,s,e]);const U=r=>{if(r===e)return;const i=parseFloat(r.toFixed(10));t(i)};return n.jsxs("div",{className:C("relative box-content h-xl py-xxs",v.disabled&&"opacity-60 cursor-default pointer-events-none",_),children:[n.jsx("input",{...v,ref:g,className:"absolute left-0 top-0 size-full cursor-pointer appearance-none bg-transparent",style:{touchAction:"none"},type:"range",min:a,max:s,step:u,value:e,onChange:r=>U(+r.target.value),onTouchStart:r=>r.stopPropagation(),onTouchMove:r=>r.stopPropagation()}),n.jsx("div",{className:"pointer-events-none absolute left-0 top-1/2 h-xxs w-full -translate-y-1/2 rounded-sm bg-secondary-alt"}),n.jsx("div",{className:"pointer-events-none absolute left-0 top-1/2 h-xxs -translate-y-1/2 rounded-sm bg-primary",style:{width:`${D}%`}}),n.jsx("div",{className:C($.thumb,"pointer-events-none","absolute","box-content","size-md","-translate-y-1/2","rounded-full","bg-white","border-primary"),ref:h,style:{left:`${k}%`},children:n.jsx("div",{className:"absolute left-1/2 top-1/2 size-xxs -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"})})]})};l.__docgenInfo={description:"",methods:[],displayName:"UiInputRange",props:{value:{required:!0,tsType:{name:"number"},description:""},min:{required:!0,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},max:{required:!0,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},step:{required:!0,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},onChangeHandler:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const J={title:"Components/UiInputRange",component:l,argTypes:{min:{control:{type:"number"},description:"The minimum range value"},max:{control:{type:"number"},description:"The maximum range value"},step:{control:{type:"number"},description:"The step increment of the range"}},args:{min:0,max:100,step:1,disabled:!1,value:50,onChangeHandler:e=>console.log(e)}},d={render:e=>{const[a,s]=o.useState(e.value),u=t=>{s(t),e.onChangeHandler(t)};return n.jsxs("div",{children:[n.jsx(l,{...e,value:a,onChangeHandler:u}),n.jsxs("div",{style:{marginTop:"2rem"},children:["Current value: ",a]})]})},args:{min:0,max:100,step:1,value:50,onChangeHandler:()=>{}}},m={render:e=>{const[a,s]=o.useState(e.value),u=t=>{s(t),e.onChangeHandler(t)};return n.jsxs("div",{children:[n.jsx(l,{...e,value:a,onChangeHandler:u}),n.jsxs("div",{style:{marginTop:"2rem"},children:["Current value: ",a]})]})},args:{min:-50,max:50,step:5,value:0,onChangeHandler:()=>{}}},c={render:e=>{const[a,s]=o.useState(e.value),u=t=>{s(t),e.onChangeHandler(t)};return n.jsxs("div",{children:[n.jsx(l,{...e,value:a,onChangeHandler:u}),n.jsxs("div",{style:{marginTop:"2rem"},children:["Current value: ",a]})]})},args:{min:0,max:1,step:.1,value:.5,onChangeHandler:()=>{}}},p={args:{disabled:!0}};var y,f,H;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(H=(f=d.parameters)==null?void 0:f.docs)==null?void 0:H.source}}};var T,j,S;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var R,N,V;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(V=(N=c.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var w,I,M;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(M=(I=p.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};const K=["Default","NegativeRange","DecimalSteps","Disabled"];export{c as DecimalSteps,d as Default,p as Disabled,m as NegativeRange,K as __namedExportsOrder,J as default};
