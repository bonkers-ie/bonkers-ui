import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import { UiSelect } from "./UiSelect";
import { EInputKind } from "../UiInput";
import { UiIcon } from "../UiIcon";
import { ESize } from "../../_types/sizing";

const meta = {
	title: "Components/UiSelect",
	component: UiSelect,
	argTypes: {
		children: {
			control: {
				type: "text"
			}
		},
		disabled: {
			control: {
				type: "boolean"
			},
			description: "Disable the select element"
		},
		heading: {
			control: {
				type: "text"
			},
			description: "Heading of the select element"
		},
		statusMessage: {
			control: {
				type: "text"
			},
			description: "Status message of the select element"
		},
		subLabel: {
			control: {
				type: "text"
			},
			description: "Sublabel of the select element"
		},
		kind: {
			control: {
				type: "select"
			},
			options: Object.keys(EInputKind),
			description: "Kind of the select element"
		},
		value: {
			control: {
				type: "text"
			},
			description: "Value of the select element"
		},
	},
	args: {
		disabled: false,
		heading: "Heading",
		subLabel: "subLabel",
		kind: EInputKind.DEFAULT,
		statusMessage: "",
		value: "",
		onChange: (event: React.ChangeEvent<HTMLSelectElement>) => console.log(event.target.value)
	},
} satisfies Meta<typeof UiSelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	render: (args) => {
		const [value, setValue] = React.useState(args.value);

		const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
			setValue(event.target.value);
		};

		return (
			<React.Fragment>
				<UiSelect { ...args } value={ value } onChange={ handleChange }>
					<option value="" disabled hidden>Select an option</option>
					<option value="1">Option 1</option>
					<option value="2">Option 2</option>
					<option value="3">Option 3</option>
				</UiSelect>
			</React.Fragment>
		);
	}
};

export const Variants: Story = {
	render: (args) => (
		<div className='flex flex-col gap-lg'>
			<div className='flex flex-col gap-sm'>
				<div className='flex gap-sm'>
					<UiSelect { ...args } kind={ EInputKind.DEFAULT } heading="Default">
						<option value="">Select option</option>
						<option value="1">Option 1</option>
						<option value="2">Option 2</option>
					</UiSelect>
					<UiSelect { ...args } kind={ EInputKind.ERROR } heading="Error">
						<option value="">Select option</option>
						<option value="1">Option 1</option>
						<option value="2">Option 2</option>
					</UiSelect>
					<UiSelect { ...args } kind={ EInputKind.SUCCESS } heading="Success">
						<option value="">Select option</option>
						<option value="1">Option 1</option>
						<option value="2">Option 2</option>
					</UiSelect>
					<UiSelect { ...args } kind={ EInputKind.WARNING } heading="Warning">
						<option value="">Select option</option>
						<option value="1">Option 1</option>
						<option value="2">Option 2</option>
					</UiSelect>
				</div>
			</div>
			<div className='flex flex-col gap-sm'>
				<div className='flex gap-sm'>
					<UiSelect { ...args } kind={ EInputKind.DEFAULT } heading="Default with Icon" preIcon={ <UiIcon name={ ["far", "face-angry"] } size={ ESize.MD } className="text-secondary-alt-600" /> }>
						<option value="">Select option</option>
						<option value="1">Option 1</option>
						<option value="2">Option 2</option>
					</UiSelect>
					<UiSelect { ...args } kind={ EInputKind.ERROR } heading="Error with Icon" preIcon={ <UiIcon name={ ["far", "face-angry"] } size={ ESize.MD } className="text-error" /> } statusMessage="Error message">
						<option value="">Select option</option>
						<option value="1">Option 1</option>
						<option value="2">Option 2</option>
					</UiSelect>
					<UiSelect { ...args } kind={ EInputKind.SUCCESS } heading="Success with Icon" preIcon={ <UiIcon name={ ["far", "face-angry"] } size={ ESize.MD } className="text-primary-600" /> }>
						<option value="">Select option</option>
						<option value="1">Option 1</option>
						<option value="2">Option 2</option>
					</UiSelect>
					<UiSelect { ...args } kind={ EInputKind.WARNING } heading="Warning with Icon" preIcon={ <UiIcon name={ ["far", "face-angry"] } size={ ESize.MD } className="text-warning-600" /> } statusMessage="Warning message">
						<option value="">Select option</option>
						<option value="1">Option 1</option>
						<option value="2">Option 2</option>
					</UiSelect>
				</div>
			</div>
			<div className='flex flex-col gap-sm'>
				<UiSelect { ...args } kind={ EInputKind.DEFAULT } heading="Disabled" disabled preIcon={ <UiIcon name={ ["far", "face-angry"] } size={ ESize.MD } className="text-secondary-alt-300" /> }>
					<option value="">Cannot select</option>
					<option value="1">Option 1</option>
					<option value="2">Option 2</option>
				</UiSelect>
			</div>
		</div>
	)
};
