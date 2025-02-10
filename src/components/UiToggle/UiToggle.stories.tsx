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
		onClick: {
			action: "clicked",
			description: "Toggle Clicked",
		},

	},
	args: {

		title: "header",
		children: "title",
		disabled: false,
		invertOrder: false,

	},
} satisfies Meta<typeof UiToggle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	render: (args) => {
		const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
			console.log("Checked", e.target.checked);
		};

		return (
			<UiToggle { ...args } onChange={ handleChange } />
		);
	}
};
