import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{g as n}from"./iframe-DYDs02wk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{t as i}from"./classnames-D09xBJOL.js";var a,o;function s(){return(s=t((()=>{a=`_thumb_hkko1_18`,o={thumb:a}})))()}var c,l,u,d;function f(){return(f=t((()=>{c=e(n(),1),l=e(i(),1),s(),u=r(),d=({value:e,min:t,max:n,step:r,onChangeHandler:i,className:a,...s})=>{let d=c.useRef(null),f=c.useRef(null),p=c.useRef(null),m=b(e,t,n),[h,g]=(0,c.useState)(`calc(${m}% - ${m*32/100}px)`),_=(0,c.useCallback)(()=>{let r=parseFloat(String(e)),i=parseFloat(String(t)),a=parseFloat(String(n)),o=(r-i)/(a-i)*100;g(`calc(${o}% - ${o*32/100}px)`)},[t,n,e]);(0,c.useEffect)(()=>{_();let e=new ResizeObserver(()=>{_()});return d.current&&e.observe(d.current),()=>{e.disconnect()}},[_]);let v=t=>{let n=+t.target.value;n!==e&&i(parseFloat(n.toFixed(10)))},y=e=>{if(!p.current||!d.current)return;let i=p.current.getBoundingClientRect(),a=(e.clientX-i.left)/i.width*100,o=parseFloat(String(t)),s=parseFloat(String(n)),c=o+a/100*(s-o),l=Math.round(c/Number(r))*Number(r);if(d.current){d.current.value=String(l);let e=new Event(`input`,{bubbles:!0});d.current.dispatchEvent(e)}};function b(e,t,n){let r=parseFloat(String(e)),i=parseFloat(String(t)),a=parseFloat(String(n));return(r-i)/(a-i)*100}return(0,u.jsxs)(`div`,{ref:p,className:(0,l.default)(`relative box-content h-xl py-xxs`,s.disabled&&`pointer-events-none cursor-default opacity-60`,a),onClick:y,children:[(0,u.jsx)(`input`,{...s,ref:d,className:`absolute top-0 left-0 size-full cursor-pointer appearance-none bg-transparent`,style:{touchAction:`none`},type:`range`,min:t,max:n,step:r,value:e,onChange:v,onTouchStart:e=>e.stopPropagation(),onTouchMove:e=>e.stopPropagation()}),(0,u.jsx)(`div`,{className:`pointer-events-none absolute top-1/2 left-0 h-xxs w-full -translate-y-1/2 overflow-clip rounded-sm bg-secondary-alt`,children:(0,u.jsx)(`div`,{className:`pointer-events-none absolute top-1/2 left-0 h-xxs -translate-y-1/2 rounded-sm bg-primary-600`,style:{width:`calc(${h} + 16px)`}})}),(0,u.jsx)(`div`,{className:(0,l.default)(o.thumb,`pointer-events-none`,`absolute`,`box-content`,`size-md`,`-translate-y-1/2`,`rounded-full`,`bg-white`,`border-primary-600`),ref:f,style:{left:h},children:(0,u.jsx)(`div`,{className:`absolute top-1/2 left-1/2 size-xxs -translate-1/2 rounded-full bg-primary-600`})})]})},d.__docgenInfo={description:``,methods:[],displayName:`UiInputRange`,props:{value:{required:!0,tsType:{name:`number`},description:``},min:{required:!0,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:``},max:{required:!0,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:``},step:{required:!0,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:``},onChangeHandler:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value: number) => void`,signature:{arguments:[{type:{name:`number`},name:`value`}],return:{name:`void`}}},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}var p,m,h,g,_,v,y,b;function x(){return(x=t((()=>{p=e(n(),1),f(),m=r(),h={title:`Components/UiInputRange`,component:d,argTypes:{min:{control:{type:`number`},description:`The minimum range value`},max:{control:{type:`number`},description:`The maximum range value`},step:{control:{type:`number`},description:`The step increment of the range`}},args:{min:0,max:100,step:1,disabled:!1,value:50,onChangeHandler:e=>console.log(e)}},g={render:e=>{let[t,n]=p.useState(e.value),r=t=>{n(t),e.onChangeHandler(t)};return(0,m.jsxs)(`div`,{children:[(0,m.jsx)(d,{...e,value:t,onChangeHandler:r}),(0,m.jsxs)(`div`,{style:{marginTop:`2rem`},children:[`Current value: `,t]})]})},args:{min:0,max:100,step:1,value:82,onChangeHandler:()=>{}}},_={render:e=>{let[t,n]=p.useState(e.value),r=t=>{n(t),e.onChangeHandler(t)};return(0,m.jsxs)(`div`,{children:[(0,m.jsx)(d,{...e,value:t,onChangeHandler:r}),(0,m.jsxs)(`div`,{style:{marginTop:`2rem`},children:[`Current value: `,t]})]})},args:{min:-50,max:50,step:5,value:0,onChangeHandler:()=>{}}},v={render:e=>{let[t,n]=p.useState(e.value),r=t=>{n(t),e.onChangeHandler(t)};return(0,m.jsxs)(`div`,{children:[(0,m.jsx)(d,{...e,value:t,onChangeHandler:r}),(0,m.jsxs)(`div`,{style:{marginTop:`2rem`},children:[`Current value: `,t]})]})},args:{min:0,max:1,step:.1,value:.5,onChangeHandler:()=>{}}},y={args:{disabled:!0}},b=[`Default`,`NegativeRange`,`DecimalSteps`,`Disabled`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...y.parameters?.docs?.source}}}})))()}x();export{v as DecimalSteps,g as Default,y as Disabled,_ as NegativeRange,b as __namedExportsOrder,h as default};