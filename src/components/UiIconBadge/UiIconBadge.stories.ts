import { UiIconBadge } from "../UiIconBadge/UiIconBadge";
import type { Meta, StoryObj } from "@storybook/react";
import { ESize } from "../../_types/sizing.js";

const meta: Meta<typeof UiIconBadge> = {
	title: "Components/UiIconBadge",
	component: UiIconBadge,
	argTypes: {
		size: {
			control: {
				type: "select",
			},
			options: Object.values(ESize),
			description: "IconBadge Size",
		},
	},
	args: {
		size: ESize.LG,
	},
} satisfies Meta<typeof UiIconBadge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		name: ["far", "face-smile"],
	},
};
