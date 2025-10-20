import React from "react";
import { EBadgeKind, EBadgeSize } from "./_types.ts";
import { ETextWeight, ETypographySizes, UiTypography } from "../UiTypography";
import cx from "classnames";

interface IUiPills {
	children: React.ReactNode
	kind?: EBadgeKind,
	size?: EBadgeSize,
	icon?: React.ReactNode,
	rounded?: boolean,
	justifyCenter?: boolean,
	fullWidth?: boolean,
	className?: string
}

const kindClasses = {
	[EBadgeKind.PRIMARY]: "bg-primary-100 text-primary-700",
	[EBadgeKind.ERROR]: "bg-error-300 text-error-700",
	[EBadgeKind.WARNING]: "bg-warning-300 text-warning-700",
	[EBadgeKind.ACCENT]: "bg-accent-300 text-accent-700",
	[EBadgeKind.PRIMARY_ALT]: "bg-primary-300 text-primary-800",
	[EBadgeKind.SECONDARY]: "bg-white text-secondary-300 ring-1 ring-secondary-alt-300",
	[EBadgeKind.ACCENT_ALT]: "bg-accent-alt-500 text-secondary-700",
};

const sizeEnums = {
	[EBadgeSize.SMALL]: ETypographySizes.XXS,
	[EBadgeSize.MEDIUM]: ETypographySizes.XS,
	[EBadgeSize.LARGE]: ETypographySizes.SM,
};

export const UiPills: React.FC<IUiPills> = ({
	children,
	kind = EBadgeKind.PRIMARY,
	size = EBadgeSize.SMALL,
	className,
	justifyCenter = false,
	icon,
	rounded = false,
	fullWidth = false
}) => {
	return (
		<div className={ cx(
			"ui-pills",
			"grid grid-flow-col",
			"items-center",
			"gap-xxxs",
			"py-xxxs",
			rounded
				? "px-xs"
				: "px-xxs",
			"overflow-hidden",
			fullWidth
				? "w-full"
				: "w-max",
			justifyCenter
				? "justify-center"
				: "justify-start",
			rounded
				? "rounded-full"
				: "rounded-sm",
			kindClasses[kind],
			className
		) }>
			{ icon }
			{ children
				? (
					<UiTypography lineHeight size={ sizeEnums[size] } weight={ ETextWeight.SEMI_BOLD } className="whitespace-nowrap">
						{ children }
					</UiTypography>
				)
				: null }
		</div>
	);
};
