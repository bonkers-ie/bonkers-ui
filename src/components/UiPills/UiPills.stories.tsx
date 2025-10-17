import type { Meta, StoryObj } from "@storybook/react-vite";
import { UiPills } from "./UiPills";
import { UiIcon } from "../UiIcon";
import { EBadgeKind, EBadgeSize } from "./_types";
import React from "react";
import { ESize } from "../../_types/sizing";

const meta = {
	title: "Components/UiPills",
	component: UiPills,
	argTypes: {
		size: {
			control: {
				type: "select",
			},
			options: Object.values(EBadgeSize),
			description: "Pills Size",
		},
		kind: {
			control: {
				type: "select",
			},
			options: Object.values(EBadgeKind),
			description: "Pills Kind",
		},
		children: {
			control: {
				type: "text",
			},
			description: "Pills Children",
		},
		fullWidth: {
			control: {
				type: "boolean",
			},
			description: "Pills Full Width",
		},
		justifyCenter: {
			control: {
				type: "boolean",
			},
			description: "Pills Center Align",
		},
		rounded: {
			control: {
				type: "boolean",
			},
			description: "Pills Rounded",
		},
	},
	args: {
		kind: EBadgeKind.PRIMARY,
		size: EBadgeSize.SMALL,
		children: "Pills",
	},
} satisfies Meta<typeof UiPills>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	render: (args)=>(
		<UiPills
			kind={ args.kind }
			size={ args.size }
			icon={ <UiIcon name={ ["far", "face-smile"] } size={ ESize.XS }/> }
			fullWidth={ args.fullWidth }
			rounded={ args.rounded }
			justifyCenter={ args.justifyCenter }
		>
			{ args.children }
		</UiPills>
	)
};

export const Rounded: Story = {
	args: {
		rounded: true,
		children: "Rounded Pill",
	},
	render: (args)=>(
		<UiPills
			kind={ args.kind }
			size={ args.size }
			icon={ <UiIcon name={ ["far", "face-smile"] } size={ ESize.XS }/> }
			rounded={ args.rounded }
		>
			{ args.children }
		</UiPills>
	)
};

export const FullWidth: Story = {
	args: {
		fullWidth: true,
		children: "Full Width Pill",
	},
	render: (args)=>(
		<UiPills
			kind={ args.kind }
			size={ args.size }
			icon={ <UiIcon name={ ["far", "face-smile"] } size={ ESize.XS }/> }
			fullWidth={ args.fullWidth }
		>
			{ args.children }
		</UiPills>
	)
};

export const FullWidthAndCenterAligned: Story = {
	args: {
		fullWidth: true,
		rounded: true,
		justifyCenter: true,
		children: "Full Width and Center Aligned",
		kind: EBadgeKind.ACCENT,
		size: EBadgeSize.LARGE,
	},
	render: (args)=>(
		<UiPills
			kind={ args.kind }
			size={ args.size }
			icon={ <UiIcon name={ ["far", "face-smile"] } size={ ESize.XS }/> }
			fullWidth={ args.fullWidth }
			rounded={ args.rounded }
			justifyCenter={ args.justifyCenter }
		>
			{ args.children }
		</UiPills>
	)
};
