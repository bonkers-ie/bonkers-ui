import{j as e}from"./jsx-runtime-C6qLVRqm.js";import"./index-C2WPW1L7.js";import{U as i,b as p,E as c,a as _}from"./UiTypography-Dl3m25sY.js";import{c as x}from"./index-BmPQVgn-.js";import{U as v,a as I}from"./UiAccordionItem.base-Dxb-H-VQ.js";import{U as A,E as D}from"./UiIcon-CQO6a-go.js";import"./index-JoFrltcn.js";var s=(t=>(t.DEFAULT="DEFAULT",t.ERROR="ERROR",t.SUCCESS="SUCCESS",t))(s||{});const l=({postIcon:t,preIcon:a,kind:n=s.DEFAULT,...r})=>{const o={[s.DEFAULT]:"border-secondary-alt-500 hover:border-secondary-alt-700",[s.ERROR]:"border-error",[s.SUCCESS]:"border-primary-600"};return e.jsxs(i,{tag:"label",htmlFor:r.id,className:x("ui-input-wrapper","flex flex-row items-center gap-xxs rounded-lg border p-sm",n&&o[n],{"bg-white":!r.disabled,"border-secondary-alt-300 bg-secondary-alt-200":r.disabled}),children:[a||null,e.jsx("input",{className:x("border-0 flex-1 bg-transparent outline-none placeholder:text-secondary-alt-600 w-full"),...r}),t||null]})};l.__docgenInfo={description:"",methods:[],displayName:"UiInputBase",props:{id:{required:!0,tsType:{name:"string"},description:""},postIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},preIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},kind:{required:!1,tsType:{name:"EInputKind"},description:"",defaultValue:{value:"EInputKind.DEFAULT",computed:!0}}}};const B=({children:t,infoComponent:a,title:n,subtitle:r})=>e.jsxs("div",{className:"grid w-full grid-flow-row gap-xxxs",children:[n?e.jsx(i,{size:p.MD,color:c.SECONDARY,lineHeight:!0,children:n}):null,a,r?e.jsx(i,{lineHeight:!0,color:c.SECONDARY_ALT_600,size:p.SM,children:r}):null,e.jsx("div",{className:"relative w-full",children:t})]});B.__docgenInfo={description:"",methods:[],displayName:"UiInputTitled",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},infoComponent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},statusMessage:{required:!1,tsType:{name:"string"},description:""},subtitle:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const f=({kind:t,title:a,infoComponent:n,subtitle:r,statusMessage:o,...d})=>e.jsxs(B,{title:a,subtitle:r,infoComponent:n,children:[o?e.jsx(i,{className:x("mb-xxs","transition-all duration-300 ease-in-out","max-h-0 opacity-0 overflow-hidden","data-[status=true]:max-h-lg data-[status=true]:opacity-100"),lineHeight:!0,color:t===s.ERROR?c.ERROR:c.PRIMARY,size:p.SM,"data-status":!!o,children:o}):null,e.jsx(l,{kind:t,...d})]});f.__docgenInfo={description:"",methods:[],displayName:"UiInputText",props:{id:{required:!0,tsType:{name:"string"},description:""},kind:{required:!1,tsType:{name:"EInputKind"},description:""},statusMessage:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},subtitle:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},infoComponent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const O=({children:t,id:a,title:n,postfix:r,prefix:o})=>e.jsx(v,{className:"mb-xxs flex justify-start",children:e.jsxs(I,{id:a||`whats-this-${Math.random()}`,children:[e.jsx(I.Trigger,{className:"flex flex-row items-baseline gap-x-xxs",children:d=>e.jsxs(e.Fragment,{children:[o?o(d):null,e.jsx(i,{underline:!0,lineHeight:!0,color:c.SECONDARY_500,size:p.XS,weight:_.SEMI_BOLD,children:n}),r?r(d):e.jsx("div",{className:x("transition","text-secondary-500",d?"rotate-180":"rotate-0"),children:e.jsx(A,{name:["fas","chevron-down"],size:D.XS})})]})}),e.jsx(I.Content,{children:e.jsx(i,{lineHeight:!0,color:c.SECONDARY_500,size:p.XS,children:t})})]})});O.__docgenInfo={description:"",methods:[],displayName:"UiAccordionInfoDropdown",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},id:{required:!1,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},postfix:{required:!1,tsType:{name:"signature",type:"function",raw:"(isOpen?: boolean) => React.ReactNode",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:""},prefix:{required:!1,tsType:{name:"signature",type:"function",raw:"(isOpen?: boolean) => React.ReactNode",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:""}}};const H={title:"Components/UiInputBase",component:l,argTypes:{id:{description:"The id of the input",control:{type:"text"}},disabled:{description:"If the input is disabled",control:{type:"boolean"}},placeholder:{description:"The placeholder of the input",control:{type:"text"}},kind:{options:[s.DEFAULT,s.SUCCESS,s.ERROR],description:"The state of the input",control:{type:"radio"}},type:{description:"The type of the input",control:{type:"select"},options:["text","password","email","number","tel","url"]},preIcon:{description:"The ReactNode positioned before the input"},postIcon:{description:"The ReactNode positioned after the input"}},args:{id:"testInput",disabled:!1,kind:s.DEFAULT,type:"text",placeholder:"Placeholder",postIcon:void 0,preIcon:void 0}},u={name:"UiInputBase",render:t=>e.jsx(l,{...t})},m={name:"UiInputBase with Icons",render:t=>e.jsx(l,{...t,placeholder:"Pre and Post Icons...",preIcon:e.jsx(A,{size:D.SM,name:["far","face-smile"]}),postIcon:"$ Dollar",id:"baseIcons"})},R={name:"UiInputText",render:t=>{const a=()=>e.jsx(O,{title:"What's this?",children:"Lorem, ipsum dolor."});return e.jsx(f,{title:"Title",subtitle:"Subtitle",infoComponent:e.jsx(a,{}),onFocus:()=>console.log("focus"),...t})}},h={name:"UiInputText Kinds",render:t=>e.jsxs("div",{className:"mt-sm flex w-full flex-row gap-sm",children:[e.jsx(f,{...t,id:"errorInput",placeholder:"Error Input",kind:s.ERROR,statusMessage:"Backend is broken again"}),e.jsx(f,{id:"successInput",placeholder:"Success Input",kind:s.SUCCESS,statusMessage:"You spelled that right!"})]})};var g,T,y;u.parameters={...u.parameters,docs:{...(g=u.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "UiInputBase",
  render: args => <UiInputBase {...args} />
}`,...(y=(T=u.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};var N,U,S;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "UiInputBase with Icons",
  render: args => <UiInputBase {...args} placeholder="Pre and Post Icons..." preIcon={<UiIcon size={ESize.SM} name={["far", "face-smile"]} />} postIcon="$ Dollar" id="baseIcons" />
}`,...(S=(U=m.parameters)==null?void 0:U.docs)==null?void 0:S.source}}};var E,w,b;R.parameters={...R.parameters,docs:{...(E=R.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "UiInputText",
  render: args => {
    const Info = () => <UiAccordionInfoDropdown title="What's this?">
                Lorem, ipsum dolor.
            </UiAccordionInfoDropdown>;
    return <UiInputText title="Title" subtitle="Subtitle" infoComponent={<Info />} onFocus={() => console.log("focus")} {...args} />;
  }
}`,...(b=(w=R.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var j,C,q;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "UiInputText Kinds",
  render: args => <div className="mt-sm flex w-full flex-row gap-sm">
            <UiInputText {...args} id="errorInput" placeholder="Error Input" kind={EInputKind.ERROR} statusMessage="Backend is broken again" />
            <UiInputText id="successInput" placeholder="Success Input" kind={EInputKind.SUCCESS} statusMessage="You spelled that right!" />
        </div>
}`,...(q=(C=h.parameters)==null?void 0:C.docs)==null?void 0:q.source}}};const K=["BaseInput","BaseInputWithIcons","TextInput","TextInputVariations"];export{u as BaseInput,m as BaseInputWithIcons,R as TextInput,h as TextInputVariations,K as __namedExportsOrder,H as default};
