import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{g as n}from"./iframe-DYDs02wk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{a as i,i as a,n as o,o as s,r as c,t as l}from"./UiAccordionItem.base-GcMCs7rd.js";import{t as u}from"./classnames-D09xBJOL.js";import{a as d,n as f,o as p,s as m,t as h}from"./UiTypography-BwoLwmnk.js";import{r as g,t as _}from"./colors-CdX8yQ1z.js";import{i as v,n as y,r as b,t as x}from"./UiIcon-DFqNdBsp.js";var S,C,w,T,E,D;function O(){return(O=t((()=>{a(),o(),g(),m(),f(),y(),n(),s(),v(),S=e(u(),1),C=r(),w={title:`Components/UiAccordion`,component:c,argTypes:{defaultValue:{description:`The array of values to be opened by default, must match the id of the accordion item`,control:{type:`text`}},type:{options:[i.SINGLE,i.MULTI],description:`The type of accordion, single open or multiple open at once`,control:{type:`radio`}},handleTrigger:{description:`The function to be called when an accordion item is clicked`},children:{description:`The child content of the accordion`}},args:{defaultValue:[],type:i.SINGLE,children:`Content`,handleTrigger:e=>{console.log(`Item: ${e}`)}}},T={render:e=>(0,C.jsxs)(c,{className:`col-auto flex flex-col justify-start gap-xs`,...e,children:[(0,C.jsxs)(l,{className:`overflow-hidden rounded-sm bg-secondary-alt-200`,id:`section1`,children:[(0,C.jsx)(l.Trigger,{className:`flex flex-row items-center justify-between px-sm py-xs`,children:e=>(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(h,{color:_.PRIMARY,children:`Item`}),(0,C.jsx)(`div`,{className:(0,S.default)(`transition`,`text-primary-700`,e?`rotate-180`:`rotate-0`),children:(0,C.jsx)(x,{name:[`far`,`face-smile`],size:b.XS})})]})}),(0,C.jsx)(l.Content,{children:(0,C.jsx)(h,{className:`bg-secondary-alt-300 p-md`,color:_.SECONDARY,children:`Content for Item`})})]}),(0,C.jsxs)(l,{id:`section2`,children:[(0,C.jsx)(l.Trigger,{children:`Unstyled Item`}),(0,C.jsx)(l.Content,{children:`Content for Unstyled Item`})]})]})},E={render:()=>(0,C.jsx)(c,{children:(0,C.jsxs)(l,{id:`user-image`,children:[(0,C.jsx)(l.Trigger,{className:`rounded-md bg-secondary-alt-200 px-xs py-xxs`,children:e=>(0,C.jsxs)(`div`,{className:`flex flex-row items-center gap-sm`,children:[(0,C.jsx)(`div`,{className:`max-h-xxxl max-w-xxxl overflow-hidden rounded-full bg-secondary-alt-400`,children:(0,C.jsx)(`img`,{src:`https://i.pravatar.cc?img=12`,alt:`avatar`})}),(0,C.jsxs)(`div`,{className:`grid w-full`,children:[(0,C.jsx)(h,{lineHeight:!0,weight:d.SEMI_BOLD,color:_.SECONDARY_500,children:`Ms Jane Doe`}),(0,C.jsx)(h,{lineHeight:!0,size:p.SM,color:_.SECONDARY_400,children:`jane.doe@bonkers.ie`})]}),(0,C.jsx)(`div`,{className:(0,S.default)(`mr-sm h-fit text-secondary-500 transition`,e?`rotate-180`:``),children:(0,C.jsx)(x,{name:[`fas`,`chevron-down`],size:b.SM})})]})}),(0,C.jsx)(l.Content,{className:`px-sm py-xs`,children:`Content`})]})})},D=[`Basic`,`Details`],T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}}})))()}O();export{T as Basic,E as Details,D as __namedExportsOrder,w as default};