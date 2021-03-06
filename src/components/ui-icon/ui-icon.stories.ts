import UiIcon from "./ui-icon.vue";
import { Story } from "@storybook/vue3";
import { ESize } from "../../_types/sizing";

export default {
	title: "Components/ui-icon",
	component: UiIcon,
	// More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
	argTypes: {
		className: {
			control: { type: "text" },
			description: "The Element classes",
		},
		hasWrapper:{
			control: { type: "boolean" },
			description: "The Icon show wrapper",
		},
		size: {
			control: { type: "select" },
			options: Object.values(ESize),
			description: "The Element size",
		}

	},
	args: {
		size: ESize.LG,
		hasWrapper: false,
	},
};

type TComponentProps = InstanceType<typeof UiIcon>["$props"];

const Template: Story<TComponentProps> = (args) => ({
	// Components used in your story `template` are defined in the `components` object
	components: { UiIcon },
	// The story's `args` need to be mapped into the template through the `setup()` method
	setup() {
		return { args };
	},
	// And then the `args` are bound to your component with `v-bind="args"`
	template: `
		<ui-icon v-bind="args" :icon-name="['fas', 'fa-user-secret']" />
	`,
});

export const Default = Template.bind({});
