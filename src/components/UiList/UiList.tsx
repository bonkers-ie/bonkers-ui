import React from "react";
import { EListItemDirection, EListItemSize, EListItemSpacing } from "./_types.ts";
import cx from "classnames";

interface IUiListProps {
	children?: React.ReactNode
	direction?: EListItemDirection
	size?: EListItemSize
	spacing?: EListItemSpacing
	className?:string
}

const directionClasses = {
	[EListItemDirection.VERTICAL]: "flex-col",
	[EListItemDirection.HORIZONTAL]: "flex-row"
};

const spacingClasses = {
	[EListItemSpacing.DEFAULT]: "gap-sm",
	[EListItemSpacing.COMPACT]: "gap-xxs"
};

const sizeClasses = {
	[EListItemSize.SM]: "text-sm",
	[EListItemSize.MD]: "text-md"
};

export const UiList: React.FC<IUiListProps> = ({
	children,
	direction = EListItemDirection.VERTICAL,
	spacing = EListItemSpacing.DEFAULT,
	size = EListItemSize.SM,
	className
}) => {
	return (
		<ul className={ cx(
			"ui-list",
			"flex",
			directionClasses[direction],
			spacingClasses[spacing],
			sizeClasses[size],
			className
		) }>
			{ children }
		</ul>
	);
};
