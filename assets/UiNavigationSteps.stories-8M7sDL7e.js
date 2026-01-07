import{j as a}from"./jsx-runtime-u17CrQMm.js";import{r as p,R as P}from"./iframe-CSy_xDkl.js";import{c as y}from"./index-DmBNOwg2.js";import{U as z,b as M,a as _}from"./UiTypography-CptbzJ9h.js";import{U as D,E as L}from"./UiIcon-CMPyT7MU.js";import"./preload-helper-PPVm8Dsz.js";var o=(t=>(t.COMPLETE="complete",t.ACTIVE="active",t.INACTIVE="inactive",t))(o||{});const W="_navbar_10z8q_1",Y="_navbarProgress_10z8q_17",R={navbar:W,navbarProgress:Y},k=p.createContext(null),A=({initialStepId:t,children:g,className:c,complete:l=!1})=>{const E=p.useRef(0),u=p.useRef(null),[j,S]=p.useState(0),[C,m]=p.useState(new Set),[T,I]=p.useState(0),i=p.useRef({steps:new Map,parentMap:new Map}),x=(e,r)=>{i.current.steps.has(e)||(E.current+=1,i.current.steps.set(e,{order:E.current,hasSubsteps:r,progress:r?{current:0,total:0}:void 0}))},d=e=>{const{steps:r,parentMap:n}=i.current;let s=null;if(r.has(e))s=r.get(e).order;else if(n.has(e)){const f=n.get(e);r.has(f)&&(s=r.get(f).order)}s!==null&&(s<j&&N(s),V(s),S(s))},U=(e,r,n=[])=>{if(n.length>0){n.forEach(h=>{i.current.parentMap.set(h.id,e)});const s=n.findIndex(h=>h.id===r)+1,f=n.length;if(s>0){const h=i.current.steps.get(e);h&&i.current.steps.set(e,{...h,progress:{current:s,total:f}})}}},N=e=>{m(r=>{const n=new Set(r);return i.current.steps.forEach((s,f)=>{s.order>e&&n.delete(f)}),n})},V=e=>{m(l?new Set(i.current.steps.keys()):r=>{const n=new Set(r);return i.current.steps.forEach((s,f)=>{s.order<e?n.add(f):s.order===e&&n.delete(f)}),n})};p.useEffect(()=>{const{steps:e,parentMap:r}=i.current;if(e.size>0){let n=t;if(r.has(t)){const s=r.get(t);s&&e.has(s)&&(n=s)}m(l?new Set(e.keys()):new Set),e.has(n)&&d(n)}},[t,l]);const b={currentStepId:t,registerStep:x,navigateToStep:d,updateSubstepProgress:U,completedSteps:C},O=e=>e===t||i.current.parentMap.get(t)===e,$=e=>C.has(e),B=P.Children.map(g,(e,r)=>{if(P.isValidElement(e)){const n=i.current.steps.get(e.props.id),s=i.current.steps.size;return P.cloneElement(e,{order:n?.order||r+1,totalSteps:s,isActive:O(e.props.id),isComplete:$(e.props.id)})}return e}),q=p.useCallback(()=>{if(!u.current)return;const e=u.current.querySelector('[aria-current="step"]');if(!e)return I(0);const r=e.getBoundingClientRect(),n=u.current.getBoundingClientRect(),s=r.left-n.left+r.width/2;I(s)},[]);return p.useEffect(()=>{if(!u.current)return;const e=new ResizeObserver(()=>{requestAnimationFrame(q)});return e.observe(u.current),u.current.querySelectorAll('[role="listitem"]').forEach(n=>{e.observe(n)}),q(),()=>{e.disconnect()}},[q,t]),a.jsx(k.Provider,{value:b,children:a.jsxs("nav",{"aria-label":"Progress",className:y("relative grid grid-cols-1 grid-rows-1 items-center",R.navbar,c),"data-status":C.size===i.current.steps.size?"complete":void 0,ref:u,children:[a.jsx("div",{className:R.navbarProgress,style:{width:`${T}px`}}),a.jsx("div",{className:"z-10 flex items-center justify-between",children:B})]})})},H=()=>{const t=p.useContext(k);if(!t)throw new Error("useStepNav must be used within a UiNavigationStepsProvider");return t};A.__docgenInfo={description:"",methods:[],displayName:"UiNavigationSteps",props:{initialStepId:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},complete:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};function X(t,g){return y(`
			flex
			transform
			items-center
			justify-center
			rounded-full
			border
			text-secondary-400
			md:h-xl
			md:w-full
			md:px-xs
			md:py-xxs
			lg:px-sm
		`,!g&&"bg-secondary-400",g&&"cursor-pointer",t===o.COMPLETE&&"size-sm border-secondary-400 bg-secondary-400 p-xs text-white",t===o.ACTIVE&&"border-secondary-400 bg-secondary-alt-200 px-xs py-xxs text-secondary-400",t===o.INACTIVE&&"size-sm border-secondary-alt-500 bg-white p-xs text-secondary-alt-500")}const v=({id:t,name:g,subSteps:c=[],className:l="",onClick:E,order:u=1,isActive:j=!1,isComplete:S=!1,icon:C})=>{const{currentStepId:m,updateSubstepProgress:T,registerStep:I}=H(),i=c.some(b=>b.id===m),x=c.length>0;p.useEffect(()=>{I(t,x),x&&T(t,m,c)},[t,x,c,m,T]);const d=!S&&(j||i)?o.ACTIVE:S?o.COMPLETE:o.INACTIVE,U=()=>{d!==o.INACTIVE&&E?.()},N=d!==o.INACTIVE,V=x?S?` ${c.length}/${c.length}`:i?` ${c.findIndex(b=>b.id===m)+1}/${c.length}`:` ${u}/${c.length}`:null;return a.jsx("div",{className:y("flex flex-col gap-xxs md:flex-row md:items-center",{[R.active]:d===o.ACTIVE}),children:a.jsx("button",{onClick:U,"aria-current":d===o.ACTIVE?"step":void 0,"aria-disabled":!N,disabled:!N,className:y(X(d,N),l),children:a.jsxs(z,{className:"flex place-items-center gap-xxs",weight:d===o.ACTIVE?_.SEMI_BOLD:_.REGULAR,lineHeight:!0,size:M.XS,children:[d===o.COMPLETE?C:a.jsx(z,{className:y({"font-semibold md:font-medium":d===o.INACTIVE}),tag:"span",size:M.SM,children:u}),a.jsxs("span",{className:y("text-xxs text-nowrap md:text-xs",{"hidden md:inline":d!==o.ACTIVE}),children:[g,V]})]})})})};v.__docgenInfo={description:"",methods:[],displayName:"UiNavigationStep",props:{id:{required:!0,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},subSteps:{required:!1,tsType:{name:"Array",elements:[{name:"INavSubStep"}],raw:"INavSubStep[]"},description:"",defaultValue:{value:"[]",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},order:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},totalSteps:{required:!1,tsType:{name:"number"},description:""},isActive:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isComplete:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const ee={title:"Components/UiNavigationSteps",component:A,argTypes:{initialStepId:{control:{type:"select"},description:"Initial step ID to set as active when the provider is mounted.",options:["1","1.1","1.2","2","3","4","5"]},complete:{control:{type:"boolean"},description:"Mark all steps complete as if the user has completed them."}},args:{initialStepId:"3",complete:!1,children:void 0}},w={render:t=>{const g=[{id:"1",name:"property",substeps:[{id:"1.1",name:"Your Home"},{id:"1.2",name:"Your Contents"}]},{id:"2",name:"contents"},{id:"3",name:"history & claims"},{id:"4",name:"about you"},{id:"5",name:"declarations"}],c=()=>a.jsx(D,{className:"text-white",name:["far","face-smile"],size:L.XS});return a.jsxs("div",{className:"grid gap-md",children:[a.jsx(A,{...t,children:g.map(l=>a.jsx(v,{id:l.id,icon:a.jsx(c,{}),name:l.name,subSteps:l.substeps},l.id))}),a.jsxs(A,{initialStepId:"31",complete:!0,children:[a.jsx(v,{id:"11",name:"Property"}),a.jsx(v,{id:"21",name:"Contents",subSteps:[{id:"contents.1",name:"Contents 1"},{id:"contents.2",name:"Contents 2"}]}),a.jsx(v,{id:"31",name:"History & Claims"}),a.jsx(v,{id:"41",name:"About You"}),a.jsx(v,{id:"51",name:"Declarations"})]})]})}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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

                <UiNavigationSteps initialStepId="31" complete>
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
}`,...w.parameters?.docs?.source}}};const te=["Primary"];export{w as Primary,te as __namedExportsOrder,ee as default};
