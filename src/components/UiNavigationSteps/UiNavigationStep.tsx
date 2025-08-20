import React, { useEffect  } from "react";
import cx from "classnames";
import { ENavStepStatus, type INavStepProps } from "./_types";
import { ETextWeight, ETypographySizes, UiTypography } from "../UiTypography";
import { useStepNav } from "./UiNavigationSteps";
import { UiIcon } from "../UiIcon";
import { ESize } from "../../_types/sizing.ts";

function getStepClasses(status: ENavStepStatus, isClickable: boolean, isActive: boolean) {
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
		&& "border-secondary-400 bg-secondary-400 text-white",
		status === ENavStepStatus.ACTIVE
		&& "border-secondary-400 bg-secondary-alt-200 text-secondary-400",
		status === ENavStepStatus.INACTIVE
		&& "border-secondary-alt-500 bg-white text-secondary-alt-500",
		isActive && "h-md px-xs py-xxs",
		!isActive && "size-md",
	);
}

export const UiNavigationStep: React.FC<INavStepProps> = ({
	id,
	name,
	subSteps = [],
	displaySubstepName = false,
	className = "",
	onClick,
}) => {
	const {
		currentStepId,
		registerStep,
		navigateToStep,
		getSubstepProgress,
		updateSubstepProgress,
		getStepOrder,
		completedSteps,
		completedIcon,
	} = useStepNav();

	const hasSubsteps = subSteps.length > 0;
	const progress = getSubstepProgress(id);
	const isSubstepActive = subSteps.some(sub => sub.id === currentStepId);
	const isStepComplete = completedSteps.has(id);
	const isActive = currentStepId === id || isSubstepActive;

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

	const displayName = displaySubstepName && isSubstepActive
		? subSteps.find(sub => sub.id === currentStepId)?.name || name
		: name;

	const progressText = hasSubsteps
		? isStepComplete
			? ` ${subSteps.length}/${subSteps.length}`
			: ` ${progress?.current || 1}/${progress?.total || subSteps.length}`
		: null;

	return (
		<div
			className="flex flex-col gap-xxs md:flex-row md:items-center"
		>
			<button
				onClick={ handleClick }
				aria-current={ status === ENavStepStatus.ACTIVE
					? "step"
					: undefined }
				aria-disabled={ !isClickable }
				disabled={ !isClickable }
				className={ cx(getStepClasses(status, isClickable, isActive), className) }
			>
				<UiTypography
					className="flex place-items-center gap-xxs"
					lineHeight
					weight={ status !== ENavStepStatus.COMPLETE
						? ETextWeight.SEMI_BOLD
						: ETextWeight.REGULAR }
					size={ ETypographySizes.XS }
				>
					{ status === ENavStepStatus.COMPLETE
						? (
							<UiIcon className="text-white" name={ completedIcon || ["far", "face-smile"] } size={ ESize.XS }/>
						)
						: (
							<UiTypography
								tag="span"
								size={ ETypographySizes.SM }
							>
								{ getStepOrder().get(id) || 0 }
							</UiTypography>
						) }
					{

						<UiTypography className={ cx("text-xxs md:text-sm", {
							"hidden md:inline": !isActive,
						}) } tag="span">
							{ displayName }
							{ progressText }
						</UiTypography>

					}
				</UiTypography>

			</button>
		</div>
	);
};
