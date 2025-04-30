import React from "react";
import cx from "classnames";
import styles from "./UiRadio.module.css";
import { EJustify } from "../../_types/align";

export type TUiRadioProps = {
	children?: React.ReactNode;
	name: string;
	value: string;
	invertOrder?: boolean;
	justify?: EJustify;
	disabled?: boolean;
	checked?: boolean;
	onChange: (value: string) => void;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "checked" | "value" | "name">;

const justificationClasses = {
	[EJustify.START]: "justify-start",
	[EJustify.END]: "justify-end",
	[EJustify.CENTER]: "justify-center",
	[EJustify.BETWEEN]: "justify-between",
	[EJustify.AROUND]: "justify-around",
	[EJustify.EVENLY]: "justify-evenly"
};

export const UiRadio: React.FC<TUiRadioProps> = ({
	id,
	name,
	value,
	invertOrder = false,
	justify = EJustify.START,
	disabled = false,
	onChange,
	checked = false,
	children,
	className,
	tabIndex
}) => {

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (!disabled && onChange) {
			onChange(event.target.value);
		}
	};

	return (
		<label className={
			cx("UiRadio",
				"group",
				"grid",
				"grid-flow-col",
				"cursor-pointer",
				justificationClasses[justify],
				{
					"pointer-events-none": disabled,
					"items-center gap-xxs": children
				}
			) }>
			<input
				id={ id || `${name}-${value}` }
				name={ name.toString() }
				type="radio"
				value={ value }
				disabled={ disabled }
				checked={ checked }
				onChange={ handleChange }
				className="peer absolute appearance-none"
				tabIndex={ tabIndex }
			/>
			<span className={ cx(
				styles.UiRadio__custom,
				invertOrder && "order-last",
				"relative",
				"block",
				"size-md",
				"rounded-full",
				"border",
				"border-secondary-alt",
				"bg-white",
				"group-hover:border-secondary-alt-700",
				"group-focus:border-secondary-alt-700",
				"peer-checked:border-2",
				"peer-checked:border-primary",
				"hover:peer-checked:border-primary-600",
				"active:peer-checked:border-primary-800",
				"peer-focus:shadow-border-primary",
				"peer-disabled:border-secondary-alt-400",
				"peer-disabled:bg-secondary-alt-200",
				className,
			) }>
				<span className={ cx(
					styles.UiRadio__dot,
					"absolute",
					"left-2/4",
					"top-2/4",
					"block",
					"size-xxs",
					"rounded-full",
					"bg-primary",
				) } />
			</span>
			{ children }
		</label>
	);
};
