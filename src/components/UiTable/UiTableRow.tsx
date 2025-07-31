import React from "react";
import cx from "classnames";

type TRowProps = React.HTMLAttributes<HTMLTableRowElement>;

export const UiTableRow: React.FC<TRowProps> = ({ children, className, ...rest }) => {
	return (
		<tr
			className={ cx(
				"text-center",
				"[&>td:last-of-type]:rounded-r-xxs",
				"[&>td:last-of-type]:text-right",
				"[&>td:first-of-type]:text-left",
				"[&>td:first-of-type]:rounded-l-xxs",
				className
			)
			}
			{ ...rest }
		>
			{ children }
		</tr>
	);
};
