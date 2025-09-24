import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{E as a,U as c,a as o}from"./UiAccordionItem.base-DXnqEU6W.js";import"./iframe-BV9BvOuM.js";import{U as d,E as l}from"./UiIcon-ChLMJORw.js";import{c as m}from"./index-DRx6VtWy.js";import{U as s,E as t,a as x,b as g}from"./UiTypography-rKwxpQL-.js";const A={title:"Components/UiAccordion",component:c,argTypes:{defaultValue:{description:"The array of values to be opened by default, must match the id of the accordion item",control:{type:"text"}},type:{options:[a.SINGLE,a.MULTI],description:"The type of accordion, single open or multiple open at once",control:{type:"radio"}},handleTrigger:{description:"The function to be called when an accordion item is clicked"},children:{description:"The child content of the accordion"}},args:{defaultValue:[],type:a.SINGLE,children:"Content",handleTrigger:r=>{console.log(`Item: ${r}`)}}},i={render:r=>e.jsxs(c,{className:"col-auto flex flex-col justify-start gap-xs",...r,children:[e.jsxs(o,{className:"overflow-hidden rounded-sm bg-secondary-alt-200",id:"section1",children:[e.jsx(o.Trigger,{className:"flex flex-row items-center justify-between px-sm py-xs",children:p=>e.jsxs(e.Fragment,{children:[e.jsx(s,{color:t.PRIMARY,children:"Item"}),e.jsx("div",{className:m("transition","text-primary-700",p?"rotate-180":"rotate-0"),children:e.jsx(d,{name:["far","face-smile"],size:l.XS})})]})}),e.jsx(o.Content,{children:e.jsx(s,{className:"bg-secondary-alt-300 p-md",color:t.SECONDARY,children:"Content for Item"})})]}),e.jsxs(o,{id:"section2",children:[e.jsx(o.Trigger,{children:"Unstyled Item"}),e.jsx(o.Content,{children:"Content for Unstyled Item"})]})]})},n={render:()=>e.jsx(c,{children:e.jsxs(o,{id:"user-image",children:[e.jsx(o.Trigger,{className:"rounded-md bg-secondary-alt-200 px-xs py-xxs",children:r=>e.jsxs("div",{className:"flex flex-row items-center gap-sm",children:[e.jsx("div",{className:"max-h-xxxl max-w-xxxl overflow-hidden rounded-full bg-secondary-alt-400",children:e.jsx("img",{src:"https://i.pravatar.cc?img=12",alt:"avatar"})}),e.jsxs("div",{className:"grid w-full",children:[e.jsx(s,{lineHeight:!0,weight:x.SEMI_BOLD,color:t.SECONDARY_500,children:"Ms Jane Doe"}),e.jsx(s,{lineHeight:!0,size:g.SM,color:t.SECONDARY_400,children:"jane.doe@bonkers.ie"})]}),e.jsx("div",{className:m("mr-sm h-fit text-secondary-500 transition",r?"rotate-180":""),children:e.jsx(d,{name:["fas","chevron-down"],size:l.SM})})]})}),e.jsx(o.Content,{className:"px-sm py-xs",children:"Content"})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <UiAccordion className="col-auto flex flex-col justify-start gap-xs" {...args}>
                <UiAccordionItem className="overflow-hidden rounded-sm bg-secondary-alt-200" id="section1">
                    <UiAccordionItem.Trigger className="flex flex-row items-center justify-between px-sm py-xs">
                        {isOpen => <>
                                <UiTypography color={EColors.PRIMARY}>Item</UiTypography>
                                {<div className={cx("transition", "text-primary-700", isOpen ? "rotate-180" : "rotate-0")}>
                                        <UiIcon name={["far", "face-smile"]} size={ESize.XS} />
                                    </div>}
                            </>}
                    </UiAccordionItem.Trigger>
                    <UiAccordionItem.Content>
                        <UiTypography className="bg-secondary-alt-300 p-md" color={EColors.SECONDARY}>Content for Item</UiTypography>
                    </UiAccordionItem.Content>
                </UiAccordionItem>

                <UiAccordionItem id="section2">
                    <UiAccordionItem.Trigger>Unstyled Item</UiAccordionItem.Trigger>
                    <UiAccordionItem.Content>
                        Content for Unstyled Item
                    </UiAccordionItem.Content>
                </UiAccordionItem>
            </UiAccordion>;
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <UiAccordion>
                <UiAccordionItem id="user-image">
                    <UiAccordionItem.Trigger className='rounded-md bg-secondary-alt-200 px-xs py-xxs'>
                        {isOpen => <div className="flex flex-row items-center gap-sm">
                                    <div className="max-h-xxxl max-w-xxxl overflow-hidden rounded-full bg-secondary-alt-400">
                                        <img src="https://i.pravatar.cc?img=12" alt="avatar" />
                                    </div>
                                    <div className='grid w-full'>
                                        <UiTypography lineHeight weight={ETextWeight.SEMI_BOLD} color={EColors.SECONDARY_500}>
                                            {"Ms Jane Doe"}
                                        </UiTypography>
                                        <UiTypography lineHeight size={ETypographySizes.SM} color={EColors.SECONDARY_400}>
                                            {"jane.doe@bonkers.ie"}
                                        </UiTypography>

                                    </div>

                                    <div className={cx("mr-sm h-fit text-secondary-500 transition", isOpen ? "rotate-180" : "")}>
                                        <UiIcon name={["fas", "chevron-down"]} size={ESize.SM} />
                                    </div>
                                </div>}
                    </UiAccordionItem.Trigger>
                    <UiAccordionItem.Content className="px-sm py-xs">
                        {"Content"}
                    </UiAccordionItem.Content>
                </UiAccordionItem>
            </UiAccordion>;
  }
}`,...n.parameters?.docs?.source}}};const j=["Basic","Details"];export{i as Basic,n as Details,j as __namedExportsOrder,A as default};
