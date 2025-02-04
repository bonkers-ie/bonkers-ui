import React  from "react";
import cx from "classnames";
import { ESnackbarTypes } from "./_types";
import { EButtonSizes, EButtonTypes, UiButton } from "../UiButton";

type UiSnackbarProps ={
	kind?: ESnackbarTypes;
	children: React.ReactNode;
	open?: boolean;

}

const kindClasses = {
	[ESnackbarTypes.DEFAULT]: `
		bg-white

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

	kind= ESnackbarTypes.DEFAULT,
	children,
	open = true
}) => {

	const [isOpen, setIsOpen] = React.useState(open);
	const handleClick = () => {
		setIsOpen(false);
		console.log("open");
	};

	const handleClose = () => {
		setIsOpen(true);
		console.log("closed");
	};

	return (
		<>
			{ isOpen && (
				<UiButton
					kind={ EButtonTypes.SECONDARY_OVERLAY }
					size={ EButtonSizes.MEDIUM }
					onClick={ handleClick }
				>
					Open Snackbar
				</UiButton>
			) }

			{ !isOpen && (
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
						onClick={ handleClose }
					>
						Text
					</UiButton>

					{ children }
				</div>
			) }
		</>
	);
};
