import React from "react";
import cx from "classnames";
import styles from "./UiRadio.module.css";
import { EJustify } from "../../_types/align";
import { ERadioSize } from "./_types";

export type TUiRadioProps = {
	children?: React.ReactNode;
	name: string;
	value: string;
	invertOrder?: boolean;
	justify?: EJustify;
	disabled?: boolean;
	checked?: boolean;
	size?: ERadioSize;
	onChange: (value: string) => void;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "checked" | "value" | "name" | "size">;

const justificationClasses = {
	[EJustify.START]: "justify-start",
	[EJustify.END]: "justify-end",
	[EJustify.CENTER]: "justify-center",
	[EJustify.BETWEEN]: "justify-between",
	[EJustify.AROUND]: "justify-around",
	[EJustify.EVENLY]: "justify-evenly"
};

const sizeClasses = {
	[ERadioSize.DEFAULT]: {
		radioRing: "size-md",
	},
	[ERadioSize.SMALL]: {
		radioRing: "size-smd",
	},
	[ERadioSize.EXTRA_SMALL]: {
		radioRing: "size-sm",
	},
};

export const UiRadio: React.FC<TUiRadioProps> = ({
	id,
	name,
	value,
	invertOrder = false,
	size = ERadioSize.DEFAULT,
	justify = EJustify.START,
	disabled = false,
	onChange,
	checked = false,
	children,
	className,
	...rest
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
				{ ...rest }
				id={ id || `${name}-${value}` }
				name={ name.toString() }
				type="radio"
				value={ value }
				disabled={ disabled }
				checked={ checked }
				onChange={ handleChange }
				className="peer absolute appearance-none"
			/>
			<span className={ cx(
				styles.UiRadio__custom,
				invertOrder && "order-last",
				"block",
				sizeClasses[size].radioRing,
				"peer-focus:ring-1",
				"peer-focus:ring-offset-2",
				"peer-focus:ring-primary-600",
				"peer-focus:ring-offset-white",
				"rounded-full",
				"border",
				"border-secondary-alt",
				"bg-white",
				"inset-ring-12",
				"inset-ring-white",
				"group-hover:border-secondary-alt-700",
				"group-hover:peer-not-checked:bg-secondary-alt-200",
				"group-hover:peer-not-checked:inset-ring-secondary-alt-200",
				"group-focus:border-secondary-alt-700",
				"peer-checked:border-2",
				"peer-checked:border-primary-600",
				"peer-checked:bg-primary-600",
				"peer-checked:inset-ring-2",
				"group-hover:peer-checked:border-primary-700",
				"group-hover:peer-checked:bg-primary-700",
				"active:peer-checked:border-primary-800",
				"active:peer-checked:bg-primary-800",
				"peer-disabled:border-secondary-alt-400",
				"peer-disabled:bg-secondary-alt-200",
				"peer-disabled:inset-ring-secondary-alt-200",
				className,
			) } />
			{ children }
		</label>
	);
};
