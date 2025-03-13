import React from "react";
import { UiTypography, ETypographySizes, ETextWeight, EColors } from "../UiTypography";
// import { UiStars } from "../UiStars";
import type { IUiFeefo } from "./_types";
import FeefoLogo from "../../assets/images/feefo-logo.webp";

export const UiFeefo: React.FC<IUiFeefo> = ({
	overallRating = 4.7,
	totalReviews = 6704,
	reviews = [
		{
			author: "Customer",
			timeAgo: "about 18 hours ago",
			title: "Lots of Choices - Easy to Switch",
			content: "Gives plenty of options and the transfer over to a new supplier seems easy",
			rating: 5
		},
		{
			author: "Customer",
			timeAgo: "2 days ago",
			title: "Excellent website",
			content: "Website was very easy to use and changeover to new provider was seamless",
			rating: 5
		}
	]
}) => {
	return (
		<div className="rounded-3xl border border-secondary-alt-500 bg-white p-lg">
			<div className="mb-md text-center">
				<div className="relative flex flex-col items-center justify-center gap-xs md:flex-row md:gap-xxs">
					<UiTypography
						size={ ETypographySizes.XL }
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
							<span className="absolute right-0 top-1/2 -z-[1] h-[20px] w-[170px] -translate-x-[5px] -translate-y-1/2 skew-x-[16deg] rounded-[3px] bg-[rgba(254,220,100,0.5)]" />
						</span>
					</UiTypography>
				</div>

				<UiTypography
					size={ ETypographySizes.SM }
					color={ EColors.SECONDARY_400 }
				>
					Independent Service Rating based on { totalReviews } verified reviews. Read all reviews.
				</UiTypography>
			</div>

			<div className="grid gap-md">
				{ reviews.map((review, index) => (
					<div key={ index } className="grid gap-xxs">
						{ /* <UiStars currentRating={ review.rating } /> */ }

						<UiTypography
							size={ ETypographySizes.MD }
							weight={ ETextWeight.BOLD }
							className="text-center"
							color={ EColors.SECONDARY }
						>
							{ review.title }
						</UiTypography>

						<UiTypography
							size={ ETypographySizes.SM }
							color={ EColors.SECONDARY }
							className="text-center"
						>
							{ review.content }
						</UiTypography>

						<div className="flex gap-xs text-secondary-400 text-center justify-center">
							<UiTypography
								size={ ETypographySizes.XS }
								className="text-center"
							>
								{ review.author }
							</UiTypography>
							<UiTypography
								size={ ETypographySizes.XS }
								color={ EColors.SECONDARY_400 }
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
