import{j as r}from"./jsx-runtime-u17CrQMm.js";import{r as l}from"./iframe-CSy_xDkl.js";import{c as n}from"./index-DmBNOwg2.js";import"./preload-helper-PPVm8Dsz.js";const c=({tabs:s,tabsModel:a,onTabChange:o,className:i})=>r.jsx("ul",{className:n("ui-tabs","grid","grid-flow-col","items-stretch","rounded-full","bg-secondary-alt-200","p-[2px]","text-secondary-400",i),children:s.map(e=>r.jsx("li",{className:n("flex","items-center","justify-center","rounded-full","text-center",a===e&&"border border-secondary-alt-600 bg-white text-secondary-500"),children:r.jsxs("label",{className:n("flex","items-center","cursor-pointer","px-md","py-xxs"),children:[r.jsx("input",{className:n("absolute","appearance-none"),type:"radio",value:e,checked:a===e,onChange:()=>o(e)}),r.jsx("span",{className:n("font-bold","text-xs"),children:e})]})},e))});c.__docgenInfo={description:"",methods:[],displayName:"UiTabs",props:{tabs:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},tabsModel:{required:!0,tsType:{name:"string"},description:""},className:{required:!0,tsType:{name:"string"},description:""},onTabChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(val: string) => void",signature:{arguments:[{type:{name:"string"},name:"val"}],return:{name:"void"}}},description:""}}};const b={title:"Components/UiTabs",component:c,argTypes:{tabs:{control:"object"},tabsModel:{control:"text"},onTabChange:{control:"text"}},args:{tabs:["Tab1","Tab2","Tab3"],tabsModel:"Tab1",onTabChange:()=>{}}},t={render:({tabs:s})=>{const[a,o]=l.useState(s[0]||""),i=e=>o(e);return r.jsxs("div",{children:[r.jsx(c,{tabsModel:a,tabs:s,onTabChange:i}),r.jsx("br",{}),a]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const g=["Primary"];export{t as Primary,g as __namedExportsOrder,b as default};
