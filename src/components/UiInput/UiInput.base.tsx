import React from "react";
import { UiTypography } from "../UiTypography";
import { EInputKind } from "./_types";
import cx from "classnames";

export type TUiInputBaseProps = {
	id: string;
	postIcon?: React.ReactNode;
	preIcon?: React.ReactNode;
	kind?: EInputKind;
	className?: string;
	active?: boolean;

} & React.InputHTMLAttributes<HTMLInputElement>;

export const UiInputBase: React.FC<
	TUiInputBaseProps
> = ({ postIcon, preIcon, className, active, kind = EInputKind.DEFAULT, ...rest } ) => {

	const stateClasses = {
		[EInputKind.DEFAULT]: "border-secondary-alt-600",
		[EInputKind.ERROR]: "border-error",
		[EInputKind.SUCCESS]: "border-primary-600",
	};

	return (
		<UiTypography
			tag="label"
			htmlFor={ rest.id }
			className={
				cx(
					"ui-input-wrapper",
					"flex flex-row items-center gap-sm rounded-xl border p-sm",
					"hover:border-secondary-alt-700",
					"focus-within:outline-2",
					"focus-within:outline-primary-300",
					active
						? "ring ring-secondary-alt-700"
						: "ring-0",
					kind && stateClasses[kind],
					kind && stateClasses[kind],
					{
						"bg-white": !rest.disabled,
						"border-secondary-alt-300 bg-secondary-alt-200": rest.disabled,
					},
					className
				)
			}
		>
			{ preIcon
				? preIcon
				: null }
			<input
				className={ cx("border-0 flex-1 bg-transparent outline-hidden placeholder:text-secondary-alt-600 w-full") }
				{ ...rest }
			/>

			{ postIcon
				? postIcon
				: null }

		</UiTypography>
	);
};
