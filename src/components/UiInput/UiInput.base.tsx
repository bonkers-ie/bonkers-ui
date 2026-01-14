import React from "react";
import { UiTypography } from "../UiTypography";
import { EInputKind, EInputSize } from "./_types";
import cx from "classnames";

export type TUiInputBaseProps = {
	id: string;
	postIcon?: React.ReactNode;
	preIcon?: React.ReactNode;
	kind?: EInputKind;
	className?: string;
	size?: EInputSize;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const UiInputBase = React.forwardRef<HTMLInputElement, TUiInputBaseProps>(
	({ postIcon, preIcon, className, kind = EInputKind.DEFAULT, size = EInputSize.MEDIUM, ...rest }, ref) => {

		const stateClasses = {
			[EInputKind.DEFAULT]: "border-secondary-alt-600",
			[EInputKind.ERROR]: "border-error",
			[EInputKind.SUCCESS]: "border-primary-600",
			[EInputKind.WARNING]: "border-warning-600"
		};

		return (
			<UiTypography
				tag="label"
				htmlFor={ rest.id }
				className={
					cx(
						"ui-input-wrapper",
						"flex flex-row items-center gap-sm rounded-xl border",
						"focus-within:outline-4",
						"focus-within:outline-primary-300",
						"focus-within:ring-secondary-alt-700 active:ring",
						kind && !rest.disabled && stateClasses[kind],
						{
							"bg-white hover:border-secondary-alt-700": !rest.disabled,
							"border-secondary-alt-300 bg-secondary-alt-200": rest.disabled,
						},
						className,
						size === EInputSize.SMALL && "px-xs py-xxs",
						size === EInputSize.MEDIUM && "p-sm"
					)
				}
			>
				{ preIcon
					? preIcon
					: null }
				<input
					ref={ ref }
					className={ cx("w-full bg-transparent outline-hidden placeholder:text-secondary-alt-600") }
					{ ...rest }
				/>

				{ postIcon
					? postIcon
					: null }

			</UiTypography>
		);
	});
