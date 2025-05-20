import React from "react";
import cx from "classnames";

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
			"ui-plain-radio",
			"relative",
			"group",
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
				"peer",
			) }
			id={ name + value }
			type="radio"
			value={ value }
			checked={ checked }
			onChange={ () => onChange(value) }
			/>

			<div className={ cx(
				"bg-white",
				"box-border",
				"cursor-pointer",
				"flex",
				"gap-sm",
				"items-center",
				"p-sm",
				"peer-active:bg-secondary-alt-200",
				"peer-active:ring-primary-800",
				"peer-focus-within:outline-offset-4",
				"peer-focus:outline-2",
				"peer-focus:peer-checked:outline-primary-600",
				"peer-hover:ring-primary-700",
				"ring",
				"rounded-xl",
				"size-full",
				"text-sm",
				{
					"peer-checked:ring-primary-600 peer-checked:outline peer-checked:outline-primary-600": !disabled,
					"peer-disabled:peer-checked:ring-secondary-alt-300 ": disabled,
					"ring-secondary-alt-300": disabled,
					"ring-secondary-alt-600 hover:ring-secondary-500": !disabled && !checked,
					"ring-primary-600 ": !disabled,
					"ring-2": checked
				}

			) }
			>

				<span className={ cx(
					"bg-white",
					"group-active:ring-primary-800",
					"group-hover:ring-primary-700",
					"pointer-events-none",
					"relative",
					"ring",
					"rounded-full",
					"size-md",
					{
						"ring-secondary-alt-300": disabled,
						"ring-2": checked,
						"ring-secondary-alt-600 group-hover:ring-secondary-500  group-active:ring-secondary-500": !disabled && !checked,
						"ring-primary-600": !disabled
					}

				) }>
					<span
						className={ cx(
							"absolute",
							"block",
							"group-active:bg-primary-800",
							"group-hover:bg-primary-700",
							"left-xxs",
							"pointer-events-none",
							"rounded-full",
							"size-xxs",
							"top-xxs",
							{

								"bg-secondary-alt-300": disabled && checked,
								"bg-white group-hover:bg-white group-active:bg-white": !disabled && !checked,
								"bg-primary-600": !disabled && checked
							}

						) }/>

				</span>

				<div className="flex flex-col">
					{ children }
					<div className="text-xs font-normal text-secondary-alt-400">{ subHeader }</div>
				</div>

			</div>

		</label>

	);
};
