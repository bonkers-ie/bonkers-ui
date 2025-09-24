import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as u,R as q}from"./iframe-DYyfGtcq.js";import{c as y}from"./index-DcIzYSjZ.js";import{U as P,b as z,a as M}from"./UiTypography-Can5vJ0i.js";import{U as k,E as O}from"./UiIcon-SE8HipX_.js";var o=(n=>(n.COMPLETE="complete",n.ACTIVE="active",n.INACTIVE="inactive",n))(o||{});const $="_active_116jq_1",W="_navbar_116jq_5",R={active:$,navbar:W},_=u.createContext(null),w=({initialStepId:n,children:f,className:c,complete:p=!1})=>{const E=u.useRef(0),[S,j]=u.useState(0),[N,m]=u.useState(new Set),i=u.useRef({steps:new Map,parentMap:new Map}),x=(e,r)=>{i.current.steps.has(e)||(E.current+=1,i.current.steps.set(e,{order:E.current,hasSubsteps:r,progress:r?{current:0,total:0}:void 0}))},C=e=>{const{steps:r,parentMap:t}=i.current;let s=null;if(r.has(e))s=r.get(e).order;else if(t.has(e)){const l=t.get(e);r.has(l)&&(s=r.get(l).order)}s!==null&&(s<S&&T(s),v(s),j(s))},V=(e,r,t=[])=>{if(t.length>0){t.forEach(h=>{i.current.parentMap.set(h.id,e)});const s=t.findIndex(h=>h.id===r)+1,l=t.length;if(s>0){const h=i.current.steps.get(e);h&&i.current.steps.set(e,{...h,progress:{current:s,total:l}})}}},T=e=>{m(r=>{const t=new Set(r);return i.current.steps.forEach((s,l)=>{s.order>e&&t.delete(l)}),t})},v=e=>{m(p?new Set(i.current.steps.keys()):r=>{const t=new Set(r);return i.current.steps.forEach((s,l)=>{s.order<e?t.add(l):s.order===e&&t.delete(l)}),t})};u.useEffect(()=>{const{steps:e,parentMap:r}=i.current;if(e.size>0){let t=n;if(r.has(n)){const s=r.get(n);s&&e.has(s)&&(t=s)}m(p?new Set(e.keys()):new Set),e.has(t)&&C(t)}},[n,p]);const d={currentStepId:n,registerStep:x,navigateToStep:C,updateSubstepProgress:V,completedSteps:N},A=e=>e===n||i.current.parentMap.get(n)===e,I=e=>N.has(e),U=q.Children.map(f,(e,r)=>{if(q.isValidElement(e)){const t=i.current.steps.get(e.props.id),s=i.current.steps.size;return q.cloneElement(e,{order:t?.order||r+1,totalSteps:s,isActive:A(e.props.id),isComplete:I(e.props.id)})}return e});return a.jsx(_.Provider,{value:d,children:a.jsx("nav",{"aria-label":"Progress",className:y("relative grid grid-cols-1 grid-rows-1 items-center",R.navbar,c),"data-status":N.size===i.current.steps.size?"complete":void 0,children:a.jsx("div",{className:"z-10 flex items-center justify-between",children:U})})})},D=()=>{const n=u.useContext(_);if(!n)throw new Error("useStepNav must be used within a UiNavigationStepsProvider");return n};w.__docgenInfo={description:"",methods:[],displayName:"UiNavigationSteps",props:{initialStepId:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},complete:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};function L(n,f){return y(`
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
		`,!f&&"bg-secondary-400",f&&"cursor-pointer",n===o.COMPLETE&&"size-sm border-secondary-400 bg-secondary-400 p-xs text-white",n===o.ACTIVE&&"border-secondary-400 bg-secondary-alt-200 px-xs py-xxs text-secondary-400",n===o.INACTIVE&&"size-sm border-secondary-alt-500 bg-white p-xs text-secondary-alt-500")}const g=({id:n,name:f,subSteps:c=[],className:p="",onClick:E,order:S=1,totalSteps:j=1,isActive:N=!1,isComplete:m=!1,icon:i})=>{const{currentStepId:x,updateSubstepProgress:C,registerStep:V}=D(),T=c.some(t=>t.id===x),v=c.length>0;u.useEffect(()=>{V(n,v),v&&C(n,x,c)},[n,v,c,x,C]);const d=!m&&(N||T)?o.ACTIVE:m?o.COMPLETE:o.INACTIVE,A=()=>{d!==o.INACTIVE&&E?.()},I=u.useRef(null),U=t=>{const s=t/window.innerWidth*100;return`${S/j*100-s/2}%`},e=d!==o.INACTIVE,r=v?m?` ${c.length}/${c.length}`:T?` ${c.findIndex(t=>t.id===x)+1}/${c.length}`:` ${S}/${c.length}`:null;return a.jsx("div",{style:d===o.ACTIVE?{"--step-width":`${U(I.current?.clientWidth??0)}`}:{},className:y("flex flex-col gap-xxs md:flex-row md:items-center",{[R.active]:d===o.ACTIVE}),ref:I,children:a.jsx("button",{onClick:A,"aria-current":d===o.ACTIVE?"step":void 0,"aria-disabled":!e,disabled:!e,className:y(L(d,e),p),children:a.jsxs(P,{className:"flex place-items-center gap-xxs",weight:d===o.ACTIVE?M.SEMI_BOLD:M.REGULAR,lineHeight:!0,size:z.XS,children:[d===o.COMPLETE?i:a.jsx(P,{className:y({"font-semibold md:font-medium":d===o.INACTIVE}),tag:"span",size:z.SM,children:S}),a.jsxs("span",{className:y("text-xxs text-nowrap md:text-xs",{"hidden md:inline":d!==o.ACTIVE}),children:[f,r]})]})})})};g.__docgenInfo={description:"",methods:[],displayName:"UiNavigationStep",props:{id:{required:!0,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},subSteps:{required:!1,tsType:{name:"Array",elements:[{name:"INavSubStep"}],raw:"INavSubStep[]"},description:"",defaultValue:{value:"[]",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},order:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},totalSteps:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},isActive:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isComplete:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const F={title:"Components/UiNavigationSteps",component:w,argTypes:{initialStepId:{control:{type:"select"},description:"Initial step ID to set as active when the provider is mounted.",options:["1","1.1","1.2","2","3","4","5"]},complete:{control:{type:"boolean"},description:"Mark all steps complete as if the user has completed them."}},args:{initialStepId:"3",complete:!1,children:void 0}},b={render:n=>{const f=[{id:"1",name:"property",substeps:[{id:"1.1",name:"Your Home"},{id:"1.2",name:"Your Contents"}]},{id:"2",name:"contents"},{id:"3",name:"history & claims"},{id:"4",name:"about you"},{id:"5",name:"declarations"}],c=()=>a.jsx(k,{className:"text-white",name:["far","face-smile"],size:O.XS});return a.jsxs("div",{className:"grid gap-md",children:[a.jsx(w,{...n,children:f.map(p=>a.jsx(g,{id:p.id,icon:a.jsx(c,{}),name:p.name,subSteps:p.substeps},p.id))}),a.jsxs(w,{initialStepId:"31",complete:!0,children:[a.jsx(g,{id:"11",name:"Property"}),a.jsx(g,{id:"21",name:"Contents",subSteps:[{id:"contents.1",name:"Contents 1"},{id:"contents.2",name:"Contents 2"}]}),a.jsx(g,{id:"31",name:"History & Claims"}),a.jsx(g,{id:"41",name:"About You"}),a.jsx(g,{id:"51",name:"Declarations"})]})]})}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};const J=["Primary"];export{b as Primary,J as __namedExportsOrder,F as default};
