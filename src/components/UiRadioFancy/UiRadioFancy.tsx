import React from "react";
import cx from "classnames";
import { UiIcon } from "../UiIcon";
import { ESize } from "../../_types/sizing";
import { type IconProp } from "@fortawesome/fontawesome-svg-core";
import { ERadioTypes } from "./_types";

export type TUiRadioFancy = {
	children: React.ReactNode
	icon?: IconProp
	disabled?: boolean;
	active?: boolean;
	subHeader?: string;
	className?: string;
	radioType?: ERadioTypes;
	value: string;
	onChange: (value: string) => void;

} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "checked" | "value" | "name">;

const typeClasses = {
	[ERadioTypes.DEFAULT]: "items-center",
	[ERadioTypes.COMPACT]: "items-start flex-col"
};

export const UiRadioFancy: React.FC<TUiRadioFancy> = ({
	children,
	icon,
	disabled,
	subHeader,
	active,
	radioType = ERadioTypes.DEFAULT,
	value,
	onChange,
	className

}) => {
	return (
		<label className={ cx(
			"ui-radio-fancy",
			"relative",
			{
				"pointer-events-none": disabled
			},
			className
		) }>
			<input className="group peer absolute appearance-none" type="radio" checked={ active } onChange={ ()=> onChange(value) }/>

			<div className={ cx(
				"box-border",
				"cursor-pointer",
				"rounded-lg",
				"border",
				"bg-white",
				"p-sm",
				"hover:border-secondary-alt-700",
				"peer-focus:outline",
				"peer-focus:outline-4",
				"peer-focus:outline-primary-300",
				"peer-checked:shadow-border-primary-600",
				"peer-checked:border-0",
				"active:peer-checked:bg-secondary-alt-200",
				"hover:peer-checked:shadow-border-primary-700",
				"flex",
				"gap-sm",
				"text-sm",
				active
					? "peer-focus:outline-offset-2"
					: "peer-focus:outline-offset-0",
				disabled
					? "peer-checked:shadow-border-primary-disabled border-secondary-alt-400 text-secondary-alt-500"
					: "border-secondary-alt-600",

				typeClasses[radioType],

			) }>
				<div className={ cx(
					"relative",
					"grid",
					"size-fit",
					"rounded-full",
					"place-items-center",
					"text-white",
					"p-xxs",
					{
						"bg-primary-300": disabled,
						"bg-primary": !disabled
					}

				) }
				>

					{
						icon
							? <UiIcon
								name={ icon }
								size={ ESize.SM }
							/>
							: null
					}

				</div>

				<div className="flex flex-col">
					{ children }
					<div className="text-xs font-normal text-secondary-alt-400">{ subHeader }</div>
				</div>

			</div>

		</label>

	);
};
