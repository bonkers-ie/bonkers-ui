import React, {
	createContext,
	useContext,
	useState,
	useRef,
	useEffect,
} from "react";
import { ENavStepKind, type INavigationStepContext, type INavSubStep } from "./_types";
import cx from "classnames";
import styles from "./UiNavigationSteps.module.css";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";

const NavigationStepContext = createContext<INavigationStepContext | null>(null);

export const UiNavigationSteps: React.FC<{
	initialStepId: string;
	kind?: ENavStepKind;
	children: React.ReactNode;
	className?: string;
	completeIcon?: IconProp;
}> = ({ initialStepId, children, kind = ENavStepKind.DEFAULT, className, completeIcon: completedIcon }) => {

	const [currentStepId, setCurrentStepId] = useState(initialStepId);
	const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set());
	const orderCounter = useRef(0);
	const stepOrderMap = useRef<Map<string, number>>(new Map());
	const substepProgressMap = useRef<Map<string, { current: number; total: number }>>(new Map());
	const parentStepMap = useRef<Map<string, string>>(new Map());

	const registerStep = (id: string, hasSubsteps: boolean) => {
		if (!stepOrderMap.current.has(id)) {
			orderCounter.current += 1;
			stepOrderMap.current.set(id, orderCounter.current);

			if (hasSubsteps) {
				substepProgressMap.current.set(id, {
					current: 0,
					total: 0
				});
			}
		}
	};

	const registerSubstep = (parentId: string, substepId: string) => {
		parentStepMap.current.set(substepId, parentId);
	};

	const getStepOrder = () => {
		return stepOrderMap.current;
	};

	const setStepComplete = (id: string) => {
		setCompletedSteps((prev) => {
			const newSet = new Set(prev);
			newSet.add(id);
			return newSet;
		});
	};

	const navigateToStep = (id: string) => {
		if (stepOrderMap.current.has(id)) {
			const currentOrder = stepOrderMap.current.get(id)!;
			markPreviousStepsComplete(currentOrder);
			setCurrentStepId(id);
		} else if (parentStepMap.current.has(id)) {
			const parentId = parentStepMap.current.get(id)!;
			if (stepOrderMap.current.has(parentId)) {
				const currentOrder = stepOrderMap.current.get(parentId)!;
				markPreviousStepsComplete(currentOrder);
				setCurrentStepId(id);
			}
		}
	};

	const getSubstepProgress = (id: string): { current: number; total: number } | null => {
		return substepProgressMap.current.get(id) || null;
	};

	const updateSubstepProgress = (stepId: string, substepId: string, subSteps: INavSubStep[] = []) => {
		if (subSteps.length > 0) {
			subSteps.forEach(sub => {
				registerSubstep(stepId, sub.id);
			});

			const current = subSteps.findIndex(sub => sub.id === substepId) + 1;
			const total = subSteps.length;

			if (current > 0) {
				substepProgressMap.current.set(stepId, {
					current,
					total
				});
			}
		}
	};

	const markPreviousStepsComplete = (currentOrder: number) => {
		setCompletedSteps(prev => {
			const newSet = new Set(prev);
			stepOrderMap.current.forEach((order, id) => {
				if (order < currentOrder) {
					newSet.add(id);
				}
			});
			return newSet;
		});
	};

	useEffect(() => {
		if (stepOrderMap.current.size > 0) {
			if (parentStepMap.current.has(currentStepId)) {
				const parentId = parentStepMap.current.get(currentStepId)!;
				if (stepOrderMap.current.has(parentId)) {
					const currentOrder = stepOrderMap.current.get(parentId)!;
					markPreviousStepsComplete(currentOrder);
				}
			} else if (stepOrderMap.current.has(currentStepId)) {
				const currentOrder = stepOrderMap.current.get(currentStepId)!;
				markPreviousStepsComplete(currentOrder);
			}
		}
	}, [currentStepId]);

	const contextValue: INavigationStepContext = {
		currentStepId,
		registerStep,
		getStepOrder,
		setStepComplete,
		navigateToStep,
		getSubstepProgress,
		updateSubstepProgress,
		completedSteps,
		completedIcon,
		kind
	};

	return (
		<NavigationStepContext.Provider value={ contextValue }>
			<nav aria-label="Progress" className={ cx("relative grid grid-cols-1 grid-rows-1 items-center", styles, className ) }>
				<div className="z-10 flex items-center justify-between">
					{ children }
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
