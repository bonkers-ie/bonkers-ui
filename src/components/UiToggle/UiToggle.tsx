import React, { useEffect, useState } from "react";
import cx from "classnames";
import styles from "./UiToggle.module.css";

type TUiToggleProps = {
	children?: React.ReactNode
	disabled?: boolean
	invertOrder?: boolean
	defaultChecked?: boolean
	checked?: boolean
	value?: boolean
	onChange?: (checked: boolean) => void
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">;

export const UiToggle: React.FC<TUiToggleProps> = ({
	children,
	disabled = false,
	invertOrder = false,
	checked,
	value,
	defaultChecked,
	onChange,
	...rest
}) => {

	const [toggled, setIsToggled] = useState<boolean>(defaultChecked ??  false);

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
							"bg-primary-600": isChecked && !disabled,
							"bg-secondary-alt-300": !isChecked && disabled,
							"bg-secondary-alt-600": !isChecked && !disabled,
							"bg-primary-300": isChecked && disabled

						}
					) }/>

					<span className={ cx(
						"absolute",
						"top-[50%]",
						"block",
						"rounded-full",
						"bg-white",
						styles.UiToggle__dot,
						{
							"hover:shadow-border-secondary": !isChecked && !disabled,
							"hover:shadow-border-primary": isChecked && !disabled,
							[styles.UiToggle__dot_checked]: isChecked
						},

					) }>

						<svg
							className={ cx(
								styles.UiToggle__icon,
								"absolute",
								disabled ? "text-primary-300" : "text-primary-600",
								{
									[styles.UiToggle__icon_checked]: isChecked ,
								}

							) }
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M1 4.40106L6.60071 10.1135L15.1694 1.71245"
								stroke="currentColor"
								stroke-width="1.6"
								stroke-linecap="round"
							/>
						</svg>

					</span>
				</span>

				{ children }

			</label>

		</div>
	);
};
