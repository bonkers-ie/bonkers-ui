import React from "react";
import { UiInputBase } from "./UiInput.base.tsx";
import { UiInputTitled } from "./UiInputTitled.tsx";
import { EInputKind } from "./_types.ts";
import { EColors, ETypographySizes, UiTypography } from "../UiTypography/index.ts";
import cx from "classnames";

type TUiInputTextProps = {
	id: string;
	kind?: EInputKind;
	statusMessage?: string | Element;
	title?: React.ReactNode;
	subtitle?: React.ReactNode;
	infoComponent?: React.ReactNode;
} & React.InputHTMLAttributes<HTMLInputElement>;

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
							"max-h-0 opacity-0 overflow-hidden gap-xxs mt-xxs",
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
