import { default as React } from '../../../node_modules/react';
import { INavigationStepContext } from './_types';
export declare const UiNavigationSteps: React.FC<{
    initialStepId: string;
    children: React.ReactNode;
    className?: string;
    complete?: boolean;
}>;
export declare const useStepNav: () => INavigationStepContext;
