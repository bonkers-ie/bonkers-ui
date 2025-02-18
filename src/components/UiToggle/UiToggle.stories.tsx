import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { UiToggle } from "./UiToggle";

const meta = {
	title: "Components/UiToggle",
	component: UiToggle,
	argTypes: {
		title: {
			control: {
				type: "text",
			},
			description: "header",
		},
		children: {
			control: {
				type: "text",
			},
			description: "title",
		},
		disabled: {
			control: {
				type: "boolean",
			},
			description: "Toggle Disabled",
		},
		invertOrder: {
			control: {
				type: "boolean"
			},
			description: "The Element order state",
		},
		checked: {
			control: {
				type: "boolean",
			},
			description: "Toggle Checked",
		},
		value: {
			control: {
				type: "boolean",
			},
			description: "Toggle Value",
		},

	}
} satisfies Meta<typeof UiToggle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		title: "header",
		children: "title",
		disabled: false,
		invertOrder: false,
		onChange: (value: boolean) => console.log(`Checked ${value}`),
	},
	render: (args) => {
		return (
			<>
				<UiToggle { ...args } />

			</>
		);
	}
};
