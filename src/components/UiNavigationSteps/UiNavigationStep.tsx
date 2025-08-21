import React, { useEffect  } from "react";
import cx from "classnames";
import { ENavStepStatus, type INavStepProps } from "./_types";
import { ETypographySizes, UiTypography } from "../UiTypography";
import { useStepNav } from "./UiNavigationSteps";
import { UiIcon } from "../UiIcon";
import { ESize } from "../../_types/sizing.ts";
import styles from "./UiNavigationSteps.module.css";

function getStepClasses(status: ENavStepStatus, isClickable: boolean) {
	return cx(
		`
			flex
			items-center
			justify-center
			rounded-full
			border
			text-secondary-400
			transition-all
			duration-150
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
	icon
}) => {
	const {
		currentStepId,
		registerStep,
		navigateToStep,
		getSubstepProgress,
		updateSubstepProgress,
		getStepOrder,
		completedSteps,
	} = useStepNav();

	const hasSubsteps = subSteps.length > 0;
	const progress = getSubstepProgress(id);
	const isSubstepActive = subSteps.some(sub => sub.id === currentStepId);
	const isStepComplete = completedSteps.has(id);

	useEffect(() => {
		registerStep(id, hasSubsteps);

		if (hasSubsteps) {
			updateSubstepProgress(id, currentStepId, subSteps);
		}
	}, [id, hasSubsteps, subSteps, currentStepId]);

	const status = currentStepId === id || isSubstepActive
		? ENavStepStatus.ACTIVE
		: isStepComplete
			? ENavStepStatus.COMPLETE
			: ENavStepStatus.INACTIVE;

	const isClickable = status !== ENavStepStatus.INACTIVE;

	const handleClick = () => {
		if (isClickable) {
			onClick?.();
			navigateToStep(id);
		}
	};

	const progressText = hasSubsteps
		? isStepComplete
			? ` ${subSteps.length}/${subSteps.length}`
			: ` ${progress?.current || 1}/${progress?.total || subSteps.length}`
		: null;

	const calculateWidth = () => {
		const order = getStepOrder().get(id) || 0;
		const total = getStepOrder().size + 1;
		return order / total * 100;
	};

	return (
		<div
			style={ status === ENavStepStatus.ACTIVE
				? ({
					"--step-width": `${calculateWidth()}%`
				} as React.CSSProperties)
				: {} }
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
					className={ cx("flex place-items-center gap-xxs",
						{
							"font-bold": status === ENavStepStatus.ACTIVE,
							"font-medium": status !== ENavStepStatus.ACTIVE,
						}
					) }
					lineHeight
					size={ ETypographySizes.XS }
				>
					{ status === ENavStepStatus.COMPLETE
						? (
							<UiIcon className="text-white" name={ icon || ["far", "face-smile"] } size={ ESize.XS }/>
						)
						: (
							<UiTypography
								className={ cx({
									"font-semibold md:font-medium": status === ENavStepStatus.INACTIVE,
								}) }
								tag="span"
								size={ ETypographySizes.SM }
							>
								{ getStepOrder().get(id) || 0 }
							</UiTypography>
						) }
					{

						<UiTypography
							className={ cx("text-xxs text-nowrap md:text-xs", {
								"hidden md:inline": status !== ENavStepStatus.ACTIVE,
							}) }
							tag="span"
						>
							{ name }
							{ progressText }
						</UiTypography>

					}
				</UiTypography>

			</button>
		</div>
	);
};
