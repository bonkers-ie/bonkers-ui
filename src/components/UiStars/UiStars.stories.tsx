import type { Meta, StoryObj } from "@storybook/react";
import { UiStars } from "./UiStars";
import { EColors } from "../../_types/colors";
import { EStarsSize } from "./_types";
const meta = {
	title: "Components/UiStars",
	component: UiStars,
	argTypes: {
		min: {
			control: {
				type: "number"
			},
			description: "Minimum rating value",
		},
		max: {
			control: {
				type: "number"
			},
			description: "Maximum rating value",
		},
		current: {
			control: {
				type: "number",
				step: 0.1
			},
			description: "Current rating value",
		},
		size: {
			control: {
				type: "select"
			},
			options: Object.values(EStarsSize),
			description: "Star size",
		},
		color: {
			control: {
				type: "select"
			},
			options: Object.values(EColors),
			description: "Star color",
		}
	},
	args: {
		min: 0,
		max: 5,
		current: 3.5,
		size: EStarsSize.MD,
		color: EColors.PRIMARY
	},
} satisfies Meta<typeof UiStars>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
