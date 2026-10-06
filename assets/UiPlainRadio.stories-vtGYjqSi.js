import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{g as n}from"./iframe-D_ZqfVsf.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{t as i}from"./classnames-D09xBJOL.js";var a;function o(){return(o=t((()=>{a=function(e){return e.DEFAULT=`DEFAULT`,e.SMALL=`SMALL`,e}({})})))()}var s,c,l;function u(){return(u=t((()=>{n(),s=e(i(),1),o(),c=r(),l=({id:e,children:t,disabled:n,subHeader:r,value:i,name:o,checked:l=!1,size:u=a.DEFAULT,className:d,onChange:f,...p})=>{let m={[a.DEFAULT]:`py-xs px-sm`,[a.SMALL]:`py-xxs px-xs`};return(0,c.jsxs)(`label`,{className:(0,s.default)(`ui-plain-radio`,`relative`,`group`,{"pointer-events-none":n},d),children:[(0,c.jsx)(`input`,{className:(0,s.default)(`absolute`,`appearance-none`,`peer`),id:e||`${o}-${i}`,type:`radio`,name:o,value:i,disabled:n,checked:l,onChange:()=>f(i),...p}),(0,c.jsxs)(`div`,{className:(0,s.default)(`bg-white`,`box-border`,`cursor-pointer`,`flex`,`gap-sm`,`items-center`,m[u],`peer-active:bg-secondary-alt-200`,`peer-active:ring-primary-800`,`peer-focus-within:outline-offset-4`,`peer-focus:outline-2`,`peer-focus:peer-checked:outline-primary-600`,`peer-hover:ring-primary-700`,`rounded-xl`,`size-full`,`text-sm`,n?`ring-secondary-alt-300`:`
						peer-checked:ring-primary-600
						peer-checked:outline
						peer-checked:outline-primary-600
					`,l?`ring-2`:`ring`,{"ring-secondary-alt-600 hover:ring-secondary-500":!n&&!l}),children:[(0,c.jsx)(`span`,{className:(0,s.default)(`block`,`shrink-0`,`group-active:ring-primary-800`,`group-hover:ring-primary-700`,`pointer-events-none`,`rounded-full`,`size-md`,l?`ring-2`:`ring`,n?`ring-secondary-alt-300`:`ring-primary-600`,{"bg-white":!l,"inset-ring-4 inset-ring-white":l,"bg-primary-600 group-hover:bg-primary-700 group-active:bg-primary-800":l&&!n,"bg-secondary-300":l&&n,"ring-secondary-alt-600 group-hover:ring-secondary-500 group-active:ring-secondary-500":!n&&!l})}),(0,c.jsxs)(`div`,{className:(0,s.default)(`flex flex-col`,n&&`text-secondary-300`),children:[t,r?(0,c.jsx)(`div`,{className:`
								text-xs
								font-normal
								text-secondary-alt-400
							`,children:r}):null]})]})]})},l.__docgenInfo={description:``,methods:[],displayName:`UiPlainRadio`,props:{children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``},subHeader:{required:!1,tsType:{name:`string`},description:``},value:{required:!0,tsType:{name:`string`},description:``},name:{required:!0,tsType:{name:`string`},description:``},className:{required:!1,tsType:{name:`string`},description:``},checked:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},size:{required:!1,tsType:{name:`EPlainRadioSize`},description:``,defaultValue:{value:`EPlainRadioSize.DEFAULT`,computed:!0}},onChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``}}}})))()}var d,f,p,m,h;function g(){return(g=t((()=>{u(),d=e(n(),1),o(),f=r(),p={title:`Components/UiPlainRadio`,component:l,argTypes:{children:{control:{type:`text`},description:`RadioFancy Children`},disabled:{control:{type:`boolean`},description:`Radio disabled`},subHeader:{control:{type:`text`},description:`RadioFancy Children`},size:{control:{type:`select`},options:Object.values(a),description:`Radio size`}},args:{children:`Rural`,disabled:!1,size:a.DEFAULT,subHeader:`DG2 = Rural supply region`,onChange:e=>console.log(e),checked:!1,value:`value`,name:`Value`}},m={render:e=>{let[t,n]=(0,d.useState)(`value1`),r=t=>{n(t),e.onChange&&e.onChange(t)};return(0,f.jsxs)(`div`,{children:[(0,f.jsx)(l,{disabled:e.disabled,name:`plain-radio`,value:`value1`,onChange:r,checked:t===`value1`,children:e.children,size:e.size}),(0,f.jsx)(`br`,{}),(0,f.jsx)(l,{disabled:e.disabled,name:`plain-radio`,value:`value2`,onChange:r,checked:t===`value2`,children:e.children,subHeader:e.subHeader,size:e.size})]})}},h=[`Primary`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [selectedValue, setSelectedValue] = useState<string>("value1");
    const handleChange = (value: string) => {
      setSelectedValue(value);
      if (args.onChange) {
        args.onChange(value);
      }
    };
    return <div>
                <UiPlainRadio disabled={args.disabled} name="plain-radio" value="value1" onChange={handleChange} checked={selectedValue === "value1"} children={args.children} size={args.size}>

                </UiPlainRadio>

                <br />

                <UiPlainRadio disabled={args.disabled} name="plain-radio" value="value2" onChange={handleChange} checked={selectedValue === "value2"} children={args.children} subHeader={args.subHeader} size={args.size}>

                </UiPlainRadio>
            </div>;
  }
}`,...m.parameters?.docs?.source}}}})))()}g();export{m as Primary,h as __namedExportsOrder,p as default};