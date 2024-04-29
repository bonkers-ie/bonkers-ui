import{d as f,o as k,a as g,h as s,n as b,f as a,l as o,w as l,i as h,t as S}from"./vue.esm-bundler-B4SQYQ1t.js";import{d as u}from"./index-Cci8dJ4U.js";import{d}from"./ui-typography-CFnpkGZs.js";var r=(e=>(e.DEFAULT="default",e.PRIMARY="primary",e.WARNING="warning",e.ERROR="error",e.SECONDARY="secondary",e))(r||{});const i=f({__name:"ui-snackbar",props:{title:{},kind:{default:r.DEFAULT}},setup(e){return(t,R)=>(k(),g("div",{class:b(["ui-snackbar flex w-full justify-between rounded-lg p-sm shadow-md",[t.kind===a(r).DEFAULT&&"bg-white",t.kind===a(r).PRIMARY&&"bg-primary text-white",t.kind===a(r).WARNING&&"bg-warning text-white",t.kind===a(r).ERROR&&"bg-error text-white",t.kind===a(r).SECONDARY&&"bg-secondary text-white"]])},[s(t.$slots,"default",{},()=>[o(a(u),{size:a(d).SM,"line-height":""},{default:l(()=>[s(t.$slots,"titleSlot",{},()=>[h(S(t.title),1)])]),_:3},8,["size"]),o(a(u),{size:a(d).XS,"line-height":""},{default:l(()=>[s(t.$slots,"articleSlot")]),_:3},8,["size"])])],2))}});i.__docgenInfo={exportName:"default",displayName:"ui-snackbar",description:"",tags:{},props:[{name:"title",required:!0,type:{name:"string"}},{name:"kind",required:!1,type:{name:"ESnackbarTypes"},defaultValue:{func:!1,value:"ESnackbarTypes.DEFAULT"}}],slots:[{name:"default"},{name:"titleSlot"},{name:"articleSlot"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-snackbar/ui-snackbar.vue"]};const D={title:"Components/ui-snackbar",component:i,argTypes:{kind:{control:{type:"select"},options:Object.values(r),description:"The button kinds"},title:{controls:{type:"text"}},articleSlot:{controls:{type:"text"}}},args:{articleSlot:"This is an article",title:"This is a title",kind:r.DEFAULT}},n={render:e=>({components:{UiSnackbar:i},setup(){return{args:e}},template:`
            <ui-snackbar v-bind="args">
                <template #articleSlot>{{args.articleSlot}}</template>
            </ui-snackbar>
        `})};var c,p,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiSnackbar
    },
    setup() {
      return {
        args
      };
    },
    template: /*html*/\`
            <ui-snackbar v-bind="args">
                <template #articleSlot>{{args.articleSlot}}</template>
            </ui-snackbar>
        \`
  })
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const E=["Default"];export{n as Default,E as __namedExportsOrder,D as default};