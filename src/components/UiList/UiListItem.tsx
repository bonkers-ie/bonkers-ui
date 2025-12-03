import React from "react";
import cx from "classnames";
import { EListItemSpacing } from "./_types";

const spacingClasses = {
	[EListItemSpacing.DEFAULT]: "gap-xxxs",
	[EListItemSpacing.COMPACT]: "gap-xxs"
};

interface IUiListItemProps {
	children: React.ReactNode
	className?: string
	prefix?: React.ReactNode
	space?: EListItemSpacing
}
export const UiListItem: React.FC<IUiListItemProps> = ({ children,
	prefix,
	className,
	space = EListItemSpacing.DEFAULT }) => {

	return (
		<li className={ cx("flex", spacingClasses[space], className) }>
			{
				prefix
					? <span className="inline-flex h-lh items-center">
						{ prefix }
					</span>
					: null
			}
			{
				children
					? <span>
						{ children }
					</span>
					: null
			}
		</li>
	);
};
