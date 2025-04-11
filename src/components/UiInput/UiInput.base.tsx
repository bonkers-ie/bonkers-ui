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

} & React.InputHTMLAttributes<HTMLInputElement>;

export const UiInputBase: React.FC<
	TUiInputBaseProps
> = ({ postIcon, preIcon, className, kind = EInputKind.DEFAULT, ...rest } ) => {

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
					"focus-within:outline-4",
					"focus-within:outline-primary-300",
					"active:ring focus-within:ring-secondary-alt-700",
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
				className={ cx("bg-transparent outline-hidden placeholder:text-secondary-alt-600 w-full") }
				{ ...rest }
			/>

			{ postIcon
				? postIcon
				: null }

		</UiTypography>
	);
};
