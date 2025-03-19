import { default as React } from '../../../node_modules/react';
import { EListItemDirection, EListItemSize, EListItemSpacing } from './_types.ts';
interface IUiListProps {
    children?: React.ReactNode;
    direction?: EListItemDirection;
    size?: EListItemSize;
    spacing?: EListItemSpacing;
    className?: string;
}
export declare const UiList: React.FC<IUiListProps>;
export {};
