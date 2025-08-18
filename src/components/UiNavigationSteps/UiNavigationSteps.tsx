import React, {
	createContext,
	useContext,
	useState,
	useCallback,
	useRef,
	useEffect,
} from "react";
import { ENavStepKind, type INavigationStepContext, type INavSubStep } from "./_types";
import cx from "classnames";
import styles from "./UiNavigationSteps.module.css";

const NavigationStepContext = createContext<INavigationStepContext | null>(null);

export const UiNavigationSteps: React.FC<{
	initialStepId: string;
	kind?: ENavStepKind;
	children: React.ReactNode;
}> = ({ initialStepId, children, kind = ENavStepKind.DEFAULT }) => {

	const [currentStepId, setCurrentStepId] = useState(initialStepId);
	const [completeSteps, setCompleteSteps] = useState<Set<string>>(new Set());
	const orderCounter = useRef(0);
	const stepOrders = useRef<Map<string, number>>(new Map());
	const substepProgress = useRef<Map<string, { current: number; total: number }>>(new Map());

	const registerStep = (id: string, hasSubsteps: boolean): number => {
		if (!stepOrders.current.has(id)) {
			orderCounter.current += 1;
			stepOrders.current.set(id, orderCounter.current);

			if (hasSubsteps) {
				substepProgress.current.set(id, {
					current: 0,
					total: 0
				});
			}
			return orderCounter.current;
		}
		return stepOrders.current.get(id)!;
	};

	const setStepComplete = (id: string) => {
		setCompleteSteps((prev) => {
			const newSet = new Set(prev);
			newSet.add(id);
			console.log("STEPS COMPLETE", newSet);
			return newSet;
		});
	};

	const navigateToStep = useCallback((id: string) => {
		if (stepOrders.current.has(id)) {
			const currentOrder = stepOrders.current.get(id)!;
			markPreviousStepsComplete(currentOrder);
			setCurrentStepId(id);
		}
	}, []);

	const getSubstepProgress = (id: string): { current: number; total: number } | null => {
		return substepProgress.current.get(id) || null;
	};

	const updateSubstepProgress = (stepId: string, substepId: string, subSteps: INavSubStep[] = []) => {
		if (subSteps.length > 0) {
			const current = subSteps.findIndex(sub => sub.id === substepId) + 1;
			const total = subSteps.length;

			if (current > 0) {
				substepProgress.current.set(stepId, {
					current,
					total
				});
			}
		}
	};

	const markPreviousStepsComplete = (currentOrder: number) => {
		setCompleteSteps(prev => {
			const newSet = new Set(prev);
			stepOrders.current.forEach((order, id) => {
				if (order < currentOrder) {
					newSet.add(id);
				}
			});
			return newSet;
		});
	};

	useEffect(() => {
		if (stepOrders.current.size > 0) {
			const currentOrder = stepOrders.current.get(currentStepId);
			if (currentOrder) {
				markPreviousStepsComplete(currentOrder);
			}
		}
	}, [currentStepId]);

	const contextValue: INavigationStepContext = {
		currentStepId,
		registerStep,
		setStepComplete,
		navigateToStep,
		getSubstepProgress,
		updateSubstepProgress,
		completeSteps,
		kind
	};

	return (
		<NavigationStepContext.Provider value={ contextValue }>
			<nav aria-label="Progress" className={ cx("grid grid-cols-1 grid-rows-1 items-center", styles ) }>
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
