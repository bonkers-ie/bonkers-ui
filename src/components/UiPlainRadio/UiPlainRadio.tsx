import React from "react";
import cx from "classnames";
import { EPlainRadioSize } from "./_types";

export type TUiPlainRadio = {
	children?: React.ReactNode
	disabled?: boolean;
	subHeader?: string;
	value: string;
	name: string;
	className?: string
	checked?: boolean;
	size?: EPlainRadioSize;
	onChange: (value: string) => void;

} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "checked" | "value" | "name" | "size">;

export const UiPlainRadio: React.FC<TUiPlainRadio> = ({
	id,
	children,
	disabled,
	subHeader,
	value,
	name,
	checked = false,
	size = EPlainRadioSize.DEFAULT,
	className,
	onChange,
	...rest

}) => {

	const sizeClasses = {
		[EPlainRadioSize.DEFAULT]: "py-xs px-sm",
		[EPlainRadioSize.SMALL]: "py-xxs px-xs"
	};

	return (
		<label className={ cx(
			"ui-plain-radio",
			"relative",
			"group",
			{
				"pointer-events-none": disabled
			},
			className
		) }
		>
			<input className={ cx(
				"absolute",
				"appearance-none",
				"peer",
			) }
			id={ id  || `${name}-${value}` }
			type="radio"
			name={ name }
			value={ value }
			disabled={ disabled }
			checked={ checked }
			onChange={ () => onChange(value) }
			{ ...rest }
			/>

			<div className={ cx(
				"bg-white",
				"box-border",
				"cursor-pointer",
				"flex",
				"gap-sm",
				"items-center",
				sizeClasses[size],
				"peer-active:bg-secondary-alt-200",
				"peer-active:ring-primary-800",
				"peer-focus-within:outline-offset-4",
				"peer-focus:outline-2",
				"peer-focus:peer-checked:outline-primary-600",
				"peer-hover:ring-primary-700",
				"rounded-xl",
				"size-full",
				"text-sm",
				disabled
					? "ring-secondary-alt-300"
					: `
						peer-checked:ring-primary-600
						peer-checked:outline
						peer-checked:outline-primary-600
					`,
				checked
					? "ring-2"
					: "ring",
				{
					"ring-secondary-alt-600 hover:ring-secondary-500": !disabled && !checked,
				}

			) }
			>

				<span className={ cx(
					"block",
					"shrink-0",
					"group-active:ring-primary-800",
					"group-hover:ring-primary-700",
					"pointer-events-none",
					"rounded-full",
					"size-md",
					checked
						? "ring-2"
						: "ring",
					disabled
						? "ring-secondary-alt-300"
						: "ring-primary-600",
					{
						"bg-white": !checked,
						"inset-ring-4 inset-ring-white": checked,
						"bg-primary-600 group-hover:bg-primary-700 group-active:bg-primary-800": checked && !disabled,
						"bg-secondary-300": checked && disabled,
						"ring-secondary-alt-600 group-hover:ring-secondary-500 group-active:ring-secondary-500": !disabled && !checked,
					}
				) } />

				<div className={ cx("flex flex-col", disabled && "text-secondary-300") }>
					{ children }

					{
						subHeader
							? <div className={ `
								text-xs
								font-normal
								text-secondary-alt-400
							` }>{ subHeader }</div>
							: null
					}

				</div>

			</div>

		</label>

	);
};
