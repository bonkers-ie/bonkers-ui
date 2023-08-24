import{_ as r,E as s,a as t}from"./ui-badge-bb6574de.js";import"./vue.esm-bundler-1895b176.js";import"./ui-icon-e8740ef7.js";import"./ui-typography-f714da9c.js";const g={title:"Components/ui-badge",component:r,argTypes:{kind:{control:{type:"select"},options:Object.values(s),description:"The Element kinds"},size:{control:{type:"select"},options:Object.values(t),description:"The Element size"}},args:{slot:"default text",kind:s.PRIMARY,size:t.SMALL}},l=n=>({components:{UiBadge:r},setup(){return{args:n}},template:`
        <ui-badge :icon="['far', 'face-smile']" v-bind="args" class="inline-flex">
            {{ args.slot }}
        </ui-badge>
    `}),e=l.bind({});var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`args => ({
  components: {
    UiBadge
  },
  setup() {
    return {
      args
    };
  },
  template: /*html*/\`
        <ui-badge :icon="['far', 'face-smile']" v-bind="args" class="inline-flex">
            {{ args.slot }}
        </ui-badge>
    \`
})`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const u=["Default"];export{e as Default,u as __namedExportsOrder,g as default};
//# sourceMappingURL=ui-badge.stories-07e1c9a6.js.map