import { UiIconBadge, EIconBadgeKind } from "./UiIconBadge";
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
		},
		kind: {
			control: {
				type: "select"
			},
			options: Object.values(EIconBadgeKind),
			description: "Badge Kind"
		}
	},
	args: {
		badgeSize: ESize.LG,
		iconSize: ESize.MD,
		kind: EIconBadgeKind.PRIMARY
	},
} satisfies Meta<typeof UiIconBadge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		name: ["far", "face-smile"],
	},
};

export const Light: Story = {
	args: {
		name: ["far", "face-smile"],
		kind: EIconBadgeKind.LIGHT,
		iconSize: ESize.LG
	},
};

export const Warning: Story = {
	args: {
		name: ["far", "face-smile"],
		kind: EIconBadgeKind.WARNING
	},
};

export const Error: Story = {
	args: {
		name: ["far", "face-smile"],
		kind: EIconBadgeKind.ERROR
	},
};
