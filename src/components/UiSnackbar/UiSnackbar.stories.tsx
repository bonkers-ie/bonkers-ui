
import type { Meta, StoryObj } from "@storybook/react-vite";
import { UiSnackbar } from "./UiSnackbar";
import { ESnackbarDuration, ESnackbarTypes } from "./_types";
import { UiIcon } from "../UiIcon";
import { ESize } from "../../_types/sizing";
import { UiTypography } from "../UiTypography";

const meta = {
	title: "Components/UiSnackbar",
	component: UiSnackbar,
	argTypes: {
		kind: {
			control: {
				type: "select",
			},
			options: Object.values(ESnackbarTypes),
			description: "Snackbar Color",
		},
		title: {
			control: {
				type: "text",
				description: "text or title",
			}
		},
		children: {
			control: {
				type: "text",
				description: "text or child element/s",
			}
		}

	},
	args: {
		id: "unique-id-1",
		kind: ESnackbarTypes.SECONDARY,
		title: "Some Text",
		postIcon: <p className="underline">{ "Text" }</p>

	},
} satisfies Meta<typeof UiSnackbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	render: (args) => {
		return <div className="grid gap-md">
			<UiSnackbar { ...args } />
			<UiSnackbar
				id="unique-id-2"
				kind={ ESnackbarTypes.PRIMARY }
				postIcon={ <UiIcon name={ ["far", "face-angry"] } size={ ESize.SM } /> }
				title="Primary Notification"
			/>
			<UiSnackbar
				id="unique-id-3"
				kind={ ESnackbarTypes.WARNING }
				preIcon={ <UiIcon name={ ["far", "face-smile" ] } size={ ESize.SM } /> }
				postIcon={ <UiIcon name={ ["far", "face-angry"] } size={ ESize.SM } /> }
				title="Warning Notification with content"
				duration={ ESnackbarDuration.LONG }
			>
				<UiTypography
					lineHeight
				>
					This is a warning notification with some content.
				</UiTypography>
			</UiSnackbar>
		</div>;
	}
};
