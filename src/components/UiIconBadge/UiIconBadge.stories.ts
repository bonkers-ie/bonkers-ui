import { UiIconBadge } from "./UiIconBadge";
import type { Meta, StoryObj } from "@storybook/react";
import { ESize } from "../../_types/sizing";

const meta: Meta<typeof UiIconBadge> = {
	title: "Components/UiIconBadge",
	component: UiIconBadge,
	argTypes: {
		badgeSize: {
			control: {
				type: "select",
			},
			options: [ESize.XS, ESize.SM, ESize.MD, ESize.LG],
			description: "Badge Size",
		},
		iconSize: {
			control: {
				type: "select",
			},
			options: [ESize.SM, ESize.MD, ESize.LG],
			description: "Icon Size",
		}
	},
	args: {
		badgeSize: ESize.LG,
		iconSize: ESize.MD,
	},
} satisfies Meta<typeof UiIconBadge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		name: ["far", "face-smile"],
	},
};
