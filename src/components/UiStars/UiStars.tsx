import React from "react";
import cx from "classnames";
import { EStarsSize, EStarColors } from "./_types";

export const colorClasses = {
	[EStarColors.DEFAULT]: "text-accent-alt-600",
	[EStarColors.PRIMARY]: "text-primary",
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
							viewBox="0 0 25 23"
						>
							{ isPartiallyFilled && (
								<defs>
									<linearGradient id={ `star-fill-${index}` } x1="0" x2="1" y1="0" y2="0">
										<stop offset={ `${filledPercentage}%` } stopColor="currentColor" />
										<stop offset={ `${filledPercentage}%` } stopColor="transparent" />
									</linearGradient>
								</defs>
							) }
							<path
								d="M11.474 1.68128C11.8026 0.912241 12.8927 0.912241 13.2213 1.68128L15.5868 7.21835C15.7989 7.71478 16.2692 8.0523 16.8074 8.09431L22.8886 8.56895C23.738 8.63525 24.0774 9.69994 23.4231 10.2457L18.8377 14.0697C18.4124 14.4244 18.2263 14.9904 18.3581 15.5283L19.7672 21.2797C19.9677 22.0979 19.083 22.7529 18.3589 22.3223L13.0888 19.1884C12.632 18.9167 12.0633 18.9167 11.6065 19.1884L6.33637 22.3223C5.61231 22.7529 4.72763 22.0979 4.9281 21.2797L6.33724 15.5283C6.46904 14.9904 6.28291 14.4244 5.85758 14.0697L1.27223 10.2457C0.617879 9.69994 0.957297 8.63525 1.80676 8.56895L7.88795 8.09431C8.42615 8.0523 8.89645 7.71478 9.10853 7.21835L11.474 1.68128Z"
								fill={ isCompletelyFilled ? "currentColor" : (isPartiallyFilled ? `url(#star-fill-${index})` : "transparent") }
							/>
						</svg>
					</div>
				);
			}) }
		</div>
	);
};
