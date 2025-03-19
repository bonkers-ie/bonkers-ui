import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./index-DmM0KDA7.js";import{c as s}from"./index-C7T3p30y.js";var o=(n=>(n.RESULT_CARD="RESULT_CARD",n))(o||{});const c=({kind:n,className:p})=>e.jsx("div",{className:p,children:n===o.RESULT_CARD&&e.jsxs("div",{className:s("ui-skeleton-card","animate-pulse","border-2","border-secondary-alt-300","grid-cols-5","grid","rounded-2xl"),children:[e.jsx("div",{className:s("ui-skeleton-card__content","bg-secondary-alt-300","gap-xs","items-center","justify-center","p-md","rounded-bl-xl","rounded-tl-xl"),children:e.jsxs("div",{className:s("grid","grow","gap-xxs","justify-items-center"),children:[e.jsx("div",{className:s("ui-skeleton-card__content","bg-secondary-alt-400","h-xl","mb-sm","rounded-sm","w-2/3")}),e.jsx("div",{className:s("ui-skeleton-card__content","bg-secondary-alt-400","h-xxxxl","rounded-full","w-3/5")})]})}),e.jsxs("div",{className:s("ui-skeleton-main__content","bg-white","col-span-3"),children:[e.jsxs("div",{className:s("grid","p-sm"),children:[e.jsx("div",{className:s("bg-secondary-alt-400","h-md","mb-xxs","rounded-sm","w-3/5")}),e.jsx("div",{className:s("flex","gap-sm","mb-xxs"),children:["w-2/5","w-1/4"].map((d,r)=>e.jsx("div",{className:s(d,"h-md","bg-secondary-alt-300","rounded-sm")},r))}),e.jsx("div",{className:s("flex","justify-between"),children:["w-1/3","w-1/4"].map((d,r)=>{const a="h-[20px]",t=r===0?"bg-secondary-alt-400":"bg-secondary-alt-300";return e.jsx("div",{className:s(d,a,t,"rounded-sm","mb-xxs")},r)})})]}),e.jsx("div",{className:s("grid","grid-cols-4"),children:Array.from({length:4}).map((d,r)=>e.jsx("div",{className:s("border","border-secondary-alt-300","px-xs","py-md"),children:e.jsx("div",{className:s("place-items-center"),children:["w-2/3","w-2/4"].map((a,t)=>{const u=t===1?"h-[23px]":"h-[20px]";return e.jsx("div",{className:s("bg-secondary-alt-300","mb-xxxs","rounded-sm",a,u)},t)})})},r))})]}),e.jsx("div",{className:s("ui-skeleton-cta-cell","bg-secondary-alt-200","flex-col","flex","items-center","px-sm","py-md","rounded-br-xl","rounded-tr-xl"),children:["w-3/4","w-1/2","w-3/4","w-4/5"].map((d,r)=>{const a=r===1?"h-lg":"h-[20px]",t=r===3?"h-xxl bg-secondary-alt-500 mt-md":a;return e.jsx("div",{className:s("ui-skeleton-cta-cell__content","bg-secondary-alt-400","flex-col","flex","h-[20px]","mb-xxxs","rounded-sm",d,a,t)},r)})})]})});c.__docgenInfo={description:"",methods:[],displayName:"UiSkeleton",props:{kind:{required:!0,tsType:{name:"ESkeletonKind"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const y={title:"Components/UiSkeleton",component:c,argTypes:{kind:{control:{type:"select"},options:Object.values(o),description:"Skeleton Kind"}},args:{kind:o.RESULT_CARD}},l={render:n=>e.jsx(c,{kind:n.kind})};var i,m,x;l.parameters={...l.parameters,docs:{...(i=l.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <UiSkeleton kind={args.kind}>

        </UiSkeleton>
}`,...(x=(m=l.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};const j=["Primary"];export{l as Primary,j as __namedExportsOrder,y as default};
