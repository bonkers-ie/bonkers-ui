import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./index-D4lIrffr.js";import{c as m}from"./index-_oZgBBUR.js";import{U as p,b as T,E as y,a as c}from"./UiTypography-C5uiYeZb.js";var R=(t=>(t.SECONDARY="secondary",t))(R||{}),i=(t=>(t.DEFAULT="default",t.SECONDARY="secondary",t.SECONDARY_INVERTED="secondary-inverted",t))(i||{});const b={[i.DEFAULT]:"",[i.SECONDARY]:"[&>tr:nth-child(odd)>td]:bg-secondary-alt-200",[i.SECONDARY_INVERTED]:"[&>tr:nth-child(even)>td]:bg-secondary-alt-200"},u=({kind:t=i.SECONDARY_INVERTED,header:s,className:n,children:a,...l})=>e.jsxs("table",{...l,className:n,children:[s&&e.jsx("thead",{children:s}),e.jsx("tbody",{className:m("rounded-xl",b[t]),children:a})]});u.__docgenInfo={description:"",methods:[],displayName:"UiTable",props:{kind:{required:!1,tsType:{name:"ETableKind"},description:"",defaultValue:{value:"ETableKind.SECONDARY_INVERTED",computed:!0}},header:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const h=({kind:t,children:s,className:n,...a})=>e.jsx("tr",{className:m("text-center","[&>td:last-of-type]:rounded-r-xxs","[&>td:last-of-type]:text-right","[&>td:first-of-type]:text-left","[&>td:first-of-type]:rounded-l-xxs",{"bg-secondary-alt-200":t===R.SECONDARY},n),...a,children:s});h.__docgenInfo={description:"",methods:[],displayName:"UiTableRow",props:{kind:{required:!1,tsType:{name:"ERowKind"},description:""}}};const d=({align:t,subText:s,weight:n,children:a,className:l,...r})=>e.jsx("td",{...r,children:e.jsxs(p,{tag:"div",size:T.SM,align:t,weight:n,className:m("p-sm",l),children:[a,s?e.jsx(p,{tag:"div",size:T.XXS,weight:c.SEMI_BOLD,color:y.PRIMARY_ALT_700,className:`flex flex-col gap-xxxs ${a?"pt-sm":""}`,children:s}):null]})});d.__docgenInfo={description:"",methods:[],displayName:"UiTableCell",props:{align:{required:!1,tsType:{name:"ETextAlign"},description:""},subText:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},weight:{required:!1,tsType:{name:"ETextWeight"},description:""}}};const w={title:"Components/UiTable",component:u,argTypes:{kind:{control:{type:"select"},options:Object.values(i),description:"The row kind"}},args:{kind:i.DEFAULT}},o={render:t=>{const s={text1:"some text",text2:"some text2",text3:"some text3",extraText:!1},n=[s,s,s,s,s,{...s,extraText:!0}],a=e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"23.620 cent x"}),e.jsx("p",{children:"4,200 kWh"})]}),l=e.jsx(h,{children:["Header 1","Header 2","Header 3"].map((r,x)=>e.jsx(d,{weight:c.SEMI_BOLD,children:e.jsx(p,{tag:"div",size:T.MD,color:y.PRIMARY_ALT_700,children:r})},x))});return e.jsx(u,{className:"w-full",kind:t.kind,header:l,children:n.map((r,x)=>e.jsxs(h,{children:[e.jsx(d,{weight:c.SEMI_BOLD,children:r.text1}),e.jsx(d,{children:r.text2}),e.jsx(d,{weight:c.SEMI_BOLD,subText:r.extraText&&a,children:r.text3})]},x))})}};var E,g,f;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const C=["Primary"];export{o as Primary,C as __namedExportsOrder,w as default};
