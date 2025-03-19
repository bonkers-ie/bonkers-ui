import React from "react";
import { EBadgeKind, UiPills } from "../UiPills";
import {
	UiTypography, ETypographySizes, ETextWeight, ETextAlign, EColors
} from "../UiTypography";
import cx from "classnames";

type TUiProductCardProps = {
	badgeText?: string;
	title?: React.ReactNode;
	subtitle?: React.ReactNode;
	header?: React.ReactNode;
	className?: string;
}

export const UiProductCard: React.FC<TUiProductCardProps> = ({
	badgeText,
	title,
	subtitle,
	header,
	className
}) => {
	return (
		<div className={ cx(
			"relative flex flex-col gap-sm rounded-2xl border border-secondary-alt-500 bg-white",
			"px-xs py-sm",
			className
		) }>

			{ badgeText && (
				<div className="absolute! -top-xxs right-xs">
					<UiPills rounded kind={ EBadgeKind.ACCENT_ALT }>{ badgeText }</UiPills>
				</div>
			) }

			{ header }

			<div className="grid gap-xxs">
				<UiTypography
					size={ ETypographySizes.MD }
					weight={ ETextWeight.BOLD }
					align={ ETextAlign.LEFT }
					color={ EColors.SECONDARY }
					lineHeight
				>
					{ title }
				</UiTypography>

				<UiTypography
					size={ ETypographySizes.XS }
					align={ ETextAlign.LEFT }
					color={ EColors.SECONDARY_400 }
					lineHeight
				>
					{ subtitle }
				</UiTypography>
			</div>
		</div >
	);
};
