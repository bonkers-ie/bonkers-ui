import type { FC, ReactNode } from "react";
import { EColors, ETypographySizes, UiTypography } from "../UiTypography";
import cx from "classnames";
import { EInputKind } from "./_types";

export type TUiInputStatusMessageProps = {
	children: ReactNode;
	kind?: EInputKind;
	className?: string;
	size?: ETypographySizes
}

const statusMessageKind = {
	[EInputKind.DEFAULT]: EColors.BLACK,
	[EInputKind.SUCCESS]: EColors.PRIMARY,
	[EInputKind.WARNING]: EColors.WARNING,
	[EInputKind.ERROR]: EColors.ERROR
};

export const UiInputStatusMessage: FC<TUiInputStatusMessageProps> = ({
	children,
	kind,
	className,
	size = ETypographySizes.SM
}) => {
	return (
		<UiTypography
			className={ cx(
				"transition-all duration-300 ease-in-out",
				"mt-xxs max-h-0 gap-xxs overflow-hidden opacity-0",
				"data-[status=true]:max-h-full data-[status=true]:opacity-100",
				className
			) }
			lineHeight
			color={ kind
				? statusMessageKind[kind]
				: undefined }
			size={ size }
			data-status={ !!children }
		>
			{ children }
		</UiTypography>
	);
};
