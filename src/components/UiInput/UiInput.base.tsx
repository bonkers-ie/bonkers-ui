import React from "react";
import { UiTypography } from "../UiTypography";
import { UiIcon } from "../UiIcon";
import { EInputKind, EInputSize } from "./_types";
import { ESize } from "../../_types/sizing";
import { faCircleCheck, faCircleXmark, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { type IconProp } from "@fortawesome/fontawesome-svg-core";
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

		const hoverClasses = {
			[EInputKind.DEFAULT]: "hover:border-secondary-300 hover:bg-secondary-alt-200",
			[EInputKind.SUCCESS]: "hover:border-primary-alt-700 hover:bg-primary-50",
			[EInputKind.ERROR]: "hover:border-error-500 hover:bg-error-100",
			[EInputKind.WARNING]: "hover:border-warning-600 hover:bg-warning-300"
		};

		const placeHolderClasses = {
			[EInputKind.DEFAULT]: "hover:placeholder:text-secondary-alt-600",
			[EInputKind.SUCCESS]: "hover:placeholder:text-primary-alt-700",
			[EInputKind.ERROR]: "hover:placeholder:text-error-500",
			[EInputKind.WARNING]: "hover:placeholder:text-warning-600"
		};

		const stateIcons: Partial<Record<EInputKind, IconProp>> = {
			[EInputKind.SUCCESS]: faCircleCheck,
			[EInputKind.ERROR]: faCircleXmark,
			[EInputKind.WARNING]: faTriangleExclamation
		};

		const stateIconColorClasses: Partial<Record<EInputKind, string>> = {
			[EInputKind.SUCCESS]: "text-primary-600",
			[EInputKind.ERROR]: "text-error",
			[EInputKind.WARNING]: "text-warning-600"
		};

		return (
			<UiTypography
				tag="label"
				htmlFor={ rest.id }
				className={
					cx(
						"ui-input-wrapper",
						"flex flex-row items-center gap-sm rounded-xl border",
						"focus-within:outline-2",
						"focus-within:outline-offset-2",
						"focus-within:outline-primary-600",
						"focus-within:ring-secondary-alt-700 active:ring",
						kind && !rest.disabled && stateClasses[kind] && hoverClasses[kind],
						{
							"bg-white": !rest.disabled,
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
					className={ cx("w-full bg-transparent outline-hidden placeholder:text-secondary-alt-600", placeHolderClasses[kind]) }
					{ ...rest }
				/>

				{ postIcon
					? postIcon
					: null }

				{ stateIcons[kind]
					? <UiIcon
						name={ stateIcons[kind] }
						size={ ESize.SM }
						className={ stateIconColorClasses[kind] }
					/>
					: null }

			</UiTypography>
		);
	});
