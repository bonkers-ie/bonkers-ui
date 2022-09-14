import type { Story } from "@storybook/vue3";
import UiInput from "./ui-input.vue";
import Icon from "../../_samples/icon.vue";
import { ref } from "vue";
import { EInputKinds, EInputType } from "./_typings";

export default {
	title: "Components/ui-input",
	component: UiInput,
	// More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
	argTypes: {
		placeholder: {
			control: { type: "text" },
			description: "Placeholder",
		},
		kind: {
			control: { type: "select" },
			options: Object.values(EInputKinds),
			description: "The input kinds",
		},
		type: {
			control: { type: "select" },
			options: Object.values(EInputType),
			description: "The input type",
		},
		disabled: {
			control: { type: "boolean" },
			description: "The Element disabled state",
		},
	},
	args: {
		placeholder: "Placeholder",
		kind: undefined,
		disabled: false,
		type: EInputType.TEXT
	}
};

type MyComponentProps = InstanceType<typeof UiInput>["$props"];

const Template: Story<MyComponentProps> = (args: MyComponentProps) => ({
	components:{
		UiInput
	},
	setup(){
		const valueModel = ref("");
		return{
			args,
			valueModel
		};
	},
	template: `
		<ui-input v-bind="args" v-model="valueModel" heading="heading" sub-label="subLabel" />
	`
});

const TemplateAll: Story<MyComponentProps> = (args: MyComponentProps) => ({
	components:{
		UiInput,
		Icon
	},
	setup(){
		const valueModel = ref("");

		return{
			args,
			valueModel
		};
	},
	template: `
		<div :style="{
			display: 'grid',
			gridGap: '12px'
		}">
			<ui-input v-bind="args" v-model="valueModel">
				<template v-slot:prefix-icon> € </template>
			</ui-input>
			<ui-input v-bind="args" v-model="valueModel">
				<template v-slot:prefix-icon>
					<icon :size="16" />
				</template>
			</ui-input>
			<ui-input v-bind="args" v-model="valueModel">
				<template v-slot:postfix-icon>
					<icon :size="16" />
				</template>
			</ui-input>
		</div>
	`
});

export const Default = Template.bind({});
export const AllInputs = TemplateAll.bind({});