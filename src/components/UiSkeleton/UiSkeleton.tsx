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
					) }
				>
					<div
						className={ cx(
							"ui-skeleton-card__content",
							"bg-secondary-alt-300",
							"flex gap-xs items-center justify-center",
							"px-sm py-xxs",
							"md:border-r md:border-b-0 border-t-0 border-b border-secondary-alt-400",
							"md:rounded-tl-xl md:rounded-bl-xl md:rounded-tr-0",
							"rounded-tl-xl rounded-tr-xl md:rounded-br-0"
						) }
					>
						<div className={ cx("grid", "grow", "gap-xxs", "justify-items-center") }>
							<div
								className={ cx(
									"ui-skeleton-card__content",
									"bg-secondary-alt-400",
									"h-xxxl",
									"mb-sm",
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
									"bg-secondary-alt-400",
									"h-md",
									"mb-xxs",
									"rounded-sm",
									"w-3/5"
								) }
							/>

							<div className={ cx("flex", "flex-wrap", "gap-xs", "mb-xxs") }>
								{ ["w-2/5", "w-1/4"].map((widthClass, index) => {
									return (
										<div
											key={ index }
											className={ cx(widthClass, "h-md", "bg-secondary-alt-300", "rounded-sm") }
										/>
									);
								}) }
							</div>

							<div className={ cx("flex", "justify-between") }>
								{ ["w-1/3", "w-1/4"].map((widthClass, index) => {
									return (
										<div
											key={ index }
											className={ cx(
												widthClass,
												"h-[20px]",
												index === 0
													? "bg-secondary-alt-400"
													: "bg-secondary-alt-300",
												"rounded-sm",
												"mb-xxs"
											) }
										/>
									);
								}) }
							</div>
						</div>

						<div className={ cx("border-t border-secondary-alt-400", "md:grid md:grid-cols-2") }>
							<div className={ cx(
								"flex flex-col justify-between md:justify-center md:items-center md:flex-col",
								"md:border-r border-secondary-alt-400",
								"p-xs md:border-b-0 border-b"
							) }>
								{ ["w-2/3", "w-2/4"].map((widthClass, index) => {
									return (
										<div
											key={ index }
											className={ cx(
												"bg-secondary-alt-300",
												"mb-xxxs",
												"rounded-sm",
												widthClass,
												index === 1
													? "h-md"
													: "h-[20px]"
											) }
										/>
									);
								}) }
							</div>

							<div className={ cx(
								"flex flex-col justify-between md:justify-center md:items-center md:flex-col",
								"p-xs"
							) }>
								{ ["w-2/3", "w-2/4"].map((widthClass, index) => {
									const heightClass = index === 1
										? "h-md"
										: "h-[20px]";
									return (
										<div
											key={ index }
											className={ cx(
												"bg-secondary-alt-300",
												"mb-xxxs",
												"rounded-sm",
												widthClass,
												heightClass
											) }
										/>
									);
								}) }
							</div>
						</div>
					</div>

					<div
						className={ cx(
							"ui-skeleton-cta-cell",
							"bg-secondary-alt-200",
							"flex flex-row md:flex-col md:grid md:place-content-center md:items-center md:gap-sm",
							"border-t md:border-t-0 border-l-0 md:border-l border-secondary-alt-400",
							"p-sm justify-between items-center",
							"md:rounded-tr-xl md:rounded-br-xl md:rounded-bl-0",
							"rounded-bl-xl rounded-br-xl md:rounded-tl-0"
						) }
					>
						<div className={ cx("flex flex-col md:items-center") }>
							{ ["w-3/4", "w-1/2"].map((widthClass, index) => {
								const heightClass = index === 0
									? "h-lg"
									: "h-[20px]";
								return (
									<div
										key={ index }
										className={ cx(
											"bg-secondary-alt-400",
											"mb-xxxs",
											"rounded-sm",
											widthClass,
											heightClass
										) }
									/>
								);
							}) }
						</div>

						<div
							className={ cx(
								"bg-secondary-alt-500",
								"h-xxl",
								"rounded-sm",
								"w-3/4 md:w-4/5"
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
					<div className={ cx(
						"grid",
						"grid-cols-3",

					) } >
						{ Array.from({
							length: 3
						}).map((_, index)=> (
							<div key={ index } className={ cx(
								"border",
								"border-l-0",
								"border-secondary-alt-300",
								"py-xxs",
								"place-items-center",
								index === 2
									? "border-r-0"
									: ""

							) } >

								{ ["w-2/3", "w-2/4"].map((widthClass, index) => {
									const bgClass = index === 0
										? "bg-secondary-alt-300"
										: "bg-secondary-alt-400";

									return (
										<div
											key={ index }
											className={ cx(
												"bg-secondary-alt-300",
												"mb-xxxs",
												"rounded-sm",
												"h-md",
												bgClass,
												widthClass,

											) }
										/>
									);
								}) }
							</div>

						)) }

					</div>

					<div className={ cx(
						"flex",
						"gap-sm",
						"my-xxs"
					) }>
						{ ["w-2/6", "w-2/6"].map((widthClass, index) => {
							return (
								<div
									key={ index }
									className={ cx(widthClass, "h-md", "bg-secondary-alt-300", "rounded-sm") }
								/>
							);
						}) }
					</div>

					<div className={ cx(
						"flex",
						"justify-between"
					) }>

						<div className={ cx(
							"flex",
							"flex-col",
							"gap-xxxs",
							"w-full"

						) }>

							{ ["w-3/5", "w-2/5", "w-3/6","w-3/5"].map((widthClass, index) => {
								const bgClass = index === 3
									? "bg-secondary-alt-400"
									: "bg-secondary-alt-300";
								const heightClass = index === 2
									? "h-md"
									: index === 3
										? "h-sm"
										: "h-[20px]";
								return (

									<div
										key={ index }
										className={ cx(
											"rounded-sm",
											widthClass,
											heightClass,
											bgClass

										) }
									/>
								);
							}) }
						</div>

						<div className={ cx(
							"flex",
							"flex-col",
							"gap-xxxs",
							"w-full",
							"items-end"
						) }>

							{ ["w-3/6", "w-2/5", "w-3/5"].map((widthClass, index)=> {
								const bgClass = index === 1
									? "bg-secondary-alt-300"
									: "bg-secondary-alt-400";
								const roundClass = index === 2
									? "rounded-full"
									: "rounded-sm";
								const heightClass = index === 1
									? "h-[20px]"
									: "h-md";
								const marginsClass = index === 0
									? "mt-xxs"
									: index === 2
										? "mt-xxs"
										: "mt-0";
								return (

									<div
										key={ index }
										className={ cx(
											roundClass,
											widthClass,
											heightClass,
											bgClass,
											marginsClass,

										) }
									/>
								);
							}) }
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
						"border-secondary-alt-400",
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
