import React from "react";
import { UiInputBase, type TUiInputBaseProps } from "./UiInput.base.tsx";
import { UiInputTitled } from "./UiInputTitled.tsx";
import { EInputKind } from "./_types.ts";
import { UiInputStatusMessage } from "./UiInputStatusMessage.tsx";

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
			<UiInputBase kind={ kind } { ...rest } />
			{ statusMessage
				? (
					<UiInputStatusMessage
						kind={ kind }
					>
						{ statusMessage }
					</UiInputStatusMessage>
				)
				: null }
		</UiInputTitled>
	);
};
