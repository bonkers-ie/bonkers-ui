import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{g as n}from"./iframe-DYDs02wk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{t as i}from"./classnames-D09xBJOL.js";var a,o,s,c;function l(){return(l=t((()=>{a=e(n(),1),o=e(i(),1),s=r(),c=({tabs:e,tabsModel:t,onTabChange:n,className:r,name:i})=>{let c=a.useId();return(0,s.jsx)(`ul`,{className:(0,o.default)(`ui-tabs`,`grid`,`grid-flow-col`,`items-stretch`,`rounded-full`,`bg-secondary-alt-200`,`p-[2px]`,`text-secondary-400`,r),children:e.map(e=>(0,s.jsx)(`li`,{className:(0,o.default)(`flex`,`items-center`,`justify-center`,`rounded-full`,`text-center`,t===e&&`border border-secondary-alt-600 bg-white text-secondary-500`),children:(0,s.jsxs)(`label`,{className:(0,o.default)(`flex`,`items-center`,`cursor-pointer`,`px-md`,`py-xxs`),children:[(0,s.jsx)(`input`,{className:(0,o.default)(`absolute`,`appearance-none`),type:`radio`,name:i||c,value:e,checked:t===e,onChange:()=>n(e)}),(0,s.jsx)(`span`,{className:(0,o.default)(`font-bold`,`text-xs`),children:e})]})},e))})},c.__docgenInfo={description:``,methods:[],displayName:`UiTabs`,props:{tabs:{required:!0,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:``},tabsModel:{required:!0,tsType:{name:`string`},description:``},className:{required:!1,tsType:{name:`string`},description:``},name:{required:!1,tsType:{name:`string`},description:``},onTabChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(val: string) => void`,signature:{arguments:[{type:{name:`string`},name:`val`}],return:{name:`void`}}},description:``}}}})))()}var u,d,f,p,m;function h(){return(h=t((()=>{l(),u=e(n(),1),d=r(),f={title:`Components/UiTabs`,component:c,argTypes:{tabs:{control:`object`},tabsModel:{control:`text`},onTabChange:{control:`text`}},args:{tabs:[`Tab1`,`Tab2`,`Tab3`],tabsModel:`Tab1`,onTabChange:()=>{}}},p={render:({tabs:e})=>{let[t,n]=(0,u.useState)(e[0]||``);return(0,d.jsxs)(`div`,{children:[(0,d.jsx)(c,{tabsModel:t,tabs:e,onTabChange:e=>n(e)}),(0,d.jsx)(`br`,{}),t]})}},m=[`Primary`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: ({
    tabs
  }: {
    tabs: string[];
  }) => {
    const [value1, setValue1] = useState(tabs[0] || "");
    const handleChange1 = (val: string) => setValue1(val);
    return <div>

                <UiTabs tabsModel={value1} tabs={tabs} onTabChange={handleChange1} />
                <br />
                {value1}

            </div>;
  }
}`,...p.parameters?.docs?.source}}}})))()}h();export{p as Primary,m as __namedExportsOrder,f as default};