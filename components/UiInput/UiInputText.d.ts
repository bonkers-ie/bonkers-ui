import { default as React } from '../../../node_modules/react';
import { TUiInputBaseProps } from './UiInput.base.tsx';
import { EInputKind } from './_types.ts';
type TUiInputTextProps = {
    id: string;
    kind?: EInputKind;
    statusMessage?: string | React.ReactElement;
    title?: React.ReactNode;
    subtitle?: React.ReactNode;
    infoComponent?: React.ReactNode;
} & TUiInputBaseProps;
export declare const UiInputText: React.FC<TUiInputTextProps>;
export {};
