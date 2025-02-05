import React from "react";
import cx from "classnames";
import { EColors } from "../../_types/colors.ts";
import { EStarsSize } from "./_types.ts";
interface IUiStars {
	min: number
	max: number
	current: number
	size?: EStarsSize
	color?: EColors
}

const sizeClasses = {
	[EStarsSize.SM]: "w-sm h-sm",
	[EStarsSize.MD]: "w-md h-md",
	[EStarsSize.LG]: "w-lg h-lg"
};

const colorClasses = {
	[EColors.WHITE]: "text-white",
	[EColors.BLACK]: "text-black",
	[EColors.TRANSPARENT]: "text-transparent",
	[EColors.CURRENT]: "text-current",

	[EColors.PRIMARY]: "text-primary",
	[EColors.PRIMARY_50]: "text-primary-50",
	[EColors.PRIMARY_100]: "text-primary-100",
	[EColors.PRIMARY_200]: "text-primary-200",
	[EColors.PRIMARY_300]: "text-primary-300",
	[EColors.PRIMARY_400]: "text-primary-400",
	[EColors.PRIMARY_500]: "text-primary-500",
	[EColors.PRIMARY_600]: "text-primary-600",
	[EColors.PRIMARY_700]: "text-primary-700",
	[EColors.PRIMARY_800]: "text-primary-800",
	[EColors.PRIMARY_900]: "text-primary-900",

	[EColors.PRIMARY_ALT]: "text-primary-alt",
	[EColors.PRIMARY_ALT_300]: "text-primary-alt-300",
	[EColors.PRIMARY_ALT_400]: "text-primary-alt-400",
	[EColors.PRIMARY_ALT_500]: "text-primary-alt-500",
	[EColors.PRIMARY_ALT_600]: "text-primary-alt-600",
	[EColors.PRIMARY_ALT_700]: "text-primary-alt-700",

	[EColors.WARNING]: "text-warning",
	[EColors.WARNING_300]: "text-warning-300",
	[EColors.WARNING_400]: "text-warning-400",
	[EColors.WARNING_500]: "text-warning-500",
	[EColors.WARNING_600]: "text-warning-600",
	[EColors.WARNING_700]: "text-warning-700",

	[EColors.SECONDARY]: "text-secondary",
	[EColors.SECONDARY_300]: "text-secondary-300",
	[EColors.SECONDARY_400]: "text-secondary-400",
	[EColors.SECONDARY_500]: "text-secondary-500",
	[EColors.SECONDARY_600]: "text-secondary-600",
	[EColors.SECONDARY_700]: "text-secondary-700",

	[EColors.SECONDARY_ALT]: "text-secondary-alt",
	[EColors.SECONDARY_ALT_200]: "text-secondary-alt-200",
	[EColors.SECONDARY_ALT_300]: "text-secondary-alt-300",
	[EColors.SECONDARY_ALT_400]: "text-secondary-alt-400",
	[EColors.SECONDARY_ALT_500]: "text-secondary-alt-500",
	[EColors.SECONDARY_ALT_600]: "text-secondary-alt-600",
	[EColors.SECONDARY_ALT_700]: "text-secondary-alt-700",

	[EColors.ERROR]: "text-error",
	[EColors.ERROR_100]: "text-error-100",
	[EColors.ERROR_200]: "text-error-200",
	[EColors.ERROR_300]: "text-error-300",
	[EColors.ERROR_400]: "text-error-400",
	[EColors.ERROR_500]: "text-error-500",
	[EColors.ERROR_600]: "text-error-600",
	[EColors.ERROR_700]: "text-error-700",

	[EColors.ACCENT]: "text-accent",
	[EColors.ACCENT_300]: "text-accent-300",
	[EColors.ACCENT_500]: "text-accent-500",
	[EColors.ACCENT_600]: "text-accent-600",
	[EColors.ACCENT_700]: "text-accent-700",

	[EColors.ACCENT_ALT]: "text-accent-alt",
	[EColors.ACCENT_ALT_300]: "text-accent-alt-300",
	[EColors.ACCENT_ALT_400]: "text-accent-alt-400",
	[EColors.ACCENT_ALT_500]: "text-accent-alt-500",
	[EColors.ACCENT_ALT_600]: "text-accent-alt-600",
	[EColors.ACCENT_ALT_700]: "text-accent-alt-700",
};

export const UiStars: React.FC<IUiStars> = ({
	min = 0,
	max = 5,
	current,
	size = EStarsSize.MD,
	color = EColors.PRIMARY
}) => {
	const totalStars = max - min;
	const filledStars = Math.min(Math.max(current - min, 0), max - min);

	return (
		<div className="flex">
			{ [...Array(totalStars)].map((_, index) => {
				const isFilled = index < Math.floor(filledStars);
				const isPartial = !isFilled && index === Math.floor(filledStars);
				const partialFill = isPartial
					? 15 + (Number((filledStars % 1).toFixed(6)) * 70)
					: 0;

				return (
					<div key={ index } className="relative">
						<svg
							className={ cx(
								sizeClasses[size],
								colorClasses[color]
							) }
							viewBox="0 0 24 24"
						>
							<defs>
								{ isPartial && (
									<linearGradient id={ `star-fill-${index}` } x1="0" x2="1" y1="0" y2="0">
										<stop offset={ `${partialFill}%` } stopColor="currentColor" />
										<stop offset={ `${partialFill}%` } stopColor="transparent" />
									</linearGradient>
								) }
							</defs>
							<path
								d="M12 2L14.8 8.1L22 8.9L17 13.4L18.2 20L12 16.9L5.8 20L7 13.4L2 8.9L9.2 8.1L12 2Z"
								fill={ isFilled ? "currentColor" : (isPartial ? `url(#star-fill-${index})` : "none") }
								strokeWidth="1.5"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</div>
				);
			}) }
		</div>
	);
};
