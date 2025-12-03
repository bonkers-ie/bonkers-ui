import React from "react";
import { ESize } from "../../_types/sizing";
import cx from "classnames";
import { EIconBadgeKind } from "./_types";
import type { IUiIconBadgeProps } from "./_types";

const badgeSizeClasses = {
	[ESize.SM]: "p-xxs",
	[ESize.MD]: "p-xs",
	[ESize.LG]: "p-sm",
	[ESize.XL]: "p-lg"
};

const kindClasses = {
	[EIconBadgeKind.PRIMARY]: "bg-primary-alt-700",
	[EIconBadgeKind.WARNING]: "bg-warning-500",
	[EIconBadgeKind.ERROR]: "bg-error-500",
	[EIconBadgeKind.SECONDARY]: "bg-secondary-500",
	[EIconBadgeKind.AI]: "bg-[linear-gradient(225deg,#8B8BFC_16.73%,#282894_86.38%)]",
};

export const UiIconBadge: React.FC<IUiIconBadgeProps> = ({
	size = ESize.MD,
	kind = EIconBadgeKind.PRIMARY,
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
			kindClasses[kind],
			className
		) }>
			{ children }
		</div>
	);
};
