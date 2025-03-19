import { default as React } from '../../../node_modules/react';
import { EBadgeOffset, EBadgeSizes, EBadgeTypes } from './_types';
type TUiNotificationBadge = {
    offset?: EBadgeOffset;
    children: React.ReactNode;
    kind?: EBadgeTypes;
    size?: EBadgeSizes;
    className?: string;
};
export declare const UiNotificationBadge: React.FC<TUiNotificationBadge>;
export {};
