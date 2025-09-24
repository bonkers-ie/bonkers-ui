import { default as React } from '../../../node_modules/react';
import { ESnackbarDuration, ESnackbarTypes } from './_types';
type UiSnackbarProps = {
    id: string;
    kind?: ESnackbarTypes;
    preIcon?: React.ReactNode;
    postIcon?: React.ReactNode;
    title: React.ReactNode;
    children?: React.ReactNode;
    className?: string;
    duration?: ESnackbarDuration;
    pauseOnHover?: boolean;
    isDismissed?: boolean;
    onClickAction?: () => void;
    onDismissAction?: (id: string) => void;
};
export declare const UiSnackbar: React.FC<UiSnackbarProps>;
export {};
