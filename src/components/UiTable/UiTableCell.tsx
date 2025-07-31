import React from "react";
import {
	UiTypography, ETextAlign, ETypographySizes, ETextWeight, EColors
} from "../UiTypography";
import cx from "classnames";

type TCellProps = {
	align?: ETextAlign;
	subText?: React.ReactNode;
	weight?: ETextWeight;
	lineHeight?: boolean
} & React.HTMLAttributes<HTMLTableCellElement>;

export const UiTableCell: React.FC<TCellProps> = ({
	align,
	subText,
	weight,
	children,
	className,
	lineHeight,
	...rest
}) => {
	return (
		<td { ...rest } className={ cx("p-sm", className) }>
			<UiTypography
				tag="div"
				size={ ETypographySizes.SM }
				align={ align }
				weight={ weight }
				lineHeight={ lineHeight }
			>
				{ children }
				{
					subText
						? (
							<UiTypography
								tag="div"
								size={ ETypographySizes.XXS }
								weight={ ETextWeight.SEMI_BOLD }
								color={ EColors.PRIMARY_ALT_700 }
								className={ `flex flex-col gap-xxxs ${children
									? "pt-sm"
									: ""}` }
							>
								{ subText }
							</UiTypography>
						)
						: null
				}
			</UiTypography>
		</td>
	);
};
