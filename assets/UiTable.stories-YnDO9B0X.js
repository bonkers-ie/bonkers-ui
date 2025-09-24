import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-BAnuDgmU.js";import{c as m}from"./index-Dqd52sbg.js";import{U as p,b as T,E as g,a as x}from"./UiTypography-arX1MY0-.js";import"./preload-helper-PPVm8Dsz.js";var n=(s=>(s.DEFAULT="default",s.SECONDARY="secondary",s.SECONDARY_INVERTED="secondary-inverted",s))(n||{});const E={[n.DEFAULT]:"",[n.SECONDARY]:"[&>tr:nth-child(odd)>td]:bg-secondary-alt-200 rounded-lg",[n.SECONDARY_INVERTED]:"[&>tr:nth-child(even)>td]:bg-secondary-alt-200 rounded-lg"},u=({kind:s=n.SECONDARY_INVERTED,header:t,className:r,children:i,...l})=>e.jsxs("table",{...l,className:r,children:[t&&e.jsx("thead",{children:t}),e.jsx("tbody",{className:m("rounded-xl",E[s]),children:i})]});u.__docgenInfo={description:"",methods:[],displayName:"UiTable",props:{kind:{required:!1,tsType:{name:"ETableKind"},description:"",defaultValue:{value:"ETableKind.SECONDARY_INVERTED",computed:!0}},header:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const h=({children:s,className:t,...r})=>e.jsx("tr",{className:m("text-center","[&>td:last-of-type]:rounded-r-xxs","[&>td:last-of-type]:text-right","[&>td:first-of-type]:text-left","[&>td:first-of-type]:rounded-l-xxs",t),...r,children:s});h.__docgenInfo={description:"",methods:[],displayName:"UiTableRow"};const o=({align:s,subText:t,weight:r,children:i,className:l,lineHeight:a,...d})=>e.jsx("td",{...d,className:m("p-sm",l),children:e.jsxs(p,{tag:"div",size:T.SM,align:s,weight:r,lineHeight:a,children:[i,t?e.jsx(p,{tag:"div",size:T.XXS,weight:x.SEMI_BOLD,color:g.PRIMARY_ALT_700,className:`flex flex-col gap-xxxs ${i?"pt-sm":""}`,children:t}):null]})});o.__docgenInfo={description:"",methods:[],displayName:"UiTableCell",props:{align:{required:!1,tsType:{name:"ETextAlign"},description:""},subText:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},weight:{required:!1,tsType:{name:"ETextWeight"},description:""},lineHeight:{required:!1,tsType:{name:"boolean"},description:""}}};const _={title:"Components/UiTable",component:u,argTypes:{kind:{control:{type:"select"},options:Object.values(n),description:"The row kind"}},args:{kind:n.DEFAULT}},c={render:s=>{const t={text1:"some text",text2:"some text2",text3:"some text3",extraText:!1},r=[t,t,t,t,t,{...t,extraText:!0}],i=e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"23.620 cent x"}),e.jsx("p",{children:"4,200 kWh"})]}),l=e.jsx(h,{children:["Header 1","Header 2","Header 3"].map((a,d)=>e.jsx(o,{weight:x.SEMI_BOLD,children:e.jsx(p,{tag:"div",size:T.MD,color:g.PRIMARY_ALT_700,children:a})},d))});return e.jsx(u,{className:"w-full",kind:s.kind,header:l,children:r.map((a,d)=>e.jsxs(h,{children:[e.jsx(o,{weight:x.SEMI_BOLD,children:a.text1}),e.jsx(o,{children:a.text2}),e.jsx(o,{weight:x.SEMI_BOLD,subText:a.extraText&&i,children:a.text3})]},d))})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => {
    const defaultList = {
      text1: "some text",
      text2: "some text2",
      text3: "some text3",
      extraText: false
    };
    const list = [defaultList, defaultList, defaultList, defaultList, defaultList, {
      ...defaultList,
      extraText: true
    }];
    const subText = <>
                <p>23.620 cent x</p>
                <p>4,200 kWh</p>
            </>;
    const head = <UiTableRow>
                {["Header 1", "Header 2", "Header 3"].map((header, index) => <UiTableCell key={index} weight={ETextWeight.SEMI_BOLD}>
                        <UiTypography tag="div" size={ETypographySizes.MD} color={EColors.PRIMARY_ALT_700}>
                            {header}
                        </UiTypography>
                    </UiTableCell>)}
            </UiTableRow>;
    return <UiTable className="w-full" kind={args.kind} header={head}>
                {list.map((row, index) => <UiTableRow key={index}>
                        <UiTableCell weight={ETextWeight.SEMI_BOLD}>
                            {row.text1}
                        </UiTableCell>
                        <UiTableCell>
                            {row.text2}
                        </UiTableCell>

                        <UiTableCell weight={ETextWeight.SEMI_BOLD} subText={row.extraText && subText}>
                            {row.text3}
                        </UiTableCell>
                    </UiTableRow>)}
            </UiTable>;
  }
}`,...c.parameters?.docs?.source}}};const N=["Primary"];export{c as Primary,N as __namedExportsOrder,_ as default};
