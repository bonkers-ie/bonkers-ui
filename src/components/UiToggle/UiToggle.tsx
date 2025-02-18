import React, { useEffect, useState } from "react";
import cx from "classnames";

type TUiToggleProps = {
	title?:  React.ReactNode
	children?: React.ReactNode
	disabled?: boolean
	invertOrder?: boolean
	defaultValue?: boolean;
	defaultChecked?: boolean
	checked?: boolean
	value?: boolean
	onChange?: (checked: boolean) => void
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">;

export const UiToggle: React.FC<TUiToggleProps> = ({
	children,
	title,
	disabled = false,
	invertOrder = false,
	checked,
	value,
	defaultChecked,
	defaultValue,
	onChange,
	...rest
}) => {

	const [toggled, setIsToggled] = useState<boolean>(defaultChecked ?? defaultValue ?? false);

	const isChecked = value ?? checked ?? toggled;

	const handleChange = () => {
		if (value === undefined && checked === undefined) {
			setIsToggled(!toggled);
		}

		onChange?.(!isChecked);
	};

	useEffect(()=>{
		if ( checked !== undefined) {
			setIsToggled(checked);
		}
	}, [checked]);

	return (
		<div className={ cx(
			"ui-toggle"
		) }
		>

			<span className={ cx("font-bold") }>
				{ title }
			</span>

			<label className={ cx(
				"flex",
				"cursor-pointer",
				"gap-sm",
				"rounded-full",
				"mt-sm",
				"items-center",
				"w-full",
				"leading-normal",
				"text-md",
				{
					"flex-row-reverse": invertOrder,
					"pointer-events-none opacity-50": disabled
				}

			) }>
				<span className={ cx(
					"relative",
					"block",
					"h-md"
				) }>

					<input className={ cx(
						"absolute",
						"size-0",
						"appearance-none",
						"border-0"
					) }
					type="checkbox"
					checked={ isChecked }
					onChange={ handleChange }
					disabled={ disabled }
					value={ value }
					{ ...rest }
					>
					</input>

					<span className={ cx(
						"block",
						"h-md",
						"w-xl",
						"rounded-full",
						{
							"bg-primary-500": isChecked && !disabled,
							"bg-secondary-alt-300": !isChecked && disabled,
							"bg-secondary-alt-600": !isChecked && !disabled,
							"bg-primary-300": isChecked && disabled

						}
					) }>

					</span>
					<span className={ cx(
						"absolute",
						"top-[50%]",
						"block",
						"rounded-full",
						"bg-white",
						"w-[22px]",
						"h-[22px]",
						"translate-x-[1px]",
						"translate-y-[-50%]",
						"ease-in-out",
						"transition-transform",
						"active:shadow-border-secondary",
						"focus:shadow-border-secondary",
						{
							"hover:shadow-border-secondary": !isChecked && !disabled,
							"hover:shadow-border-primary": isChecked && !disabled,
							"translate-x-[calc(var(--xl)_-_100%_-_1px)] translate-y-[-50%]": isChecked
						},

					) }>
					</span>
				</span>

				{ children }

			</label>

		</div>
	);
};
