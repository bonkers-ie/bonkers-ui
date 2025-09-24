import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./iframe-BV9BvOuM.js";import{c as r}from"./index-DRx6VtWy.js";const c=({tabs:s,tabsModel:n,onTabChange:o,className:i})=>a.jsx("ul",{className:r("ui-tabs","grid","grid-flow-col","items-stretch","rounded-full","bg-secondary-alt-200","p-[2px]","text-secondary-400",i),children:s.map(e=>a.jsx("li",{className:r("flex","items-center","justify-center","rounded-full","text-center",n===e&&"border border-secondary-alt-600 bg-white text-secondary-500"),children:a.jsxs("label",{className:r("flex","items-center","cursor-pointer","px-md","py-xxs"),children:[a.jsx("input",{className:r("absolute","appearance-none"),type:"radio",value:e,checked:n===e,onChange:()=>o(e)}),a.jsx("span",{className:r("font-bold","text-xs"),children:e})]})},e))});c.__docgenInfo={description:"",methods:[],displayName:"UiTabs",props:{tabs:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},tabsModel:{required:!0,tsType:{name:"string"},description:""},className:{required:!0,tsType:{name:"string"},description:""},onTabChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(val: string) => void",signature:{arguments:[{type:{name:"string"},name:"val"}],return:{name:"void"}}},description:""}}};const p={title:"Components/UiTabs",component:c,argTypes:{tabs:{control:"object"},tabsModel:{control:"text"},onTabChange:{control:"text"}},args:{tabs:["Tab1","Tab2","Tab3"],tabsModel:"Tab1",onTabChange:()=>{}}},t={render:({tabs:s})=>{const[n,o]=l.useState(s[0]||""),i=e=>o(e);return a.jsxs("div",{children:[a.jsx(c,{tabsModel:n,tabs:s,onTabChange:i}),a.jsx("br",{}),n]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const b=["Primary"];export{t as Primary,b as __namedExportsOrder,p as default};
