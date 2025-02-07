import React  from "react";
import cx from "classnames";
import { ESnackbarTypes } from "./_types";
import { EButtonSizes, EButtonTypes, UiButton } from "../UiButton";

type UiSnackbarProps ={
	kind?: ESnackbarTypes;
	title: React.ReactNode;
	children: React.ReactNode;

}

const kindClasses = {
	[ESnackbarTypes.DEFAULT]: `
		bg-white
		text-secondary-700

	`,
	[ESnackbarTypes.PRIMARY]: `
		bg-primary-600
		text-white
	`,
	[ESnackbarTypes.WARNING]: `
		bg-warning
		text-white
	`,
	[ESnackbarTypes.ERROR]: `
		bg-error
		text-white
	`,
	[ESnackbarTypes.SECONDARY]: `
		bg-secondary
		text-white
	`,

};

export const UiSnackbar: React.FC<UiSnackbarProps> = ({

	kind= ESnackbarTypes.SECONDARY,
	title,
	children

}) => {

	return (
		<>

			<div
				className={ cx(
					"ui-snackbar",
					"flex",
					"w-full",
					"rounded-xxs",
					"items-center",
					"justify-between",
					"shadow-md",
					"p-sm",
					"flex-row-reverse",
					"text-sm",
					kindClasses[kind]
				) }
			>
				<UiButton
					kind={ EButtonTypes.LINK }
					size={ EButtonSizes.SMALL }
					style={ {
						color: kind === ESnackbarTypes.DEFAULT ? "black" : "white",
						fontWeight: "normal",
					} }
				>
					{ children }
				</UiButton>

				{ title }
			</div>

		</>
	);
};
