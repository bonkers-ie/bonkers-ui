import{j as s}from"./jsx-runtime-u17CrQMm.js";import{E as t,a as o,U as i}from"./UiPills-D56-cLj1.js";import"./iframe-CxnpRKWO.js";import"./index-5aTlbOO4.js";import"./UiIcon-uHs-OCfX.js";import"./UiTypography-DjNhRDwz.js";import"./preload-helper-PPVm8Dsz.js";const g={title:"Components/UiPills",component:i,argTypes:{size:{control:{type:"select"},options:Object.values(t),description:"Pills Size"},kind:{control:{type:"select"},options:Object.values(o),description:"Pills Kind"},children:{control:{type:"text"},description:"Pills Children"},fullWidth:{control:{type:"boolean"},description:"Pills Full Width"},justifyCenter:{control:{type:"boolean"},description:"Pills Center Align"},rounded:{control:{type:"boolean"},description:"Pills Rounded"}},args:{kind:o.PRIMARY,size:t.SMALL,children:"Pills",fullWidth:!1,rounded:!1,justifyCenter:!1}},r={render:e=>s.jsx(i,{kind:e.kind,size:e.size,icon:["far","face-smile"],rounded:e.rounded,justifyCenter:e.justifyCenter,fullWidth:e.fullWidth,children:e.children})},n={args:{rounded:!0,children:"Rounded Pill"},render:e=>s.jsx(i,{kind:e.kind,size:e.size,icon:["far","face-smile"],rounded:e.rounded,children:e.children})},d={args:{fullWidth:!0,children:"Full Width Pill"},render:e=>s.jsx(i,{kind:e.kind,size:e.size,icon:["far","face-smile"],fullWidth:e.fullWidth,children:e.children})},l={args:{fullWidth:!0,rounded:!0,justifyCenter:!0,children:"Full Width and Center Aligned",kind:o.ACCENT,size:t.LARGE},render:e=>s.jsx(i,{kind:e.kind,size:e.size,icon:["far","face-smile"],fullWidth:e.fullWidth,rounded:e.rounded,justifyCenter:e.justifyCenter,children:e.children})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <UiPills kind={args.kind} size={args.size} icon={["far", "face-smile"]} rounded={args.rounded} justifyCenter={args.justifyCenter} fullWidth={args.fullWidth}>
            {args.children}
        </UiPills>
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    rounded: true,
    children: "Rounded Pill"
  },
  render: args => <UiPills kind={args.kind} size={args.size} icon={["far", "face-smile"]} rounded={args.rounded}>
            {args.children}
        </UiPills>
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    fullWidth: true,
    children: "Full Width Pill"
  },
  render: args => <UiPills kind={args.kind} size={args.size} icon={["far", "face-smile"]} fullWidth={args.fullWidth}>
            {args.children}
        </UiPills>
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const W=["Primary","Rounded","FullWidth","FullWidthAndCenterAligned"];export{d as FullWidth,l as FullWidthAndCenterAligned,r as Primary,n as Rounded,W as __namedExportsOrder,g as default};
