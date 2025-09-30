import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./iframe-nCXm8g28.js";import{c as M}from"./index-B_7lEG5g.js";import{U as p,E as f}from"./UiIcon-dh9q9rhJ.js";import{U as O}from"./UiTypography-CqV6NynP.js";import"./preload-helper-PPVm8Dsz.js";var n=(e=>(e.SECONDARY="secondary",e.DEFAULT="default",e.PRIMARY="primary",e.WARNING="warning",e.ERROR="error",e))(n||{}),o=(e=>(e[e.SHORT=5e3]="SHORT",e[e.LONG=1e4]="LONG",e[e.INFINITE=1/0]="INFINITE",e))(o||{});const D={[n.DEFAULT]:`
		bg-white
		text-secondary-700

	`,[n.PRIMARY]:`
		bg-primary-alt-700
		text-white
	`,[n.WARNING]:`
		bg-warning-600
		text-white
	`,[n.ERROR]:`
		bg-error
		text-white
	`,[n.SECONDARY]:`
		bg-secondary
		text-white
	`},c=({id:e,kind:R=n.SECONDARY,preIcon:N,postIcon:g,title:E,children:x,className:b,duration:a=o.INFINITE,pauseOnHover:y=!0,onClickAction:S,onDismissAction:j,isDismissed:I})=>{const[k,A]=i.useState(a),[h,T]=i.useState(!1),r=i.useRef(null),d=i.useRef(0),w=i.useRef(Date.now()),l=i.useRef(null);i.useEffect(()=>{if(!I||!l.current)return;const s=()=>{j?.(e),r.current&&clearInterval(r.current)};return l.current.addEventListener("animationend",s),()=>{l.current?.removeEventListener("animationend",s)}},[I]),i.useEffect(()=>{if(a===o.INFINITE)return;const s=()=>{const m=Date.now()-w.current,v=Math.max(0,a-m);A(v),v<=0&&(S?.(),r.current&&clearInterval(r.current))};if(h)r.current&&clearInterval(r.current),d.current=Date.now();else{if(d.current){const m=Date.now()-d.current;w.current+=m,d.current=0}s(),r.current=setInterval(s,100)}return()=>{r.current&&clearInterval(r.current)}},[h,a]);const U=()=>{y&&T(!0)},q=()=>{y&&T(!1)};return t.jsxs("div",{className:M("ui-snackbar","relative","overflow-clip","flex","w-full","rounded-lg","items-center","justify-between","shadow-md","items-center","px-sm","py-xs","flex-col","gap-y-xxxs","text-sm",D[R],b),ref:l,onMouseEnter:U,onMouseLeave:q,children:[t.jsxs("div",{className:"flex w-full justify-between",children:[t.jsxs("div",{className:"flex flex-row items-center gap-xxs",children:[N||null,E]}),g||null]}),x?t.jsx("div",{style:{color:R===n.DEFAULT?"black":"white",fontWeight:"normal"},className:"w-full",children:x}):null,t.jsx("div",{className:"absolute bottom-0 left-0 h-xxs bg-black opacity-30 bg-blend-color-burn",style:{width:a===o.INFINITE?"0%":`${k/a*100}%`,transition:"width 0.1s linear"}})]})};c.__docgenInfo={description:"",methods:[],displayName:"UiSnackbar",props:{id:{required:!0,tsType:{name:"string"},description:""},kind:{required:!1,tsType:{name:"ESnackbarTypes"},description:"",defaultValue:{value:"ESnackbarTypes.SECONDARY",computed:!0}},preIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},postIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},duration:{required:!1,tsType:{name:"ESnackbarDuration"},description:"",defaultValue:{value:"ESnackbarDuration.INFINITE",computed:!0}},pauseOnHover:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},isDismissed:{required:!1,tsType:{name:"boolean"},description:""},onClickAction:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onDismissAction:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""}}};const G={title:"Components/UiSnackbar",component:c,argTypes:{kind:{control:{type:"select"},options:Object.values(n),description:"Snackbar Color"},title:{control:{type:"text",description:"text or title"}},children:{control:{type:"text",description:"text or child element/s"}},preIcon:{control:{type:"text",description:"ReactNode element that is positioned at the start of the snackbar"}},postIcon:{control:{type:"text",description:"ReactNode element that is positioned at the end of the snackbar"}}},args:{id:"unique-id-1",kind:n.SECONDARY,title:"Some Text",postIcon:t.jsx("p",{className:"underline",children:"Text"})}},u={render:e=>t.jsxs("div",{className:"grid gap-md",children:[t.jsx(c,{...e}),t.jsx(c,{id:"unique-id-2",kind:n.PRIMARY,postIcon:t.jsx(p,{name:["far","face-angry"],size:f.SM}),title:"Primary Notification"}),t.jsx(c,{id:"unique-id-3",kind:n.WARNING,preIcon:t.jsx(p,{name:["far","face-smile"],size:f.SM}),postIcon:t.jsx(p,{name:["far","face-angry"],size:f.SM}),title:"Warning Notification with content",duration:o.LONG,children:t.jsx(O,{lineHeight:!0,children:"This is a warning notification with some content."})})]})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <div className="grid gap-md">
            <UiSnackbar {...args} />
            <UiSnackbar id="unique-id-2" kind={ESnackbarTypes.PRIMARY} postIcon={<UiIcon name={["far", "face-angry"]} size={ESize.SM} />} title="Primary Notification" />
            <UiSnackbar id="unique-id-3" kind={ESnackbarTypes.WARNING} preIcon={<UiIcon name={["far", "face-smile"]} size={ESize.SM} />} postIcon={<UiIcon name={["far", "face-angry"]} size={ESize.SM} />} title="Warning Notification with content" duration={ESnackbarDuration.LONG}>
                <UiTypography lineHeight>
                    This is a warning notification with some content.
                </UiTypography>
            </UiSnackbar>
        </div>;
  }
}`,...u.parameters?.docs?.source}}};const W=["Primary"];export{u as Primary,W as __namedExportsOrder,G as default};
