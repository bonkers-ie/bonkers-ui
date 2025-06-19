import React from "react";
import { UiIconBadge } from "./UiIconBadge";
import { EIconBadgeKind } from "./_types";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ESize } from "../../_types/sizing";
import { UiIcon } from "../UiIcon/UiIcon";

const meta = {
	title: "Components/UiIconBadge",
	component: UiIconBadge,
	argTypes: {
		size: {
			control: {
				type: "select",
			},
			options: [ESize.SM, ESize.MD, ESize.LG, ESize.XL],
			description: "Badge Size",
		},
		kind: {
			control: {
				type: "select"
			},
			options: Object.values(EIconBadgeKind),
			description: "Badge Kind"
		}
	},
	args: {
		size: ESize.MD,
		kind: EIconBadgeKind.PRIMARY,
		children: <UiIcon name={ ["far", "face-smile"] } size={ ESize.MD } />
	},
} satisfies Meta<typeof UiIconBadge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Variants: Story = {
	render: () => (
		<div className="flex flex-col gap-lg">
			<div className="flex flex-col gap-sm">
				<h3>Size Variants</h3>
				<div className="flex gap-sm items-center">
					<UiIconBadge size={ ESize.SM }>
						<UiIcon name={ ["far", "face-smile"] } size={ ESize.SM } />
					</UiIconBadge>
					<UiIconBadge size={ ESize.MD }>
						<UiIcon name={ ["far", "face-smile"] } size={ ESize.MD } />
					</UiIconBadge>
					<UiIconBadge size={ ESize.LG }>
						<UiIcon name={ ["far", "face-smile"] } size={ ESize.LG } />
					</UiIconBadge>
					<UiIconBadge size={ ESize.XL }>
						<UiIcon name={ ["far", "face-smile"] } size={ ESize.XL } />
					</UiIconBadge>
				</div>
			</div>

			<div className="flex flex-col gap-sm">
				<h3>Kind Variants</h3>
				<div className="flex gap-sm">
					<UiIconBadge kind={ EIconBadgeKind.PRIMARY }>
						<UiIcon name={ ["far", "face-smile"] } size={ ESize.MD } />
					</UiIconBadge>
					<UiIconBadge kind={ EIconBadgeKind.LIGHT }>
						<UiIcon name={ ["far", "face-smile"] } size={ ESize.MD } />
					</UiIconBadge>
					<UiIconBadge kind={ EIconBadgeKind.DARK }>
						<UiIcon name={ ["far", "face-smile"] } size={ ESize.MD } />
					</UiIconBadge>
					<UiIconBadge kind={ EIconBadgeKind.WARNING }>
						<UiIcon name={ ["far", "face-smile"] } size={ ESize.MD } />
					</UiIconBadge>
					<UiIconBadge kind={ EIconBadgeKind.ERROR }>
						<UiIcon name={ ["far", "face-smile"] } size={ ESize.MD } />
					</UiIconBadge>
				</div>
			</div>

			<div className="flex flex-col gap-sm">
				<h3>Custom Child</h3>
				<div className="flex gap-sm">
					<UiIconBadge size={ ESize.LG }>
						Custom
					</UiIconBadge>
				</div>
			</div>
		</div>
	)
};
