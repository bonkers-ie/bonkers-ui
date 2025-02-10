import React from "react";
import cx from "classnames";
import { EStarsSize, EStarColors } from "./_types";

export const colorClasses = {
	[EStarColors.DEFAULT]: "text-accent-alt-600",
	[EStarColors.GOLD]: "text-accent-alt-600",
	[EStarColors.GREEN]: "text-primary",
	[EStarColors.WHITE]: "text-white",
	[EStarColors.BLACK]: "text-black",
	[EStarColors.CURRENT]: "text-current",
};

interface IUiStars {
	currentRating: number
	size?: EStarsSize
	color?: EStarColors
}

const sizeClasses = {
	[EStarsSize.SM]: "w-sm h-sm",
	[EStarsSize.MD]: "w-md h-md",
	[EStarsSize.LG]: "w-lg h-lg"
};

export const UiStars = ({
	currentRating,
	size = EStarsSize.MD,
	color = EStarColors.DEFAULT
}: IUiStars) => {
	const filledStars = Math.min(Math.max(currentRating, 0), 5);

	return (
		<div className="flex">
			{ Array.from({
				length: 5
			}, (_, index) => {
				const isCompletelyFilled = index < Math.floor(filledStars);
				const isPartiallyFilled = !isCompletelyFilled && index === Math.floor(filledStars);

				let filledPercentage = 0;

				if (isPartiallyFilled) {
					const decimal = filledStars % 1;
					filledPercentage = decimal * 100;
				}

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
								{ isPartiallyFilled && (
									<linearGradient id={ `star-fill-${index}` } x1="0" x2="1" y1="0" y2="0">
										<stop offset={ `${filledPercentage}%` } stopColor="currentColor" />
										<stop offset={ `${filledPercentage}%` } stopColor="transparent" />
									</linearGradient>
								) }
							</defs>
							<path
								d="M12 2L14.8 8.1L22 8.9L17 13.4L18.2 20L12 16.9L5.8 20L7 13.4L2 8.9L9.2 8.1L12 2Z"
								fill={ isCompletelyFilled ? "currentColor" : (isPartiallyFilled ? `url(#star-fill-${index})` : "none") }
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
