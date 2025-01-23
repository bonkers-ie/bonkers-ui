import React from "react";
import { UiInputBase } from "./UiInput.base.tsx";
import { UiInputTitled } from "./UiInputTitled.tsx";
import { EInputState } from "./_types.ts";
import { EColors, ETypographySizes, UiTypography } from "../UiTypography/index.ts";
import cx from "classnames";

type TUiInputTextProps = {
	id: string;
	state?: EInputState;
	statusMessage?: string;
	title?: React.ReactNode;
	subtitle?: React.ReactNode;
	infoComponent?: React.ReactNode;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const UiInputText: React.FC<TUiInputTextProps> = ({
	state,
	title,
	infoComponent,
	subtitle,
	statusMessage,
	...rest
}) => {
	return (
		<UiInputTitled title={ title } subtitle={ subtitle } infoComponent={ infoComponent } >
			{ statusMessage
				? (
					<UiTypography
						className={ cx(
							"mb-xxs",
							"transition-all duration-300 ease-in-out",
							"max-h-0 opacity-0 overflow-hidden",
							"data-[status=true]:max-h-lg data-[status=true]:opacity-100"
						) }
						lineHeight
						color={
							state === EInputState.ERROR ? EColors.ERROR : EColors.PRIMARY
						}
						size={ ETypographySizes.SM }
						data-status={ !!statusMessage }
					>
						{ statusMessage }
					</UiTypography>
				)
				: null }
			<UiInputBase state={ state } { ...rest }/>
		</UiInputTitled>
	);
};
