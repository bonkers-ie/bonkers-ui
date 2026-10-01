import { default as React } from '../../../node_modules/react';
import { EJustify } from '../../_types/align';
import { ERadioSize } from './_types';
export type TUiRadioProps = {
    children?: React.ReactNode;
    name: string;
    value: string;
    invertOrder?: boolean;
    justify?: EJustify;
    disabled?: boolean;
    checked?: boolean;
    size?: ERadioSize;
    onChange: (value: string) => void;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "checked" | "value" | "name" | "size">;
export declare const UiRadio: React.FC<TUiRadioProps>;
