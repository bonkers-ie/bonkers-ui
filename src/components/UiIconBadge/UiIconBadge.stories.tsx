import React from "react";
import { UiIconBadge, EIconBadgeKind } from "./UiIconBadge";
import type { Meta, StoryObj } from "@storybook/react";
import { ESize } from "../../_types/sizing";

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
		name: ["far", "face-smile"]
	},
} satisfies Meta<typeof UiIconBadge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Variants: Story = {
	render: (args) => (
		<div className="flex flex-col gap-lg">
			{ /* Size variants */ }
			<div className="flex flex-col gap-sm">
				<h3>Size Variants</h3>
				<div className="flex gap-sm items-center">
					<UiIconBadge { ...args } size={ ESize.SM } name={ ["far", "face-smile"] } />
					<UiIconBadge { ...args } size={ ESize.MD } name={ ["far", "face-smile"] } />
					<UiIconBadge { ...args } size={ ESize.LG } name={ ["far", "face-smile"] } />
					<UiIconBadge { ...args } size={ ESize.XL } name={ ["far", "face-smile"] } />
				</div>
			</div>

			{ /* Kind variants */ }
			<div className="flex flex-col gap-sm">
				<h3>Kind Variants</h3>
				<div className="flex gap-sm">
					<UiIconBadge { ...args } kind={ EIconBadgeKind.PRIMARY } name={ ["far", "face-smile"] } />
					<UiIconBadge { ...args } kind={ EIconBadgeKind.LIGHT } name={ ["far", "face-smile"] } />
					<UiIconBadge { ...args } kind={ EIconBadgeKind.DARK } name={ ["far", "face-smile"] } />
					<UiIconBadge { ...args } kind={ EIconBadgeKind.WARNING } name={ ["far", "face-smile"] } />
					<UiIconBadge { ...args } kind={ EIconBadgeKind.ERROR } name={ ["far", "face-smile"] } />
				</div>
			</div>

			{ /* Custom child example */ }
			<div className="flex flex-col gap-sm">
				<h3>Custom Child</h3>
				<div className="flex gap-sm">
					<UiIconBadge { ...args } size={ ESize.LG }>
						Custom
					</UiIconBadge>
				</div>
			</div>
		</div>
	)
};
