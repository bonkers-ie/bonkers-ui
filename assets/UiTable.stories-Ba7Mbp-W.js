import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{g as n}from"./iframe-DYDs02wk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{t as i}from"./classnames-D09xBJOL.js";import{a,n as o,o as s,s as c,t as l}from"./UiTypography-BwoLwmnk.js";import{r as u,t as d}from"./colors-CdX8yQ1z.js";var f;function p(){return(p=t((()=>{f=function(e){return e.DEFAULT=`default`,e.SECONDARY=`secondary`,e.SECONDARY_INVERTED=`secondary-inverted`,e}({})})))()}var m,h,g,_;function v(){return(v=t((()=>{n(),p(),m=e(i(),1),h=r(),g={[f.DEFAULT]:``,[f.SECONDARY]:`[&>tr:nth-child(odd)>td]:bg-secondary-alt-200 rounded-lg`,[f.SECONDARY_INVERTED]:`[&>tr:nth-child(even)>td]:bg-secondary-alt-200 rounded-lg`},_=({kind:e=f.SECONDARY_INVERTED,header:t,className:n,children:r,...i})=>(0,h.jsxs)(`table`,{...i,className:n,children:[t&&(0,h.jsx)(`thead`,{children:t}),(0,h.jsx)(`tbody`,{className:(0,m.default)(`rounded-xl`,g[e]),children:r})]}),_.__docgenInfo={description:``,methods:[],displayName:`UiTable`,props:{kind:{required:!1,tsType:{name:`ETableKind`},description:``,defaultValue:{value:`ETableKind.SECONDARY_INVERTED`,computed:!0}},header:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``}}}})))()}var y,b,x;function S(){return(S=t((()=>{n(),y=e(i(),1),b=r(),x=({children:e,className:t,...n})=>(0,b.jsx)(`tr`,{className:(0,y.default)(`text-center`,`[&>td:last-of-type]:rounded-r-xxs`,`[&>td:last-of-type]:text-right`,`[&>td:first-of-type]:text-left`,`[&>td:first-of-type]:rounded-l-xxs`,t),...n,children:e}),x.__docgenInfo={description:``,methods:[],displayName:`UiTableRow`}})))()}var C,w,T;function E(){return(E=t((()=>{n(),o(),c(),u(),C=e(i(),1),w=r(),T=({align:e,subText:t,weight:n,children:r,className:i,lineHeight:o,...c})=>(0,w.jsx)(`td`,{...c,className:(0,C.default)(`p-sm`,i),children:(0,w.jsxs)(l,{tag:`div`,size:s.SM,align:e,weight:n,lineHeight:o,children:[r,t?(0,w.jsx)(l,{tag:`div`,size:s.XXS,weight:a.SEMI_BOLD,color:d.PRIMARY_ALT_700,className:`flex flex-col gap-xxxs ${r?`pt-sm`:``}`,children:t}):null]})}),T.__docgenInfo={description:``,methods:[],displayName:`UiTableCell`,props:{align:{required:!1,tsType:{name:`ETextAlign`},description:``},subText:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},weight:{required:!1,tsType:{name:`ETextWeight`},description:``},lineHeight:{required:!1,tsType:{name:`boolean`},description:``}}}})))()}var D,O,k,A;function j(){return(j=t((()=>{n(),v(),S(),E(),p(),u(),c(),o(),D=r(),O={title:`Components/UiTable`,component:_,argTypes:{kind:{control:{type:`select`},options:Object.values(f),description:`The row kind`}},args:{kind:f.DEFAULT}},k={render:e=>{let t={text1:`some text`,text2:`some text2`,text3:`some text3`,extraText:!1},n=[t,t,t,t,t,{...t,extraText:!0}],r=(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(`p`,{children:`23.620 cent x`}),(0,D.jsx)(`p`,{children:`4,200 kWh`})]}),i=(0,D.jsx)(x,{children:[`Header 1`,`Header 2`,`Header 3`].map((e,t)=>(0,D.jsx)(T,{weight:a.SEMI_BOLD,children:(0,D.jsx)(l,{tag:`div`,size:s.MD,color:d.PRIMARY_ALT_700,children:e})},t))});return(0,D.jsx)(_,{className:`w-full`,kind:e.kind,header:i,children:n.map((e,t)=>(0,D.jsxs)(x,{children:[(0,D.jsx)(T,{weight:a.SEMI_BOLD,children:e.text1}),(0,D.jsx)(T,{children:e.text2}),(0,D.jsx)(T,{weight:a.SEMI_BOLD,subText:e.extraText&&r,children:e.text3})]},t))})}},A=[`Primary`],k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}}})))()}j();export{k as Primary,A as __namedExportsOrder,O as default};