import { default as React } from '../../../node_modules/react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { ERadioTypes } from './_types';
export type TUiRadioFancy = {
    children: React.ReactNode;
    icon?: IconProp;
    disabled?: boolean;
    active?: boolean;
    subHeader?: string;
    radioType?: ERadioTypes;
    value: string;
    onChange: (value: string) => void;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "checked" | "value" | "name">;
export declare const UiRadioFancy: React.FC<TUiRadioFancy>;
