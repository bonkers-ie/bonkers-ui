import { default as React } from '../../../node_modules/react';
import { EBadgeOffset, EBadgeSizes, EBadgeTypes } from './_types';
type UiNotificationBadge = {
    offset?: EBadgeOffset;
    children: React.ReactNode;
    kind?: EBadgeTypes;
    size?: EBadgeSizes;
};
export declare const UiNotificationBadge: React.FC<UiNotificationBadge>;
export {};
