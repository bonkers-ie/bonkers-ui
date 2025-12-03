
import React from "react";
import { EAlertTypes } from "./_types";
import cx from "classnames";
import { UiIcon } from "../UiIcon";
import { ESize } from "../../_types/sizing";
import { type IconProp } from "@fortawesome/fontawesome-svg-core";

interface IUiAlert {
	children: React.ReactNode;
	className?: string;
	kind?: EAlertTypes;
	icon?: IconProp;
	noBorder?: boolean;
}

const kindClasses = {
	[EAlertTypes.PRIMARY]: "border-primary ",
	[EAlertTypes.SECONDARY]: "border-secondary",
	[EAlertTypes.ERROR]: "border-error",
	[EAlertTypes.WARNING]: "border-warning"
};

const iconKindClasses = {
	[EAlertTypes.PRIMARY]: "text-primary",
	[EAlertTypes.SECONDARY]: "text-secondary",
	[EAlertTypes.ERROR]: "text-error",
	[EAlertTypes.WARNING]: "text-warning"
};

export const UiAlert: React.FC<IUiAlert> = ({
	children,
	kind = EAlertTypes.PRIMARY,
	className,
	icon,
	noBorder = false
}) => {
	return (
		<div className={ cx(
			"ui-alert",
			"flex",
			"gap-sm",
			noBorder
				? "border-0"
				: "rounded-xl border bg-white p-sm",
			"leading-normal",
			"text-xs",
			kindClasses[kind],
			className
		) }>

			{ icon
				? <UiIcon
					className={ cx(iconKindClasses[kind], "h-lh align-middle") }
					name={ icon }
					size={ ESize.SM }
				/>
				: null }
			{ children }
		</div>
	);
};
