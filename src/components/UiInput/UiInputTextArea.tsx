import { UiTypography } from "../UiTypography";
import { EInputKind } from "./_types";
import cx from "classnames";
import { UiInputStatusMessage } from "./UiInputStatusMessage";
import type { FC, ReactNode, TextareaHTMLAttributes } from "react";

type TUiInputTextAreaProps = {
	id: string;
	kind?: EInputKind;
	statusMessage?: ReactNode;
	postIcon?: ReactNode;
	preIcon?: ReactNode;
	className?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

const stateClasses = {
	[EInputKind.DEFAULT]: "border-secondary-alt-600",
	[EInputKind.ERROR]: "border-error",
	[EInputKind.SUCCESS]: "border-primary-600",
	[EInputKind.WARNING]: "border-warning-600"
};

export const UiInputTextArea: FC<TUiInputTextAreaProps> = ({
	id,
	placeholder,
	className,
	kind,
	preIcon,
	postIcon,
	statusMessage,
	...rest
}) => {
	return (
		<>
			<UiTypography
				tag="label"
				htmlFor={ id }
				className={
					cx(
						"ui-text-area-wrapper",
						"flex flex-row items-center gap-sm rounded-xl border p-xs",
						"hover:border-secondary-alt-700",
						"focus-within:outline-4",
						"focus-within:outline-primary-300",
						"focus-within:ring-secondary-alt-700 active:ring",
						kind && stateClasses[kind],
						{
							"bg-white": !rest.disabled,
							"border-secondary-alt-300 bg-secondary-alt-200": rest.disabled,
						},
						className
					)
				}
			>
				{ preIcon
					? preIcon
					: null }
				<textarea
					id={ id }
					className={ cx(`
                        min-h-xxl
                        w-full
                        resize-y
                    `) }
					rows={ 3 }
					onKeyDown={ (e) => {
						if (e.key === "Enter") {
							e.stopPropagation();
						}
					} }
					placeholder={ placeholder }
					{ ...rest }
				/>
				{ postIcon
					? postIcon
					: null }
			</UiTypography>
			{
				statusMessage
					? (
						<UiInputStatusMessage
							kind={ kind }
						>
							{ statusMessage }
						</UiInputStatusMessage>
					)
					: null
			}
		</>
	);
};
