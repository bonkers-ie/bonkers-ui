import React from "react";
import { ESize } from "../../_types/sizing";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cx from "classnames";
import { type IconProp } from "@fortawesome/fontawesome-svg-core";

export enum EIconBadgeKind {
	PRIMARY = "primary",
	LIGHT = "light"
}

interface IUiIconBadgeProps {
	name: IconProp;
	size?: ESize;
	kind?: EIconBadgeKind;
}

const sizeToClassName: { [key in ESize]: string } = {
	[ESize.XXXS]: "size-xxxs",
	[ESize.XXS]: "size-xxs",
	[ESize.XS]: "size-xs",
	[ESize.SM]: "size-sm",
	[ESize.MD]: "size-md",
	[ESize.LG]: "size-lg",
	[ESize.XL]: "size-xl",
	[ESize.XXL]: "size-xxl",
	[ESize.XXXL]: "size-xxxl",
	[ESize.XXXXL]: "size-xxxxl",
	[ESize.XXXXXL]: "size-xxxxxl",
	[ESize.AUTO]: "size-auto",
	[ESize.ZERO]: "size-zero",
};

const kindClasses = {
	[EIconBadgeKind.PRIMARY]: "bg-primary-500 text-white",
	[EIconBadgeKind.LIGHT]: "bg-primary-100 text-primary-800"
};

export const UiIconBadge: React.FC<IUiIconBadgeProps> = ({
	size,
	name,
	kind = EIconBadgeKind.PRIMARY
}) => {
	return (
		<div className={ cx(
			"ui-icon-badge",
			"rounded-full",
			"inline-flex",
			"items-center",
			"justify-center",
			"aspect-square",
			"p-xs",
			"max-w-[104px]",
			"max-h-[104px]",
			kindClasses[kind]
		) }>
			<FontAwesomeIcon
				icon={ name }
				className={ cx(
					"inline",
					"overflow-visible",
					"align-[-.125em]",
					size && sizeToClassName[size]
				) }
			/>
		</div>
	);
};
