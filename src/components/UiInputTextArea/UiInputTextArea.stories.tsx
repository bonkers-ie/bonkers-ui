import { EInputKind } from "../UiInput/_types";
import { UiInputTextArea } from "./UiInputTextArea";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
	title: "Components/UiInputTextArea",
	component: UiInputTextArea,
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
}as Meta<typeof UiInputTextArea>;

export default meta;

export const TextAreaInput: StoryObj<typeof UiInputTextArea> = {
	name: "UiInputTextArea",
	render: (args) => {
		return (
			<UiInputTextArea
				title="Title"
				{ ...args }
			/>
		);
	}
};
