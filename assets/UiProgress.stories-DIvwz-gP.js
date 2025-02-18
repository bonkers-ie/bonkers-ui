import{j as e}from"./jsx-runtime-CLpGMVip.js";import"./index-B-SYruCi.js";import{c as t}from"./index-CXyNTX1A.js";import{U as l,E as u,b as x,a as g}from"./UiTypography-B0bIK3u9.js";const o=({progressText:r,max:p,min:i,current:c})=>{const d=(c-i)/(p-i)*100;return e.jsxs("div",{className:t("ui-progress"),children:[e.jsx("div",{className:t("relative","h-xxs ","w-full","overflow-hidden","rounded-3xl","bg-primary-50","mb-xxs"),children:e.jsx("div",{className:t("ui-progress__bar-fill","absolute","left-0","top-0","z-10","h-full","rounded-2xl","bg-primary-700","transition-all","duration-300"),style:{width:`${d}%`}})}),r&&e.jsx(l,{color:u.PRIMARY_700,size:x.SM,weight:g.SEMI_BOLD,children:r})]})};o.__docgenInfo={description:"",methods:[],displayName:"UiProgress",props:{min:{required:!0,tsType:{name:"number"},description:""},max:{required:!0,tsType:{name:"number"},description:""},current:{required:!0,tsType:{name:"number"},description:""},progressText:{required:!1,tsType:{name:"string"},description:""}}};const b={title:"Components/UiProgress",component:o,argTypes:{min:{control:{type:"number"},description:"The minimum value"},max:{control:{type:"number"},description:"The maximum value"},current:{control:{type:"number"}},progressText:{control:{type:"text"}}},args:{min:0,max:5,current:3,progressText:"Step 3 of 5"}},s={render:r=>e.jsx(o,{...r,progressText:`Step ${r.current} of ${r.max}`})};var n,a,m;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:"{\n  render: args => <UiProgress {...args} progressText={`Step ${args.current} of ${args.max}`} />\n}",...(m=(a=s.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};const _=["Primary"];export{s as Primary,_ as __namedExportsOrder,b as default};
