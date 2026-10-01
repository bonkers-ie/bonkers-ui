import type { Meta, StoryObj } from "@storybook/react-vite";
import { UiPlainRadio } from "./UiPlainRadio";
import React, { useState } from "react";
import { EPlainRadioSize } from "./_types";

const meta = {
	title: "Components/UiPlainRadio",
	component: UiPlainRadio,
	argTypes: {
		children: {
			control: {
				type: "text",
			},
			description: "RadioFancy Children",
		},
		disabled: {
			control: {
				type: "boolean",
			},
			description: "Radio disabled",
		},
		subHeader: {
			control: {
				type: "text",
			},
			description: "RadioFancy Children",
		},
		size: {
			control: {
				type: "select",
			},
			options: Object.values(EPlainRadioSize),
			description: "Radio size",
		},
	},
	args: {
		children: "Rural",
		disabled: false,
		size: EPlainRadioSize.DEFAULT,
		subHeader: "DG2 = Rural supply region",
		onChange: (value: string) => console.log(value),
		checked: false,
		value: "value",
		name: "Value"
	},
} satisfies Meta<typeof UiPlainRadio>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	render: (args) => {
		const [selectedValue, setSelectedValue] = useState<string>("value1");

		const handleChange = (value: string) => {
			setSelectedValue(value);
			if (args.onChange) {
				args.onChange(value);
			}
		};

		return (
			<div>
				<UiPlainRadio
					disabled={ args.disabled }
					name="plain-radio"
					value="value1"
					onChange={ handleChange }
					checked={ selectedValue === "value1" }
					children={ args.children }
					size={ args.size }

				>

				</UiPlainRadio>

				<br />

				<UiPlainRadio
					disabled={ args.disabled }
					name="plain-radio"
					value="value2"
					onChange={ handleChange }
					checked={ selectedValue === "value2" }
					children={ args.children }
					subHeader={ args.subHeader }
					size={ args.size }
				>

				</UiPlainRadio>
			</div>
		);
	},
};
