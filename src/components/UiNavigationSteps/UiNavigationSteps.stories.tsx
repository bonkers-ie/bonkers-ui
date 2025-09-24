import type { Meta, StoryObj } from "@storybook/react-vite";
import { UiNavigationSteps } from "./UiNavigationSteps.tsx";
import { UiNavigationStep } from "./UiNavigationStep.tsx";
import { UiIcon } from "../UiIcon/UiIcon.tsx";
import { ESize } from "../UiAccordion/index.ts";

const meta = {
	title: "Components/UiNavigationSteps",
	component: UiNavigationSteps,
	argTypes: {
		initialStepId: {
			control: {
				type: "select",
			},
			description: "Initial step ID to set as active when the provider is mounted.",
			options: ["1", "1.1", "1.2", "2", "3", "4", "5"],
		},
		complete: {
			control: {
				type: "boolean",
			},
			description: "Mark all steps complete as if the user has completed them.",
		},
	},
	args: {
		initialStepId: "3",
		complete: false,
		children: undefined
	},
} satisfies Meta<typeof UiNavigationSteps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	render: (args) => {
		const steps = [
			{
				id: "1",
				name: "property",
				substeps: [
					{
						id: "1.1",
						name: "Your Home"
					},
					{
						id: "1.2",
						name: "Your Contents"
					}
				]
			},
			{
				id: "2",
				name: "contents",
			},
			{
				id: "3",
				name: "history & claims"
			},
			{
				id: "4",
				name: "about you"
			},
			{
				id: "5",
				name: "declarations"
			},
		];

		const Icon = () => <UiIcon className="text-white" name={ ["far", "face-smile"] } size={ ESize.XS }/>;

		return (
			<div className="grid gap-md">

				<UiNavigationSteps { ...args }>
					{
						steps.map(step => (
							<UiNavigationStep
								key={ step.id }
								id={ step.id }
								icon={ <Icon /> }
								name={ step.name }
								subSteps={ step.substeps }
							/>
						))
					}

				</UiNavigationSteps>

				<UiNavigationSteps initialStepId="31" complete>
					<UiNavigationStep id="11" name="Property" />
					<UiNavigationStep id="21" name="Contents" subSteps={ [{
						id: "contents.1",
						name: "Contents 1"
					}, {
						id: "contents.2",
						name: "Contents 2"
					}] } />
					<UiNavigationStep id="31" name="History & Claims" />
					<UiNavigationStep id="41" name="About You" />
					<UiNavigationStep id="51" name="Declarations" />
				</UiNavigationSteps>
			</div>
		);
	},
};
