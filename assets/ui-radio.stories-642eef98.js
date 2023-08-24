import{_ as d}from"./ui-radio-b02b8fd8.js";import{b as s}from"./vue.esm-bundler-1895b176.js";import{E as a}from"./align-e22983df.js";const p={title:"Components/ui-radio",component:d,argTypes:{justify:{control:{type:"select"},options:Object.values(a),description:"The Element justify"},invertOrder:{control:{type:"boolean"},description:"The Element order"},disabled:{control:{type:"boolean"},description:"The Element disabled state"}},args:{slot:"Some text",justify:a.START,invertOrder:!1,disabled:!1}},l=n=>({components:{UiRadio:d},setup(){const t=s("value4");return{args:n,modelValue:t}},template:`
        <div :style="{display: 'grid', gridGap: '3px'}">
            <ui-radio v-bind="args" name="radio" value="value1" v-model="modelValue">
                {{args.slot}}
            </ui-radio>
            <ui-radio v-bind="args" name="radio" value="value2" v-model="modelValue">
                {{args.slot}}
            </ui-radio>
            <ui-radio v-bind="args" name="radio" value="value3" v-model="modelValue">
                {{args.slot}}
            </ui-radio>
            <ui-radio v-bind="args" name="radio" disabled value="value4" v-model="modelValue">
                {{args.slot}}
            </ui-radio>
        </div>
    `}),e=l.bind({});var o,r,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`args => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: {
    UiRadio
  },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
  setup() {
    const modelValue = ref("value4");
    return {
      args,
      modelValue
    };
  },
  // And then the \`args\` are bound to your component with \`v-bind="args"\`
  template: \`
        <div :style="{display: 'grid', gridGap: '3px'}">
            <ui-radio v-bind="args" name="radio" value="value1" v-model="modelValue">
                {{args.slot}}
            </ui-radio>
            <ui-radio v-bind="args" name="radio" value="value2" v-model="modelValue">
                {{args.slot}}
            </ui-radio>
            <ui-radio v-bind="args" name="radio" value="value3" v-model="modelValue">
                {{args.slot}}
            </ui-radio>
            <ui-radio v-bind="args" name="radio" disabled value="value4" v-model="modelValue">
                {{args.slot}}
            </ui-radio>
        </div>
    \`
})`,...(i=(r=e.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const g=["Default"];export{e as Default,g as __namedExportsOrder,p as default};
//# sourceMappingURL=ui-radio.stories-642eef98.js.map