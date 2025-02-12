import React, { useState } from "react";
import cx from "classnames";

type TUiToggleProps = {
	title?:  React.ReactNode
	children?: React.ReactNode
	disabled?: boolean
	invertOrder?: boolean
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
	onChange,
	...rest
}) => {

	const [isHovered, setIsHovered] = useState(false);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (!disabled && onChange) {
			onChange?.(event.target.checked);
		}
	};

	return (
		<div className={ cx(
			"ui-toggle"
		) }
		onMouseEnter={ () => setIsHovered(true) }
		onMouseLeave={ () => setIsHovered(false) }
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
					"pointer-events-none": disabled
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
					checked={ checked }
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
							"bg-secondary-alt-300": !checked && disabled,
							"bg-primary-500": checked && !disabled,
							"bg-primary-300": checked && disabled,
							"bg-secondary-alt": !checked && !disabled,
						}
					) }
					></span>
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
						"hover:shadow-border-secondary",
						"active:shadow-border-secondary",
						"focus:shadow-border-secondary",
						{
							"shadow-border-secondary": isHovered && !checked && !disabled,
							"shadow-border-primary": isHovered && checked && !disabled,
							"translate-x-[calc(var(--xl)_-_100%_-_1px)] translate-y-[-50%]": checked
						},

					) }>
					</span>
				</span>

				{ children }

			</label>

		</div>
	);
};
