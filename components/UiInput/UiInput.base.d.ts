import { default as React } from '../../../node_modules/react';
import { EInputKind, EInputSize } from './_types';
export type TUiInputBaseProps = {
    id: string;
    postIcon?: React.ReactNode;
    preIcon?: React.ReactNode;
    kind?: EInputKind;
    className?: string;
    size?: EInputSize;
} & React.InputHTMLAttributes<HTMLInputElement>;
export declare const UiInputBase: React.ForwardRefExoticComponent<{
    id: string;
    postIcon?: React.ReactNode;
    preIcon?: React.ReactNode;
    kind?: EInputKind;
    className?: string;
    size?: EInputSize;
} & React.InputHTMLAttributes<HTMLInputElement> & React.RefAttributes<HTMLInputElement>>;
