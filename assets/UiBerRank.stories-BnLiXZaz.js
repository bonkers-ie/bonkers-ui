import{j as o}from"./jsx-runtime-D_zvdyIk.js";import"./index-DmM0KDA7.js";import{E as e,U as a,d as x,a as d,b as p}from"./UiTypography-BZRJyQsk.js";import{c as C}from"./index-C7T3p30y.js";const s=[{text:"N/A",color:e.SECONDARY_ALT},{text:"G",color:e.ERROR},{text:"F",color:e.WARNING_700},{text:"E2",color:e.WARNING_600},{text:"E1",color:e.WARNING_600},{text:"D2",color:e.WARNING_400},{text:"D1",color:e.WARNING_400},{text:"C3",color:e.PRIMARY_ALT},{text:"C2",color:e.PRIMARY_ALT},{text:"C1",color:e.PRIMARY_ALT},{text:"B3",color:e.PRIMARY_ALT_600},{text:"B2",color:e.PRIMARY_ALT_600},{text:"B1",color:e.PRIMARY_ALT_600},{text:"A3",color:e.PRIMARY_ALT_700},{text:"A2",color:e.PRIMARY_ALT_700},{text:"A1",color:e.PRIMARY_ALT_700}];s.map(({text:r})=>r);var t=(r=>(r.SMALL="small",r.MEDIUM="medium",r))(t||{});const T="_icon_medium_18il7_1",M="_icon_small_18il7_5",u={icon_medium:T,icon_small:M},_={[t.SMALL]:u.icon_small,[t.MEDIUM]:u.icon_medium},R={[t.SMALL]:p.SM,[t.MEDIUM]:p.XXXL},i=({rank:r,size:n=t.SMALL})=>{var c,m;return o.jsxs("div",{className:C("ui-ber-rank","flex"),children:[o.jsxs("div",{className:"relative",children:[o.jsx("svg",{className:C("text-secondary",_[n]),viewBox:"0 0 160 60",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:o.jsx("path",{fillRule:"evenodd",d:"M0.279251 15.36C0.279251 9.9835 0.279251 7.29524 1.32559 5.24169C2.24597 3.43534 3.71459 1.96672 5.52094 1.04634C7.5745 0 10.2627 0 15.6393 0H139.208C143.189 0 145.18 0 146.874 0.666121C148.369 1.25435 149.693 2.20864 150.724 3.44151C151.892 4.83764 152.521 6.72601 153.78 10.5027L158.93 25.9523C159.431 27.4541 159.681 28.205 159.78 28.9732C159.869 29.6549 159.869 30.3451 159.78 31.0268C159.681 31.795 159.431 32.5459 158.93 34.0477L153.78 49.4973C152.521 53.274 151.892 55.1624 150.724 56.5585C149.693 57.7914 148.369 58.7457 146.874 59.3339C145.18 60 143.189 60 139.208 60H15.6393C10.2627 60 7.5745 60 5.52094 58.9537C3.71459 58.0333 2.24597 56.5647 1.32559 54.7583C0.279251 52.7048 0.279251 50.0165 0.279251 44.64V15.36Z",fill:"currentColor"})}),o.jsx(a,{className:"absolute left-0 top-0 flex size-full items-center justify-center",color:e.WHITE,size:R[n],weight:d.BOLD,textTransform:x.UPPERCASE,children:"ber"})]}),o.jsxs("div",{className:"relative",children:[o.jsx(a,{color:((c=s[+r])==null?void 0:c.color)||s[0].color,children:o.jsx("svg",{className:_[n],viewBox:"0 0 106 60",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:o.jsx("path",{fillRule:"evenodd",d:"M3.01833 20.2172C0.74308 13.3915 -0.394547 9.9786 0.287586 7.26202C0.884697 4.88404 2.36903 2.82464 4.43616 1.50619C6.79762 0 10.3951 0 17.5901 0H90.3607C95.7373 0 98.4255 0 100.479 1.04634C102.285 1.96672 103.754 3.43534 104.674 5.24169C105.721 7.29524 105.721 9.9835 105.721 15.36V44.64C105.721 50.0165 105.721 52.7048 104.674 54.7583C103.754 56.5647 102.285 58.0333 100.479 58.9537C98.4255 60 95.7373 60 90.3607 60H17.5901C10.3951 60 6.79762 60 4.43616 58.4938C2.36903 57.1754 0.884697 55.116 0.287586 52.738C-0.394547 50.0214 0.743081 46.6085 3.01834 39.7827L4.93001 34.0477C5.43062 32.5459 5.68093 31.795 5.78035 31.0268C5.86857 30.3451 5.86857 29.6549 5.78035 28.9732C5.68093 28.205 5.43062 27.4541 4.93001 25.9523L3.01833 20.2172Z",fill:"currentColor"})})}),o.jsx(a,{className:"absolute left-0 top-0 flex size-full items-center justify-center",color:e.WHITE,size:R[n],weight:d.BOLD,textTransform:x.UPPERCASE,children:((m=s[+r])==null?void 0:m.text)||s[0].text})]})]})};i.__docgenInfo={description:"",methods:[],displayName:"UiBerRank",props:{rank:{required:!0,tsType:{name:"union",raw:"TBerPropNumber | TBerPropString | number",elements:[{name:"unknown"},{name:"literal",value:"`${TBerPropNumber}`"},{name:"number"}]},description:""},size:{required:!1,tsType:{name:"EBerSize"},description:"",defaultValue:{value:"EBerSize.SMALL",computed:!0}}}};const g={title:"Components/UiBerRank",component:i,argTypes:{rank:{control:{type:"range",min:0,max:15},description:"The Element rank from 0 to 15"},size:{control:{type:"select"},options:Object.values(t),description:"The size of the rank"}},args:{rank:0,size:t.MEDIUM}},l={render:r=>o.jsx(i,{rank:r.rank,size:r.size})};var A,f,L;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => <UiBerRank rank={args.rank} size={args.size} />
}`,...(L=(f=l.parameters)==null?void 0:f.docs)==null?void 0:L.source}}};const P=["Primary"];export{l as Primary,P as __namedExportsOrder,g as default};
