import type { Meta, StoryObj } from "@storybook/react";
import { UiStars } from "./UiStars";
import { EStarsSize, EStarColors } from "./_types";

const meta = {
	title: "Components/UiStars",
	component: UiStars,
	argTypes: {
		currentRating: {
			control: {
				type: "number",
				step: 0.1,
				min: 0,
				max: 5
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
			options: Object.values(EStarColors),
			description: "Star color",
		}
	},
	args: {
		currentRating: 3.5,
		size: EStarsSize.MD,
		color: EStarColors.DEFAULT
	},
} satisfies Meta<typeof UiStars>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
