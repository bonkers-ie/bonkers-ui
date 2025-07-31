import React from "react";
import cx from "classnames";

type UiTabsProps = {
	tabs: string[]
	tabsModel: string,
	className: string
	onTabChange: (val: string) => void
}

export const UiTabs: React.FC<UiTabsProps> = ({
	tabs,
	tabsModel,
	onTabChange,
	className
}) => {

	return (
		<ul className={ cx(
			"ui-tabs",
			"grid",
			"grid-flow-col",
			"items-stretch",
			"rounded-full",
			"bg-secondary-alt-200",
			"p-[2px]",
			"text-secondary-400",
			className
		) }>
			{ tabs.map((tab) => (
				<li
					key={ tab }
					className={ cx(
						"flex",
						"items-center",
						"justify-center",
						"rounded-full",
						"text-center",
						tabsModel === tab && "border border-secondary-alt-600 bg-white text-secondary-500",

					) }
				>
					<label className={ cx(
						"flex",
						"items-center",
						"cursor-pointer",
						"px-md",
						"py-xxs"
					) }>
						<input className={ cx(
							"absolute",
							"appearance-none"
						) }
						type="radio"
						value={ tab }
						checked={ tabsModel === tab }
						onChange={ ()=> onTabChange(tab) }>
						</input>

						<span className={ cx(
							"font-bold",
							"text-xs"
						) }>
							{ tab }
						</span>

					</label>

				</li>
			)) }
		</ul>
	);
};
