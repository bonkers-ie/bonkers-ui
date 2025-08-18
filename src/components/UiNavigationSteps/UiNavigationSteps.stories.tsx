import type { Meta, StoryObj } from "@storybook/react-vite";
import { UiNavigationSteps } from "./UiNavigationSteps.tsx";
import { UiNavigationStep } from "./UiNavigationStep.tsx";
import { ENavStepKind } from "./_types.ts";

const meta = {
	title: "Components/UiNavigationStepsProvider",
	component: UiNavigationSteps,
	argTypes: {
		initialStepId: {
			control: {
				type: "select",
			},
			description: "Initial step ID to set as active when the provider is mounted.",
			options: ["1", "2", "3", "4", "5"],
		},
		kind: {
			control: {
				type: "select",
			},
			description: "The kind of navigation step.",
			options: Object.values(ENavStepKind),
		},
	},
	args: {
		initialStepId: "2",
		kind: ENavStepKind.DEFAULT,
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
						id: "2.1",
						name: "Property 1"
					},
					{
						id: "2.2",
						name: "Property 2"
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
		return (
			<div className="grid gap-md">
				<UiNavigationSteps { ...args }>
					{
						steps.map(step => (
							<UiNavigationStep
								key={ step.id }
								id={ step.id }
								name={ step.name }
								subSteps={ step.substeps }
							/>
						))
					}

				</UiNavigationSteps>

				<UiNavigationSteps initialStepId="property">
					<UiNavigationStep id="property" name="Property"  />
					<UiNavigationStep id="contents" name="Contents" subSteps={ [{
						id: "contents.1",
						name: "Contents 1"
					}, {
						id: "contents.2",
						name: "Contents 2"
					}] } />
					<UiNavigationStep id="history" name="History & Claims" />
					<UiNavigationStep id="about" name="About You" />
					<UiNavigationStep id="declarations" name="Declarations" />
				</UiNavigationSteps>
			</div>
		);
	},
};
