import { default as React } from '../../../node_modules/react';
import { EListItemSpacing } from './_types';
interface IUiListItemProps {
    children: React.ReactNode;
    className?: string;
    prefix?: React.ReactNode;
    space?: EListItemSpacing;
}
export declare const UiListItem: React.FC<IUiListItemProps>;
export {};
