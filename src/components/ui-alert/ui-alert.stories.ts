import type { Meta } from "@storybook/vue3";
import { ICON_DEFAULT } from "./../../CONSTANTS";
import { EAlertTypes } from "./_types";
import { UiAlert } from "../ui-alert";

export default {
	title: "Components/ui-alert",
	component: UiAlert,
	argTypes: {
		kind: {
			control: {
				type: "select"
			},
			options: Object.values(EAlertTypes),
			description: "The button kinds",
		},
		default: {
			control: {
				type: "text"
			},
		}
	},
	args: {
		kind: EAlertTypes.PRIMARY,
		default: "This is a default slot",
		icon: ICON_DEFAULT,
	}
} satisfies Meta<typeof UiAlert>;

export const Default = {};
