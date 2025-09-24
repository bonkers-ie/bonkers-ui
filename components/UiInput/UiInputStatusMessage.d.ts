import { FC, ReactNode } from '../../../node_modules/react';
import { ETypographySizes } from '../UiTypography';
import { EInputKind } from './_types';
export type TUiInputStatusMessageProps = {
    children: ReactNode;
    kind?: EInputKind;
    className?: string;
    size?: ETypographySizes;
};
export declare const UiInputStatusMessage: FC<TUiInputStatusMessageProps>;
