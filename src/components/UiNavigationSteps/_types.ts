import type { IconProp } from "@fortawesome/fontawesome-svg-core";

export enum ENavStepStatus {
	COMPLETE = "complete",
	ACTIVE = "active",
	INACTIVE = "inactive",
}

export interface INavSubStep {
	id: string;
	name: string;
}

export interface INavigationStepContext {
	currentStepId: string;
	completedSteps: Set<string>;
	navigateToStep: (id: string) => void;
	registerStep: (id: string, hasSubsteps: boolean) => void;
	updateSubstepProgress: (stepId: string, substepId: string, subSteps: INavSubStep[]) => void;
}

export interface INavStepProps {
	id: string;
	name: string;
	subSteps?: INavSubStep[];
	className?: string;
	onClick?: () => void;
	icon?: IconProp;
	order?: number;
	totalSteps?: number;
	isActive?: boolean;
	isComplete?: boolean;
}
