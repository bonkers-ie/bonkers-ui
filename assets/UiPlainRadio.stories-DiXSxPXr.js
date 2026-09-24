import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{g as n}from"./iframe-DYDs02wk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{t as i}from"./classnames-D09xBJOL.js";var a,o,s;function c(){return(c=t((()=>{n(),a=e(i(),1),o=r(),s=({id:e,children:t,disabled:n,subHeader:r,value:i,name:s,checked:c=!1,className:l,onChange:u,...d})=>(0,o.jsxs)(`label`,{className:(0,a.default)(`ui-plain-radio`,`relative`,`group`,{"pointer-events-none opacity-50":n},l),children:[(0,o.jsx)(`input`,{className:(0,a.default)(`absolute`,`appearance-none`,`peer`),id:e||`${s}-${i}`,type:`radio`,name:s,value:i,disabled:n,checked:c,onChange:()=>u(i),...d}),(0,o.jsxs)(`div`,{className:(0,a.default)(`bg-white`,`box-border`,`cursor-pointer`,`flex`,`gap-sm`,`items-center`,`p-sm`,`peer-active:bg-secondary-alt-200`,`peer-active:ring-primary-800`,`peer-focus-within:outline-offset-4`,`peer-focus:outline-2`,`peer-focus:peer-checked:outline-primary-600`,`peer-hover:ring-primary-700`,`rounded-xl`,`size-full`,`text-sm`,n?`ring-secondary-alt-300`:`
						peer-checked:ring-primary-600
						peer-checked:outline
						peer-checked:outline-primary-600
					`,c?`ring-2`:`ring`,{"ring-secondary-alt-600 hover:ring-secondary-500":!n&&!c}),children:[(0,o.jsx)(`span`,{className:(0,a.default)(`bg-white`,`group-active:ring-primary-800`,`group-hover:ring-primary-700`,`pointer-events-none`,`relative`,`rounded-full`,`size-md`,c?`ring-2`:`ring`,n?`ring-secondary-alt-300`:`ring-primary-600`,{"ring-secondary-alt-600 group-hover:ring-secondary-500 group-active:ring-secondary-500":!n&&!c}),children:(0,o.jsx)(`span`,{className:(0,a.default)(`absolute`,`block`,`group-active:bg-primary-800`,`group-hover:bg-primary-700`,`left-xxs`,`pointer-events-none`,`rounded-full`,`size-xxs`,`top-xxs`,c?`bg-primary-600`:`bg-white`,n?`bg-secondary-alt-300`:`bg-primary-600`,{"bg-white group-hover:bg-white group-active:bg-white":!n&&!c})})}),(0,o.jsxs)(`div`,{className:`
					flex
					flex-col
				`,children:[t,r?(0,o.jsx)(`div`,{className:`
								text-xs
								font-normal
								text-secondary-alt-400
							`,children:r}):null]})]})]}),s.__docgenInfo={description:``,methods:[],displayName:`UiPlainRadio`,props:{children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``},subHeader:{required:!1,tsType:{name:`string`},description:``},value:{required:!0,tsType:{name:`string`},description:``},name:{required:!0,tsType:{name:`string`},description:``},className:{required:!1,tsType:{name:`string`},description:``},checked:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},onChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``}}}})))()}var l,u,d,f,p;function m(){return(m=t((()=>{c(),l=e(n(),1),u=r(),d={title:`Components/UiPlainRadio`,component:s,argTypes:{children:{control:{type:`text`},description:`RadioFancy Children`},disabled:{control:{type:`boolean`},description:`Radio disabled`},subHeader:{control:{type:`text`},description:`RadioFancy Children`}},args:{children:`Rural`,disabled:!1,subHeader:`DG2 = Rural supply region`,onChange:e=>console.log(e),checked:!1,value:`value`,name:`Value`}},f={render:e=>{let[t,n]=(0,l.useState)(`value1`),r=t=>{n(t),e.onChange&&e.onChange(t)};return(0,u.jsxs)(`div`,{children:[(0,u.jsx)(s,{disabled:e.disabled,name:`Value1`,value:`value1`,onChange:r,checked:t===`value1`,children:e.children}),(0,u.jsx)(`br`,{}),(0,u.jsx)(s,{disabled:e.disabled,name:`Value2`,value:`value2`,onChange:r,checked:t===`value2`,children:e.children,subHeader:e.subHeader})]})}},p=[`Primary`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [selectedValue, setSelectedValue] = useState<string>("value1");
    const handleChange = (value: string) => {
      setSelectedValue(value);
      if (args.onChange) {
        args.onChange(value);
      }
    };
    return <div>
                <UiPlainRadio disabled={args.disabled} name="Value1" value="value1" onChange={handleChange} checked={selectedValue === "value1"} children={args.children}>

                </UiPlainRadio>

                <br />

                <UiPlainRadio disabled={args.disabled} name="Value2" value="value2" onChange={handleChange} checked={selectedValue === "value2"} children={args.children} subHeader={args.subHeader}>

                </UiPlainRadio>
            </div>;
  }
}`,...f.parameters?.docs?.source}}}})))()}m();export{f as Primary,p as __namedExportsOrder,d as default};