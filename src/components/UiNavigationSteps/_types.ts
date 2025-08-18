export enum ENavStepStatus {
	COMPLETE = "complete",
	ACTIVE = "active",
	INACTIVE = "inactive",
}

export enum ENavStepKind {
	DEFAULT = "default",
	COMPACT = "compact",
}

export interface INavSubStep {
	id: string;
	name: string;
}

export interface INavigationStepContext {
	currentStepId: string;
	registerStep: (id: string, hasSubsteps: boolean) => number;
	setStepComplete: (id: string) => void;
	navigateToStep: (id: string) => void;
	getSubstepProgress: (id: string) => { current: number; total: number } | null;
	updateSubstepProgress: (stepId: string, substepId: string, subSteps?: INavSubStep[]) => void;
	kind?: ENavStepKind;
	completeSteps: Set<string>;
}

export interface INavStepProps {
	id: string;
	name: string;
	subSteps?: INavSubStep[];
	displaySubstepName?: boolean;
	className?: string;
	onClick?: () => void;
}
