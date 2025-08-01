import React from "react";
import { UiInputBase, type TUiInputBaseProps } from "./UiInput.base.tsx";
import { UiInputTitled } from "./UiInputTitled.tsx";
import { EInputKind } from "./_types.ts";
import { EColors, ETypographySizes, UiTypography } from "../UiTypography/index.ts";
import cx from "classnames";

type TUiInputTextProps = {
	id: string;
	kind?: EInputKind;
	statusMessage?: string | React.ReactElement;
	title?: React.ReactNode;
	subtitle?: React.ReactNode;
	infoComponent?: React.ReactNode;
} & TUiInputBaseProps;

export const UiInputText: React.FC<TUiInputTextProps> = ({
	kind,
	title,
	infoComponent,
	subtitle,
	statusMessage,
	...rest
}) => {
	return (
		<UiInputTitled title={ title } subtitle={ subtitle } infoComponent={ infoComponent } >
			<UiInputBase kind={ kind } { ...rest }/>
			{ statusMessage
				? (
					<UiTypography
						className={ cx(
							"transition-all duration-300 ease-in-out",
							"mt-xxs max-h-0 gap-xxs overflow-hidden opacity-0",
							"data-[status=true]:max-h-full data-[status=true]:opacity-100"
						) }
						lineHeight
						color={
							kind === EInputKind.ERROR
								? EColors.ERROR
								: EColors.PRIMARY
						}
						size={ ETypographySizes.SM }
						data-status={ !!statusMessage }
					>
						{ statusMessage }
					</UiTypography>
				)
				: null }

		</UiInputTitled>
	);
};
