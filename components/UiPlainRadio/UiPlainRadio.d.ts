import { default as React } from '../../../node_modules/react';
import { EPlainRadioSize } from './_types';
export type TUiPlainRadio = {
    children?: React.ReactNode;
    disabled?: boolean;
    subHeader?: string;
    value: string;
    name: string;
    className?: string;
    checked?: boolean;
    size?: EPlainRadioSize;
    onChange: (value: string) => void;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "checked" | "value" | "name" | "size">;
export declare const UiPlainRadio: React.FC<TUiPlainRadio>;
