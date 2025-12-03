import { default as React } from '../../../node_modules/react';
import { EInputKind, EInputSize } from './_types.ts';
export declare const UiInputText: React.ForwardRefExoticComponent<{
    id: string;
    kind?: EInputKind;
    statusMessage?: string | React.ReactElement;
    title?: React.ReactNode;
    subtitle?: React.ReactNode;
    infoComponent?: React.ReactNode;
} & {
    id: string;
    postIcon?: React.ReactNode;
    preIcon?: React.ReactNode;
    kind?: EInputKind;
    className?: string;
    size?: EInputSize;
} & React.InputHTMLAttributes<HTMLInputElement> & React.RefAttributes<HTMLInputElement>>;
