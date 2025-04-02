import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./index-BCtMShv3.js";import{c as r}from"./index-CeDo_qPC.js";const d=({tabs:s,tabsModel:n,onTabChange:o,className:i})=>a.jsx("ul",{className:r("ui-tabs","grid","grid-flow-col","rounded-full","bg-secondary-alt-200","p-[2px]","text-secondary-400",i),children:s.map(e=>a.jsx("li",{className:r("rounded-full","text-center",n===e&&"bg-white border border-secondary-alt-600 text-secondary-500"),children:a.jsxs("label",{className:r("block","cursor-pointer","px-md","py-xxs"),children:[a.jsx("input",{className:r("absolute","appearance-none"),type:"radio",value:e,checked:n===e,onChange:()=>o(e)}),a.jsx("span",{className:r("font-bold","text-xs"),children:e})]})},e))});d.__docgenInfo={description:"",methods:[],displayName:"UiTabs",props:{tabs:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},tabsModel:{required:!0,tsType:{name:"string"},description:""},className:{required:!0,tsType:{name:"string"},description:""},onTabChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(val: string) => void",signature:{arguments:[{type:{name:"string"},name:"val"}],return:{name:"void"}}},description:""}}};const x={title:"Components/UiTabs",component:d,argTypes:{tabs:{control:"object"},tabsModel:{control:"text"},onTabChange:{control:"text"}},args:{tabs:["Tab1","Tab2","Tab3"],tabsModel:"Tab1",onTabChange:()=>{}}},t={render:({tabs:s})=>{const[n,o]=p.useState(s[0]||""),i=e=>o(e);return a.jsxs("div",{children:[a.jsx(d,{tabsModel:n,tabs:s,onTabChange:i}),a.jsx("br",{}),n]})}};var l,c,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(u=(c=t.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const h=["Primary"];export{t as Primary,h as __namedExportsOrder,x as default};
