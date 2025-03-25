import React from "react";
import { UiTypography, ETypographySizes, ETextWeight, EColors } from "../UiTypography";
import { UiStars } from "../UiStars";
import type { IUiFeefo } from "./_types";
import FeefoLogo from "../../assets/images/feefo-logo.webp";

export const UiFeefo: React.FC<IUiFeefo> = ({
	overallRating = 4.7,
	totalReviews = 6704,
	reviews = [
		{
			author: "Tom Morello",
			timeAgo: "about 18 hours ago",
			title: "Lots of Choices - Easy to Switch",
			content: "Gives plenty of options and the transfer over to a new supplier seems easy",
			rating: 5
		},
		{
			author: "Joe Soap",
			timeAgo: "2 days ago",
			title: "Excellent website",
			content: "Website was very easy to use and changeover to new provider was seamless",
			rating: 5
		}
	]
}) => {
	return (
		<div className="rounded-3xl max-w-[1536px] border-16 border-accent-alt-300 bg-white p-lg">
			<div className="mb-xxxl text-center">
				<div className="relative flex flex-col items-center mb-lg justify-center gap-xxs md:flex-row md:gap-xxs">
					<UiTypography
						size={ ETypographySizes.XXL }
						className="relative z-10"
						weight={ ETextWeight.BOLD }
						color={ EColors.SECONDARY }
					>
						<span className="relative">
							Our customers rate us
						</span>
					</UiTypography>
					<UiTypography
						size={ ETypographySizes.XL }
						className="relative z-10"
						weight={ ETextWeight.BOLD }
						color={ EColors.SECONDARY }
					>
						<span className="relative">
							{ overallRating } out of 5 stars!
							<span className="absolute -right-[10px] md:-right-[14px] top-1/2 -z-[1] h-[30px] w-[180px] -translate-x-[5px] -translate-y-1/2 skew-x-[16deg] rounded-[3px] bg-[rgba(254,220,100,0.5)]" />
						</span>
					</UiTypography>
				</div>

				<UiTypography
					size={ ETypographySizes.MD }
					color={ EColors.SECONDARY }
				>
					Independent Service Rating based on <b>{ totalReviews }</b> verified reviews. Read all reviews.
				</UiTypography>
			</div>

			<div className="grid gap-xxxl mb-xxxl grid-cols-1 md:grid-cols-2">
				{ reviews.map((review, index) => (
					<div key={ index } className="grid gap-sm">
						<UiStars starsFilled={ review.rating } />

						<UiTypography
							size={ ETypographySizes.LG }
							weight={ ETextWeight.BOLD }
							className="text-center"
							color={ EColors.SECONDARY }
						>
							{ review.title }
						</UiTypography>

						<UiTypography
							size={ ETypographySizes.MD }
							color={ EColors.SECONDARY }
							className="text-center"
						>
							{ review.content }
						</UiTypography>

						<div className="flex gap-xxxs text-secondary-400 text-center justify-center">
							<UiTypography
								size={ ETypographySizes.XS }
								color={ EColors.SECONDARY_ALT_500 }
								className="text-center"
							>
								{ review.author }
							</UiTypography>
							<UiTypography
								size={ ETypographySizes.XS }
								color={ EColors.SECONDARY_ALT_400 }
								className="text-center"
							>
								- { review.timeAgo }
							</UiTypography>
						</div>
					</div>
				)) }
			</div>

			<div className="mt-lg flex justify-center">
				<img
					src={ FeefoLogo }
					alt="Feefo"
					className="h-[30px]"
				/>
			</div>
		</div>
	);
};
