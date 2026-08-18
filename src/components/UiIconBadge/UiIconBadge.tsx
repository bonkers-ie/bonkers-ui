import React from "react";
import { ESize } from "../../_types/sizing";
import cx from "classnames";
import { EIconBadgeColorType, EIconBadgeKind } from "./_types";
import type { IUiIconBadgeProps } from "./_types";

const badgeSizeClasses = {
	[ESize.SM]: "p-xxs",
	[ESize.MD]: "p-xs",
	[ESize.LG]: "p-sm",
	[ESize.XL]: "p-lg"
};

const kindClasses = {
	[EIconBadgeKind.SECONDARY]: {
		[EIconBadgeColorType.COLORFUL]: "bg-secondary-500",
		[EIconBadgeColorType.FLAT]: "bg-secondary-alt-200"
	},
	[EIconBadgeKind.PRIMARY]: {
		[EIconBadgeColorType.COLORFUL]: "bg-primary-alt-700",
		[EIconBadgeColorType.FLAT]: "bg-primary-50"
	},
	[EIconBadgeKind.WARNING]: {
		[EIconBadgeColorType.COLORFUL]: "bg-warning-600",
		[EIconBadgeColorType.FLAT]: "bg-warning-300"
	},
	[EIconBadgeKind.ERROR]: {
		[EIconBadgeColorType.COLORFUL]: "bg-error-500",
		[EIconBadgeColorType.FLAT]: "bg-error-100"
	},
	[EIconBadgeKind.AI]: {
		[EIconBadgeColorType.COLORFUL]: "bg-[linear-gradient(225deg,#8b8bfc_16.73%,#282894_86.38%)]",
		[EIconBadgeColorType.FLAT]: "bg-accent-300"
	}
};

export const UiIconBadge: React.FC<IUiIconBadgeProps> = ({
	size = ESize.MD,
	kind = EIconBadgeKind.PRIMARY,
	colorType = EIconBadgeColorType.COLORFUL,
	className,
	children
}) => {
	return (
		<div className={ cx(
			"rounded-full",
			"inline-flex",
			"items-center",
			"justify-center",
			"aspect-square",
			"drop-shadow-md drop-shadow-black/25",
			"border-2 border-white",
			"text-white",
			badgeSizeClasses[size],
			kindClasses[kind][colorType],
			className
		) }>
			{ children }
		</div>
	);
};
