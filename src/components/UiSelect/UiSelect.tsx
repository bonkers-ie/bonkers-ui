import React from "react";
import cx from "classnames";
import { UiTypography, ETypographySizes, EColors } from "../UiTypography";
import styles from "./UiSelect.module.css";
import { EInputKind } from "../UiInput";

type TSelectProps = {
	heading?: string
	subLabel?: string;
	disabled?: boolean;
	value?: string | number | readonly string[];
	placeholder?: string;
	preIcon?: React.ReactNode;
	className?: string;
	kind?: EInputKind;
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
	preIcon,
	statusMessage,
	kind,
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
				{ preIcon
					? <div className="flex items-center pl-sm">{ preIcon }</div>
					: null }
				<select
					{ ...rest }
					className={ cx(
						"m-0 w-full cursor-pointer appearance-none border-0 bg-transparent text-secondary-alt outline-0",
						preIcon
							? "p-0 py-sm pr-xl"
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
					<UiTypography
						className={ cx(
							"transition-all duration-300 ease-in-out",
							"mt-xxs max-h-0 gap-xxs overflow-hidden opacity-0",
							"data-[status=true]:max-h-full data-[status=true]:opacity-100"
						) }
						lineHeight
						color={
							kind === EInputKind.ERROR
								? EColors.ERROR
								: kind === EInputKind.WARNING
									? EColors.WARNING_500
									: EColors.PRIMARY
						}
						size={ ETypographySizes.SM }
						data-status={ !!statusMessage }
					>
						{ statusMessage }
					</UiTypography>
				)
				: null }
		</div>
	);
};
