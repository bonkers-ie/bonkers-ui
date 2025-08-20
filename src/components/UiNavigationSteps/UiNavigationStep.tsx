import React, { useEffect  } from "react";
import cx from "classnames";
import { ENavStepKind, ENavStepStatus, type INavStepProps } from "./_types";
import { ETextWeight, ETypographySizes, UiTypography } from "../UiTypography";
import { useStepNav } from "./UiNavigationSteps";
import { UiIcon } from "../UiIcon";
import { ESize } from "../../_types/sizing.ts";

function getStepClasses(status: ENavStepStatus, isClickable: boolean, kind: ENavStepKind) {
	return cx(
		"flex items-center rounded-full border transition-all duration-150",
		!isClickable && "bg-secondary-400",
		isClickable && "cursor-pointer",
		status === ENavStepStatus.COMPLETE
		&& "border-secondary-400 bg-secondary-400 text-white",
		status === ENavStepStatus.ACTIVE
		&& "border-secondary-400 bg-secondary-alt-200 text-secondary-400",
		status === ENavStepStatus.INACTIVE
		&& "border-secondary-alt-500 bg-white text-secondary-alt-500",
		kind === ENavStepKind.COMPACT
			? "size-md justify-center text-secondary-400"
			: "w-full px-md py-xs",
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
		kind,
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
			className={
				cx(kind === ENavStepKind.COMPACT
					? "flex flex-col gap-xxs"
					: "flex flex-row items-center")
			}>
			<button
				onClick={ handleClick }
				aria-current={ status === ENavStepStatus.ACTIVE
					? "step"
					: undefined }
				aria-disabled={ !isClickable }
				disabled={ !isClickable }
				className={ cx(getStepClasses(status, isClickable, kind || ENavStepKind.DEFAULT), className) }
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
						kind === ENavStepKind.DEFAULT
							? <UiTypography tag="span">
								{ displayName }
								{ progressText }
							</UiTypography>
							: null
					}
				</UiTypography>
			</button>
			{
				kind === ENavStepKind.COMPACT && (
					<UiTypography
						className={ cx("fixed top-1/3",{
							"text-secondary-400": status === ENavStepStatus.ACTIVE,
							"text-secondary-alt-500": status === ENavStepStatus.INACTIVE,
						}) }
						tag="span"
						size={ ETypographySizes.XS }>
						{ displayName }
						{ progressText }
					</UiTypography>
				)
			}
		</div>
	);
};
