import React from "react";
import { ESize } from "../../_types/sizing";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cx from "classnames";
import { type IconProp } from "@fortawesome/fontawesome-svg-core";

type BadgeSize = Extract<
	ESize,
	ESize.XS | ESize.SM | ESize.MD | ESize.LG
>;

type IconSize = Extract<
	ESize,
    ESize.SM | ESize.MD | ESize.LG
>;

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
	iconSize?: IconSize;
	kind?: EIconBadgeKind;
}

const badgeSizeClasses: { [key in BadgeSize]: string } = {
	[ESize.XS]: "w-[36px] h-[36px]",
	[ESize.SM]: "size-xl",
	[ESize.MD]: "w-[56px] h-[56px]",
	[ESize.LG]: "w-[104px] h-[104px]"
};

const iconSizeClasses: { [key in IconSize]: string } = {
	[ESize.SM]: "w-[16px] h-[16px]",
	[ESize.MD]: "w-[24px] h-[24px]",
	[ESize.LG]: "w-[40px] h-[40px]"
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
	kind = EIconBadgeKind.PRIMARY
}) => {
	return (
		<div className={ cx(
			"rounded-full",
			"inline-flex",
			"items-center",
			"justify-center",
			"aspect-square",
			"p-xs",
			badgeSizeClasses[badgeSize],
			kindClasses[kind]
		) }>
			<FontAwesomeIcon
				icon={ name }
				className={ cx(
					"inline",
					"overflow-visible",
					"align-[-.125em]",
					iconSizeClasses[iconSize]
				) }
			/>
		</div>
	);
};
