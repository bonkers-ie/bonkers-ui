import type { Meta, StoryObj } from "@storybook/react-vite";
import { UiStars } from "./UiStars";
import { EStarsSize } from "./_types";
import { EColors } from "../../_types/colors";

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
			options: Object.values(EColors),
			description: "Star color",
		},
		showOutline: {
			control: {
				type: "boolean"
			},
			description: "Show an outline on the unfilled portion of a star",
		}
	},
	args: {
		starsFilled: 3.5,
		count: 5,
		size: EStarsSize.MD,
		color: EColors.PRIMARY,
		showOutline: true
	},
} satisfies Meta<typeof UiStars>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
