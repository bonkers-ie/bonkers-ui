import React from "react";
import { ESize } from "../../_types/sizing";
import cx from "classnames";
import { type IconProp } from "@fortawesome/fontawesome-svg-core";
import { UiIcon } from "../UiIcon/UiIcon";

type BadgeSize = ESize.SM | ESize.MD | ESize.LG;

export enum EIconBadgeKind {
	PRIMARY = "primary",
	LIGHT = "light",
	DARK = "dark",
	WARNING = "warning",
	ERROR = "error"
}

interface IUiIconBadgeProps {
	name: IconProp;
	badgeSize?: BadgeSize;
	iconSize?: ESize;
	kind?: EIconBadgeKind;
	children?: React.ReactNode;
}

const badgeSizeClasses = {
	[ESize.SM]: "p-xxs",
	[ESize.MD]: "p-sm",
	[ESize.LG]: "p-lg"
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
	badgeSize = ESize.MD,
	iconSize = ESize.MD,
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
			badgeSizeClasses[badgeSize],
			kindClasses[kind]
		) }>
			{ children || <UiIcon name={ name } size={ iconSize } /> }
		</div>
	);
};
