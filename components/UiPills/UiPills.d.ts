import { default as React } from '../../../node_modules/react';
import { EBadgeKind, EBadgeSize } from './_types.ts';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
interface IUiPills {
    children: React.ReactNode;
    kind?: EBadgeKind;
    size?: EBadgeSize;
    icon?: IconProp;
    rounded?: boolean;
    justifyCenter?: boolean;
    fullWidth?: boolean;
    className?: string;
}
export declare const UiPills: React.FC<IUiPills>;
export {};
