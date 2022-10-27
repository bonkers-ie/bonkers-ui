import UiNotificationBadge from ".";
import type { Story } from "@storybook/vue3";
import { EBadgeOrigin } from "./_types";

export default {
	title: "Components/ui-notification-badge",
	component: UiNotificationBadge,
	// More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
	argTypes: {
		origin: {
			control: { type: "select" },
			options: Object.values(EBadgeOrigin),
			description: "The Element origin",
		}
	},
	args: {
		slot: "1",
		origin: EBadgeOrigin.OFFSET_TOP_RIGHT,
	},
};

type TComponentProps = InstanceType<typeof UiNotificationBadge>["$props"];

const Template: Story<TComponentProps> = (args) => ({
	components: { UiNotificationBadge },
	setup() {
		return { args };
	},
	template: /*html*/`
		<div class="relative rounded-full bg-primary w-lg h-lg">
			<ui-notification-badge :origin="args.origin">
				{{args.slot}}
			</ui-notification-badge>
		</div>
		`
});

export const Default = Template.bind({});