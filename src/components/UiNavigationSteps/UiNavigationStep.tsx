import React, { useEffect } from "react";
import cx from "classnames";
import { ENavStepStatus, type INavStepProps } from "./_types";
import { ETextWeight, ETypographySizes, UiTypography } from "../UiTypography";
import { useStepNav } from "./UiNavigationSteps";
import styles from "./UiNavigationSteps.module.css";

function getStepClasses(status: ENavStepStatus, isClickable: boolean) {
	return cx(
		`
			flex
			transform
			items-center
			justify-center
			rounded-full
			border
			text-secondary-400
			md:h-xl
			md:w-full
			md:px-xs
			md:py-xxs
			lg:px-sm
		`,
		!isClickable && "bg-secondary-400",
		isClickable && "cursor-pointer",
		status === ENavStepStatus.COMPLETE
		&& "size-sm border-secondary-400 bg-secondary-400 p-xs text-white",
		status === ENavStepStatus.ACTIVE
		&& "border-secondary-400 bg-secondary-alt-200 px-xs py-xxs text-secondary-400",
		status === ENavStepStatus.INACTIVE
		&& "size-sm border-secondary-alt-500 bg-white p-xs text-secondary-alt-500",
	);
}

export const UiNavigationStep: React.FC<INavStepProps> = ({
	id,
	name,
	subSteps = [],
	className = "",
	onClick,
	order = 1,
	isActive = false,
	isComplete = false,
	icon
}) => {
	const { currentStepId, updateSubstepProgress, registerStep } = useStepNav();
	const isSubstepActive = subSteps.some((subStep) => subStep.id === currentStepId);
	const hasSubsteps = subSteps.length > 0;

	useEffect(() => {
		registerStep(id, hasSubsteps);

		if (hasSubsteps) {
			updateSubstepProgress(id, currentStepId, subSteps);
		}
	}, [id, hasSubsteps, subSteps, currentStepId, updateSubstepProgress]);

	const status = !isComplete && (isActive || isSubstepActive)
		? ENavStepStatus.ACTIVE
		: isComplete
			? ENavStepStatus.COMPLETE
			: ENavStepStatus.INACTIVE;

	const handleClick = () => {
		if (status !== ENavStepStatus.INACTIVE) {
			onClick?.();
		}
	};

	const isClickable = status !== ENavStepStatus.INACTIVE;

	const progressText = hasSubsteps
		? isComplete
			? ` ${subSteps.length}/${subSteps.length}`
			: isSubstepActive
				? ` ${subSteps.findIndex((step) => step.id === currentStepId) + 1}/${subSteps.length}`
				: ` ${order}/${subSteps.length}`
		: null;

	return (
		<div
			className={ cx("flex flex-col gap-xxs md:flex-row md:items-center", {
				[styles.active]: status === ENavStepStatus.ACTIVE,
			},
			) }
		>
			<button
				onClick={ handleClick }
				aria-current={ status === ENavStepStatus.ACTIVE
					? "step"
					: undefined }
				aria-disabled={ !isClickable }
				disabled={ !isClickable }
				className={ cx(getStepClasses(status, isClickable), className) }
			>
				<UiTypography
					className="flex place-items-center gap-xxs"
					weight={ status === ENavStepStatus.ACTIVE
						? ETextWeight.SEMI_BOLD
						: ETextWeight.REGULAR }
					lineHeight
					size={ ETypographySizes.XS }
				>
					{ status === ENavStepStatus.COMPLETE
						? icon
						: (
							<UiTypography
								className={ cx({
									"font-semibold md:font-medium": status === ENavStepStatus.INACTIVE,
								}) }
								tag="span"
								size={ ETypographySizes.SM }
							>
								{  order }
							</UiTypography>
						) }
					{

						<span
							className={ cx("text-xxs text-nowrap md:text-xs", {
								"hidden md:inline": status !== ENavStepStatus.ACTIVE,
							}) }
						>
							{ name }
							{ progressText }
						</span>

					}
				</UiTypography>

			</button>
		</div>
	);
};
