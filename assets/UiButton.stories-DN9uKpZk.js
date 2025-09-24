import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-DYyfGtcq.js";import{c as y}from"./index-DcIzYSjZ.js";import{U as t,E as a}from"./UiIcon-SE8HipX_.js";var i=(r=>(r.PRIMARY_BRAND="primary-brand",r.PRIMARY_ACCENT="primary-accent",r.PRIMARY_NEUTRAL="primary-neutral",r.PRIMARY_DESTRUCTIVE="primary-destructive",r.PRIMARY_INVERSE="primary-inverse",r.SECONDARY_BRAND="secondary-brand",r.SECONDARY_ACCENT="secondary-accent",r.SECONDARY_NEUTRAL="secondary-neutral",r.SECONDARY_DESTRUCTIVE="secondary-destructive",r.SECONDARY_INVERSE="secondary-inverse",r.TERTIARY_BRAND="tertiary-brand",r.TERTIARY_ACCENT="tertiary-accent",r.TERTIARY_NEUTRAL="tertiary-neutral",r.TERTIARY_DESTRUCTIVE="tertiary-destructive",r.TERTIARY_INVERSE="tertiary-inverse",r))(i||{}),s=(r=>(r.DEFAULT="default",r.SMALL="sm",r.MEDIUM="md",r.LARGE="lg",r.XLARGE="xl",r))(s||{}),d=(r=>(r.DEFAULT="default",r.BOLD="bold",r))(d||{});const T="_UiButton_1dpbh_1",f={UiButton:T},m={[i.PRIMARY_BRAND]:`
		bg-primary-600
		border
		border-primary-600
		shadow-md
		text-white

		hover:bg-primary-700
		hover:border-primary-700
		active:bg-primary-800
		active:border-primary-800
		disabled:bg-secondary-alt-300
		disabled:border-transparent
	`,[i.PRIMARY_ACCENT]:`
		bg-primary-800
		border
		border-primary-800
		shadow-md
		text-white

		hover:bg-primary-700
		hover:border-primary-700
		active:bg-primary-800
		active:border-primary-800
		active:text-primary-100
		disabled:bg-secondary-alt-300
		disabled:border-transparent
	`,[i.PRIMARY_NEUTRAL]:`
		bg-secondary-500
		border
		border-secondary-500
		shadow-md
		text-white

		hover:bg-secondary-400
		hover:border-secondary-400
		active:bg-secondary-500
		active:border-secondary-500
		active:text-secondary-alt-300
		disabled:bg-secondary-alt-300
		disabled:border-transparent
	`,[i.PRIMARY_DESTRUCTIVE]:`
		bg-error-500
		border
		border-error-500
		shadow-md
		text-white

		hover:bg-error-600
		hover:border-error-600
		active:bg-error-700
		active:border-error-700
		disabled:bg-secondary-alt-300
		disabled:border-transparent
	`,[i.PRIMARY_INVERSE]:`
		bg-white
		border
		border-secondary-500
		shadow-md
		text-secondary-500

		hover:border-secondary-400
		hover:text-secondary-400
		active:bg-secondary-alt-300
		disabled:bg-secondary-alt-700
		disabled:border-secondary-alt-700
	`,[i.SECONDARY_BRAND]:`
		bg-white
		border
		border-primary-600
		shadow-md
		text-primary-600

		hover:bg-primary-50
		hover:border-primary-700
		hover:text-primary-700
		active:bg-primary-100
		active:border-primary-700
		active:text-primary-700
		disabled:bg-white
		disabled:border-secondary-alt-300
		disabled:shadow-none
		disabled:text-secondary-alt-300
	`,[i.SECONDARY_ACCENT]:`
		bg-white
		border
		border-primary-800
		shadow-md
		text-primary-800

		hover:bg-primary-50
		hover:border-primary-700
		hover:text-primary-700
		active:bg-primary-100
		active:border-primary-800
		active:text-primary-800
		disabled:bg-secondary-alt-300
		disabled:border-transparent
	`,[i.SECONDARY_NEUTRAL]:`
		bg-white
		border
		border-secondary-500
		shadow-md
		text-secondary-500

		hover:bg-secondary-alt-200
		hover:border-secondary-400
		hover:text-secondary-400
		active:bg-secondary-alt-300
		active:border-secondary-500
		active:text-secondary-500
		disabled:bg-secondary-alt-300
		disabled:border-transparent
	`,[i.SECONDARY_DESTRUCTIVE]:`
		bg-white
		border
		border-error-500
		shadow-md
		text-error-500

		hover:bg-error-100
		hover:border-error-600
		hover:text-error-600
		active:bg-error-200
		active:border-error-700
		active:text-error-700
		disabled:bg-secondary-alt-300
		disabled:border-transparent
	`,[i.SECONDARY_INVERSE]:`
		bg-transparent
		border
		border-white
		shadow-md
		text-white

		hover:bg-secondary-500
		hover:border-secondary-alt-300
		hover:text-secondary-alt-300
		active:bg-secondary-400
		active:border-white
		active:text-white
		disabled:bg-secondary-alt-300
		disabled:border-transparent
	`,[i.TERTIARY_BRAND]:`
		bg-transparent
		border
		border-transparent
		text-primary-600
		underline

		hover:bg-primary-50
		hover:no-underline
		active:bg-primary-100
		active:text-primary-700
		disabled:bg-transparent
		disabled:text-secondary-alt-300
		disabled:underline
	`,[i.TERTIARY_ACCENT]:`
		bg-transparent
		border
		border-transparent
		text-primary-800
		underline

		hover:bg-primary-50
		hover:no-underline
		hover:text-primary-700
		active:bg-primary-100
		active:text-primary-800
		disabled:bg-transparent
		disabled:text-secondary-alt-300
		disabled:underline
	`,[i.TERTIARY_NEUTRAL]:`
		bg-transparent
		border
		border-transparent
		text-secondary-500
		underline

		hover:bg-secondary-alt-200
		hover:no-underline
		hover:text-secondary-400
		active:bg-secondary-alt-300
		active:text-secondary-500
		disabled:bg-transparent
		disabled:text-secondary-alt-300
		disabled:underline
	`,[i.TERTIARY_DESTRUCTIVE]:`
		bg-transparent
		border
		border-transparent
		text-error-500
		underline

		hover:bg-error-100
		hover:no-underline
		hover:text-error-600
		active:bg-error-200
		active:text-error-700
		disabled:bg-transparent
		disabled:text-secondary-alt-300
		disabled:underline
	`,[i.TERTIARY_INVERSE]:`
		bg-transparent
		border
		border-transparent
		text-white
		underline

		hover:bg-secondary-500
		hover:no-underline
		hover:text-secondary-alt-300
		active:bg-secondary-400
		active-text-white
		disabled:bg-transparent
		disabled:text-secondary-alt-700
		disabled:underline
	`},p=r=>r===i.PRIMARY_INVERSE||r===i.SECONDARY_INVERSE||r===i.TERTIARY_INVERSE,R={background:r=>p(r)?"focus-visible:before:bg-secondary-500":"focus-visible:before:bg-white",border:r=>p(r)?"focus-visible:before:border-secondary-alt-400":"focus-visible:before:border-primary-600"},h={[s.SMALL]:"px-xs py-xxs rounded-lg focus-visible:before:rounded-xl text-sm",[s.MEDIUM]:"p-sm rounded-lg focus-visible:before:rounded-xl text-md",[s.LARGE]:"px-md py-sm rounded-xl focus-visible:before:rounded-2xl text-xl",[s.XLARGE]:"px-lg py-md rounded-xl focus-visible:before:rounded-2xl text-2xl",[s.DEFAULT]:"px-sm py-sm rounded-lg focus-visible:before:rounded-xl"},B={[d.DEFAULT]:"font-medium",[d.BOLD]:"font-bold"},n=({kind:r=i.PRIMARY_BRAND,size:C=s.DEFAULT,fullWidth:E=!1,disabled:c=!1,children:u,weight:b=d.BOLD,className:I,onClick:x,...A})=>e.jsx("button",{...A,onClick:x,className:y(f.UiButton,"cursor-pointer","touch-manipulation","whitespace-nowrap","leading-none","flex","gap-xs","justify-center","items-center","relative","transition-all","focus-visible:before:border-2","focus-visible:before:absolute","focus-visible:before:-translate-x-1/2","focus-visible:before:-translate-y-1/2","focus-visible:before:left-1/2","focus-visible:before:top-1/2","focus-visible:before:inset-0","focus-visible:before:z-[-1]","focus-visible:before:w-[calc(100%+12px)]","focus-visible:before:h-[calc(100%+10px)]",R.background(r),R.border(r),m[r],h[C],B[b],{"w-full":E,"pointer-events-none":c},I),disabled:c,children:u});n.__docgenInfo={description:"",methods:[],displayName:"UiButton",props:{kind:{required:!1,tsType:{name:"EButtonTypes"},description:"",defaultValue:{value:"EButtonTypes.PRIMARY_BRAND",computed:!0}},size:{required:!1,tsType:{name:"EButtonSizes"},description:"",defaultValue:{value:"EButtonSizes.DEFAULT",computed:!0}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},weight:{required:!1,tsType:{name:"EButtonWeight"},description:"",defaultValue:{value:"EButtonWeight.BOLD",computed:!0}},className:{required:!1,tsType:{name:"string"},description:""},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};const g={title:"Components/UiButton",component:n,argTypes:{kind:{control:{type:"select"},options:Object.values(i),description:"Button Type"},size:{control:{type:"select"},options:Object.values(s),description:"Button Size"},fullWidth:{control:{type:"boolean"},description:"Button Width Full"},disabled:{control:{type:"boolean"},description:"Button Disabled"},weight:{control:{type:"select"},options:Object.values(d),description:"Button Weight"},children:{control:{type:"text"},description:"Text or component"}},args:{children:"Button",kind:i.PRIMARY_BRAND,size:s.DEFAULT,fullWidth:!1,disabled:!1,weight:d.BOLD}},o={},l={render:r=>e.jsxs("div",{className:"flex flex-col gap-lg",children:[e.jsxs("div",{className:"flex flex-col gap-sm",children:[e.jsxs("div",{className:"flex gap-sm",children:[e.jsx(n,{...r,kind:i.PRIMARY_BRAND,children:e.jsx("p",{children:"CLICK"})}),e.jsx(n,{...r,kind:i.PRIMARY_ACCENT,children:e.jsx("p",{children:"CLICK"})}),e.jsx(n,{...r,kind:i.PRIMARY_NEUTRAL,children:e.jsx("p",{children:"CLICK"})}),e.jsx(n,{...r,kind:i.PRIMARY_DESTRUCTIVE,children:e.jsx("p",{children:"CLICK"})}),e.jsx(n,{...r,kind:i.PRIMARY_INVERSE,children:e.jsx("p",{children:"CLICK"})}),e.jsx(n,{...r,kind:i.PRIMARY_BRAND,disabled:!0,children:e.jsx("p",{children:"CLICK"})})]}),e.jsxs("div",{className:"flex gap-sm",children:[e.jsx(n,{...r,kind:i.SECONDARY_BRAND,children:e.jsx("p",{children:"CLICK"})}),e.jsx(n,{...r,kind:i.SECONDARY_ACCENT,children:e.jsx("p",{children:"CLICK"})}),e.jsx(n,{...r,kind:i.SECONDARY_NEUTRAL,children:e.jsx("p",{children:"CLICK"})}),e.jsx(n,{...r,kind:i.SECONDARY_DESTRUCTIVE,children:e.jsx("p",{children:"CLICK"})}),e.jsx(n,{...r,kind:i.SECONDARY_INVERSE,children:e.jsx("p",{children:"CLICK"})}),e.jsx(n,{...r,kind:i.SECONDARY_BRAND,disabled:!0,children:e.jsx("p",{children:"CLICK"})})]}),e.jsxs("div",{className:"flex gap-sm",children:[e.jsx(n,{...r,kind:i.TERTIARY_BRAND,children:e.jsx("p",{children:"CLICK"})}),e.jsx(n,{...r,kind:i.TERTIARY_ACCENT,children:e.jsx("p",{children:"CLICK"})}),e.jsx(n,{...r,kind:i.TERTIARY_NEUTRAL,children:e.jsx("p",{children:"CLICK"})}),e.jsx(n,{...r,kind:i.TERTIARY_DESTRUCTIVE,children:e.jsx("p",{children:"CLICK"})}),e.jsx(n,{...r,kind:i.TERTIARY_INVERSE,children:e.jsx("p",{children:"CLICK"})}),e.jsx(n,{...r,kind:i.TERTIARY_BRAND,disabled:!0,children:e.jsx("p",{children:"CLICK"})})]})]}),e.jsxs("div",{className:"flex flex-col gap-sm",children:[e.jsxs("div",{className:"flex gap-sm",children:[e.jsxs(n,{...r,kind:i.PRIMARY_BRAND,children:[e.jsx(t,{name:["far","face-angry"],size:a.MD}),e.jsx("p",{children:"CLICK"})]}),e.jsxs(n,{...r,kind:i.PRIMARY_ACCENT,children:[e.jsx(t,{name:["far","face-angry"],size:a.MD}),e.jsx("p",{children:"CLICK"})]}),e.jsxs(n,{...r,kind:i.PRIMARY_NEUTRAL,children:[e.jsx(t,{name:["far","face-angry"],size:a.MD}),e.jsx("p",{children:"CLICK"})]}),e.jsxs(n,{...r,kind:i.PRIMARY_DESTRUCTIVE,children:[e.jsx(t,{name:["far","face-angry"],size:a.MD}),e.jsx("p",{children:"CLICK"})]}),e.jsxs(n,{...r,kind:i.PRIMARY_INVERSE,children:[e.jsx(t,{name:["far","face-angry"],size:a.MD}),e.jsx("p",{children:"CLICK"})]}),e.jsxs(n,{...r,kind:i.PRIMARY_BRAND,disabled:!0,children:[e.jsx(t,{name:["far","face-angry"],size:a.MD}),e.jsx("p",{children:"CLICK"})]})]}),e.jsxs("div",{className:"flex gap-sm",children:[e.jsxs(n,{...r,kind:i.SECONDARY_BRAND,children:[e.jsx(t,{name:["far","face-angry"],size:a.MD}),e.jsx("p",{children:"CLICK"})]}),e.jsxs(n,{...r,kind:i.SECONDARY_ACCENT,children:[e.jsx(t,{name:["far","face-angry"],size:a.MD}),e.jsx("p",{children:"CLICK"})]}),e.jsxs(n,{...r,kind:i.SECONDARY_NEUTRAL,children:[e.jsx(t,{name:["far","face-angry"],size:a.MD}),e.jsx("p",{children:"CLICK"})]}),e.jsxs(n,{...r,kind:i.SECONDARY_DESTRUCTIVE,children:[e.jsx(t,{name:["far","face-angry"],size:a.MD}),e.jsx("p",{children:"CLICK"})]}),e.jsxs(n,{...r,kind:i.SECONDARY_INVERSE,children:[e.jsx(t,{name:["far","face-angry"],size:a.MD}),e.jsx("p",{children:"CLICK"})]}),e.jsxs(n,{...r,kind:i.SECONDARY_BRAND,disabled:!0,children:[e.jsx(t,{name:["far","face-angry"],size:a.MD}),e.jsx("p",{children:"CLICK"})]})]}),e.jsxs("div",{className:"flex gap-sm",children:[e.jsxs(n,{...r,kind:i.TERTIARY_BRAND,children:[e.jsx(t,{name:["far","face-angry"],size:a.MD}),e.jsx("p",{children:"CLICK"})]}),e.jsxs(n,{...r,kind:i.TERTIARY_ACCENT,children:[e.jsx(t,{name:["far","face-angry"],size:a.MD}),e.jsx("p",{children:"CLICK"})]}),e.jsxs(n,{...r,kind:i.TERTIARY_NEUTRAL,children:[e.jsx(t,{name:["far","face-angry"],size:a.MD}),e.jsx("p",{children:"CLICK"})]}),e.jsxs(n,{...r,kind:i.TERTIARY_DESTRUCTIVE,children:[e.jsx(t,{name:["far","face-angry"],size:a.MD}),e.jsx("p",{children:"CLICK"})]}),e.jsxs(n,{...r,kind:i.TERTIARY_INVERSE,children:[e.jsx(t,{name:["far","face-angry"],size:a.MD}),e.jsx("p",{children:"CLICK"})]}),e.jsxs(n,{...r,kind:i.TERTIARY_BRAND,disabled:!0,children:[e.jsx(t,{name:["far","face-angry"],size:a.MD}),e.jsx("p",{children:"CLICK"})]})]})]}),e.jsxs("div",{className:"flex flex-col gap-sm",children:[e.jsx(n,{...r,kind:i.PRIMARY_BRAND,fullWidth:!0,children:e.jsx("p",{children:"CLICK"})}),e.jsx(n,{...r,kind:i.SECONDARY_BRAND,fullWidth:!0,children:e.jsx("p",{children:"CLICK"})}),e.jsx(n,{...r,kind:i.TERTIARY_BRAND,fullWidth:!0,children:e.jsx("p",{children:"CLICK"})})]})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <div className='flex flex-col gap-lg'>
            <div className='flex flex-col gap-sm'>
                <div className='flex gap-sm'>
                    <UiButton {...args} kind={EButtonTypes.PRIMARY_BRAND}>
                        <p>CLICK</p>
                    </UiButton>
                    <UiButton {...args} kind={EButtonTypes.PRIMARY_ACCENT}>
                        <p>CLICK</p>
                    </UiButton>
                    <UiButton {...args} kind={EButtonTypes.PRIMARY_NEUTRAL}>
                        <p>CLICK</p>
                    </UiButton>
                    <UiButton {...args} kind={EButtonTypes.PRIMARY_DESTRUCTIVE}>
                        <p>CLICK</p>
                    </UiButton>
                    <UiButton {...args} kind={EButtonTypes.PRIMARY_INVERSE}>
                        <p>CLICK</p>
                    </UiButton>
                    <UiButton {...args} kind={EButtonTypes.PRIMARY_BRAND} disabled>
                        <p>CLICK</p>
                    </UiButton>
                </div>
                <div className='flex gap-sm'>
                    <UiButton {...args} kind={EButtonTypes.SECONDARY_BRAND}>
                        <p>CLICK</p>
                    </UiButton>
                    <UiButton {...args} kind={EButtonTypes.SECONDARY_ACCENT}>
                        <p>CLICK</p>
                    </UiButton>
                    <UiButton {...args} kind={EButtonTypes.SECONDARY_NEUTRAL}>
                        <p>CLICK</p>
                    </UiButton>
                    <UiButton {...args} kind={EButtonTypes.SECONDARY_DESTRUCTIVE}>
                        <p>CLICK</p>
                    </UiButton>
                    <UiButton {...args} kind={EButtonTypes.SECONDARY_INVERSE}>
                        <p>CLICK</p>
                    </UiButton>
                    <UiButton {...args} kind={EButtonTypes.SECONDARY_BRAND} disabled>
                        <p>CLICK</p>
                    </UiButton>
                </div>
                <div className='flex gap-sm'>
                    <UiButton {...args} kind={EButtonTypes.TERTIARY_BRAND}>
                        <p>CLICK</p>
                    </UiButton>
                    <UiButton {...args} kind={EButtonTypes.TERTIARY_ACCENT}>
                        <p>CLICK</p>
                    </UiButton>
                    <UiButton {...args} kind={EButtonTypes.TERTIARY_NEUTRAL}>
                        <p>CLICK</p>
                    </UiButton>
                    <UiButton {...args} kind={EButtonTypes.TERTIARY_DESTRUCTIVE}>
                        <p>CLICK</p>
                    </UiButton>
                    <UiButton {...args} kind={EButtonTypes.TERTIARY_INVERSE}>
                        <p>CLICK</p>
                    </UiButton>
                    <UiButton {...args} kind={EButtonTypes.TERTIARY_BRAND} disabled>
                        <p>CLICK</p>
                    </UiButton>
                </div>
            </div>
            <div className='flex flex-col gap-sm'>
                <div className='flex gap-sm'>
                    <UiButton {...args} kind={EButtonTypes.PRIMARY_BRAND}>
                        <UiIcon name={["far", "face-angry"]} size={ESize.MD} />
                        <p>CLICK</p>
                    </UiButton>
                    <UiButton {...args} kind={EButtonTypes.PRIMARY_ACCENT}>
                        <UiIcon name={["far", "face-angry"]} size={ESize.MD} />
                        <p>CLICK</p>
                    </UiButton>
                    <UiButton {...args} kind={EButtonTypes.PRIMARY_NEUTRAL}>
                        <UiIcon name={["far", "face-angry"]} size={ESize.MD} />
                        <p>CLICK</p>
                    </UiButton>
                    <UiButton {...args} kind={EButtonTypes.PRIMARY_DESTRUCTIVE}>
                        <UiIcon name={["far", "face-angry"]} size={ESize.MD} />
                        <p>CLICK</p>
                    </UiButton>
                    <UiButton {...args} kind={EButtonTypes.PRIMARY_INVERSE}>
                        <UiIcon name={["far", "face-angry"]} size={ESize.MD} />
                        <p>CLICK</p>
                    </UiButton>
                    <UiButton {...args} kind={EButtonTypes.PRIMARY_BRAND} disabled>
                        <UiIcon name={["far", "face-angry"]} size={ESize.MD} />
                        <p>CLICK</p>
                    </UiButton>
                </div>
                <div className='flex gap-sm'>
                    <UiButton {...args} kind={EButtonTypes.SECONDARY_BRAND}>
                        <UiIcon name={["far", "face-angry"]} size={ESize.MD} />
                        <p>CLICK</p>
                    </UiButton>
                    <UiButton {...args} kind={EButtonTypes.SECONDARY_ACCENT}>
                        <UiIcon name={["far", "face-angry"]} size={ESize.MD} />
                        <p>CLICK</p>
                    </UiButton>
                    <UiButton {...args} kind={EButtonTypes.SECONDARY_NEUTRAL}>
                        <UiIcon name={["far", "face-angry"]} size={ESize.MD} />
                        <p>CLICK</p>
                    </UiButton>
                    <UiButton {...args} kind={EButtonTypes.SECONDARY_DESTRUCTIVE}>
                        <UiIcon name={["far", "face-angry"]} size={ESize.MD} />
                        <p>CLICK</p>
                    </UiButton>
                    <UiButton {...args} kind={EButtonTypes.SECONDARY_INVERSE}>
                        <UiIcon name={["far", "face-angry"]} size={ESize.MD} />
                        <p>CLICK</p>
                    </UiButton>
                    <UiButton {...args} kind={EButtonTypes.SECONDARY_BRAND} disabled>
                        <UiIcon name={["far", "face-angry"]} size={ESize.MD} />
                        <p>CLICK</p>
                    </UiButton>
                </div>
                <div className='flex gap-sm'>
                    <UiButton {...args} kind={EButtonTypes.TERTIARY_BRAND}>
                        <UiIcon name={["far", "face-angry"]} size={ESize.MD} />
                        <p>CLICK</p>
                    </UiButton>
                    <UiButton {...args} kind={EButtonTypes.TERTIARY_ACCENT}>
                        <UiIcon name={["far", "face-angry"]} size={ESize.MD} />
                        <p>CLICK</p>
                    </UiButton>
                    <UiButton {...args} kind={EButtonTypes.TERTIARY_NEUTRAL}>
                        <UiIcon name={["far", "face-angry"]} size={ESize.MD} />
                        <p>CLICK</p>
                    </UiButton>
                    <UiButton {...args} kind={EButtonTypes.TERTIARY_DESTRUCTIVE}>
                        <UiIcon name={["far", "face-angry"]} size={ESize.MD} />
                        <p>CLICK</p>
                    </UiButton>
                    <UiButton {...args} kind={EButtonTypes.TERTIARY_INVERSE}>
                        <UiIcon name={["far", "face-angry"]} size={ESize.MD} />
                        <p>CLICK</p>
                    </UiButton>
                    <UiButton {...args} kind={EButtonTypes.TERTIARY_BRAND} disabled>
                        <UiIcon name={["far", "face-angry"]} size={ESize.MD} />
                        <p>CLICK</p>
                    </UiButton>
                </div>
            </div>
            <div className='flex flex-col gap-sm'>
                <UiButton {...args} kind={EButtonTypes.PRIMARY_BRAND} fullWidth>
                    <p>CLICK</p>
                </UiButton>
                <UiButton {...args} kind={EButtonTypes.SECONDARY_BRAND} fullWidth>
                    <p>CLICK</p>
                </UiButton>
                <UiButton {...args} kind={EButtonTypes.TERTIARY_BRAND} fullWidth>
                    <p>CLICK</p>
                </UiButton>
            </div>
        </div>
}`,...l.parameters?.docs?.source}}};const _=["Primary","Variants"];export{o as Primary,l as Variants,_ as __namedExportsOrder,g as default};
