import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./index-DmM0KDA7.js";import{c as x}from"./index-C7T3p30y.js";import{U as c,E as d,b as p,a as _}from"./UiTypography-BZRJyQsk.js";import{U as A,E as D}from"./UiIcon-BhDFDDHY.js";import{U as v,a as I}from"./UiAccordionItem.base-T-zCYWzM.js";var r=(t=>(t.DEFAULT="DEFAULT",t.ERROR="ERROR",t.SUCCESS="SUCCESS",t))(r||{});const l=({postIcon:t,preIcon:s,className:o,kind:n=r.DEFAULT,...a})=>{const i={[r.DEFAULT]:"border-secondary-alt-600 hover:border-secondary-alt-700",[r.ERROR]:"border-error",[r.SUCCESS]:"border-primary-600"};return e.jsxs(c,{tag:"label",htmlFor:a.id,className:x("ui-input-wrapper","flex flex-row items-center gap-sm rounded-xl border p-sm",n&&i[n],{"bg-white":!a.disabled,"border-secondary-alt-300 bg-secondary-alt-200":a.disabled},o),children:[s||null,e.jsx("input",{className:x("border-0 flex-1 bg-transparent outline-hidden placeholder:text-secondary-alt-600 w-full"),...a}),t||null]})};l.__docgenInfo={description:"",methods:[],displayName:"UiInputBase",props:{id:{required:!0,tsType:{name:"string"},description:""},postIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},preIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},kind:{required:!1,tsType:{name:"EInputKind"},description:"",defaultValue:{value:"EInputKind.DEFAULT",computed:!0}},className:{required:!1,tsType:{name:"string"},description:""}}};const B=({children:t,infoComponent:s,title:o,subtitle:n})=>e.jsxs("div",{className:"grid w-full grid-flow-row gap-xxxs",children:[o?e.jsx(c,{size:p.MD,color:d.SECONDARY,lineHeight:!0,children:o}):null,s,n?e.jsx(c,{lineHeight:!0,color:d.SECONDARY_ALT_600,size:p.SM,children:n}):null,e.jsx("div",{className:"relative w-full",children:t})]});B.__docgenInfo={description:"",methods:[],displayName:"UiInputTitled",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},infoComponent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},statusMessage:{required:!1,tsType:{name:"string"},description:""},subtitle:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const f=({kind:t,title:s,infoComponent:o,subtitle:n,statusMessage:a,...i})=>e.jsxs(B,{title:s,subtitle:n,infoComponent:o,children:[a?e.jsx(c,{className:x("mb-xxs","transition-all duration-300 ease-in-out","max-h-0 opacity-0 overflow-hidden","data-[status=true]:max-h-lg data-[status=true]:opacity-100"),lineHeight:!0,color:t===r.ERROR?d.ERROR:d.PRIMARY,size:p.SM,"data-status":!!a,children:a}):null,e.jsx(l,{kind:t,...i})]});f.__docgenInfo={description:"",methods:[],displayName:"UiInputText",props:{id:{required:!0,tsType:{name:"string"},description:""},kind:{required:!1,tsType:{name:"EInputKind"},description:""},statusMessage:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},subtitle:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},infoComponent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const O=({children:t,id:s,title:o,postfix:n,prefix:a})=>e.jsx(v,{className:"mb-xxs flex justify-start",children:e.jsxs(I,{id:s||`whats-this-${Math.random()}`,children:[e.jsx(I.Trigger,{className:"flex flex-row items-baseline gap-x-xxs",children:i=>e.jsxs(e.Fragment,{children:[a?a(i):null,e.jsx(c,{underline:!0,lineHeight:!0,color:d.SECONDARY_500,size:p.XS,weight:_.SEMI_BOLD,children:o}),n?n(i):e.jsx("div",{className:x("transition","text-secondary-500",i?"rotate-180":"rotate-0"),children:e.jsx(A,{name:["fas","chevron-down"],size:D.XS})})]})}),e.jsx(I.Content,{children:e.jsx(c,{lineHeight:!0,color:d.SECONDARY_500,size:p.XS,children:t})})]})});O.__docgenInfo={description:"",methods:[],displayName:"UiAccordionInfoDropdown",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},id:{required:!1,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},postfix:{required:!1,tsType:{name:"signature",type:"function",raw:"(isOpen?: boolean) => React.ReactNode",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:""},prefix:{required:!1,tsType:{name:"signature",type:"function",raw:"(isOpen?: boolean) => React.ReactNode",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:""}}};const P={title:"Components/UiInputBase",component:l,argTypes:{id:{description:"The id of the input",control:{type:"text"}},disabled:{description:"If the input is disabled",control:{type:"boolean"}},placeholder:{description:"The placeholder of the input",control:{type:"text"}},kind:{options:[r.DEFAULT,r.SUCCESS,r.ERROR],description:"The state of the input",control:{type:"radio"}},type:{description:"The type of the input",control:{type:"select"},options:["text","password","email","number","tel","url"]},preIcon:{description:"The ReactNode positioned before the input"},postIcon:{description:"The ReactNode positioned after the input"}},args:{id:"testInput",disabled:!1,kind:r.DEFAULT,type:"text",placeholder:"Placeholder",postIcon:void 0,preIcon:void 0}},u={name:"UiInputBase",render:t=>e.jsx(l,{...t})},m={name:"UiInputBase with Icons",render:t=>e.jsx(l,{...t,placeholder:"Pre and Post Icons...",preIcon:e.jsx(A,{size:D.SM,name:["far","face-smile"]}),postIcon:"$ Dollar",id:"baseIcons"})},R={name:"UiInputText",render:t=>{const s=()=>e.jsx(O,{title:"What's this?",children:"Lorem, ipsum dolor."});return e.jsx(f,{title:"Title",subtitle:"Subtitle",infoComponent:e.jsx(s,{}),onFocus:()=>console.log("focus"),...t})}},h={name:"UiInputText Kinds",render:t=>e.jsxs("div",{className:"mt-sm flex w-full flex-row gap-sm",children:[e.jsx(f,{...t,id:"errorInput",placeholder:"Error Input",kind:r.ERROR,statusMessage:"Backend is broken again"}),e.jsx(f,{id:"successInput",placeholder:"Success Input",kind:r.SUCCESS,statusMessage:"You spelled that right!"})]})};var g,T,y;u.parameters={...u.parameters,docs:{...(g=u.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(q=(C=h.parameters)==null?void 0:C.docs)==null?void 0:q.source}}};const H=["BaseInput","BaseInputWithIcons","TextInput","TextInputVariations"];export{u as BaseInput,m as BaseInputWithIcons,R as TextInput,h as TextInputVariations,H as __namedExportsOrder,P as default};
