import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{g as n}from"./iframe-DYDs02wk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{t as i}from"./classnames-D09xBJOL.js";import{a,n as o,o as s,s as c,t as l}from"./UiTypography-BwoLwmnk.js";import{i as u,n as d,r as f,t as p}from"./UiIcon-DFqNdBsp.js";var m;function h(){return(h=t((()=>{m=function(e){return e.COMPLETE=`complete`,e.ACTIVE=`active`,e.INACTIVE=`inactive`,e}({})})))()}var g,_,v;function y(){return(y=t((()=>{g=`_navbar_10z8q_1`,_=`_navbarProgress_10z8q_17`,v={navbar:g,navbarProgress:_}})))()}var b,x,S,C,w,T;function E(){return(E=t((()=>{b=e(n(),1),x=e(i(),1),y(),S=r(),C=(0,b.createContext)(null),w=({initialStepId:e,children:t,className:n,complete:r=!1})=>{let i=(0,b.useRef)(0),a=(0,b.useRef)(null),[o,s]=(0,b.useState)(0),[c,l]=(0,b.useState)(new Set),[u,d]=(0,b.useState)(0),f=(0,b.useRef)({steps:new Map,parentMap:new Map}),p=(e,t)=>{f.current.steps.has(e)||(i.current+=1,f.current.steps.set(e,{order:i.current,hasSubsteps:t,progress:t?{current:0,total:0}:void 0}))},m=e=>{let{steps:t,parentMap:n}=f.current,r=null;if(t.has(e))r=t.get(e).order;else if(n.has(e)){let i=n.get(e);t.has(i)&&(r=t.get(i).order)}r!==null&&(r<o&&g(r),_(r),s(r))},h=(e,t,n=[])=>{if(n.length>0){n.forEach(t=>{f.current.parentMap.set(t.id,e)});let r=n.findIndex(e=>e.id===t)+1,i=n.length;if(r>0){let t=f.current.steps.get(e);t&&f.current.steps.set(e,{...t,progress:{current:r,total:i}})}}},g=e=>{l(t=>{let n=new Set(t);return f.current.steps.forEach((t,r)=>{t.order>e&&n.delete(r)}),n})},_=e=>{l(r?new Set(f.current.steps.keys()):t=>{let n=new Set(t);return f.current.steps.forEach((t,r)=>{t.order<e?n.add(r):t.order===e&&n.delete(r)}),n})};(0,b.useEffect)(()=>{let{steps:t,parentMap:n}=f.current;if(t.size>0){let i=e;if(n.has(e)){let r=n.get(e);r&&t.has(r)&&(i=r)}l(r?new Set(t.keys()):new Set),t.has(i)&&m(i)}},[e,r]);let y={currentStepId:e,registerStep:p,navigateToStep:m,updateSubstepProgress:h,completedSteps:c},w=t=>t===e||f.current.parentMap.get(e)===t,T=e=>c.has(e),E=b.Children.map(t,(e,t)=>{if(b.isValidElement(e)){let n=f.current.steps.get(e.props.id),r=f.current.steps.size;return b.cloneElement(e,{order:n?.order||t+1,totalSteps:r,isActive:w(e.props.id),isComplete:T(e.props.id)})}return e}),D=(0,b.useCallback)(()=>{if(!a.current)return;let e=a.current.querySelector(`[aria-current="step"]`);if(!e)return d(0);let t=e.getBoundingClientRect(),n=a.current.getBoundingClientRect(),r=t.left-n.left+t.width/2;d(r)},[]);return(0,b.useEffect)(()=>{if(!a.current)return;let e=new ResizeObserver(()=>{requestAnimationFrame(D)});return e.observe(a.current),a.current.querySelectorAll(`[role="listitem"]`).forEach(t=>{e.observe(t)}),D(),()=>{e.disconnect()}},[D,e]),(0,S.jsx)(C.Provider,{value:y,children:(0,S.jsxs)(`nav`,{"aria-label":`Progress`,className:(0,x.default)(`relative grid grid-cols-1 grid-rows-1 items-center`,v.navbar,n),"data-status":c.size===f.current.steps.size?`complete`:void 0,ref:a,children:[(0,S.jsx)(`div`,{className:v.navbarProgress,style:{width:`${u}px`}}),(0,S.jsx)(`div`,{className:`z-10 flex items-center justify-between`,children:E})]})})},T=()=>{let e=(0,b.useContext)(C);if(!e)throw Error(`useStepNav must be used within a UiNavigationStepsProvider`);return e},w.__docgenInfo={description:``,methods:[],displayName:`UiNavigationSteps`,props:{initialStepId:{required:!0,tsType:{name:`string`},description:``},children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``},complete:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}}}})))()}function D(e,t){return(0,k.default)(`
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
		`,!t&&`bg-secondary-400`,t&&`cursor-pointer`,e===m.COMPLETE&&`size-sm border-secondary-400 bg-secondary-400 p-xs text-white`,e===m.ACTIVE&&`border-secondary-400 bg-secondary-alt-200 px-xs py-xxs text-secondary-400`,e===m.INACTIVE&&`size-sm border-secondary-alt-500 bg-white p-xs text-secondary-alt-500`)}var O,k,A,j;function M(){return(M=t((()=>{O=e(n(),1),k=e(i(),1),h(),c(),o(),E(),y(),A=r(),j=({id:e,name:t,subSteps:n=[],className:r=``,onClick:i,order:o=1,isActive:c=!1,isComplete:u=!1,icon:d})=>{let{currentStepId:f,updateSubstepProgress:p,registerStep:h}=T(),g=n.some(e=>e.id===f),_=n.length>0;(0,O.useEffect)(()=>{h(e,_),_&&p(e,f,n)},[e,_,n,f,p]);let y=!u&&(c||g)?m.ACTIVE:u?m.COMPLETE:m.INACTIVE,b=()=>{y!==m.INACTIVE&&i?.()},x=y!==m.INACTIVE,S=_?u?` ${n.length}/${n.length}`:g?` ${n.findIndex(e=>e.id===f)+1}/${n.length}`:` ${o}/${n.length}`:null;return(0,A.jsx)(`div`,{className:(0,k.default)(`flex flex-col gap-xxs md:flex-row md:items-center`,{[v.active]:y===m.ACTIVE}),children:(0,A.jsx)(`button`,{onClick:b,"aria-current":y===m.ACTIVE?`step`:void 0,"aria-disabled":!x,disabled:!x,className:(0,k.default)(D(y,x),r),children:(0,A.jsxs)(l,{className:`flex place-items-center gap-xxs`,weight:y===m.ACTIVE?a.SEMI_BOLD:a.REGULAR,lineHeight:!0,size:s.XS,children:[y===m.COMPLETE?d:(0,A.jsx)(l,{className:(0,k.default)({"font-semibold md:font-medium":y===m.INACTIVE}),tag:`span`,size:s.SM,children:o}),(0,A.jsxs)(`span`,{className:(0,k.default)(`text-xxs text-nowrap md:text-xs`,{"hidden md:inline":y!==m.ACTIVE}),children:[t,S]})]})})})},j.__docgenInfo={description:``,methods:[],displayName:`UiNavigationStep`,props:{id:{required:!0,tsType:{name:`string`},description:``},name:{required:!0,tsType:{name:`string`},description:``},subSteps:{required:!1,tsType:{name:`Array`,elements:[{name:`INavSubStep`}],raw:`INavSubStep[]`},description:``,defaultValue:{value:`[]`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`""`,computed:!1}},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},icon:{required:!1,tsType:{name:`ReactNode`},description:``},order:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`1`,computed:!1}},totalSteps:{required:!1,tsType:{name:`number`},description:``},isActive:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},isComplete:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}}}})))()}var N,P,F,I;function L(){return(L=t((()=>{E(),M(),d(),u(),N=r(),P={title:`Components/UiNavigationSteps`,component:w,argTypes:{initialStepId:{control:{type:`select`},description:`Initial step ID to set as active when the provider is mounted.`,options:[`1`,`1.1`,`1.2`,`2`,`3`,`4`,`5`]},complete:{control:{type:`boolean`},description:`Mark all steps complete as if the user has completed them.`}},args:{initialStepId:`3`,complete:!1,children:void 0}},F={render:e=>{let t=[{id:`1`,name:`property`,substeps:[{id:`1.1`,name:`Your Home`},{id:`1.2`,name:`Your Contents`}]},{id:`2`,name:`contents`},{id:`3`,name:`history & claims`},{id:`4`,name:`about you`},{id:`5`,name:`declarations`}],n=()=>(0,N.jsx)(p,{className:`text-white`,name:[`far`,`face-smile`],size:f.XS});return(0,N.jsxs)(`div`,{className:`grid gap-md`,children:[(0,N.jsx)(w,{...e,children:t.map(e=>(0,N.jsx)(j,{id:e.id,icon:(0,N.jsx)(n,{}),name:e.name,subSteps:e.substeps},e.id))}),(0,N.jsxs)(w,{initialStepId:`31`,complete:!0,children:[(0,N.jsx)(j,{id:`11`,name:`Property`}),(0,N.jsx)(j,{id:`21`,name:`Contents`,subSteps:[{id:`contents.1`,name:`Contents 1`},{id:`contents.2`,name:`Contents 2`}]}),(0,N.jsx)(j,{id:`31`,name:`History & Claims`}),(0,N.jsx)(j,{id:`41`,name:`About You`}),(0,N.jsx)(j,{id:`51`,name:`Declarations`})]})]})}},I=[`Primary`],F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}}})))()}L();export{F as Primary,I as __namedExportsOrder,P as default};