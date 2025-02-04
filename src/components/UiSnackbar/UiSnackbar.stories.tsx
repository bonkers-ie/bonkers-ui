
import type { Meta, StoryObj } from "@storybook/react";
import { UiSnackbar } from "./UiSnackbar";
import { ESnackbarTypes } from "./_types";

const meta = {
	title: "Components/UiSnackbar",
	component: UiSnackbar,
	argTypes: {
		kind: {
			control: {
				type: "select",
			},
			options: Object.values(ESnackbarTypes),
			description: "Snackbar Color",
		},
		children: {
			control: {
				type: "text",
				description: "text or child element/s",
			}
		},

	},
	args: {
		kind: ESnackbarTypes.DEFAULT,
		children: "Some Text",
		open: false

	},
} satisfies Meta<typeof UiSnackbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
