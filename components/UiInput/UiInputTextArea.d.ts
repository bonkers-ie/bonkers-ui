import { EInputKind } from './_types';
import { FC, ReactNode, TextareaHTMLAttributes } from '../../../node_modules/react';
type TUiInputTextAreaProps = {
    id: string;
    kind?: EInputKind;
    statusMessage?: ReactNode;
    postIcon?: ReactNode;
    preIcon?: ReactNode;
    className?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;
export declare const UiInputTextArea: FC<TUiInputTextAreaProps>;
export {};
