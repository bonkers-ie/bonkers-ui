import React from "react";
import cx from "classnames";
import { UiRadio } from "../UiRadio";

export type TUiPlainRadio = {
	children?: React.ReactNode
	disabled?: boolean;
	subHeader?: string;
	value: string;
	name: string;
	className?: string
	checked?: boolean
	onChange: (value: string) => void;

} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "checked" | "value" | "name">;

export const UiPlainRadio: React.FC<TUiPlainRadio> = ({
	children,
	disabled,
	subHeader,
	value,
	name,
	checked = false,
	className,
	onChange

}) => {

	return (
		<label className={ cx(
			"ui-radio-fancy",
			"relative",
			{
				"pointer-events-none opacity-50": disabled
			},
			className
		) }
		htmlFor={ name + value }
		>
			<input className={ cx(
				" absolute",
				"appearance-none",
				"peer/plain-radio",
			) }
			id={ name + value }
			type="radio"
			value={ value }
			checked={ checked }
			onChange={ () => onChange(value) }
			/>

			<div className={ cx(
				"box-border",
				"size-full",
				"cursor-pointer",
				"rounded-xl",
				"border border-secondary-alt-600",
				"peer-checked/plain-radio:border-primary-600",
				"peer-checked/plain-radio:outline",
				"peer-checked/plain-radio:outline",
				"peer-checked/plain-radio:outline-primary-600",
				"peer-hover/plain-radio:peer-checked/plain-radio:outline-primary-700",
				"bg-white",
				"peer-active/plain-radio:bg-secondary-alt-200",
				"p-sm",
				"peer-hover/plain-radio:border-primary-700",
				"peer-focus/plain-radio:shadow-border-primary",
				"flex",
				"items-center",
				"gap-sm",
				"text-sm",
				{
					"border-secondary-alt-400": disabled && !checked,
					"border-primary-300": disabled && checked,
					"border-secondary-alt-600": !disabled && !checked,
					"border-primary-600": !disabled && checked
				}

			) }
			>

				<UiRadio
					id={ `ui-plain-radio-${name}-${value}` }
					className="pointer-events-none"
					disabled={ disabled }
					value={ value }
					name={ name }
					onChange={ () => onChange(value) }
					checked={ checked }
					tabIndex={ -1 }
				/>

				<div className="flex flex-col">
					{ children }
					<div className="text-xs font-normal text-secondary-alt-400">{ subHeader }</div>
				</div>

			</div>

		</label>

	);
};
