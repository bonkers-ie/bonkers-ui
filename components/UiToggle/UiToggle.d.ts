import { default as React } from '../../../node_modules/react';
type TUiToggleProps = {
    children?: React.ReactNode;
    disabled?: boolean;
    invertOrder?: boolean;
    defaultChecked?: boolean;
    checked?: boolean;
    value?: boolean;
    onChange?: (checked: boolean) => void;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">;
export declare const UiToggle: React.FC<TUiToggleProps>;
export {};
