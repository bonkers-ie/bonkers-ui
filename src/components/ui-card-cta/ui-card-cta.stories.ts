import UiCardCta from "./ui-card-cta.vue";
import UiIcon from "../ui-icon";
import { ESize } from "../../_types/sizing";
import UiTypography from "../ui-typography";
import { Story } from "@storybook/vue3";

export default {
	title: "Components/ui-card-cta",
	component: UiCardCta,
	// More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
	argTypes: {
		className: {
			control: { type: "text" },
			description: "The Element classes",
		},

		invertOrder: {
			control: { type: "boolean" },
			description: "The Element order",
		},
		fullWidth: {
			control: { type: "boolean" },
			description: "The full width size",
		},
		disabled: {
			control: { type: "boolean" },
			description: "The full width size",
		},
	},
	args: {
		slot: "Description",
		invertOrder: false,
		fullWidth: false,
		disabled: false
	},
};

type TComponentProps = InstanceType<typeof UiCardCta>["$props"];

const Template: Story<TComponentProps> = (args) => ({
	components: { UiCardCta, UiIcon, UiTypography },
	setup() {
		return { args, ESize };
	},
	template: `
		<ui-card-cta v-bind="args">
			<template v-slot:icon>
				<ui-icon :size="ESize.MD" has-wrapper class-name="text-white" :icon-name="['fas', 'fa-user-secret']" />
			</template>

			<template v-slot:title>
				Title
			</template>

			<template v-slot:description>
				{{args.slot}}
			</template>
		</ui-card-cta>
		`
});

export const Default = Template.bind({});
