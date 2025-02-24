import { UiIcon } from "./UiIcon";
import type { Meta, StoryObj } from "@storybook/react";
import { ESize } from "../../_types/sizing";
import { EColors } from "../../_types/colors";

const SUPPORTED_KINDS = [
	EColors.PRIMARY,
	EColors.PRIMARY_800,
	EColors.WHITE,
	EColors.BLACK,
	EColors.CURRENT
] as const;

const meta: Meta<typeof UiIcon> = {
	title: "Components/UiIcon",
	component: UiIcon,
	argTypes: {
		size: {
			control: {
				type: "select",
			},
			options: Object.values(ESize),
			description: "Icon Size",
		},
		kind: {
			control: {
				type: "select",
			},
			options: SUPPORTED_KINDS,
			description: "Icon Kind",
		}
	},
	args: {
		size: ESize.LG,
		kind: EColors.CURRENT,
	},
} satisfies Meta<typeof UiIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		name: ["far", "face-smile"],
	},
};

export const Primary: Story = {
	args: {
		name: ["far", "face-smile"],
		kind: EColors.PRIMARY
	},
};

export const White: Story = {
	args: {
		name: ["far", "face-smile"],
		kind: EColors.WHITE
	},
	parameters: {
		backgrounds: {
			default: "dark"
		},
	},
};
