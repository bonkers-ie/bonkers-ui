import React from "react";
import { ESize } from "../../_types/sizing";
import cx from "classnames";
import { UiIcon } from "../UiIcon/UiIcon";
import { EIconBadgeKind } from "./_types";
import type { IUiIconBadgeProps } from "./_types";

const badgeSizeClasses = {
	[ESize.SM]: "p-xxs",
	[ESize.MD]: "p-xxs",
	[ESize.LG]: "p-sm",
	[ESize.XL]: "p-lg"
};

const iconSizeMap = {
	[ESize.SM]: ESize.SM,
	[ESize.MD]: ESize.MD,
	[ESize.LG]: ESize.LG,
	[ESize.XL]: ESize.XL
};

const kindClasses = {
	[EIconBadgeKind.PRIMARY]: "bg-primary-500 text-white",
	[EIconBadgeKind.LIGHT]: "bg-primary-100 text-primary-800",
	[EIconBadgeKind.DARK]: "bg-primary-800 text-white",
	[EIconBadgeKind.WARNING]: "bg-warning-500 text-white",
	[EIconBadgeKind.ERROR]: "bg-error-500 text-white"
};

export const UiIconBadge: React.FC<IUiIconBadgeProps> = ({
	name,
	size = ESize.MD,
	kind = EIconBadgeKind.PRIMARY,
	children
}) => {
	return (
		<div className={ cx(
			"rounded-full",
			"inline-flex",
			"items-center",
			"justify-center",
			"aspect-square",
			badgeSizeClasses[size],
			kindClasses[kind]
		) }>
			{ children || <UiIcon name={ name } size={ iconSizeMap[size] } /> }
		</div>
	);
};
