import React, {
	createContext,
	useContext,
	useState,
	useRef,
	useEffect,
} from "react";
import { type INavStepProps, type INavigationStepContext, type INavSubStep } from "./_types";
import cx from "classnames";
import styles from "./UiNavigationSteps.module.css";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";

const NavigationStepContext = createContext<INavigationStepContext | null>(null);

interface INavigationStepData {
	order: number;
	hasSubsteps: boolean;
	progress?: {
		current: number;
		total: number;
	};
}

interface INavigationProviderState {
	steps: Map<string, INavigationStepData>;
	parentMap: Map<string, string>;
}

export const UiNavigationSteps: React.FC<{
	initialStepId: string;
	children: React.ReactNode;
	className?: string;
	completedIcon?: IconProp;
	complete?: boolean
}> = ({ initialStepId, children, className, completedIcon, complete = false }) => {
	const orderCounter = useRef(0);
	const [currentStepOrder, setCurrentStepOrder] = useState<number>(0);
	const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set());

	const navigationState = useRef<INavigationProviderState>({
		steps: new Map(),
		parentMap: new Map(),
	});

	const registerStep = (id: string, hasSubsteps: boolean) => {
		if (!navigationState.current.steps.has(id)) {
			orderCounter.current += 1;
			navigationState.current.steps.set(id, {
				order: orderCounter.current,
				hasSubsteps,
				progress: hasSubsteps
					? {
						current: 0,
						total: 0
					}
					: undefined
			});
		}
	};

	const navigateToStep = (id: string) => {
		const { steps, parentMap } = navigationState.current;
		let targetOrder: number | null = null;

		if (steps.has(id)) {
			targetOrder = steps.get(id)!.order;
		} else if (parentMap.has(id)) {
			const parentId = parentMap.get(id)!;
			if (steps.has(parentId)) {
				targetOrder = steps.get(parentId)!.order;
			}
		}

		if (targetOrder !== null) {
			if (targetOrder < currentStepOrder) {
				markSubsequentStepsIncomplete(targetOrder);
			}

			markPreviousStepsComplete(targetOrder);

			setCurrentStepOrder(targetOrder);
		}
	};

	const updateSubstepProgress = (stepId: string, substepId: string, subSteps: INavSubStep[] = []) => {
		if (subSteps.length > 0) {
			subSteps.forEach(sub => {
				navigationState.current.parentMap.set(sub.id, stepId);
			});

			const current = subSteps.findIndex(sub => sub.id === substepId) + 1;
			const total = subSteps.length;

			if (current > 0) {
				const stepData = navigationState.current.steps.get(stepId);
				if (stepData) {
					navigationState.current.steps.set(stepId, {
						...stepData,
						progress: {
							current,
							total
						}
					});
				}
			}
		}
	};

	const markSubsequentStepsIncomplete = (targetOrder: number) => {
		setCompletedSteps(prev => {
			const newSet = new Set(prev);
			navigationState.current.steps.forEach((data, id) => {
				if (data.order > targetOrder) {
					newSet.delete(id);
				}
			});
			return newSet;
		});
	};

	const markPreviousStepsComplete = (targetOrder: number) => {
		if (!complete) {
			setCompletedSteps(prev => {
				const newSet = new Set(prev);
				navigationState.current.steps.forEach((data, id) => {
					if (data.order < targetOrder) {
						newSet.add(id);
					} else if (data.order === targetOrder) {
						newSet.delete(id);
					}
				});
				return newSet;
			});
		} else {
			setCompletedSteps(new Set(navigationState.current.steps.keys()));
		}
	};

	useEffect(() => {
		const { steps, parentMap } = navigationState.current;

		if (steps.size > 0) {
			let targetStepId = initialStepId;

			if (parentMap.has(initialStepId)) {
				const parentId = parentMap.get(initialStepId);
				if (parentId && steps.has(parentId)) {
					targetStepId = parentId;
				}
			}

			if (complete) {
				setCompletedSteps(new Set(steps.keys()));
			} else {
				setCompletedSteps(new Set());
			}

			if (steps.has(targetStepId)) {
				navigateToStep(targetStepId);
			}
		}
	}, [initialStepId, complete]);

	const contextValue: INavigationStepContext = {
		currentStepId: initialStepId,
		registerStep,
		navigateToStep,
		updateSubstepProgress,
		completedSteps,
	};

	const isStepActive = (id: string) => {
		return id === initialStepId
			|| navigationState.current.parentMap.get(initialStepId) === id;
	};

	const isStepComplete = (id: string) => {
		return completedSteps.has(id);
	};

	const childWithProps = React.Children.map(children, (child, index) => {
		if (React.isValidElement<INavStepProps>(child)) {
			const stepData = navigationState.current.steps.get(child.props.id);
			const totalSteps = navigationState.current.steps.size;

			return React.cloneElement(child, {
				icon: completedIcon,
				order: stepData?.order || index + 1,
				totalSteps,
				isActive: isStepActive(child.props.id),
				isComplete: isStepComplete(child.props.id),
			});
		}
		return child;
	});

	return (
		<NavigationStepContext.Provider value={ contextValue }>
			<nav aria-label="Progress" className={ cx("relative grid grid-cols-1 grid-rows-1 items-center", styles.navbar, className) }>
				<div className="z-10 flex items-center justify-between">
					{ childWithProps }
				</div>
			</nav>
		</NavigationStepContext.Provider>
	);
};

export const useStepNav = () => {
	const context = useContext(NavigationStepContext);
	if (!context) {
		throw new Error("useStepNav must be used within a UiNavigationStepsProvider");
	}
	return context;
};
