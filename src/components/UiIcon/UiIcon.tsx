import React from "react";
import { ESize } from "../../_types/sizing";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cx from "classnames";
import { type IconProp } from "@fortawesome/fontawesome-svg-core";
import { EColors } from "../../_types/colors";

// Create a subset of EColors that we actually support
type IconKind = Extract<
	EColors,
	| EColors.PRIMARY
	| EColors.PRIMARY_800
	| EColors.WHITE
	| EColors.BLACK
	| EColors.CURRENT
>;

interface IUiIconProps {
	name: IconProp;
	size?: ESize;
	kind?: IconKind;
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

const kindClasses: { [key in IconKind]: string } = {
	[EColors.PRIMARY]: "text-primary",
	[EColors.PRIMARY_800]: "text-primary-800",
	[EColors.WHITE]: "text-white",
	[EColors.BLACK]: "text-black",
	[EColors.CURRENT]: "text-current",
};

export const UiIcon: React.FC<IUiIconProps> = ({ size, name, kind = EColors.CURRENT }) => {
	return (
		<FontAwesomeIcon
			icon={ name }
			className={ cx(
				"ui-icon",
				"inline",
				"overflow-visible",
				"align-[-.125em]",
				size && sizeToClassName[size],
				kind && kindClasses[kind]
			) }
		/>
	);
};
