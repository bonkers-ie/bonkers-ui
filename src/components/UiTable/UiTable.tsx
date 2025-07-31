import React from "react";
import { ETableKind } from "./_types";
import cn from "classnames";

type TTableProps = {
	kind?: ETableKind;
	header?: React.ReactNode;
} & React.HTMLAttributes<HTMLTableElement>;

const kindClasses = {
	[ETableKind.DEFAULT]: "",
	[ETableKind.SECONDARY]: "[&>tr:nth-child(odd)>td]:bg-secondary-alt-200 rounded-lg",
	[ETableKind.SECONDARY_INVERTED]: "[&>tr:nth-child(even)>td]:bg-secondary-alt-200 rounded-lg",
};

export const UiTable: React.FC<TTableProps> = ({
	kind = ETableKind.SECONDARY_INVERTED,
	header,
	className,
	children,
	...rest
}) => {
	return (
		<table { ...rest } className={ className }>
			{ header && (<thead>{ header }</thead>) }
			<tbody className={ cn("rounded-xl", kindClasses[kind]) }>
				{ children }
			</tbody>
		</table>
	);
};
