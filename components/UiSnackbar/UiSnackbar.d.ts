import { default as React } from '../../../node_modules/react';
import { ESnackbarTypes } from './_types';
type UiSnackbarProps = {
    kind?: ESnackbarTypes;
    title: React.ReactNode;
    children: React.ReactNode;
    className?: string;
};
export declare const UiSnackbar: React.FC<UiSnackbarProps>;
export {};
