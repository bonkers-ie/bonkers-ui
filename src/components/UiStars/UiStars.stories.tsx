import type { Meta, StoryObj } from "@storybook/react";
import { UiStars } from "./UiStars";
import { EStarsSize, EStarColors } from "./_types";

const meta = {
	title: "Components/UiStars",
	component: UiStars,
	argTypes: {
		starsFilled: {
			control: {
				type: "number",
				step: 0.1,
				min: 0,
				max: (context: { args: { count?: number } }) => context.args.count || 5
			},
			description: "Number of filled stars",
		},
		count: {
			control: {
				type: "number",
				min: 1,
				max: 10
			},
			description: "Total number of stars",
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
		starsFilled: 3.5,
		count: 5,
		size: EStarsSize.MD,
		color: EStarColors.DEFAULT
	},
} satisfies Meta<typeof UiStars>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
