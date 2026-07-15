import React from "react";
import cx from "classnames";
import { EStarsSize } from "./_types";
import { EColors, colorClasses } from "../../_types/colors";

const STAR_OUTLINE_PATH = "M29 4C30.1595 4 31.1082 4.73824 31.4244 5.79286L36.8004 22.5614H53.4553C54.5094 22.5614 55.4581 23.2996 55.8797 24.2488C56.1959 25.3034 55.8797 26.4635 55.0364 27.0963L41.2276 37.8534L46.6036 54.7274C46.9198 55.782 46.4982 56.9421 45.6549 57.5749C44.7062 58.2076 43.5467 58.1022 42.598 57.4694L29 46.8177L15.402 57.4694C14.4533 58.1022 13.2938 58.2076 12.3451 57.5749C11.5018 56.9421 11.0802 55.782 11.3964 54.7274L16.7724 37.8534L2.96357 27.0963C2.12029 26.4635 1.80406 25.3034 2.12029 24.2488C2.54193 23.2996 3.49063 22.5614 4.54473 22.5614H21.305L26.5756 5.79286C26.8918 4.73824 27.9459 4 29 4ZM29 14.8626L25.5214 25.8307C25.2052 26.8853 24.2565 27.6236 23.097 27.6236H11.9235L21.305 34.9005C22.1483 35.5332 22.4645 36.6933 22.1483 37.6425L18.6698 48.5051L27.4188 41.6501C28.3675 40.9118 29.6325 40.9118 30.5812 41.6501L39.3302 48.5051L35.8517 37.6425C35.5355 36.6933 35.8517 35.5332 36.695 34.9005L46.0765 27.6236H34.903C33.8489 27.6236 32.7948 26.8853 32.4785 25.8307L29 14.8626Z";
const STAR_SOLID_PATH = "M31.4245 5.79286L36.8004 22.5614H53.4554C54.5095 22.5614 55.458 23.2996 55.8796 24.2488C56.196 25.3034 55.8796 26.4635 55.0364 27.0963L41.2277 37.8533L46.6035 54.7273C46.9199 55.7822 46.6035 56.9421 45.655 57.5749C44.7064 58.2077 43.5467 58.1021 42.5982 57.4696L29 46.8177L15.4021 57.4696C14.4534 58.1021 13.2938 58.2077 12.3451 57.5749C11.5019 56.9421 11.0802 55.7822 11.3964 54.7273L16.7724 37.8533L2.96357 27.0963C2.12029 26.4635 1.80406 25.3034 2.12029 24.2488C2.54193 23.2996 3.49063 22.5614 4.54474 22.5614H21.3051L26.5756 5.79286C26.8918 4.73824 27.9459 4 29 4C30.1596 4 31.1083 4.73824 31.4245 5.79286Z";

interface IUiStars {
	starsFilled?: number
	size?: EStarsSize
	count?: number
	color?: EColors
	name?: string
	className?: string
	showOutline?: boolean
}

const sizeClasses = {
	[EStarsSize.SM]: "w-sm h-sm",
	[EStarsSize.MD]: "w-md h-md",
	[EStarsSize.LG]: "w-lg h-lg"
};

export const UiStars = ({
	starsFilled = 0,
	size = EStarsSize.MD,
	count = 5,
	className,
	color = EColors.PRIMARY,
	name = "stars",
	showOutline = true
}: IUiStars) => {
	const filledStars = Math.min(Math.max(starsFilled, 0), count);

	return (
		<div className={ cx("flex", "gap-xxxs", className) }>
			{ Array.from({
				length: count
			}, (_, index) => {
				const filledPercentage = Math.min(Math.max((filledStars - index) * 100, 0), 100);
				const isPartiallyFilled = filledPercentage > 0 && filledPercentage < 100;
				const fillClipId = `${name}-fill-clip-${index}`;

				return (
					<div key={ index } className="relative">
						<svg
							className={ cx(
								sizeClasses[size],
								colorClasses[color]
							) }
							viewBox="0 0 60 60"
						>
							{ showOutline && filledPercentage < 100 && (
								<path
									d={ STAR_OUTLINE_PATH }
									fill="currentColor"
								/>
							) }
							{ (filledPercentage > 0) && (
								<>
									{ isPartiallyFilled && (
										<clipPath id={ fillClipId }>
											<rect x="0" y="0" width={ `${filledPercentage}%` } height="100%" />
										</clipPath>
									) }
									<path
										d={ STAR_SOLID_PATH }
										fill="currentColor"
										clipPath={ isPartiallyFilled
											? `url(#${fillClipId})`
											: undefined }
									/>
								</>
							) }
						</svg>
					</div>
				);
			}) }
		</div>
	);
};
