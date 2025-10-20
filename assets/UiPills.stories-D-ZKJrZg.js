import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{E as a,a as c,U as n}from"./UiPills-BsQJLKqj.js";import"./iframe-BZ5EBhaA.js";import{U as t,E as o}from"./UiIcon-Bh6Qhz4-.js";import"./index-DDEMp-JE.js";import"./UiTypography-iav5-gri.js";import"./preload-helper-PPVm8Dsz.js";const W={title:"Components/UiPills",component:n,argTypes:{size:{control:{type:"select"},options:Object.values(a),description:"Pills Size"},kind:{control:{type:"select"},options:Object.values(c),description:"Pills Kind"},children:{control:{type:"text"},description:"Pills Children"},fullWidth:{control:{type:"boolean"},description:"Pills Full Width"},justifyCenter:{control:{type:"boolean"},description:"Pills Center Align"},rounded:{control:{type:"boolean"},description:"Pills Rounded"}},args:{kind:c.PRIMARY,size:a.SMALL,children:"Pills",fullWidth:!1,rounded:!1,justifyCenter:!1}},r={render:e=>i.jsx(n,{kind:e.kind,size:e.size,icon:i.jsx(t,{name:["far","face-smile"],size:o.XS}),rounded:e.rounded,justifyCenter:e.justifyCenter,fullWidth:e.fullWidth,children:e.children})},d={args:{rounded:!0,children:"Rounded Pill"},render:e=>i.jsx(n,{kind:e.kind,size:e.size,icon:i.jsx(t,{name:["far","face-smile"],size:o.XS}),rounded:e.rounded,children:e.children})},s={args:{fullWidth:!0,children:"Full Width Pill"},render:e=>i.jsx(n,{kind:e.kind,size:e.size,icon:i.jsx(t,{name:["far","face-smile"],size:o.XS}),fullWidth:e.fullWidth,children:e.children})},l={args:{fullWidth:!0,rounded:!0,justifyCenter:!0,children:"Full Width and Center Aligned",kind:c.ACCENT,size:a.LARGE},render:e=>i.jsx(n,{kind:e.kind,size:e.size,icon:i.jsx(t,{name:["far","face-smile"],size:o.XS}),fullWidth:e.fullWidth,rounded:e.rounded,justifyCenter:e.justifyCenter,children:e.children})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <UiPills kind={args.kind} size={args.size} icon={<UiIcon name={["far", "face-smile"]} size={ESize.XS} />} rounded={args.rounded} justifyCenter={args.justifyCenter} fullWidth={args.fullWidth}>
            {args.children}
        </UiPills>
}`,...r.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    rounded: true,
    children: "Rounded Pill"
  },
  render: args => <UiPills kind={args.kind} size={args.size} icon={<UiIcon name={["far", "face-smile"]} size={ESize.XS} />} rounded={args.rounded}>
            {args.children}
        </UiPills>
}`,...d.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    fullWidth: true,
    children: "Full Width Pill"
  },
  render: args => <UiPills kind={args.kind} size={args.size} icon={<UiIcon name={["far", "face-smile"]} size={ESize.XS} />} fullWidth={args.fullWidth}>
            {args.children}
        </UiPills>
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    fullWidth: true,
    rounded: true,
    justifyCenter: true,
    children: "Full Width and Center Aligned",
    kind: EBadgeKind.ACCENT,
    size: EBadgeSize.LARGE
  },
  render: args => <UiPills kind={args.kind} size={args.size} icon={<UiIcon name={["far", "face-smile"]} size={ESize.XS} />} fullWidth={args.fullWidth} rounded={args.rounded} justifyCenter={args.justifyCenter}>
            {args.children}
        </UiPills>
}`,...l.parameters?.docs?.source}}};const j=["Primary","Rounded","FullWidth","FullWidthAndCenterAligned"];export{s as FullWidth,l as FullWidthAndCenterAligned,r as Primary,d as Rounded,j as __namedExportsOrder,W as default};
