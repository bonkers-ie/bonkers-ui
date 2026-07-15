import React from "react";
import cx from "classnames";
import { EStarsSize } from "./_types";
import { EColors, colorClasses } from "../../_types/colors";

const STAR_OUTLINE_PATH = "M6.04688 0C6.30469 0 6.51562 0.164062 6.58594 0.398438L7.78125 4.125H11.4844C11.7188 4.125 11.9297 4.28906 12.0234 4.5C12.0938 4.73438 12.0234 4.99219 11.8359 5.13281L8.76562 7.52344L9.96094 11.2734C10.0312 11.5078 9.9375 11.7656 9.75 11.9062C9.53906 12.0469 9.28125 12.0234 9.07031 11.8828L6.04688 9.51562L3.02344 11.8828C2.8125 12.0234 2.55469 12.0469 2.34375 11.9062C2.15625 11.7656 2.0625 11.5078 2.13281 11.2734L3.32812 7.52344L0.257812 5.13281C0.0703125 4.99219 0 4.73438 0.0703125 4.5C0.164062 4.28906 0.375 4.125 0.609375 4.125H4.33594L5.50781 0.398438C5.57812 0.164062 5.8125 0 6.04688 0ZM6.04688 2.41406L5.27344 4.85156C5.20312 5.08594 4.99219 5.25 4.73438 5.25H2.25L4.33594 6.86719C4.52344 7.00781 4.59375 7.26562 4.52344 7.47656L3.75 9.89062L5.69531 8.36719C5.90625 8.20312 6.1875 8.20312 6.39844 8.36719L8.34375 9.89062L7.57031 7.47656C7.5 7.26562 7.57031 7.00781 7.75781 6.86719L9.84375 5.25H7.35938C7.125 5.25 6.89062 5.08594 6.82031 4.85156L6.04688 2.41406Z";
const STAR_SOLID_PATH = "M6.04688 0C6.30469 0 6.51562 0.164062 6.58594 0.398438L7.78125 4.125H11.4844C11.7188 4.125 11.9297 4.28906 12.0234 4.5C12.0938 4.73438 12.0234 4.99219 11.8359 5.13281L8.76562 7.52344L9.96094 11.2734C10.0312 11.5078 9.9375 11.7656 9.75 11.9062C9.53906 12.0469 9.28125 12.0234 9.07031 11.8828L6.04688 9.51562L3.02344 11.8828C2.8125 12.0234 2.55469 12.0469 2.34375 11.9062C2.15625 11.7656 2.0625 11.5078 2.13281 11.2734L3.32812 7.52344L0.257812 5.13281C0.0703125 4.99219 0 4.73438 0.0703125 4.5C0.164062 4.28906 0.375 4.125 0.609375 4.125H4.33594L5.50781 0.398438C5.57812 0.164062 5.8125 0 6.04688 0Z";

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
							viewBox="0 0 13 13"
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
