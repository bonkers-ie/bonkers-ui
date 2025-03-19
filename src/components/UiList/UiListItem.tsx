import React from "react";
import cx from "classnames";

interface IUiListItemProps {
	children: React.ReactNode
	className?: string
	prefix?: React.ReactNode
}
export const UiListItem: React.FC<IUiListItemProps> = ({ children, prefix, className }) => {

	return (
		<li className={ cx("flex gap-xxxs", className) }>
			{
				prefix
					? <span className="w-[1em]">
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
