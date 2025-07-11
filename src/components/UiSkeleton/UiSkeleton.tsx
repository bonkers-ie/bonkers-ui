import React from "react";
import cx from "classnames";
import { ESkeletonKind } from "./_types";

type UiSkeletonProps = {
	kind: ESkeletonKind
	className?: string
}

export const UiSkeleton: React.FC<UiSkeletonProps> = ({
	kind,
	className
}) => {

	return (
		<div className={ className }>

			{ kind === ESkeletonKind.RESULT_CARD && (

				<div
					className={ cx(
						"ui-skeleton-card",
						"animate-pulse",
						"border-2",
						"border-secondary-alt-300",
						"md:grid md:grid-cols-[120px_1fr_180px]",
						"rounded-2xl",
						"overflow-hidden"
					) }
				>
					<div
						className={ cx(
							"ui-skeleton-card__content",
							"bg-secondary-alt-200",
							"flex gap-xs items-center justify-center",
							"px-sm py-xxs",
							"md:border-b-0 border-t-0 border-b border-secondary-alt-300",
							"md:rounded-tl-xl md:rounded-bl-xl",
							"rounded-tl-xl md:rounded-br-0"
						) }
					>
						<div className={ cx("grid", "grow", "gap-xxs", "justify-items-center") }>
							<div
								className={ cx(
									"ui-skeleton-card__content",
									"bg-secondary-alt-400",
									"h-xxxl",
									"md:mb-sm",
									"rounded-sm",
									"w-xxxl"
								) }
							/>
							<div
								className={ cx(
									"ui-skeleton-card__content",
									"bg-secondary-alt-400",
									"h-xxxxl",
									"rounded-full",
									"w-xxxxl",
									"hidden md:block"
								) }
							/>
						</div>
					</div>

					<div
						className={ cx(
							"ui-skeleton-main__content",
							"bg-white",
							"md:border-b-0"
						) }
					>
						<div className={ cx("grid", "gap-xxs", "p-sm") }>
							<div
								className={ cx(
									"bg-secondary-alt-300",
									"h-md",
									"mb-xxs",
									"rounded-sm",
									"w-3/5"
								) }
							/>

							<div className={ cx("flex flex-wrap gap-xs mb-xxs") }>
								<div className={ cx("w-2/5 h-md bg-secondary-alt-300 rounded-sm") } />
								<div className={ cx("w-1/4 h-md bg-secondary-alt-300 rounded-sm") } />
							</div>

							<div className={ cx("flex justify-between") }>
								<div className={ cx("w-1/3 h-[20px] bg-secondary-alt-300 rounded-sm mb-xxs") } />
								<div className={ cx("w-1/4 h-[20px] bg-secondary-alt-300 rounded-sm mb-xxs") } />
							</div>
						</div>

						<div className={ cx("border-t border-secondary-alt-300", "md:grid md:grid-cols-2") }>
							<div className={ cx(
								"hidden md:flex flex-col justify-between md:justify-center md:items-center md:flex-col",
								"md:border-r border-secondary-alt-300",
								"p-xs md:border-b-0 border-b"
							) }>
								<div className={ cx("bg-secondary-alt-300 mb-xxxs rounded-sm w-2/3 h-[20px]") } />
								<div className={ cx("bg-secondary-alt-300 mb-xxxs rounded-sm w-2/4 h-md") } />
							</div>

							<div className={ cx("flex flex-col justify-between md:justify-center md:items-center md:flex-col p-xs") }>
								<div className={ cx("bg-secondary-alt-300 mb-xxxs rounded-sm h-md w-2/3") } />
								<div className={ cx("bg-secondary-alt-300 mb-xxxs rounded-sm h-md w-2/4") } />
							</div>
						</div>
					</div>

					<div
						className={ cx(
							"ui-skeleton-cta-cell",
							"bg-secondary-alt-200",
							"flex flex-row md:flex-col md:grid md:place-content-center md:items-center md:gap-sm",
							"border-t md:border-t-0 border-l-0 border-secondary-alt-300",
							"p-sm justify-between items-center",
							"md:rounded-tr-xl md:rounded-br-xl",
							"rounded-br-xl md:rounded-tl-0",
							"md:border-l"
						) }
					>
						<div className={ cx("flex flex-col md:items-center w-full") }>
							<div className={ cx("bg-secondary-alt-300", "mb-xxxs", "rounded-sm", "h-lg", "w-[120px]") } />
						</div>

						<div
							className={ cx(
								"bg-secondary-alt-400",
								"h-xxl",
								"rounded-sm",
								"w-full"
							) }
						/>
					</div>
				</div>

			) }

			{ kind === ESkeletonKind.RESULT_CARD_MOBILE && (
				<div
					className={ cx(
						"ui-skeleton-card-mobile",
						"animate-pulse",
						"border-2",
						"border-secondary-alt-300",
						"rounded-2xl",
						"grid",
						"p-sm"
					) }>
					<div
						className={ cx(
							"ui-skeleton-card__content"
						) }
					>
						<div className="flex grow gap-sm">
							<div
								className={ cx(
									"ui-skeleton-card__content",
									"bg-secondary-alt-400",
									"h-xxxl",
									"rounded-sm",
									"w-xxxl"
								) }
							/>
							<div className={ cx("flex","flex-col", "grow") }>
								<div
									className={ cx(
										"ui-skeleton-card__content",
										"bg-secondary-alt-400",
										"h-md",
										"mb-sm",
										"rounded-sm",
										"w-4/5"
									) }
								/>
								<div
									className={ cx(
										"ui-skeleton-card__content",
										"bg-secondary-alt-400",
										"h-md",
										"mb-sm",
										"rounded-sm",
										"w-2/3"
									) }
								/>
							</div>
						</div>
					</div>
					<div className={ cx(
						"flex",
						"grow",
						"gap-xxs",
						"justify-center",
						"border-t",
						"p-sm",
						"border-secondary-alt-300") }>

						<div
							className={ cx(
								"ui-skeleton-card__content",
								"bg-secondary-alt-500",
								"h-xxxxl",
								"rounded-full",
								"w-xxxxl"

							) }
						/>
					</div>
					<div className={ cx("grid grid-cols-3") }>
						<div className={ cx("border border-l-0 border-secondary-alt-300 py-xxs place-items-center") }>
							<div className={ cx("mb-xxxs rounded-sm h-md w-2/3 bg-secondary-alt-400") } />
							<div className={ cx("mb-xxxs rounded-sm h-md w-2/4 bg-secondary-alt-300") } />
						</div>

						<div className={ cx("border border-l-0 border-secondary-alt-300 py-xxs place-items-center") }>
							<div className={ cx("mb-xxxs rounded-sm h-md w-2/3 bg-secondary-alt-400") } />
							<div className={ cx("mb-xxxs rounded-sm h-md w-2/4 bg-secondary-alt-300") } />
						</div>

						<div className={ cx("border border-l-0 border-secondary-alt-300 py-xxs place-items-center border-r-0") }>
							<div className={ cx("mb-xxxs rounded-sm h-md w-2/3 bg-secondary-alt-400") } />
							<div className={ cx("mb-xxxs rounded-sm h-md w-2/4 bg-secondary-alt-300") } />
						</div>
					</div>

					<div className={ cx("flex gap-sm my-xxs") }>
						<div className={ cx("w-2/6 h-md bg-secondary-alt-300 rounded-sm") } />
						<div className={ cx("w-2/6 h-md bg-secondary-alt-300 rounded-sm") } />
					</div>

					<div className={ cx(
						"flex",
						"justify-between"
					) }>

						<div className={ cx("flex flex-col gap-xxxs w-full") }>
							<div className={ cx("rounded-sm w-3/5 h-[20px] bg-secondary-alt-300") } />
							<div className={ cx("rounded-sm w-2/5 h-[20px] bg-secondary-alt-300") } />
							<div className={ cx("rounded-sm w-3/6 h-md bg-secondary-alt-300") } />
							<div className={ cx("rounded-sm w-3/5 h-sm bg-secondary-alt-400") } />
						</div>

						<div className={ cx("flex flex-col gap-xxxs w-full items-end") }>
							<div className={ cx("rounded-sm w-3/6 h-md bg-secondary-alt-400 mt-xxs") } />
							<div className={ cx("rounded-sm w-2/5 h-[20px] bg-secondary-alt-300 mt-0") } />
							<div className={ cx("rounded-full w-3/5 h-md bg-secondary-alt-400 mt-xxs") } />
						</div>
					</div>

					<div className={ cx(
						"flex",
						"h-md",
						"w-full",
						"rounded-sm",
						"bg-secondary-alt-400",
						"mt-sm"
					) } />

					<div className={ cx(
						"flex",
						"h-xxl",
						"w-full",
						"rounded-lg",
						"bg-secondary-alt-500",
						"mt-xxs"
					) } />

					<div className={ cx(
						"flex",
						"border-b",
						"border-secondary-alt-300",
						"mt-sm",
						"-mx-sm"

					) }
					/>

					<div className={ cx(
						"flex",
						"h-sm",
						"justify-center",
						"bg-secondary-alt-300",
						"rounded-sm",
						"mt-sm"
					) }
					/>

				</div>
			) }

		</div>
	);
};
