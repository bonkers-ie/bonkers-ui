import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{g as t}from"./iframe-DYDs02wk.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{a as r,i,n as a,r as o,t as s}from"./UiPills-TydMa28I.js";var c,l,u,d,f,p,m;function h(){return(h=e((()=>{a(),r(),t(),c=n(),l={title:`Components/UiPills`,component:s,argTypes:{size:{control:{type:`select`},options:Object.values(i),description:`Pills Size`},kind:{control:{type:`select`},options:Object.values(o),description:`Pills Kind`},children:{control:{type:`text`},description:`Pills Children`},fullWidth:{control:{type:`boolean`},description:`Pills Full Width`},justifyCenter:{control:{type:`boolean`},description:`Pills Center Align`},rounded:{control:{type:`boolean`},description:`Pills Rounded`}},args:{kind:o.PRIMARY,size:i.SMALL,children:`Pills`,fullWidth:!1,rounded:!1,justifyCenter:!1}},u={render:e=>(0,c.jsx)(s,{kind:e.kind,size:e.size,icon:[`far`,`face-smile`],rounded:e.rounded,justifyCenter:e.justifyCenter,fullWidth:e.fullWidth,children:e.children})},d={args:{rounded:!0,children:`Rounded Pill`},render:e=>(0,c.jsx)(s,{kind:e.kind,size:e.size,icon:[`far`,`face-smile`],rounded:e.rounded,children:e.children})},f={args:{fullWidth:!0,children:`Full Width Pill`},render:e=>(0,c.jsx)(s,{kind:e.kind,size:e.size,icon:[`far`,`face-smile`],fullWidth:e.fullWidth,children:e.children})},p={args:{fullWidth:!0,rounded:!0,justifyCenter:!0,children:`Full Width and Center Aligned`,kind:o.ACCENT,size:i.LARGE},render:e=>(0,c.jsx)(s,{kind:e.kind,size:e.size,icon:[`far`,`face-smile`],fullWidth:e.fullWidth,rounded:e.rounded,justifyCenter:e.justifyCenter,children:e.children})},m=[`Primary`,`Rounded`,`FullWidth`,`FullWidthAndCenterAligned`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <UiPills kind={args.kind} size={args.size} icon={["far", "face-smile"]} rounded={args.rounded} justifyCenter={args.justifyCenter} fullWidth={args.fullWidth}>
            {args.children}
        </UiPills>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    rounded: true,
    children: "Rounded Pill"
  },
  render: args => <UiPills kind={args.kind} size={args.size} icon={["far", "face-smile"]} rounded={args.rounded}>
            {args.children}
        </UiPills>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    fullWidth: true,
    children: "Full Width Pill"
  },
  render: args => <UiPills kind={args.kind} size={args.size} icon={["far", "face-smile"]} fullWidth={args.fullWidth}>
            {args.children}
        </UiPills>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    fullWidth: true,
    rounded: true,
    justifyCenter: true,
    children: "Full Width and Center Aligned",
    kind: EBadgeKind.ACCENT,
    size: EBadgeSize.LARGE
  },
  render: args => <UiPills kind={args.kind} size={args.size} icon={["far", "face-smile"]} fullWidth={args.fullWidth} rounded={args.rounded} justifyCenter={args.justifyCenter}>
            {args.children}
        </UiPills>
}`,...p.parameters?.docs?.source}}}})))()}h();export{f as FullWidth,p as FullWidthAndCenterAligned,u as Primary,d as Rounded,m as __namedExportsOrder,l as default};