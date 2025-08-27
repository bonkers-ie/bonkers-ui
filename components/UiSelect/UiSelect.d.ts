import { default as React } from '../../../node_modules/react';
import { EInputKind } from '../UiInput';
type TSelectProps = {
    heading?: string;
    subLabel?: string;
    disabled?: boolean;
    value?: string | number | readonly string[];
    placeholder?: string;
    prefixIcon?: React.ReactNode;
    postfixIcon?: React.ReactNode;
    className?: string;
    kind?: EInputKind;
    statusMessage?: string | React.ReactElement;
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
} & React.SelectHTMLAttributes<HTMLSelectElement>;
export declare const UiSelect: React.FC<TSelectProps>;
export {};
