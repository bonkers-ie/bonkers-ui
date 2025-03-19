
import React from "react";
import cx from "classnames";
import { EBadgeOffset, EBadgeSizes, EBadgeTypes } from "./_types";

type TUiNotificationBadge = {
	offset?: EBadgeOffset,
	children: React.ReactNode;
	kind?: EBadgeTypes;
	size?: EBadgeSizes;
	className?: string;

};

const offsetClasses = {
	[EBadgeOffset.DEFAULT]: "-right-xxxs -top-xxxs",
	[EBadgeOffset.OFFSET_BOTTOM_RIGHT]: "-right-xxxs -bottom-xxxs",
	[EBadgeOffset.OFFSET_TOP_LEFT]: "-left-xxxs -top-xxxs",
	[EBadgeOffset.OFFSET_BOTTOM_LEFT]: "-left-xxxs -bottom-xxxs",
};

const kindClasses = {
	[EBadgeTypes.DEFAULT]: `
		bg-error-500

	`,
	[EBadgeTypes.PRIMARY]: `
		bg-primary-800

	`,

};

const sizeClasses = {
	[EBadgeSizes.DEFAULT]: `
		h-sm
		min-w-sm
		p-xxxs
		text-xxs
	`,
	[EBadgeSizes.LARGE]: `
		h-lg
		min-w-lg
		p-xxs
		justify-center
		text-2xl
		border-2

	`

};

export const UiNotificationBadge: React.FC<TUiNotificationBadge> = ({
	offset = EBadgeOffset.DEFAULT,
	children,
	className,
	kind = EBadgeTypes.DEFAULT,
	size = EBadgeSizes.DEFAULT

}) => {

	return (
		<div
			className={ cx(
				"notification-badge",
				"absolute",
				"inline-flex",
				"items-center",
				"rounded-full",
				"border",
				"border-white",
				"text-center",
				"font-bold",
				"leading-none",
				"text-white",
				"whitespace-nowrap",
				"gap-xxxs",
				offsetClasses[offset],
				kindClasses[kind],
				sizeClasses[size],
				className
			) }
		>
			{ children }
		</div>
	);
};
