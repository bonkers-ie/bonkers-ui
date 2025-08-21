import type { Meta, StoryObj } from "@storybook/react-vite";
import { UiNavigationSteps } from "./UiNavigationSteps.tsx";
import { UiNavigationStep } from "./UiNavigationStep.tsx";

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
	},
	args: {
		initialStepId: "3",
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

		return (
			<div className="grid gap-md">
				<div className="max-w-[95%]">

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

				</div>
				<UiNavigationSteps initialStepId="51">
					<UiNavigationStep id="11" name="Property"  />
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
