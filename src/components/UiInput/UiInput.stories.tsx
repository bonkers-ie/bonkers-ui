import React, { useRef } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { UiInputText } from "./UiInputText";
import { EInputKind, EInputSize } from "./_types";
import { UiAccordionInfoDropdown } from "../UiAccordion";
import { UiInputBase } from "./UiInput.base";
import { UiIcon } from "../UiIcon";
import { ESize } from "../../_types/sizing";

const meta = {
	title: "Components/UiInputBase",
	component: UiInputBase,
	argTypes: {
		id: {
			description: "The id of the input",
			control: {
				type: "text",
			},
		},
		disabled: {
			description: "If the input is disabled",
			control: {
				type: "boolean",
			},
		},
		placeholder: {
			description: "The placeholder of the input",
			control: {
				type: "text",
			},
		},
		kind: {
			options: [
				EInputKind.DEFAULT,
				EInputKind.SUCCESS,
				EInputKind.ERROR,
				EInputKind.WARNING
			],
			description: "The state of the input",
			control: {
				type: "radio",
			},
		},
		type: {
			description: "The type of the input",
			control: {
				type: "select",
			},
			options: ["text", "password", "email", "number", "tel", "url"],
		},
		statusMessage: {
			description: "The subtitle of the input",
			control: {
				type: "text",
			},
		},
		preIcon: {
			description: "The ReactNode positioned before the input",
		},
		postIcon: {
			description: "The ReactNode positioned after the input",
		},
		size: {
			options: [
				EInputSize.SMALL,
				EInputSize.MEDIUM,
			],
			description: "The size of the input",
			control: {
				type: "radio",
			},
		},
	},
	args: {
		id: "testInput",
		disabled: false,
		kind: EInputKind.DEFAULT,
		type: "text",
		placeholder: "Placeholder",
		statusMessage: "Subtitle",
		postIcon: undefined,
		preIcon: undefined,
	},
} as Meta<typeof UiInputText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BaseInput: Story = {
	name: "UiInputBase",
	render: (args) => {
		const inputRef = useRef<HTMLInputElement>(null);

		return (
			<UiInputBase ref={ inputRef } { ...args } />
		);
	}
};

export const BaseInputWithIcons: Story = {
	name: "UiInputBase with Icons",
	render: (args) => (
		<UiInputBase
			placeholder="Pre and Post Icons..."
			preIcon={ <UiIcon size={ ESize.SM } name={ ["far", "face-smile"] } /> }
			postIcon="$ Dollar"
			{ ...args }
		/>
	),
};

export const TextInput: Story = {
	name: "UiInputText",
	render: (args) => {
		const Info = () => (
			<UiAccordionInfoDropdown title="What's this?">
				Lorem, ipsum dolor.
			</UiAccordionInfoDropdown>
		);
		const inputRef = useRef<HTMLInputElement>(null);

		return (
			<UiInputText
				ref={ inputRef }
				title="Title"
				subtitle="Subtitle"
				infoComponent={ <Info /> }
				onFocus={ () => console.log("focus") }
				{ ...args }
			/>
		);
	},
};

export const TextInputVariations: Story = {
	name: "UiInputText Kinds",
	render: (args) => (
		<div className="mt-sm flex w-full flex-row gap-sm">
			<UiInputText
				{ ...args }
				id="errorInput"
				placeholder="Error Input"
				kind={ EInputKind.ERROR }
				statusMessage="Backend is broken again"
			/>
			<UiInputText
				id="successInput"
				placeholder="Success Input"
				kind={ EInputKind.SUCCESS }
				statusMessage={ args.statusMessage }
			/>
		</div>
	)
};
