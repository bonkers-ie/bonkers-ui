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
							"flex items-center justify-center gap-xs",
							"px-sm py-xxs",
							"border-t-0 border-b border-secondary-alt-300 md:border-b-0",
							"md:rounded-tl-xl md:rounded-bl-xl",
							"md:rounded-br-0 rounded-tl-xl"
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

							<div className={ cx("mb-xxs flex flex-wrap gap-xs") }>
								<div className={ cx("h-md w-2/5 rounded-sm bg-secondary-alt-300") } />
								<div className={ cx("h-md w-1/4 rounded-sm bg-secondary-alt-300") } />
							</div>

							<div className={ cx("flex justify-between") }>
								<div className={ cx("mb-xxs h-[20px] w-1/3 rounded-sm bg-secondary-alt-300") } />
								<div className={ cx("mb-xxs h-[20px] w-1/4 rounded-sm bg-secondary-alt-300") } />
							</div>
						</div>

						<div className={ cx("border-t border-secondary-alt-300", "md:grid md:grid-cols-2") }>
							<div className={ cx(
								"hidden flex-col justify-between md:flex md:flex-col md:items-center md:justify-center",
								"border-secondary-alt-300 md:border-r",
								"border-b p-xs md:border-b-0"
							) }>
								<div className={ cx("mb-xxxs h-[20px] w-2/3 rounded-sm bg-secondary-alt-300") } />
								<div className={ cx("mb-xxxs h-md w-2/4 rounded-sm bg-secondary-alt-300") } />
							</div>

							<div className={ cx("flex flex-col justify-between p-xs md:flex-col md:items-center md:justify-center") }>
								<div className={ cx("mb-xxxs h-md w-2/3 rounded-sm bg-secondary-alt-300") } />
								<div className={ cx("mb-xxxs h-md w-2/4 rounded-sm bg-secondary-alt-300") } />
							</div>
						</div>
					</div>

					<div
						className={ cx(
							"ui-skeleton-cta-cell",
							"bg-secondary-alt-200",
							"flex flex-row md:grid md:flex-col md:place-content-center md:items-center md:gap-sm",
							"border-t border-l-0 border-secondary-alt-300 md:border-t-0",
							"items-center justify-between p-sm",
							"md:rounded-tr-xl md:rounded-br-xl",
							"md:rounded-tl-0 rounded-br-xl",
							"md:border-l"
						) }
					>
						<div className={ cx("flex w-full flex-col md:items-center") }>
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
						<div className={ cx("place-items-center border border-l-0 border-secondary-alt-300 py-xxs") }>
							<div className={ cx("mb-xxxs h-md w-2/3 rounded-sm bg-secondary-alt-400") } />
							<div className={ cx("mb-xxxs h-md w-2/4 rounded-sm bg-secondary-alt-300") } />
						</div>

						<div className={ cx("place-items-center border border-l-0 border-secondary-alt-300 py-xxs") }>
							<div className={ cx("mb-xxxs h-md w-2/3 rounded-sm bg-secondary-alt-400") } />
							<div className={ cx("mb-xxxs h-md w-2/4 rounded-sm bg-secondary-alt-300") } />
						</div>

						<div className={ cx("place-items-center border border-r-0 border-l-0 border-secondary-alt-300 py-xxs") }>
							<div className={ cx("mb-xxxs h-md w-2/3 rounded-sm bg-secondary-alt-400") } />
							<div className={ cx("mb-xxxs h-md w-2/4 rounded-sm bg-secondary-alt-300") } />
						</div>
					</div>

					<div className={ cx("my-xxs flex gap-sm") }>
						<div className={ cx("h-md w-2/6 rounded-sm bg-secondary-alt-300") } />
						<div className={ cx("h-md w-2/6 rounded-sm bg-secondary-alt-300") } />
					</div>

					<div className={ cx(
						"flex",
						"justify-between"
					) }>

						<div className={ cx("flex w-full flex-col gap-xxxs") }>
							<div className={ cx("h-[20px] w-3/5 rounded-sm bg-secondary-alt-300") } />
							<div className={ cx("h-[20px] w-2/5 rounded-sm bg-secondary-alt-300") } />
							<div className={ cx("h-md w-3/6 rounded-sm bg-secondary-alt-300") } />
							<div className={ cx("h-sm w-3/5 rounded-sm bg-secondary-alt-400") } />
						</div>

						<div className={ cx("flex w-full flex-col items-end gap-xxxs") }>
							<div className={ cx("mt-xxs h-md w-3/6 rounded-sm bg-secondary-alt-400") } />
							<div className={ cx("mt-0 h-[20px] w-2/5 rounded-sm bg-secondary-alt-300") } />
							<div className={ cx("mt-xxs h-md w-3/5 rounded-full bg-secondary-alt-400") } />
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
