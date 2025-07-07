import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{R as l,r as c}from"./iframe-Tx73yq3h.js";import{c as T}from"./index-Cv_nbNIh.js";const G="_thumb_hkko1_18",J={thumb:G},i=({value:e,min:r,max:s,step:o,onChangeHandler:t,className:U,...x})=>{const u=l.useRef(null),h=l.useRef(null),[z,F]=c.useState(0),[M,E]=c.useState(0),b=c.useCallback(()=>{var H,R;if(!u.current||!h.current)return;const a=parseFloat(String(e)),d=parseFloat(String(r)),B=parseFloat(String(s)),$=((H=h.current)==null?void 0:H.getBoundingClientRect().width)??0,C=((R=u.current)==null?void 0:R.getBoundingClientRect().width)??0;if(C===0)return;const A=(a-d)/(B-d)*100,f=$/C*100,y=Math.max(0,Math.min(100,A*(1-f/100)));F(y),E(y+f/2)},[r,s,e]);c.useEffect(()=>{b();const a=new ResizeObserver(()=>{b()});return u.current&&a.observe(u.current),()=>{a.disconnect()}},[b]);const W=a=>{if(a===e)return;const d=parseFloat(a.toFixed(10));t(d)};return n.jsxs("div",{className:T("relative box-content h-xl py-xxs",x.disabled&&"opacity-60 cursor-default pointer-events-none",U),children:[n.jsx("input",{...x,ref:u,className:"absolute left-0 top-0 size-full cursor-pointer appearance-none bg-transparent",style:{touchAction:"none"},type:"range",min:r,max:s,step:o,value:e,onChange:a=>W(+a.target.value),onTouchStart:a=>a.stopPropagation(),onTouchMove:a=>a.stopPropagation()}),n.jsx("div",{className:"pointer-events-none absolute left-0 top-1/2 h-xxs w-full -translate-y-1/2 rounded-sm bg-secondary-alt overflow-clip",children:n.jsx("div",{className:"pointer-events-none absolute left-0 top-1/2 h-xxs -translate-y-1/2 rounded-sm bg-primary-600",style:{width:`${M}%`}})}),n.jsx("div",{className:T(J.thumb,"pointer-events-none","absolute","box-content","size-md","-translate-y-1/2","rounded-full","bg-white","border-primary-600"),ref:h,style:{left:`${z}%`},children:n.jsx("div",{className:"absolute left-1/2 top-1/2 size-xxs -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-600"})})]})};i.__docgenInfo={description:"",methods:[],displayName:"UiInputRange",props:{value:{required:!0,tsType:{name:"number"},description:""},min:{required:!0,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},max:{required:!0,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},step:{required:!0,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},onChangeHandler:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const X={title:"Components/UiInputRange",component:i,argTypes:{min:{control:{type:"number"},description:"The minimum range value"},max:{control:{type:"number"},description:"The maximum range value"},step:{control:{type:"number"},description:"The step increment of the range"}},args:{min:0,max:100,step:1,disabled:!1,value:50,onChangeHandler:e=>console.log(e)}},m={render:e=>{const[r,s]=l.useState(e.value),o=t=>{s(t),e.onChangeHandler(t)};return n.jsxs("div",{children:[n.jsx(i,{...e,value:r,onChangeHandler:o}),n.jsxs("div",{style:{marginTop:"2rem"},children:["Current value: ",r]})]})},args:{min:0,max:100,step:1,value:50,onChangeHandler:()=>{}}},p={render:e=>{const[r,s]=l.useState(e.value),o=t=>{s(t),e.onChangeHandler(t)};return n.jsxs("div",{children:[n.jsx(i,{...e,value:r,onChangeHandler:o}),n.jsxs("div",{style:{marginTop:"2rem"},children:["Current value: ",r]})]})},args:{min:-50,max:50,step:5,value:0,onChangeHandler:()=>{}}},g={render:e=>{const[r,s]=l.useState(e.value),o=t=>{s(t),e.onChangeHandler(t)};return n.jsxs("div",{children:[n.jsx(i,{...e,value:r,onChangeHandler:o}),n.jsxs("div",{style:{marginTop:"2rem"},children:["Current value: ",r]})]})},args:{min:0,max:1,step:.1,value:.5,onChangeHandler:()=>{}}},v={args:{disabled:!0}};var j,S,w;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(w=(S=m.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var N,V,k;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(k=(V=p.parameters)==null?void 0:V.docs)==null?void 0:k.source}}};var I,_,q;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(q=(_=g.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var D,O,P;v.parameters={...v.parameters,docs:{...(D=v.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(P=(O=v.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};const Y=["Default","NegativeRange","DecimalSteps","Disabled"];export{g as DecimalSteps,m as Default,v as Disabled,p as NegativeRange,Y as __namedExportsOrder,X as default};
