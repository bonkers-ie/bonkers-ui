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
	registerStep: (id: string, hasSubsteps: boolean) => void;
	getStepOrder: () => Map<string, number>;
	setStepComplete: (id: string) => void;
	navigateToStep: (id: string) => void;
	getSubstepProgress: (id: string) => { current: number; total: number } | null;
	updateSubstepProgress: (stepId: string, substepId: string, subSteps?: INavSubStep[]) => void;
	completedSteps: Set<string>;
}

export interface INavStepProps {
	id: string;
	name: string;
	subSteps?: INavSubStep[];
	className?: string;
	onClick?: () => void;
	icon?: IconProp;
}
