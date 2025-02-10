import { default as React } from '../../../node_modules/react';
type TUiToggleProps = {
    title?: React.ReactNode;
    children?: React.ReactNode;
    disabled?: boolean;
    invertOrder?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;
export declare const UiToggle: React.FC<TUiToggleProps>;
export {};
