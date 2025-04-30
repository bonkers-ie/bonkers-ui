import { default as React } from '../../../node_modules/react';
import { EJustify } from '../../_types/align';
type TUiToggleProps = {
    children?: React.ReactNode;
    disabled?: boolean;
    invertOrder?: boolean;
    justify?: EJustify;
    defaultChecked?: boolean;
    checked?: boolean;
    value?: boolean;
    onChange?: (checked: boolean) => void;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">;
export declare const UiToggle: React.FC<TUiToggleProps>;
export {};
