import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as f,R as q}from"./iframe-EMvoHGHG.js";import{c as y}from"./index-EEEaJ7bf.js";import{U as P,b as M,a as _}from"./UiTypography-By9IHOAX.js";import{U as k,E as O}from"./UiIcon-C8gTXfMj.js";var i=(t=>(t.COMPLETE="complete",t.ACTIVE="active",t.INACTIVE="inactive",t))(i||{});const D="_navbar_3w204_1",L="_active_3w204_18",z={navbar:D,active:L},R=f.createContext(null),I=({initialStepId:t,children:u,className:p,complete:d=!1})=>{const C=f.useRef(0),[S,T]=f.useState(0),[E,l]=f.useState(new Set),o=f.useRef({steps:new Map,parentMap:new Map}),h=(e,a)=>{o.current.steps.has(e)||(C.current+=1,o.current.steps.set(e,{order:C.current,hasSubsteps:a,progress:a?{current:0,total:0}:void 0}))},N=e=>{const{steps:a,parentMap:n}=o.current;let s=null;if(a.has(e))s=a.get(e).order;else if(n.has(e)){const m=n.get(e);a.has(m)&&(s=a.get(m).order)}s!==null&&(s<S&&j(s),V(s),T(s))},w=(e,a,n=[])=>{if(n.length>0){n.forEach(v=>{o.current.parentMap.set(v.id,e)});const s=n.findIndex(v=>v.id===a)+1,m=n.length;if(s>0){const v=o.current.steps.get(e);v&&o.current.steps.set(e,{...v,progress:{current:s,total:m}})}}},j=e=>{l(a=>{const n=new Set(a);return o.current.steps.forEach((s,m)=>{s.order>e&&n.delete(m)}),n})},V=e=>{l(d?new Set(o.current.steps.keys()):a=>{const n=new Set(a);return o.current.steps.forEach((s,m)=>{s.order<e?n.add(m):s.order===e&&n.delete(m)}),n})};f.useEffect(()=>{const{steps:e,parentMap:a}=o.current;if(e.size>0){let n=t;if(a.has(t)){const s=a.get(t);s&&e.has(s)&&(n=s)}l(d?new Set(e.keys()):new Set),e.has(n)&&N(n)}},[t,d]);const x={currentStepId:t,registerStep:h,navigateToStep:N,updateSubstepProgress:w,completedSteps:E},c=e=>e===t||o.current.parentMap.get(t)===e,A=e=>E.has(e),U=q.Children.map(u,(e,a)=>{if(q.isValidElement(e)){const n=o.current.steps.get(e.props.id),s=o.current.steps.size;return q.cloneElement(e,{order:n?.order||a+1,totalSteps:s,isActive:c(e.props.id),isComplete:A(e.props.id)})}return e});return r.jsx(R.Provider,{value:x,children:r.jsx("nav",{"aria-label":"Progress",className:y("relative grid grid-cols-1 grid-rows-1 items-center",z.navbar,p),children:r.jsx("div",{className:"z-10 flex items-center justify-between",children:U})})})},Y=()=>{const t=f.useContext(R);if(!t)throw new Error("useStepNav must be used within a UiNavigationStepsProvider");return t};I.__docgenInfo={description:"",methods:[],displayName:"UiNavigationSteps",props:{initialStepId:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},complete:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};function H(t,u){return y(`
			flex
			transform
			items-center
			justify-center
			rounded-full
			border
			text-secondary-400
			transition-all
			duration-150
			ease-in-out
			md:h-xl
			md:w-full
			md:px-xs
			md:py-xxs
			lg:px-sm
		`,!u&&"bg-secondary-400",u&&"cursor-pointer",t===i.COMPLETE&&"size-sm border-secondary-400 bg-secondary-400 p-xs text-white",t===i.ACTIVE&&"border-secondary-400 bg-secondary-alt-200 px-xs py-xxs text-secondary-400",t===i.INACTIVE&&"size-sm border-secondary-alt-500 bg-white p-xs text-secondary-alt-500")}const g=({id:t,name:u,subSteps:p=[],className:d="",onClick:C,order:S=1,totalSteps:T=1,isActive:E=!1,isComplete:l=!1,icon:o})=>{const{currentStepId:h,updateSubstepProgress:N,navigateToStep:w,registerStep:j}=Y(),V=p.some(n=>n.id===h),x=p.length>0;f.useEffect(()=>{j(t,x),x&&N(t,h,p)},[t,x,p,h,N]);const c=!l&&(E||V)?i.ACTIVE:l?i.COMPLETE:i.INACTIVE,A=()=>{c!==i.INACTIVE&&(C?.(),w(t))},U=()=>S/T*100,e=c!==i.INACTIVE,a=x?l?` ${p.length}/${p.length}`:` ${S}/${T||p.length}`:null;return r.jsx("div",{style:c===i.ACTIVE?{"--step-width":`${U()}%`}:{},className:y("flex flex-col gap-xxs md:flex-row md:items-center",{[z.active]:c===i.ACTIVE}),children:r.jsx("button",{onClick:A,"aria-current":c===i.ACTIVE?"step":void 0,"aria-disabled":!e,disabled:!e,className:y(H(c,e),d),children:r.jsxs(P,{className:"flex place-items-center gap-xxs",weight:c===i.ACTIVE?_.SEMI_BOLD:_.REGULAR,lineHeight:!0,size:M.XS,children:[c===i.COMPLETE?o:r.jsx(P,{className:y({"font-semibold md:font-medium":c===i.INACTIVE}),tag:"span",size:M.SM,children:S}),r.jsxs("span",{className:y("text-xxs text-nowrap md:text-xs",{"hidden md:inline":c!==i.ACTIVE}),children:[u,a]})]})})})};g.__docgenInfo={description:"",methods:[],displayName:"UiNavigationStep",props:{id:{required:!0,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},subSteps:{required:!1,tsType:{name:"Array",elements:[{name:"INavSubStep"}],raw:"INavSubStep[]"},description:"",defaultValue:{value:"[]",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},order:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},totalSteps:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},isActive:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isComplete:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const F={title:"Components/UiNavigationSteps",component:I,argTypes:{initialStepId:{control:{type:"select"},description:"Initial step ID to set as active when the provider is mounted.",options:["1","2","3","4","5"]},complete:{control:{type:"boolean"},description:"Mark all steps complete as if the user has completed them."}},args:{initialStepId:"3",complete:!1,children:void 0}},b={render:t=>{const u=[{id:"1",name:"property",substeps:[{id:"1.1",name:"Your Home"},{id:"1.2",name:"Your Contents"}]},{id:"2",name:"contents"},{id:"3",name:"history & claims"},{id:"4",name:"about you"},{id:"5",name:"declarations"}],p=()=>r.jsx(k,{className:"text-white",name:["far","face-smile"],size:O.XS});return r.jsxs("div",{className:"grid gap-md",children:[r.jsx(I,{...t,children:u.map(d=>r.jsx(g,{id:d.id,icon:r.jsx(p,{}),name:d.name,subSteps:d.substeps},d.id))}),r.jsxs(I,{initialStepId:"51",complete:!0,children:[r.jsx(g,{id:"11",name:"Property"}),r.jsx(g,{id:"21",name:"Contents",subSteps:[{id:"contents.1",name:"Contents 1"},{id:"contents.2",name:"Contents 2"}]}),r.jsx(g,{id:"31",name:"History & Claims"}),r.jsx(g,{id:"41",name:"About You"}),r.jsx(g,{id:"51",name:"Declarations"})]})]})}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
