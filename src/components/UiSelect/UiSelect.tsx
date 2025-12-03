import React from "react";
import cx from "classnames";
import { UiTypography, ETypographySizes, EColors } from "../UiTypography";
import styles from "./UiSelect.module.css";
import { EInputKind, UiInputStatusMessage } from "../UiInput";
import { ESelectSize } from "./_types";

type TSelectProps = {
	heading?: string
	subLabel?: string;
	disabled?: boolean;
	value?: string | number | readonly string[];
	placeholder?: string;
	prefixIcon?: React.ReactNode;
	postfixIcon?: React.ReactNode;
	className?: string;
	kind?: EInputKind;
	size?: ESelectSize;
	statusMessage?: string | React.ReactElement;
	onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
} & React.SelectHTMLAttributes<HTMLSelectElement>

const stateClasses = {
	[EInputKind.DEFAULT]: "border-secondary-alt-600",
	[EInputKind.ERROR]: "border-error",
	[EInputKind.SUCCESS]: "border-primary-600",
	[EInputKind.WARNING]: "border-warning-600",
};

export const UiSelect: React.FC<TSelectProps> = ({
	children,
	heading,
	subLabel,
	disabled,
	onChange,
	className,
	placeholder,
	prefixIcon,
	postfixIcon,
	statusMessage,
	kind,
	size,
	...rest
}) => {
	const [value, setValue] = React.useState(rest.value || rest.defaultValue || "");
	const handleChange = React.useCallback(
		(event: React.ChangeEvent<HTMLSelectElement>) => {
			setValue(event.target.value);
			onChange?.(event);
		},
		[onChange],
	);
	return (
		<div className={ cx("ui-select", className) }>
			{ heading
				? <UiTypography
					size={ ETypographySizes.MD }
					className="mb-xxs">
					{ heading }
				</UiTypography>
				: null
			}
			<div className={ cx(styles.UiSelect,
				"flex items-center gap-sm",
				"relative",
				"rounded-xl",
				"border",
				"hover:border-secondary-alt-600",
				disabled
					? ["pointer-events-none", "border-secondary-alt-300", "bg-secondary-alt-200"]
					: [kind && stateClasses[kind], "bg-white"]
			) }>
				{
					prefixIcon
						? <div className="flex items-center pl-sm">{ prefixIcon }</div>
						: null
				}
				<select
					{ ...rest }
					className={ cx(
						"m-0 w-full cursor-pointer appearance-none border-0 bg-transparent outline-0",
						{
							"text-secondary-alt": value === "" || !value,
							"text-black": value,

							"py-xs": size === ESelectSize.SM && prefixIcon,
							"py-sm": size === ESelectSize.MD && prefixIcon,

							"px-sm py-xs": size === ESelectSize.SM && !prefixIcon,
							"p-sm": size === ESelectSize.MD && !prefixIcon
						},
						prefixIcon
							? "p-0 pr-xl"
							: "p-sm pr-xl"
					) }
					disabled={ disabled }
					value={ value }
					onChange={ handleChange }
				>
					{ placeholder
						? <option value={ "" } disabled hidden>{ placeholder }</option>
						: null }
					{ children }
				</select>
				<div className="pointer-events-none absolute top-1/2 right-sm -translate-y-1/2">
					{ postfixIcon
						? postfixIcon
						: (<svg
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M13.25 6.8125L8.5 11.2812C8.34375 11.4375 8.15625 11.5 8 11.5C7.8125 11.5 7.625 11.4375 7.46875 11.3125L2.71875 6.8125C2.40625 6.53125 2.40625 6.0625 2.6875 5.75C2.96875 5.4375 3.4375 5.4375 3.75 5.71875L8 9.71875L12.2188 5.71875C12.5312 5.4375 13 5.4375 13.2812 5.75C13.5625 6.0625 13.5625 6.53125 13.25 6.8125Z"
								fill="currentColor"
							/>
						</svg>)
					}
				</div>
			</div>
			{ subLabel
				? (<UiTypography
					size={ ETypographySizes.SM }
					color={ EColors.SECONDARY_ALT }
					className="mt-xxs"
				>
					{ subLabel }
				</UiTypography>)
				: null
			}

			{ statusMessage
				? (
					<UiInputStatusMessage
						kind={ kind }
					>
						{ statusMessage }
					</UiInputStatusMessage>
				)
				: null }
		</div>
	);
};
