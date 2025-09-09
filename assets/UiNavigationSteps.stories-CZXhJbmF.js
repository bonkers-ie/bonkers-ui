import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as f,R as q}from"./iframe-D53uEavB.js";import{c as h}from"./index-tJk0GiGU.js";import{U as P,b as M,a as _}from"./UiTypography-BsUegvf5.js";import{U as k,E as O}from"./UiIcon-yJD_YkHu.js";var i=(t=>(t.COMPLETE="complete",t.ACTIVE="active",t.INACTIVE="inactive",t))(i||{});const $="_navbar_1rpka_1",D="_active_1rpka_18",z={navbar:$,active:D},R=f.createContext(null),w=({initialStepId:t,children:u,className:c,complete:p=!1})=>{const E=f.useRef(0),[S,j]=f.useState(0),[T,l]=f.useState(new Set),o=f.useRef({steps:new Map,parentMap:new Map}),x=(e,n)=>{o.current.steps.has(e)||(E.current+=1,o.current.steps.set(e,{order:E.current,hasSubsteps:n,progress:n?{current:0,total:0}:void 0}))},N=e=>{const{steps:n,parentMap:a}=o.current;let s=null;if(n.has(e))s=n.get(e).order;else if(a.has(e)){const m=a.get(e);n.has(m)&&(s=n.get(m).order)}s!==null&&(s<S&&I(s),v(s),j(s))},V=(e,n,a=[])=>{if(a.length>0){a.forEach(y=>{o.current.parentMap.set(y.id,e)});const s=a.findIndex(y=>y.id===n)+1,m=a.length;if(s>0){const y=o.current.steps.get(e);y&&o.current.steps.set(e,{...y,progress:{current:s,total:m}})}}},I=e=>{l(n=>{const a=new Set(n);return o.current.steps.forEach((s,m)=>{s.order>e&&a.delete(m)}),a})},v=e=>{l(p?new Set(o.current.steps.keys()):n=>{const a=new Set(n);return o.current.steps.forEach((s,m)=>{s.order<e?a.add(m):s.order===e&&a.delete(m)}),a})};f.useEffect(()=>{const{steps:e,parentMap:n}=o.current;if(e.size>0){let a=t;if(n.has(t)){const s=n.get(t);s&&e.has(s)&&(a=s)}l(p?new Set(e.keys()):new Set),e.has(a)&&N(a)}},[t,p]);const d={currentStepId:t,registerStep:x,navigateToStep:N,updateSubstepProgress:V,completedSteps:T},A=e=>e===t||o.current.parentMap.get(t)===e,U=e=>T.has(e),C=q.Children.map(u,(e,n)=>{if(q.isValidElement(e)){const a=o.current.steps.get(e.props.id),s=o.current.steps.size;return q.cloneElement(e,{order:a?.order||n+1,totalSteps:s,isActive:A(e.props.id),isComplete:U(e.props.id)})}return e});return r.jsx(R.Provider,{value:d,children:r.jsx("nav",{"aria-label":"Progress",className:h("relative grid grid-cols-1 grid-rows-1 items-center",z.navbar,c),children:r.jsx("div",{className:"z-10 flex items-center justify-between",children:C})})})},L=()=>{const t=f.useContext(R);if(!t)throw new Error("useStepNav must be used within a UiNavigationStepsProvider");return t};w.__docgenInfo={description:"",methods:[],displayName:"UiNavigationSteps",props:{initialStepId:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},complete:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};function Y(t,u){return h(`
			flex
			transform
			items-center
			justify-center
			rounded-full
			border
			text-secondary-400
			transition-all
			duration-100
			ease-in-out
			md:h-xl
			md:w-full
			md:px-xs
			md:py-xxs
			lg:px-sm
		`,!u&&"bg-secondary-400",u&&"cursor-pointer",t===i.COMPLETE&&"size-sm border-secondary-400 bg-secondary-400 p-xs text-white",t===i.ACTIVE&&"border-secondary-400 bg-secondary-alt-200 px-xs py-xxs text-secondary-400",t===i.INACTIVE&&"size-sm border-secondary-alt-500 bg-white p-xs text-secondary-alt-500")}const g=({id:t,name:u,subSteps:c=[],className:p="",onClick:E,order:S=1,totalSteps:j=1,isActive:T=!1,isComplete:l=!1,icon:o})=>{const{currentStepId:x,updateSubstepProgress:N,registerStep:V}=L(),I=c.some(n=>n.id===x),v=c.length>0;f.useEffect(()=>{V(t,v),v&&N(t,x,c)},[t,v,c,x,N]);const d=!l&&(T||I)?i.ACTIVE:l?i.COMPLETE:i.INACTIVE,A=()=>{d!==i.INACTIVE&&E?.()},U=()=>S/j*100,C=d!==i.INACTIVE,e=v?l?` ${c.length}/${c.length}`:I?` ${c.findIndex(n=>n.id===x)+1}/${c.length}`:` ${S}/${c.length}`:null;return r.jsx("div",{style:d===i.ACTIVE?{"--step-width":`${U()}%`}:{},className:h("flex flex-col gap-xxs md:flex-row md:items-center",{[z.active]:d===i.ACTIVE}),children:r.jsx("button",{onClick:A,"aria-current":d===i.ACTIVE?"step":void 0,"aria-disabled":!C,disabled:!C,className:h(Y(d,C),p),children:r.jsxs(P,{className:"flex place-items-center gap-xxs",weight:d===i.ACTIVE?_.SEMI_BOLD:_.REGULAR,lineHeight:!0,size:M.XS,children:[d===i.COMPLETE?o:r.jsx(P,{className:h({"font-semibold md:font-medium":d===i.INACTIVE}),tag:"span",size:M.SM,children:S}),r.jsxs("span",{className:h("text-xxs text-nowrap md:text-xs",{"hidden md:inline":d!==i.ACTIVE}),children:[u,e]})]})})})};g.__docgenInfo={description:"",methods:[],displayName:"UiNavigationStep",props:{id:{required:!0,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},subSteps:{required:!1,tsType:{name:"Array",elements:[{name:"INavSubStep"}],raw:"INavSubStep[]"},description:"",defaultValue:{value:"[]",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},order:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},totalSteps:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},isActive:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isComplete:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const F={title:"Components/UiNavigationSteps",component:w,argTypes:{initialStepId:{control:{type:"select"},description:"Initial step ID to set as active when the provider is mounted.",options:["1","1.1","1.2","2","3","4","5"]},complete:{control:{type:"boolean"},description:"Mark all steps complete as if the user has completed them."}},args:{initialStepId:"3",complete:!1,children:void 0}},b={render:t=>{const u=[{id:"1",name:"property",substeps:[{id:"1.1",name:"Your Home"},{id:"1.2",name:"Your Contents"}]},{id:"2",name:"contents"},{id:"3",name:"history & claims"},{id:"4",name:"about you"},{id:"5",name:"declarations"}],c=()=>r.jsx(k,{className:"text-white",name:["far","face-smile"],size:O.XS});return r.jsxs("div",{className:"grid gap-md",children:[r.jsx(w,{...t,children:u.map(p=>r.jsx(g,{id:p.id,icon:r.jsx(c,{}),name:p.name,subSteps:p.substeps},p.id))}),r.jsxs(w,{initialStepId:"51",complete:!0,children:[r.jsx(g,{id:"11",name:"Property"}),r.jsx(g,{id:"21",name:"Contents",subSteps:[{id:"contents.1",name:"Contents 1"},{id:"contents.2",name:"Contents 2"}]}),r.jsx(g,{id:"31",name:"History & Claims"}),r.jsx(g,{id:"41",name:"About You"}),r.jsx(g,{id:"51",name:"Declarations"})]})]})}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => {
    const steps = [{
      id: "1",
      name: "property",
      substeps: [{
        id: "1.1",
        name: "Your Home"
      }, {
        id: "1.2",
        name: "Your Contents"
      }]
    }, {
      id: "2",
      name: "contents"
    }, {
      id: "3",
      name: "history & claims"
    }, {
      id: "4",
      name: "about you"
    }, {
      id: "5",
      name: "declarations"
    }];
    const Icon = () => <UiIcon className="text-white" name={["far", "face-smile"]} size={ESize.XS} />;
    return <div className="grid gap-md">

                <UiNavigationSteps {...args}>
                    {steps.map(step => <UiNavigationStep key={step.id} id={step.id} icon={<Icon />} name={step.name} subSteps={step.substeps} />)}

                </UiNavigationSteps>

                <UiNavigationSteps initialStepId="51" complete>
                    <UiNavigationStep id="11" name="Property" />
                    <UiNavigationStep id="21" name="Contents" subSteps={[{
          id: "contents.1",
          name: "Contents 1"
        }, {
          id: "contents.2",
          name: "Contents 2"
        }]} />
                    <UiNavigationStep id="31" name="History & Claims" />
                    <UiNavigationStep id="41" name="About You" />
                    <UiNavigationStep id="51" name="Declarations" />
                </UiNavigationSteps>
            </div>;
  }
}`,...b.parameters?.docs?.source}}};const J=["Primary"];export{b as Primary,J as __namedExportsOrder,F as default};
